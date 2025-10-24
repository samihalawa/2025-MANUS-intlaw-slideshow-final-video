import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { DatabaseZap, Search, FileText, ShieldCheck } from 'lucide-react';
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

export const Slide10: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-20 justify-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3: Analista Masivo de Documentos</h2>
                    <p className="text-3xl text-slate-600 mb-10">Precisión absoluta garantizada.</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-6">
                         <motion.div variants={itemVariants} className="bg-slate-50/50 p-6 rounded-lg flex items-center gap-6 border border-slate-200">
                            <div className="text-cyan-500"><DatabaseZap size={40}/></div>
                            <p className="text-3xl text-slate-700">Análisis Masivo de Expedientes</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-slate-50/50 p-6 rounded-lg flex items-center gap-6 border border-slate-200">
                            <div className="text-cyan-500"><Search size={40} /></div>
                            <p className="text-3xl text-slate-700">Extracción de Entidades y Cláusulas</p>
                        </motion.div>
                         <motion.div variants={itemVariants} className="bg-slate-50/50 p-6 rounded-lg flex items-center gap-6 border border-slate-200">
                            <div className="text-cyan-500"><FileText size={40} /></div>
                            <p className="text-3xl text-slate-700">Generación de Resúmenes Ejecutivos</p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <motion.div variants={itemVariants} className="bg-slate-50/50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="text-6xl font-bold text-slate-900">100x</p>
                                <p className="text-lg text-slate-500 uppercase tracking-wider mt-1">Análisis Acelerado</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="bg-slate-50/50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="text-6xl font-bold text-slate-900">80%</p>
                                <p className="text-lg text-slate-500 uppercase tracking-wider mt-1">Ahorro de Tiempo</p>
                            </motion.div>
                        </div>
                    </div>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="bg-blue-600/10 border-2 border-blue-500/50 rounded-xl p-8 flex flex-col justify-center items-center text-center"
                    >
                        <motion.div
                             animate={{ scale: [1, 1.05, 1] }}
                             transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <ShieldCheck size={52} className="text-blue-600 mb-6" />
                        </motion.div>
                        
                        <h3 className="text-5xl font-bold text-blue-600">Garantizado</h3>
                        <p className="text-8xl leading-none font-bold text-slate-900 mt-2">0%</p>
                        <p className="text-4xl font-semibold text-blue-600">Alucinaciones</p>
                        
                        <div className="mt-6 text-left p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 w-full">
                            <p className="font-bold text-blue-700 text-lg">¿Cómo lo garantizamos?</p>
                            <p className="text-slate-700 text-lg mt-1">4 agentes IA verifican cada dato contra las fuentes originales.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};