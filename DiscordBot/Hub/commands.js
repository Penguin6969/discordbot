const Discord = require('discord.js')


module.exports = {
    name: 'commands',
    description: "lists commands",
    execute(message, args){
    
    let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("**List of Commands**")
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    
    .addField(`Moderation:`, '`!ban`, `!kick`, `!purge`,')
    .addField(`Fun:`, '`!say <>`, `!gayr8`, `!penis`')
    .addField(`Help:`, '`!help`, `!info`')
    .addField(`Utility:`, '`!ping`, `!serverinfo`')
    
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
    
    
    message.channel.send(embed);    
    
    }};