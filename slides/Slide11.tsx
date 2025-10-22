import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Folder, FileText, Bot, User, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

interface SlideProps {
  isActive: boolean;
}

const DocumentViewer = ({ showHighlight }: { showHighlight: boolean }) => (
    <div className="bg-white h-full rounded-lg shadow-inner border border-slate-200 p-6 relative overflow-hidden">
        <p className="font-bold text-xl mb-2">Contrato_Principal.pdf</p>
        <div className="text-slate-500 text-lg space-y-3 font-mono leading-relaxed">
            <p>...sección 4. PROPIEDAD INTELECTUAL...</p>
            <p>4.A. La Vendedora garantiza que posee todos los derechos sobre los activos.</p>
            <p className="relative">
                <AnimatePresence>
                {showHighlight && (
                    <motion.span 
                        className="absolute -inset-x-1 inset-y-0 bg-yellow-200/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    />
                )}
                </AnimatePresence>
                <span className="relative">4.B. Tras la transacción, todos los derechos de Propiedad Intelectual serán transferidos en su totalidad a la Compradora.</span>
            </p>
            <p>...el resto del documento continúa...</p>
        </div>
    </div>
);


const chatSequence = [
    { from: 'user', text: 'Analizar el expediente, identificar cláusulas de incumplimiento y buscar contradicciones entre documentos.' },
    { from: 'bot', type: 'processing' },
    { from: 'bot', type: 'text', text: "Análisis completado. Destaca una contradicción entre la cláusula 4.B del Contrato Principal (pág. 12) y el Anexo II (pág. 4) sobre P.I. ¿Desea un informe?" },
];

export const Slide11: React.FC<SlideProps> = ({ isActive }) => {
    const [messages, setMessages] = useState([chatSequence[0]]);
    const [showHighlight, setShowHighlight] = useState(false);

    useInterval(() => {
        if (!isActive) return;
        setMessages(prev => {
            if (prev.length < chatSequence.length) {
                const nextMessage = chatSequence[prev.length];
                if (nextMessage.type === 'text') {
                    setShowHighlight(true);
                }
                return [...prev, nextMessage];
            } else {
                setShowHighlight(false);
                return [chatSequence[0]];
            }
        });
    }, 4000);

    return (
        <SlideWrapper className="p-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Análisis IA con Fuentes Citadas</h2>
              <p className="text-slate-600 text-center mb-6 text-2xl">La IA cita sus fuentes en tiempo real.</p>
            </motion.div>

            <motion.div 
              className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex gap-4 p-4 min-h-[600px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
                {/* Left Panel - Documents */}
                <div className="w-1/3 p-4 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-2xl mb-4 flex items-center gap-3"><Folder/>Expediente Activo</h3>
                    <div className="space-y-4 flex-grow">
                         {[{n:'Contrato_Principal.pdf', p:'487 pág', s:'Analizado'},{n:'Anexo II P.I.pdf', p:'12 pág', s:'Analizado'},{n:'Normativa_Aplicable.pdf', p:'1,166 pág', s:'Analizado'}].map(d=>(
                            <div key={d.n} className="bg-white p-4 rounded-md flex items-center gap-4 border border-slate-200">
                                <FileText className="w-10 h-10 text-cyan-500 flex-shrink-0"/>
                                <div className="flex-grow"><p className="font-medium text-slate-700 text-2xl">{d.n}</p><p className="text-slate-500 text-lg">{d.p}</p></div>
                                <span className="font-semibold text-lg text-green-500">{d.s}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle Panel - Document Viewer */}
                <div className="w-1/3">
                    <DocumentViewer showHighlight={showHighlight} />
                </div>

                {/* Right Panel - Chat */}
                <div className="w-1/3 p-4 flex flex-col">
                    <div className="flex-grow space-y-4">
                        <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}
                            >
                                {msg.from === 'bot' && <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0"><Bot/></div>}
                                
                                {msg.type === 'processing' ? (
                                    <div className="bg-slate-100 p-4 rounded-lg flex items-center gap-4"><Loader className="w-6 h-6 text-cyan-500 animate-spin"/><p className="text-xl font-semibold text-cyan-600">Analizando 1,653 págs...</p></div>
                                ) : (
                                    <div className={`p-4 rounded-2xl max-w-lg text-2xl ${msg.from === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-100 text-slate-700 rounded-bl-none'}`}>
                                        {msg.text}
                                    </div>

                                )}

                                {msg.from === 'user' && <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"><User className="text-slate-600"/></div>}
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                    <div className="mt-4">
                        <input type="text" placeholder="Realice una pregunta..." className="w-full bg-white border-2 border-slate-300 rounded-lg p-4 text-xl outline-none focus:ring-1 focus:ring-cyan-500 transition-all" />
                    </div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};
