const Discord    =  require("discord.js"),
      bot        =  new Discord.Client(),
      prefix     =  ">",
      token      =  "NDA0MDM4NzIzOTM2OTc2ODk2.DUQB6g.wlqEXd_7tgr64psDm-qevl-ZbWg";

bot.on('ready', () => {
    console.log("ok im working now lol");
});

bot.on("message", message => {
    //ignores message if the bot sent it
    if(message.author.bot) return;
    //ignores message if it's in dms (not in a guild)
    if (!message.guild) return;
    //ignores message if it doesn't start with the prefix
    if(message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "lemon") {
      //sends message
      message.channel.send(`hi that me ${message.author}`);
    }

    if(command === "ping") return message.channel.send("pongngnggngn");

    if(message.content.includes("<@404038723936976896>")) return message.channel.send("hecc");

    if(command === "dm") {
        message.channel.send(`dm sent to ${message.author}`);
        message.author.send("dmed! :cake:");
    }

    if(command === "order") {
        if(message.content.includes(" ")) {
            const lemChannel = bot.channels.find("id", "404618819575873536");
            newOrder = new Discord.RichEmbed()
            .setColor("#ffefbf")
            .setDescription('[order information](https://google.ie/)')
            .addField(`Order`, message.content.replace('>order ', ''), true)
            .addField(`Customer`, `${message.author.username}`, true)
            .addField(`Server`, `${message.guild.name}`, true)
            .addField(`Order Number`, `idk`, true)
            .setThumbnail(message.author.avatarURL)
            lemChannel.send(newOrder)
            message.channel.send("order has been placed")
        
        } else {
            return message.channel.send("pls order smth");
        }
    }

    if(command === "feedback") {
        if(message.content.includes(" ")) {
            const lemChannel = bot.channels.find("id", "404618819575873536");
            feedback = new Discord.RichEmbed()
            .setColor("#ffefbf")
            .addField(`someone left some feedback!`, message.content.replace('>feedback ', ''), true)
            .addField(`customer`, `${message.author.username} | ${message.author.id}`, true)
            .addField(`server`, `${message.guild.name} | ${message.guild.id}`, true)
            .setThumbnail(message.author.avatarURL)
            lemChannel.send(feedback)
            message.channel.send("feedback sent")
        }
    }
    
});

bot.on('guildDelete', guild => {
    const lemChannel = bot.channels.find('id', '404618819575873536');
    serverDel = new Discord.RichEmbed()
      .setColor("#ffefbf")
      .setDescription(`Left ${guild.name}\nI am in ${bot.guilds.size} guilds`)
      .setThumbnail(guild.iconURL)
    lemChannel.send(serverDel)
});

bot.on('guildCreate', guild => {
    const lemChannel = bot.channels.find('id', '404618819575873536');
    serverAdd = new Discord.RichEmbed()
      .setColor("#ffefbf")
      .setDescription(`Joined ${guild.name}\nI am in ${bot.guilds.size} guilds`)
      .setThumbnail(guild.iconURL)
    lemChannel.send(serverAdd)
});

bot.login(token);
