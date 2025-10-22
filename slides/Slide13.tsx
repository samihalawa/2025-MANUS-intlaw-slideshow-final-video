import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { FileText, Download, Sparkles, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const FormInput = ({ label, value, onChange }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }) => (
    <div className="mb-4">
        <label className="text-lg font-semibold text-slate-600 mb-2 block">{label}</label>
        <input type="text" value={value} onChange={onChange} className="w-full bg-white border-2 border-slate-300 rounded-md p-3 text-xl text-slate-800 outline-none focus:ring-1 focus:ring-cyan-500 transition-all"/>
    </div>
);

const DocumentPreview = ({ data }: { data: { compradora: string, vendedora: string }}) => (
    <div className="bg-white rounded-md shadow-lg h-full overflow-hidden relative border border-slate-200">
        <motion.div
            className="p-10 text-black leading-relaxed font-serif"
            animate={{ y: [0, -250, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
            <h3 className="text-center font-bold text-3xl mb-4">CONTRATO DE COMPRAVENTA MERCANTIL</h3>
            <p className="text-center text-gray-500 mb-8 text-lg">Entre {data.compradora || '...'} y {data.vendedora || '...'}</p>
            <p className="font-bold mb-3 text-2xl">I. COMPARECEN</p>
            <p className="mb-4 text-2xl">De una parte, <span className="bg-cyan-100/80 px-1 rounded font-semibold">{data.compradora || '[COMPRADORA]'}</span>, con NIF B-12345678 y domicilio social en C/ Innovación, 1, 28080 Madrid, en adelante "la Compradora".</p>
            <p className="mb-8 text-2xl">De otra parte, <span className="bg-cyan-100/80 px-1 rounded font-semibold">{data.vendedora || '[VENDEDORA]'}</span>, con NIF A-87654321 y domicilio social en Av. del Progreso, 2, 08080 Barcelona, en adelante "la Vendedora".</p>
            <p className="font-bold mb-3 text-2xl">II. OBJETO DEL CONTRATO</p>
            <p className="pl-4 text-2xl">1. El objeto del presente contrato es la compraventa de <span className="bg-yellow-100/80 px-1 rounded font-semibold">los activos tecnológicos</span> que se detallan en el Anexo I...</p>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white to-transparent"></div>
    </div>
);

export const Slide13: React.FC<SlideProps> = ({ isActive }) => {
    const [formData, setFormData] = useState({
        compradora: '',
        vendedora: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'compradora' | 'vendedora') => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleImport = () => {
        setFormData({
            compradora: 'TechCorp S.L.',
            vendedora: 'InnoSolutions S.A.',
        });
    };

    return (
        <SlideWrapper className="p-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Generación de Documentos Integrada</h2>
              <p className="text-slate-600 text-center mb-6 text-2xl">De lead a documento en segundos.</p>
            </motion.div>

            <motion.div 
              className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex min-h-[550px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
                {/* Left Panel: Form */}
                <div className="w-2/5 border-r border-slate-200 p-6 flex flex-col bg-white rounded-l-xl">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">Nuevo Documento</h3>
                    <p className="text-lg text-slate-500 mb-6">Compraventa Mercantil</p>
                    <div className="flex-grow">
                        <FormInput label="Compradora" value={formData.compradora} onChange={e => handleChange(e, 'compradora')} />
                        <FormInput label="Vendedora" value={formData.vendedora} onChange={e => handleChange(e, 'vendedora')} />
                    </div>
                     <button 
                        onClick={handleImport}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-lg transition-colors text-lg flex items-center justify-center gap-3 mb-3">
                        <UserPlus /> Importar desde CRM
                    </button>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-xl flex items-center justify-center gap-3">
                        <motion.div
                             animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
                             transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Sparkles />
                        </motion.div>
                        Generar Documento
                    </button>
                </div>
                {/* Right Panel: Preview */}
                <div className="w-3/5 p-6 bg-slate-100/50 rounded-r-xl flex flex-col">
                    <div className="flex justify-between items-center mb-4 flex-shrink-0">
                       <h4 className="font-bold text-slate-900 text-xl flex items-center gap-2"><FileText size={20}/> Vista Previa</h4>
                       <button className="text-base bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2"><Download size={16}/> Descargar PDF</button>
                    </div>
                     <div className="flex-grow overflow-hidden">
                        <DocumentPreview data={formData} />
                     </div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};
