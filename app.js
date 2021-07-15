
const Discord = require('discord.js')
const movies = require('./movies.json')
const bot = new Discord.Client()

bot.on('message', showMsg)

function showMsg(message) {
    if (message.author.bot == false) {
        if (message.content.toLowerCase() == '!starwars') {
            movies.map(filme => {
                const msg = new Discord.MessageEmbed()
                msg.setTitle(filme.title)
                msg.setDescription(
                    `Ano de Lançamento:  ${filme.year}
                    Trilogia: ${filme.section}`)
                msg.setImage(filme.img)
                switch (filme.section) {
                    case ('classica'): { msg.setColor("#030bfc"); break; }
                    case ('prequel'): { msg.setColor("#eb0c05"); break; }
                    case ('nova'): { msg.setColor("#ebe305"); break; }
                    default: msg.setColor("#ff36d7")
                }

                message.channel.send(msg)
            })


        }
    }

}


bot.login('ODY0OTgwNDcxNDI3NDk4MDU1.YO9V1g.PW8Y3XnNC0gg4Gk8-3QQcUtEGX4');
