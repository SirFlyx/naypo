const Discord = require("discord.js")

exports.run = (client, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("você não possui permissão!")

    var membro = message.mentions.members.first() || message.guild.members.get(args[0])

		
    if(isNaN(args[0])) return message.reply("mencione o ID do membro")
    let bannedMember = client.fetchUser(args[0])
        if(!bannedMember) return MessagePort.reply("forneça um ID de usuário para desbanir!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "Nenhuma razão dada!        "

        if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("você não possui permissão!")|
        message.delete()
    try {
        message.guild.unban(bannedMember, reason)
        message.channel.send(`${membro} foi desbanido!`)
    } catch(e) {
        console.log(e.message)
    }

    const canal = message.guild.channels.get("700093527811555378");

    let pEmbed = new Discord.RichEmbed()
    .setTitle("🔨 UNBAN")
    .addField('Membro desbanido: ', `${membro}` )
    .addField('Desbanido por: ', `${message.author}` )
    .addField('Motivo do desbanimento: ', `${reason}`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
    .setColor("RANDOM").setTimestamp()

    canal.send(pEmbed);

    }