import { useEffect, useState, useCallback } from 'react';
import { PricingState } from '../../types/pricing';
import { CheckCircle2, Calendar, ArrowRight, RefreshCcw, Sparkles, Mail } from 'lucide-react';

export function EstimateResult({ state, estimate, onReset }: { 
  state: PricingState; 
  estimate: { min: number; max: number };
  onReset: () => void;
}) {
  const [countdown, setCountdown] = useState(7);
  const [hasTriggered, setHasTriggered] = useState(false);

  const hasAnimation = state.projectTypes.includes('animation');
  const turnaroundDays = state.turnaround === 'standard' 
    ? (hasAnimation ? '10-14' : '5-7') 
    : state.turnaround === 'rush' 
      ? (hasAnimation ? '7-10' : '3-4') 
      : (hasAnimation ? '5' : '2');

  const generateMailto = useCallback(() => {
    const email = 'info@thenewrender.com';
    const subject = encodeURIComponent('Quote Request - The New Render');
    const body = encodeURIComponent(`
Hello The New Render Team,

I would like to request a formal quote based on the following project details:

PROJECT SUMMARY:
- Services: ${state.projectTypes.join(', ').replace(/_/g, ' ')}
- Quality Tier: ${state.scope.stylingLevel?.replace(/_/g, ' ')}
- Property Type: ${state.scope.propertyType?.replace(/-/g, ' ')}
- Entourage: ${state.scope.includePeopleCars ? 'Included' : 'None'}
- Animation: ${hasAnimation ? `${state.scope.animationSeconds} Seconds` : 'N/A'}
- Turnaround: ${state.turnaround}
- Estimated Range: $${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}

CONTACT INFO:
- Name: ${state.contact.name}
- Company: ${state.contact.company}
- Email: ${state.contact.email}
- Phone: ${state.contact.phone}

NOTES:
${state.contact.notes || 'No additional notes.'}

Looking forward to hearing from you.
    `);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [state, estimate, hasAnimation]);

  const triggerEmail = useCallback(() => {
    window.location.href = generateMailto();
    setHasTriggered(true);
  }, [generateMailto]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!hasTriggered) {
      triggerEmail();
    }
  }, [countdown, hasTriggered, triggerEmail]);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-musk-green/10 text-musk-green rounded-full mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Your Project Estimate</h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          Based on your premium selections, here is an indicative range for your project. 
          Final pricing is confirmed after reviewing your plans.
        </p>
        
        {!hasTriggered && (
          <div className="flex items-center justify-center gap-2 text-musk-green font-bold text-sm animate-pulse">
            <Mail size={16} />
            Opening your email client in {countdown}s...
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-musk-green/5 rounded-3xl p-8 border border-musk-green/10 text-center lg:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles size={120} className="text-musk-green" />
            </div>
            <div className="text-sm font-bold tracking-widest uppercase text-musk-green mb-2">Estimated Range</div>
            <div className="text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100">
              ${estimate.min.toLocaleString()} <span className="text-musk-green/20">—</span> ${estimate.max.toLocaleString()}
            </div>
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-100 dark:border-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                <Calendar size={14} />
                {turnaroundDays} Business Days
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-zinc-100 dark:border-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                {state.revisions} Revisions
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Scope Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Project Types', value: state.projectTypes.join(', ').replace(/_/g, ' ') },
                { label: 'Quality Tier', value: state.scope.stylingLevel?.replace(/_/g, ' ') },
                { label: 'Property Type', value: state.scope.propertyType?.replace(/-/g, ' ') },
                { label: 'Entourage', value: state.scope.includePeopleCars ? 'Included' : 'None' },
                { label: 'Animation', value: hasAnimation ? `${state.scope.animationSeconds} Seconds` : 'N/A' },
                { label: 'Turnaround', value: state.turnaround },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 capitalize">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-musk-green text-white rounded-3xl p-8 space-y-8 shadow-2xl relative">
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight">Finalize Your Quote</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Click below to send your project details to our team. We'll review your scope and provide a binding quote within 24 hours.
              </p>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={triggerEmail}
                className="w-full flex items-center justify-center gap-2 bg-white text-musk-green px-6 py-4 rounded-2xl text-sm font-bold hover:scale-105 transition-all shadow-xl"
              >
                Book Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <button 
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 py-4 text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            <RefreshCcw size={14} />
            Start New Estimate
          </button>
        </div>
      </div>
    </div>
  );
}
