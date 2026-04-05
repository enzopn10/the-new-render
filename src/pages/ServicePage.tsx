import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, FileText, Layout, Image as ImageIcon, Layers, Clock, MessageSquare } from 'lucide-react';
import { SERVICES_CONTENT } from '../constants/servicesContent';
import { SEO } from '../components/SEO';

const PROCESS_STEPS = [
  {
    title: 'Inquiry & File Review',
    description: 'Send us your architectural plans, elevations, or 3D models. We review your files to confirm scope and provide a detailed quote.',
    icon: FileText,
  },
  {
    title: 'Scope Confirmation',
    description: 'Once the quote is approved, we confirm the specific views, materials, and lighting requirements for your project.',
    icon: CheckCircle2,
  },
  {
    title: 'Initial Drafts',
    description: 'We build the 3D scene and provide initial drafts for your feedback on camera angles, lighting, and material placement.',
    icon: Layout,
  },
  {
    title: 'Production & Revisions',
    description: 'We refine the visuals based on your feedback. Our standard packages include two rounds of revisions for absolute clarity.',
    icon: Layers,
  },
  {
    title: 'Final Delivery',
    description: 'High-resolution 4K renderings are delivered, ready for your marketing materials, presentations, and listing enhancements.',
    icon: ImageIcon,
  },
];

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? SERVICES_CONTENT[slug] : null;

  if (!content) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO 
        title={content.seoTitle}
        description={content.metaDescription}
        canonical={`/services/${content.slug}`}
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.image} 
            alt={content.title}
            className="w-full h-full object-cover opacity-20 dark:opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-zinc-900 dark:text-white">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 dark:text-white/60 font-light leading-relaxed max-w-2xl mb-12">
              {content.intro}
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-musk-green text-white px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-musk-green-light transition-all shadow-2xl shadow-musk-green/20"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-24">
              <div className="space-y-8">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30">Who it's for</h2>
                <div className="flex flex-wrap gap-4">
                  {content.whoItsFor.map((item) => (
                    <span key={item} className="px-6 py-3 bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 text-xs font-bold tracking-widest uppercase text-zinc-600 dark:text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30">What's included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {content.whatsIncluded.map((item) => (
                    <motion.div 
                      key={item} 
                      whileHover={{ x: 10 }}
                      className="flex gap-4 items-start"
                    >
                      <CheckCircle2 size={18} className="text-musk-green dark:text-white/40 shrink-0 mt-1" />
                      <p className="text-lg font-light text-zinc-600 dark:text-white/60">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Integrated Process Section */}
              <div className="space-y-16 pt-12 border-t border-zinc-100 dark:border-white/5">
                <div className="space-y-4">
                  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30">Our Process</h2>
                  <h3 className="text-3xl font-bold tracking-tight uppercase">How we <span className="text-musk-green italic font-serif lowercase">work</span></h3>
                </div>
                <div className="space-y-12">
                  {PROCESS_STEPS.map((step, idx) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-8 group"
                    >
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-zinc-50 dark:bg-musk-green/20 border border-zinc-100 dark:border-musk-green/30 flex items-center justify-center group-hover:bg-musk-green group-hover:text-white transition-all">
                          <step.icon size={20} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/20">Step 0{idx + 1}</span>
                          <h4 className="text-xl font-bold tracking-tight uppercase group-hover:text-musk-green transition-colors">{step.title}</h4>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed max-w-md">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {content.useCases.map((item) => (
                    <motion.div 
                      key={item} 
                      whileHover={{ y: -5, rotateY: 5 }}
                      className="p-8 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/5 transition-all"
                    >
                      <h4 className="text-lg font-bold mb-2 tracking-tight">{item}</h4>
                      <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">
                        Optimized for high-impact presentations and marketing materials.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30">Why it helps</h2>
                <p className="text-2xl md:text-4xl font-light leading-tight text-zinc-800 dark:text-white/80 italic font-serif">
                  "{content.whyItHelps}"
                </p>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-16">
              <div className="bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/5 p-10 space-y-8 sticky top-32">
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">Deliverables</h3>
                <ul className="space-y-4">
                  {content.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-white/60">
                      <div className="w-1.5 h-1.5 bg-musk-green dark:bg-white/20 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-zinc-200 dark:border-white/10">
                  <h3 className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30 mb-6">Communication</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-white/30">
                      <Clock size={14} />
                      Fast Response
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-zinc-500 dark:text-white/30">
                      <MessageSquare size={14} />
                      Direct Access
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">Related Services</h3>
                <div className="flex flex-col gap-4">
                  {content.relatedServices.map((service) => (
                    <Link 
                      key={service.path}
                      to={service.path}
                      className="group flex items-center justify-between p-6 bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 hover:border-musk-green transition-all"
                    >
                      <span className="text-xs font-bold tracking-widest uppercase">{service.title}</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-zinc-50 dark:bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30 mb-6">FAQ</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Common <span className="text-musk-green italic font-serif lowercase">questions</span></h3>
          </div>
          <div className="space-y-8">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="p-8 border border-zinc-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
                <h4 className="text-xl font-bold mb-4 tracking-tight">{faq.question}</h4>
                <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 border-t border-zinc-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-9xl font-bold tracking-tighter uppercase leading-none">
            Ready to <span className="text-musk-green italic font-serif lowercase">visualize</span> your next project?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-12">
            <Link 
              to="/contact"
              className="bg-musk-green text-white px-12 py-6 text-xs font-bold tracking-widest uppercase hover:bg-musk-green-light transition-all shadow-2xl shadow-musk-green/20"
            >
              Book Consultation
            </Link>
            <Link 
              to="/portfolio"
              className="border border-zinc-200 dark:border-white/20 px-12 py-6 text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
