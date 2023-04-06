const {
  CommandInteraction,
  PermissionFlagsBits,
  ApplicationCommandType,
} = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "pause",
  description: `หยุดเพลงปัจจุบันในคิวชั่วคราว`,
  userPermissions: PermissionFlagsBits.Connect,
  botPermissions: PermissionFlagsBits.Connect,
  category: "Music",
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {JUGNU} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    if (!queue.paused) {
      queue.pause();
      client.embed(
        interaction,
        `${client.config.emoji.SUCCESS} หยุดคิวชั่วคราว !!`
      );
    } else {
      client.embed(
        interaction,
        `${client.config.emoji.ERROR} หยุดคิวชั่วคราวแล้ว !!`
      );
    }
  },
};
