import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { FileText, Download, Sparkles, Link, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const FormInput = ({ label, value }: { label: string; value: string; }) => (
    <div>
        <label className="text-lg font-semibold text-slate-600 mb-2 block">{label}</label>
        <input type="text" value={value} readOnly className="w-full bg-slate-100/50 border-2 border-slate-300 rounded-md p-3 text-xl text-slate-800 outline-none transition-all"/>
    </div>
);

const DocumentPreview = ({ data }: { data: { compradora: string, vendedora: string }}) => (
    <div className="bg-white rounded-md shadow-lg h-full overflow-hidden relative border border-slate-200">
        <div className="p-10 text-black leading-relaxed font-serif">
            <h3 className="text-center font-bold text-3xl mb-4">CONTRATO DE COMPRAVENTA</h3>
            <p className="text-center text-gray-500 mb-8 text-lg">Entre {data.compradora || '...'} y {data.vendedora || '...'}</p>
            <p className="mb-4 text-2xl">De una parte, <span className="bg-cyan-100/80 px-1 rounded font-semibold">{data.compradora || '[COMPRADORA]'}</span>...</p>
            <p className="mb-8 text-2xl">De otra parte, <span className="bg-cyan-100/80 px-1 rounded font-semibold">{data.vendedora || '[VENDEDORA]'}</span>...</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white to-transparent"></div>
    </div>
);

const CrmModal = ({ onSelect, onClose }: { onSelect: () => void; onClose: () => void; }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 flex items-center justify-center z-50"
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
        >
            <div className="p-4 border-b border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800">Buscar Lead en CRM</h3>
            </div>
            <div className="p-4">
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20}/>
                    <input type="text" placeholder="Buscar por nombre o empresa..." className="w-full pl-10 p-3 bg-slate-100 rounded-md text-lg"/>
                </div>
                <div 
                    className="p-4 rounded-md hover:bg-cyan-500/10 cursor-pointer border border-transparent hover:border-cyan-500/50 bg-cyan-500/5 border-cyan-500/30"
                    onClick={onSelect}
                >
                    <p className="font-bold text-2xl text-slate-800">TechCorp S.L.</p>
                    <p className="text-slate-500 text-lg">Lead Activo - Prioridad ALTA</p>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};


export const Slide13_B: React.FC<SlideProps> = ({ isActive }) => {
    const [formData, setFormData] = useState({ compradora: '', vendedora: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelect = () => {
        setFormData({ compradora: 'TechCorp S.L.', vendedora: 'InnoSolutions S.A.' });
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isActive) {
          const sequence = () => {
              setFormData({ compradora: '', vendedora: '' });
              setIsModalOpen(false);
              setTimeout(() => setIsModalOpen(true), 2000);
              setTimeout(() => handleSelect(), 3500);
          };
          sequence();
          const intervalId = setInterval(sequence, 6000);
          return () => clearInterval(intervalId);
        }
    }, [isActive]);

    return (
        <SlideWrapper className="p-6 flex flex-col justify-center relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-5xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Generador de Documentos Conectado al CRM</h2>
                <p className="text-slate-600 text-center mb-4 text-xl">De lead a documento en segundos, sin fricción.</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex min-h-[650px]"
              >
                  {/* Left Panel: Form */}
                  <div className="w-2/5 border-r border-slate-200 p-6 flex flex-col bg-white rounded-l-xl">
                      <h3 className="font-bold text-slate-900 text-2xl mb-6">Nuevo: Compraventa Mercantil</h3>
                      <div className="flex-grow space-y-4">
                          <FormInput label="Compradora" value={formData.compradora} />
                          <FormInput label="Vendedora" value={formData.vendedora} />
                      </div>
                       <div 
                          className="w-full bg-slate-100 text-slate-800 font-bold py-3 rounded-lg text-lg flex items-center justify-center gap-3 mb-3 cursor-pointer"
                          onClick={() => setIsModalOpen(true)}
                        >
                          <Link /> Importar desde CRM
                      </div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-xl flex items-center justify-center gap-3">
                          <Sparkles /> Generar Documento
                      </button>
                  </div>
                  {/* Right Panel: Preview */}
                  <div className="w-3/5 p-6 bg-slate-100/50 rounded-r-xl flex flex-col">
                       <div className="flex-grow overflow-hidden">
                          <DocumentPreview data={formData} />
                       </div>
                  </div>
              </motion.div>
            </motion.div>
            
            <AnimatePresence>
                {isModalOpen && <CrmModal onSelect={handleSelect} onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
        </SlideWrapper>
    );
};
