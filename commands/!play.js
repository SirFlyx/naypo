var discord = require('discord.js')
var ytdl = require('ytdl-core');
var info = require('youtube-info');
var api = require("simple-youtube-api");
var convert = require('convert-seconds');

var config;
var arquivo = require('../fila.js');
var musica2;
var numero = 0 
var pl = "false";
var musica = null;
var resultado = null;
var key = new api('AIzaSyA3LCsKBGHM15z0IlVe5zhyY5-vH58JJX8')

exports.run = (client,message,args)=>{
    var conteudo = args.slice(0).join(" ").trim();
    const voiceChannel = message.member.voiceChannel;
    
    if(!voiceChannel)return message.reply("Entre em um canal de voz.")
    if(!conteudo.length)return message.reply("Coloque alguma música para eu pesquisar, querido.")
  message.delete();
var sla = "Tocando a música no " + voiceChannel.name
    if(conteudo.indexOf("https://www.youtube.com/watch?v=") != "-1"||conteudo.indexOf("http://youtu.be/") != "-1"|| conteudo.indexOf("https://www.youtube.com/playlist?list=")!= "-1"){
        pl = "false";
       if(conteudo.indexOf("https://www.youtube.com/watch?v=") != "-1"){
         musica = conteudo.replace("https://www.youtube.com/watch?v=","")  
         video()
       }if(conteudo.indexOf("http://youtu.be/") != "-1"){
        musica = conteudo.replace("http://youtu.be/","") 
        video()
       }
function video(){
key.getVideoByID(musica).then(function(sucesso){
tocar()
},function(fracasso){
    message.channel.send("Pesquisa não encontrada.")
    return;
  
})
}
if(conteudo.indexOf("https://www.youtube.com/playlist?list=")!= "-1"){
pl = "true";
tocar()
}}else{
    pl = "false";
    key.searchVideos(conteudo,10).then(function(sucesso){
        if(!sucesso.length){
            var embed = new discord.RichEmbed()
            .setColor("#000000")
            .setDescription("Infelizmente não achei nenhum resultado para **" + conteudo + "**");

            message.channel.send(embed)
            return;
          
        }
     
        var embed = new discord.RichEmbed()
        .setTitle("Resultados para **" + conteudo + "**")
        .setDescription(`${sucesso.map(musica1=>`**${++numero}** - ${musica1.title}`).join("\n")} \n\nDigite um número para escolher a música`)
        .setThumbnail(message.author.avatarURL)
        .setColor("#000000");
        message.channel.send(embed)
numero = 0;
        message.channel.awaitMessages(message1=> Number(message1.content) > 0 && Number(message1.content) <= 10 && message1.author.id == message.author.id && sucesso[Number(message1.content) - 1] ,{
        maxMatches:1,
        time: 30000 ,
        errors: ['time']
        }).then(function(resultado){
      
musica = sucesso[Number(resultado.first().content) - 1].id
tocar()
          
        },function(falhou){
            message.channel.send("Você não escolheu nenhuma opção em 30 segundos.")
        })
    })
}
  
async function tocar(){
  
    if(!voiceChannel.permissionsFor(client.user.id).has('CONNECT'))return message.reply("eu não consigo conectar-me nesse canal.")
    if(!voiceChannel.permissionsFor(client.user.id).has("SPEAK"))return message.reply("Eu não consigo falar nesse canal de voz.")
        if(message.guild.members.get(client.user.id).voiceChannel == null){
            voiceChannel.join().then(function(canal){
                if(arquivo.queue.get(message.guild.id) == null){
                    config = {
                        guild: message.guild.id,
                        channel: canal,
                        canal: message.channel.id,
                        som: {
                            titulo: [],
                            id: []
                        },
                        connection: null
                    }
                    arquivo.queue.set(message.guild.id,config)
					t()
                }else{
					t()
				}
            },function(falha){
                message.channel.send("Eu não consegui conectar-me ao seu canal de voz.")
                return;
            })
        }else{
            if(voiceChannel !== message.guild.members.get(client.user.id).voiceChannel) return message.reply("Para escutar a musica, entre no canal que eu estou dando batidões e use o comando novamente.")
                if(arquivo.queue.get(message.guild.id) == null){
                    config = {
                        guild: message.guild.id,
                        channel: message.guild.members.get(client.user.id).voiceChannel,
                        canal: message.channel.id,
                        som: {
                            titulo: [],
                            id: []
                        },
                        connection: null
                    }
                    arquivo.queue.set(message.guild.id,config)
					t()
                }else{
					t()
				}
        }
function t(){
    if(pl == "false"){
    if(arquivo.queue.get(message.guild.id).som.id[0]){
        sla = "Uma musica foi adicionada na queue do canal: " + voiceChannel.name
    }
        info(musica,function(erro,music){
            if(erro){
        console.log(erro)
        return;
          }
var embed = new discord.RichEmbed()
.setTitle("Uma Música está tocando em **" + voiceChannel.name + "**")
.addField("Nome Da Música:",music.title,true)
.addField("Publicado por:",music.owner,true)
.addField("Views:",music.views,true)
.addField("Likes:",music.likeCount,true)
.addField("Deslikes:",music.dislikeCount,true)
.addField("Link:", "[Clique aqui](" + music.url + ")", true)
.setColor("#000000")
.setImage(music.thumbnailUrl)

message.channel.send(embed)

     if(arquivo.queue.get(message.guild.id).som.id[0] == null){
    arquivo.queue.get(message.guild.id).som.id.push(music.videoId)
    arquivo.queue.get(message.guild.id).som.titulo.push(music.title)
    play("https://www.youtube.com/watch?v="+music.videoId)
       }else{
           arquivo.queue.get(message.guild.id).som.id.push(music.videoId)
           arquivo.queue.get(message.guild.id).som.titulo.push(music.title)
       }
        })
    }else{
        key.getPlaylist(conteudo).then(function(playlist){
            playlist.getVideos().then(sucess=>{
            for(var i = 0;sucess[i] ;i++){
                if(arquivo.queue.get(message.guild.id).som.id[0] == null){
             arquivo.queue.get(message.guild.id).som.id.push(sucess[i].id)
             arquivo.queue.get(message.guild.id).som.titulo.push(sucess[i].title)
             play("https://www.youtube.com/watch?v="+sucess[i].id)
                }else{
                    arquivo.queue.get(message.guild.id).som.id.push(sucess[i].id)
                    arquivo.queue.get(message.guild.id).som.titulo.push(sucess[i].title)
                }
            }
            message.channel.send("Música da playlist adicionada na queue")
            })
            },function(erro){
                message.channel.send("Playlist não encontrada")
                return;
            })
    }
    async function play(music1){
        musica2 = await arquivo.queue.get(message.guild.id).channel.playStream(ytdl(music1,{ filter: 'audioonly' }), {volume: 0.5, passes: 3})
        arquivo.queue.get(message.guild.id).connection = musica2;
         await arquivo.queue.get(message.guild.id).connection.on("end",function(reason){
            if (reason == null){
                play("https://www.youtube.com/watch?v="+arquivo.queue.get(message.guild.id).som.id[0])
            }else{
         arquivo.queue.get(message.guild.id).som.id.shift()
         arquivo.queue.get(message.guild.id).som.titulo.shift()
             if(arquivo.queue.get(message.guild.id).som.id[0]){
                play("https://www.youtube.com/watch?v="+arquivo.queue.get(message.guild.id).som.id[0])
                message.channel.send("[PEDIDOS] Agora tocando a música " + arquivo.queue.get(message.guild.id).som.titulo[0])
             }else{
                 var fim = new discord.RichEmbed()
                 .setDescription("Espero que todos os ouvintes tenham gostado do meu batidão!");
                 client.guilds.get(arquivo.queue.get(message.guild.id).guild).channels.get(arquivo.queue.get(message.guild.id).canal).send(fim);
                arquivo.queue.get(message.guild.id).channel.disconnect()
                arquivo.queue.delete(message.guild.id)
             }
           }
        })
      }
    }
  }
}

// 