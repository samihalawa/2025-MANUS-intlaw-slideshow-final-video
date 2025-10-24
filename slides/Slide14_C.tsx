import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Euro, FileText, Clock, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, children, className }) => (
    <div className={`bg-white rounded-xl shadow-lg border border-slate-200 p-8 h-full flex flex-col ${className}`}>
        <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-4">{icon}{title}</h3>
        <div className="flex-grow flex flex-col">{children}</div>
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

export const Slide14_C: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-16 justify-center bg-slate-50/50">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
              className="w-full"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-8xl font-bold tracking-tighter text-slate-900 text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Plataforma Unificada: Vista 360°</h2>
                <p className="text-4xl text-slate-600 mb-12 text-center">Toda la inteligencia del caso en una pantalla.</p>
              </motion.div>

              {/* Header Info */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8"
              >
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-5xl font-bold text-slate-900">Caso 4588: Compañía XYZ S.L.</h2>
                      <p className="text-3xl text-slate-600 mt-2"><strong>Tipo:</strong> Contrato Mercantil · <strong>Estado:</strong> <span className="font-semibold text-green-600">Análisis Completado</span></p>
                    </div>
                    <div className="text-right flex-shrink-0 pl-8">
                       <p className="text-2xl text-slate-500">Lead recibido hace 2 días (WhatsApp)</p>
                    </div>
                  </div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-3 gap-8 items-start"
                variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
              >
                  {/* Column 1 */}
                  <motion.div variants={itemVariants} className="space-y-8 flex flex-col">
                      <StatCard icon={<Euro size={36} className="text-cyan-500"/>} title="Pricing y Viabilidad IA">
                          <p className="text-3xl mb-4"><strong>Análisis de Solvencia:</strong> <span className="font-bold text-green-600 bg-green-500/10 px-3 py-1 rounded-md">Positiva</span></p>
                          <div className="bg-cyan-500/10 p-6 rounded-lg mt-auto">
                              <p className="font-bold text-cyan-800 text-2xl">Rango de Honorarios Sugerido:</p>
                              <p className="text-6xl font-bold text-slate-800 mt-1">€6,000 - €8,500</p>
                              <p className="text-xl font-semibold text-slate-600 mt-2">Propuesta: <span className="font-bold text-slate-800">€7,200</span> <button className="ml-3 bg-cyan-500 text-white text-lg font-bold px-4 py-1 rounded-md">Enviar Propuesta</button></p>
                          </div>
                      </StatCard>
                      <StatCard icon={<FileText size={36} className="text-cyan-500"/>} title="Documentos y Acciones">
                           <div className="flex items-center justify-between bg-slate-100 p-4 rounded-md">
                              <p className="text-2xl font-semibold">Contrato_V1.pdf</p>
                              <span className="text-xl font-semibold text-green-500">Analizado</span>
                           </div>
                           <button className="mt-4 w-full bg-slate-800 text-white font-bold py-4 rounded-md text-2xl hover:bg-slate-900 transition-colors">Generar Borrador</button>
                      </StatCard>
                  </motion.div>

                  {/* Column 2 */}
                  <motion.div variants={itemVariants}>
                       <StatCard icon={<BrainCircuit size={36} className="text-cyan-500"/>} title="Simulación Estratégica IA">
                           <p className="text-3xl mb-4"><strong>Escenario:</strong> Incumplimiento</p>
                           <div className="bg-slate-100 p-6 rounded-md">
                               <p className="font-semibold text-slate-500 text-2xl">Predicción de Resultado:</p>
                               <p className="text-7xl font-bold text-green-600 my-2">85% Favorable</p>
                               <p className="text-slate-600 text-xl">Basado en jurisprudencia y perfil del juez asignado.</p>
                           </div>
                           <p className="text-2xl text-slate-700 mt-6"><strong className="font-semibold text-slate-900">Recomendación IA:</strong> Proceder con demanda judicial. Alta probabilidad de éxito.</p>
                       </StatCard>
                  </motion.div>

                  {/* Column 3 */}
                  <motion.div variants={itemVariants}>
                      <StatCard icon={<Clock size={36} className="text-cyan-500"/>} title="Línea de Tiempo del Caso">
                           <div className="space-y-4">
                              <div className="text-2xl p-4 rounded-md bg-slate-100 relative border-l-4 border-cyan-500"><p><strong className="font-semibold text-slate-800">Hoy:</strong> Chequeo financiero OK</p><p className="text-slate-500 text-lg">Predicción de Resultado: <span className="font-bold text-green-600">85% Favorable</span></p></div>
                              <div className="text-2xl p-4 rounded-md bg-slate-100"><p><strong className="font-semibold text-slate-800">Ayer:</strong> Análisis IA completado.</p></div>
                              <div className="text-2xl p-4 rounded-md bg-slate-100"><p><strong className="font-semibold text-slate-800">Hace 2 días:</strong> Lead recibido (WhatsApp)</p></div>
                           </div>
                      </StatCard>
                  </motion.div>
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
