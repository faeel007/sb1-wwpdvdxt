import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { ChatbotService } from './services/ChatbotService.js';

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox']
    }
});

const chatSessions = new Map();

client.on('qr', (qr) => {
    // Gera o QR Code no terminal
    qrcode.generate(qr, { small: true });
    console.log('Por favor, escaneie o QR Code acima com seu WhatsApp');
});

client.on('ready', () => {
    console.log('Cliente WhatsApp está pronto!');
});

client.on('message', async (message) => {
    const chatbot = chatSessions.get(message.from) || new ChatbotService();
    
    if (!chatSessions.has(message.from)) {
        // Primeira mensagem do usuário
        chatSessions.set(message.from, chatbot);
        const welcome = chatbot.start();
        const levelQuestion = chatbot.askLevel();
        
        await message.reply(welcome.message);
        await message.reply(levelQuestion.message + "\n\n" + 
            levelQuestion.options.map((opt, i) => `${i + 1}. ${opt}`).join("\n"));
        return;
    }

    // Processa a resposta do usuário
    const response = chatbot.processLevelResponse(message.body);
    
    // Envia a mensagem de resposta
    let replyMessage = response.message;
    
    // Adiciona os produtos à mensagem, se houver
    if (response.products) {
        replyMessage += "\n\nProdutos recomendados para você:\n\n";
        response.products.forEach(product => {
            replyMessage += `*${product.name}*\n`;
            replyMessage += `${product.description}\n`;
            replyMessage += `Preço: R$ ${product.price.toFixed(2)}\n`;
            replyMessage += "Benefícios:\n";
            product.benefits.forEach(benefit => {
                replyMessage += `• ${benefit}\n`;
            });
            replyMessage += "\n";
        });
    }

    await message.reply(replyMessage);

    // Envia mensagem de fechamento
    const closing = chatbot.getClosing();
    await message.reply(closing.message);
    
    // Limpa a sessão após mostrar os produtos
    chatSessions.delete(message.from);
});

client.initialize();