const Discord = require ("discord.js");
const client = new Discord.Client(); 

exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("⚠️ ERRO: Você não possui permissão para banir!");
    var membro = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!membro) return message.channel.send("⚠️ ERRO: Mencione a pessoa que você deseja banir!");

    if(membro == message.member) return message.channel.send("⚠️ ERRO: Você não pode se banir!");
    const motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send("⚠️ ERRO: Digite um motivo!");

    const embed = new Discord.RichEmbed()

    .setAuthor(`${message.author.tag}`, `https://images-ext-2.discordapp.net/external/NViWapaL6XRIFDfCs1OnaAwzEEIEz433Ms93rDma0Sc/https/cdn.discordapp.com/avatars/697880845708558347/46a0fe6555d5a1dc67123329a5ed15e2.webp`)
    .setTitle("MARTELO DO BAN")
    .setDescription(`Reaja com '✅' para banir o ${membro}\nPelo Motivo: ${motivo}`)
    message.channel.send(embed).then(msg => {
        msg.react("✅");

        let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        const coletor = msg.createReactionCollector(filtro, {max: 1, time: 3600000});
        coletor.on("collect", em => {
            em.remove(message.author.id);
            membro.ban();
            const canal = message.guild.channels.get("700093527811555378");

            let pEmbed = new Discord.RichEmbed()
            .setTitle("🔨 MARTELO DO BAN")
            .addField('Membro banido: ', `${membro}` )
            .addField('Banido por: ', `${message.author.tag}` )
            .addField('Motivo: ', `${motivo}` )
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
            .setColor("RANDOM").setTimestamp()

            canal.send(pEmbed);
        });

    });
}