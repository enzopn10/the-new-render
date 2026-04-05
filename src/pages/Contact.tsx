import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Phone, Mail, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Contact() {
  return (
    <>
      <SEO 
        title="Contact The New Render | Request a Quote"
        description="Ready to visualize your next project? Contact The New Render for a custom quote or book a consultation. Premium architectural rendering services in Florida."
        canonical="/contact"
      />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Column: Info */}
            <div className="space-y-16">
              <div className="space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-zinc-900 dark:text-white"
                >
                  Let's
                  <br />
                  <span className="text-musk-green italic font-serif lowercase">Visualize</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-zinc-500 dark:text-white/50 font-light leading-relaxed max-w-md"
                >
                  Ready to start your next project? Contact us for a custom quote or book a consultation to discuss your requirements.
                </motion.p>
              </div>

              <div className="space-y-12">
                {[
                  { icon: Mail, label: 'Email', value: 'info@thenewrender.com', href: 'mailto:info@thenewrender.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (305) 897-2291', href: 'tel:+13058972291' },
                  { icon: MessageSquare, label: 'Location', value: 'Orlando, Florida', href: null }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-6 items-center group"
                  >
                    <div className="w-12 h-12 bg-musk-green/10 dark:bg-musk-green/20 border border-musk-green/30 flex items-center justify-center group-hover:bg-musk-green group-hover:text-white transition-all text-musk-green">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/20 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-xl font-bold tracking-tight hover:text-musk-green transition-colors text-zinc-900 dark:text-white">{item.value}</a>
                      ) : (
                        <p className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="p-10 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/5 space-y-8 shadow-xl"
              >
                <h3 className="text-lg font-bold tracking-tight uppercase text-zinc-900 dark:text-white">What happens next?</h3>
                <div className="space-y-6">
                  {[
                    "We'll review your inquiry and project files within 24 hours.",
                    "We'll provide a detailed quote and estimated timeline.",
                    "Once approved, we'll start your project immediately."
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 size={16} className="text-musk-green shrink-0 mt-1" />
                      <p className="text-sm text-zinc-500 dark:text-white/50 font-light">{text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/5 p-12 md:p-16 shadow-2xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-6 py-4 text-sm font-light focus:outline-none focus:border-musk-green transition-all text-zinc-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-6 py-4 text-sm font-light focus:outline-none focus:border-musk-green transition-all text-zinc-900 dark:text-white"
                      placeholder="Agency Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-6 py-4 text-sm font-light focus:outline-none focus:border-musk-green transition-all text-zinc-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-6 py-4 text-sm font-light focus:outline-none focus:border-musk-green transition-all text-zinc-900 dark:text-white"
                      placeholder="+1 (407) 555-0123"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">Project Details</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-6 py-4 text-sm font-light focus:outline-none focus:border-musk-green transition-all resize-none text-zinc-900 dark:text-white"
                    placeholder="Tell us about your project, scope, and timeline..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-musk-green text-white px-10 py-6 text-xs font-bold tracking-widest uppercase hover:bg-musk-green-light transition-all flex items-center justify-center gap-3 shadow-2xl shadow-musk-green/20"
                >
                  Book Consultation
                  <ArrowRight size={16} />
                </button>
                <p className="text-[10px] text-zinc-400 dark:text-white/20 text-center tracking-widest uppercase">
                  Typical response time: Under 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
