import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Video } from 'lucide-react';

interface GridViewProps {
  slides: React.FC<{ isActive: boolean; }>[];
  onClose: () => void;
}

// FIX: Define props interface and explicitly type SlideThumbnail as React.FC
// to resolve issue where the 'key' prop was not being handled correctly by TypeScript.
interface SlideThumbnailProps {
  SlideComponent: React.FC<{ isActive: boolean; }>;
  index: number;
}

const SlideThumbnail: React.FC<SlideThumbnailProps> = ({ SlideComponent, index }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const calculateScale = () => {
      if (wrapperRef.current) {
        const { width } = wrapperRef.current.getBoundingClientRect();
        setScale(width / 1920);
      }
    };
    
    // We need a short delay for the grid to layout before calculating
    const timeoutId = setTimeout(calculateScale, 50);

    window.addEventListener('resize', calculateScale);
    return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', calculateScale);
    };
  }, []);

  return (
    <motion.div 
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        ref={wrapperRef}
        className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg border-2 border-slate-700 relative"
      >
        {scale > 0 && (
          <div
            className="absolute top-0 left-0 origin-top-left pointer-events-none"
            style={{
              width: '1920px',
              height: '1080px',
              transform: `scale(${scale})`,
            }}
          >
            <SlideComponent isActive={true} />
          </div>
        )}
      </div>
      <p className="text-center font-semibold text-slate-300">
        Slide {String(index + 1).padStart(2, '0')}
      </p>
    </motion.div>
  );
};

export const GridView: React.FC<GridViewProps> = ({ slides, onClose }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      // In a real app, you might trigger a download or navigate to a new page.
      // For this simulation, an alert is sufficient.
      alert('Video export started! (This is a simulation)'); 
    }, 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/80 backdrop-blur-lg z-[1000] flex flex-col p-8"
    >
      <header className="flex-shrink-0 flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Slide Overview
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-3 bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors disabled:bg-slate-500 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <>
                <motion.div
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                Exporting...
              </>
            ) : (
              <>
                <Video size={24} />
                Export as Video
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="p-3 text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Close overview"
          >
            <X size={32} />
          </button>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto pr-4 -mr-4"> {/* Handle scrollbar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {slides.map((SlideComponent, index) => (
            <SlideThumbnail key={index} SlideComponent={SlideComponent} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
