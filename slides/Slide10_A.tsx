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
    { icon: <Search />, title: '1. Defina su Objetivo', desc: "Describa su cliente ideal en lenguaje natural. Ej: 'empresas de construcción en Valencia que han ganado licitaciones de >500k€'."},
    { icon: <Filter />, title: '2. Búsqueda IA Multi-Fuente', desc: 'El sistema rastrea y cruza en tiempo real millones de datos de BOE, registros, prensa y licitaciones para encontrar coincidencias.'},
    { icon: <Send />, title: '3. Cualificación Automática', desc: 'Cada oportunidad es analizada y enriquecida con datos clave: decisores, salud financiera y contexto del evento.'},
    { icon: <Target />, title: '4. Contacto Inteligente', desc: 'Genere borradores de email hiper-personalizados en segundos, utilizando los insights de la IA para maximizar la tasa de respuesta.'},
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
                <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>El Motor de Crecimiento Proactivo</h2>
                <p className="text-3xl text-slate-600 mb-12 text-center max-w-5xl mx-auto">Deje de esperar a que los clientes lleguen. Vaya a buscarlos.</p>
              </motion.div>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                  {steps.map((step) => (
                      <motion.div
                          key={step.title}
                          className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 text-center flex flex-col items-center h-full"
                          variants={itemVariants}
                      >
                          <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-white text-cyan-500 rounded-full shadow-lg mb-6">
                              {React.cloneElement(step.icon, { size: 40, strokeWidth: 2 })}
                          </div>
                          <h3 className="text-3xl font-bold text-slate-800 mb-4">{step.title}</h3>
                          <p className="text-xl text-slate-600 flex-grow">{step.desc}</p>
                      </motion.div>
                  ))}
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};