import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Clock, Workflow, FileText, Database } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const challenges = [
  { title: "Ineficiencia", desc: "Consumen hasta un 40% del tiempo de los asociados.", icon: <Clock size={32} /> },
  { title: "Procesos Manuales", desc: "Generan un 15% más de errores que los procesos automatizados.", icon: <Workflow size={32} /> },
  { title: "Documentos Lentos", desc: "La redacción de un solo contrato puede tardar hasta 5 horas.", icon: <FileText size={32} /> },
  { title: "Análisis Masivo", desc: "Imposibilidad de analizar el 90% de los documentos de un caso.", icon: <Database size={32} /> },
];

const gridVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Slide03: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-16 justify-center">
      <motion.h2 
        className="text-8xl font-bold tracking-tighter text-slate-900 mb-12" 
        style={{ fontFamily: "'Playfair Display', serif" }}
        initial={{ y: -20, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : {}}
      >
        Desafíos Clave
      </motion.h2>
      <motion.div 
        className="grid grid-cols-2 gap-8"
        variants={gridVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        {challenges.map((challenge, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-slate-50 rounded-lg p-8 border-l-4 border-cyan-500 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105"
          >
            <div className="flex items-center gap-6 mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg">
                {challenge.icon}
              </div>
              <h3 className="text-4xl font-bold text-slate-800">{challenge.title}</h3>
            </div>
            <p className="text-2xl text-slate-600 pl-22">{challenge.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};
