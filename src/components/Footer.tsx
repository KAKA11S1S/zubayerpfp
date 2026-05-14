import React from 'react';
import { motion } from 'motion/react';
import { Layout, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden bg-black/40 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
          © {new Date().getFullYear()} Zubayer Utsho Portfolio • All Rights Reserved
        </p>
        
        <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>

        {/* Scroll to Top */}
        <motion.button
          whileHover={{ y: -5 }}
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-white/10 glass-morphism flex items-center justify-center text-white/50 hover:text-white hover:border-brand-purple transition-colors absolute right-6 md:static"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
      
      {/* Background Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[15vw] font-display font-black leading-none opacity-[0.02] select-none pointer-events-none uppercase">
        Zubayer Utsho
      </div>
    </footer>
  );
};
