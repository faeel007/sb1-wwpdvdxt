import { initializeWhatsAppClient } from './whatsapp/client.js';
import { setupEventHandlers } from './whatsapp/events.js';

async function main() {
  try {
    const client = await initializeWhatsAppClient();
    setupEventHandlers(client);
  } catch (error) {
    console.error('Error starting WhatsApp bot:', error);
    process.exit(1);
  }
}

main();