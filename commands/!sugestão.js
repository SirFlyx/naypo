const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
  
  var canal = client.channels.get('699319800991711312') // puxando o id do canal aonde serao enviadas as sugestoes
  
  var sugestao = args.slice(0).join(' '); // criando um argumento, aonde o usuario vai escrever a sugestap
  if (!sugestao) message.reply(`vc precisa escrever algo!`) // caso ele nao escreva, vamos avisa-lo que precisa
  
      let embed = new Discord.RichEmbed()

        .setTitle(`SUGESTÃO`)
        .setDescription(`:bust_in_silhouette: **Autor:** ${message.author}\n\n:inbox_tray: **Sugestão:** ${sugestao}`)
        .setColor('RANDOM')
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
        
        canal.send(embed) 
        .then(function (msg) { // abrindo uma function, definida como 'msg'
            msg.react("👍"); // reagimos com a function
            msg.react("👎"); 
              message.reply(`sua sugestão foi enviada ao ${canal}! :mailbox_with_no_mail:`)
        })
}


exports.help = {
 name: 'sugestao'
}