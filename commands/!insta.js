const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");
module.exports.run = async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("insira o usuario que deseja ver o perfil do instagram!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("eu não consegui encontrar essa conta!")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Informações do Perfil", stripIndents`**- Username:** ${account.username}
            **- Nome Completo:** ${account.full_name}
            **----------------------------------------**
            **- Biografia:** ${account.biography.length == 0 ? "Não Definida" : account.biography}
            **----------------------------------------**
            **- Postagens:** ${account.edge_owner_to_timeline_media.count}
            **- Seguidores:** ${account.edge_followed_by.count}
            **- Seguindo:** ${account.edge_follow.count}
            **- Conta Privada:** ${account.is_private ? "Sim 🔐" : "Não 🔓"}`);

        message.channel.send(embed);
    }
