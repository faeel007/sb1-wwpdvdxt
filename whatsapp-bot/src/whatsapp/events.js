import { handleIncomingMessage } from '../handlers/messageHandler.js';
import { ChatSession } from '../services/chatSession.js';

const sessions = new Map();

export function setupEventHandlers(client) {
  client.on('message', async (message) => {
    try {
      const session = sessions.get(message.from) || new ChatSession();
      
      if (!sessions.has(message.from)) {
        sessions.set(message.from, session);
      }

      await handleIncomingMessage(message, session);
      
      // Limpa a sessão após finalizar o fluxo
      if (session.isComplete()) {
        sessions.delete(message.from);
      }
    } catch (error) {
      console.error('Error handling message:', error);
      await message.reply('Desculpe, ocorreu um erro. Por favor, tente novamente.');
    }
  });
}