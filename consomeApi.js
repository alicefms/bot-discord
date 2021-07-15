const axios = require('axios')
const urlBase = 'https://swapi.dev/api/'



async function getData(param) {
    const res = await axios.get(urlBase + param)
}

function sendData(array) {
    const { data } = array

    data.map(dado => {
        const msg = new Discord.MessageEmbed()
        msg.setTitle(dado.name || dado.title)

        // msg.setImage(filme.img)
        // switch (filme.section) {
        //     case ('classica'): { msg.setColor("#030bfc"); break; }
        //     case ('prequel'): { msg.setColor("#eb0c05"); break; }
        //     case ('nova'): { msg.setColor("#ebe305"); break; }
        //     default: msg.setColor("#ff36d7")
        // }
        message.channel.send(msg)
    })
}

// "people": "https://swapi.dev/api/people/", 
// "planets": "https://swapi.dev/api/planets/", 
// "films": "https://swapi.dev/api/films/", 
// "species": "https://swapi.dev/api/species/", 
// "vehicles": "https://swapi.dev/api/vehicles/", 
// "starships": "https://swapi.dev/api/starships/"
// }