const Discord = require("discord.js")
require("dotenv").config()

    const client = new Discord.Client({
        intents: [
            "Guilds",
            "GuildMessages",
            "MessageContent"
        ]
    })

    client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}`)
    })

    client.on("messageCreate", (message) => {
        if (message.content == "hi"){
            message.reply("Hello World!")
        }
    })

    client.on("messageCreate", (message) => {
        if (message.content == "fuzze"){
            message.reply("fuzzy gatinho meow :3")
        }
    })
    client.on("messageCreate", (message) => {
        if (message.content == "fart"){
            message.reply("https://c.tenor.com/bQaOSEg8giUAAAAC/fire-ass-fire-butt.gif")
        }
    })

    client.login(process.env.TOKEN)