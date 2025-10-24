import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Check, Star, MessageCircle, Mail, FilePlus, Users, Wrench, Target, Filter, LayoutDashboard, FileCheck2, Search, Link } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const Feature: React.FC<{icon: React.ReactNode, children: React.ReactNode}> = ({icon, children}) => (
    <li className="flex items-start gap-3 text-slate-600">
        {icon}
        <span>{children}</span>
    </li>
);

export const Slide15: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-16 bg-slate-50/50 justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        className="w-full max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Inversión Estratégica</h2>
          <p className="text-3xl text-slate-600 mb-12 text-center max-w-4xl mx-auto">Una estructura de valor transparente con una oferta de asociación preferente.</p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-x-auto"
          variants={itemVariants}
        >
            <table className="w-full text-lg min-w-[1000px]">
                <thead>
                    <tr className="border-b border-slate-300">
                        <th className="w-1/2 p-6 text-left text-xl font-bold text-slate-700 uppercase tracking-wider">Características Principales Incluidas</th>
                        <th className="w-1/4 p-6 text-center text-xl font-bold text-slate-700 uppercase tracking-wider">Asociación Estratégica</th>
                        <th className="w-1/4 p-6 text-center text-xl font-bold text-white uppercase tracking-wider bg-slate-800">
                            <div className="flex items-center justify-center gap-2">
                                <Star size={20} className="text-yellow-400" fill="currentColor" />
                                Oferta FastDeal
                            </div>
                            <span className="text-sm font-normal normal-case text-slate-300 mt-1 block">Válido hasta 30 Oct 2025</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    <tr>
                        <td className="p-6 align-top">
                            <p className="font-bold text-2xl text-slate-800 mb-3">Módulo 1: Captación y Asistente Inteligente</p>
                            <ul className="space-y-2 text-lg">
                                <Feature icon={<MessageCircle size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Asistente Web IA:</strong> Asistente web 24/7 que cualifica, cotiza y recoge documentos automáticamente.</Feature>
                                <Feature icon={<Mail size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Intake Multicanal:</strong> Centralice la captación de clientes desde web, email y WhatsApp.</Feature>
                                <Feature icon={<FilePlus size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Propuesta Automática:</strong> Genere y envíe propuestas de honorarios al instante tras la cualificación.</Feature>
                            </ul>
                        </td>
                        <td className="p-6 text-center align-middle font-semibold text-2xl text-slate-800">€15,000</td>
                        <td className="p-6 text-center align-middle bg-cyan-500/5">
                            <span className="text-slate-500 line-through text-lg">€15,000</span>
                            <span className="font-bold text-3xl text-cyan-600 ml-2">€12,000</span>
                            <span className="block text-sm font-semibold text-green-600 mt-1">Ahorro 20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-6 align-top">
                            <p className="font-bold text-2xl text-slate-800 mb-3">Módulo 2: Inteligencia Documental (Garantizado)</p>
                            <ul className="space-y-2 text-lg">
                                <Feature icon={<FileCheck2 size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Análisis Confiable:</strong> Análisis documental masivo con precisión garantizada (0% alucinaciones).</Feature>
                                <Feature icon={<Search size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Búsqueda Inteligente:</strong> Detección instantánea de riesgos, contradicciones y cláusulas críticas.</Feature>
                                <Feature icon={<Link size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Cita de Fuentes:</strong> Fiabilidad total: cada dato generado está vinculado a su fuente original.</Feature>
                            </ul>
                        </td>
                        <td className="p-6 text-center align-middle font-semibold text-2xl text-slate-800">€15,000</td>
                        <td className="p-6 text-center align-middle bg-cyan-500/5">
                            <span className="text-slate-500 line-through text-lg">€15,000</span>
                            <span className="font-bold text-3xl text-cyan-600 ml-2">€12,000</span>
                            <span className="block text-sm font-semibold text-green-600 mt-1">Ahorro 20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-6 align-top">
                            <p className="font-bold text-2xl text-slate-800 mb-3">Módulo 3: Motor de Crecimiento Proactivo IA</p>
                            <ul className="space-y-2 text-lg">
                                <Feature icon={<Target size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Radar de Oportunidades:</strong> Escaneo de datos públicos para detectar eventos (transacciones, litigios) y generar clientes.</Feature>
                                <Feature icon={<Filter size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Prospección Quirúrgica:</strong> Flujo constante de oportunidades de alto valor, filtradas para sus nichos más rentables.</Feature>
                                <Feature icon={<LayoutDashboard size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Inteligencia Competitiva:</strong> Identifique necesidades legales de empresas antes que su competencia y actúe primero.</Feature>
                            </ul>
                        </td>
                        <td className="p-6 text-center align-middle font-semibold text-2xl text-slate-800">€15,000</td>
                        <td className="p-6 text-center align-middle bg-cyan-500/5">
                            <span className="text-slate-500 line-through text-lg">€15,000</span>
                            <span className="font-bold text-3xl text-cyan-600 ml-2">€12,000</span>
                            <span className="block text-sm font-semibold text-green-600 mt-1">Ahorro 20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-6 align-top">
                            <p className="font-bold text-2xl text-slate-800 mb-3">Módulo 4: Copilot Documental y Asociación Estratégica</p>
                            <ul className="space-y-2 text-lg">
                                <Feature icon={<FilePlus size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Copilot de Redacción:</strong> Redacte documentos complejos desde lenguaje natural, conectado a los datos del caso.</Feature>
                                <Feature icon={<Users size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Implementación y Adopción:</strong> Formación completa para maximizar el rendimiento del equipo desde el día uno.</Feature>
                                <Feature icon={<Wrench size={20} className="flex-shrink-0 text-cyan-600"/>}><strong>Soporte Proactivo:</strong> 12 meses de soporte y monitorización para optimizar y evolucionar el sistema.</Feature>
                            </ul>
                        </td>
                        <td className="p-6 text-center align-middle font-semibold text-2xl text-slate-800">€15,000</td>
                        <td className="p-6 text-center align-middle bg-cyan-500/5">
                            <span className="text-slate-500 line-through text-lg">€15,000</span>
                            <span className="font-bold text-3xl text-cyan-600 ml-2">€12,000</span>
                            <span className="block text-sm font-semibold text-green-600 mt-1">Ahorro 20%</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-6 font-semibold text-2xl text-slate-800" colSpan={3}>Módulos Premium Adicionales</td>
                    </tr>
                    <tr>
                        <td className="pl-12 py-3 text-slate-600">Automatización de WhatsApp</td>
                        <td className="text-center font-semibold text-slate-700">+€5,000</td>
                        <td className="text-center font-bold text-green-600 bg-cyan-500/5">Incluido</td>
                    </tr>
                     <tr>
                        <td className="pl-12 py-3 text-slate-600">Agente de Voz Telefónico (IA)</td>
                        <td className="text-center font-semibold text-slate-700">+€6,000</td>
                        <td className="text-center font-bold text-green-600 bg-cyan-500/5">Incluido</td>
                    </tr>
                     <tr>
                        <td className="pl-12 py-3 text-slate-600">Entrega Acelerada (30 Días)</td>
                        <td className="text-center font-semibold text-slate-700">+€4,000</td>
                        <td className="text-center font-bold text-green-600 bg-cyan-500/5">Incluido</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold text-2xl">
                        <td className="p-6 text-slate-800">INVERSIÓN TOTAL</td>
                        <td className="p-6 text-center text-slate-800">€60,000<span className="block text-sm font-normal text-slate-500">(+ €15,000 módulos premium)</span></td>
                        <td className="p-6 text-center text-white bg-cyan-600">€48,000</td>
                    </tr>
                    <tr className="font-bold text-2xl">
                        <td className="p-6 text-green-700">AHORRO TOTAL (FastDeal)</td>
                        <td className="p-6 text-center"></td>
                        <td className="p-6 text-center text-green-700 bg-green-500/10">€27,000<span className="block text-sm font-normal text-green-600">(€12,000 dto. + €15,000 bonus)</span></td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};