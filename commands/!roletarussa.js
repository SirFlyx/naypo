const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
 
    var random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){
 
        let embed = new Discord.RichEmbed()
 
        .setDescription(`Rodou o cartucho e por sorte sobreviveu!`)
        .setColor('RANDOM')
        .setFooter(`A bala ficou no cartucho ${Math.round(random)} :)`)
 
        message.reply(embed)
    }
    else{
        let embed2 = new Discord.RichEmbed()
 
        .setDescription(`Rodou o cartucho e morreu!`)
        .setColor('RANDOM')
        .setFooter(`A bala estava exatamente no cartucho ${Math.round(random)} :(`)
 
        message.reply(embed2)
    }
 
}
 
exports.help = {
    name: 'roletarussa'
}