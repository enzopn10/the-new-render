export interface ServiceContent {
  title: string;
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  metaDescription: string;
  intro: string;
  whoItsFor: string[];
  whatsIncluded: string[];
  useCases: string[];
  deliverables: string[];
  whyItHelps: string;
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; path: string }[];
  image: string;
}

export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  'architectural-rendering': {
    title: 'Architectural Rendering Services',
    slug: 'architectural-rendering',
    primaryKeyword: 'architectural rendering services',
    secondaryKeywords: ['architectural visualization services', '3D architectural rendering', 'architectural rendering company'],
    seoTitle: 'Architectural Rendering Services | Premium 3D Visuals',
    metaDescription: 'Premium architectural rendering services for realtors, developers, and architects. High-end 3D visuals that help sell, present, and pre-market projects.',
    intro: 'High-end 3D visualizations that help sell, present, and pre-market projects with clarity. We bridge the gap between architectural plans and buyer reality.',
    whoItsFor: ['Luxury Realtors', 'Developers', 'Architects', 'Builders', 'Interior Designers'],
    whatsIncluded: ['High-resolution 3D renderings', 'Material & lighting accuracy', 'Photorealistic environment', 'Two rounds of revisions'],
    useCases: ['Pre-construction marketing', 'Design concept presentations', 'Investor pitches', 'Listing enhancements'],
    deliverables: ['4K High-resolution images', 'Web-optimized versions', 'Source file archiving'],
    whyItHelps: 'Our renderings help you sell projects faster by providing buyers with a clear, emotional connection to the space before a single brick is laid.',
    faqs: [
      { question: 'What files do I need to start?', answer: 'At minimum, we need floor plans and elevations. CAD or 3D models are preferred.' },
      { question: 'How long does it take?', answer: 'Typically 5-10 business days depending on complexity.' },
    ],
    relatedServices: [
      { title: 'Exterior Rendering', path: '/services/exterior-rendering' },
      { title: 'Interior Rendering', path: '/services/interior-rendering' },
    ],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  },
  'exterior-rendering': {
    title: 'Exterior Rendering Services',
    slug: 'exterior-rendering',
    primaryKeyword: 'exterior rendering services',
    secondaryKeywords: ['exterior architectural rendering', 'house rendering services', 'rendering for developments'],
    seoTitle: 'Exterior Rendering Services | High-End Development Visuals',
    metaDescription: 'Premium exterior rendering services for developments, luxury homes, and commercial projects. Showcase your project in its best light.',
    intro: 'Premium exterior visuals for developments, luxury homes, and commercial projects. We showcase your project in its best light, literally.',
    whoItsFor: ['Developers', 'Architects', 'Luxury Home Builders', 'Real Estate Marketing Teams'],
    whatsIncluded: ['Day/Night lighting options', 'Landscaping & environment detail', 'Entourage (people/cars)', 'High-end textures'],
    useCases: ['Development marketing', 'Zoning approvals', 'Architectural reviews', 'Pre-sales brochures'],
    deliverables: ['4K Exterior views', 'Panoramic shots', 'Drone integration visuals'],
    whyItHelps: 'Exterior renderings are the first impression of any development. We ensure that impression is one of quality, luxury, and architectural excellence.',
    faqs: [
      { question: 'Can you match specific landscaping?', answer: 'Yes, we can match specific plant species and landscaping plans provided.' },
    ],
    relatedServices: [
      { title: 'Site Plan Rendering', path: '/services/site-plan-rendering' },
      { title: 'Architectural Rendering', path: '/services/architectural-rendering' },
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  },
  'interior-rendering': {
    title: 'Interior Rendering Services',
    slug: 'interior-rendering',
    primaryKeyword: 'interior rendering services',
    secondaryKeywords: ['interior architectural rendering', 'interior design rendering', 'luxury interior rendering'],
    seoTitle: 'Interior Rendering Services | Luxury Interior Visuals',
    metaDescription: 'Detailed interior visualizations that showcase design concepts and material finishes. Perfect for interior designers and luxury realtors.',
    intro: 'Detailed interior visualizations that showcase design concepts and material finishes. We bring your interior vision to life with photorealistic detail.',
    whoItsFor: ['Interior Designers', 'Luxury Realtors', 'Architects', 'Home Builders'],
    whatsIncluded: ['Custom furniture modeling', 'Material & texture accuracy', 'Realistic lighting & shadows', 'Styling & decor'],
    useCases: ['Interior design presentations', 'Luxury listing marketing', 'Material selection reviews', 'Client approvals'],
    deliverables: ['High-res interior views', 'Close-up detail shots', '360 panoramas'],
    whyItHelps: 'Interior renderings allow clients to feel the space, understand the materials, and commit to the design with absolute confidence.',
    faqs: [
      { question: 'Do you provide furniture?', answer: 'We have a vast library of high-end furniture or can model custom pieces from references.' },
    ],
    relatedServices: [
      { title: '3D Floor Plans', path: '/services/3d-floor-plans' },
      { title: 'Architectural Rendering', path: '/services/architectural-rendering' },
    ],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200',
  },
  '3d-floor-plans': {
    title: '3D Floor Plan Services',
    slug: '3d-floor-plans',
    primaryKeyword: '3D floor plan services',
    secondaryKeywords: ['3D floor plan rendering', '3D floor plans for real estate', 'furnished floor plan rendering'],
    seoTitle: '3D Floor Plan Services | Furnished 3D Visuals',
    metaDescription: 'Furnished 3D floor plans that help buyers understand space and layout instantly. Ideal for real estate marketing and pre-construction sales.',
    intro: 'Furnished 3D floor plans that help buyers understand space and layout instantly. We transform flat drawings into immersive 3D experiences.',
    whoItsFor: ['Realtors', 'Developers', 'Marketing Teams', 'Brokers'],
    whatsIncluded: ['Full furniture layout', 'Material & flooring detail', 'Clear room labeling', 'Top-down or isometric views'],
    useCases: ['Listing enhancements', 'Pre-construction sales', 'Website interactive maps', 'Marketing brochures'],
    deliverables: ['High-res 3D plans', 'Web-optimized images', 'Transparent background options'],
    whyItHelps: '3D floor plans bridge the gap between a 2D drawing and a finished home, helping buyers visualize their life in the space.',
    faqs: [
      { question: 'Can you work from hand sketches?', answer: 'Yes, as long as dimensions are clear, we can build from sketches or 2D PDFs.' },
    ],
    relatedServices: [
      { title: '2D Floor Plans', path: '/services/2d-floor-plans' },
      { title: 'Interior Rendering', path: '/services/interior-rendering' },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200',
  },
  '2d-floor-plans': {
    title: '2D Floor Plan Services',
    slug: '2d-floor-plans',
    primaryKeyword: '2D floor plan services',
    secondaryKeywords: ['color floor plans', 'listing floor plans', 'realtor floor plan design'],
    seoTitle: '2D Floor Plan Services | Clean Marketing Plans',
    metaDescription: 'Clean, professional 2D floor plans for real estate listings and marketing. Color-coded and easy to read for buyers.',
    intro: 'Clean, professional 2D floor plans for real estate listings and marketing. We create easy-to-read plans that highlight the property layout.',
    whoItsFor: ['Realtors', 'Property Managers', 'Brokers', 'Listing Agents'],
    whatsIncluded: ['Color-coded rooms', 'Furniture icons', 'Dimension labeling', 'Custom branding'],
    useCases: ['MLS listings', 'Property flyers', 'Website listings', 'Rental marketing'],
    deliverables: ['High-res PDF/JPG', 'Branded versions', 'Clean black & white options'],
    whyItHelps: 'Professional 2D plans are a staple of any successful listing, providing essential information in a clear, digestible format.',
    faqs: [
      { question: 'Do you include dimensions?', answer: 'Yes, we can include room dimensions and total square footage if provided.' },
    ],
    relatedServices: [
      { title: '3D Floor Plans', path: '/services/3d-floor-plans' },
      { title: 'Real Estate Rendering', path: '/services/real-estate-rendering' },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200',
  },
  'site-plan-rendering': {
    title: 'Site Plan Rendering',
    slug: 'site-plan-rendering',
    primaryKeyword: 'site plan rendering',
    secondaryKeywords: ['rendered site plans', 'community site plans', 'development site plan graphics'],
    seoTitle: 'Site Plan Rendering | Development & Community Visuals',
    metaDescription: 'Professional site plan rendering for developments, communities, and commercial projects. Clear, beautiful graphics for marketing.',
    intro: 'Professional site plan rendering for developments, communities, and commercial projects. We turn technical site plans into beautiful marketing assets.',
    whoItsFor: ['Developers', 'Civil Engineers', 'Architects', 'Planning Teams'],
    whatsIncluded: ['Landscaping detail', 'Road & parking textures', 'Building footprints', 'Community amenities'],
    useCases: ['Development marketing', 'Zoning presentations', 'Community brochures', 'Investor decks'],
    deliverables: ['Large-format high-res plans', 'Web-optimized versions', 'Vector-based graphics'],
    whyItHelps: 'Rendered site plans help stakeholders understand the scale and layout of a development in a way that technical drawings cannot.',
    faqs: [
      { question: 'Can you render large master plans?', answer: 'Yes, we specialize in both small residential sites and large-scale community master plans.' },
    ],
    relatedServices: [
      { title: 'Exterior Rendering', path: '/services/exterior-rendering' },
      { title: 'Real Estate Rendering', path: '/services/real-estate-rendering' },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200',
  },
  'real-estate-rendering': {
    title: 'Real Estate Rendering Services',
    slug: 'real-estate-rendering',
    primaryKeyword: 'real estate rendering services',
    secondaryKeywords: ['renderings for real estate marketing', 'pre-construction rendering', 'marketing renderings for listings'],
    seoTitle: 'Real Estate Rendering Services | Marketing Visuals',
    metaDescription: 'Premium real estate rendering services for marketing and pre-construction sales. Visuals that help sell properties faster.',
    intro: 'Premium real estate rendering services for marketing and pre-construction sales. We create the visuals that help you sell properties faster.',
    whoItsFor: ['Realtors', 'Developers', 'Brokers', 'Marketing Agencies'],
    whatsIncluded: ['Full marketing packages', 'Exterior & Interior views', 'Floor plans', 'Social media assets'],
    useCases: ['Pre-construction sales', 'Luxury listing marketing', 'Social media campaigns', 'Website content'],
    deliverables: ['Full suite of marketing visuals', 'Video walkthroughs (optional)', 'Branded assets'],
    whyItHelps: 'Real estate renderings are the most powerful tool in a marketer\'s arsenal, allowing you to sell the dream before it\'s built.',
    faqs: [
      { question: 'Do you offer packages?', answer: 'Yes, we offer comprehensive marketing packages that include exterior, interior, and floor plans.' },
    ],
    relatedServices: [
      { title: 'Architectural Rendering', path: '/services/architectural-rendering' },
      { title: '3D Floor Plans', path: '/services/3d-floor-plans' },
    ],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  },
};
