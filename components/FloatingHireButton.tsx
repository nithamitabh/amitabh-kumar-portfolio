import React, { useState, useEffect } from 'react';
import { Rocket, X, Mail, Calendar, MessageCircle } from 'lucide-react';

const FloatingHireButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-gray-800 rotate-45' 
              : 'bg-gradient-to-r from-accent to-purple-600 hover:shadow-xl hover:scale-110'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white mx-auto" />
          ) : (
            <>
              <Rocket className="w-6 h-6 text-white mx-auto animate-bounce" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </>
          )}
        </button>

        {/* Popup Menu */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 w-64 animate-in slide-in-from-bottom-2">
            <div className="text-center mb-4">
              <h3 className="font-bold text-ink">Let's Connect! 🚀</h3>
              <p className="text-xs text-gray-500">Available for immediate joining</p>
            </div>
            
            <div className="space-y-2">
              <a
                href="mailto:21dec004@nith.ac.in"
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <div className="text-sm font-medium text-ink">Email Me</div>
                  <div className="text-xs text-gray-500">Quick response</div>
                </div>
              </a>
              
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
              >
                <Calendar className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <div className="text-sm font-medium text-ink">Schedule Call</div>
                  <div className="text-xs text-gray-500">30 min intro</div>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/amitabh-kumar-392671231/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-purple-600" />
                <div className="text-left">
                  <div className="text-sm font-medium text-ink">LinkedIn DM</div>
                  <div className="text-xs text-gray-500">Let's network</div>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in-from-bottom-2 {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in { animation: slide-in-from-bottom-2 0.2s ease-out; }
      `}</style>
    </>
  );
};

export default FloatingHireButton;