const { Message, PermissionFlagsBits } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "247",
  aliases: ["24vc"],
  description: `สลับเปิด/ปิดระบบ 24/7`,
  userPermissions: PermissionFlagsBits.ManageGuild,
  botPermissions: PermissionFlagsBits.ManageGuild,
  category: "Settings",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {JUGNU} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    let data = await client.music.get(`${message.guild.id}.vc`);
    let mode = data?.enable;
    let channel = message.member.voice.channel;
    if (mode === true) {
      let dataOptions = {
        enable: false,
        channel: null,
      };
      await client.music.set(`${message.guild.id}.vc`, dataOptions);
      // if (player) await player.destroy();
      client.embed(
        message,
        `** ${client.config.emoji.ERROR}  ปิดใช้งานระบบ 24/7 **`
      );
    } else {
      let dataOptions = {
        enable: true,
        channel: channel.id,
      };
      await client.music.set(`${message.guild.id}.vc`, dataOptions);
      client.embed(
        message,
        `** ${client.config.emoji.SUCCESS} เปิดใช้งานระบบ 24/7 **`
      );
    }
  },
};
