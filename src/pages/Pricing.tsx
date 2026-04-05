import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Estimator } from '../components/PricingEstimator/Estimator';
import { SEO } from '../components/SEO';
import { CheckCircle2, FileText, Clock, Layers } from 'lucide-react';

const PRICING_FACTORS = [
  {
    title: 'Project Scope',
    description: 'The number of views, rooms, or plans required directly impacts the base cost.',
    icon: Layers,
  },
  {
    title: 'Level of Detail',
    description: 'High-end custom furniture, complex landscaping, or intricate lighting require more production time.',
    icon: CheckCircle2,
  },
  {
    title: 'Source Files',
    description: 'Providing a clean 3D model (Revit, SketchUp) can significantly reduce the modeling phase cost.',
    icon: FileText,
  },
  {
    title: 'Turnaround Speed',
    description: 'Standard delivery is 5-10 days. Rush and urgent options are available for a multiplier.',
    icon: Clock,
  },
];

export function Pricing() {
  return (
    <>
      <SEO 
        title="Architectural Rendering Pricing | Interactive Estimator"
        description="Get an instant pricing estimate for your architectural rendering project. Our interactive tool provides a fast range based on your specific scope and requirements."
        canonical="/pricing"
      />

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto mb-24 text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-zinc-900 dark:text-white"
          >
            Estimate Your
            <br />
            <span className="text-musk-green italic font-serif lowercase">Rendering Project</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zinc-500 dark:text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Pricing depends on scope, detail, files provided, number of views, and turnaround. 
            Our interactive tool gives you a fast, useful range in minutes.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Estimator />
        </motion.div>

        {/* Pricing Context */}
        <div className="mt-48 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30 mb-6">How it works</h2>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-zinc-900 dark:text-white">
                  What affects your <span className="text-musk-green italic font-serif lowercase">quote range</span>?
                </h3>
              </div>
              <p className="text-lg text-zinc-500 dark:text-white/50 font-light leading-relaxed">
                Every project is unique. While our estimator provides a very close range based on historical data, 
                final pricing is confirmed once we review your specific architectural plans and material references.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {PRICING_FACTORS.map((factor, idx) => (
                  <motion.div 
                    key={factor.title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="space-y-4"
                  >
                    <factor.icon className="text-musk-green" size={24} />
                    <h4 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">{factor.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">{factor.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/5 p-12 space-y-12 shadow-2xl"
            >
              <h4 className="text-2xl font-bold tracking-tight uppercase text-zinc-900 dark:text-white">Ready for an exact quote?</h4>
              <p className="text-zinc-500 dark:text-white/50 font-light leading-relaxed">
                If you have your project files ready, we can provide a firm, fixed-price quote within 24 hours.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Fixed-Price Guarantee', desc: 'No hidden fees or unexpected costs once the scope is locked.' },
                  { title: '24-Hour Turnaround', desc: 'Receive your formal proposal within one business day.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-musk-green/10 dark:bg-white/5 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} className="text-musk-green dark:text-white/40" />
                    </div>
                    <div>
                      <p className="text-sm font-bold mb-1 text-zinc-900 dark:text-white">{item.title}</p>
                      <p className="text-xs text-zinc-500 dark:text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                to="/contact"
                className="block w-full bg-musk-green text-white px-8 py-5 text-xs font-bold tracking-widest uppercase text-center hover:bg-musk-green-light transition-all shadow-2xl shadow-musk-green/20"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-48 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">How accurate is this estimate?</h3>
              <p className="text-zinc-500 dark:text-white/50 text-sm leading-relaxed">
                Our estimator uses real-world data from hundreds of previous projects. While it provides a very close range, 
                final pricing is confirmed once we review your specific architectural plans and material references.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">What files do I need to start?</h3>
              <p className="text-zinc-500 dark:text-white/50 text-sm leading-relaxed">
                At minimum, we need floor plans and elevations. However, providing CAD files or a 3D model (SketchUp, Revit) 
                can significantly reduce the production time and overall cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
