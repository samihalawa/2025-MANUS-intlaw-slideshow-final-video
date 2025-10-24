import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { SLIDE_DURATION, kenBurnsVariants } from '../App';

interface SimulatedPlayerProps {
  slides: React.FC<{ isActive: boolean; }>[];
}

export const SimulatedPlayer: React.FC<SimulatedPlayerProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  
  const playerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const scaleCanvas = () => {
      if (playerRef.current && canvasRef.current) {
        const containerWidth = playerRef.current.offsetWidth;
        const containerHeight = playerRef.current.offsetHeight;
        const scale = Math.min(containerWidth / 1920, containerHeight / 1080);
        canvasRef.current.style.transform = `scale(${scale})`;
        const newWidth = 1920 * scale;
        const newHeight = 1080 * scale;
        canvasRef.current.style.left = `${(containerWidth - newWidth) / 2}px`;
        canvasRef.current.style.top = `${(containerHeight - newHeight) / 2}px`;
      }
    };
    scaleCanvas();
    const resizeObserver = new ResizeObserver(scaleCanvas);
    if (playerRef.current) {
      resizeObserver.observe(playerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const togglePlay = () => setIsPlaying(p => !p);

  useEffect(() => {
    let startTime: number;
    const animateProgress = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(newProgress);
      if (elapsed < SLIDE_DURATION) {
        animationFrameRef.current = requestAnimationFrame(animateProgress);
      }
    };

    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(animateProgress);
      timerRef.current = window.setTimeout(nextSlide, SLIDE_DURATION);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      startTime = 0;
    };
  }, [currentSlide, isPlaying, nextSlide]);
  
  const SlideComponent = slides[currentSlide];
  const kenBurnsVariant = kenBurnsVariants[currentSlide % kenBurnsVariants.length];

  return (
    <div className="w-full aspect-video bg-black rounded-lg shadow-2xl flex flex-col overflow-hidden relative" ref={playerRef}>
      <div className="flex-grow relative bg-black">
        <div ref={canvasRef} className="presentation-canvas" style={{ position: 'absolute' }}>
          <div className="relative w-full h-full">
            <AnimatePresence>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute inset-0 overflow-hidden"
              >
                <motion.div
                  className="w-full h-full"
                  initial={{ scale: 1, x: '0%', y: '0%', rotate: 0 }}
                  animate={kenBurnsVariant}
                  transition={{ duration: (SLIDE_DURATION / 1000) * 1.2, ease: 'linear' }}
                >
                  <SlideComponent isActive={true} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 backdrop-blur-md">
        <div className="w-full bg-white/20 rounded-full h-1.5">
          <motion.div 
            className="bg-cyan-400 h-1.5 rounded-full" 
            style={{ width: `${progress}%`}}
          />
        </div>
        <div className="flex items-center justify-between text-white mt-2">
          <button onClick={togglePlay} className="p-2" aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <div className="font-mono text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};