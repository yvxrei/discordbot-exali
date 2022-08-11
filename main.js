const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require ("./generateImage")

    const client = new Discord.Client({
        intents: [
            "Guilds",
            "GuildMessages",
            "MessageContent",
            "GuildMembers"
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

    const welcomeChannelID = "460400962545254400"

    client.on("guildMemberAdd", async (member) => {
        const img = await generateImage(member)
        member.guild.channels.cache.get(welcomeChannelId).send({
            content: `<@${member.id}> Welcome to the server!`,
            files: [img]
        })
    })
    
    client.login(process.env.TOKEN)