import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, ArrowRight, BarChart, User, FileText, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96]
        },
    },
};

const Card: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className }) => (
    <motion.div variants={itemVariants} className={`bg-white rounded-xl shadow-lg border border-slate-200 p-8 h-full flex flex-col ${className}`}>
        {children}
    </motion.div>
);

export const Slide10_F_Workflow: React.FC<{isActive: boolean}> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-16">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <motion.h2 variants={itemVariants} className="text-7xl font-bold tracking-tighter text-slate-900 text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>De la Señal a la Estrategia</motion.h2>
                <motion.p variants={itemVariants} className="text-3xl text-slate-600 mb-12 text-center">El ciclo de vida completo del caso proactivo.</motion.p>

                <motion.div 
                    className="grid grid-cols-12 gap-6 items-start"
                    variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                >
                    {/* Step 1: Detection */}
                    <div className="col-span-3">
                        <Card>
                            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-4"><Target size={32} className="text-cyan-500"/> 1. Detección</h3>
                            <div className="bg-slate-50/70 p-5 rounded-lg border border-slate-200 flex-grow">
                                <p className="font-semibold text-slate-500 text-lg">Nueva Señal de Mercado</p>
                                <p className="font-bold text-slate-800 text-2xl mt-3">Transacción Inmobiliaria</p>
                                <p className="text-slate-600 text-xl">Valor: <span className="font-semibold">€2.5M</span></p>
                                <p className="text-slate-600 text-xl">Zona: <span className="font-semibold">Recoletos, Madrid</span></p>
                                <p className="text-slate-400 text-sm mt-3">Fuente: Reg. de la Propiedad</p>
                            </div>
                        </Card>
                    </div>

                     <motion.div variants={itemVariants} className="col-span-1 flex items-center justify-center h-full pt-32">
                        <ArrowRight className="text-slate-400 w-16 h-16" />
                    </motion.div>

                    {/* Step 2: 360 View */}
                    <div className="col-span-4">
                        <Card className="bg-cyan-500/5">
                            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-4"><BarChart size={32} className="text-cyan-500"/> 2. Vista 360°</h3>
                             <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-4">
                                <div>
                                    <h4 className="font-bold text-slate-900 text-2xl">Global Realty S.L.</h4>
                                    <p className="text-slate-500 text-lg">Caso Proactivo #1138</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-xl flex items-center gap-3"><User size={20}/> <strong>Contacto IA:</strong> A. García (CEO)</p>
                                    <p className="text-xl flex items-center gap-3"><FileText size={20}/> <strong>Documento:</strong> Nota Simple</p>
                                </div>
                                <div className="bg-slate-100/60 p-4 rounded-md">
                                    <p className="font-semibold text-cyan-800 text-lg">Insight Estratégico IA:</p>
                                    <p className="text-slate-700 text-lg leading-relaxed">La empresa muestra un patrón de expansión recurrente. El Copilot recomienda un enfoque en servicios de consultoría urbanística para maximizar el valor a largo plazo.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    
                    <motion.div variants={itemVariants} className="col-span-1 flex items-center justify-center h-full pt-32">
                        <ArrowRight className="text-slate-400 w-16 h-16" />
                    </motion.div>

                    {/* Step 3: Action */}
                    <div className="col-span-3">
                        <Card>
                            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-4"><Sparkles size={32} className="text-cyan-500"/> 3. Acción</h3>
                            <div className="bg-slate-50/70 p-5 rounded-lg border border-slate-200 flex-grow">
                                 <p className="font-semibold text-slate-500 text-lg">Copilot de Contacto</p>
                                <p className="text-slate-700 bg-white p-4 rounded-md mt-3 text-lg border">
                                    "Estimada Sra. García,
                                    Nuestro sistema de inteligencia de mercado ha identificado la reciente operación de Global Realty en Recoletos. Dado nuestro expertise..."
                                </p>
                            </div>
                            <button className="w-full bg-cyan-500 text-white font-bold py-4 rounded-lg text-xl flex items-center justify-center gap-3 transition-colors mt-6 hover:bg-cyan-600">
                                <Send size={20} /> Enviar Email
                            </button>
                        </Card>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};