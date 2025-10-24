import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { DatabaseZap, Search, FileText, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const features = [
    { icon: <DatabaseZap size={32} />, text: 'Análisis Masivo de Expedientes' },
    { icon: <Search size={32} />, text: 'Extracción Inteligente de Cláusulas' },
    { icon: <FileText size={32} />, text: 'Generación de Resúmenes Fiables' }
];

export const Slide10: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-20 justify-center bg-slate-900 text-white">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-7xl font-bold tracking-tighter mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3: Analista de Documentos</h2>
                    <p className="text-3xl text-slate-400 mb-12">Precisión absoluta garantizada.</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-12 items-center">
                    {/* Left side with features */}
                    <motion.div className="space-y-8" variants={{ visible: { transition: { staggerChildren: 0.15 }}}}>
                        {features.map((feature, i) => (
                            <motion.div key={i} variants={itemVariants} className="flex items-center gap-6">
                                <div className="text-cyan-400 bg-slate-800 p-4 rounded-lg">{feature.icon}</div>
                                <p className="text-3xl text-slate-200">{feature.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right side with guarantee */}
                    <motion.div
                        variants={itemVariants}
                        className="relative p-10 rounded-2xl bg-slate-800/50 border border-slate-700 text-center"
                    >
                        <motion.div 
                            className="absolute -top-8 -right-8"
                            animate={{ rotate: -15, scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <ShieldCheck size={80} className="text-cyan-400" strokeWidth={1.5}/>
                        </motion.div>
                        <p className="text-[12rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">0%</p>
                        <p className="text-5xl font-bold text-cyan-400 -mt-4">Alucinaciones</p>
                        <div className="mt-8 text-left space-y-3">
                            <p className="flex items-center gap-3 text-2xl text-slate-300"><CheckCircle className="text-green-500 flex-shrink-0" /> Cada respuesta vinculada a documentos.</p>
                            <p className="flex items-center gap-3 text-2xl text-slate-300"><CheckCircle className="text-green-500 flex-shrink-0" /> Reembolso total si se detecta una alucinación.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};
