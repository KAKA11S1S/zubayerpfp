import React from 'react';
import { motion } from 'motion/react';
import { Send, MessageSquare, Instagram, Youtube, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[8px] text-brand-purple mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase">
            Start a <span className="text-brand-cyan">Conversation.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-bold uppercase">Contact Information</h3>
              <p className="text-white/60 font-poppins max-w-sm">
                Have a project in mind? Let's build something cinematic together. I'm always open to new creative opportunities.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand-purple/20 transition-colors">
                  <Mail className="text-brand-purple w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Email Me</h4>
                  <p className="font-medium text-white group-hover:text-brand-purple transition-colors">hello@zubayerutsho.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand-cyan/20 transition-colors">
                  <MessageSquare className="text-brand-cyan w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">WhatsApp</h4>
                  <p className="font-medium text-white group-hover:text-brand-cyan transition-colors">+880 1XXX-XXXXXX</p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Follow My Journey</h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: 'Instagram', color: 'hover:text-[#E1306C]', href: '#' },
                  { icon: Youtube, label: 'YouTube', color: 'hover:text-[#FF0000]', href: '#' },
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className={`w-14 h-14 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 md:p-12 rounded-[40px] glass-morphism border border-white/10 relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors text-white/70">
                  <option>Video Editing Project</option>
                  <option>Branding Inquiry</option>
                  <option>AI Visual Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors placeholder:text-white/20 resize-none"
                />
              </div>

              <button className="w-full bg-brand-purple hover:bg-brand-purple/80 text-white py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-xl shadow-brand-purple/20">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
