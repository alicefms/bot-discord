const Discord = require('discord.js')
const movies = require('./movies.json')
const bot = new Discord.Client()
const elements = require('./elementosAPI.json')
const axios = require('axios')
const urlBase = 'https://swapi.dev/api/'


bot.on('message', responseCommand)

function sendMsg(array, message) {

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


async function responseCommand(message) {
    if (message.author.bot == false) {
        switch (message.content.toLowerCase()) {
            case ('!starwars'): { sendMsg(movies, message); break }
            case ('!nova'): { sendMsg(filterMovies('nova'), message); break }
            case ('!prequel'): { sendMsg(filterMovies('prequel'), message); break }
            case ('!classica'): { sendMsg(filterMovies('classica'), message); break }
            case ('!spin'): { sendMsg(filterMovies('spin'), message); break }
            case ('!serie'): { sendMsg(filterMovies('serie'), message); break }

            case ('!planetas'):
            case ('!personagens'):
            case ('!filmes'):
            case ('!especies'):
            case ('!veiculos'):
            case ('!naves'): { await sendData(message); break }




            default: message.channel.send(new Discord.MessageEmbed()
                .setTitle("Comandos")
                .setColor("#151fd6")
                .setDescription(`Olá, ${message.author.username}, os comandos disponíveis são:
            Para listar todos os filmes:
                !starwars 

            Para listar fimes por seção:
                !nova
                !prequel
                !classica
                !spin
                !serie
                
            Para listar outros elementos:
                !planetas
                !personagens
                !filmes
                !especies
                !veiculos
                !naves`))

        }




    }
}


async function sendData(message) {
    const { titulo, cor, param } = elements.find(elem => elem.comando == message.content)
    let url = urlBase + param
    let results = []
    do {
        const response = await axios.get(url)
        const { data } = response
        results = results.concat(data.results)
        url = data.next
    } while (url != null)

    const msg = new Discord.MessageEmbed()
    msg.setTitle(titulo)
        .setColor(cor)
    msg.setDescription(results.map(dado => dado.name || dado.title))
    message.channel.send(msg)
}




bot.login('ODY0OTgwNDcxNDI3NDk4MDU1.YO9V1g.PW8Y3XnNC0gg4Gk8-3QQcUtEGX4');