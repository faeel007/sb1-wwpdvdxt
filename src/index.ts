import { ChatbotService } from './services/ChatbotService';

// Example usage
const chatbot = new ChatbotService();

// Start conversation
console.log(chatbot.start());

// Ask for level
console.log(chatbot.askLevel());

// Process user response
console.log(chatbot.processLevelResponse('Sou iniciante'));

// Show closing message
console.log(chatbot.getClosing());