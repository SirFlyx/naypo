const Discord = require('discord.js')

exports.run = (client, message, args, guild) => {
        message.delete()
        // mentioned or grabbed user
        let target = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!target) return message.reply("forneça um usuário válido").then(m => m.delete(5000))

        // reasoning definition
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply(`forneça um motivo para denunciar **${target.user.tag}** (LEMBRANDO: NUNCA USE ESPAÇOS!)`).then(m => m.delete(5000))
  
        let prova = args.slice(2).join("  ")
        if(!prova) return message.reply(`forneça uma prova para denunciar **${target.user.tag}** (LEMBRANDO: NUNCA USE ESPAÇOS!)`).then(m => m.delete(5000))
  
        // grab reports channel
        let sChannel = message.guild.channels.find(x => x.name === "❯❱❭reports❬❮❰")

        // send to reports channel and add tick or cross

        message.reply("seu report foi arquivado para a equipe de staff, obrigado!").then(m => m.delete(15000))
         let embed = new Discord.RichEmbed()

        .setTitle(`SUGESTÃO`)
        .setDescription(`**${message.author}** reportou @${target.user.tag}\n\nMotivo: **${reason}**\n\nProva: **${prova}**`)
        .setColor('RANDOM')
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
       
        sChannel.send(embed).then(async msg => {
            await msg.react("✅")
            await msg.react("❌")
        })

  }