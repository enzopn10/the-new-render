export const PRICING_CONFIG = {
  baseRates: {
    exterior: { standard: [800, 1100], high: [1100, 1500], ultra_realistic: [1500, 2000] },
    interior: { standard: [450, 600], high: [600, 900], ultra_realistic: [900, 1200] },
    '3d_floor_plan': [200, 500],
    '2d_floor_plan': [100, 300],
    site_plan: [500, 1000],
    animation: { withRenders: [60, 100], alone: [110, 150] }
  },
  multipliers: {
    lifestyle: 1.1, // +10%
    turnaround: {
      standard: 1.0,
      rush: 1.1, // +10%
      urgent: 1.2, // +20%
    },
    revisions: {
      standard: 1.0,
      extended: 1.05, // +5%
      premium: 1.1, // +10%
    }
  }
};

export const PROJECT_TYPES = [
  { id: 'exterior', label: 'Exterior Rendering', icon: 'Home' },
  { id: 'interior', label: 'Interior Rendering', icon: 'Layout' },
  { id: '3d_floor_plan', label: '3D Floor Plan', icon: 'Box' },
  { id: '2d_floor_plan', label: '2D Floor Plan', icon: 'Map' },
  { id: 'site_plan', label: 'Site Plan Rendering', icon: 'Compass' },
  { id: 'animation', label: 'Animation', icon: 'Video' },
];

export const USER_TYPES = [
  { id: 'realtor', label: 'Realtor / Broker' },
  { id: 'developer', label: 'Developer' },
  { id: 'architect', label: 'Architect' },
  { id: 'builder', label: 'Builder' },
  { id: 'interior_designer', label: 'Interior Designer' },
  { id: 'other', label: 'Other' },
];
