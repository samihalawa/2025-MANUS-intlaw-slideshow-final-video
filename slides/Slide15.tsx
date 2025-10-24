import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import {
  MessageCircle, Mail, FilePlus, FileCheck2, Search, Link,
  Target, Filter, LayoutDashboard, Users, Wrench, Star
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const modules = [
  {
    name: 'Módulo 1: Captación y Asistente Inteligente',
    features: [
      { icon: <MessageCircle size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Asistente Web IA:</strong> Asistente web 24/7 que cualifica, cotiza y recoge documentos.' },
      { icon: <Mail size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Intake Multicanal:</strong> Centralice la captación desde web, email y WhatsApp.' },
      { icon: <FilePlus size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Propuesta Automática:</strong> Genere y envíe propuestas de honorarios al instante.' }
    ],
    price: '€12,000'
  },
  {
    name: 'Módulo 2: Inteligencia Documental (Garantizado)',
    features: [
      { icon: <FileCheck2 size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Análisis Confiable:</strong> Análisis masivo con precisión garantizada (0% alucinaciones).' },
      { icon: <Search size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Búsqueda Inteligente:</strong> Detección de riesgos, contradicciones y cláusulas críticas.' },
      { icon: <Link size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Cita de Fuentes:</strong> Fiabilidad total: cada dato generado está vinculado a su fuente original.' }
    ],
    price: '€12,000'
  },
  {
    name: 'Módulo 3: Motor de Crecimiento Proactivo IA',
    features: [
      { icon: <Target size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Radar de Oportunidades:</strong> Escaneo de datos públicos para detectar eventos y generar clientes.' },
      { icon: <Filter size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Prospección Quirúrgica:</strong> Flujo constante de oportunidades de alto valor filtradas.' },
      { icon: <LayoutDashboard size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Inteligencia Competitiva:</strong> Identifique necesidades legales antes que su competencia.' }
    ],
    price: '€12,000'
  },
  {
    name: 'Módulo 4: Copilot Documental y Asociación',
    features: [
      { icon: <FilePlus size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Copilot de Redacción:</strong> Redacte documentos complejos desde lenguaje natural.' },
      { icon: <Users size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Implementación y Adopción:</strong> Formación completa para maximizar el rendimiento.' },
      { icon: <Wrench size={16} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Soporte Proactivo:</strong> 12 meses de soporte y monitorización para optimizar el sistema.' }
    ],
    price: '€12,000'
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
    <motion.div
      className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-8 h-full flex flex-col"
      whileHover={{ scale: 1.02, y: -5 }}
    >
        <h3 className="font-bold text-3xl text-slate-800 mb-6">{module.name}</h3>
        <ul className="space-y-4 text-2xl text-slate-600 flex-grow">
            {module.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                    {React.cloneElement(feature.icon, { size: 20, className: feature.icon.props.className })}
                    <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                </motion.li>
            ))}
        </ul>
        <div className="text-right border-t-2 border-slate-200 pt-5 mt-5">
             <span className="text-slate-500 line-through text-2xl mr-3">€15,000</span>
             <span className="font-bold text-4xl text-cyan-600">{module.price}</span>
        </div>
    </motion.div>
);

export const Slide15: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-8 bg-slate-50/50 justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        className="w-full"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Inversión Estratégica</h2>
          <p className="text-3xl text-slate-600 mb-10 text-center max-w-5xl mx-auto font-light">Una estructura de valor transparente con una oferta de asociación preferente.</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module) => (
                  <ModuleCard key={module.name} module={module} />
              ))}
          </div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-10"
            whileHover={{ scale: 1.01 }}
          >
              <div className="grid grid-cols-3 items-center">
                  <div className="col-span-2">
                      <p className="font-bold text-3xl text-slate-800">INVERSIÓN TOTAL (Oferta FastDeal)</p>
                      <p className="text-2xl text-slate-500 mt-2">Incluye 4 módulos base y módulos premium de bonificación.</p>
                  </div>
                  <div className="text-right">
                       <p className="text-3xl text-slate-500 line-through">€75,000</p>
                       <motion.p
                         className="text-7xl font-bold text-cyan-600"
                         animate={{ scale: [1, 1.05, 1] }}
                         transition={{ duration: 2, repeat: Infinity }}
                       >
                         €48,000
                       </motion.p>
                  </div>
              </div>
               <div className="border-t-2 border-slate-200 mt-6 pt-6 text-center">
                   <p className="text-4xl font-bold text-green-600">AHORRO TOTAL: €27,000</p>
                   <p className="text-2xl text-green-700 mt-2">(20% dto. + €15,000 en módulos premium)</p>
                   <motion.div
                     className="inline-flex items-center gap-3 mt-4 text-xl font-bold bg-slate-800 text-white px-6 py-3 rounded-full"
                     animate={{ boxShadow: ["0 0 0 0px rgba(100,116,139,0.4)", "0 0 0 10px rgba(100,116,139,0)", "0 0 0 0px rgba(100,116,139,0)"] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                        <Star className="text-yellow-400" size={20} fill="currentColor" />
                        <span>Válido hasta 30 Oct 2025</span>
                   </motion.div>
               </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};
