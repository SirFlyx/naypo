const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const math = require('mathjs'); // puxando o NPM 'mathjs' (instale utilizando: npm i mathjs)
const ms = require('ms'); // puxando o NPM 'ms' (instale utilizando: npm i ms)

exports.run = async (client, message, args) => { // setando a base, com async
    if (!args[0]) return message.reply('escreva uma conta! Ex.: \`!calc 2 + 2 (lembrando, não faço contas de multiplicação e porcentagem!)\`') // caso o membro nao escreva uma conta
                         // filtrando o que o membro enviou, com o NPM Mathjs, criando a conta
   message.channel.send(`O resultado é: \`${math.evaluate(args.join(' '))}\``)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'calc'
}