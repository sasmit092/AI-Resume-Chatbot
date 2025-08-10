import resumeData from '../data/resumeData.json';

class ChatService {
  constructor() {
    this.responses = {
      // Greetings
      greeting: "Hello! I'm Sasmit's AI-powered resume assistant. I'm here to help you learn about my experience, skills, and projects. Feel free to ask me anything about my background, technical skills, or specific projects I've worked on!",
      
      // Personal info
      name: `My name is ${resumeData.personal.name}. I'm an ${resumeData.personal.title} based in ${resumeData.personal.location}.`,
      contact: `You can reach me at ${resumeData.personal.email}. You can also check out my work on GitHub at ${resumeData.personal.github} or connect with me on LinkedIn at ${resumeData.personal.linkedin}.`,
      about: resumeData.personal.summary,
      
      // Education
      education: `I completed my Bachelor of Engineering in Computer Engineering from ${resumeData.education[0].institution} with a CGPA of ${resumeData.education[0].cgpa}. I also completed my HSC from ${resumeData.education[1].institution} with ${resumeData.education[1].percentage}% marks.`,
      
      // Skills
      skills: `I'm proficient in ${resumeData.skills.languages.join(', ')} for programming languages. I work with technologies like ${resumeData.skills.technologies.join(', ')}. I'm also experienced with concepts like ${resumeData.skills.concepts.join(', ')}.`,
      
      // Projects overview
      projects: `I've worked on several exciting projects including TechStore (an e-commerce platform), Food Restaurant (a food ordering app), and Movieweb (a Netflix-like movie platform). Each project showcases different aspects of my frontend development skills.`,
      
      // Certificates
      certificates: `I hold certificates in ${resumeData.certificates.join(' and ')}, which have strengthened my React.js and frontend development skills.`,
      
      // Default response
      default: "I'd be happy to help you learn more about my background! You can ask me about my projects, technical skills, education, experience, or how to contact me. What would you like to know?"
    };

    this.projectDetails = {
      techstore: `TechStore is an e-commerce storefront I built using React, HTML, and Tailwind CSS. Key features include:
      • Responsive design across all devices
      • Optimized performance with fast load times
      • Component library with reusable elements
      • Dynamic header, product cards, and cart system
      • Light/Dark mode toggle
      You can check it out on GitHub: ${resumeData.projects[0].github}`,
      
      food: `The Food Restaurant app is a comprehensive food ordering platform built with React and Tailwind CSS. Features include:
      • Fully responsive design for all devices
      • Integration with Swiggy Public API for real-time data
      • Component-based architecture with efficient state management
      • Dynamic shopping cart functionality
      • Detailed restaurant profile pages
      GitHub link: ${resumeData.projects[1].github}`,
      
      movie: `Movieweb is a Netflix-inspired movie platform I created using React and the TMDB API. Key highlights:
      • Real-time movie and TV show data integration
      • Lazy loading for optimized performance
      • Firebase Authentication for secure user management
      • Deployed on Firebase Hosting
      • Features movie posters, ratings, and trailers
      Check it out: ${resumeData.projects[2].github}`
    };
  }

  generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greeting patterns
    if (this.matchesPattern(message, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'])) {
      return this.responses.greeting;
    }
    
    // Personal info patterns
    if (this.matchesPattern(message, ['name', 'who are you', 'tell me about yourself'])) {
      return this.responses.name;
    }
    
    if (this.matchesPattern(message, ['contact', 'email', 'reach', 'linkedin', 'github'])) {
      return this.responses.contact;
    }
    
    if (this.matchesPattern(message, ['about', 'summary', 'background', 'who is sasmit'])) {
      return this.responses.about;
    }
    
    // Education patterns
    if (this.matchesPattern(message, ['education', 'degree', 'college', 'university', 'study', 'cgpa'])) {
      return this.responses.education;
    }
    
    // Skills patterns
    if (this.matchesPattern(message, ['skills', 'technologies', 'programming', 'languages', 'tools'])) {
      return this.responses.skills;
    }
    
    // Project patterns
    if (this.matchesPattern(message, ['projects', 'work', 'portfolio', 'built', 'created'])) {
      return this.responses.projects;
    }
    
    // Specific project patterns
    if (this.matchesPattern(message, ['techstore', 'tech store', 'ecommerce', 'e-commerce'])) {
      return this.projectDetails.techstore;
    }
    
    if (this.matchesPattern(message, ['food', 'restaurant', 'swiggy', 'ordering'])) {
      return this.projectDetails.food;
    }
    
    if (this.matchesPattern(message, ['movie', 'netflix', 'tmdb', 'movieweb'])) {
      return this.projectDetails.movie;
    }
    
    // Certificate patterns
    if (this.matchesPattern(message, ['certificate', 'certification', 'course', 'learning'])) {
      return this.responses.certificates;
    }
    
    // Experience patterns
    if (this.matchesPattern(message, ['experience', 'work experience', 'job', 'professional'])) {
      return "While I'm currently seeking my first professional role, I have substantial project experience building production-ready applications. My projects demonstrate expertise in React.js, API integration, responsive design, and modern development practices. I've worked with real-world APIs like Swiggy and TMDB, implementing features like authentication, state management, and performance optimization.";
    }
    
    // React specific
    if (this.matchesPattern(message, ['react', 'react.js', 'javascript', 'js'])) {
      return "I'm proficient in React.js with hands-on experience in component-based architecture, state management, hooks, and modern React patterns. I've completed the 'Namaste React' course by Akshay Saini and have built multiple React applications including e-commerce platforms and movie streaming interfaces. I'm comfortable with JSX, props, state, lifecycle methods, and React Router.";
    }
    
    // API experience
    if (this.matchesPattern(message, ['api', 'integration', 'backend', 'data'])) {
      return "I have solid experience with API integration, having worked with multiple REST APIs including Swiggy Public API for restaurant data and TMDB API for movie information. I'm comfortable with fetch requests, handling async operations, error handling, and data transformation. I understand API authentication, rate limiting, and best practices for frontend-backend communication.";
    }
    
    return this.responses.default;
  }
  
  matchesPattern(message, patterns) {
    return patterns.some(pattern => message.includes(pattern));
  }
}

export default ChatService;