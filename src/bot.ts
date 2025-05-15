import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get bot token from environment variables
const token = process.env.TELEGRAM_API_TOKEN;

if (!token) {
  throw new Error('No TELEGRAM_API_TOKEN in .env file');
}

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle /echo command
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const responseText = match ? match[1] : '';
  
  bot.sendMessage(chatId, responseText);
});

// Handle /code command
bot.onText(/\/code/, (msg) => {
  const chatId = msg.chat.id;
  const REPO_URL = process.env.REPO_URL || "Repository URL not found";
  
  bot.sendMessage(chatId, REPO_URL);
});


console.log('Bot is running...');