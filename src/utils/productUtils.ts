import { Product, ExperienceLevel } from '../types';
import { products } from '../data/products';

export const getProductsByLevel = (level: ExperienceLevel): Product[] => {
  return products.filter(product => product.level === level);
};

export const formatProductDisplay = (product: Product): string => {
  return `
    ${product.name}
    ${product.description}
    Preço: R$ ${product.price.toFixed(2)}
    Benefícios:
    ${product.benefits.map(benefit => `- ${benefit}`).join('\n')}
  `;
};