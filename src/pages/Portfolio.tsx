import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Modern Coastal Residence',
    category: 'Exterior Rendering',
    location: 'Winter Garden, FL',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    deliverables: ['Exterior Views', 'Site Plan'],
  },
  {
    title: 'Luxury Penthouse Kitchen',
    category: 'Interior Rendering',
    location: 'Orlando, FL',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200',
    deliverables: ['Interior Views', '360 Panorama'],
  },
  {
    title: 'The Heights Development',
    category: 'Real Estate Marketing',
    location: 'Florida',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    deliverables: ['Full Marketing Package', 'Floor Plans'],
  },
  {
    title: 'Minimalist Studio Loft',
    category: 'Interior Rendering',
    location: 'Orlando, FL',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200',
    deliverables: ['Interior Views'],
  },
  {
    title: 'Sunset Villas Master Plan',
    category: 'Site Plan Rendering',
    location: 'Florida',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200',
    deliverables: ['Rendered Site Plan', 'Exterior Views'],
  },
  {
    title: 'Contemporary Lake House',
    category: 'Exterior Rendering',
    location: 'Winter Garden, FL',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    deliverables: ['Exterior Views'],
  },
];

const CATEGORIES = ['All', 'Exterior', 'Interior', 'Floor Plans', 'Site Plans', 'Real Estate Marketing'];

export function Portfolio() {
  return (
    <>
      <SEO 
        title="Architectural Rendering Portfolio | Featured Projects"
        description="Explore our portfolio of premium architectural renderings, exterior visuals, interior designs, and 3D floor plans for realtors and developers in Florida."
        canonical="/portfolio"
      />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-zinc-900 dark:text-white">
                Featured
                <br />
                <span className="text-musk-green italic font-serif lowercase">Visual Projects</span>
              </h1>
              <p className="text-xl text-zinc-500 dark:text-white/50 font-light leading-relaxed">
                A selection of premium visualizations that help our clients sell, present, and pre-market their architectural projects with clarity.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pb-2">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  className={`text-[10px] font-bold tracking-widest uppercase px-6 py-3 border transition-all ${cat === 'All' ? 'bg-musk-green text-white border-musk-green shadow-lg shadow-musk-green/20' : 'border-zinc-200 dark:border-white/10 text-zinc-400 dark:text-white/40 hover:border-musk-green hover:text-musk-green'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective-1000">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20, rotateX: 5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-[#0a0a0a] border border-zinc-200 dark:border-white/5 mb-8 shadow-2xl relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-musk-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <div className="flex gap-3 items-center text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30">
                      <span className="group-hover:text-musk-green transition-colors">{project.category}</span>
                      <span className="w-1 h-1 bg-zinc-200 dark:bg-white/10 rounded-full" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-musk-green transition-colors text-zinc-900 dark:text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.deliverables.map((del) => (
                        <span key={del} className="text-[9px] font-medium tracking-widest uppercase text-zinc-400 dark:text-white/20 border border-zinc-100 dark:border-white/5 px-2 py-1">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-12 h-12 border border-zinc-200 dark:border-white/10 flex items-center justify-center group-hover:bg-musk-green group-hover:border-musk-green group-hover:text-white transition-all text-zinc-400 dark:text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link 
              to="/contact"
              className="inline-block bg-musk-green text-white px-12 py-6 text-xs font-bold tracking-widest uppercase hover:bg-musk-green-light transition-all shadow-2xl shadow-musk-green/20"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
