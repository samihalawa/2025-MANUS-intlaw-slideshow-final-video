import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { ShieldCheck, CheckSquare, Clock, Repeat, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const guarantees = [
    {
        icon: <CheckSquare size={36} />,
        title: "Pagos Vinculados a Verificación",
        desc: "Cada pago se realiza únicamente tras la verificación y aceptación de la funcionalidad del hito correspondiente."
    },
    {
        icon: <ShieldCheck size={36} />,
        title: "Garantía 0% Alucinaciones",
        desc: "Si nuestro agente documental genera una alucinación, ofrecemos el reembolso total del módulo."
    },
    {
        icon: <Clock size={36} />,
        title: "Compromiso con los Plazos",
        desc: "Aplicamos una penalización del 10% sobre el valor del hito por cada semana de retraso en la entrega."
    },
    {
        icon: <Handshake size={36} />,
        title: "Soporte Continuo Incluido",
        desc: "La asociación incluye 12 meses de soporte proactivo y optimización para maximizar el valor."
    },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

export const Slide15_Assurance: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Garantías de Valor</h2>
                <p className="text-2xl text-slate-600 mb-12 text-center max-w-5xl mx-auto">Un marco de garantías explícitas que protege su inversión en cada paso.</p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-8"
                variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
              >
                  {guarantees.map((item, i) => (
                      <motion.div
                          key={item.title}
                          variants={itemVariants}
                          className="bg-slate-50/50 rounded-xl p-6 border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                      >
                          <div className="flex items-center gap-6 mb-5">
                               <motion.div
                                  className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"
                                  animate={{ scale: [1, 1.05, 1] }}
                                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                              >
                                  {item.icon}
                              </motion.div>
                              <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                          </div>
                          <p className="text-xl text-slate-600 pl-20">{item.desc}</p>
                      </motion.div>
                  ))}
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
