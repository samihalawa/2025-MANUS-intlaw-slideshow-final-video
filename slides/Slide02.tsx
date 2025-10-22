import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Eye, LayoutGrid, ThumbsUp, CircleDollarSign, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const agendaItems = [
  { text: "Desafíos", icon: <Target size={48} /> },
  { text: "Visión INTLAW AI", icon: <Eye size={48} /> },
  { text: "Módulos de Solución", icon: <LayoutGrid size={48} /> },
  { text: "Beneficios Clave", icon: <ThumbsUp size={48} /> },
  { text: "Inversión", icon: <CircleDollarSign size={48} /> },
  { text: "Próximos Pasos", icon: <MoveRight size={48} /> }
];

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } // Slower stagger
  },
  hidden: {},
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 1.0, // Slower, smoother animation
      ease: [0.43, 0.13, 0.23, 0.96]
    } 
  },
};

export const Slide02: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-24 justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="w-full max-w-4xl"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-8xl font-bold tracking-tighter text-slate-900 mb-16" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Agenda
        </motion.h2>
        <motion.div
          className="space-y-6"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-8 p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-slate-100 text-cyan-500 rounded-lg">
                {item.icon}
              </div>
              <p className="text-4xl font-medium text-slate-800">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};