const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    return message.channel.send("Hmmm. The only snitch I know is <@242902218204774400>.");
}

module.exports.help = {
    name: "whosthesnitch"
}