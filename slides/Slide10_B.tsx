import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Lightbulb, Building, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const opportunities = [
    { name: "Global Estate Corp", signal: "Ampliación de Capital", niche: "Real Estate", potential: "ALTO", color: "red" },
    { name: "Innovate BioTech", signal: "Registro de Patente", niche: "Propiedad Intelectual", potential: "MEDIO", color: "yellow" },
    { name: "Familia G. Lorca", signal: "Declaración de Herederos", niche: "Herencias", potential: "ALTO", color: "red" },
];

const containerVariants = {
    hidden: { },
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};

export const Slide10_B: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 flex flex-col items-center justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Radar de Oportunidades Proactivas</h2>
                <p className="text-3xl text-slate-600 mb-10 text-center">Detectando clientes potenciales antes que nadie.</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="w-full max-w-7xl bg-slate-50/70 rounded-2xl shadow-xl border border-slate-200 p-8"
              >
                  <motion.header 
                    className="flex justify-between items-center mb-6"
                    variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                  >
                      <motion.h3 variants={itemVariants} className="text-4xl font-bold text-slate-800 flex items-center gap-4"><Sparkles size={36} className="text-cyan-500" />Señales Detectadas</motion.h3>
                      <motion.div variants={itemVariants} className="flex items-center gap-8">
                           <div className="text-right">
                              <p className="text-5xl font-bold text-slate-800">17</p>
                              <p className="text-lg text-slate-500 uppercase font-semibold">Nuevas esta semana</p>
                          </div>
                           <div className="text-right">
                              <p className="text-5xl font-bold text-slate-800">83</p>
                              <p className="text-lg text-slate-500 uppercase font-semibold">Total mes</p>
                          </div>
                      </motion.div>
                  </motion.header>

                  <motion.div 
                      className="space-y-5"
                      variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                  >
                      {opportunities.map((op, i) => (
                          <motion.div
                              key={i}
                              variants={itemVariants}
                              className="bg-white rounded-lg p-6 flex items-center gap-6 border border-slate-200 hover:shadow-lg hover:border-cyan-400/50 transition-all duration-300"
                          >
                              <div className={`w-20 h-20 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center`}>
                                  <Building size={40} />
                              </div>
                              <div className="flex-grow">
                                  <p className="font-bold text-3xl text-slate-800">{op.name}</p>
                                  <div className="flex items-center gap-6 text-slate-500 mt-2 text-xl">
                                      <span className="flex items-center gap-2"><Lightbulb size={20}/> {op.signal}</span>
                                      <span className="flex items-center gap-2"><MapPin size={20}/> {op.niche}</span>
                                  </div>
                              </div>
                              <div className="text-right">
                                  <p className={`text-xl font-bold px-4 py-2 rounded-full ${op.color === 'red' ? 'text-red-500 bg-red-500/10' : 'text-yellow-500 bg-yellow-500/10'}`}>{op.potential}</p>
                              </div>
                               <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors">
                                  Contactar
                              </button>
                          </motion.div>
                      ))}
                  </motion.div>
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};