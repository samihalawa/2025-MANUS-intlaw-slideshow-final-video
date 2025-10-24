import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

export const Slide01: React.FC<SlideProps> = ({ isActive }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Slower stagger
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
  };


  return (
    <SlideWrapper className="flex items-center justify-center p-16 bg-grid-pattern-light">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      <motion.div 
        className="relative text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
      >
        <motion.div
          variants={itemVariants}
          className="inline-block p-8 bg-white rounded-2xl shadow-xl mb-10 border"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Scale className="w-28 h-28 text-cyan-500" strokeWidth={1.5}/>
          </motion.div>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-[15rem] leading-none font-bold tracking-tighter"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">INTLAW</span>
          <span className="text-slate-800"> AI</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-10 text-7xl text-slate-700 font-light tracking-wide"
        >
          La Práctica Legal, Reinventada.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-24 inline-block bg-slate-100/50 border-2 border-slate-200 rounded-xl px-20 py-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0px rgba(56, 189, 248, 0.3)",
                "0 0 0 25px rgba(56, 189, 248, 0)",
                "0 0 0 0px rgba(56, 189, 248, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <p className="text-3xl font-bold tracking-widest uppercase text-cyan-500">Propuesta de Colaboración</p>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 text-lg text-slate-500 font-medium">
          AGENTS AI Limited · 2025
        </div>
      </motion.div>
    </SlideWrapper>
  );
};