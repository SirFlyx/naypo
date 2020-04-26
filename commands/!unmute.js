const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("você não possui permissão!")
    let muteRole = message.guild.roles.find("name", "Mutado");
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Mencione o usuário que deseja desmutar!`);
     else{
     member.removeRole(muteRole);

    const canal = message.guild.channels.get("700093527811555378");

    let pEmbed = new Discord.RichEmbed()
    .setTitle("🔊UnMute")
    .addField("Membro Desmutado", `${member}`)
    .addField("Desmutado por", `${message.author}`)
       
    canal.send(pEmbed);
    }
}

module.exports.help = {
     name: "unmute"
}