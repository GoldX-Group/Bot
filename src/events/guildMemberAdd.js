const { ChannelType, EmbedBuilder, Events, PermissionFlagsBits } = require('discord.js');

const WELCOME_CHANNEL_ID = process.env.WELCOME_CHANNEL_ID?.trim() || null;
const WELCOME_IMAGE_URL = process.env.WELCOME_IMAGE_URL?.trim() || null;

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    try {
      if (!WELCOME_CHANNEL_ID) return;

      const channel = await member.client.channels.fetch(WELCOME_CHANNEL_ID);
      if (!channel || channel.type !== ChannelType.GuildText) return;

      const me = member.guild.members.me;
      if (!me) return;

      const perms = channel.permissionsFor(me);
      if (!perms?.has(PermissionFlagsBits.SendMessages) || !perms?.has(PermissionFlagsBits.EmbedLinks)) return;

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setAuthor({ name: 'Aura Hax' })
        .setTitle('Aura Hax')
        .setDescription(
          'Esperamos que encuentres un lugar acogedor y divertido aquí. No dudes en explorar los diferentes canales, participar en las conversaciones y conocer a otros miembros.'
        )
        .addFields(
          {
            name: '★ · Disfruta tu estadía y Diviértete en nuestro Clan · ★',
            value: 'Si tienes alguna duda, no dudes en preguntar a los administradores o moderadores.',
          },
          {
            name: 'Nuevo miembro',
            value: `${member} ingresó al servidor\nAhora somos **${member.guild.memberCount}** miembros.`,
          }
        )
        .setTimestamp();

      if (WELCOME_IMAGE_URL) {
        embed.setImage(WELCOME_IMAGE_URL);
      }

      await channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Error en evento guildMemberAdd:', error);
    }
  },
};
