import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

interface SlideProps {
  isActive: boolean;
}

const chatConversation = [
  { from: 'bot', text: 'Hola, soy el asistente de INTLAW AI. ¿Cómo puedo ayudarle?' },
  { from: 'user', text: 'Tengo una consulta sobre derecho mercantil.' },
  { from: 'bot', text: 'Por supuesto. ¿Podría darme más detalles?' },
];

const ChatbotWidget = () => {
  const [messages, setMessages] = useState(chatConversation.slice(0,1));

  useInterval(() => {
    setMessages(prev => (prev.length < chatConversation.length) ? [...prev, chatConversation[prev.length]] : [chatConversation[0]]);
  }, 2500);

  return (
    <div className="absolute bottom-6 right-6 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 z-20">
      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white"><Bot size={20}/></div>
        <div>
          <div className="font-bold text-white text-base">INTLAW AI Assistant</div>
          <div className="text-sm text-white/80 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400"></div> Online
          </div>
        </div>
      </div>
      <div className="p-3 space-y-2 h-48 text-base bg-white/50 text-slate-800">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div 
              key={i} 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : ''}`}
            >
              <div className={`p-2.5 rounded-lg max-w-[85%] ${msg.from === 'bot' ? 'bg-slate-100 rounded-bl-none' : 'bg-cyan-600 text-white rounded-br-none'}`}>
                <p>{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
       <div className="p-2 border-t border-slate-200">
        <input type="text" placeholder="Escriba un mensaje..." className="w-full bg-slate-100 border-2 border-slate-200 rounded-md p-2 text-base focus:ring-cyan-500 focus:border-cyan-500 outline-none" />
      </div>
    </div>
  );
};

const FeatureAnnotation = ({ text, position }: { text: string; position: string }) => (
    <motion.div 
        className={`absolute ${position} bg-slate-800 text-white text-xl font-bold px-5 py-3 rounded-lg shadow-lg flex items-center gap-3`}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        {text}
    </motion.div>
);

export const Slide06: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-16 flex flex-col justify-center">
            <motion.h2 
              className="text-7xl font-bold tracking-tighter text-slate-900 mb-8 text-center" 
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: -20, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            >
              Módulo 2: Integración IA
            </motion.h2>
            
            <motion.div 
              className="flex-grow bg-slate-100 rounded-xl p-2 border border-slate-200 shadow-2xl relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 bg-white rounded-full flex-grow h-8 flex items-center px-4 text-sm text-slate-500 border border-slate-200">
                        <Lock size={14} className="mr-2 text-slate-400" />
                        https://intlaw.eu
                    </div>
                </div>

                {/* Website Content */}
                <div className="relative min-h-[450px] overflow-hidden">
                    <div className="absolute inset-0 bg-slate-300">
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-200">
                            <h1 className="text-6xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>MEET THE TEAM</h1>
                            <p className="mt-4 text-xl text-slate-700 max-w-lg">Asesoramiento legal integral.</p>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-200/80 to-transparent"></div>

                    <ChatbotWidget />

                    <FeatureAnnotation text="Experiencia de Usuario Fluida" position="top-1/3 right-[380px]" />
                    <FeatureAnnotation text="Cualificación Inteligente 24/7" position="top-1/2 right-[420px]" />
                </div>
            </motion.div>
        </SlideWrapper>
    );
};
