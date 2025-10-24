import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Zap, TrendingUp, ShieldCheck, Target } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const containerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
    hidden: {}
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const benefits = [
    { icon: <Zap size={48} />, title: 'Más Horas Facturables', desc: 'Recupere hasta un 60% del tiempo invertido en tareas repetitivas y de bajo valor.' },
    { icon: <TrendingUp size={48}/>, title: 'Crecimiento sin Aumentar Costes', desc: 'Asuma un mayor volumen de casos y oportunidades sin necesidad de ampliar su plantilla.' },
    { icon: <ShieldCheck size={48}/>, title: 'Precisión Documental Garantizada', desc: 'Elimine el riesgo de error humano en la redacción y análisis de documentos críticos.' },
    { icon: <Target size={48}/>, title: 'Inteligencia de Mercado Proactiva', desc: 'Deje de esperar clientes. Identifique y contacte oportunidades de alto valor antes que nadie.' },
];

export const Slide14: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-24 justify-center bg-grid-pattern-light">
           <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"></div>
            <motion.div
                className="w-full max-w-6xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-8xl font-bold tracking-tighter text-slate-900 mb-16 text-center" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Beneficios Clave
                </motion.h2>
                <motion.div 
                    className="space-y-8"
                    variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                >
                    {benefits.map((benefit, i) => (
                        <motion.div 
                            key={benefit.title} 
                            variants={itemVariants}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/80 flex items-center gap-10 shadow-lg"
                        >
                            <motion.div
                                className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-full border-4 border-white ring-4 ring-cyan-500/10"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                            >
                                {benefit.icon}
                            </motion.div>
                            <div>
                                <h3 className="text-4xl font-bold text-slate-900">{benefit.title}</h3>
                                <p className="text-2xl text-slate-600 mt-2">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
