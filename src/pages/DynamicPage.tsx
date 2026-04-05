import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { LOCATIONS_CONTENT, SOLUTIONS_CONTENT } from '../constants/dynamicPagesContent';
import { SEO } from '../components/SEO';

interface DynamicPageProps {
  type: 'location' | 'solution';
}

export function DynamicPage({ type }: DynamicPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? (type === 'location' ? LOCATIONS_CONTENT[slug] : SOLUTIONS_CONTENT[slug]) : null;

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO 
        title={content.seoTitle}
        description={content.metaDescription}
        canonical={`/${type === 'location' ? 'locations' : 'solutions'}/${content.slug}`}
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.image} 
            alt={content.title}
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mb-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30">Who it's for</h2>
                <p className="text-xl text-white/60 font-light leading-relaxed">
                  {content.whoItsFor}
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-white/30">Why it helps</h2>
                <p className="text-2xl md:text-4xl font-light leading-tight text-musk-green-light italic font-serif">
                  "{content.whyItHelps}"
                </p>
              </div>

              <div className="p-12 bg-[#0a0a0a] border border-white/5 space-y-8">
                <h3 className="text-xl font-bold tracking-tight uppercase">Relevant Services</h3>
                <div className="flex flex-col gap-4">
                  {content.relevantServices.map((service) => (
                    <div key={service} className="flex items-center gap-4 text-white/60">
                      <CheckCircle2 size={18} className="text-musk-green-light" />
                      <span className="text-sm font-bold tracking-widest uppercase">{service}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/services"
                  className="inline-block text-xs font-bold tracking-widest uppercase border-b border-musk-green/20 pb-1 hover:border-musk-green transition-all"
                >
                  Explore all services
                </Link>
              </div>
            </div>

            <div className="space-y-16">
              <div className="aspect-[4/5] bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl">
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-musk-green text-white p-12 space-y-8 shadow-2xl">
                <h3 className="text-2xl font-bold tracking-tight uppercase">Ready to start?</h3>
                <p className="text-lg font-light opacity-70">
                  Contact us today to discuss your project and receive a custom quote within 24 hours.
                </p>
                <Link 
                  to="/contact"
                  className="inline-block bg-white text-musk-green px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition-all shadow-xl"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-9xl font-bold tracking-tighter uppercase leading-none">
            Ready to <span className="text-musk-green-light italic font-serif lowercase">visualize</span> your next project?
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
              className="border border-white/20 px-12 py-6 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
