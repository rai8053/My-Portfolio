import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code, Database, FileText } from 'lucide-react';
import { SectionId } from '../types';
import { DEVELOPER_NAME, DEVELOPER_ROLE, DEVELOPER_BIO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-10">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Available for Work
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{DEVELOPER_NAME}</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl text-gray-300 mb-6 font-light">
              {DEVELOPER_ROLE}
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              {DEVELOPER_BIO}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <motion.button
                onClick={() => scrollToSection(SectionId.PROJECTS)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Code size={20} />
                View Projects
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection(SectionId.CONTACT)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-slate-800 text-white border border-slate-700 rounded-full font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </div>

            <div className="flex gap-4 items-center justify-center md:justify-start">
                {[
                  { icon: Github, href: SOCIAL_LINKS.github },
                  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                  { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}` },
                  { icon: Database, href: (SOCIAL_LINKS as any).kaggle }
                ].filter(link => link.href).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, color: '#22d3ee', backgroundColor: 'rgba(15, 23, 42, 1)' }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 text-gray-400 transition-colors hover:border-cyan-500/50"
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-violet-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-cyan-500/20 relative z-10">
                <img 
                  src="https://github.com/rai8053.png" 
                  alt={DEVELOPER_NAME}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if github image fails
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Raihan+Hazra&background=0D8ABC&color=fff&size=512';
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 bg-slate-800 border border-slate-700 p-2 rounded-xl shadow-lg z-20"
              >
                <Code className="text-cyan-400" size={24} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 -left-4 bg-slate-800 border border-slate-700 p-2 rounded-xl shadow-lg z-20"
              >
                <Database className="text-violet-400" size={24} />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer"
        onClick={() => scrollToSection(SectionId.PROJECTS)}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;