import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, Building, Layout, Home, Paintbrush } from 'lucide-react';

const INDUSTRIES = [
  {
    title: 'Realtors and Brokers',
    icon: Home,
    painPoints: 'Struggling to market pre-construction listings or luxury properties with outdated or missing visuals.',
    solution: 'High-end renderings that help buyers visualize the finished home, leading to faster sales and higher listing interest.',
    services: ['Real Estate Rendering', '3D Floor Plans', 'Interior Rendering'],
  },
  {
    title: 'Developers',
    icon: Building,
    painPoints: 'Difficulty securing pre-sales or investor interest before breaking ground on large-scale developments.',
    solution: 'Full marketing packages including exterior, interior, and site plans that bridge the gap between plan and reality.',
    services: ['Exterior Rendering', 'Site Plan Rendering', 'Real Estate Rendering'],
  },
  {
    title: 'Architects',
    icon: Layout,
    painPoints: 'Time-consuming internal rendering processes or difficulty presenting complex design concepts to clients.',
    solution: 'Specialized visualization support that allows you to focus on design while we handle the high-end presentation visuals.',
    services: ['Architectural Rendering', 'Exterior Rendering', 'Interior Rendering'],
  },
  {
    title: 'Builders',
    icon: Building,
    painPoints: 'Misunderstandings with clients regarding material selections or final architectural finishes.',
    solution: 'Photorealistic renderings that confirm material choices and design details before construction begins.',
    services: ['Exterior Rendering', 'Interior Rendering', '3D Floor Plans'],
  },
  {
    title: 'Interior Designers',
    icon: Paintbrush,
    painPoints: 'Clients struggling to commit to bold design choices or material combinations from mood boards alone.',
    solution: 'Detailed interior visualizations that showcase exactly how materials, lighting, and furniture will work together.',
    services: ['Interior Rendering', '3D Floor Plans'],
  },
];

export function Industries() {
  return (
    <>
      <SEO 
        title="Rendering Services for Realtors & Developers | Industries"
        description="Specialized architectural rendering services for realtors, developers, architects, builders, and interior designers. Visuals that help sell and present projects."
        canonical="/industries"
      />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24 space-y-8">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              Solutions for
              <br />
              <span className="text-white/40 italic font-serif lowercase">Industry Professionals</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed">
              We provide specialized visualization support for the professionals who build, design, and market the world around us.
            </p>
          </div>

          <div className="space-y-12">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-1">
                    <industry.icon className="text-musk-green-light group-hover:text-musk-green transition-colors" size={40} />
                  </div>
                  
                  <div className="lg:col-span-4 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight uppercase group-hover:text-musk-green-light transition-colors">{industry.title}</h2>
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/20">The Challenge</p>
                      <p className="text-sm text-white/40 font-light leading-relaxed">{industry.painPoints}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-6">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/20">The Solution</p>
                      <p className="text-sm text-white/60 font-light leading-relaxed">{industry.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {industry.services.map((service) => (
                        <span key={service} className="text-[9px] font-medium tracking-widest uppercase text-white/30 border border-white/10 px-3 py-1.5 group-hover:border-musk-green/30 group-hover:text-musk-green-light transition-colors">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex justify-end">
                    <Link 
                      to="/contact"
                      className="bg-musk-green text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-musk-green-light transition-all flex items-center gap-2 shadow-xl shadow-musk-green/20"
                    >
                      Book Consultation <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-musk-green text-white text-center space-y-8 shadow-2xl">
            <h3 className="text-4xl font-bold tracking-tighter uppercase">Don't see your industry?</h3>
            <p className="text-lg font-light opacity-70 max-w-2xl mx-auto">
              We work with a wide range of professionals across the real estate and architectural sectors. 
              Contact us to discuss your specific project requirements.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-musk-green px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition-all"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
