import React from 'react';
import { motion } from 'framer-motion';
import { Pointer } from 'lucide-react';

interface CursorProps {
  x: number;
  y: number;
  visible: boolean;
  click?: boolean;
}

export const Cursor: React.FC<CursorProps> = ({ x, y, visible, click }) => {
  return (
    <motion.div
      className="absolute z-[1000] pointer-events-none"
      initial={{ x: -50, y: -50, opacity: 0 }}
      animate={{ 
        x: x ? x : 0, 
        y: y ? y : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        animate={{ scale: click ? [1, 0.8, 1] : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Pointer size={48} className="text-cyan-400 drop-shadow-lg" fill="rgba(0, 229, 255, 0.6)" />
      </motion.div>
    </motion.div>
  );
};
