import React, { useEffect, useRef } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Euro, FileText, Check, Clock, CheckSquare, BrainCircuit } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

interface AnimatedNumberProps {
    value: number;
    prefix?: string;
    suffix?: string;
    isActive: boolean;
}

const AnimatedNumber = ({ value, prefix = "", suffix = "", isActive }: AnimatedNumberProps) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest).toLocaleString('es-ES'));

    useEffect(() => {
        if (isActive) {
            const controls = animate(count, value, { duration: 1.5, ease: 'easeOut', delay: 1.2 });
            return () => controls.stop();
        } else {
            count.set(0);
        }
    }, [isActive, value, count]);

    return (
        <span className="flex items-center justify-center">
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

interface TimelineItemProps {
    children: React.ReactNode;
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ children, isLast = false }) => (
    <motion.div 
        className="flex gap-3"
        variants={{
            hidden: { x: -20, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } }
        }}
    >
        <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-cyan-500/20"></div>
            {!isLast && <div className="w-0.5 flex-grow bg-slate-300 my-1"></div>}
        </div>
        <div className="pb-2 text-sm">{children}</div>
    </motion.div>
);

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, children, className }) => (
    <div className={`bg-white rounded-xl shadow-lg border border-slate-200 p-4 h-full flex flex-col ${className}`}>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">{icon}{title}</h3>
        <div className="flex-grow">{children}</div>
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
        <SlideWrapper className="p-8 justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-5xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Plataforma Unificada: Vista del Caso 360°</h2>
                <p className="text-xl text-slate-600 mb-6 text-center">Toda la inteligencia de un caso en una sola pantalla.</p>
              </motion.div>

              <motion.div 
                  variants={itemVariants}
                  className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200"
              >
                  {/* Header */}
                  <motion.div 
                    className="border-b border-slate-200 pb-4 mb-6"
                    variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                   >
                      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900">Caso 4588: Compañía XYZ S.L.</motion.h2>
                      <motion.div variants={itemVariants} className="flex gap-6 text-lg text-slate-600 mt-2">
                          <span><strong className="font-semibold">Tipo:</strong> Contrato Mercantil</span>
                          <span className="flex items-center gap-2"><strong className="font-semibold">Estado:</strong> 
                              <span className="flex items-center gap-2 text-green-600 font-bold">
                                  <motion.div 
                                      className="w-2.5 h-2.5 bg-green-500 rounded-full"
                                      animate={{ scale: [1, 1.5, 1] }}
                                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                  />
                                  Análisis Completado
                              </span>
                          </span>
                      </motion.div>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-3 gap-6"
                    variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                  >
                      {/* Left Column */}
                      <motion.div variants={itemVariants} className="col-span-2 space-y-6">
                          <StatCard icon={<Euro className="text-cyan-500"/>} title="Módulo de Pricing IA y Viabilidad">
                              <div className="space-y-4">
                                  <p className="text-lg"><strong>Análisis de Solvencia:</strong> <span className="font-semibold text-green-600">Positiva</span></p>
                                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                                      <p className="font-bold text-cyan-800 text-sm">Rango de Honorarios (IA):</p>
                                      <p className="text-3xl font-bold text-slate-800 mt-1">€6,000 - €8,500</p>
                                  </div>
                                  <div className="flex items-center gap-4">
                                      <label className="font-semibold text-lg">Propuesta:</label>
                                      <div className="w-48 bg-white border-2 border-slate-300 rounded-md p-2 text-2xl font-bold text-slate-800 text-center">
                                         <AnimatedNumber value={7200} prefix="€ " isActive={isActive}/>
                                      </div>
                                      <button className="bg-cyan-500 text-white font-bold py-2 px-3 rounded-md text-base hover:bg-cyan-600 transition-colors">Enviar Propuesta</button>
                                  </div>
                              </div>
                          </StatCard>
                          <StatCard icon={<FileText className="text-cyan-500"/>} title="Documentos y Acciones">
                               <div className="flex items-center justify-between bg-slate-100 p-3 rounded-md">
                                  <p className="text-lg font-semibold">Contrato_V1.pdf</p>
                                  <span className="text-base font-semibold text-green-500">Analizado</span>
                               </div>
                               <button className="mt-4 w-full bg-slate-800 text-white font-bold py-2 rounded-md text-lg hover:bg-slate-900 transition-colors">Generar Borrador</button>
                          </StatCard>
                      </motion.div>

                      {/* Right Column */}
                      <motion.div variants={itemVariants} className="space-y-6">
                          <StatCard icon={<Clock className="text-cyan-500"/>} title="Línea de Tiempo del Caso">
                              <motion.div variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } } }}>
                                  <TimelineItem><p><strong className="font-semibold">Hoy:</strong> Chequeo financiero OK</p></TimelineItem>
                                  <TimelineItem><p><strong className="font-semibold">Ayer:</strong> Análisis IA completado</p></TimelineItem>
                                  <TimelineItem><p><strong className="font-semibold">Ayer:</strong> Documento recibido</p></TimelineItem>
                                  <TimelineItem isLast><p className="text-slate-500"><strong className="font-semibold">Hace 2 días:</strong> Lead recibido (WhatsApp)</p></TimelineItem>
                              </motion.div>
                          </StatCard>
                           <StatCard icon={<BrainCircuit className="text-cyan-500"/>} title="Simulación Estratégica IA">
                              <p className="text-lg mb-2"><strong>Escenario:</strong> Incumplimiento</p>
                              <div className="bg-slate-100 p-3 rounded-md">
                                  <p className="font-semibold text-slate-500 text-base">Predicción de Resultado:</p>
                                  <p className="text-xl font-bold text-green-600 mt-1">85% Fallo Favorable</p>
                                  <p className="text-slate-600 text-xs mt-1">Basado en jurisprudencia y perfil del juez.</p>
                              </div>
                          </StatCard>
                      </motion.div>
                  </motion.div>
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
