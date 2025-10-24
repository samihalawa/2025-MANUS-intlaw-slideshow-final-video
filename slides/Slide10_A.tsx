import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Search, Filter, Send, Target, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const containerVariants: Variants = {
    hidden: { },
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

const steps = [
    { icon: <Search />, title: '1. Defina Objetivo', desc: "Describa su cliente ideal. Ej: 'constructoras en Valencia con licitaciones >500k€'."},
    { icon: <Filter />, title: '2. Búsqueda IA', desc: 'El sistema rastrea BOE, registros y prensa para encontrar coincidencias.'},
    { icon: <Send />, title: '3. Cualificación IA', desc: 'Cada oportunidad es analizada con datos clave y contexto.'},
    { icon: <Target />, title: '4. Contacto Inteligente', desc: 'Genere emails hiper-personalizados para maximizar la respuesta.'},
];

export const Slide10_A: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-24 justify-center bg-slate-50">
           <div className="absolute inset-0 bg-grid-pattern-light opacity-50"></div>
           <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-50 to-transparent z-10"></div>
           <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
            <motion.div
              className="relative z-20"
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-8xl font-black leading-none tracking-tighter text-slate-800 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Motor de Crecimiento Proactivo</h2>
                <p className="text-4xl text-slate-600 mb-16 text-center">Convierta el mercado en su base de datos.</p>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center gap-8"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >
                  {steps.map((step, index) => (
                      <React.Fragment key={step.title}>
                        <motion.div
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 border border-slate-200 text-center flex flex-col items-center shadow-xl w-[340px] h-[420px]"
                            variants={itemVariants}
                        >
                            <div className="w-28 h-28 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-full mb-8 border-4 border-white ring-4 ring-cyan-500/10">
                                {React.cloneElement(step.icon, { size: 56, strokeWidth: 2 })}
                            </div>
                            <h3 className="text-4xl font-bold text-slate-800 mb-4">{step.title}</h3>
                            <p className="text-2xl text-slate-600 flex-grow">{step.desc}</p>
                        </motion.div>
                        {index < steps.length - 1 && (
                            <motion.div variants={itemVariants} className="flex items-center justify-center">
                                <ArrowRight className="w-20 h-20 text-slate-300" />
                            </motion.div>
                        )}
                      </React.Fragment>
                  ))}
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
