const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let clientping = new Date() - message.createdAt;

    // sistema para identificar a quanto tempo o bot esta online!
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `${horas}h ${minutos}m ${segundos}s`;

    let inline = true
    let bicon = client.user.displayAvatarURL;
    let usersize = client.users.size
    let chansize = client.channels.size
    let uptimxd = client.uptime 
    let servsize = client.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Meu Nome:", `🤖 ${client.user.username}`)
    .addField("Meu Criador:", "👨‍💻 @SirFlyx#4462")
    .addField("Meu Prefix:", "📍 'n!'")
    .addField("Servidores:", `🛡 ${servsize}`)
    .addField("Canais:", `📁 ${chansize}`)
    .addField("Usuarios:", `👥 ${usersize}`)
    .addField("Livraria:", "🔗 Discord.js")
    .addField("Linguagem:", "🔗 Node.js")
    .addField(`Estou acordado há:`, `⏲️ ${uptime}`)
    .addField("Minha Latencia:",'📡' + Math.floor(clientping) + "ms")
    .setFooter(`${client.user.username} - Criado por: SirFlyx#4462`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}