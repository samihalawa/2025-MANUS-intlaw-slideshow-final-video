import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const modules = [
  {
    name: 'Módulo 1: Captación e IA',
    features: ['Asistente Web IA 24/7', 'Intake Multicanal', 'Propuesta Automática'],
    price: '€12,000',
    oldPrice: '€15,000'
  },
  {
    name: 'Módulo 2: Inteligencia Documental',
    features: ['Análisis Confiable (0% Alucinaciones)', 'Búsqueda Inteligente de Cláusulas', 'Cita de Fuentes Garantizada'],
    price: '€12,000',
    oldPrice: '€15,000'
  },
  {
    name: 'Módulo 3: Motor de Crecimiento IA',
    features: ['Radar de Oportunidades', 'Prospección Quirúrgica', 'Inteligencia Competitiva'],
    price: '€12,000',
    oldPrice: '€15,000'
  },
  {
    name: 'Módulo 4: Copilot y Asociación',
    features: ['Copilot de Redacción', 'Implementación y Formación', '12 Meses de Soporte Proactivo'],
    price: '€12,000',
    oldPrice: '€15,000'
  }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

interface ModuleCardProps {
  module: typeof modules[0];
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 h-full flex flex-col hover:border-cyan-400 transition-colors duration-300 transform hover:-translate-y-2">
        <h3 className="font-bold text-4xl text-slate-800 mb-6">{module.name}</h3>
        <ul className="space-y-4 text-2xl text-slate-600 flex-grow">
            {module.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                    <Check size={28} className="flex-shrink-0 text-green-500 mt-1" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <div className="text-right border-t border-slate-200 pt-6 mt-8">
             <span className="text-slate-500 line-through text-3xl mr-4">{module.oldPrice}</span>
             <span className="font-bold text-5xl text-cyan-600">{module.price}</span>
        </div>
    </div>
);

export const Slide15: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-16 bg-slate-50/50 justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        className="w-full max-w-[1600px] mx-auto"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Inversión Estratégica</h2>
          <p className="text-4xl text-slate-600 mb-12 text-center max-w-5xl mx-auto">Una estructura de valor modular con una oferta preferente para socios estratégicos.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
        >
            {modules.map((module) => (
                <motion.div key={module.name} variants={itemVariants}>
                    <ModuleCard module={module} />
                </motion.div>
            ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl shadow-2xl p-10 mt-8"
        >
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-4xl tracking-wide">INVERSIÓN TOTAL (Oferta FastDeal)</p>
                    <p className="text-2xl text-slate-300 mt-2">Incluye 4 módulos base y bonus premium.</p>
                </div>
                <div className="text-right">
                     <p className="text-3xl text-slate-400 line-through">€75,000</p>
                     <p className="text-8xl font-bold text-cyan-400">€48,000</p>
                </div>
            </div>
             <div className="border-t border-white/20 mt-8 pt-8 text-center">
                 <p className="text-5xl font-bold text-white">AHORRO TOTAL: €27,000</p>
                 <p className="text-2xl text-slate-300 mt-2">(20% dto. + €15,000 en módulos premium)</p>
                 <div className="inline-flex items-center gap-3 mt-6 text-lg font-semibold bg-white text-slate-800 px-5 py-2 rounded-full shadow-lg">
                      <Star className="text-yellow-500" size={20} fill="currentColor" />
                      <span>Válido hasta 30 Oct 2025</span>
                 </div>
             </div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};
