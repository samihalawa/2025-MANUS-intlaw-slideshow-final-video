import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { DatabaseZap, Search, FileText, Check, ShieldCheck } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const features = [
    { icon: <DatabaseZap size={48} />, text: 'Análisis Masivo de Expedientes' },
    { icon: <Search size={48} />, text: 'Extracción de Entidades y Cláusulas' },
    { icon: <FileText size={48} />, text: 'Generación de Resúmenes' }
];

const guarantees = [
    'Cada respuesta vinculada a documentos.',
    'Reembolso total si se detecta una alucinación.',
];

const AnimatedStat = ({ value, suffix = '', isActive }: { value: number; suffix?: string; isActive: boolean; }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        if (isActive) {
            const controls = animate(count, value, { 
                duration: 1.5, // Slower animation
                ease: "easeOut",
                delay: 0.5
            });
            return () => controls.stop();
        } else {
          count.set(0);
        }
    }, [isActive, value, count]);
    
    return (
        <div className="flex items-baseline justify-center">
            <motion.p className="text-7xl font-bold text-slate-900">{rounded}</motion.p>
            <p className="text-7xl font-bold text-slate-900">{suffix}</p>
        </div>
    );
};

export const Slide10: React.FC<SlideProps> = ({ isActive }) => {
    const benefits = [
        {l:'Análisis Acelerado',v:100, s:'x'},
        {l:'Ahorro de Tiempo',v:80, s:'%'}
    ];

    const mainVariants = {
      hidden: {},
      visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
    }

    return (
        <SlideWrapper className="p-16 justify-center">
            <motion.div
              variants={mainVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3: Analista de Documentos</h2>
                <p className="text-3xl text-slate-600 mb-12">Precisión absoluta garantizada.</p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-12"
              >
                  <motion.div 
                    className="space-y-8"
                    variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                  >
                      {features.map((feature, i) => (
                          <motion.div key={i} variants={itemVariants} className="bg-slate-50/50 p-8 rounded-lg flex items-center gap-8 border border-slate-200">
                              <div className="text-cyan-500">{feature.icon}</div>
                              <p className="text-4xl text-slate-700">{feature.text}</p>
                          </motion.div>
                      ))}
                      <motion.div 
                        className="grid grid-cols-2 gap-8 pt-4"
                        variants={{ visible: { transition: { staggerChildren: 0.15 }}}}
                      >
                          {benefits.map(b=>(
                              <motion.div key={b.l} variants={itemVariants} className="bg-slate-50/50 p-6 rounded-lg text-center border border-slate-200">
                                  <AnimatedStat value={b.v} suffix={b.s} isActive={isActive} />
                                  <p className="text-xl text-slate-500 uppercase tracking-wider mt-2">{b.l}</p>
                              </motion.div>
                          ))}
                      </motion.div>
                  </motion.div>

                  <motion.div 
                    variants={{...itemVariants, hidden: {...itemVariants.hidden, x: 20}, visible: {...itemVariants.visible, x: 0}}} 
                    className="bg-blue-600/10 border-2 border-blue-500/50 rounded-xl p-10 flex flex-col justify-center items-center text-center"
                  >
                      <h3 className="text-5xl font-bold text-blue-600 flex items-center gap-4 mb-6">
                          <motion.div
                               animate={{ scale: [1, 1.05, 1] }}
                               transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          >
                              <ShieldCheck size={64} />
                          </motion.div>
                          <span>Garantizado</span>
                      </h3>
                      <p className="text-9xl leading-none font-bold text-slate-900">0%</p>
                      <p className="text-4xl font-semibold text-blue-600 mt-4">Alucinaciones</p>
                       <ul className="space-y-4 mt-8 text-left">
                          {guarantees.map((item, i) => (
                              <li key={i} className="flex items-start gap-4">
                                  <Check className="text-blue-600 mt-1 flex-shrink-0" size={28}/>
                                  <span className="text-slate-700 text-2xl">{item}</span>
                              </li>
                          ))}
                      </ul>
                      <div className="mt-6 text-left p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                          <p className="font-bold text-blue-700 text-lg">¿Cómo lo garantizamos?</p>
                          <p className="text-slate-700 text-lg mt-1">4 agentes IA verifican cada dato contra fuentes originales.</p>
                      </div>
                  </motion.div>
              </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};