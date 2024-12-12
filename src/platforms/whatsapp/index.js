import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { ChatbotService } from '../../services/ChatbotService.js';
import { formatWhatsAppMessage } from './utils.js';

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox']
    }
});

const chatSessions = new Map();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Por favor, escaneie o QR Code acima com seu WhatsApp');
});

client.on('ready', () => {
    console.log('Cliente WhatsApp está pronto!');
});

client.on('message', async (message) => {
    const chatbot = chatSessions.get(message.from) || new ChatbotService();
    
    if (!chatSessions.has(message.from)) {
        chatSessions.set(message.from, chatbot);
        const welcome = chatbot.start();
        const levelQuestion = chatbot.askLevel();
        
        await message.reply(welcome.message);
        await message.reply(levelQuestion.message + "\n\n" + 
            levelQuestion.options.map((opt, i) => `${i + 1}. ${opt}`).join("\n"));
        return;
    }

    const response = chatbot.processLevelResponse(message.body);
    const formattedMessage = formatWhatsAppMessage(response);
    await message.reply(formattedMessage);

    const closing = chatbot.getClosing();
    await message.reply(closing.message);
    
    chatSessions.delete(message.from);
});

client.initialize();