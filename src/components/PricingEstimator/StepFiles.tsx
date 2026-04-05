import { FileType } from '../../types/pricing';
import { FileText, Image, Box, Map, Layers, LucideIcon } from 'lucide-react';

const FILE_OPTIONS: { id: FileType; label: string; icon: LucideIcon }[] = [
  { id: 'floor_plans', label: 'Floor Plans', icon: FileText },
  { id: 'elevations', label: 'Elevations', icon: Layers },
  { id: 'cad', label: 'CAD Files', icon: Box },
  { id: '3d_model', label: '3D Model', icon: Box },
  { id: 'site_plan', label: 'Site Plan', icon: Map },
  { id: 'references', label: 'References', icon: Image },
];

export function StepFiles({ selected, onChange }: { selected: FileType[]; onChange: (v: FileType[]) => void }) {
  const toggle = (id: FileType) => {
    if (selected.includes(id)) {
      onChange(selected.filter(f => f !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">What files do you have?</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Better source files can reduce production friction and influence the estimate.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {FILE_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selected.includes(opt.id);
          
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 group ${
                isSelected 
                  ? 'border-musk-green bg-musk-green/5 shadow-xl scale-105' 
                  : 'border-zinc-100 dark:border-zinc-800 hover:border-musk-green/30 dark:hover:border-musk-green/30 hover:bg-musk-green/5'
              }`}
            >
              <div className={`p-4 rounded-xl mb-4 transition-colors ${
                isSelected ? 'bg-musk-green text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-musk-green'
              }`}>
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <span className={`text-xs font-semibold tracking-tight text-center ${
                isSelected ? 'text-musk-green font-bold' : 'text-zinc-600 dark:text-zinc-400'
              }`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
