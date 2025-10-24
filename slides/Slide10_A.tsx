import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Search, Filter, Send, Target } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const containerVariants: Variants = {
    hidden: { },
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

const steps = [
    { icon: <Search size={48}/>, title: '1. Defina su Objetivo', desc: "Describa su cliente ideal en lenguaje natural. Ej: 'empresas de construcción en Valencia que han ganado licitaciones de >500k€'."},
    { icon: <Filter size={48}/>, title: '2. Búsqueda IA Multi-Fuente', desc: 'El sistema rastrea y cruza en tiempo real millones de datos de BOE, registros, prensa y licitaciones para encontrar coincidencias.'},
    { icon: <Send size={48}/>, title: '3. Cualificación Automática', desc: 'Cada oportunidad es analizada y enriquecida con datos clave: decisores, salud financiera y contexto del evento.'},
    { icon: <Target size={48}/>, title: '4. Contacto Inteligente', desc: 'Genere borradores de email hiper-personalizados en segundos, utilizando los insights de la IA para maximizar la tasa de respuesta.'},
];

export const Slide10_A: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-16 justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-9xl font-bold tracking-tighter text-slate-900 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>El Motor de Crecimiento Proactivo</h2>
                <p className="text-4xl text-slate-600 mb-16 text-center font-light">Convierta el mercado entero en su base de datos de clientes potenciales.</p>
              </motion.div>
              <motion.div
                className="grid grid-cols-4 gap-12"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.15 }
                  }
                }}
              >
                  {steps.map((step, i) => (
                      <motion.div
                          key={step.title}
                          className="bg-slate-50/50 rounded-2xl p-10 border-2 border-slate-200 text-center flex flex-col items-center hover:bg-white hover:shadow-xl transition-all"
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, y: -5 }}
                      >
                          <motion.div
                            className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-600/10 text-cyan-500 rounded-xl mb-10"
                            animate={{ rotate: [0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                          >
                              {step.icon}
                          </motion.div>
                          <h3 className="text-4xl font-bold text-slate-800 mb-6">{step.title}</h3>
                          <p className="text-2xl text-slate-600 flex-grow leading-relaxed">{step.desc}</p>
                      </motion.div>
                  ))}
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};