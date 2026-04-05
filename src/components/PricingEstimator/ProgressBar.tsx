import { motion } from 'motion/react';

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute top-0 left-0 h-full bg-musk-green"
      />
    </div>
  );
}
