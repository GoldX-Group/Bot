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
          '𝐸𝑠𝑝𝑒𝑟𝑎𝑚𝑜𝑠 𝑞𝑢𝑒 𝑒𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑒𝑠 𝑢𝑛 𝑙𝑢𝑔𝑎𝑟 𝑎𝑐𝑜𝑔𝑒𝑑𝑜𝑟 𝑦 𝑑𝑖𝑣𝑒𝑟𝑡𝑖𝑑𝑜 𝑎𝑞𝑢𝑖. 𝑁𝑜 𝑑𝑢𝑑𝑒𝑠 𝑒𝑛 𝑒𝑥𝑝𝑙𝑜𝑟𝑎𝑟 𝑙𝑜𝑠 𝑑𝑖𝑓𝑒𝑟𝑒𝑛𝑡𝑒𝑠 𝑐𝑎𝑛𝑎𝑙𝑒𝑠, 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑟 𝑒𝑛 𝑙𝑎𝑠 𝑐𝑜𝑛𝑣𝑒𝑟𝑠𝑎𝑐𝑖𝑜𝑛𝑒𝑠 𝑦 𝑐𝑜𝑛𝑜𝑐𝑒𝑟 𝑎 𝑜𝑡𝑟𝑜𝑠 𝑚𝑖𝑒𝑚𝑏𝑟𝑜𝑠.'
        )
        .addFields(
          {
            name: '★・𝑫𝒊𝒔𝒇𝒓𝒖𝒕𝒂 𝒕𝒖 𝒆𝒔𝒕𝒂𝒅𝒊𝒂 𝒚 𝑫𝒊𝒗𝒊𝒆𝒓𝒕𝒆𝒕𝒆 𝒆𝒏 𝒏𝒖𝒆𝒔𝒕𝒓𝒐 𝑪𝒍𝒂𝒏・★',
            value: '𝑆𝑖 𝑡𝑖𝑒𝑛𝑒𝑠 𝑎𝑙𝑔𝑢𝑛𝑎 𝑑𝑢𝑑𝑎, 𝑛𝑜 𝑑𝑢𝑑𝑒𝑠 𝑒𝑛 𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎𝑟 𝑎 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑖𝑠𝑡𝑟𝑎𝑑𝑜𝑟𝑒𝑠 - 𝑚𝑜𝑑𝑒𝑟𝑎𝑑𝑜𝑟𝑒𝑠 𝑜 𝑎',
          },
          {
            name: '¡Nuevo miembro!',
            value: `¡${member} ingresó al servidor!\n¡${member} Eres El Miembro ${member.guild.memberCount}!`,
          }
        )
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 256 }))
        .setImage('https://images-ext-1.discordapp.net/external/xTI6g5aINpseidTEwC8BXwE668hRahP5Z7pNiiJ2Fe0/https/cdn.nekotina.com/guilds/1440466602675142820/b0693fcb-fd8d-40f8-a13b-df38653461e5.png?format=webp&quality=lossless')
        .setFooter({ text: 'Aura Hax © 2026 | By Linox' })
        .setTimestamp();

      await channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Error en evento guildMemberAdd:', error);
    }
  },
};
