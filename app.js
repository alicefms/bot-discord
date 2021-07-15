
const Discord = require('discord.js')
const movies = require('./movies.json')
const bot = new Discord.Client()

bot.on('message', responseCommand)

function mountMsg(array, message) {

    array.map(filme => {
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

function filterMovies(section) {
    return movies.filter(movie => movie.section == section)
}


function responseCommand(message) {
    if (message.author.bot == false) {
        switch (message.content.toLowerCase()) {
            case ('!starwars'): { mountMsg(movies, message); break }
            case ('!nova'): { mountMsg(filterMovies('nova'), message); break }
            case ('!prequel'): { mountMsg(filterMovies('prequel'), message); break }
            case ('!classica'): { mountMsg(filterMovies('classica'), message); break }
            case ('!spin'): { mountMsg(filterMovies('spin'), message); break }
            case ('!serie'): { mountMsg(filterMovies('serie'), message); break }
            default: message.channel.send(`Olá, ${message.author.username}, os comandos disponíveis são:
            Para listar todos os filmes:
                !starwars 
            Para listar fimes por seção:
                !nova
                !prequel
                !classica
                !spin
                !serie`)

        }




    }
}



bot.login('ODY0OTgwNDcxNDI3NDk4MDU1.YO9V1g.PW8Y3XnNC0gg4Gk8-3QQcUtEGX4');