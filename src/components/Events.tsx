export function Events() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/10">
      <div className="mb-16 md:mb-32">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">02 // Activations</h2>
        <p className="text-3xl md:text-5xl font-serif max-w-3xl leading-tight">
          Curating intimate, high-end experiences in the world's electronic music capitals.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/miami/1920/800" 
            alt="Rooftop Sessions" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Miami Music Week</div>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">Rooftop Sessions</h3>
            <p className="text-white/70 max-w-md">Elite gatherings featuring industry-leading talent like Jake Shore and DJ Susan.</p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/amsterdam/1920/800" 
            alt="Water Ways" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">Amsterdam (ADE) & Miami</div>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">Water Ways</h3>
            <p className="text-white/70 max-w-md">High-end annual yacht parties emphasizing intimacy and exclusive performances.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
