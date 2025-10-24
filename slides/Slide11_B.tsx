import React, { useState, useEffect, useRef } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Folder, FileText, Bot, User, Loader, Sparkles, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';
import { Cursor } from '../components/Cursor';

interface SlideProps {
  isActive: boolean;
}

const chatSequence = [
    { from: 'user', text: 'Analizar contradicciones entre Contrato Principal y Anexo II.' },
    { from: 'bot', type: 'processing' },
    { 
      from: 'bot', 
      type: 'text', 
      text: "Análisis completado. Riesgo crítico detectado: contradicción en cláusulas de P.I. Ver fuentes:",
      citations: [
        { id: 'c1', text: "Contrato Principal: PI 100% del Comprador." },
        { id: 'c2', text: "Anexo II: PI es compartida (50/50)." }
      ]
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};


export const Slide11_B: React.FC<SlideProps> = ({ isActive }) => {
    const [messages, setMessages] = useState([chatSequence[0]]);
    const [highlightedClause, setHighlightedClause] = useState<string | null>(null);
    const citationRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);

    useInterval(() => {
        if (!isActive) return;
        setMessages(prev => (prev.length < chatSequence.length) ? [...prev, chatSequence[prev.length]] : [chatSequence[0]]);
    }, 4500);

    useEffect(() => {
        if (!isActive) {
            setHighlightedClause(null);
            setCursorVisible(false);
            return;
        }
        const lastMessage = messages[messages.length - 1];
        if (lastMessage?.citations) {
            let i = 0;
            const cycleHighlights = () => {
                const citationIndex = i % lastMessage.citations!.length;
                const citationId = lastMessage.citations![citationIndex].id;
                setHighlightedClause(citationId);
                
                const citationEl = citationRefs.current[citationIndex];
                if (citationEl) {
                    const x = citationEl.offsetLeft + citationEl.offsetWidth / 2;
                    const y = citationEl.offsetTop + citationEl.offsetHeight / 2;
                    setCursorPos({ x, y });
                    setCursorVisible(true);
                }
                i++;
            };
            
            cycleHighlights(); // Highlight first one immediately
            const highlightInterval = setInterval(cycleHighlights, 1500);
            
            return () => {
                clearInterval(highlightInterval);
                setHighlightedClause(null);
                 setCursorVisible(false);
            };
        } else {
             setHighlightedClause(null);
             setCursorVisible(false);
        }
    }, [messages, isActive]);

    return (
        <SlideWrapper className="p-8 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Análisis IA con Fuentes Citadas</h2>
                <p className="text-slate-600 text-center mb-6 text-3xl">Garantía 0% Alucinaciones: IA cita sus fuentes.</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex gap-6 p-6 min-h-[720px]"
              >
                  {/* Left Panel - Documents */}
                  <div className="w-1/4 p-4 flex flex-col">
                      <h3 className="font-bold text-slate-900 text-3xl mb-6 flex items-center gap-4"><Folder size={32}/>Expediente</h3>
                      <div className="space-y-4">
                           {[{n:'Contrato_Principal.pdf', a:true},{n:'Anexo II P.I.pdf', a:false},{n:'Normativa_Aplicable.pdf', a:false}].map(d=>(
                              <div key={d.n} className={`p-4 rounded-md flex items-center gap-4 border transition-colors ${d.a || (d.n.includes('Anexo') && highlightedClause === 'c2') ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-white border-slate-200'}`}>
                                  <FileText className={`w-10 h-10 flex-shrink-0 ${d.a || (d.n.includes('Anexo') && highlightedClause === 'c2') ? 'text-cyan-500' : 'text-slate-400'}`}/>
                                  <p className={`font-medium text-2xl ${d.a || (d.n.includes('Anexo') && highlightedClause === 'c2') ? 'text-slate-800' : 'text-slate-500'}`}>{d.n}</p>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Middle Panel - Document Viewer */}
                  <div className="w-2/4 bg-white h-full rounded-lg shadow-inner border border-slate-200 p-8 relative overflow-y-auto overflow-x-hidden">
                       <p className="font-bold text-2xl mb-6">Contrato_Principal.pdf</p>
                       <div className="text-slate-600 text-2xl space-y-6 font-mono leading-relaxed">
                          <p>...</p>
                          <p className="relative">
                              <AnimatePresence>
                              {highlightedClause === 'c1' && (
                                  <motion.span 
                                      className="absolute -inset-x-2 -inset-y-1 bg-yellow-300/80 rounded"
                                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                  />
                              )}
                              </AnimatePresence>
                              <span className="relative">Artículo 4.B. Transferencia de Propiedad Intelectual. Tras la transacción, todos los derechos de Propiedad Intelectual, sin excepción, serán transferidos en su totalidad y de forma exclusiva a la Compradora.</span>
                          </p>
                           <p>...</p>
                            <p className="relative font-sans text-slate-400 italic">
                              <AnimatePresence>
                              {highlightedClause === 'c2' && (
                                  <motion.span 
                                      className="absolute -inset-x-2 -inset-y-1 bg-yellow-300/80 rounded"
                                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                  />
                              )}
                              </AnimatePresence>
                              <span className="relative">El contenido del Anexo II se mostraría aquí. La cláusula 2.A establece que la PI es compartida.</span>
                          </p>
                       </div>
                  </div>

                  {/* Right Panel - Chat */}
                  <div className="w-1/3 p-4 flex flex-col bg-slate-100/50 rounded-lg relative">
                      <Cursor x={cursorPos.x} y={cursorPos.y} visible={cursorVisible} />
                      <h3 className="font-bold text-slate-900 text-3xl mb-6 flex items-center gap-4"><Sparkles size={32} className="text-cyan-500"/>Chat IA</h3>
                      <motion.div 
                          className="flex items-center gap-4 text-lg font-semibold text-green-800 bg-green-500/10 p-4 rounded-lg mb-6 border-2 border-green-500/20 shadow-sm"
                          initial={{ y: -10, opacity: 0 }}
                          animate={isActive ? { y: 0, opacity: 1 } : {}}
                          transition={{ delay: 0.5 }}
                      >
                          <Users size={48} className="flex-shrink-0" />
                          <span>Verificado por Agentes para garantizar fiabilidad total.</span>
                      </motion.div>
                      <div className="flex-grow space-y-5">
                          <AnimatePresence>
                          {messages.map((msg, i) => (
                               <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`flex items-start gap-4 ${msg.from === 'user' ? 'justify-end' : ''}`}>
                                  {msg.from === 'bot' && <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0"><Bot size={24}/></div>}
                                  <div className="space-y-3">
                                      {msg.type === 'processing' ? (
                                          <div className="bg-white p-4 rounded-lg flex items-center gap-4 border border-slate-200"><Loader className="w-6 h-6 text-cyan-500 animate-spin"/><p className="text-xl font-semibold text-cyan-600">Analizando...</p></div>
                                      ) : (
                                          <div className={`p-4 rounded-lg max-w-lg text-2xl ${msg.from === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none border border-slate-200'}`}>
                                              <p>{msg.text}</p>
                                              {msg.citations && msg.citations.map((c, index) => (
                                                  <p 
                                                    key={c.id} 
                                                    ref={el => citationRefs.current[index] = el}
                                                    className={`mt-3 p-3 rounded cursor-pointer transition-colors border-l-4 text-xl ${highlightedClause === c.id ? 'bg-yellow-100 border-yellow-400' : 'bg-slate-100 border-slate-300'}`}>{c.text}</p>
                                              ))}
                                          </div>
                                      )}
                                  </div>
                                  {msg.from === 'user' && <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"><User size={24} className="text-slate-600"/></div>}
                              </motion.div>
                          ))}
                          </AnimatePresence>
                      </div>
                  </div>
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};