import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, UploadCloud, FileCheck, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

interface SlideProps {
  isActive: boolean;
}

const conversation = [
  { from: 'bot', text: 'Bienvenido al asistente de INTLAW. ¿En qué podemos ayudarle hoy?' },
  { from: 'user', text: 'Necesito asesoramiento para un contrato mercantil.' },
  { from: 'bot', text: 'Entendido. Para dirigirle al especialista, ¿cuál es el valor estimado del contrato?' },
  { from: 'user', text: 'Aproximadamente 250.000€.' },
  { from: 'bot', text: 'Gracias. Para este tipo de consulta, nuestra tarifa de análisis inicial es de 250€. ¿Desea proceder?', type: 'buttons' },
  { from: 'user', text: 'Sí, proceder.', type: 'button_click' },
  { from: 'bot', text: 'Perfecto. Para acelerar su caso, por favor, arrastre y suelte la documentación relevante en la siguiente caja segura.', type: 'upload' },
  { from: 'user', type: 'upload_action' },
  { from: 'bot', text: 'Documento recibido. He creado su caso (ID-4587) y un socio le contactará en breve. Gracias.' },
];

const ChatbotMockup = () => {
  const [messages, setMessages] = useState(conversation.slice(0, 4));
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  useInterval(() => {
    if (messages.length < conversation.length) {
      const nextMessage = conversation[messages.length];
      
      if (nextMessage.type === 'buttons') {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
      
      if (nextMessage.type !== 'button_click') {
        setMessages(prev => [...prev, nextMessage]);
      }
    } else {
      // Loop conversation
      setMessages([conversation[0]]);
      setShowButtons(false);
    }
  }, 2500);

  const handleButtonClick = () => {
    setShowButtons(false);
    setMessages(prev => [...prev, conversation.find(m => m.type === 'button_click')!]);
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className="p-5 bg-slate-100/80 border-b border-slate-200 flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
          <Bot size={36} />
        </div>
        <div>
          <div className="font-bold text-slate-900 text-3xl">INTLAW AI Assistant</div>
          <div className="text-xl text-green-600 font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Online
          </div>
        </div>
      </div>
      <div id="chat-container" className="p-8 space-y-5 h-[450px] bg-white/50 overflow-y-auto scroll-smooth">
        <AnimatePresence>
          {messages.map((msg, i) => {
            if (msg.type === 'upload_action') {
              return <motion.div key={i} initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} className="flex justify-end my-2"><div className="p-4 rounded-2xl bg-green-100 text-green-800 flex items-center gap-3 text-2xl font-semibold"><FileCheck size={28}/><span>Contrato_Borrador.pdf</span></div></motion.div>;
            }
            if (msg.from) {
              return (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`p-4 rounded-2xl max-w-[85%] text-2xl ${
                    msg.from === 'bot' 
                    ? 'bg-slate-200 text-slate-800 rounded-bl-none' 
                    : `bg-cyan-600 text-white rounded-br-none ${msg.type === 'button_click' ? 'opacity-50' : ''}`
                  }`}>
                    <p>{msg.text}</p>
                  </div>
                  {msg.type === 'upload' && <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} className="mt-4 w-full border-4 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-100/50"><UploadCloud className="w-16 h-16 text-cyan-500 mx-auto mb-4" /><p className="font-bold text-slate-700 text-2xl">Arrastre y suelte sus archivos</p><p className="text-slate-500 text-xl">Carga segura y encriptada</p></motion.div>}
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
      <div className="p-5 border-t border-slate-200 bg-slate-100/80">
        {showButtons ? (
          <div className="flex gap-4">
            <button onClick={handleButtonClick} className="flex-1 bg-cyan-600 text-white font-semibold py-4 px-5 rounded-lg text-2xl hover:bg-cyan-700 transition-colors">Sí, proceder</button>
            <button className="flex-1 bg-slate-300 text-slate-700 font-semibold py-4 px-5 rounded-lg text-2xl hover:bg-slate-400 transition-colors">No, gracias</button>
          </div>
        ) : (
          <input type="text" placeholder="Escriba un mensaje..." className="w-full bg-white border-2 border-slate-300 rounded-lg p-4 text-xl" disabled />
        )}
      </div>
    </div>
  );
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const features = [
    { text: "<strong>Asistente Conversacional 24/7:</strong> Capture y atienda a cada visitante de su web, a cualquier hora." },
    { text: "<strong>Cualificación Inteligente:</strong> Filtre y priorice leads automáticamente según sus criterios de cliente ideal." },
    { text: "<strong>Ingesta Segura de Documentos:</strong> Permita a los clientes subir documentación de forma encriptada y directa en el chat." },
    { text: "<strong>Creación Automática de Casos:</strong> Convierta conversaciones cualificadas en casos activos en su CRM, sin entrada manual de datos." }
];

export const Slide07_B: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-16 justify-center">
      <motion.div 
        className="grid grid-cols-2 gap-16 items-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.div>
            <motion.div variants={itemVariants} className="inline-block bg-cyan-500/10 text-cyan-600 text-2xl font-bold px-6 py-3 rounded-full mb-6">Módulo 1: Asistente Web IA</motion.div>
            <motion.h2 variants={itemVariants} className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Asistente Web: Automatización de Principio a Fin</motion.h2>
            <motion.div 
                className="space-y-6 text-3xl text-slate-700"
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
                {features.map((feature, i) => (
                    <motion.div key={i} variants={itemVariants} className="flex items-start gap-5">
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0 w-8 h-8"/>
                        <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          variants={{...itemVariants, hidden: {...itemVariants.hidden, x: 20}, visible: {...itemVariants.visible, x: 0}}}
        >
          <ChatbotMockup />
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
};