import React, { useEffect, useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { LayoutDashboard, Users, Briefcase, Settings, Bell, ChevronDown, Sparkles, Target, FileText, Newspaper } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface SlideProps {
  isActive: boolean;
}

const AnimatedStat = ({ value, suffix = '', isActive }: { value: number, suffix?: string, isActive: boolean }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        if (isActive) {
            const controls = animate(count, value, { duration: 1.5 });
            return () => controls.stop();
        }
    }, [isActive, value, count]);

    return (
        <div className="flex items-baseline">
            <motion.p className="text-5xl font-semibold text-slate-900">{rounded}</motion.p>
            <p className="text-5xl font-semibold text-slate-900">{suffix}</p>
        </div>
    );
};

const InboxView = ({ isActive }: { isActive: boolean }) => {
    const leads = [
        { name: 'María González', company: 'TechCorp SL', score: 95, priority: 'ALTA' },
        { name: 'Carlos Ruiz', company: 'Innovatech', score: 92, priority: 'ALTA' },
    ];
    const stats = [
        { l: 'Total Leads', v: 47 },
        { l: 'Alta Prioridad', v: 12 },
        { l: 'Tasa Conversión', v: 68, s: '%' }
    ];

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Leads Cualificados (Reactivos)</h2>
            <div className="grid grid-cols-3 gap-5 mb-6">
                {stats.map(s=>(
                     <div key={s.l} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                        <p className="text-slate-500 mb-1 text-xl">{s.l}</p>
                        <AnimatedStat value={s.v} suffix={s.s} isActive={isActive} />
                    </div>
                ))}
            </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm mb-6">
                <h3 className="font-bold text-slate-900 text-2xl mb-2 flex items-center gap-2">
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Sparkles className="text-cyan-500" />
                    </motion.div>
                    Análisis IA del Lead Principal
                </h3>
                <p className="text-slate-600 text-xl">
                    <strong>Motivo (Score 95):</strong> El sistema identificó palabras clave de alta prioridad ("internacional", "valor > 250k€") y clasificó a la empresa en el sector tecnológico de alto crecimiento. Se recomienda asignación inmediata a un socio senior.
                </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="text-lg text-slate-500 uppercase bg-slate-50/80">
                        <tr>
                            <th className="p-4 font-semibold">Lead</th><th className="p-4 font-semibold">Score IA</th><th className="p-4 font-semibold">Prioridad</th><th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/50">
                        {leads.map((lead, i) => (
                            <tr key={i} className="hover:bg-slate-50/40">
                                <td className="p-4">
                                    <div className="font-semibold text-slate-900 text-3xl">{lead.name}</div>
                                    <div className="text-slate-500 text-xl">{lead.company}</div>
                                </td>
                                <td className="p-4 font-bold text-cyan-500 text-5xl">{lead.score}</td>
                                <td className="p-4"><span className={`px-3 py-1.5 rounded-full text-xl font-semibold ${lead.priority === 'ALTA' ? 'bg-red-500/10 text-red-600' : 'bg-yellow-500/10 text-yellow-600'}`}>{lead.priority}</span></td>
                                <td className="p-4 text-right"><button className="bg-white hover:bg-slate-100 border border-slate-300 px-5 py-2.5 rounded-md text-lg font-semibold text-slate-800">Ver</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

const ProspeccionView = () => {
    const campaigns = [
        { title: "Herencias (BOE)", icon: <FileText />, prospects: [{name: "Familia G. Lorca", location: "Madrid"}, {name: "Herederos J. Pérez", location: "Barcelona"}] },
        { title: "Transacciones Inmobiliarias (>2M€)", icon: <Briefcase />, prospects: [{name: "Global Estate Corp", location: "Marbella"}, {name: "Luxury Properties SL", location: "Ibiza"}] },
        { title: "Litigios de Empresas (Prensa)", icon: <Newspaper />, prospects: [{name: "Innovate BioTech", location: "Valencia"}] },
    ];
    return (
        <>
             <h2 className="text-4xl font-bold text-slate-900 mb-6">Prospección IA (Proactiva)</h2>
             <div className="space-y-6">
                 {campaigns.map(c => (
                     <div key={c.title} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                         <h3 className="font-bold text-slate-900 text-2xl mb-4 flex items-center gap-3">{c.icon}{c.title}</h3>
                         <div className="space-y-3">
                             {c.prospects.map(p => (
                                 <div key={p.name} className="bg-slate-50/60 p-3 rounded-md flex justify-between items-center">
                                     <div>
                                        <p className="font-semibold text-slate-800 text-xl">{p.name}</p>
                                        <p className="text-slate-500 text-lg">{p.location}</p>
                                     </div>
                                     <motion.button 
                                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md text-lg transition-colors"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                     >
                                        Generar Contacto
                                    </motion.button>
                                 </div>
                             ))}
                         </div>
                     </div>
                 ))}
             </div>
        </>
    )
};

const CRMApp = ({ isActive }: { isActive: boolean }) => {
    const [activeTab, setActiveTab] = useState('inbox');

    const navItems = [
        { icon: <LayoutDashboard size={24}/>, label: 'Dashboard' },
        { icon: <Users size={24}/>, label: 'Leads', active: true },
        { icon: <Briefcase size={24}/>, label: 'Clientes' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 flex h-[600px] w-full max-w-7xl">
            {/* Sidebar */}
            <div className="w-64 bg-slate-50/50 rounded-l-xl p-5 flex flex-col border-r border-slate-200">
                <div className="font-bold text-3xl text-slate-900 mb-10 tracking-tighter" style={{fontFamily: "'Playfair Display', serif"}}>INTLAW</div>
                <nav className="space-y-2">
                    {navItems.map(item => (
                        <a href="#" key={item.label} className={`flex items-center gap-4 px-4 py-3 text-xl rounded-md font-medium ${item.active ? 'bg-cyan-500/10 text-cyan-600' : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-900'}`}>
                            {item.icon} {item.label}
                        </a>
                    ))}
                </nav>
                <div className="mt-auto">
                    <a href="#" className="flex items-center gap-4 px-4 py-3 text-xl rounded-md text-slate-500 hover:bg-slate-200/50 hover:text-slate-900">
                        <Settings size={24}/> Config
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="p-4 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center border-b-2 border-transparent">
                        <button onClick={() => setActiveTab('inbox')} className={`px-4 py-2 text-xl font-semibold ${activeTab === 'inbox' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-500'}`}>Bandeja de Entrada</button>
                        <button onClick={() => setActiveTab('prospecting')} className={`px-4 py-2 text-xl font-semibold flex items-center gap-2 ${activeTab === 'prospecting' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-500'}`}>
                            <Target size={20}/>Prospección IA
                        </button>
                    </div>
                    <div className="flex items-center gap-6">
                        <Bell className="text-slate-500" size={28}/>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg">SH</div>
                            <span className="text-xl font-medium text-slate-700">Sami Halawa</span>
                            <ChevronDown className="text-slate-400" size={20}/>
                        </div>
                    </div>
                </header>
                <main className="p-6 bg-slate-50/30 flex-grow overflow-y-auto">
                    {activeTab === 'inbox' && <InboxView isActive={isActive} />}
                    {activeTab === 'prospecting' && <ProspeccionView />}
                </main>
            </div>
        </div>
    )
};


export const Slide09: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideWrapper className="p-8 flex flex-col items-center justify-center">
        <motion.h2 
          className="text-6xl font-bold tracking-tighter text-slate-900 mb-6 text-center" 
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ y: -20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        >
          Máquina de Generación de Clientes
        </motion.h2>
        <motion.div
          className="w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <CRMApp isActive={isActive} />
        </motion.div>
    </SlideWrapper>
  );
};
