import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, FileText, Briefcase, Target } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const WhatsAppMockup = () => (
    <div className="w-[420px] h-[750px] bg-white rounded-[40px] shadow-2xl border-8 border-slate-800 overflow-hidden mx-auto">
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="bg-slate-100 p-4 flex items-center gap-4 border-b border-slate-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white"><Bot size={32}/></div>
                <div>
                    <p className="font-bold text-slate-800 text-2xl">INTLAW AI</p>
                    <p className="text-lg text-green-600 font-semibold">online</p>
                </div>
            </div>
            {/* Chat Area */}
            <div className="flex-grow p-5 bg-[#E5DDD5] space-y-4">
                 <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 0.3}}} className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-4 rounded-lg max-w-[80%] text-xl shadow">Hola, necesito ayuda con un contrato complejo.</div>
                </motion.div>
                 <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 1.0}}} className="flex justify-start">
                    <div className="bg-white p-4 rounded-lg max-w-[80%] text-xl shadow">Entendido. Para analizarlo, ¿podría enviarme el borrador?</div>
                </motion.div>
                 <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 1.8}}} className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg max-w-[80%] text-xl shadow flex flex-col items-end">
                        <div className="flex items-center gap-3 p-3 bg-slate-100/50 rounded-md border border-slate-200 w-full">
                            <FileText size={36} className="text-slate-600 flex-shrink-0"/> 
                            <span className="font-semibold text-lg">Contrato_V1.pdf</span>
                        </div>
                        <span className="mt-2">Aquí está.</span>
                    </div>
                </motion.div>
                <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 2.5}}} className="flex justify-start">
                    <div className="bg-white p-4 rounded-lg max-w-[80%] text-xl shadow">Recibido y analizando...</div>
                </motion.div>
                <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 3.2}}} className="flex justify-start">
                    <div className="bg-white p-4 rounded-lg max-w-[80%] text-xl shadow">Análisis completado. Caso ID-4588 creado. Un socio contactará.</div>
                </motion.div>
            </div>
        </div>
    </div>
);

const dashboardVariants: Variants = {
    hidden: { },
    visible: { transition: { staggerChildren: 0.2, delayChildren: 3.5 } }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const NewLeadCard = ({ isActive }: { isActive: boolean }) => (
    <motion.div 
        variants={dashboardVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-10 space-y-8 h-full flex flex-col justify-center"
    >
        <motion.div variants={itemVariants}>
            <div className="flex justify-between items-center">
                <h3 className="text-4xl font-bold text-slate-900">Nuevo Lead Cualificado</h3>
                <span className="text-xl font-semibold bg-green-500/10 text-green-600 px-4 py-2 rounded-full">Recibido</span>
            </div>
             <p className="text-2xl text-slate-500 mt-2">Caso ID-4588</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-slate-50/70 p-6 rounded-lg border border-slate-200 space-y-3">
            <p className="text-2xl"><strong className="font-semibold text-slate-600 w-32 inline-block">Empresa:</strong> Compañía XYZ S.L.</p>
            <p className="text-2xl"><strong className="font-semibold text-slate-600 w-32 inline-block">Contacto:</strong> +34 6XX XXX XXX</p>
            <p className="text-2xl"><strong className="font-semibold text-slate-600 w-32 inline-block">Tipo:</strong> Contrato Mercantil</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-cyan-500/5 p-6 rounded-lg border border-cyan-500/30">
            <p className="font-bold text-cyan-800 text-2xl mb-3 flex items-center gap-3"><Target size={24} />Resumen por IA:</p>
            <p className="text-slate-600 text-xl leading-relaxed">
                IA extrajo datos clave: contrato mercantil de 250k€. Cláusulas de confidencialidad y pago a 90 días. Viabilidad: 95/100 (ALTA). Recomiendo asignar a socio.
            </p>
        </motion.div>
    </motion.div>
);

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};

export const Slide08_B: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            className="w-full"
          >
            <motion.h2 
                variants={itemVariants} 
                className="text-7xl font-bold tracking-tighter text-slate-900 mb-3 text-center" 
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Captación Multicanal y Cualificación IA
            </motion.h2>
            <motion.p variants={itemVariants} className="text-3xl text-slate-600 mb-8 text-center">De WhatsApp a caso cualificado en segundos.</motion.p>
          </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-16 items-center"
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
                <motion.div 
                  className="flex justify-center"
                  variants={{...itemVariants, hidden: {...itemVariants.hidden, x: -20}, visible: {...itemVariants.visible, x: 0}}}
                >
                    <WhatsAppMockup />
                </motion.div>
                <motion.div variants={{...itemVariants, hidden: {...itemVariants.hidden, x: 20}, visible: {...itemVariants.visible, x: 0}}}>
                    <NewLeadCard isActive={isActive} />
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};