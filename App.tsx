import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import { DEVELOPER_NAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="bg-slate-950 py-8 px-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {DEVELOPER_NAME}. All rights reserved.</p>
        <p className="mt-2 text-gray-600 max-w-lg mx-auto">
          BTech (2025) turned Python backend developer — building practical apps, automation, and LLM integrations.
        </p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;