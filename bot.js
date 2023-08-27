import TelegramBot from "node-telegram-bot-api";
import conf from "config";

const bot = new TelegramBot(conf.get("token"),{ polling: true })

bot.on('message', (msg) => {
    if(msg.text !== "/start")
      return;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Ваш chat_id: ${chatId}`);
});

export default bot;