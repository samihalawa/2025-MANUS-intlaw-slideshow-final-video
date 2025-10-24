import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Webhook, CircleCheckBig } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const strategicPoints = [
    { text: "Encuentre cualquier dato en expedientes de +3.000 folios, sin que la IA 'invente' respuestas." },
    { text: "Un Agente IA con 0% Alucinaciones (Garantizado) que cita cada una de sus fuentes." },
    { text: "Genere clientes de alto valor en nichos específicos (inmobiliario, herencias) en lugar de depender del SEO." }
];

const operationalPoints = [
    { text: "Automatice todo el flujo de captación: desde la consulta inicial hasta la recogida de documentos y la propuesta de honorarios." },
    { text: "Integre un canal de captación inteligente en su web actual (compatible con WordPress)." },
    { text: "Reduzca drásticamente el tiempo de redacción de documentos rutinarios (contratos, actas) con plantillas inteligentes." },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const Card = ({ title, points, icon }: { title: string; points: { text: React.ReactNode }[]; icon: React.ReactNode; }) => (
    <motion.div 
        className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 flex flex-col h-full"
        variants={itemVariants}
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-cyan-500/10 text-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
        </div>
        <ul 
            className="space-y-4 text-xl text-slate-700 flex-grow"
        >
            {points.map((point, index) => (
                <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    variants={itemVariants}
                >
                    <CircleCheckBig className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                    <span>{point.text}</span>
                </motion.li>
            ))}
        </ul >
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
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Una Solución a su Medida</h2>
                <p className="text-3xl text-slate-600 mb-12 text-center">Hemos escuchado sus desafíos y diseñado una respuesta directa.</p>
              </motion.div>
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
              >
                <Card title="Para el Área Legal y Estrategia (Ignacio)" points={strategicPoints} icon={<Target size={32}/>} />
                <Card title="Para la Operativa Diaria y Clientes (Simone)" points={operationalPoints} icon={<Webhook size={32}/>} />
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};