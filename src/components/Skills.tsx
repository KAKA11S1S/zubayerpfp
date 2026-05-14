import React from 'react';
import { motion } from 'motion/react';
import { 
  Video, 
  Cpu, 
  Palette, 
  Smartphone, 
  PlaySquare, 
  Zap, 
  Layers, 
  PenTool,
  Monitor
} from 'lucide-react';

const skills = [
  { name: 'Video Editing', icon: Video, color: '#8B5CF6' },
  { name: 'AI Content Creation', icon: Cpu, color: '#06B6D4' },
  { name: 'Graphic Design', icon: Palette, color: '#8B5CF6' },
  { name: 'YouTube Shorts', icon: PlaySquare, color: '#06B6D4' },
  { name: 'Instagram Reels', icon: Smartphone, color: '#8B5CF6' },
  { name: 'Branding', icon: Zap, color: '#06B6D4' },
  { name: 'Motion Graphics', icon: Layers, color: '#8B5CF6' },
  { name: 'Social Media Design', icon: PenTool, color: '#06B6D4' },
  { name: 'UI/UX Concepts', icon: Monitor, color: '#8B5CF6' },
];

export const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-purple text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl heading-maverick"
          >
            Mastered <span className="text-brand-cyan">Crafts.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px -15px ${skill.color}40`,
                borderColor: skill.color
              }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl glass-morphism border border-white/5 transition-all text-center group cursor-pointer"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <skill.icon 
                  className="w-8 h-8 transition-colors group-hover:text-white" 
                  style={{ color: skill.color }}
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
