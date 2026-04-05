export interface DynamicPageContent {
  title: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  whoItsFor: string;
  relevantServices: string[];
  whyItHelps: string;
  image: string;
}

export const LOCATIONS_CONTENT: Record<string, DynamicPageContent> = {
  'orlando-architectural-rendering': {
    title: 'Orlando Architectural Rendering',
    slug: 'orlando-architectural-rendering',
    seoTitle: 'Orlando Architectural Rendering Services | Premium 3D Visuals',
    metaDescription: 'Premium architectural rendering services in Orlando, FL. High-end 3D visuals for realtors, developers, and architects in Central Florida.',
    intro: 'High-end architectural visualization services for the Orlando and Central Florida market. We help local professionals present projects with absolute clarity.',
    whoItsFor: 'Luxury realtors, developers, and architects in Orlando, Winter Garden, and surrounding areas.',
    relevantServices: ['Exterior Rendering', 'Interior Rendering', '3D Floor Plans'],
    whyItHelps: 'Orlando is a fast-growing market. Our renderings help you stand out in a competitive landscape, whether you\'re marketing a luxury home or a new development.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  },
  'florida-real-estate-rendering': {
    title: 'Florida Real Estate Rendering',
    slug: 'florida-real-estate-rendering',
    seoTitle: 'Florida Real Estate Rendering Services | Marketing Visuals',
    metaDescription: 'Premium real estate rendering services across Florida. Marketing visuals for pre-construction sales and luxury listings.',
    intro: 'State-wide real estate rendering services focused on high-impact marketing visuals for the Florida property market.',
    whoItsFor: 'Real estate marketing teams, brokers, and developers across the state of Florida.',
    relevantServices: ['Real Estate Rendering', 'Exterior Rendering', '3D Floor Plans'],
    whyItHelps: 'The Florida real estate market demands high-quality visuals. We provide the renderings that help you pre-sell units and market listings with confidence.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  },
};

export const SOLUTIONS_CONTENT: Record<string, DynamicPageContent> = {
  'renderings-for-realtors': {
    title: 'Renderings for Realtors',
    slug: 'renderings-for-realtors',
    seoTitle: '3D Renderings for Realtors | Listing & Marketing Visuals',
    metaDescription: 'High-end 3D renderings for realtors and brokers. Help your buyers visualize the dream with premium interior and exterior visuals.',
    intro: 'Specialized rendering solutions for realtors and brokers who want to market listings with absolute clarity and emotion.',
    whoItsFor: 'Luxury real estate agents, brokers, and listing teams.',
    relevantServices: ['Interior Rendering', '3D Floor Plans', '2D Floor Plans'],
    whyItHelps: 'Buyers often struggle to visualize potential. Our renderings bridge that gap, allowing you to sell the dream before it\'s built or renovated.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200',
  },
  'renderings-for-developers': {
    title: 'Renderings for Developers',
    slug: 'renderings-for-developers',
    seoTitle: '3D Renderings for Developers | Pre-Construction Marketing',
    metaDescription: 'Premium 3D renderings for developers. High-impact visuals for pre-construction sales, investor pitches, and marketing brochures.',
    intro: 'Comprehensive visualization packages for developers who need to pre-sell units and secure investor interest before breaking ground.',
    whoItsFor: 'Residential and commercial developers, pre-construction marketing teams.',
    relevantServices: ['Exterior Rendering', 'Site Plan Rendering', 'Real Estate Rendering'],
    whyItHelps: 'Renderings are the most powerful tool for pre-selling. We provide the assets that help you fill your pipeline before construction begins.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  },
  'luxury-home-rendering': {
    title: 'Luxury Home Rendering',
    slug: 'luxury-home-rendering',
    seoTitle: 'Luxury Home Rendering Services | High-End Residential Visuals',
    metaDescription: 'Premium 3D renderings for luxury homes. Photorealistic interior and exterior visuals for custom home builders and designers.',
    intro: 'High-end residential visualization for luxury homes, custom builds, and high-stakes design projects.',
    whoItsFor: 'Custom home builders, interior designers, and luxury homeowners.',
    relevantServices: ['Exterior Rendering', 'Interior Rendering', '3D Floor Plans'],
    whyItHelps: 'Luxury clients demand excellence. Our renderings provide the level of detail and realism required to secure approvals and commit to high-end designs.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
  },
};
