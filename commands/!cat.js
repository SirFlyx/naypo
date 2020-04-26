const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const superagent = require('superagent'); // puxando o NPM superagent (instale utilizando: npm i superagent)

exports.run = async (client, message, args) => { // setando as bases

    let{body} = await superagent // puxando, pelo superagent, o corpo/foto do gato
  .get(`http://aws.random.cat/meow`); // setando a API que estamos puxando (gerado pelo SuperAgent)

  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Gatin :3 🐱")
  .setImage(body.file); // enviando o corpo/foto do gato 

  message.channel.send(catembed);
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "cat" 
 }
