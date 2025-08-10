import React from 'react';
import { Download, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

interface ChatHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const handleDownloadResume = () => {
    // In a real application, this would trigger a PDF download
    alert('Resume download would be implemented here!');
  };

  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            SS
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Sasmit Sarang</h1>
            <p className="text-sm text-gray-600">AI Resume Assistant</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.open('https://github.com/sasmit092', '_blank')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="GitHub"
          >
            <Github size={18} className="text-gray-600" />
          </button>
          <button
            onClick={() => window.open('https://linkedin.com/in/sasmitsarang', '_blank')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} className="text-gray-600" />
          </button>
          <button
            onClick={() => window.open('mailto:sasmitsarang78@gmail.com')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Email"
          >
            <Mail size={18} className="text-gray-600" />
          </button>
          <button
            onClick={handleDownloadResume}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Download Resume"
          >
            <Download size={18} className="text-gray-600" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-gray-600" /> : <Moon size={18} className="text-gray-600" />}
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-lg p-3">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">👋 Welcome!</span> I'm Sasmit's AI-powered resume. Ask me anything about his experience, projects, or skills!
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;