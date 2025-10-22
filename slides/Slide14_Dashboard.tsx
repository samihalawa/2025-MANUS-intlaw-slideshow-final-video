import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Zap, TrendingUp, BarChart, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const StatCard = ({ icon, title, value, subtitle }: { icon: React.ReactNode; title: string; value: string; subtitle: string; }) => (
     <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">{icon}{title}</h3>
        <div className="text-center">
            <p className="text-7xl font-bold text-cyan-500">{value}</p>
            <p className="text-slate-600 text-lg">{subtitle}</p>
        </div>
    </div>
);

const PnLChart = ({ isActive }: { isActive: boolean }) => (
    <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 col-span-2">
        <h3 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3"><LineChart className="text-cyan-500"/> Proyección de P&L a 12 Meses</h3>
        <div className="relative h-64">
            {/* Chart Grid Lines */}
            {[...Array(4)].map((_, i) => (
                <div key={i} className="absolute w-full border-t border-slate-300/50" style={{ bottom: `${(i + 1) * 20}%` }}></div>
            ))}
            
            {/* Chart Lines */}
            <svg className="absolute w-full h-full">
                {/* Costs Line */}
                <motion.path
                    d="M 0 192 Q 128 188, 256 182 T 512 170 T 768 160 T 1024 150"
                    stroke="#f59e0b" strokeWidth="4" fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                {/* Revenue Line */}
                <motion.path
                    d="M 0 230 Q 128 220, 256 160 T 512 80 T 768 40 T 1024 20"
                    stroke="#06b6d4" strokeWidth="4" fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                {/* Profit Area */}
                 <motion.path
                    d="M 230 165 L 1024 150 L 1024 20 L 230 165 Z"
                    fill="url(#profitGradient)"
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                />
                <defs>
                    <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

             {/* Annotation */}
             <motion.div 
                className="absolute"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ delay: 1.8, type: 'spring' }}
                style={{ left: '22%', top: '60%'}}
             >
                <div className="w-3 h-3 bg-green-500 rounded-full ring-4 ring-white"></div>
                <div className="bg-slate-800 text-white font-semibold px-3 py-1 rounded-md text-sm absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    ROI Breakeven (Mes ~4)
                </div>
             </motion.div>
        </div>
         <div className="flex justify-between text-sm font-semibold text-slate-500 mt-2 px-4">
            <span>Inicio</span><span>Mes 3</span><span>Mes 6</span><span>Mes 9</span><span>Mes 12</span>
        </div>
        <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-cyan-500 rounded"></div><span className="font-semibold">Ingresos</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-amber-500 rounded"></div><span className="font-semibold">Costes Operativos</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500/50 rounded"></div><span className="font-semibold">Beneficio Neto</span></div>
        </div>
    </div>
);


export const Slide14_Dashboard: React.FC<SlideProps> = ({ isActive }) => {
    return (
        <SlideWrapper className="p-12 flex flex-col justify-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : {}}
            >
              <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Dashboard de Retorno de Inversión (ROI)</h2>
              <p className="text-2xl text-slate-600 mb-8 text-center">Visualizando el impacto tangible y la proyección financiera.</p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-8 flex-grow"
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 }}}}
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 10}, visible: { opacity: 1, y: 0 }}}>
                  <StatCard 
                      icon={<Zap className="text-cyan-500"/>} 
                      title="Aumento de Eficiencia"
                      value="+60%"
                      subtitle="En tareas automatizables"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10}, visible: { opacity: 1, y: 0 }}}>
                  <StatCard 
                      icon={<TrendingUp className="text-cyan-500"/>} 
                      title="Capacidad de Crecimiento"
                      value="+25%"
                      subtitle="Casos gestionados sin ampliar equipo"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10}, visible: { opacity: 1, y: 0 }}}>
                  <PnLChart isActive={isActive} />
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
