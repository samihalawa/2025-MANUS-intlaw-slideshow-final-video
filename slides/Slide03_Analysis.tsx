import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Webhook, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const ignacioPoints = [
    { text: "Encuentre cualquier dato en expedientes de +3.000 folios, sin que la IA 'invente' respuestas." },
    { text: <>Un Agente IA con 0% Alucinaciones (Garantizado) que <i>cita</i> cada una de sus fuentes.</> },
    { text: "Genere clientes de alto valor en nichos específicos (inmobiliario, herencias) en lugar de depender del SEO." },
];

const simonePoints = [
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
                <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Una Solución a su Medida</h2>
                <p className="text-3xl text-slate-600 mb-12 text-center">Hemos escuchado sus desafíos y diseñado una respuesta directa.</p>
              </motion.div>
              <motion.div 
                className="grid grid-cols-2 gap-10"
                variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
              >
                <Card title="Para el Área Legal y Estrategia (Ignacio)" points={ignacioPoints} icon={<Target size={40}/>} isActive={isActive} />
                <Card title="Para la Operativa Diaria y Clientes (Simone)" points={simonePoints} icon={<Webhook size={40}/>} isActive={isActive} />
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};