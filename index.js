const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    unknownCommandResponse: false
});
const TOKEN = 'NTQwNzQ3MzMwOTc0OTA4NDM2.DzVdkg.PgccsUvyjyHyQb2EWKBP18ASc7Y'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');﻿
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'Hi')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
    if(message.content == 'join')
    {
        message.member.send("Welcome to the server");
        let memberRole = message.member.guild.roles.find("name", "members");
        message.member.addRole(memberRole);

        message.member.guild.createRole({
            name: message.member.username,
            color: "0x0c3ff",
            permissions: []
        }).then(function(role)
        {
            message.member.addRole(role);
        });
    }

});
global.servers = {};

bot.on('ready',function(){
    console.log("Ready");
})

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the server");
    let memberRole = member.guild.roles.find("name", "members");
    member.addRole(memberRole);
});    

bot.login(TOKEN);