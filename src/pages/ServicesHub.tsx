import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, Layout, Image as ImageIcon, FileText, Building, Home, Paintbrush } from 'lucide-react';

const SERVICES = [
  {
    title: 'Architectural Rendering',
    description: 'High-end 3D visualizations that help sell, present, and pre-market projects with clarity.',
    path: '/services/architectural-rendering',
    icon: Layout,
  },
  {
    title: 'Exterior Rendering',
    description: 'Premium exterior visuals for developments, luxury homes, and commercial projects.',
    path: '/services/exterior-rendering',
    icon: Building,
  },
  {
    title: 'Interior Rendering',
    description: 'Detailed interior visualizations that showcase design concepts and material finishes.',
    path: '/services/interior-rendering',
    icon: Paintbrush,
  },
  {
    title: '3D Floor Plans',
    description: 'Furnished 3D floor plans that help buyers understand space and layout instantly.',
    path: '/services/3d-floor-plans',
    icon: Home,
  },
  {
    title: '2D Floor Plans',
    description: 'Clean, professional 2D floor plans for real estate listings and marketing.',
    path: '/services/2d-floor-plans',
    icon: FileText,
  },
  {
    title: 'Site Plan Rendering',
    description: 'Professional site plan rendering for developments, communities, and commercial projects.',
    path: '/services/site-plan-rendering',
    icon: Building,
  },
  {
    title: 'Real Estate Rendering',
    description: 'Premium real estate rendering services for marketing and pre-construction sales.',
    path: '/services/real-estate-rendering',
    icon: ImageIcon,
  },
];

export function ServicesHub() {
  return (
    <>
      <SEO 
        title="Architectural Rendering Services | Full Service Studio"
        description="Explore our full range of architectural rendering services, including exterior, interior, 3D floor plans, and real estate marketing visuals in Florida."
        canonical="/services"
      />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24 space-y-8">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-zinc-900 dark:text-white">
              Our
              <br />
              <span className="text-musk-green italic font-serif lowercase">Rendering Services</span>
            </h1>
            <p className="text-xl text-zinc-500 dark:text-white/50 font-light leading-relaxed">
              We provide a comprehensive suite of visualization services designed to help real estate professionals sell, present, and market projects with absolute clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, rotateY: 5 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: -5, rotateX: 2 }}
                className="group p-10 bg-zinc-50 dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/5 hover:border-musk-green transition-all shadow-xl dark:shadow-musk-green/5"
              >
                <service.icon className="text-musk-green dark:text-musk-green-light mb-10 group-hover:text-musk-green transition-colors" size={32} />
                <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-musk-green transition-colors text-zinc-900 dark:text-white">{service.title}</h2>
                <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed mb-10">
                  {service.description}
                </p>
                <Link to={service.path} className="text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 group-hover:text-musk-green transition-all text-zinc-900 dark:text-white">
                  Learn more <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-musk-green text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
            {/* Background 3D flair */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h3 className="text-4xl font-bold tracking-tighter uppercase relative z-10">Need a custom package?</h3>
            <p className="text-lg font-light opacity-70 max-w-2xl mx-auto relative z-10">
              We offer comprehensive marketing packages for developers and realtors that include multiple views and floor plans. 
              Contact us to discuss a tailored solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4 relative z-10">
              <Link 
                to="/contact"
                className="bg-white text-musk-green px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-zinc-100 transition-all shadow-xl"
              >
                Book Consultation
              </Link>
              <Link 
                to="/pricing"
                className="border border-white/20 text-white px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-musk-green transition-all"
              >
                Use pricing estimator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
