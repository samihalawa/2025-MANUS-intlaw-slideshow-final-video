import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Check, FilePlus, Loader, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const CopilotMockup = () => {
    const [status, setStatus] = useState<'prompt' | 'processing' | 'done'>('prompt');

    useEffect(() => {
        const sequence = ['prompt', 'processing', 'done'];
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % sequence.length;
            setStatus(sequence[currentIndex] as any);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-white/80 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <header className="p-5 bg-slate-100/80 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <FilePlus className="w-10 h-10 text-cyan-500" />
                    <h3 className="font-bold text-3xl text-slate-900">INTLAW AI Copilot</h3>
                </div>
                <div className="text-lg font-semibold bg-slate-200 text-slate-600 px-4 py-2 rounded-full">20+ Plantillas</div>
            </header>
            <div className="p-8 space-y-6 h-[400px] flex flex-col justify-center">
                 <div className="bg-cyan-500/10 border border-cyan-500/20 p-5 rounded-lg">
                    <p className="text-cyan-800 text-2xl">Generar contrato compraventa entre TechCorp y InnoSolutions. Cláusula confidencialidad 5 años, arbitraje Madrid, pago 60 días.</p>
                </div>
                <AnimatePresence mode="wait">
                    {status === 'processing' && (
                        <motion.div
                            key="processing"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="bg-slate-100/60 p-5 rounded-lg border border-slate-200 flex items-center gap-4"
                        >
                            <Loader className="w-8 h-8 text-cyan-500 animate-spin"/>
                            <span className="text-2xl font-semibold text-slate-700">IA Procesando...</span>
                        </motion.div>
                    )}
                    {status === 'done' && (
                         <motion.div
                            key="done"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg mt-4 flex items-center gap-4"
                        >
                             <CheckCircle className="w-12 h-12 text-green-500" />
                             <div>
                                <h4 className="font-bold text-3xl text-green-600">Contrato Generado</h4>
                                <p className="text-xl text-slate-700 mt-1">28 páginas. Exportado a PDF + DOCX.</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};


export const Slide12: React.FC<SlideProps> = ({ isActive }) => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
    };
    
    return (
        <SlideWrapper className="p-20 justify-center">
            <motion.div 
              className="grid grid-cols-2 gap-20 items-center"
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
                <motion.div>
                    <motion.div variants={itemVariants} className="inline-block bg-cyan-500/10 text-cyan-600 text-2xl font-bold px-6 py-3 rounded-full mb-6">Módulo 4: Generador de Documentos IA</motion.div>
                    <motion.h2 variants={itemVariants} className="text-8xl font-bold tracking-tighter text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>De Horas a Minutos:</motion.h2>
                    <motion.p variants={itemVariants} className="text-4xl text-slate-600 mb-10">Solución a la redacción manual y repetitiva.</motion.p>
                    <motion.div 
                        className="space-y-6 text-3xl text-slate-700"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        <motion.div variants={itemVariants} className="flex items-start gap-4"><Check className="text-cyan-500 mt-1 flex-shrink-0 w-8 h-8"/><span><strong className="font-semibold text-slate-800">Lenguaje Natural:</strong> Describa el documento, la IA generará un borrador.</span></motion.div>
                        <motion.div variants={itemVariants} className="flex items-start gap-4"><Check className="text-cyan-500 mt-1 flex-shrink-0 w-8 h-8"/><span><strong className="font-semibold text-slate-800">Integración CRM:</strong> Inserte datos de clientes y casos automáticamente.</span></motion.div>
                        <motion.div variants={itemVariants} className="flex items-start gap-4"><Check className="text-cyan-500 mt-1 flex-shrink-0 w-8 h-8"/><span><strong className="font-semibold text-slate-800">Plantillas Inteligentes:</strong> Acceda y personalice plantillas legales adaptables.</span></motion.div>
                    </motion.div>
                </motion.div>
                <motion.div variants={{...itemVariants, hidden: {...itemVariants.hidden, x: 20}, visible: {...itemVariants.visible, x: 0}}}>
                    <CopilotMockup />
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};