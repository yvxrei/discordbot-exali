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

    TOKEN="MTAwNjk0MDc4ODk2NzYwNDMxNA.GRZ5qN.9y1JmitN4uBBkV6MKJh5cg1LO_0qw3S138vU8Q"
    client.login(TOKEN)
   // client.login(process.env.TOKEN)