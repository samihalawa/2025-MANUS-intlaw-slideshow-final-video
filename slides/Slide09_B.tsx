import React, { useState, useEffect, useRef } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { LayoutDashboard, Users, Briefcase, Settings, Bell, ChevronDown, Sparkles, Target, Database, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor } from '../components/Cursor';

interface SlideProps {
  isActive: boolean;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] } }
};


const InboxView = ({ isActive }: { isActive: boolean }) => (
    <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
    >
        <motion.div className="grid grid-cols-5 gap-6" variants={itemVariants}>
            <div className="col-span-3">
                 <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="text-xl text-slate-500 uppercase bg-slate-50/80">
                            <tr><th colSpan={3} className="p-5 font-semibold">Bandeja de Entrada (Reactivo)</th></tr>
                        </thead>
                        <motion.tbody 
                            className="divide-y divide-slate-200/50"
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {[{ n: 'TechCorp SL', s: 95, a: true }, { n: 'InnoSolutions SA', s: 92, a: false }].map((lead) => (
                                <motion.tr key={lead.n} variants={itemVariants} className={`hover:bg-slate-50/40 ${lead.a ? 'bg-cyan-500/5' : ''}`}>
                                    <td className="p-5">
                                        <div className="font-semibold text-slate-900 text-3xl">{lead.n}</div>
                                    </td>
                                    <td className="p-5 font-bold text-cyan-500 text-5xl">{lead.s}</td>
                                    <td className="p-5 text-right"><span className={`px-4 py-2 rounded-full text-xl font-semibold bg-red-500/10 text-red-600`}>ALTA</span></td>
                                </motion.tr>
                            ))}
                        </motion.tbody>
                    </table>
                </div>
            </div>
            <div className="col-span-2">
                 <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm h-full">
                    <h3 className="font-bold text-slate-900 text-2xl mb-3">TechCorp SL</h3>
                    <div className="bg-slate-100/50 p-4 rounded-md">
                        <p className="font-semibold text-slate-500 text-lg">Análisis IA (API Externa)</p>
                        <p className="text-slate-700 text-2xl mt-3"><strong className="font-semibold">Fuente:</strong> Registro Mercantil</p>
                        <p className="text-slate-700 text-2xl"><strong className="font-semibold">Facturación 2024:</strong> €5.2M</p>
                        <p className="text-slate-700 text-2xl"><strong className="font-semibold">Decisor Clave:</strong> Juan Pérez (CEO)</p>
                        <p className="text-green-600 text-2xl font-bold mt-3"><strong className="font-semibold text-slate-600">Viabilidad Económica:</strong> ALTA</p>
                    </div>
                    <p className="mt-4 text-slate-500 text-xl"><strong className="font-semibold text-slate-800">Estado:</strong> Pendiente de revisión</p>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const ProspeccionView = ({isActive} : {isActive: boolean}) => (
    <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
    >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-slate-900 mb-6">Campañas de Prospección Activas</motion.h2>
        <motion.div 
            className="space-y-5"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
            {[
                { title: "Herencias (BOE)", icon: <Database size={28}/>, results: [{ t: 'Familia Pérez (Madrid)', d: 'Edicto BOE 2025-10-19' }, { t: 'Herederos de A. Gómez (Barcelona)', d: 'Edicto BOE 2025-10-18' }] },
                { title: "Real Estate (>2M€)", icon: <Home size={28}/>, results: [{ t: 'Transacción Alto Valor (Valencia)', d: 'Registro 2025-10-17' }] }
            ].map(c => (
                <motion.div key={c.title} variants={itemVariants} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-3xl mb-4 flex items-center gap-4">{c.icon}{c.title}</h3>
                    <div className="space-y-3">
                        {c.results.map(r => (
                            <div key={r.t} className="bg-slate-50/60 p-4 rounded-md flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-slate-800 text-2xl">{r.t}</p>
                                    <p className="text-slate-500 text-xl italic">Detectado: {r.d}</p>
                                </div>
                                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-4 rounded-md text-xl transition-colors">Generar Contacto</button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
);

export const Slide09_B: React.FC<SlideProps> = ({ isActive }) => {
    const [activeTab, setActiveTab] = useState('inbox');
    const navItems = [{ i: <Users size={28}/>, l: 'Leads', a: true }, { i: <Briefcase size={28}/>, l: 'Clientes' }];
    
    const prospectingTabRef = useRef<HTMLButtonElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);
    const [cursorClick, setCursorClick] = useState(false);

    useEffect(() => {
        if (!isActive) {
            setActiveTab('inbox');
            setCursorVisible(false);
            return;
        }
        
        const toggleTab = () => {
            const nextTab = activeTab === 'inbox' ? 'prospecting' : 'inbox';
            
            if (nextTab === 'prospecting' && prospectingTabRef.current) {
                const tab = prospectingTabRef.current;
                const x = tab.offsetLeft + tab.offsetWidth / 2;
                const y = tab.offsetTop + tab.offsetHeight / 2;
                
                setCursorPos({ x, y });
                setCursorVisible(true);
                
                setTimeout(() => {
                    setCursorClick(true);
                    setTimeout(() => {
                        setActiveTab('prospecting');
                        setCursorClick(false);
                    }, 300);
                }, 800);
            } else {
                setCursorVisible(false);
                setActiveTab('inbox');
            }
        };
        
        const intervalId = setInterval(toggleTab, 5000);
        return () => clearInterval(intervalId);
    }, [isActive, activeTab]);

    return (
        <SlideWrapper className="p-8 flex flex-col items-center justify-center">
             <Cursor x={cursorPos.x} y={cursorPos.y} visible={cursorVisible} click={cursorClick} />
            <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <motion.h2 
                  variants={itemVariants}
                  className="text-7xl font-bold tracking-tighter text-slate-900 mb-6 text-center" 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Dashboard de Oportunidades
                </motion.h2>
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-2xl border border-slate-200 flex min-h-[720px] w-full max-w-[1600px] relative"
                >
                    <div className="w-72 bg-slate-50/50 rounded-l-xl p-6 flex flex-col border-r border-slate-200">
                        <div className="font-bold text-4xl text-slate-900 mb-12 tracking-tighter" style={{fontFamily: "'Playfair Display', serif"}}>INTLAW</div>
                        <nav className="space-y-3">
                            {navItems.map(item => (
                                <a href="#" key={item.l} className={`flex items-center gap-5 px-5 py-4 text-2xl rounded-md font-medium ${item.a ? 'bg-cyan-500/10 text-cyan-600' : 'text-slate-500 hover:bg-slate-200/50'}`}>{item.i} {item.l}</a>
                            ))}
                        </nav>
                        <a href="#" className="flex items-center gap-5 px-5 py-4 text-2xl rounded-md text-slate-500 hover:bg-slate-200/50 mt-auto"><Settings size={28}/> Config</a>
                    </div>

                    <div className="flex-1 flex flex-col">
                        <header className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <div className="flex items-center">
                                <button onClick={() => setActiveTab('inbox')} className={`px-5 py-2 text-2xl font-semibold transition-all ${activeTab === 'inbox' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-500'}`}>Bandeja de Entrada</button>
                                <button ref={prospectingTabRef} onClick={() => setActiveTab('prospecting')} className={`px-5 py-2 text-2xl font-semibold flex items-center gap-3 transition-all ${activeTab === 'prospecting' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-500'}`}>
                                    <Target size={24}/>Prospección IA
                                </button>
                            </div>
                            <div className="flex items-center gap-8">
                                <Bell className="text-slate-500" size={32}/>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-xl">SH</div>
                                    <span className="text-2xl font-medium text-slate-700">Sami Halawa</span>
                                    <ChevronDown className="text-slate-400" size={24}/>
                                d</div>
                            </div>
                        </header>
                        <main className="p-8 bg-slate-50/30 flex-grow overflow-y-auto">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                              >
                                {activeTab === 'inbox' ? <InboxView isActive={isActive} /> : <ProspeccionView isActive={isActive} />}
                              </motion.div>
                            </AnimatePresence>
                        </main>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
};
