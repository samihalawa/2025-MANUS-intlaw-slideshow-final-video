import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Gift, FastForward, MessageSquare, Phone, Clock, LayoutDashboard, Target, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface OfferCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ icon, title, value }) => (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 h-full flex flex-col">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h4 className="text-2xl font-bold text-white flex-grow">{title}</h4>
        <div className="mt-4 text-right">
            <span className="text-xl line-through text-slate-400 mr-2">{value}</span>
            <span className="text-3xl font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-md">GRATIS</span>
        </div>
    </div>
);

const offers = [
    {
        icon: <FastForward size={32} />,
        title: "Entrega Acelerada (30 días)",
        value: "€4,000"
    },
    {
        icon: <MessageSquare size={32} />,
        title: "Automatización de WhatsApp",
        value: "€5,000"
    },
    {
        icon: <Phone size={32} />,
        title: "Automatización Telefónica",
        value: "€6,000"
    },
    {
        icon: <LayoutDashboard size={32} />,
        title: "CRM & Dashboard 360°",
        value: "€8,000"
    },
    {
        icon: <Target size={32} />,
        title: "Módulo de Prospección IA",
        value: "€7,000"
    },
    {
        icon: <FileText size={32} />,
        title: "Agente de Documentos IA",
        value: "€10,000"
    }
];

export const Slide15_SpecialOffer: React.FC = () => {
    return (
        <SlideWrapper>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-16 relative overflow-hidden">
                <motion.div 
                    className="absolute -top-16 -right-16 text-slate-700/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                >
                    <Gift size={256} strokeWidth={0.5} />
                </motion.div>

                <div className="relative z-10">
                    <h2 className="text-6xl font-bold tracking-tighter text-white mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Oferta por Tiempo Limitado
                    </h2>
                    <p className="text-2xl text-cyan-300 mb-8 text-center">Módulos de alto impacto sin coste adicional.</p>
                    
                    <div className="max-w-4xl mx-auto bg-slate-800 border border-cyan-500/30 rounded-lg p-6 text-center mb-10">
                        <p className="text-xl text-slate-200">
                            Formalizando el primer pago en los próximos <strong className="text-white">5 días</strong>, los siguientes módulos de alto valor se incluyen sin coste adicional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        {offers.map(offer => (
                            <OfferCard 
                                key={offer.title}
                                icon={offer.icon} 
                                title={offer.title} 
                                value={offer.value}
                            />
                        ))}
                    </div>
                    
                    <motion.div 
                         initial={{ y: 20 }}
                         animate={{ y: 0 }}
                         transition={{ delay: 0.5 }}
                        className="text-center bg-slate-900/50 border border-slate-700 rounded-lg py-6"
                    >
                        <p className="text-2xl text-slate-300">Valor Total de la Bonificación:</p>
                        <p className="text-6xl font-bold text-white mt-2">€40,000</p>
                        <div className="inline-flex items-center gap-3 mt-4 text-cyan-400 font-semibold bg-cyan-400/10 px-4 py-2 rounded-full">
                            <Clock size={20} />
                            <span>Oferta de tiempo limitado</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SlideWrapper>
    );
};
