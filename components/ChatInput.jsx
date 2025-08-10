import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const ChatInput = ({ onSendMessage, disabled, darkMode }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = [
    "Tell me about your projects",
    "What are your technical skills?",
    "How can I contact you?",
    "Tell me about your education"
  ];

  return (
    <div className={`border-t p-4 ${
      darkMode 
        ? 'border-gray-700 bg-gray-800' 
        : 'border-gray-200 bg-white'
    }`}>
      <div className="flex flex-wrap gap-2 mb-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => !disabled && onSendMessage(suggestion)}
            disabled={disabled}
            className={`text-xs px-3 py-1 rounded-full transition-colors disabled:opacity-50 ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <Sparkles size={10} className="inline mr-1" />
            {suggestion}
          </button>
        ))}
      </div>
      
      <div className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Sasmit's experience, skills, projects..."
            disabled={disabled}
            rows={1}
            className={`w-full resize-none rounded-2xl border px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50 text-sm ${
              darkMode
                ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-500'
                : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500'
            }`}
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="flex-shrink-0 w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center text-white transition-colors"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;