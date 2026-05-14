import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Rahman',
    role: 'Brand Manager',
    content: "Zubayer's ability to translate our brand vision into cinematic visuals was astounding. The engagement on our last campaign tripled.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=1'
  },
  {
    name: 'Alex Chen',
    role: 'Tech YouTuber',
    content: "The thumbnails he designed for my channel are literally game-changers. My CTR jumped from 4% to 11% in one week.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Agency Founder',
    content: "One of the best creative directors I've worked with. His understanding of AI tools and modern design is unparalleled.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=3'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative bg-brand-purple/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[8px] text-brand-cyan mb-4 block">Feedback</span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase">
              Client <span className="italic text-brand-purple">Stories.</span>
            </h2>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full border border-white/10">
            <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
            <span className="font-bold text-sm tracking-tighter">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] glass-morphism border border-white/5 relative flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 text-brand-purple/20 w-12 h-12" />
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-brand-cyan fill-brand-cyan" />
                ))}
              </div>

              <p className="text-white/70 font-poppins text-lg leading-relaxed mb-8 flex-grow">
                "{t.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-purple/30 p-1">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-sm leading-none">{t.name}</h4>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
