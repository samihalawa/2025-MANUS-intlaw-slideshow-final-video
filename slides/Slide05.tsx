import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Check, Bot, UploadCloud, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

interface SlideProps {
  isActive: boolean;
}

const conversation = [
  { from: 'bot', text: 'Bienvenido al asistente de INTLAW. ¿En qué podemos ayudarle hoy?' },
  { from: 'user', text: 'Necesito asesoramiento para un contrato mercantil internacional.' },
  { from: 'bot', text: 'Entendido. Para dirigirle al especialista adecuado, ¿podría indicar el valor estimado del contrato?' },
  { from: 'user', text: 'Aproximadamente 250.000€.' },
  { from: 'bot', text: 'Perfecto. Para casos de esta naturaleza, nuestra tarifa de análisis inicial es de 250€. ¿Desea proceder?' },
  { from: 'user', text: 'Sí, procedo.' },
  { from: 'bot', text: 'Excelente. Para que un socio revise su caso, por favor, suba la documentación relevante de forma segura aquí.', type: 'upload' },
  { from: 'user', text: '...', type: 'upload_success' },
  { from: 'bot', text: 'Documentos recibidos. He añadido el caso a nuestro sistema y será revisado por un socio en breve.' },
];

const DocumentUploader = () => (
    <motion.div 
      className="border-4 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-100/50"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring' }}
    >
        <UploadCloud className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
        <p className="font-bold text-slate-700 text-2xl">Arrastre y suelte sus archivos aquí</p>
        <p className="text-slate-500 text-xl">Carga segura y encriptada</p>
    </motion.div>
);

const UploadSuccess = () => (
    <motion.div 
        className="flex justify-end"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    >
        <div className="p-4 rounded-2xl bg-green-100 text-green-800 flex items-center gap-3 text-2xl font-semibold">
            <FileCheck />
            <span>3 archivos subidos</span>
        </div>
    </motion.div>
);

const ChatbotMockup = () => {
  const [messages, setMessages] = useState(conversation.slice(0, 4));

  useInterval(() => {
    setMessages(prev => {
      if (prev.length < conversation.length) {
        return [...prev, conversation[prev.length]];
      }
      // Loop conversation
      return conversation.slice(0,1);
    });
  }, 2800);

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
          <Bot size={32} />
        </div>
        <div>
          <div className="font-bold text-slate-900 text-2xl">INTLAW AI Assistant</div>
          <div className="text-lg text-green-600 font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Online
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4 h-96 bg-white/50 overflow-y-auto">
        <AnimatePresence>
          {messages.map((msg, i) => (
            msg.type === 'upload_success' ? <UploadSuccess key={i} /> :
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`p-4 rounded-2xl max-w-[80%] text-2xl ${
                msg.from === 'bot' 
                ? 'bg-slate-200 text-slate-800 rounded-bl-none' 
                : 'bg-cyan-600 text-white rounded-br-none'
              }`}>
                <p>{msg.text}</p>
              </div>
              {msg.type === 'upload' && <div className="mt-4 w-full"><DocumentUploader /></div>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="p-4 border-t border-slate-200 bg-slate-100/80">
        <input type="text" placeholder="Escriba un mensaje..." className="w-full bg-white border-2 border-slate-300 rounded-lg p-4 text-xl text-slate-700 placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
      </div>
    </div>
  );
};


export const Slide05: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-16 justify-center">
      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-md mb-8">
        <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-1">Problema</p>
        <p className="text-slate-700 text-2xl">Clientes esperan. Oportunidades perdidas.</p>
      </div>
      <motion.div 
        className="grid grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
      >
        <motion.div variants={{hidden: {x: -20, opacity: 0}, visible: {x: 0, opacity: 1}}}>
          <div className="inline-block bg-cyan-500/10 text-cyan-600 text-lg font-bold px-4 py-2 rounded-full mb-4">Módulo 1: Asistente Web y Captación</div>
          <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Asistente Web: Flujo de Captación Automatizado</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div>
              <span className="text-4xl text-slate-700">Cualificación y Cotización</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div>
              <span className="text-4xl text-slate-700">Captura Segura de Documentos</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div>
              <span className="text-4xl text-slate-700">Creación Automática de Caso</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          variants={{hidden: {x: 20, opacity: 0}, visible: {x: 0, opacity: 1}}}
        >
          <ChatbotMockup />
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};
