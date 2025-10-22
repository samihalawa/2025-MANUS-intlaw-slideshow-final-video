import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Zap, TrendingUp, ShieldCheck, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const benefits = [
    { icon: <Zap size={36} />, title: 'Horas Facturables, No Administrativas', desc: 'Recupere hasta un 60% del tiempo que su equipo dedica a tareas repetitivas y reinviértalo en estrategia legal de alto valor.' },
    { icon: <TrendingUp size={36}/>, title: 'Crecimiento sin Aumentar Costes Fijos', desc: 'Asuma más casos y clientes de mayor valor sin la necesidad de ampliar su plantilla de asociados.' },
    { icon: <ShieldCheck size={36}/>, title: 'Precisión Documental Garantizada', desc: 'Elimine el riesgo de error humano en la revisión de documentos con un sistema que cita cada una de sus fuentes.' },
    { icon: <Target size={36}/>, title: 'Inteligencia de Mercado Proactiva', desc: 'Deje de esperar clientes. Identifique y contacte proactivamente con las oportunidades de mayor rentabilidad del mercado.' },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

export const Slide14: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 justify-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-7xl font-bold tracking-tighter text-slate-900 mb-12 text-center" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                Beneficios Clave
                </motion.h2>
                <motion.div 
                    className="grid grid-cols-2 gap-8"
                    variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                >
                    {benefits.map((benefit, i) => (
                        <motion.div 
                            key={benefit.title} 
                            variants={itemVariants}
                            className="bg-slate-50/50 rounded-xl p-6 border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <motion.div
                                    className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                                >
                                    {benefit.icon}
                                </motion.div>
                                <h3 className="text-3xl font-bold text-slate-900">{benefit.title}</h3>
                            </div>
                            <p className="text-xl text-slate-600 pl-20">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
