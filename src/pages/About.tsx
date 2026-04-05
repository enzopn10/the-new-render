import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO 
        title="About The New Render | Premium Visualization Studio"
        description="The New Render is a specialized architectural visualization studio focused on helping professionals present projects clearly and beautifully. Premium 3D renderings for realtors and developers."
        canonical="/about"
      />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-zinc-900 dark:text-white"
            >
              Visualizing the
              <br />
              <span className="text-musk-green italic font-serif lowercase">Future of Real Estate</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zinc-500 dark:text-white/50 font-light leading-relaxed"
            >
              We are a specialized architectural visualization studio focused on helping professionals present projects clearly and beautifully.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30">Our Mission</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-zinc-900 dark:text-white">
                Helping you <span className="text-musk-green italic font-serif lowercase">present</span> with confidence.
              </h3>
              <p className="text-lg text-zinc-500 dark:text-white/50 font-light leading-relaxed">
                The New Render was founded on the belief that high-quality architectural visualization should be a premium experience, professional, and business-focused. 
                We specialize in creating renders that look like real photos, providing absolute clarity for your projects.
              </p>
              <p className="text-lg text-zinc-500 dark:text-white/50 font-light leading-relaxed">
                Whether you're a realtor marketing a luxury listing, a developer pre-selling units, or an architect presenting a design concept, 
                we provide the visuals that help you communicate your vision with absolute precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Link 
                  to="/portfolio"
                  className="bg-musk-green text-white px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-musk-green-light transition-all text-center shadow-2xl shadow-musk-green/20"
                >
                  View our work
                </Link>
                <Link 
                  to="/contact"
                  className="border border-zinc-200 dark:border-white/20 px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all text-center text-zinc-900 dark:text-white"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30, rotateY: -5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="relative perspective-1000"
            >
              <div className="aspect-square bg-zinc-100 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Architectural Visualization"
                  className="w-full h-full object-cover opacity-80 dark:opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 p-12 bg-musk-green text-white max-w-xs hidden md:block shadow-2xl"
              >
                <p className="text-xs font-bold tracking-widest uppercase mb-4 opacity-40">Our Focus</p>
                <p className="text-lg font-bold tracking-tight leading-tight">
                  Premium quality, fast communication, and practical understanding of real estate marketing.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: CheckCircle2, title: 'Realism', desc: 'We focus on photorealism, lighting, and material accuracy to ensure your project looks its absolute best.' },
              { icon: Clock, title: 'Speed', desc: 'We understand the fast-paced nature of real estate. Our workflow is designed for efficiency and reliability.' },
              { icon: MessageSquare, title: 'Communication', desc: 'No black holes. We provide clear updates and maintain fast response times throughout the entire project lifecycle.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="space-y-6 group"
              >
                <div className="w-12 h-12 bg-musk-green/10 dark:bg-musk-green/20 flex items-center justify-center group-hover:bg-musk-green transition-colors">
                  <item.icon className="text-musk-green group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
