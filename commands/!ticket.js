const Discord = require('discord.js')

exports.run = (client, message, args, guild) => {

 message.guild.createChannel(`Ticket-${message.author.username}`, { type: 'text' }).then(x => {
            x.overwritePermissions(message.author.id, {
                'VIEW_CHANNEL': true,
                'SEND_MESSAGES': true
            })
                x.overwritePermissions(message.guild.roles.find(x => x.name == '@everyone'), {
                    'VIEW_CHANNEL': false
                    })
                    x.overwritePermissions(message.guild.roles.find(x => x.name == 'Atendente'), {
                        'VIEW_CHANNEL': true,
                        'SEND_MESSAGES': true 
                        })

    // embed do CAPTCHA    
    let embed2 = new Discord.RichEmbed()

    .setTitle(`SISTEMA DE CAPTCHA`)
    .setDescription(`Olá **${membro.user.username}**, para completar o captcha, reaja ao emoji '✅' abaixo!`)
    .setColor('#97f2ff') 

  canal.send(`${membro}`, embed).then(msg => { // criando um nome para a function 'then', no caso: msg
      msg.react("✅"); // reagimos nesse mensagem com um emoji

      const filter = (r, u) => r.me && u.id === membro.id;
      const collector = msg.createReactionCollector(filter, { max: 1 });
      
      collector.on("collect", r => {
        msg.reactions.get('✅').remove(membro)


            const embednew = new Discord.RichEmbed()
            .setDescription(`Olá ${message.author.username}`)
            .setColor("RANDOM")
            .setAuthor("Ticket " + message.author.username)
            .addField("🤔 | Não encontro o canal do meu ticket.", `Basta clicar em #Ticket-${message.author.username}`, false)

    message.channel.send(embednew)
    
const embed = new Discord.RichEmbed()
.setTitle(`Olá ${message.author}`)
.setColor("123456")
.addField("🤔 | Estou com duvidas, alguem pode me responder?", "Diga á sua duvida, basta um chamado ao cargo @Atendente", false)
.addField("😱 | Eu descobri um bug!!!", "Aguarde, nossa equipe está visualizando tudo.", false)
.addField("🙄", "Caso não saiba, a demora do seu ticket para ser lido é normal, podemos estar ausente ou resolvendo outros ticket's, então aguarde.", false)
.addField("Clique neste emoji para encerrar o ticket", ":x:", true)

        x.send("<@&700151865517801593>", embed).then(y => {
            y.react("❌")
            let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
            const coletor = y.createReactionCollector(filtro);
            coletor.on("collect", ap => {
            x.send("O canal será deletado em 5 segundos!")
            setTimeout(() => {
                x.delete();
                }, 5000) 
            }
            )
        })
        })
} 
