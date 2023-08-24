const { Telegraf } = require('telegraf');
const bot = new Telegraf('6649237638:AAHyB1R45MjD1o7gc3sMDFwHhgBkzH4SRbM');

bot.command('start', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "Hello World!", {} )
    console.log(ctx.message)
})

bot.startPolling()