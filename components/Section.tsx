import React from 'react';

interface SectionProps {
  title?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children, className = "" }) => {
  return (
    <section id={id} className={`py-8 md:py-12 border-b border-gray-200 last:border-0 ${className}`}>
      <div className="max-w-3xl mx-auto px-6">
        {title && (
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;