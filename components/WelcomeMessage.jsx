import React from 'react';
import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

const WelcomeMessage = ({ onQuickAction, darkMode }) => {
  const quickActions = [
    {
      icon: <Code2 size={20} />,
      title: "Technical Skills",
      description: "React, JavaScript, APIs, and more",
      message: "What are your technical skills?"
    },
    {
      icon: <Briefcase size={20} />,
      title: "Projects",
      description: "E-commerce, Food App, Movie Platform",
      message: "Tell me about your projects"
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Education",
      description: "Computer Engineering Background",
      message: "What's your educational background?"
    },
    {
      icon: <Award size={20} />,
      title: "Certifications",
      description: "React & Frontend Development",
      message: "What certifications do you have?"
    }
  ];

  return (
    <div className="p-6 text-center">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
          SS
        </div>
        <h2 className={`text-2xl font-bold mb-2 ${
          darkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          Meet Sasmit Sarang
        </h2>
        <p className={`max-w-md mx-auto ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Aspiring Frontend Developer passionate about creating impactful digital solutions with modern technologies and AI tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => onQuickAction(action.message)}
            className={`p-4 border rounded-xl hover:shadow-lg transition-all duration-200 text-left group ${
              darkMode
                ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                : 'bg-white border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="text-blue-600 group-hover:text-blue-700">
                {action.icon}
              </div>
              <div>
                <h3 className={`font-semibold mb-1 ${
                  darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {action.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {action.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className={`mt-8 p-4 border rounded-lg ${
        darkMode
          ? 'bg-gray-800 border-gray-600'
          : 'bg-blue-50 border-blue-200'
      }`}>
        <p className={`text-sm ${
          darkMode ? 'text-gray-300' : 'text-blue-800'
        }`}>
          💡 <span className="font-semibold">Tip:</span> Try asking specific questions like "Tell me about the TechStore project" or "What APIs have you worked with?"
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;