import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Heart, Code, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const funFacts = [
    "Debugged at 3 AM more times than I'd admit ☕",
    "Believer in clean code & dark mode 🌙",
    "Turned caffeine into code since 2021 💻"
  ];
  
  const [factIndex, setFactIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="bg-gradient-to-b from-paper to-cream border-t border-gray-200 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-yellow-500 animate-pulse" size={24} />
          <h2 className="text-2xl font-bold text-ink">Ready to Hire?</h2>
          <Sparkles className="text-yellow-500 animate-pulse" size={24} />
        </div>
        
        <p className="text-gray-600 mb-4 max-w-lg mx-auto">
          Currently exploring opportunities for 
          <span className="font-semibold text-ink"> ML/DL Engineer (Telecom)</span>, 
          <span className="font-semibold text-ink"> GenAI Full Stack</span>, and 
          <span className="font-semibold text-ink"> MERN Stack</span> roles.
        </p>

        {/* Fun rotating fact */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-8 max-w-md mx-auto">
          <p className="text-sm text-gray-600 italic transition-opacity duration-500">
            "{funFacts[factIndex]}"
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="inline-block p-1 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transform transition-all duration-200">
                <div className="flex items-center gap-3 px-6 py-4">
                    <div className="p-2 bg-blue-50 text-accent rounded-full">
                        <Mail size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Email Me</p>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-ink hover:text-accent transition-colors">
                            {PERSONAL_INFO.email}
                        </a>
                    </div>
                </div>
            </div>

             <div className="inline-block p-1 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transform transition-all duration-200">
                <div className="flex items-center gap-3 px-6 py-4">
                    <div className="p-2 bg-green-50 text-green-600 rounded-full">
                        <Phone size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Call Me</p>
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold text-ink hover:text-green-700 transition-colors">
                            {PERSONAL_INFO.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Amitabh Kumar. Built with</span>
          <Heart size={14} className="text-red-400 animate-pulse" />
          <span>&</span>
          <Code size={14} className="text-accent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;