import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-paper border-t border-gray-200 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-ink mb-4">Ready to Hire?</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Currently exploring opportunities for 
          <span className="font-semibold text-ink"> ML/DL Engineer (Telecom)</span>, 
          <span className="font-semibold text-ink"> GenAI Full Stack</span>, and 
          <span className="font-semibold text-ink"> MERN Stack</span> roles.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="inline-block p-1 bg-white rounded-lg border border-gray-200 shadow-sm">
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

             <div className="inline-block p-1 bg-white rounded-lg border border-gray-200 shadow-sm">
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

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Amitabh Kumar. Built for clarity & speed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;