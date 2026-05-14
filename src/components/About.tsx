import React from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles, Wand2, Globe } from 'lucide-react';

const stats = [
  { icon: Camera, label: 'Storyteller', value: 'Cinematic' },
  { icon: Wand2, label: 'Creator', value: 'AI Visuals' },
  { icon: Sparkles, label: 'Designer', value: 'Graphic' },
  { icon: Globe, label: 'Presence', value: 'Global' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 leading-tight">
                Crafting <span className="text-brand-purple italic">Digital</span> <br />
                Narratives that <span className="text-brand-cyan">Convert.</span>
              </h2>
              
              <div className="space-y-6 text-white/70 font-poppins leading-relaxed text-lg">
                <p>
                  I'm Zubayer Utsho, a Bangladeshi content creator and designer pushing the boundaries of visual storytelling. My mission is to blend technology with human emotion to create content that doesn't just look good—it feels cinematic.
                </p>
                <p>
                  From viral social media campaigns to high-end branding, I specialize in creating AI-driven visuals and cinematic edits that stand out in today's digital noise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl glass-morphism border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <stat.icon className="w-8 h-8 text-brand-purple mb-4 group-hover:scale-110 group-hover:text-brand-cyan transition-all" />
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{stat.label}</h4>
                    <p className="text-xl font-display font-bold">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 rounded-[60px] transform rotate-6 animate-pulse" />
              <div className="absolute inset-0 bg-brand-bg rounded-[60px] overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1492619334770-277e9845ad37?auto=format&fit=crop&q=80&w=2070" 
                  alt="Cinematic Camera" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Floating Meta Tag */}
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-3xl border border-white/20">
                  <p className="text-sm italic font-display leading-tight">
                    "Visuals are the language of the soul in a digital world."
                  </p>
                  <div className="flex items-center space-x-2 mt-4">
                    <div className="w-8 h-[2px] bg-brand-purple" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Zubayer Utsho</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/30 blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/30 blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
