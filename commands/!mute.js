const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let reason = args.slice(2).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
  message.delete().catch(O_o=>{})

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("mencione um usuário valido deste servidor.");
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("você não tem **permissão** para silenciar.")
  let muterole = message.guild.roles.find(`name`, "Mutado");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mutado",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("coloque um tempo válido.");

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    let embed = new Discord.RichEmbed()
       .setTitle("🔊UnMute Automático")
       .addField("Membro Desmutado", `<@${tomute.id}>`)
    message.channel.send(embed);
  }, ms(mutetime));
  
    const canal = message.guild.channels.get("700093527811555378");
    let pEmbed = new Discord.RichEmbed()
        .setTitle("🔇 MARTELO DO MUTE")
        .addField('Membro Mutado: ', `${member.user.tag}` )
        .addField('Mutado por: ', `${message.author.tag}` )
        .addField('Motivo: ', `${reason}` )
        .addField('Duração: ', `${mutetime}` )
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM").setTimestamp()

      canal.send(pEmbed);

}

module.exports.help = {
  name: "mute"
}