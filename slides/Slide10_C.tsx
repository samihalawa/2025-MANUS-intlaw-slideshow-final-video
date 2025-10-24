import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Link, AlertTriangle, Building, User, FileText as FileIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

interface SlideProps {
  isActive: boolean;
}

const entities = [
    { name: 'TechCorp S.L.', type: 'Empresa', icon: <Building size={24}/> },
    { name: 'InnoSolutions S.A.', type: 'Empresa', icon: <Building size={24}/> },
    { name: 'Juan Pérez', type: 'Persona', icon: <User size={24}/> },
    { name: 'Cláusula 4.B', type: 'Cláusula', icon: <FileIcon size={24}/>, id: 'c4b', critical: true },
    { name: 'Anexo II P.I.', type: 'Documento', icon: <FileIcon size={24}/>, id: 'anexo2' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};


export const Slide10_C: React.FC<SlideProps> = ({ isActive }) => {
    const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);

    useInterval(() => {
        if (!isActive) return;
        setSelectedEntityId(prev => prev === 'c4b' ? null : 'c4b');
    }, 4000);

    return (
        <SlideWrapper className="p-12 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Análisis de Expediente Interactivo</h2>
                <p className="text-3xl text-slate-600 mb-8 text-center">Conecte puntos clave de miles de páginas.</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex-grow bg-slate-50 rounded-2xl border border-slate-200 flex min-h-[700px] shadow-lg"
              >
                  {/* Left Panel: Entities */}
                  <div className="w-1/3 border-r border-slate-200 p-6">
                      <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-4"><Link size={32} className="text-cyan-500"/> Entidades Clave</h3>
                      <div className="space-y-3">
                          {entities.map(entity => (
                              <div 
                                  key={entity.name} 
                                  className={`p-4 rounded-md flex items-center gap-4 border transition-colors cursor-pointer ${selectedEntityId === entity.id ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-white border-slate-200 hover:bg-slate-100'}`}
                              >
                                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md ${selectedEntityId === entity.id ? 'text-cyan-600' : 'text-slate-500'}`}>{entity.icon}</div>
                                  <div className="flex-grow">
                                      <p className={`font-semibold text-2xl ${selectedEntityId === entity.id ? 'text-slate-900' : 'text-slate-700'}`}>{entity.name}</p>
                                      <p className={`text-lg ${selectedEntityId === entity.id ? 'text-slate-600' : 'text-slate-500'}`}>{entity.type}</p>
                                  </div>
                                  {entity.critical && <AlertTriangle size={28} className="text-red-500 flex-shrink-0" />}
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Middle Panel: Document Viewer */}
                  <div className="w-2/3 bg-white p-8">
                       <h3 className="font-bold text-2xl mb-4">Contrato_Principal.pdf</h3>
                       <div className="text-slate-600 text-2xl space-y-6 font-mono leading-relaxed bg-slate-50/50 p-6 rounded-md h-[90%] overflow-y-auto overflow-x-hidden">
                          <p>...</p>
                          <p className="relative">
                              <AnimatePresence>
                              {selectedEntityId === 'c4b' && (
                                  <motion.span 
                                      className="absolute -inset-x-2 -inset-y-1 bg-yellow-300/80 rounded"
                                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                  />
                              )}
                              </AnimatePresence>
                              <span className="relative">Artículo 4.B. Transferencia de Propiedad Intelectual. Tras la transacción, todos los derechos de Propiedad Intelectual, sin excepción, serán transferidos en su totalidad y de forma exclusiva a la Compradora.</span>
                          </p>
                           <p>...</p>
                            <p className="relative">
                               <AnimatePresence>
                               {selectedEntityId === 'c4b' && (
                                     <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        className="mt-8 bg-red-500/10 p-6 rounded-lg border-l-4 border-red-500 font-sans"
                                    >
                                        <p className="font-bold text-slate-800 text-2xl mb-2 flex items-center gap-3"><AlertTriangle/>Conflicto Detectado</p>
                                        <p className="text-slate-700 text-xl leading-relaxed">
                                            Esta cláusula contradice el <strong className="font-semibold">'Anexo II P.I.'</strong>, que estipula propiedad compartida (50/50).
                                        </p>
                                        <button className="mt-4 bg-white border border-slate-300 px-4 py-2 text-lg font-semibold rounded-md hover:bg-slate-100">Ver Anexo II</button>
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </p>
                       </div>
                  </div>
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};