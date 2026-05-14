import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Play, Image as ImageIcon } from 'lucide-react';

const categories = ['All', 'Visuals', 'Edits', 'Branding', 'Social'];

const projects = [
  {
    id: 1,
    title: 'Cinematic Travel Reel',
    category: 'Edits',
    image: 'https://images.unsplash.com/photo-1473111583946-8973b9413f9a?auto=format&fit=crop&q=80&w=2071',
    type: 'Video',
    highlight: 'Viral on IG'
  },
  {
    id: 2,
    title: 'AI Dreamscape Series',
    category: 'Visuals',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964',
    type: 'AIArt',
    highlight: 'Featured'
  },
  {
    id: 3,
    title: 'Cyberpunk Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964',
    type: 'Design',
    highlight: 'Agency Case'
  },
  {
    id: 4,
    title: 'Retro Futuristic Poster',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2070',
    type: 'Design',
    highlight: 'Creative'
  },
  {
    id: 5,
    title: 'Viral Motion Thumbnails',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1626379616459-b2ce1d9decbb?auto=format&fit=crop&q=80&w=2070',
    type: 'Design',
    highlight: '1M+ Views'
  },
  {
    id: 6,
    title: 'Urban Night Edit',
    category: 'Edits',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e057/800x1200', // Using a vertical placeholder
    type: 'Video',
    highlight: 'Trending'
  }
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand-purple text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-7xl heading-maverick">
              Featured <span className="italic text-brand-cyan">Works.</span>
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 p-1 glass-morphism rounded-full border border-white/10 self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-brand-purple text-white shadow-lg' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] rounded-[32px] overflow-hidden glass-morphism border border-white/10 cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-purple text-[10px] font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-brand-cyan font-bold uppercase tracking-widest">
                      {project.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl heading-maverick mb-4">
                    {project.title}
                  </h3>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest group/btn">
                      {project.type === 'Video' ? <Play size={16} className="text-brand-purple" /> : <ImageIcon size={16} className="text-brand-cyan" />}
                      <span>View Details</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
