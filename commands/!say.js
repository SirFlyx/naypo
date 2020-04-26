const Discord = require("discord.js");

exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`você não possui permissao.`)

    message.reply(`em qual canal vc deseja enviar o anuncio?`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                message.reply(`mencione um canal!`)
            } else {
                message.reply(`qual a mensagem desse anuncio?`).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                    
                        message.reply(`qual o titulo?`).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                title = c.content

                                message.reply(`anuncio enviado ao canal ${canal} com sucesso!`)

                                let embed = new Discord.RichEmbed()

                                .setColor('GOLD')
                                .setThumbnail(`${client.user.displayAvatarURL}`)
                                .setFooter(`Menssagem enviada por: ${message.author.username}`, message.author.avatarURL)
                                .setTitle(title)
                                .setDescription(desc)

                                canal.send(`@everyone`, embed)

                            })
                        })
                    })
                })
            }
        })
    })

}

exports.help = {
    name: 'anuncio'
}