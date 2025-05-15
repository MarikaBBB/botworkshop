import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get bot token from environment variables
const token = process.env.TELEGRAM_API_TOKEN;

if (!token) {
  throw new Error('TELEGRAM_API_TOKEN is not defined in .env file');
}

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle /echo command
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const responseText = match ? match[1] : '';
  
  bot.sendMessage(chatId, responseText);
});

console.log('Bot is running...');