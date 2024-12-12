import { products } from '../data/products.js';

export class ChatbotService {
  start() {
    return {
      message: 'Olá, como posso te ajudar hoje? Você está procurando algo específico ou quer conhecer nossos produtos?'
    };
  }

  askLevel() {
    return {
      message: 'Como você classificaria seu nível de conhecimento sobre nossos produtos?',
      options: ['Sou iniciante', 'Tenho alguma experiência', 'Sou profissional']
    };
  }

  processLevelResponse(message) {
    let level;
    if (message.toLowerCase().includes('iniciante')) {
      level = 'beginner';
    } else if (message.toLowerCase().includes('experiência')) {
      level = 'intermediate';
    } else {
      level = 'professional';
    }

    const levelMessages = {
      beginner: 'Que ótimo! Como você está começando, temos alguns produtos super fáceis de usar e que vão te ajudar a dar os primeiros passos.',
      intermediate: 'Você já tem alguma experiência, então posso te sugerir produtos que vão ajudar a aprimorar ainda mais suas habilidades.',
      professional: 'Excelente! Como você já é experiente, temos produtos avançados que vão levar seu desempenho para o próximo nível.'
    };

    return {
      message: levelMessages[level],
      products: products.filter(p => p.level === level)
    };
  }

  getClosing() {
    return {
      message: 'Se você quiser mais detalhes ou ajuda para escolher, estou aqui para ajudar!'
    };
  }
}