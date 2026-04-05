import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PricingState } from '../../types/pricing';
import { PRICING_CONFIG } from '../../constants/pricingConfig';
import { StepProject } from './StepProject';
import { StepScope } from './StepScope';
import { StepFiles } from './StepFiles';
import { StepTurnaround } from './StepTurnaround';
import { StepContact } from './StepContact';
import { EstimateResult } from './EstimateResult';
import { ProgressBar } from './ProgressBar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const INITIAL_STATE: PricingState = {
  step: 1,
  projectTypes: [],
  userType: null,
  scope: {
    propertyType: 'single-family',
    sqft: 2500,
    viewCount: 1,
    roomCount: 1,
    stylingLevel: 'standard',
    landscapingDetail: 'standard',
    includePeopleCars: false,
    isListing: false,
    animationSeconds: 10,
  },
  files: [],
  turnaround: 'standard',
  revisions: 'standard',
  contact: {
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
  },
};

export function Estimator() {
  const [state, setState] = useState<PricingState>(INITIAL_STATE);

  const totalSteps = 6;

  const nextStep = () => setState(prev => ({ ...prev, step: Math.min(prev.step + 1, totalSteps + 1) }));
  const prevStep = () => setState(prev => ({ ...prev, step: Math.max(prev.step - 1, 1) }));

  const updateState = (updates: Partial<PricingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const updateScope = (updates: Partial<PricingState['scope']>) => {
    setState(prev => ({ ...prev, scope: { ...prev.scope, ...updates } }));
  };

  const calculateEstimate = useMemo(() => {
    if (state.projectTypes.length === 0) return { min: 0, max: 0 };

    let min = 0;
    let max = 0;

    const hasOtherRenders = state.projectTypes.some(t => t !== 'animation');
    const styling = state.scope.stylingLevel || 'standard';

    state.projectTypes.forEach(type => {
      if (type === 'exterior' || type === 'interior') {
        const rates = PRICING_CONFIG.baseRates[type][styling];
        min += rates[0];
        max += rates[1];
      } else if (type === '3d_floor_plan' || type === '2d_floor_plan' || type === 'site_plan') {
        const rates = PRICING_CONFIG.baseRates[type] as [number, number];
        min += rates[0];
        max += rates[1];
      } else if (type === 'animation') {
        const seconds = state.scope.animationSeconds || 10;
        const rates = hasOtherRenders 
          ? PRICING_CONFIG.baseRates.animation.withRenders 
          : PRICING_CONFIG.baseRates.animation.alone;
        min += rates[0] * seconds;
        max += rates[1] * seconds;
      }
    });

    // Multipliers
    let totalMultiplier = 1;
    if (state.scope.includePeopleCars) totalMultiplier *= PRICING_CONFIG.multipliers.lifestyle;
    
    totalMultiplier *= PRICING_CONFIG.multipliers.turnaround[state.turnaround];
    totalMultiplier *= PRICING_CONFIG.multipliers.revisions[state.revisions];

    return {
      min: Math.round((min * totalMultiplier) / 10) * 10,
      max: Math.round((max * totalMultiplier) / 10) * 10,
    };
  }, [state]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
      <ProgressBar current={state.step} total={totalSteps} />
      
      <div className="p-8 md:p-12 min-h-[500px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {state.step === 1 && (
              <StepProject 
                value={state.projectTypes} 
                onChange={(v) => updateState({ projectTypes: v })} 
              />
            )}
            {state.step === 2 && (
              <StepScope 
                projectTypes={state.projectTypes} 
                scope={state.scope} 
                onChange={updateScope} 
              />
            )}
            {state.step === 3 && (
              <StepFiles 
                selected={state.files} 
                onChange={(v) => updateState({ files: v })} 
              />
            )}
            {state.step === 4 && (
              <StepTurnaround 
                turnaround={state.turnaround} 
                revisions={state.revisions}
                projectTypes={state.projectTypes}
                onChange={(t, r) => updateState({ turnaround: t, revisions: r })} 
              />
            )}
            {state.step === 5 && (
              <StepContact 
                contact={state.contact} 
                onChange={(v) => updateState({ contact: v })} 
              />
            )}
            {state.step === 6 && (
              <EstimateResult 
                state={state} 
                estimate={calculateEstimate} 
                onReset={() => setState(INITIAL_STATE)}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {state.step < 6 && (
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-zinc-100 dark:border-zinc-800">
            <button
              onClick={prevStep}
              disabled={state.step === 1}
              className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-0 transition-all"
            >
              <ChevronLeft size={18} />
              Back
            </button>
            
            <button
              onClick={nextStep}
              disabled={state.step === 1 && state.projectTypes.length === 0}
              className="flex items-center gap-2 bg-musk-green text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-musk-green-light hover:scale-105 active:scale-95 transition-all shadow-lg shadow-musk-green/20 disabled:opacity-50 disabled:hover:scale-100"
            >
              {state.step === 5 ? 'View Estimate' : 'Continue'}
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
