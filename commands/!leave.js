const Discord = require('discord.js');

exports.run = (client,message,args)=>{
    if (!message.member.voiceChannel) return message.reply("entre em um canal de voz");
    if (!message.guild.me.voiceChannel) return message.reply("não estou tocando meu batidões em nenhum canal de voz!");

    if(message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.reply("conecte-se em meu canal de voz!")

    message.guild.me.voiceChannel.leave();
    const embed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setDescription("Batidão acabou, e eu to caindo fora :)");

    message.channel.send(embed);
};