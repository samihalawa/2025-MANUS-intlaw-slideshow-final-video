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
                 <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 0.5}}} className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-4 rounded-lg max-w-[80%] text-xl shadow">Hola, necesito ayuda con un contrato de compraventa bastante complejo.</div>
                </motion.div>
                 <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 1.5}}} className="flex justify-start">
                    <div className="bg-white p-4 rounded-lg max-w-[80%] text-xl shadow">Entendido. Para analizarlo y asignarle un especialista, ¿podría enviarme el borrador del contrato?</div>
                </motion.div>
                 <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 2.8}}} className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-3 rounded-lg max-w-[80%] text-xl shadow flex flex-col items-end">
                        <div className="flex items-center gap-3 p-3 bg-slate-100/50 rounded-md border border-slate-200 w-full">
                            <FileText size={36} className="text-slate-600 flex-shrink-0"/> 
                            <span className="font-semibold text-lg">Contrato_V1.pdf</span>
                        </div>
                        <span className="mt-2">Aquí está todo.</span>
                    </div>
                </motion.div>
                <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 4.0}}} className="flex justify-start">
                    <div className="bg-white p-4 rounded-lg max-w-[80%] text-xl shadow">Recibido y analizando...</div>
                </motion.div>
                <motion.div initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1, transition: {delay: 5.5}}} className="flex justify-start">
                    <div className="bg-white p-4 rounded-lg max-w-[80%] text-xl shadow">Análisis preliminar completado. Caso ID-4588 creado. Un socio le contactará en breve. Gracias.</div>
                </motion.div>
            </div>
        </div>
    </div>
);

const dashboardVariants: Variants = {
    hidden: { },
    visible: { transition: { staggerChildren: 0.2, delayChildren: 6.0 } }
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
        className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 p-12 space-y-10 h-full flex flex-col justify-center"
        whileHover={{ scale: 1.02 }}
    >
        <motion.div variants={itemVariants}>
            <div className="flex justify-between items-center">
                <h3 className="text-5xl font-bold text-slate-900">Nuevo Lead Cualificado</h3>
                <motion.span
                  className="text-2xl font-bold bg-green-500/10 text-green-600 px-6 py-3 rounded-full border-2 border-green-500/20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Recibido
                </motion.span>
            </div>
             <p className="text-3xl text-slate-500 mt-3 font-medium">Caso ID-4588</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-slate-50/70 p-8 rounded-xl border-2 border-slate-200 space-y-4">
            <p className="text-3xl"><strong className="font-bold text-slate-600 w-40 inline-block">Empresa:</strong> Compañía XYZ S.L.</p>
            <p className="text-3xl"><strong className="font-bold text-slate-600 w-40 inline-block">Contacto:</strong> +34 6XX XXX XXX</p>
            <p className="text-3xl"><strong className="font-bold text-slate-600 w-40 inline-block">Tipo:</strong> Contrato Mercantil</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-br from-cyan-500/5 to-blue-600/5 p-8 rounded-xl border-2 border-cyan-500/30">
            <p className="font-bold text-cyan-800 text-3xl mb-4 flex items-center gap-4"><Target size={28} />Resumen por IA:</p>
            <p className="text-slate-700 text-2xl leading-relaxed">
                El Agente IA ha extraído los datos clave del documento adjunto: Contrato mercantil con un valor estimado de 250k€. Se han identificado cláusulas de confidencialidad y condiciones de pago a 90 días. Puntuación de viabilidad: 95/100 (ALTA). Se recomienda asignación inmediata a socio senior.
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
                className="text-8xl font-bold tracking-tighter text-slate-900 mb-5 text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Captación Multicanal y Cualificación IA
            </motion.h2>
            <motion.p variants={itemVariants} className="text-4xl text-slate-600 mb-10 text-center font-light">De WhatsApp a un caso cualificado en segundos.</motion.p>
          </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-20 items-center"
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