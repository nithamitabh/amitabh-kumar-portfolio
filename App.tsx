import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-yellow-100 selection:text-ink">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      
      {/* Print-only CSS tweak to ensure background colors render if printed for interview */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </main>
  );
}

export default App;