import React, { useState, useEffect } from 'react';
import { ChatbotService } from '../../services/ChatbotService';
import { ChatbotResponse } from '../../types';

function App() {
  const [chatbot] = useState(new ChatbotService());
  const [messages, setMessages] = useState<ChatbotResponse[]>([]);
  
  useEffect(() => {
    // Initialize chat with welcome message
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
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800">{msg.message}</p>
              
              {msg.options && (
                <div className="mt-3 space-y-2">
                  {msg.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => handleLevelSelection(option)}
                      className="block w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
              
              {msg.products && (
                <div className="mt-4 space-y-4">
                  {msg.products.map((product) => (
                    <div key={product.id} className="border p-4 rounded">
                      <h3 className="font-bold">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                      <p className="font-semibold mt-2">R$ {product.price.toFixed(2)}</p>
                      <ul className="mt-2 list-disc list-inside">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-gray-700">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;