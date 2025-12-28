import React from 'react';
import { MapPin, Download, Mail, Linkedin, Github, Phone, Sparkles, Zap, Coffee } from 'lucide-react';
import { PERSONAL_INFO, SUMMARY } from '../constants';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [coffeeCount] = React.useState(Math.floor(Math.random() * 500) + 1000);

  return (
    <header className="pt-16 pb-12 md:pt-24 md:pb-16 max-w-3xl mx-auto px-6 border-b border-gray-200">
      {/* Profile Section with Image */}
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
        {/* Profile Image with Creative Border */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full blur-sm transition-all duration-500 ${isHovered ? 'opacity-100 animate-pulse' : 'opacity-60'}`}></div>
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/nithamitabh"
              alt={PERSONAL_INFO.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                // Fallback to initials if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold border-4 border-white shadow-lg">
              AK
            </div>
          </div>
          {/* Status indicator */}
          <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-3 border-white shadow-md animate-pulse" title="Available for hire"></div>
        </div>

        {/* Name and Role */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <Sparkles className="text-yellow-500 animate-pulse" size={24} />
          </div>
          <h2 className="text-xl md:text-2xl text-subtle font-medium mb-4">
            {PERSONAL_INFO.role}
          </h2>
          
          {/* Quick Stats Bar - Creative Addition */}
          <div className="flex flex-wrap gap-3 text-xs font-medium">
            <div className="flex items-center gap-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-full border border-blue-200">
              <Zap size={14} className="text-yellow-500" />
              <span>700+ Problems Solved</span>
            </div>
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-orange-100 text-orange-700 px-3 py-1.5 rounded-full border border-orange-200">
              <Coffee size={14} />
              <span>{coffeeCount}+ Cups of Coffee</span>
            </div>
            <div className="flex items-center gap-1 bg-gradient-to-r from-green-50 to-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Open to Work</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mb-8">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} />
          <span>{PERSONAL_INFO.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
           <Phone size={16} />
           <span>{PERSONAL_INFO.phone}</span>
        </div>
        
        <div className="w-full sm:w-auto mt-2 sm:mt-0 flex items-center gap-1.5 text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded-md border border-green-100">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
          {PERSONAL_INFO.availability}
        </div>
      </div>

      <p className="text-lg text-gray-800 leading-relaxed max-w-2xl mb-8">
        {SUMMARY}
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200"
        >
          <Mail size={18} />
          Contact Me
        </a>
        <a 
          href="https://drive.google.com/file/d/1D2qdR1H6RmpdIUMyKYMSD4eP1pEcC5iH/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-ink border border-gray-300 px-5 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200"
        >
          <Download size={18} />
          Download CV
        </a>
        <div className="flex items-center gap-3 ml-2">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-accent transition-all duration-200 hover:scale-110">
                <Linkedin size={22} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-ink transition-all duration-200 hover:scale-110">
                <Github size={22} />
            </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;