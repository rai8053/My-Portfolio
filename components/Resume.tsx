import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { SectionId } from '../types';
import { RESUME_SUMMARY, EXPERIENCE, EDUCATION, RESUME_URL } from '../constants';

const Resume: React.FC = () => {
  return (
    <section id={SectionId.RESUME} className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume & Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Summary Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-8"
          >
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400"><Briefcase size={20}/></span>
                Profile Summary
              </h3>
              <ul className="space-y-4">
                {RESUME_SUMMARY.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="flex-shrink-0 text-cyan-500 mt-1" size={16} />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <a 
                  href={RESUME_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
                >
                  <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                  Download Full Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Timeline Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-10"
          >
            
            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <span className="w-8 h-1 bg-violet-500 rounded-full"></span> Experience
              </h3>
              <div className="border-l-2 border-slate-700 ml-3 space-y-8">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500" />
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors">
                      <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-medium mb-2">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-cyan-400 font-medium text-sm mb-3">{exp.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> Education
              </h3>
              <div className="border-l-2 border-slate-700 ml-3 space-y-8">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500" />
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                      <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-2">
                        {edu.year}
                      </span>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <GraduationCap size={16} />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      <p className="text-gray-500 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;