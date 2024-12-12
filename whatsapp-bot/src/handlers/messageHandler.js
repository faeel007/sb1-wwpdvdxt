import { formatWhatsAppMessage } from '../utils/formatter.js';

export async function handleIncomingMessage(message, session) {
  if (!session.hasStarted()) {
    const welcome = session.start();
    const levelQuestion = session.askLevel();
    
    await message.reply(welcome.message);
    await message.reply(formatOptionsMessage(levelQuestion));
    return;
  }

  const response = session.processLevelResponse(message.body);
  await message.reply(formatWhatsAppMessage(response));

  if (response.products) {
    const closing = session.getClosing();
    await message.reply(closing.message);
  }
}

function formatOptionsMessage(response) {
  if (!response.options) return response.message;
  
  return `${response.message}\n\n${response.options
    .map((opt, i) => `${i + 1}. ${opt}`)
    .join('\n')}`;
}