const Discord = require("discord.js"); //baixar a lib

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter);

exports.run = (client, message, args) => {
    if(!args[0])return message.channel.send('⚠️ ERRO: Insira seu novo nome em nosso banco de dados!')
    let [novonome] = args
    db.get(message.guild.id)
    .find({id: message.author.id}).assign({novonome: novonome}).write()
    message.channel.send('✅ Perfil editado com sucesso!')
}