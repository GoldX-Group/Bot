const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ComponentType } = require('discord.js');
const { createPoll, getPoll } = require('../../handlers/polls');
const pollConfig = require('../../config/pollConfig');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('Crea una nueva encuesta')
    .addSubcommand(subcommand =>
      subcommand
        .setName('create')
        .setDescription('Crea una nueva encuesta')
        .addStringOption(option =>
          option
            .setName('question')
            .setDescription('Pregunta de la encuesta')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('options')
            .setDescription('Opciones separadas por comas (ej: Opción 1, Opción 2, Opción 3)')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('type')
            .setDescription('Tipo de encuesta')
            .addChoices(
              { name: 'Voto único', value: 'single' },
              { name: 'Múltiples votos', value: 'multiple' },
              { name: 'Anónima', value: 'anonymous' }
            )
            .setRequired(false)
        )
        .addIntegerOption(option =>
          option
            .setName('duration')
            .setDescription('Duración en horas (0 = sin límite)')
            .setMinValue(0)
            .setMaxValue(168)
            .setRequired(false)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('results')
        .setDescription('Muestra los resultados de una encuesta')
        .addStringOption(option =>
          option
            .setName('poll_id')
            .setDescription('ID de la encuesta')
            .setRequired(false)
        )
    ),
  
  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();

    if (subcommand === 'create') {
      await handleCreate(interaction);
    } else if (subcommand === 'results') {
      await handleResults(interaction);
    }
  }
};

async function handleCreate(interaction) {
  await interaction.deferReply();

  try {
    const question = interaction.options.getString('question');
    const optionsString = interaction.options.getString('options');
    const type = interaction.options.getString('type') || 'single';
    const duration = interaction.options.getInteger('duration') || 0;

    // Parsear opciones
    const options = optionsString.split(',').map(opt => opt.trim()).filter(opt => opt.length > 0);
    
    if (options.length < 2) {
      return await interaction.editReply('❌ Debes proporcionar al menos 2 opciones separadas por comas.');
    }

    if (options.length > 10) {
      return await interaction.editReply('❌ No puedes tener más de 10 opciones en una encuesta.');
    }

    // Crear la encuesta en la base de datos
    const poll = await createPoll({
      guildId: interaction.guild.id,
      channelId: interaction.channel.id,
      authorId: interaction.user.id,
      question,
      options,
      type,
      duration,
      active: true
    });

    // Crear el embed de la encuesta
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('📊 ' + question)
      .setDescription('Vota usando las reacciones abajo')
      .addFields(
        options.map((option, index) => ({
          name: `${pollConfig.emojis[index]} ${option}`,
          value: `0 votos (0%)`,
          inline: true
        }))
      )
      .setFooter({
        text: `ID: ${poll.id} | Creada por ${interaction.user.tag} | ${type === 'anonymous' ? 'Anónima' : 'Pública'}`
      })
      .setTimestamp();

    // Enviar el mensaje de la encuesta
    const pollMessage = await interaction.channel.send({ embeds: [embed] });

    // Añadir reacciones según el tipo de encuesta
    for (let i = 0; i < options.length; i++) {
      await pollMessage.react(pollConfig.emojis[i]);
    }

    // Actualizar el mensaje de la encuesta con el ID del mensaje
    await interaction.client.prisma.poll.update({
      where: { id: poll.id },
      data: { messageId: pollMessage.id }
    });

    // Si tiene duración, programar cierre
    if (duration > 0) {
      setTimeout(async () => {
        await closePoll(poll.id, interaction.client);
      }, duration * 60 * 60 * 1000);
    }

    await interaction.editReply(`✅ Encuesta creada correctamente. ID: ${poll.id}`);

  } catch (error) {
    console.error('Error al crear encuesta:', error);
    await interaction.editReply('❌ Ocurrió un error al crear la encuesta.');
  }
}

async function handleResults(interaction) {
  await interaction.deferReply();

  try {
    const pollId = interaction.options.getString('poll_id');
    
    let poll;
    if (pollId) {
      poll = await getPoll(pollId, interaction.guild.id);
    } else {
      // Buscar la última encuesta en este canal
      poll = await interaction.client.prisma.poll.findFirst({
        where: {
          channelId: interaction.channel.id,
          guildId: interaction.guild.id
        },
        orderBy: { createdAt: 'desc' }
      });
    }

    if (!poll) {
      return await interaction.editReply('❌ No se encontró ninguna encuesta.');
    }

    // Obtener resultados
    const votes = await interaction.client.prisma.pollVote.findMany({
      where: { pollId: poll.id }
    });

    // Contar votos
    const results = poll.options.map((option, index) => {
      const optionVotes = votes.filter(vote => vote.optionIndex === index);
      return {
        option,
        votes: optionVotes.length,
        percentage: votes.length > 0 ? (optionVotes.length / votes.length) * 100 : 0
      };
    });

    // Crear embed de resultados
    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('📊 Resultados de la Encuesta')
      .setDescription(poll.question)
      .addFields(
        results.map((result, index) => ({
          name: `${pollConfig.emojis[index]} ${result.option}`,
          value: `${result.votes} votos (${result.percentage.toFixed(1)}%)`,
          inline: true
        }))
      )
      .setFooter({
        text: `ID: ${poll.id} | Total de votos: ${votes.length} | ${poll.active ? 'Activa' : 'Cerrada'}`
      })
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });

  } catch (error) {
    console.error('Error al obtener resultados:', error);
    await interaction.editReply('❌ Ocurrió un error al obtener los resultados.');
  }
}

async function closePoll(pollId, client) {
  try {
    const poll = await client.prisma.poll.findUnique({
      where: { id: pollId },
      include: { votes: true }
    });

    if (!poll || !poll.active) return;

    // Marcar como cerrada
    await client.prisma.poll.update({
      where: { id: pollId },
      data: { active: false }
    });

    // Obtener canal y mensaje
    const channel = await client.channels.fetch(poll.channelId);
    if (!channel) return;

    try {
      const pollMessage = await channel.messages.fetch(poll.messageId);
      
      // Crear embed de cierre
      const results = poll.options.map((option, index) => {
        const optionVotes = poll.votes.filter(vote => vote.optionIndex === index);
        return {
          option,
          votes: optionVotes.length,
          percentage: poll.votes.length > 0 ? (optionVotes.length / poll.votes.length) * 100 : 0
        };
      });

      const embed = new EmbedBuilder()
        .setColor('#ff9900')
        .setTitle('🔒 Encuesta Cerrada')
        .setDescription(poll.question)
        .addFields(
          results.map((result, index) => ({
            name: `${pollConfig.emojis[index]} ${result.option}`,
            value: `${result.votes} votos (${result.percentage.toFixed(1)}%)`,
            inline: true
          }))
        )
        .setFooter({
          text: `ID: ${poll.id} | Total de votos: ${poll.votes.length}`
        })
        .setTimestamp();

      await pollMessage.edit({ embeds: [embed], content: '🔒 **Esta encuesta ha sido cerrada**' });
    } catch (error) {
      console.error('Error al actualizar mensaje de encuesta cerrada:', error);
    }
  } catch (error) {
    console.error('Error al cerrar encuesta:', error);
  }
}
