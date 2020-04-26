const Discord = require('discord.js') // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
    try { // usando a function try, traduzindo: tentar

      // nao bote nada nesses espacos, o bot vai completar, baseando-se no codigo abaixo
      let notAnimated = [] 
      let animated = []
  
      // puxando os emojis do servidor
      message.guild.emojis.forEach(async emoji => { // nome desse 'evento' foi dado como: emoji (ironico, nao?!)
        if (emoji.animated) animated.push(emoji.toString()) // veremos quais sao animados
        else notAnimated.push(emoji.toString()) // e quais nao sao
      })
  
      if (!animated[0]) animated = ['Nenhum'] // caso n tenha nenhum emoji animado, daremos o mesmo
      if (!notAnimated[0]) notAnimated = ['Nenhum'] // a mesma coisa com os nao animados
  
      let embed = new Discord.RichEmbed()

      .setDescription('Animados: \n' + animated.join(' ') + '\n\nNormais: \n' + notAnimated.join(' '))

      message.channel.send(embed)
    } catch (err) { // procurando algum erro
      message.channel.send('Erro :/ \n\n>' + err).catch() // caso ache, daremos como encontrado no chat
    }
  }
  
  exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'emojis'
  }