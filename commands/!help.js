const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM
    message.reply('verifique suas mensagens privadas...')


    let embed = new Discord.RichEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento` \n🎵`Musica` \n🏦`Banco de Dados`')
    message.author.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('🔨').then(r => { // mod
            msg.react('🔧').then(r => { // uteis
            msg.react('💳').then(r => { // entretenimento
            msg.react('🎵').then(r => { // musica
            msg.react('🏦').then(r => { // banco
            msg.react('🔙').then(r => { // inicio
                    })
                })
            })
        })
    })
})
        // filtros de cada reação, para configurar a informação do autor
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const MusicaFilter = (reaction, user, ) => reaction.emoji.name === '🎵' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        const BancoFilter = (reaction, user, ) => reaction.emoji.name === '🏦' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Musica = msg.createReactionCollector(MusicaFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);
        const Banco = msg.createReactionCollector(BancoFilter);
 
        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            embed = new Discord.RichEmbed()
                .setTitle("🔧 Uteis")
                .addField(`\`!botinfo\``, `Saiba mais sobre mim!`)
                .addField(`\`!sugestao\``, `Deixe uma sugestão para o nosso servidor!`)
                .addField(`\`!uptime\``, `Veja a quanto tempo o bot se encontra online!`)
                .addField(`\`!avatar\``, `Veja o avatar de um membro, e faça o download!`)
                .addField(`\`!serverinfo\``, `Saiba mais sobre o servidor!`)
                .addField(`\`!userinfo\``, `Veja as informações de um membro`)
                .addField(`\`!calc\``, `Calcule uma conta de matematica`)
                .addField(`\`!clima\``, `Veja o clima de uma cidade`)
                .addField(`\`!ping\``, `Veja o meu ping`)
                .addField(`\`!report\``, `Faça o report de alguem`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Banco.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            embed = new Discord.RichEmbed()
                .setTitle("🏦 Banco de Dados")
                .addField(`\`!criar\``, `Cria seu perfil em nosso banco de dados`)
                .addField(`\`!editar\``, `Edita seu perfil em nosso banco de dados`)
                .addField(`\`!deletar\``, `Deleta seu perfil do nosso banco de dados`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Musica.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            embed = new Discord.RichEmbed()
                .setTitle("🎵 Musica")
                .addField(`\`!play\``, `Me faça tocar uma musica`)
                .addField(`\`!stop\``, `Me faça parar de tocar uma musica`)
                .addField(`\`!pause\``, `Me faça pausar uma musica (Desativado)`)
                .addField(`\`!resume\``, `Me faça continuar a tocar uma musica (Desativado)`)
                .addField(`\`!queue\``, `Veja quais musicas estão na lista (Desativado)`)
                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            embed = new Discord.RichEmbed()
                .setTitle("👮 Moderação")
                .addField(`\`!ban\``, `Aplique um banimento em um membro`)
                .addField(`\`!unban\``, `Aplique um unban em um membro`)
                .addField(`\`!clear\``, `Limpe indesejadas mensagens em um canal`)
                .addField(`\`!kick\``, `Expulse membros fora da lei`)
                .addField(`\`!say\``, `Escreva alguma mensagem através do bot`)
                .addField(`\`!mute\``, `Aplique um mute em um membro chato!`)
                .addField(`\`!unmute\``, `Aplique um unmute em um membro`)
                .addField(`\`!lock\``, `Trave um canal para que os membros não possam mais enviar menssagens`)
                .addField(`\`!unlock\``, `Destrave um canal para que os membros possam enviar menssagens`)
                .setColor("GOLD")
            msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
            embed = new Discord.RichEmbed()
                .setTitle("💳 Entretenimento")
                .addField(`\`!avatar\``, `Amplie a foto de algum membro`)
                .addField(`\`!ascii\``, `Crie um texto grande de letras!`)
                .addField(`\`!dado\``, `Veja em qual número o dado vai cair`)
                .addField(`\`!perguntar\``, `Pergunte algo ao sabio bot`)
                .addField(`\`!roletarussa\``, `Brinque de roleta-russa`)
                .addField(`\`!faketweet\``, `Crie um falso tweet`)
                .addField(`\`!1vs1\``, `Lute conta alguem`)
                .addField(`\`!biscoito\``, `Deu um biscoito para alguem`)
                .addField(`\`!calc\``, `Calcule uma conta de matematica`)
                .addField(`\`!cat\``, `Veja a foto de um gato`)
                .addField(`\`!clima\``, `Veja o clima de uma cidade`)
                .addField(`\`!consquista\``, `Faça uma conquista do minecraft`)
                .addField(`\`!emojis\``, `Veja os emojis do servidor`)
                .addField(`\`!firstword\``, `Faça um bebe dizer suas primeira palavras`)
                .addField(`\`!fumar\``, `Faça o bot fumar um beck`)
                .addField(`\`!insta\``, `Veja as informações do Instagram`)
                .addField(`\`!inverter\``, `Inverta uma palavra`)
                .addField(`\`!laranjo\``, `Faça uma foto com o Laranjo`)
                .addField(`\`!lembrete\``, `Faça o bot te lembrar de algo`)
                .addField(`\`!leny\``, `Veja aquela carinha`)
                .addField(`\`!serverinfo\``, `Veja as informções do servidor`)
                .addField(`\`!ship\``, `Veja seu ship com alguem`)
                .addField(`\`!status\``, `Veja os status de um servidor`)
                .addField(`\`!uptime\``, `Veja o tempo que estou online`)
                .addField(`\`!userinfo\``, `Veja as informações de um membro`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            embed = new Discord.RichEmbed()
            .setTitle(`CENTRAL DE AJUDA!`)
            .setColor("GOLD")
            .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento` \n🎵`Musica`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "ajuda"
}