import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { MapPin, Building, Search, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const MapAppUI = ({ isActive }: { isActive: boolean }) => (
    <div className="w-full h-full bg-slate-800 rounded-xl shadow-2xl flex overflow-hidden border-4 border-slate-700">
        {/* Sidebar */}
        <div className="w-1/3 bg-slate-900/50 p-6 flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><MapPin /> Prospección Geo-Espacial</h2>
            <div className="space-y-4">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24}/>
                    <input type="text" value="Recoletos, Madrid" readOnly className="w-full pl-12 p-4 bg-slate-700 text-white rounded-md text-xl border border-slate-600"/>
                </div>
                <div>
                    <button className="w-full flex items-center justify-between p-4 bg-slate-700/50 text-white rounded-md text-xl border border-slate-600">
                        <span>Filtros Avanzados</span>
                        <Filter />
                    </button>
                </div>
            </div>
            <div className="mt-8 border-t border-slate-700 pt-6 flex-grow">
                 <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Señales Detectadas:</h3>
                 {isActive && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 2}}}
                        className="bg-slate-700/80 p-4 rounded-md border-l-4 border-cyan-400"
                    >
                        <p className="font-bold text-white text-2xl">Global Realty S.L.</p>
                        <p className="text-slate-300 text-lg">Transacción Inmobiliaria &gt; €2M</p>
                    </motion.div>
                 )}
            </div>
        </div>
        {/* Map View */}
        <div className="w-2/3 bg-slate-800 relative">
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2394a3b8\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }} />
            
            <AnimatePresence>
            {isActive && (
                <motion.div 
                    className="absolute top-0 left-0 h-full bg-cyan-400/20"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%', transition: { duration: 1.5, ease: 'easeInOut' } }}
                    exit={{ width: '0%' }}
                >
                    <div className="h-full w-2 bg-cyan-400 absolute right-0 shadow-[-2px_0_15px_rgba(6,182,212,0.7)]" />
                </motion.div>
            )}
            </AnimatePresence>
            
            <AnimatePresence>
            {isActive && (
                <motion.div
                    className="absolute"
                    style={{ top: '45%', left: '55%' }}
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1, transition: {delay: 1.6, type: 'spring', stiffness: 100}}}
                >
                    <motion.div
                         animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
                         transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    >
                        <MapPin className="w-16 h-16 text-red-500 drop-shadow-lg" fill="#ef4444" />
                        <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-red-500/30 animate-ping"></div>
                    </motion.div>
                    <motion.div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white p-6 rounded-lg shadow-2xl w-96"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 2.2 } }}
                    >
                         <h3 className="text-2xl font-bold text-slate-800">Nueva Oportunidad</h3>
                         <div className="mt-4 space-y-2">
                            <p className="text-xl flex items-center gap-2"><Building size={20} className="text-slate-500" /> <span className="font-semibold">Global Realty S.L.</span></p>
                            <p className="text-xl flex items-center gap-2"><Sparkles size={20} className="text-slate-500" /> <span className="text-red-600 font-bold">ALTA PRIORIDAD</span></p>
                         </div>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    </div>
);


export const Slide10_E_Idealista: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 flex flex-col justify-center bg-slate-100">
            <motion.div
              initial="hidden" animate={isActive ? "visible" : "hidden"} variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Caso de Uso: Real Estate</h2>
                <p className="text-3xl text-slate-600 mb-8 text-center">Identificando oportunidades de alto valor inmobiliario.</p>
              </motion.div>
              <motion.div className="h-[650px]" variants={itemVariants}>
                <MapAppUI isActive={isActive} />
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
