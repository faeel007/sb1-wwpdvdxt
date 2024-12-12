import React from 'react';
import { ChatbotResponse } from '../types';
import ProductList from './ProductList';
import OptionButtons from './OptionButtons';

interface ChatMessageProps {
  message: ChatbotResponse;
  onOptionSelect: (option: string) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onOptionSelect }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-gray-800">{message.message}</p>
      
      {message.options && (
        <OptionButtons options={message.options} onSelect={onOptionSelect} />
      )}
      
      {message.products && (
        <ProductList products={message.products} />
      )}
    </div>
  );
};

export default ChatMessage;