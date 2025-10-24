import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, Users, Clock, Euro } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const AnimatedNumber = ({ value, isActive }: { value: number, isActive: boolean }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        if (isActive) {
            const controls = animate(count, value, { 
                duration: 2.0, // Slower animation
                ease: "easeOut",
                delay: 0.8,
            });
            return () => {
              controls.stop();
            }
        } else {
          count.set(0);
        }
    }, [isActive, value, count]);

    return <motion.span>{rounded}</motion.span>;
};

const stats = [
    { value: '>85%', label: 'Potencial Automatización', icon: <Bot size={48} /> },
    { value: '+30%', label: 'Proyección Captación', icon: <Users size={48} /> },
    { value: '+40%', label: 'Incremento Rentabilidad', icon: <Euro size={48} /> },
    { value: '<60s', label: 'Tiempo de Respuesta', icon: <Clock size={48} /> },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

export const Slide04: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-16 flex flex-col items-center justify-center text-center">
      <motion.div 
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-9xl font-bold tracking-tighter text-slate-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Visión: INTLAW AI
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-8 text-5xl text-slate-600 font-light"
        >
          Un ecosistema legal inteligente y proactivo.
        </motion.p>

        <motion.div
          className="mt-20 w-full max-w-7xl"
          variants={itemVariants}
        >
          <motion.h3
              className="text-4xl font-bold text-slate-700 mb-12 tracking-wider uppercase"
              variants={itemVariants}
          >
              Dashboard de Impacto
          </motion.h3>
          <motion.div 
              className="grid grid-cols-2 gap-10"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {},
              }}
          >
              {stats.map((stat, index) => {
                  const isAnimatable = !isNaN(parseInt(stat.value.replace(/[^0-9]/g, '')));
                  const numberValue = isAnimatable ? parseInt(stat.value.replace(/[^0-9]/g, '')) : 0;
                  
                  return (
                      <motion.div
                        key={stat.label}
                        className="bg-slate-50/50 rounded-2xl p-10 border-2 border-slate-200 shadow-xl flex flex-col items-center justify-center hover:bg-white transition-all duration-300"
                        variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                        whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
                      >
                          <motion.div
                            className="text-cyan-500 mb-10"
                            animate={{ scale: [1, 1.15, 1], y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                          >
                            {stat.icon}
                          </motion.div>
                          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                              {stat.value.startsWith('>') && '>'}
                              {stat.value.startsWith('+') && '+'}
                               {stat.value.startsWith('<') && '<'}
                              {isAnimatable ? <AnimatedNumber value={numberValue} isActive={isActive} /> : stat.value}
                              {stat.value.endsWith('%') && '%'}
                              {stat.value.endsWith('s') && 's'}
                          </div>
                          <div className="mt-8 text-3xl font-bold text-slate-600 uppercase tracking-widest">{stat.label}</div>
                      </motion.div>
                  );
              })}
          </motion.div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};