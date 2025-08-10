import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = ({ darkMode }) => {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <Bot size={16} />
      </div>
      <div className={`rounded-2xl px-4 py-3 ${
        darkMode 
          ? 'bg-gray-800 shadow-lg border border-gray-700' 
          : 'bg-white shadow-lg border border-gray-100'
      }`}>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className={`w-2 h-2 rounded-full animate-bounce ${
              darkMode ? 'bg-gray-400' : 'bg-gray-400'
            }`}></div>
            <div className={`w-2 h-2 rounded-full animate-bounce ${
              darkMode ? 'bg-gray-400' : 'bg-gray-400'
            }`} style={{ animationDelay: '0.1s' }}></div>
            <div className={`w-2 h-2 rounded-full animate-bounce ${
              darkMode ? 'bg-gray-400' : 'bg-gray-400'
            }`} style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className={`text-xs ml-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Sasmit is typing...
          </span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;