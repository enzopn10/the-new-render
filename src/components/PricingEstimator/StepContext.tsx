import { UserType } from '../../types/pricing';
import { USER_TYPES } from '../../constants/pricingConfig';

export function StepContext({ value, onChange }: { value: UserType | null, onChange: (v: UserType) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Who is the project for?</h2>
        <p className="text-zinc-500 dark:text-zinc-400">This helps us tailor follow-up messaging and estimate logic.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {USER_TYPES.map((type) => {
          const isSelected = value === type.id;
          
          return (
            <button
              key={type.id}
              onClick={() => onChange(type.id as UserType)}
              className={`flex items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 group ${
                isSelected 
                  ? 'border-musk-green bg-musk-green/5 shadow-xl scale-105' 
                  : 'border-zinc-100 dark:border-zinc-800 hover:border-musk-green/30 dark:hover:border-musk-green/30 hover:bg-musk-green/5'
              }`}
            >
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
