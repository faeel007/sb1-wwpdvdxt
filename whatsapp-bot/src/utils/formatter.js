export function formatWhatsAppMessage(response) {
  let message = response.message;
  
  if (response.products) {
    message += '\n\n*Produtos recomendados para você:*\n';
    response.products.forEach(product => {
      message += `\n*${product.name}*\n`;
      message += `${product.description}\n`;
      message += `*Preço:* R$ ${product.price.toFixed(2)}\n`;
      message += '*Benefícios:*\n';
      product.benefits.forEach(benefit => {
        message += `• ${benefit}\n`;
      });
      message += '\n';
    });
  }
  
  return message;
}