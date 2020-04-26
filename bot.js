const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json");

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter);

client.on("ready", () => {

  console.log(`cheguei pra fuder ` + client.users.size + ` usuários de drogas, em ` + client.channels.size + ` canais, em ${client.guilds.size} servidores pra você servidores.`);
    console.log(`Olá Mundo!`)
    var tabela = [ // criando uma variavel, nomeada de tabela 

      // uma notinha: toda vez que for criar uma nova presence na nossa tabela, bote uma vírgula no final!
              {name: 'e moderando!', type: 'PLAYING'}, 
              {name: 'meu prefix: n!', type: 'LISTENING'},
              {name: 'meu papai me programar @SirFlyx#4462!', type: 'WATCHING'},
              {name: 'amor para todos s2!', type: 'STREAMING', url: 'https://twitch.tv/younguei'}
          ];
      // criando uma function...
          function setStatus() { // nomeamos ela de: setStatus
              // agora, iremos criar um sistema randômico, alternando entre as opções que criamos para a tabela
              var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
              client.user.setPresence({game: altstatus}) // por fim, setando a presence. No caso, o jogo é a variavel que criamos 'altstatus'
          }
          setStatus(); // para finalizar, puxamos a function que criamos no inicio
          setInterval(() => setStatus(), 15000) // e adicionamos um intervalo entre as presences
      });

//contador de membros

client.on('guildMemberAdd', member =>{
    

  var numbertowords = require('number-to-words');
  var membrosCount = `${client.guilds.get('699276442483294269').memberCount}`;
  var membrosArray = new Array();
  var membrosSplit = membrosCount.split("");
  var contador = "";

  for(var i = 0; i<membrosCount.length;i++)
  {
      membrosArray[i] = numbertowords.toWords(membrosSplit[i]);
      contador += ':'+membrosArray+':';
  }

  const canal = client.channels.get('699311941256085504');
  canal.setTopic(`Temos atualmente ${contador} membros!
📣 https://discord.gg/Bu65cc9`)
  
});

client.on('guildMemberRemove', member =>{
  

  var numbertowords = require('number-to-words');
  var membrosCount = `${client.guilds.get('699276442483294269').memberCount}`;
  var membrosArray = new Array();
  var membrosSplit = membrosCount.split("");
  var contador = "";

  for(var i = 0; i<membrosCount.length;i++)
  {
      membrosArray[i] = numbertowords.toWords(membrosSplit[i]);
      contador += ':'+membrosArray+':';
  }

  const canal = client.channels.get('699311941256085504');
  canal.setTopic(`Temos atualmente ${contador} membros!
📣 https://discord.gg/Bu65cc9`)
  
});

client.on("guildCreate", () => {
  db.set(client.guild.id, []).write()
  })

client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.toLowerCase().startsWith(config.prefix)) return;

    var comando = message.content.toLowerCase().split(" ")[0];
    comando.slice(config.prefix.length);

    var args = message.content.split(" ").slice(1);

    try {
        var arquivoComando = require(`./commands/${comando}.js`)
        arquivoComando.run(client, message, args);
    }catch (erro){
      console.log(erro);
    }
});

client.on('guildMemberAdd', member => {
  let embed = new Discord.RichEmbed()

  .setTitle('👋 Bem-vindo(a)!')
  .setColor('BLACK')
  .setDescription(`✅ Olá ${member}, esperamos que você se divirta no servidor!`)
  .setFooter('Naypo  -  Todos os diretos reservados!')
  .setTimestamp()
  let canalenter = client.channels.get('699302029872463952')
  canalenter.send(embed)

});

client.login(config.token);