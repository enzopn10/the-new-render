import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CheckCircle2, FileText, Layout, Image as ImageIcon, MessageSquare, Clock, Layers } from 'lucide-react';

const STEPS = [
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

const FILE_TYPES = [
  { name: 'Floor Plans', description: '2D PDFs or CAD files with dimensions.' },
  { name: 'Elevations', description: 'Exterior or interior elevation drawings.' },
  { name: '3D Models', description: 'SketchUp, Revit, or Rhino files (preferred).' },
  { name: 'Site Plans', description: 'Landscape and community layout drawings.' },
  { name: 'References', description: 'Material samples, lighting inspiration, or mood boards.' },
];

export function Process() {
  return (
    <>
      <SEO 
        title="Architectural Rendering Process | Workflow & Delivery"
        description="Learn about our architectural rendering process, from inquiry and file review to final delivery. A clean, professional workflow for realtors and developers."
        canonical="/process"
      />

      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24 space-y-8">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              A Clean,
              <br />
              <span className="text-white/40 italic font-serif lowercase">Professional Workflow</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed">
              We've refined our process to ensure clarity, quality, and speed at every stage of your visualization project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              {STEPS.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-musk-green/20 border border-musk-green/30 flex items-center justify-center group-hover:bg-musk-green group-hover:text-white transition-all">
                      <step.icon size={24} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/20">Step 0{idx + 1}</span>
                      <h2 className="text-2xl font-bold tracking-tight uppercase group-hover:text-musk-green-light transition-colors">{step.title}</h2>
                    </div>
                    <p className="text-sm text-white/40 font-light leading-relaxed max-w-md">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-16">
              <div className="bg-[#0a0a0a] border border-white/5 p-12 space-y-12">
                <h3 className="text-2xl font-bold tracking-tight uppercase">What to send us</h3>
                <p className="text-white/50 font-light leading-relaxed">
                  To provide an accurate quote and start your project quickly, please include as many of the following as possible:
                </p>
                <div className="space-y-6">
                  {FILE_TYPES.map((file) => (
                    <div key={file.name} className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-white/5 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-white/40" />
                      </div>
                      <div>
                        <p className="text-sm font-bold mb-1">{file.name}</p>
                        <p className="text-xs text-white/40">{file.description}</p>
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
              </div>

              <div className="p-12 border border-white/5 space-y-8">
                <h3 className="text-xl font-bold tracking-tight uppercase">Communication</h3>
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  We believe in fast, transparent communication. You'll receive regular updates throughout the project, 
                  and we're always available via email, phone, or WhatsApp to discuss your project.
                </p>
                <div className="flex gap-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/30">
                    <Clock size={14} />
                    Fast Response
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/30">
                    <MessageSquare size={14} />
                    Direct Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
