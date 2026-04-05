import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Subtle atmospheric background */}
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#050505]/50 dark:to-[#050505] z-10" />
        <img 
          src="https://picsum.photos/seed/miaminight/1920/1080?blur=4" 
          alt="Miami Skyline" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="perspective-1000"
        >
          <h1 className="text-[12vw] leading-[0.85] font-medium tracking-tighter uppercase text-zinc-900 dark:text-white">
            The New
            <br />
            <span className="text-musk-green dark:text-musk-green-light italic font-serif lowercase drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">Render</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 md:mt-24 max-w-md"
        >
          <p className="text-sm md:text-base text-zinc-500 dark:text-white/60 font-light leading-relaxed">
            Premium architectural visualization and real estate rendering studio serving Orlando and beyond. We bring your vision to life with precision and speed.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex gap-6"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">100+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">Projects</span>
            </div>
            <div className="w-px h-12 bg-zinc-200 dark:bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">24h</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">Turnaround</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating 3D Elements (Visual flair) */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotateZ: [0, 5, 0],
          rotateX: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-musk-green/20 dark:border-white/5 rounded-full hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotateZ: [0, -10, 0],
          rotateY: [0, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-musk-green/10 dark:border-white/5 rounded-xl hidden lg:block"
      />
    </section>
  );
}
