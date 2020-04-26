const Discord = require ("discord.js");
const client = new Discord.Client(); 

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    if (!user) user = message.author;

    const embed = new Discord.RichEmbed()

    .setAuthor(`${message.author.tag}`, `https://images-ext-2.discordapp.net/external/NViWapaL6XRIFDfCs1OnaAwzEEIEz433Ms93rDma0Sc/https/cdn.discordapp.com/avatars/697880845708558347/46a0fe6555d5a1dc67123329a5ed15e2.webp`)
    .setTitle("Clique aqui para baixar este avatar")
    .setURL(user.displayAvatarURL)
    .setImage(`${user.displayAvatarURL}`)
    .setColor('#00FFFF')
    .setFooter('Naypo  -  Todos os diretos reservados!')
    message.channel.send(embed);

}