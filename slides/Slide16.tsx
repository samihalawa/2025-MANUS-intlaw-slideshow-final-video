import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { GraduationCap, Link, Lock, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const includedItems = [
    { icon: <GraduationCap size={32} />, title: 'Capacitación & Adopción' },
    { icon: <Link size={32} />, title: 'Integración Completa' },
    { icon: <Lock size={32} />, title: 'Seguridad & Cumplimiento' },
    { icon: <CheckSquare size={32} />, title: 'Criterios de Aceptación' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
      opacity: 1,
      transition: {
          staggerChildren: 0.2,
          delayChildren: 0.2,
      },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] }
  },
};

export const Slide16: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-16 justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? 'visible' : 'hidden'}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Próximos Pasos
              </motion.h2>

              <motion.div variants={itemVariants} className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 mb-8">
                  <h3 className="text-4xl font-bold text-slate-900 mb-6 text-center">Hoja de Ruta Temporal</h3>
                  <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col md:flex-row items-stretch justify-around text-center gap-8">
                      <div className="border-2 border-green-500 rounded-lg p-6 flex-1 flex flex-col items-center">
                          <p className="text-8xl font-bold text-slate-900">30 días</p>
                          <p className="text-base text-green-600 font-bold uppercase mb-2">Implementación Acelerada</p>
                          <div className="my-4 space-y-2 min-h-[68px] flex flex-col justify-center">
                            <p className="text-slate-600 text-lg font-semibold line-through">+€4,000</p>
                            <p className="text-green-600 text-lg font-bold bg-green-100 px-3 py-1 rounded-md inline-block">GRATIS (Antes del 30 Oct)</p>
                          </div>
                          <p className="text-slate-800 mt-auto text-xl font-semibold">Online: 1 de Diciembre</p>
                      </div>

                      <div className="self-center text-5xl font-light text-slate-400">ó</div>

                       <div className="border-2 border-slate-300 rounded-lg p-6 flex-1 flex flex-col items-center">
                          <p className="text-8xl font-bold text-slate-900">90 días</p>
                          <p className="text-base text-cyan-600 font-bold uppercase mb-2">Velocidad Normal</p>
                           <div className="my-4 space-y-2 min-h-[68px] flex flex-col justify-center">
                             <p className="text-slate-600 text-lg font-semibold">Incluido en el plan</p>
                          </div>
                          <p className="text-slate-800 mt-auto text-xl font-semibold">Online: 31 de Enero</p>
                      </div>
                  </div>
              </motion.div>
              
              <motion.div 
                variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                  {includedItems.map((section, i) => (
                      <motion.div 
                        key={section.title} 
                        variants={itemVariants} 
                        className="bg-slate-50/50 p-6 rounded-lg border border-slate-200"
                      >
                          <h4 className="text-3xl font-bold text-slate-900 flex items-center gap-4">
                              <motion.div
                                  animate={{ y: [-2, 2, -2] }}
                                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                              >
                                  {section.icon}
                              </motion.div>
                              {section.title}
                          </h4>
                      </motion.div>
                  ))}
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};