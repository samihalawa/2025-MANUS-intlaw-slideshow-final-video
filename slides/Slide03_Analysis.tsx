import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Webhook, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const strategicPoints = [
    { text: "Analice expedientes masivos con datos 100% verificables." },
    { text: "Genere clientes proactivos en nichos de alto valor." },
    { text: "Use un Agente IA con 0% alucinaciones garantizado." }
];

const operationalPoints = [
    { text: "Automatice el flujo de captación de clientes." },
    { text: "Integre un asistente inteligente en su web." },
    { text: "Reduzca el tiempo de redacción de documentos." },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const Card = ({ title, points, icon, isActive }: { title: string; points: { text: React.ReactNode }[]; icon: React.ReactNode; isActive: boolean; }) => (
    <motion.div 
        className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 flex flex-col h-full"
        variants={itemVariants}
    >
        <motion.div 
            className="flex items-center gap-6 mb-8"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
        >
            <motion.div variants={itemVariants} className="w-20 h-20 bg-cyan-500/10 text-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-4xl font-bold text-slate-800">{title}</motion.h3>
        </motion.div>
        <motion.ul 
            className="space-y-4 text-2xl text-slate-700 flex-grow"
            variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
        >
            {points.map((point, index) => (
                <motion.li 
                    key={index} 
                    className="flex items-start gap-4"
                    variants={itemVariants}
                >
                    <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                    <span>{point.text}</span>
                </motion.li>
            ))}
        </motion.ul>
    </motion.div>
);

export const Slide03_Analysis: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-16 justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Una Solución a Medida</h2>
                <p className="text-3xl text-slate-600 mb-12 text-center">Escuchamos sus desafíos y diseñamos una respuesta.</p>
              </motion.div>
              <motion.div 
                className="grid grid-cols-2 gap-10"
                variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
              >
                <Card title="Área Estratégica" points={strategicPoints} icon={<Target size={40}/>} isActive={isActive} />
                <Card title="Operativa Diaria" points={operationalPoints} icon={<Webhook size={40}/>} isActive={isActive} />
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};