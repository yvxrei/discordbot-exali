const Discord = require("discord.js")

const TOKEN = "MTAwNjk0MDc4ODk2NzYwNDMxNA.GoZj92.N7T8nN0zDLq_J_KqNX7bbzA2EfxwTPnG_3NXlI"

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

    client.login(TOKEN)