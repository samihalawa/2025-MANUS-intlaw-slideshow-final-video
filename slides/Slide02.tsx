import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Eye, LayoutGrid, ThumbsUp, CircleDollarSign, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

// Adjusted icon size and stroke width for a cleaner look
const agendaItems = [
  { text: "Desafíos", icon: <Target size={32} strokeWidth={1.5} /> },
  { text: "Visión INTLAW AI", icon: <Eye size={32} strokeWidth={1.5} /> },
  { text: "Soluciones", icon: <LayoutGrid size={32} strokeWidth={1.5} /> },
  { text: "Beneficios", icon: <ThumbsUp size={32} strokeWidth={1.5} /> },
  { text: "Inversión", icon: <CircleDollarSign size={32} strokeWidth={1.5} /> },
  { text: "Próximos Pasos", icon: <MoveRight size={32} strokeWidth={1.5} /> }
];

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
  hidden: {},
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      duration: 1.0,
      ease: [0.43, 0.13, 0.23, 0.96]
    } 
  },
};

export const Slide02: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="flex flex-col items-center justify-center p-24 bg-gradient-to-r from-white via-white to-slate-100/80">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="w-full max-w-3xl"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-9xl font-bold tracking-tighter text-slate-900 mb-20" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Agenda
        </motion.h2>
        <motion.div
          className="space-y-5" // Increased vertical spacing
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Updated styling to better match the provided image: cleaner, flatter design
              className="flex items-center gap-6 p-5 bg-white rounded-lg border border-slate-200/90 shadow-sm"
              style={{ width: '560px' }} // Set a fixed width for alignment
            >
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-cyan-500/5 text-cyan-500 rounded-full">
                {item.icon}
              </div>
              <p className="text-3xl font-medium text-slate-800">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};