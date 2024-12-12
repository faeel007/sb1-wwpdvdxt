import { ChatbotResponse } from '../../types';

export const formatWhatsAppMessage = (response) => {
    let message = response.message;
    
    if (response.products) {
        message += "\n\nProdutos recomendados para você:\n\n";
        response.products.forEach(product => {
            message += `*${product.name}*\n`;
            message += `${product.description}\n`;
            message += `Preço: R$ ${product.price.toFixed(2)}\n`;
            message += "Benefícios:\n";
            product.benefits.forEach(benefit => {
                message += `• ${benefit}\n`;
            });
            message += "\n";
        });
    }
    
    return message;
};