const Telegraf = require('telegraf');

const bot = new Telegraf('insert_bot_token_here');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})
