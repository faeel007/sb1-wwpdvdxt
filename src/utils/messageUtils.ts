import { ExperienceLevel } from '../types';

export const getWelcomeMessage = (): string => {
  return 'Olá, como posso te ajudar hoje? Você está procurando algo específico ou quer conhecer nossos produtos?';
};

export const getLevelQuestion = (): string => {
  return 'Como você classificaria seu nível de conhecimento sobre nossos produtos?';
};

export const getLevelOptions = (): string[] => {
  return ['Sou iniciante', 'Tenho alguma experiência', 'Sou profissional'];
};

export const getLevelResponseMessage = (level: ExperienceLevel): string => {
  const messages = {
    beginner: 'Que ótimo! Como você está começando, temos alguns produtos super fáceis de usar e que vão te ajudar a dar os primeiros passos. Vou te mostrar alguns exemplos.',
    intermediate: 'Você já tem alguma experiência, então posso te sugerir produtos que vão ajudar a aprimorar ainda mais suas habilidades. Olha essas opções.',
    professional: 'Excelente! Como você já é experiente, temos produtos avançados que vão levar seu desempenho para o próximo nível. Vou te mostrar as opções ideais para você.'
  };
  return messages[level];
};

export const getClosingMessage = (): string => {
  return 'Se você quiser mais detalhes ou ajuda para escolher, estou aqui para ajudar!';
};