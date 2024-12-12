# Chatbot de Vendas - WhatsApp

Este é um chatbot de vendas integrado com WhatsApp que ajuda os clientes a encontrarem produtos baseados em seu nível de experiência.

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o bot:
   ```bash
   npm start
   ```
4. Escaneie o QR Code que aparecerá no terminal com seu WhatsApp

## Funcionalidades

- Integração com WhatsApp usando whatsapp-web.js
- Sistema de sessão por usuário
- Recomendação de produtos baseada no nível do usuário
- Formatação de mensagens para melhor visualização no WhatsApp

## Estrutura do Projeto

- `src/index.js` - Ponto de entrada da aplicação
- `src/whatsapp/` - Configuração e eventos do WhatsApp
- `src/handlers/` - Manipuladores de mensagens
- `src/services/` - Lógica de negócio
- `src/utils/` - Funções utilitárias
- `src/data/` - Dados dos produtos