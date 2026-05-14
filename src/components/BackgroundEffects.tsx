import React from 'react';
import { motion } from 'motion/react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Primary Glow Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-cyan/15 rounded-full blur-[150px]"
      />

      {/* Carbon Fibre Pattern Overlay */}
      <div className="absolute inset-0 bg-carbon opacity-[0.02] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Grain/Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
          filter: 'contrast(150%) brightness(1000%)'
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient(from_center,transparent_0%,#050816_100%) pointer-events-none" />
    </div>
  );
};
