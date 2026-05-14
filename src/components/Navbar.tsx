import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, Layout } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 h-20 bg-brand-bg/50 backdrop-blur-md border-b border-white/5' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform">
            <Layout className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter uppercase whitespace-nowrap">
            Zubayer<span className="text-brand-cyan">.</span>Utsho
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 glass-morphism px-8 py-3 rounded-full border border-white/10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Social Icons & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center space-x-4"
        >
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-white/70 hover:text-brand-purple transition-all hover:border-brand-purple">
            YT
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-white/70 hover:text-brand-cyan transition-all hover:border-brand-cyan">
            BE
          </a>
          <a 
            href="#contact" 
            className="bg-brand-purple hover:bg-brand-purple/80 text-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all active:scale-95"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-bg/95 backdrop-blur-2xl border-b border-white/5 p-8 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-4">
              <Instagram size={24} />
              <Youtube size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
