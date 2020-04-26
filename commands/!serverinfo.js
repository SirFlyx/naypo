const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-br')

exports.run = (client, message, args) => {

    function checardia(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " dia" : " dias") + " atrás";
    };
    let leveis = ["Nenhum", "Baixo", "Médio", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let regiao = {
        "brazil": ":flag_br: Brasil",
        "eu-central": ":flag_eu: Europa Central",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: EUA Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: Londres (London)",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    let author = message.author
    const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .addField(":name_badge: Nome do servidor", message.guild.name)
          .addField(":id: ID", message.guild.id)
          .addField(":crown: Dono", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
          .addField(":flag_white: Região", regiao[message.guild.region])
          .addField(":people_holding_hands: Humanos", `${message.guild.members.size}`)
          .addField(":robot: Robôs", `${message.guild.members.filter(member => member.user.bot).size}`, true)
          .addField(":level_slider: Level de verificação", leveis[message.guild.verificationLevel], true)
          .addField(":globe_with_meridians: Quantidade de canais", message.guild.channels.filter(channel => channel.type !== 'category').size, true)
          .addField(":small_blue_diamond: Quantidade de cargos", message.guild.roles.size, true)
          .addField(":purple_circle: Quantidade de boost(s)", message.guild.premiumSubscriptionCount, true)
          .addField(":timer: Quando este servidor foi criado", `${moment.utc(message.guild.createdAt).format('llll')} (${checardia(message.channel.guild.createdAt)})`)
          .setThumbnail(message.guild.iconURL)
          .setColor("BLACK")
      message.channel.send({embed});
}