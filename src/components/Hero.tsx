import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-carbon opacity-[0.03] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-brand-purple text-xs font-bold tracking-[0.4em] uppercase mb-4">The Portfolio of</h4>
            <h1 className="text-7xl md:text-9xl heading-maverick mb-6">
              Creative<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Maverick</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-md font-poppins leading-relaxed mb-8">
              Transforming visions into viral realities. Based in Bangladesh, reaching global audiences through cutting-edge visual narratives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#portfolio" 
              className="group relative bg-brand-purple text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(139,92,246,0.3)] overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span>View Portfolio</span>
            </a>
            
            <a 
              href="#contact" 
              className="px-10 py-4 rounded-full border border-white/20 glass-morphism font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95 flex items-center space-x-2"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* New Stats Row from Theme */}
          <div className="grid grid-cols-3 gap-4 pt-12">
            <div className="bg-white/5 rounded-3xl border border-white/10 p-6 flex flex-col justify-center">
              <span className="text-3xl font-black text-brand-cyan">150+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Projects Done</span>
            </div>
            <div className="bg-white/5 rounded-3xl border border-white/10 p-6 flex flex-col justify-center">
              <span className="text-3xl font-black text-white">12M+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Total Views</span>
            </div>
            <div className="bg-white/5 rounded-3xl border border-white/10 p-6 flex flex-col justify-center">
              <span className="text-3xl font-black text-brand-purple">400+</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Viral Edits</span>
            </div>
          </div>
        </div>

        {/* Visual Element Side */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Split UI Layout from Theme */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] shadow-2xl">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-purple to-brand-cyan mb-6 shadow-[0_0_30px_rgba(139,92,246,0.5)]"></div>
              <h2 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">Zubayer Utsho</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">Bangladeshi digital storyteller & visual creator. Crafting cinematic experiences through design and AI.</p>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between text-[11px] mb-2 font-black uppercase tracking-widest">
                    <span>Video Editing</span>
                    <span className="text-brand-purple">98%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '98%' }}
                      className="h-full bg-brand-purple" 
                    />
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between text-[11px] mb-2 font-black uppercase tracking-widest">
                    <span>AI Visuals</span>
                    <span className="text-brand-cyan">95%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      className="h-full bg-brand-cyan" 
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="text-[10px] bg-brand-purple/20 text-brand-purple px-3 py-1.5 rounded-full uppercase font-black tracking-tighter border border-brand-purple/30">Creator</span>
                <span className="text-[10px] bg-brand-cyan/20 text-brand-cyan px-3 py-1.5 rounded-full uppercase font-black tracking-tighter border border-brand-cyan/30">Designer</span>
                <span className="text-[10px] bg-white/10 text-white px-3 py-1.5 rounded-full uppercase font-black tracking-tighter border border-white/20">Storyteller</span>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -inset-10 bg-brand-purple/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[4px] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
