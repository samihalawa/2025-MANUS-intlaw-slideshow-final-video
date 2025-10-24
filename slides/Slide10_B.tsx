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
                <h2 className="text-9xl font-bold tracking-tighter text-slate-900 text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Radar de Oportunidades Proactivas</h2>
                <p className="text-4xl text-slate-600 mb-14 text-center font-light">Detectando clientes potenciales antes que nadie.</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-full max-w-7xl bg-slate-50/70 rounded-3xl shadow-2xl border-2 border-slate-200 p-10"
              >
                  <motion.header
                    className="flex justify-between items-center mb-8"
                    variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                  >
                      <motion.h3 variants={itemVariants} className="text-5xl font-bold text-slate-800 flex items-center gap-5"><Sparkles size={44} className="text-cyan-500" />Señales Detectadas</motion.h3>
                      <motion.div variants={itemVariants} className="flex items-center gap-12">
                           <div className="text-right">
                              <p className="text-6xl font-bold text-slate-800">17</p>
                              <p className="text-2xl text-slate-500 uppercase font-bold">Nuevas esta semana</p>
                          </div>
                           <div className="text-right">
                              <p className="text-6xl font-bold text-slate-800">83</p>
                              <p className="text-2xl text-slate-500 uppercase font-bold">Total mes</p>
                          </div>
                      </motion.div>
                  </motion.header>

                  <motion.div
                      className="space-y-6"
                      variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                  >
                      {opportunities.map((op, i) => (
                          <motion.div
                              key={i}
                              variants={itemVariants}
                              className="bg-white rounded-xl p-8 flex items-center gap-8 border-2 border-slate-200 hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                          >
                              <motion.div
                                className={`w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 text-cyan-500 flex items-center justify-center`}
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                              >
                                  <Building size={44} />
                              </motion.div>
                              <div className="flex-grow">
                                  <p className="font-bold text-4xl text-slate-800">{op.name}</p>
                                  <div className="flex items-center gap-8 text-slate-500 mt-3 text-2xl">
                                      <span className="flex items-center gap-3"><Lightbulb size={24}/> {op.signal}</span>
                                      <span className="flex items-center gap-3"><MapPin size={24}/> {op.niche}</span>
                                  </div>
                              </div>
                              <div className="text-right">
                                  <p className={`text-2xl font-bold px-6 py-3 rounded-full ${op.color === 'red' ? 'text-red-500 bg-red-500/10 border-2 border-red-500/20' : 'text-yellow-500 bg-yellow-500/10 border-2 border-yellow-500/20'}`}>{op.potential}</p>
                              </div>
                               <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-5 px-8 rounded-xl text-2xl transition-all hover:scale-105">
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