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
        <div className="w-full bg-white/80 rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
            <header className="p-7 bg-slate-100/80 border-b-2 border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <FilePlus className="w-12 h-12 text-cyan-500" />
                    <h3 className="font-bold text-4xl text-slate-900">INTLAW AI Copilot</h3>
                </div>
                <div className="text-2xl font-bold bg-slate-200 text-slate-600 px-6 py-3 rounded-full">20+ Plantillas</div>
            </header>
            <div className="p-10 space-y-8 h-[450px] flex flex-col justify-center">
                 <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/20 p-7 rounded-xl">
                    <p className="text-cyan-800 text-3xl font-medium">Generar borrador de contrato de compraventa mercantil entre TechCorp SL y InnoSolutions SA, incluyendo una cláusula de confidencialidad de 5 años, arbitraje en Madrid y condiciones de pago a 60 días.</p>
                </div>
                <AnimatePresence mode="wait">
                    {status === 'processing' && (
                        <motion.div
                            key="processing"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="bg-slate-100/60 p-7 rounded-xl border-2 border-slate-200 flex items-center gap-6"
                        >
                            <Loader className="w-12 h-12 text-cyan-500 animate-spin"/>
                            <span className="text-3xl font-bold text-slate-700">IA Procesando...</span>
                        </motion.div>
                    )}
                    {status === 'done' && (
                         <motion.div
                            key="done"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="p-8 bg-green-500/10 border-2 border-green-500/20 rounded-xl mt-6 flex items-center gap-6"
                        >
                             <CheckCircle className="w-16 h-16 text-green-500" />
                             <div>
                                <h4 className="font-bold text-4xl text-green-600">Contrato Generado</h4>
                                <p className="text-2xl text-slate-700 mt-2">28 páginas. Exportado a PDF + DOCX.</p>
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
                    <motion.div
                      variants={itemVariants}
                      className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-600 text-3xl font-bold px-8 py-4 rounded-full mb-8 border-2 border-cyan-500/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      Módulo 4: Generador de Documentos IA
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-9xl font-bold tracking-tighter text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>De Horas a Minutos:</motion.h2>
                    <motion.p variants={itemVariants} className="text-5xl text-slate-600 mb-12 font-light">La solución a la redacción manual y repetitiva de documentos.</motion.p>
                    <motion.div
                        className="space-y-8 text-3xl text-slate-700"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        <motion.div variants={itemVariants} className="flex items-start gap-5" whileHover={{ x: 5 }}><Check className="text-cyan-500 mt-1 flex-shrink-0 w-10 h-10"/><span><strong className="font-bold text-slate-800">Generación desde Lenguaje Natural:</strong> Describa el documento que necesita y la IA generará un borrador completo y estructurado.</span></motion.div>
                        <motion.div variants={itemVariants} className="flex items-start gap-5" whileHover={{ x: 5 }}><Check className="text-cyan-500 mt-1 flex-shrink-0 w-10 h-10"/><span><strong className="font-bold text-slate-800">Integración de Datos de CRM:</strong> Inserte automáticamente datos de clientes y casos en los documentos, eliminando errores manuales.</span></motion.div>
                        <motion.div variants={itemVariants} className="flex items-start gap-5" whileHover={{ x: 5 }}><Check className="text-cyan-500 mt-1 flex-shrink-0 w-10 h-10"/><span><strong className="font-bold text-slate-800">Biblioteca de Plantillas Inteligentes:</strong> Acceda y personalice una biblioteca de plantillas legales que se adaptan dinámicamente al contexto del caso.</span></motion.div>
                    </motion.div>
                </motion.div>
                <motion.div variants={{...itemVariants, hidden: {...itemVariants.hidden, x: 20}, visible: {...itemVariants.visible, x: 0}}}>
                    <CopilotMockup />
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};