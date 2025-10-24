import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { FastForward, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const addons = [
    {
        icon: <FastForward size={32} />,
        title: "Entrega Acelerada",
        desc: "Implementación de módulos clave para ROI rápido.",
        price: "+€4,000"
    },
    {
        icon: <MessageSquare size={32} />,
        title: "Automatización WhatsApp",
        desc: "Responda y cualifique leads automáticamente por WhatsApp.",
        price: "+€5,000"
    },
    {
        icon: <Phone size={32} />,
        title: "Automatización Telefónica",
        desc: "Agente de voz IA para gestionar y cualificar llamadas.",
        price: "+€6,000"
    }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

export const Slide15_Addons: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-7xl font-bold tracking-tighter text-slate-900 mb-10 text-center" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Módulos Adicionales
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
              >
                  {addons.map((addon, i) => (
                      <motion.div
                          key={addon.title}
                          className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col hover:shadow-xl transition-shadow duration-300"
                          variants={itemVariants}
                      >
                          <div className="text-cyan-500 mb-4">{addon.icon}</div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-3 flex-grow">{addon.title}</h3>
                          <p className="text-lg text-slate-600 mb-6 flex-grow">{addon.desc}</p>
                          <div className="text-3xl font-bold text-slate-900 text-right mt-auto">{addon.price}</div>
                      </motion.div>
                  ))}
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};