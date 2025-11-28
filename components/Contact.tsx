import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Code } from 'lucide-react';
import { SectionId } from '../types';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400">Interested in collaborating or hiring? I build reliable backends and AI tools — let’s talk.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              I'm currently seeking entry-level backend roles or internship opportunities. 
              Specializing in Python, API development, and automation.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Me</p>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-white font-medium hover:text-cyan-400 transition-colors">
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-violet-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Kolkata, India</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <h4 className="text-white font-semibold mb-4">Find me on</h4>
              <div className="flex gap-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-all">
                  <Github size={20} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all">
                  <Linkedin size={20} />
                </a>
                 <a href={SOCIAL_LINKS.docker} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-slate-700 transition-all">
                  <Code size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Simple Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Hello, I'd like to discuss a project..." />
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;