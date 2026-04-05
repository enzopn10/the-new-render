import { PricingState, ProjectType } from '../../types/pricing';
import { Info, Users, Sparkles, Video } from 'lucide-react';

export function StepScope({ projectTypes, scope, onChange }: { 
  projectTypes: ProjectType[]; 
  scope: PricingState['scope']; 
  onChange: (updates: Partial<PricingState['scope']>) => void;
}) {
  const hasRenders = projectTypes.some(t => t === 'exterior' || t === 'interior');
  const hasAnimation = projectTypes.includes('animation');

  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Project Details</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Refine the quality and scope of your project.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Quality / Styling Level */}
        {hasRenders && (
          <div className="space-y-4 md:col-span-2">
            <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 flex items-center gap-2">
              Quality Tier
              <Tooltip text="Higher tiers include more detailed textures, lighting, and post-production." />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'standard', label: 'Standard', desc: 'Professional & Clean' },
                { id: 'high', label: 'High-End', desc: 'Premium Realism' },
                { id: 'ultra_realistic', label: 'Ultra Realistic', desc: 'Photographic Perfection' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => onChange({ stylingLevel: tier.id as 'standard' | 'high' | 'ultra_realistic' })}
                  className={`flex flex-col p-4 rounded-xl border-2 text-left transition-all ${
                    scope.stylingLevel === tier.id 
                      ? 'border-musk-green bg-musk-green/5 shadow-md' 
                      : 'border-zinc-100 dark:border-zinc-800 hover:border-musk-green/30'
                  }`}
                >
                  <span className={`text-sm font-bold ${scope.stylingLevel === tier.id ? 'text-musk-green' : 'text-zinc-900 dark:text-zinc-100'}`}>
                    {tier.label}
                  </span>
                  <span className="text-xs text-zinc-500">{tier.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Animation Seconds */}
        {hasAnimation && (
          <div className="space-y-6 md:col-span-2 bg-musk-green/5 p-6 rounded-2xl border border-musk-green/20">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold tracking-widest uppercase text-musk-green flex items-center gap-2">
                <Video size={18} />
                Animation Length
              </label>
              <span className="text-2xl font-bold text-musk-green">{scope.animationSeconds}s</span>
            </div>
            <input 
              type="range" min="5" max="120" step="5"
              value={scope.animationSeconds}
              onChange={(e) => onChange({ animationSeconds: parseInt(e.target.value) })}
              className="w-full accent-musk-green"
            />
            <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              <span>5 Seconds</span>
              <span>60 Seconds</span>
              <span>120 Seconds</span>
            </div>
          </div>
        )}

        {/* Lifestyle Elements */}
        <div className="space-y-4">
          <label className="text-sm font-bold tracking-widest uppercase text-zinc-500">Lifestyle Elements</label>
          <button 
            onClick={() => onChange({ includePeopleCars: !scope.includePeopleCars })}
            className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
              scope.includePeopleCars 
                ? 'border-musk-green bg-musk-green/5' 
                : 'border-zinc-100 dark:border-zinc-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${scope.includePeopleCars ? 'bg-musk-green text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                <Users size={18} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Include Entourage</p>
                <p className="text-xs text-zinc-500">People, cars, and lifestyle props</p>
              </div>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              scope.includePeopleCars ? 'bg-musk-green border-musk-green text-white' : 'border-zinc-200 dark:border-zinc-700'
            }`}>
              {scope.includePeopleCars && <Sparkles size={12} />}
            </div>
          </button>
        </div>

        {/* Property Context */}
        <div className="space-y-4">
          <label className="text-sm font-bold tracking-widest uppercase text-zinc-500">Property Type</label>
          <select 
            value={scope.propertyType}
            onChange={(e) => onChange({ propertyType: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-xl px-4 py-4 text-sm font-medium focus:outline-none focus:border-musk-green transition-colors"
          >
            <option value="single-family">Single-Family Home</option>
            <option value="luxury-custom">Luxury Custom Home</option>
            <option value="townhome-multifamily">Townhome / Multifamily</option>
            <option value="commercial-facade">Commercial / Mixed-Use</option>
            <option value="community-development">Community Development</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function Tooltip({ text }: { text: string }) {
  return (
    <div className="group relative inline-block">
      <Info size={14} className="text-zinc-400 cursor-help" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900" />
      </div>
    </div>
  );
}
