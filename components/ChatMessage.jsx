import React from 'react';
import { User, Bot } from 'lucide-react';

const ChatMessage = ({ message, darkMode }) => {
  return (
    <div className={`flex items-start gap-3 mb-6 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        message.isUser 
          ? 'bg-blue-600 text-white' 
          : 'bg-gradient-to-r from-teal-500 to-blue-600 text-white'
      }`}>
        {message.isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
        message.isUser
          ? 'bg-blue-600 text-white ml-auto'
          : darkMode 
            ? 'bg-gray-800 text-gray-100 shadow-lg border border-gray-700'
            : 'bg-white text-gray-800 shadow-lg border border-gray-100'
      }`}>
        <p className={`text-sm leading-relaxed whitespace-pre-line ${
          message.isUser ? 'text-white' : darkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {message.text}
        </p>
        <span className={`text-xs mt-2 block ${
          message.isUser 
            ? 'text-blue-100' 
            : darkMode 
              ? 'text-gray-400' 
              : 'text-gray-500'
        }`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;