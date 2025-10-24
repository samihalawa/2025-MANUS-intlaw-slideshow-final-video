import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Search, Filter, Send, Target } from 'lucide-react';
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
        <SlideWrapper className="p-24 justify-center bg-[#f7f8fa]">
           <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent"></div>
           <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-[100px] font-black leading-none tracking-tighter text-slate-800 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Motor de Crecimiento Proactivo</h2>
                <p className="text-4xl text-slate-600 mb-20 text-center">Convierta el mercado en su base de datos.</p>
              </motion.div>
              <motion.div 
                className="grid grid-cols-4 gap-8"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.15 }
                  }
                }}
              >
                  {steps.map((step) => (
                      <motion.div 
                          key={step.title}
                          className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300"
                          style={{ borderColor: 'rgba(255, 255, 255, 0.5)'}}
                          variants={itemVariants}
                      >
                          <div className="w-24 h-24 flex items-center justify-center bg-[#e0f5fe] text-[#00a9e0] rounded-2xl mb-8">
                              {React.cloneElement(step.icon, { size: 56, strokeWidth: 1.5 })}
                          </div>
                          <h3 className="text-3xl font-bold text-slate-800 mb-5">{step.title}</h3>
                          <p className="text-2xl text-slate-600 flex-grow">{step.desc}</p>
                      </motion.div>
                  ))}
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};