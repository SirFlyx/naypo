
const superagent = require("snekfetch");
const Discord = require('discord.js')

const fs = require('fs');

exports.run = async (client, message, args) => {

    const ip = args[0]
	
	if(!ip) return message.reply('você deve inserir um ip valido.')
                         
        //  coloque em baixo  //  
    superagent.get('https://api.mcsrvstat.us/2/' + ip) ////// <- Coloque o IP do seu servidor 
        .end((err, response) => {
           
          let ping = response.body.ping
            let online1 = 'Sim!'
            let offline1 = 'Não!'

            let online = response.body.players.online

            let On = response.body.online ? online1 : offline1

            let version1 = 'Não disponível!'
            let version2 = response.body.version
            
            let Versionn = response.body.version ? version2 : version1

            let maximo = response.body.players.max
            
            const lewdembed = new Discord.RichEmbed()

                 .setTitle(ip + ' - Status')
                 .setDescription(`**Online**: ${On}\n**Versão**: ${Versionn}\n**Jogadores**: **${online}** / **${maximo}**`)
                 .setColor('ORANGE')
                 .setThumbnail(message.guild.iconURL)
                 .setTimestamp()
                 .setFooter(client.user.username)
                  message.channel.send(lewdembed)
                  
                  
                })
}

exports.help = {
	name: "status"
}