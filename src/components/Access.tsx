export function Access() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-white/10 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Join the Inner Circle</h2>
      <p className="text-white/50 max-w-md mb-12 font-light">
        Request access to exclusive activations, private events, and the DJLC digital ecosystem.
      </p>
      
      <form className="w-full max-w-md flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors rounded-none"
        />
        <button className="w-full mt-8 border border-white/20 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
          Request Access
        </button>
      </form>
      
      <div className="mt-24 text-xs text-white/30 font-mono tracking-widest uppercase">
        © 2030 DJ Lovers Club. All Rights Reserved.
      </div>
    </section>
  );
}
