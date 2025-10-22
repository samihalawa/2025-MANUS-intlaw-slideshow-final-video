import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

export const Slide17: React.FC<SlideProps> = ({ isActive }) => {
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
        duration: 1.0,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
  };

  return (
    <SlideWrapper className="flex flex-col items-center justify-center p-16 text-center bg-grid-pattern-light relative pb-48">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-[10rem] leading-none font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
          Gracias.
        </motion.h2>
        <motion.p variants={itemVariants} className="text-4xl text-slate-700 max-w-4xl leading-relaxed">
          Una invitación para liderar el futuro de la práctica legal.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-24 border-t-2 border-cyan-500/50 pt-10 inline-block">
            <p className="text-2xl font-semibold text-slate-800">Sami Halawa</p>
            <p className="text-xl text-slate-600 mb-4">Project Lead</p>
            <p className="text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">INTLAW</span>
                <span className="text-slate-800"> AI</span>
            </p>
            <p className="text-xl text-slate-500 mt-4">sami@agentsai.ltd</p>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl px-8 text-xs text-slate-500 text-center space-y-2">
        <p className="italic">
          <strong>Confidentiality Statement:</strong> This document contains confidential information of AGENTS AI Limited and is for the information of the intended recipient only. Any reproduction, distribution or disclosure of any part of this document is strictly prohibited without the prior written consent of the Company.
        </p>
        <div className="border-t border-slate-200 mt-4 pt-4 space-y-1">
          <p>Copyright © 2025 AGENTS AI Limited. All rights reserved.</p>
          <p>Registered address: 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom</p>
          <p>Tel: +44 7883306011 | Email: info@agentsai.ltd</p>
          <p>Registered in England and Wales as Agents AI Limited (registration number: 16570822). Associated entity: PIME AI LTD.</p>
        </div>
      </div>
    </SlideWrapper>
  );
};