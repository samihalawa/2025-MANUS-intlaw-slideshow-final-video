import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { MapPin, Building, Search, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const RealisticMapView = () => (
    <div className="w-full h-full bg-slate-300 relative overflow-hidden rounded-lg">
        {/* Faux map background */}
        <div 
            className="absolute inset-0 opacity-80"
            style={{
                backgroundImage: 'linear-gradient(45deg, #cbd5e1 25%, transparent 25%), linear-gradient(-45deg, #cbd5e1 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #cbd5e1 75%), linear-gradient(-45deg, transparent 75%, #cbd5e1 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 to-slate-300"></div>

        {/* Map UI Elements */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-12 h-12 bg-white rounded-md shadow-md flex items-center justify-center text-slate-600 text-2xl font-bold">+</button>
            <button className="w-12 h-12 bg-white rounded-md shadow-md flex items-center justify-center text-slate-600 text-2xl font-bold">-</button>
        </div>

        {/* Other property pins */}
        <MapPin className="absolute w-10 h-10 text-cyan-500 drop-shadow-md" style={{ top: '30%', left: '40%' }} fill="currentColor" />
        <MapPin className="absolute w-10 h-10 text-cyan-500 drop-shadow-md" style={{ top: '65%', left: '25%' }} fill="currentColor" />
        <MapPin className="absolute w-10 h-10 text-cyan-500 drop-shadow-md" style={{ top: '20%', left: '70%' }} fill="currentColor" />


        {/* Selected property pin */}
        <motion.div
            className="absolute"
            style={{ top: '45%', left: '55%' }}
            animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
            <MapPin className="w-16 h-16 text-red-500 drop-shadow-lg" fill="#ef4444" />
            <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-red-500/30 animate-ping"></div>
        </motion.div>
    </div>
);

const LeadDetailCard = () => (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-800">Nueva Oportunidad</h3>
            <span className="text-lg font-semibold bg-red-500/10 text-red-600 px-4 py-2 rounded-full">ALTA PRIORIDAD</span>
        </div>
        <div className="bg-slate-50/70 p-6 rounded-lg border border-slate-200 flex-grow space-y-4">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Building size={32}/></div>
                <div>
                    <p className="font-bold text-slate-800 text-2xl">Global Realty S.L.</p>
                    <p className="text-slate-500 text-lg">Promotora Inmobiliaria</p>
                </div>
            </div>
            <div className="border-t border-slate-200 my-3"></div>
            <p className="text-xl"><strong className="font-semibold text-slate-600">Señal:</strong> Transacción > €2M</p>
            <p className="text-xl"><strong className="font-semibold text-slate-600">Ubicación:</strong> Recoletos, Madrid</p>
            <p className="text-xl"><strong className="font-semibold text-slate-600">Decisor Clave (IA):</strong> Ana García (CEO)</p>
        </div>
        <button className="w-full bg-cyan-500 text-white font-bold py-4 rounded-lg text-2xl flex items-center justify-center gap-3 transition-colors mt-6 hover:bg-cyan-600">
            <Sparkles size={24} /> Generar Contacto
        </button>
    </div>
);

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};


export const Slide10_E_Idealista: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-16 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Caso de Uso: Real Estate</h2>
                <p className="text-3xl text-slate-600 mb-10 text-center">Identificando oportunidades de alto valor inmobiliario.</p>
              </motion.div>
              <motion.div 
                className="grid grid-cols-3 gap-10 flex-grow"
                variants={{ visible: { transition: { staggerChildren: 0.15 }} }}
              >
                  <motion.div className="col-span-2" variants={{...itemVariants, hidden: {...itemVariants.hidden, x: -20}, visible: {...itemVariants.visible, x: 0}}}>
                      <RealisticMapView />
                  </motion.div>
                  <motion.div variants={{...itemVariants, hidden: {...itemVariants.hidden, x: 20}, visible: {...itemVariants.visible, x: 0}}}>
                      <LeadDetailCard />
                  </motion.div>
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};