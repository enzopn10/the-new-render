const FAM = [
  'RÜFÜS DU SOL', 'Tiësto', 'John Summit', 'Fred again..', 'Anyma', 'Skrillex', 'Fisher'
];

export function Network() {
  return (
    <section className="py-32 border-t border-white/10 overflow-hidden">
      <div className="px-6 md:px-12 mb-16">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">03 // The Fam</h2>
        <p className="text-3xl md:text-5xl font-serif max-w-3xl leading-tight">
          A global network featuring the <span className="italic">who's who</span> of dance music.
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden py-12">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {FAM.map((artist, i) => (
            <span key={i} className="text-[10vw] font-medium tracking-tighter uppercase mx-8 text-white/20 hover:text-white transition-colors cursor-default">
              {artist}
            </span>
          ))}
          {FAM.map((artist, i) => (
            <span key={`dup-${i}`} className="text-[10vw] font-medium tracking-tighter uppercase mx-8 text-white/20 hover:text-white transition-colors cursor-default">
              {artist}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
