import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import { GridView } from './components/GridView';
import { ExportView } from './components/ExportView';

// --- Import all slides from the 'slides' directory ---
// Section 1: Introduction
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';

// Section 2: Problem & Vision
import { Slide03_Analysis } from './slides/Slide03_Analysis';
import { Slide04 } from './slides/Slide04';

// Section 3: Módulo 1 - Automated Client Intake & Qualification
import { Slide07_B } from './slides/Slide07_B';
import { Slide08_B } from './slides/Slide08_B';
import { Slide09_B } from './slides/Slide09_B';

// Section 4: Módulo 2 - Proactive Lead Generation
import { Slide10_A } from './slides/Slide10_A';
import { Slide10_B } from './slides/Slide10_B';
import { Slide10_D } from './slides/Slide10_D';
import { Slide10_E_Idealista } from './slides/Slide10_E_Idealista';
import { Slide10_F_Workflow } from './slides/Slide10_F_Workflow';

// Section 5: Módulo 3 - AI Document Agent
import { Slide10 } from './slides/Slide10';
import { Slide11_B } from './slides/Slide11_B';
import { Slide10_C } from './slides/Slide10_C';

// Section 6: Módulo 4 - Connected Document Generation
import { Slide12 } from './slides/Slide12';
import { Slide13_B } from './slides/Slide13_B';

// Section 7: Módulo 5 - Unified Platform
import { Slide14_C } from './slides/Slide14_C';

// Section 8: Benefits & ROI
import { Slide14 } from './slides/Slide14';

// Section 9: Investment & Closing
import { Slide15 } from './slides/Slide15';
import { Slide15_Addons } from './slides/Slide15_Addons';
import { Slide15_Assurance } from './slides/Slide15_Assurance';
import { Slide16 } from './slides/Slide16';
import { Slide17 } from './slides/Slide17';

// --- MAIN PRESENTATION COMPONENT ---

const slides = [
  // Section 1: Introduction
  Slide01,            // 1. Título
  Slide02,            // 2. Agenda
  
  // Section 2: Problem & Vision
  Slide03_Analysis,   // 3. Análisis de Necesidades (Personalizado)
  Slide04,            // 4. Visión y Dashboard de Impacto

  // Section 3: Módulo 1 - Automated Client Intake & Qualification
  Slide07_B,          // 5. Automatización Web (Chatbot)
  Slide08_B,          // 6. Captación Multicanal y Cualificación IA (WhatsApp -> Lead)
  Slide09_B,          // 7. Dashboard de Oportunidades (Lead in Dashboard)

  // Section 4: Módulo 2 - Proactive Lead Generation
  Slide10_A,          // 8. Introducción a la Captación Proactiva IA
  Slide10_B,          // 9. Radar de Oportunidades Proactivas
  Slide10_D,          // 10. Flujo de Campaña de Captación IA
  Slide10_E_Idealista,// 11. Caso de Uso: Prospección en Real Estate
  Slide10_F_Workflow, // 12. DEMO: Flujo de Trabajo Completo (De la Señal a la Estrategia)
  
  // Section 5: Módulo 3 - AI Document Agent
  Slide10,            // 13. Introducción al Agente de Documentos (Garantía 0% Alucinaciones)
  Slide11_B,          // 14. Demostración: Agente con Citas
  Slide10_C,          // 15. Demostración: Inteligencia Documental (Mapa de Entidades)

  // Section 6: Módulo 4 - Connected Document Generation
  Slide12,            // 16. Introducción a la Generación de Documentos (Copilot)
  Slide13_B,          // 17. Demostración: Generación Conectada a CRM
  
  // Section 7: Módulo 5 - Unified Platform
  Slide14_C,          // 18. Plataforma Unificada: Vista del Caso 360°

  // Section 8: Benefits & ROI
  Slide14,            // 19. Resumen de Beneficios Clave
  
  // Section 9: Investment & Closing
  Slide15,            // 20. Propuesta de Inversión Estratégica
  Slide15_Addons,     // 21. Módulos Adicionales Opcionales
  Slide15_Assurance,  // 22. Garantías de Valor
  Slide16,            // 23. Próximos Pasos
  Slide17             // 24. Cierre y Agradecimiento
];

export const SLIDE_DURATION = 9000;

