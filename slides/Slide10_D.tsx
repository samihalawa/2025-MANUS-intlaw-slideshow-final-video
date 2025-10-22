import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Play, DatabaseZap, Users, Mail, Loader, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

interface SlideProps {
  isActive: boolean;
}

const resultsData = [
    { lead: 'Global Estate Corp (CEO: Ana García)', status: 'pending' },
    { lead: 'Luxury Properties SL (Dir. Legal: Carlos Soler)', status: 'pending' },
    { lead: 'Finca Urbana SA (CEO: Elena Ruiz)', status: 'pending' },
];

const CampaignWorkflow = ({ isActive }: { isActive: boolean }) => {
    const [start, setStart] = useState(false);
    const [results, setResults] = useState(resultsData);

    useEffect(() => {
        if (isActive) {
            const runSequence = () => {
                setStart(true);
                setResults(resultsData.map(r => ({ ...r, status: 'pending' })));
            };
            const sequenceTimeout = setTimeout(runSequence, 500);
            const loopInterval = setInterval(runSequence, 9000);
            return () => {
                clearTimeout(sequenceTimeout);
                clearInterval(loopInterval);
            };
        } else {
            setStart(false);
            setResults(resultsData.map(r => ({ ...r, status: 'pending' })));
        }
    }, [isActive]);

    useInterval(() => {
        if (!start || !isActive) return;
        
        const nextPendingIndex = results.findIndex(r => r.status === 'pending');
        if (nextPendingIndex !== -1) {
            setResults(prev => prev.map((r, i) => i === nextPendingIndex ? { ...r, status: 'sending' } : r));
            setTimeout(() => {
                 setResults(prev => prev.map((r, i) => i === nextPendingIndex ? { ...r, status: 'sent' } : r));
            }, 1000);
        } else {
             setTimeout(() => setStart(false), 2000);
        }
    }, start && isActive ? 1500 : null);

    const processVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: (i: number) => ({ scale: 1, opacity: 1, transition: { delay: i * 0.4 + (start ? 0.5 : 0) } })
    };
    
    return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-10">
        {/* Input */}
        <div>
            <label className="text-2xl font-semibold text-slate-600 mb-3 block">Describa su cliente ideal (Lenguaje Natural):</label>
            <div className="flex gap-6">
                <textarea 
                    className="w-full bg-slate-100/70 border-2 border-slate-300 rounded-lg p-4 text-2xl text-slate-800 resize-none"
                    rows={2}
                    defaultValue="Empresas de Real Estate en Madrid que hayan realizado transacciones > 1M€ en los últimos 6 meses."
                    readOnly
                />
                <div 
                    className="bg-cyan-500 text-white font-bold py-4 px-6 rounded-lg text-2xl flex items-center justify-center gap-3 transition-colors"
                >
                    <Play size={24}/> Iniciar
                </div>
            </div>
        </div>

        {/* Processing */}
        <div className="flex justify-around items-center my-10 relative">
             <svg className="absolute w-full h-px top-1/2 -translate-y-1/2 -z-10" >
                <motion.line x1="15%" y1="0" x2="85%" y2="0" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: start ? 1 : 0 }}
                    transition={{ duration: 1, delay: start ? 0.5 : 0 }}
                />
            </svg>
            {[
                { icon: <DatabaseZap size={36}/>, text: 'Búsqueda Multi-Fuente' },
                { icon: <Users size={36}/>, text: 'Cualificación y Enriquecimiento' },
                { icon: <Mail size={36}/>, text: 'Copilot de Contacto' },
            ].map((step, i) => (
                <motion.div key={i} custom={i} variants={processVariants} initial="hidden" animate={start ? "visible" : "hidden"} className="flex flex-col items-center gap-4 text-center bg-white px-5">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center border-2 border-slate-200 text-cyan-500">{step.icon}</div>
                    <p className="font-semibold text-slate-700 text-lg max-w-[180px]">{step.text}</p>
                </motion.div>
            ))}
        </div>

        {/* Output */}
        <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Resultados de Campaña Activa:</h3>
            <div className="bg-slate-50/80 rounded-lg border border-slate-200 p-5 space-y-4 min-h-[220px]">
                <AnimatePresence>
                 {results.map((result, i) => (
                     result.status !== 'pending' &&
                        <motion.div
                            key={result.lead + i}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white p-4 rounded-md flex justify-between items-center border border-slate-200 shadow-sm"
                        >
                            <p className="font-semibold text-2xl text-slate-800">{result.lead}</p>
                            <AnimatePresence mode="wait">
                                {result.status === 'sent' && <motion.div initial={{scale:0.8, opacity: 0}} animate={{scale:1, opacity: 1}} exit={{scale:0.8, opacity: 0}} key="sent" className="text-lg font-semibold bg-green-500/10 text-green-600 px-4 py-2 rounded-full flex items-center gap-2"><CheckCircle size={20}/>Email Enviado</motion.div>}
                                {result.status === 'sending' && <motion.div initial={{scale:0.8, opacity: 0}} animate={{scale:1, opacity: 1}} exit={{scale:0.8, opacity: 0}} key="sending" className="text-lg font-semibold bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full flex items-center gap-2"><Loader size={20} className="animate-spin"/> Enviando...</motion.div>}
                            </AnimatePresence>
                        </motion.div>
                 ))}
                 </AnimatePresence>
            </div>
        </div>
    </div>
    )
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

export const Slide10_D: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 flex flex-col items-center justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 2: Buscador Proactivo de Clientes</h2>
                <p className="text-3xl text-slate-600 mb-10 text-center">De una idea a una campaña de prospección en un solo clic.</p>
              </motion.div>
              <motion.div
                className="w-full"
                variants={itemVariants}
              >
                <CampaignWorkflow isActive={isActive} />
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};