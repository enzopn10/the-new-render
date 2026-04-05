import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Layout as LayoutIcon, Image as ImageIcon, MessageSquare, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const AUDIENCES = ['Luxury Realtors', 'Brokers', 'Developers', 'Architects', 'Builders', 'Interior Designers'];

const SERVICES = [
  {
    title: 'Architectural Rendering',
    description: 'High-end 3D visualizations that help sell, present, and pre-market projects with clarity.',
    path: '/services/architectural-rendering',
    icon: LayoutIcon,
  },
  {
    title: 'Exterior Rendering',
    description: 'Premium exterior visuals for developments, luxury homes, and commercial projects.',
    path: '/services/exterior-rendering',
    icon: ImageIcon,
  },
  {
    title: 'Interior Rendering',
    description: 'Detailed interior visualizations that showcase design concepts and material finishes.',
    path: '/services/interior-rendering',
    icon: ImageIcon,
  },
  {
    title: '3D Floor Plans',
    description: 'Furnished 3D floor plans that help buyers understand space and layout instantly.',
    path: '/services/3d-floor-plans',
    icon: LayoutIcon,
  },
];

const FAQS = [
  {
    question: 'What files do I need to start?',
    answer: 'At minimum, we need floor plans and elevations. However, providing CAD files or a 3D model (SketchUp, Revit) can significantly reduce production time.',
  },
  {
    question: 'How long does a rendering project take?',
    answer: 'Standard projects typically take 5-10 business days. We also offer rush and urgent options for tighter deadlines.',
  },
  {
    question: 'Do you work with realtors and developers?',
    answer: 'Yes, we specialize in helping real estate professionals market pre-construction projects and luxury listings.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'Our standard packages include two rounds of revisions to ensure the final visuals match your vision perfectly.',
  },
];

