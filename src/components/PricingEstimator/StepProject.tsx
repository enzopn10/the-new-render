import { ProjectType } from '../../types/pricing';
import { PROJECT_TYPES } from '../../constants/pricingConfig';
import { Home, Layout, Box, Map, Compass, Video, Check, LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Home, Layout, Box, Map, Compass, Video
};

export function StepProject({ value, onChange }: { value: ProjectType[], onChange: (v: ProjectType[]) => void }) {
  const toggleType = (id: ProjectType) => {
    if (value.includes(id)) {
      onChange(value.filter(v => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const toggleAll = () => {
    if (value.length === PROJECT_TYPES.length) {
      onChange([]);
    } else {
      onChange(PROJECT_TYPES.map(t => t.id as ProjectType));
    }
  };

  const isAllSelected = value.length === PROJECT_TYPES.length;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">What do you need rendered?</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Select all that apply to your project.</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleAll}
          className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
            isAllSelected 
              ? 'border-musk-green bg-musk-green text-white shadow-lg' 
              : 'border-zinc-100 dark:border-zinc-800 text-zinc-500 hover:border-musk-green/30'
          }`}
        >
          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
            isAllSelected ? 'bg-white text-musk-green border-white' : 'border-zinc-300 dark:border-zinc-600'
          }`}>
            {isAllSelected && <Check size={14} strokeWidth={3} />}
          </div>
          <span className="text-sm font-bold tracking-widest uppercase">Select All / Full Package</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECT_TYPES.map((type) => {
          const Icon = ICON_MAP[type.icon];
          const isSelected = value.includes(type.id as ProjectType);
          
          return (
            <button
              key={type.id}
              onClick={() => toggleType(type.id as ProjectType)}
              className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 group ${
                isSelected 
                  ? 'border-musk-green bg-musk-green/5 shadow-xl' 
                  : 'border-zinc-100 dark:border-zinc-800 hover:border-musk-green/30 dark:hover:border-musk-green/30 hover:bg-musk-green/5'
              }`}
            >
              <div className="absolute top-4 right-4">
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  isSelected ? 'bg-musk-green border-musk-green text-white' : 'border-zinc-200 dark:border-zinc-700'
                }`}>
                  {isSelected && <Check size={14} strokeWidth={3} />}
                </div>
              </div>

              <div className={`p-4 rounded-xl mb-4 transition-colors ${
                isSelected ? 'bg-musk-green text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:text-musk-green'
              }`}>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <span className={`text-sm font-semibold tracking-tight text-center ${
                isSelected ? 'text-musk-green font-bold' : 'text-zinc-600 dark:text-zinc-400'
              }`}>
                {type.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
