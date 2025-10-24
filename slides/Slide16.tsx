import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { GraduationCap, Link, Lock, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const includedItems = [
    { icon: <GraduationCap size={28} />, title: 'Capacitación & Adopción' },
    { icon: <Link size={28} />, title: 'Integración Completa' },
    { icon: <Lock size={28} />, title: 'Seguridad & Cumplimiento' },
    { icon: <CheckSquare size={28} />, title: 'Criterios de Aceptación' },
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
        <SlideWrapper className="p-12 justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? 'visible' : 'hidden'}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-7xl font-bold tracking-tighter text-slate-900 mb-10 text-center" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Próximos Pasos
              </motion.h2>

              <motion.div variants={itemVariants} className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 mb-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Hoja de Ruta</h3>
                  <div className="bg-white rounded-lg p-6 border-2 border-cyan-500 shadow-lg flex items-center justify-around text-center">
                      <div>
                          <p className="text-base text-cyan-600 font-bold uppercase mb-2">Fase 1: Implementación Core</p>
                          <p className="text-7xl font-bold text-slate-900">80 días</p>
                          <p className="text-slate-600 mt-2 text-lg max-w-sm">Despliegue de módulos de crecimiento y fiabilidad.</p>
                      </div>
                      <div className="text-5xl font-light text-slate-300">+</div>
                      <div>
                          <p className="text-base text-cyan-600 font-bold uppercase mb-2">Fase 2: Optimización Continua</p>
                          <p className="text-7xl font-bold text-slate-900">Meses 3-12</p>
                          <p className="text-slate-600 mt-2 text-lg max-w-sm">Ajuste colaborativo para maximizar rendimiento y adopción.</p>
                      </div>
                  </div>
              </motion.div>
              
              <motion.div 
                variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                className="grid grid-cols-2 gap-8"
              >
                  {includedItems.map((section, i) => (
                      <motion.div 
                        key={section.title} 
                        variants={itemVariants} 
                        className="bg-slate-50/50 p-6 rounded-lg border border-slate-200"
                      >
                          <h4 className="text-2xl font-bold text-slate-900 flex items-center gap-4">
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