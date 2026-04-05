import { TurnaroundType, ProjectType } from '../../types/pricing';
import { Clock, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';

export function StepTurnaround({ turnaround, revisions, projectTypes, onChange }: { 
  turnaround: TurnaroundType; 
  revisions: 'standard' | 'extended' | 'premium';
  projectTypes: ProjectType[];
  onChange: (t: TurnaroundType, r: 'standard' | 'extended' | 'premium') => void;
}) {
  const hasAnimation = projectTypes.includes('animation');

  const speedOptions = [
    { 
      id: 'standard', 
      label: 'Standard', 
      desc: hasAnimation ? '10-14 business days' : '5-7 business days', 
      icon: Clock,
    },
    { 
      id: 'rush', 
      label: 'Rush', 
      desc: hasAnimation ? '7-10 business days' : '3-4 business days', 
      icon: Zap,
    },
    { 
      id: 'urgent', 
      label: 'Urgent', 
      desc: hasAnimation ? '5 business days' : '48-hour delivery', 
      icon: AlertTriangle,
    },
  ];

  const revisionOptions = [
    { id: 'standard', label: 'Standard', desc: '2 Rounds of Revisions' },
    { id: 'extended', label: 'Extended', desc: '4 Rounds + Minor Tweaks' },
    { id: 'premium', label: 'Premium', desc: 'Unlimited Minor Revisions' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Timeline & Revisions</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Select your preferred delivery speed and revision package.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <label className="text-sm font-bold tracking-widest uppercase text-zinc-500">Delivery Speed</label>
          <div className="space-y-4">
            {speedOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = turnaround === opt.id;
              
              return (
                <button
                  key={opt.id}
                  onClick={() => onChange(opt.id as TurnaroundType, revisions)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected 
                      ? 'border-musk-green bg-musk-green/5 shadow-lg' 
                      : 'border-zinc-100 dark:border-zinc-800 hover:border-musk-green/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-musk-green text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'}`}>
                      <Icon size={20} />
                    </div>
                    <div className="text-left">
                      <div className={`text-sm font-bold ${isSelected ? 'text-musk-green' : 'text-zinc-900 dark:text-zinc-100'}`}>{opt.label}</div>
                      <div className="text-xs text-zinc-500">{opt.desc}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <label className="text-sm font-bold tracking-widest uppercase text-zinc-500">Revision Support</label>
          <div className="space-y-4">
            {revisionOptions.map((opt) => {
              const isSelected = revisions === opt.id;
              
              return (
                <button
                  key={opt.id}
                  onClick={() => onChange(turnaround, opt.id as 'standard' | 'extended' | 'premium')}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected 
                      ? 'border-musk-green bg-musk-green/5 shadow-lg' 
                      : 'border-zinc-100 dark:border-zinc-800 hover:border-musk-green/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-musk-green text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'}`}>
                      <ShieldCheck size={20} />
                    </div>
                    <div className="text-left">
                      <div className={`text-sm font-bold ${isSelected ? 'text-musk-green' : 'text-zinc-900 dark:text-zinc-100'}`}>{opt.label}</div>
                      <div className="text-xs text-zinc-500">{opt.desc}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
