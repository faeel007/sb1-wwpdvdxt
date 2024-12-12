import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

export function initializeWhatsAppClient() {
  const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      args: ['--no-sandbox']
    }
  });

  client.on('qr', (qr) => {
    console.log('Por favor, escaneie o QR Code abaixo com seu WhatsApp:');
    qrcode.generate(qr, { small: true });
  });

  client.on('ready', () => {
    console.log('Cliente WhatsApp conectado e pronto!');
  });

  client.initialize();
  return client;
}