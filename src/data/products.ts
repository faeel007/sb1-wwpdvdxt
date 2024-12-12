import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Produto Iniciante 1',
    description: 'Perfeito para começar sua jornada',
    price: 99.99,
    level: 'beginner',
    benefits: ['Fácil de usar', 'Tutorial incluso', 'Suporte dedicado']
  },
  {
    id: '2',
    name: 'Produto Intermediário 1',
    description: 'Ideal para aprimorar suas habilidades',
    price: 199.99,
    level: 'intermediate',
    benefits: ['Recursos avançados', 'Maior durabilidade', 'Melhor desempenho']
  },
  {
    id: '3',
    name: 'Produto Profissional 1',
    description: 'Para os mais exigentes',
    price: 499.99,
    level: 'professional',
    benefits: ['Qualidade premium', 'Tecnologia de ponta', 'Garantia estendida']
  }
];