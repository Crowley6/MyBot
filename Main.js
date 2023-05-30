const TelegramApi = require('node-telegram-bot-api');
const token = '6277142925:AAGJSuaCZGo4e38LBErKEP7J9eVHHPH1wiY';

const bot = new TelegramApi(token, { polling: true });

bot.setMyCommands([
    {command:'/start',description:'Основные команды'},
    {command:'/usuf',description:'Админ Бота - Юсуф'}
])

bot.on('message', (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg)
    if(text == '/start'){
        bot.sendMessage(chatId, `Здравствуй ${msg.from.first_name}`);
        setTimeout(()=>{
            bot.sendMessage(chatId, 
                'Все коды доступные у бота: \n /usuf \n /start ')
        }, 250)
    }
    if(text == '/usuf'){
        bot.sendMessage(chatId, `Тот самый Админ - Юсуф`)
    }
});
