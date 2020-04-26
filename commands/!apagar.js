const Discord = require("discord.js"); //baixar a lib

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter);

exports.run = (client, message, args) => {
    db.get(message.guild.id).remove({id: message.author.id}).write()
    message.channel.send('✅ Perfil apagado com sucesso!')
}