export function Home() {
  return (
    <>
      <SEO 
        title="Architectural Rendering Services | Premium 3D Visuals"
        description="The New Render provides premium architectural rendering services for realtors, developers, and architects in Florida. High-end 3D visuals for marketing and presentations."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden perspective-1000 bg-white dark:bg-[#050505] transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Modern Architecture Rendering"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-zinc-900 dark:text-white">
              Architectural renderings that help <span className="text-musk-green dark:text-musk-green-light italic font-serif lowercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">sell, present, and pre-market</span> projects.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 dark:text-white/60 font-light leading-relaxed max-w-2xl mb-12">
              Premium 3D visualizations for realtors, developers, and design teams who demand clarity, quality, and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact"
                className="bg-musk-green text-white px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-musk-green-light transition-all flex items-center justify-center gap-3 shadow-2xl shadow-musk-green/20"
              >
                Book a consultation
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/portfolio"
                className="border border-zinc-200 dark:border-white/20 px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center text-zinc-600 dark:text-white"
              >
                View portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audience Strip */}
      <section className="py-12 border-y border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 text-zinc-900 dark:text-white">
            {AUDIENCES.map((audience) => (
              <span key={audience} className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30 mb-6">Our Expertise</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-zinc-900 dark:text-white">
                High-end real estate renderings for <span className="text-musk-green italic font-serif lowercase">stronger marketing</span>.
              </h3>
            </div>
            <Link to="/services" className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-white">
              Explore all services <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: -5, rotateX: 2 }}
                className="group p-8 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/5 hover:border-musk-green transition-all perspective-1000"
              >
                <service.icon className="text-zinc-300 dark:text-white/20 mb-8 group-hover:text-musk-green transition-colors" size={32} />
                <h4 className="text-xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">{service.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to={service.path} className="text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all text-zinc-900 dark:text-white">
                  Learn more <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 bg-zinc-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30 mb-6">Portfolio</h2>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-zinc-900 dark:text-white">
                  Visuals that <span className="text-musk-green italic font-serif lowercase">bridge the gap</span> between plan and reality.
                </h3>
              </div>
              <p className="text-lg text-zinc-500 dark:text-white/50 font-light leading-relaxed">
                We don't just create images; we create marketing assets that help developers pre-sell units and architects present design concepts with absolute confidence.
              </p>
              <Link 
                to="/portfolio"
                className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-musk-green dark:hover:bg-white/90 transition-all"
              >
                View full portfolio
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 perspective-1000">
              <div className="space-y-4 pt-12">
                <motion.img 
                  whileHover={{ scale: 1.05, rotateY: -15, rotateX: 10, z: 50 }}
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                  alt="Exterior Rendering" 
                  className="w-full aspect-[3/4] object-cover transition-all duration-700 shadow-xl dark:shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05, rotateY: -15, rotateX: -10, z: 50 }}
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800" 
                  alt="Interior Rendering" 
                  className="w-full aspect-square object-cover transition-all duration-700 shadow-xl dark:shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="space-y-4">
                <motion.img 
                  whileHover={{ scale: 1.05, rotateY: 15, rotateX: 10, z: 50 }}
                  src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Kitchen Rendering" 
                  className="w-full aspect-square object-cover transition-all duration-700 shadow-xl dark:shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05, rotateY: 15, rotateX: -10, z: 50 }}
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" 
                  alt="Luxury Residence" 
                  className="w-full aspect-[3/4] object-cover transition-all duration-700 shadow-xl dark:shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30 mb-6">The Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 text-zinc-900 dark:text-white">Why clients <span className="text-musk-green italic font-serif lowercase">choose</span> The New Render</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="w-12 h-12 bg-zinc-50 dark:bg-musk-green/20 flex items-center justify-center group-hover:bg-musk-green transition-colors">
                <CheckCircle2 className="text-musk-green dark:text-musk-green-light group-hover:text-white transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Premium Quality</h4>
              <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">
                We focus on photorealism, lighting, and material accuracy to ensure your project looks its absolute best.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-12 h-12 bg-zinc-50 dark:bg-musk-green/20 flex items-center justify-center group-hover:bg-musk-green transition-colors">
                <MessageSquare className="text-musk-green dark:text-musk-green-light group-hover:text-white transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Fast Communication</h4>
              <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">
                No black holes. We provide clear updates and maintain fast response times throughout the entire project lifecycle.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-12 h-12 bg-zinc-50 dark:bg-musk-green/20 flex items-center justify-center group-hover:bg-musk-green transition-colors">
                <ArrowRight className="text-musk-green dark:text-musk-green-light group-hover:text-white transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Business-Focused</h4>
              <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">
                We understand real estate marketing. Our visuals are designed to drive sales, approvals, and buyer interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-32 bg-zinc-50 dark:bg-[#0a0a0a] border-y border-zinc-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative perspective-1000">
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5 }}
                className="aspect-video bg-white dark:bg-[#111] border border-zinc-200 dark:border-white/10 overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200" alt="Architectural Plan to Rendering" className="w-full h-full object-cover opacity-60 hover:scale-105 transition-all duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 dark:bg-musk-green/20 backdrop-blur-md p-8 border border-zinc-200 dark:border-white/20 max-w-xs text-center">
                    <FileText size={32} className="mx-auto mb-4 text-musk-green dark:text-musk-green-light drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
                    <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-900 dark:text-white">From Plans to Visuals</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="space-y-12">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30">Our Process</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight text-zinc-900 dark:text-white">
                A clean, <span className="text-musk-green italic font-serif lowercase">professional</span> workflow.
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="text-xs font-bold text-zinc-300 dark:text-white/20 mt-1">01</span>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Inquiry & File Review</h4>
                    <p className="text-sm text-zinc-500 dark:text-white/40 font-light">Send us your plans, elevations, or 3D models for a detailed review.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-xs font-bold text-zinc-300 dark:text-white/20 mt-1">02</span>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Production & Drafts</h4>
                    <p className="text-sm text-zinc-500 dark:text-white/40 font-light">We build the scene and provide initial drafts for material and lighting feedback.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-xs font-bold text-zinc-300 dark:text-white/20 mt-1">03</span>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Final Delivery</h4>
                    <p className="text-sm text-zinc-500 dark:text-white/40 font-light">High-resolution renderings delivered, ready for your marketing and presentations.</p>
                  </div>
                </div>
              </div>
              <Link to="/services" className="text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all text-zinc-900 dark:text-white">
                Explore our services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-32 px-6 bg-white dark:bg-[#050505]">
        <div className="max-w-5xl mx-auto bg-musk-green text-white p-12 md:p-24 text-center space-y-12 shadow-2xl relative overflow-hidden">
          {/* Background 3D flair */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase opacity-40">Estimate Your Project</h2>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
            Get an instant <span className="text-musk-green-light italic font-serif lowercase">pricing estimate</span> in minutes.
          </h3>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-70">
            Use our interactive pricing tool to get a fast, useful range based on your specific project scope and requirements.
          </p>
          <Link 
            to="/pricing"
            className="inline-block bg-white text-musk-green px-12 py-6 text-xs font-bold tracking-widest uppercase hover:bg-zinc-100 transition-all shadow-xl relative z-10"
          >
            Use pricing estimator
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-zinc-50 dark:bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-white/30 mb-6">Common Questions</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-zinc-900 dark:text-white">Frequently <span className="text-musk-green italic font-serif lowercase">asked</span></h3>
          </div>
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.question} className="p-8 border border-zinc-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
                <h4 className="text-xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">{faq.question}</h4>
                <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 border-t border-zinc-100 dark:border-white/5 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-9xl font-bold tracking-tighter uppercase leading-none text-zinc-900 dark:text-white">
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
              className="border border-zinc-200 dark:border-white/20 px-12 py-6 text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-zinc-600 dark:text-white"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
