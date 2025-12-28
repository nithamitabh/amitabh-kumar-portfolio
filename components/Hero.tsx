import React from 'react';
import { MapPin, Download, Mail, Linkedin, Github, Phone } from 'lucide-react';
import { PERSONAL_INFO, SUMMARY } from '../constants';

const Hero: React.FC = () => {
  return (
    <header className="pt-16 pb-12 md:pt-24 md:pb-16 max-w-3xl mx-auto px-6 border-b border-gray-200">
      <h1 className="text-4xl md:text-5xl font-bold text-ink mb-3 tracking-tight">
        {PERSONAL_INFO.name}
      </h1>
      <h2 className="text-xl md:text-2xl text-subtle font-medium mb-6">
        {PERSONAL_INFO.role}
      </h2>
      
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
          className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          <Mail size={18} />
          Contact Me
        </a>
        <button 
          className="inline-flex items-center gap-2 bg-white text-ink border border-gray-300 px-5 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors"
          onClick={() => alert("This would download the CV file.")}
        >
          <Download size={18} />
          Download CV
        </button>
        <div className="flex items-center gap-3 ml-2">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-accent transition-colors">
                <Linkedin size={22} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-ink transition-colors">
                <Github size={22} />
            </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;