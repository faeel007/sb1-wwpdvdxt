import React from 'react';

interface OptionButtonsProps {
  options: string[];
  onSelect: (option: string) => void;
}

const OptionButtons: React.FC<OptionButtonsProps> = ({ options, onSelect }) => {
  return (
    <div className="mt-3 space-y-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="block w-full text-left px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;