import { PricingState } from '../../types/pricing';

export function StepContact({ contact, onChange }: { 
  contact: PricingState['contact']; 
  onChange: (v: PricingState['contact']) => void;
}) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Contact Details</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Please provide your contact information to receive the final estimate.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Full Name</label>
          <input 
            type="text"
            value={contact.name}
            onChange={(e) => onChange({ ...contact, name: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-musk-green transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Company Name</label>
          <input 
            type="text"
            value={contact.company}
            onChange={(e) => onChange({ ...contact, company: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-musk-green transition-colors"
            placeholder="Luxury Real Estate Co."
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Email Address</label>
          <input 
            type="email"
            value={contact.email}
            onChange={(e) => onChange({ ...contact, email: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-musk-green transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Phone Number</label>
          <input 
            type="tel"
            value={contact.phone}
            onChange={(e) => onChange({ ...contact, phone: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-musk-green transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="col-span-1 md:col-span-2 space-y-4">
          <label className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Project Notes / Special Requests</label>
          <textarea 
            value={contact.notes}
            onChange={(e) => onChange({ ...contact, notes: e.target.value })}
            className="w-full bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-100 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-musk-green transition-colors min-h-[120px]"
            placeholder="Tell us about your project goals, style preferences, or any specific requirements."
          />
        </div>
      </div>
    </div>
  );
}