// More varied Ken Burns effects for a more cinematic feel
export const kenBurnsVariants = [
    { scale: 1.15, x: '3%', y: '2%', rotate: 0.5 },
    { scale: 1.15, x: '-2%', y: '-3%', rotate: -0.5 },
    { scale: 1.15, x: '2%', y: '-2%', rotate: 0.3 },
    { scale: 1.15, x: '-3%', y: '3%', rotate: -0.3 },
    { scale: 1.15, x: '0%', y: '4%', rotate: 0 },
    { scale: 1.15, x: '-4%', y: '0%', rotate: 0 },
    { scale: 1.15, x: '3%', y: '-1%', rotate: 0.4 },
    { scale: 1.15, x: '-1%', y: '3%', rotate: -0.4 },
];


export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [viewMode, setViewMode] = useState<'presentation' | 'grid' | 'export'>('presentation');

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeout = useRef<number | null>(null);

  // Robust scaling and centering logic
  useEffect(() => {
    const scaleCanvas = () => {
      if (containerRef.current && canvasRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        
        const scaleX = containerWidth / 1920;
        const scaleY = containerHeight / 1080;
        
        const scale = Math.min(scaleX, scaleY);
        
        canvasRef.current.style.transform = `scale(${scale})`;
        
        const newWidth = 1920 * scale;
        const newHeight = 1080 * scale;
        const offsetX = (containerWidth - newWidth) / 2;
        const offsetY = (containerHeight - newHeight) / 2;
        
        canvasRef.current.style.left = `${offsetX}px`;
        canvasRef.current.style.top = `${offsetY}px`;
      }
    };

    scaleCanvas();
    const resizeObserver = new ResizeObserver(scaleCanvas);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  
  // Autoplay timer
  useEffect(() => {
    if (isPlaying && viewMode === 'presentation') {
      const timer = setInterval(() => {
        nextSlide();
      }, SLIDE_DURATION);
      return () => clearInterval(timer);
    }
  }, [isPlaying, nextSlide, currentSlide, viewMode]);

  // Autohide controls logic
  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
    hideControlsTimeout.current = window.setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  useEffect(() => {
    handleMouseMove(); // Show on load
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current);
      }
    };
  }, [handleMouseMove]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'presentation') return;
      if (e.code === 'ArrowRight') nextSlide();
      if (e.code === 'ArrowLeft') prevSlide();
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, viewMode]);


  const SlideComponent = slides[currentSlide];
  const kenBurnsVariant = kenBurnsVariants[currentSlide % kenBurnsVariants.length];
  
  return (
    <>
      <div ref={containerRef} className="presentation-container bg-black">
        <div ref={canvasRef} className="presentation-canvas">
          <div className="relative w-full h-full font-sans flex flex-col items-center justify-center overflow-hidden">
            <motion.div
              key={`progress-${currentSlide}`}
              className="absolute top-0 left-0 w-full h-1.5 bg-cyan-500/10 z-20"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: isPlaying ? SLIDE_DURATION / 1000 : 0, ease: 'linear' }}
              />
            </motion.div>
            
            <AnimatePresence>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }} // Smoother, faster cross-fade
                className="absolute inset-0 overflow-hidden"
              >
                <motion.div
                  className="w-full h-full"
                  initial={{ scale: 1, x: '0%', y: '0%', rotate: 0 }}
                  animate={kenBurnsVariant}
                  transition={{ 
                    duration: (SLIDE_DURATION / 1000) * 1.2,
                    ease: 'linear' 
                  }}
                >
                  <SlideComponent isActive={true} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="vignette"></div>

        <div className={`controls-container absolute bottom-5 left-1/2 -translate-x-1/2 z-50 ${showControls ? '' : 'hidden'}`}>
          <div className="flex items-center gap-4 bg-black/60 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/20">
            <button onClick={() => setViewMode('grid')} className="p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/10" aria-label="Grid View">
              <Grid size={24} />
            </button>
            <div className="w-px h-6 bg-white/20"></div>
            <button onClick={prevSlide} className="p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/10" aria-label="Previous Slide">
              <ChevronLeft size={24} />
            </button>
            <button onClick={togglePlay} className="p-3 bg-white/90 text-black rounded-lg hover:bg-white transition-colors" aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button onClick={nextSlide} className="p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/10" aria-label="Next Slide">
              <ChevronRight size={24} />
            </button>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="ml-2 font-mono text-white text-lg">
              {String(currentSlide + 1).padStart(2, '0')} / {slides.length}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {viewMode === 'grid' && <GridView slides={slides} onStartExport={() => setViewMode('export')} onClose={() => setViewMode('presentation')} />}
      </AnimatePresence>
      <AnimatePresence>
        {viewMode === 'export' && <ExportView slides={slides} onClose={() => setViewMode('presentation')} />}
      </AnimatePresence>
    </>
  );
}