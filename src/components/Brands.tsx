const BRANDS = [
  { name: 'DJ Lovers Club', followers: '1.4M', views: '1.1M', desc: 'The Flagship' },
  { name: 'Bobby H', followers: '3.0M', views: '6.5M', desc: 'Artist & Influencer' },
  { name: 'EDM Lovers Club', followers: '5.0M', views: '12M', desc: 'Community Hub' },
  { name: 'EDM Lifestyle', followers: '4.8M', views: '10M', desc: 'Culture & Apparel' },
];

export function Brands() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/10">
      <div className="mb-16 md:mb-32">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">01 // The Ecosystem</h2>
        <p className="text-3xl md:text-5xl font-serif max-w-3xl leading-tight">
          A digital powerhouse commanding over <span className="italic">90 million</span> followers across the global dance music landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {BRANDS.map((brand, i) => (
          <div key={i} className="bg-[#050505] p-8 md:p-12 flex flex-col justify-between aspect-square group hover:bg-[#0a0a0a] transition-colors">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-8">{brand.desc}</div>
              <h3 className="text-2xl font-medium tracking-tight">{brand.name}</h3>
            </div>
            <div>
              <div className="text-4xl font-light tracking-tighter mb-1">{brand.followers}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">Followers</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
