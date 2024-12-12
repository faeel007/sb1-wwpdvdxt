import React, { useState, useEffect } from 'react';
import { ChatbotService } from './services/ChatbotService';
import { ChatbotResponse } from './types';
import ChatMessage from './components/ChatMessage';

function App() {
  const [chatbot] = useState(new ChatbotService());
  const [messages, setMessages] = useState<ChatbotResponse[]>([]);
  
  useEffect(() => {
    const welcome = chatbot.start();
    const levelQuestion = chatbot.askLevel();
    setMessages([welcome, levelQuestion]);
  }, []);

  const handleLevelSelection = (option: string) => {
    const response = chatbot.processLevelResponse(option);
    const closing = chatbot.getClosing();
    setMessages(prev => [...prev, response, closing]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Assistente de Vendas</h1>
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage 
              key={index} 
              message={msg} 
              onOptionSelect={handleLevelSelection} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;