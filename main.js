const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("toes", {type:"WATCHING"})
})

client.login("NjAyMjA0MzM0NjMzMjU0OTUw.Xdpv6w.lOPiDda2xZuGHtYCfNimskZsTdo")