import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Video Editing',
    price: 'Custom',
    description: 'Cinematic storytelling with high-end color grading and sound design.',
    features: ['High-End Transitions', 'Color Grading', 'Sound Design', 'Storyboarding', '4K Rendering'],
    color: '#8B5CF6'
  },
  {
    title: 'Thumbnail Design',
    price: '$49+',
    description: 'High-CTR thumbnails designed to make your videos go viral.',
    features: ['Custom AI Visuals', 'Click-focused Layout', 'Color Correction', 'A/B Test Ready', '24h Delivery'],
    color: '#06B6D4',
    featured: true
  },
  {
    title: 'AI Video Creation',
    price: '$199+',
    description: 'Leveraging cutting-edge AI for unique, surreal visual experiences.',
    features: ['AI Model Training', 'Neural Style Transfer', 'AI Voiceover', 'Dynamic Motion', 'Creative Direction'],
    color: '#8B5CF6'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-purple text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl heading-maverick"
          >
            Premium <span className="text-brand-cyan">Services.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 rounded-[40px] glass-morphism border border-white/10 ${
                service.featured ? 'ring-2 ring-brand-purple shadow-[0_0_40px_rgba(139,92,246,0.15)]' : ''
              }`}
            >
              {service.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl heading-maverick mb-2">{service.title}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">starts at</span>
                  <span className="text-3xl font-display font-black text-brand-cyan">{service.price}</span>
                </div>
              </div>

              <p className="text-sm text-white/60 mb-8 font-poppins leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 mb-12 flex-grow">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Check size={12} className="text-brand-cyan" />
                    </div>
                    <span className="text-xs font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                className={`group w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-all ${
                  service.featured 
                    ? 'bg-brand-purple text-white hover:bg-brand-purple/80' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>Book Service</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
