import React from 'react';
import { BookOpen } from 'lucide-react';

const LearningTicker: React.FC = () => {
  const learningItems = [
    "🔥 Currently exploring: Advanced RAG Architectures",
    "📚 Reading: Designing Data-Intensive Applications",
    "🧪 Experimenting with: LangGraph & Multi-Agent Systems",
    "🎯 Goal: Contribute to major open-source LLM projects",
    "💡 Building: AI-powered tools for developers"
  ];

  return (
    <div className="bg-gradient-to-r from-accent/5 via-purple-500/5 to-pink-500/5 border-y border-gray-100 overflow-hidden py-3">
      <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
        {[...learningItems, ...learningItems].map((item, index) => (
          <React.Fragment key={index}>
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <BookOpen size={14} className="text-accent" />
              {item}
            </span>
            <span className="text-gray-300">•</span>
          </React.Fragment>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LearningTicker;