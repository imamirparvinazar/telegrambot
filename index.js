const { Telegraf } = require('telegraf');
const bot = new Telegraf('6649237638:AAHyB1R45MjD1o7gc3sMDFwHhgBkzH4SRbM');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Enter your name: ', {
    })
    bot.on("message", ctx => {
        bot.telegram.sendMessage(ctx.chat.id, ctx.message)
    })
})



bot.startPolling()