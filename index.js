const { Telegraf } = require('telegraf');
const data = require("./data.json")
const fs = require("fs")

const bot = new Telegraf('6649237638:AAHyB1R45MjD1o7gc3sMDFwHhgBkzH4SRbM');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})


bot.on("message", ctx => {
    bot.telegram.sendMessage(ctx.chat.id, ctx.reply("Hello!"))
})

bot.startPolling()