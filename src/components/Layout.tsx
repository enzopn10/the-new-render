import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Mail, MessageSquare, Sun, Moon } from 'lucide-react';

const SERVICES = [
  { name: 'Architectural Rendering', path: '/services/architectural-rendering' },
  { name: 'Exterior Rendering', path: '/services/exterior-rendering' },
  { name: 'Interior Rendering', path: '/services/interior-rendering' },
  { name: '3D Floor Plans', path: '/services/3d-floor-plans' },
  { name: '2D Floor Plans', path: '/services/2d-floor-plans' },
  { name: 'Site Plan Rendering', path: '/services/site-plan-rendering' },
  { name: 'Real Estate Rendering', path: '/services/real-estate-rendering' },
];

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', dropdown: true },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-zinc-900 dark:text-white selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md py-4 shadow-sm dark:shadow-none border-b border-zinc-100 dark:border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-2">
            <Logo />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.2em] uppercase">The New Render</span>
              <span className="text-[10px] text-zinc-400 dark:text-white/40 tracking-[0.1em] uppercase">Premium Visualization</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.path} className="relative group">
                <Link 
                  to={link.path}
                  className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${location.pathname === link.path ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white'}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={10} className="inline-block ml-1 opacity-50" />}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white dark:bg-[#0a0a0a] border border-zinc-100 dark:border-white/10 p-4 w-64 shadow-2xl">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block py-2 text-[10px] font-medium tracking-widest uppercase text-zinc-400 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link 
              to="/contact"
              className="bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-zinc-800 dark:hover:bg-white/90 transition-all"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-zinc-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#050505] pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.path} className="space-y-4">
                  <Link 
                    to={link.path}
                    className="text-2xl font-medium tracking-tight uppercase block"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col gap-3 border-l border-zinc-100 dark:border-white/10">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="text-sm text-zinc-400 dark:text-white/40 uppercase tracking-widest"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/contact"
                className="mt-8 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 text-xs font-bold tracking-widest uppercase text-center"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-[#0a0a0a] border-t border-zinc-100 dark:border-white/5 pt-24 pb-12 px-6 relative overflow-hidden">
        {/* Background 3D flair */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-musk-green/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-musk-green/5 rounded-full -ml-48 -mb-48 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <Logo />
              <span className="text-sm font-bold tracking-[0.2em] uppercase group-hover:text-musk-green transition-colors">The New Render</span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-white/40 font-light leading-relaxed">
              A premium architectural visualization studio helping realtors, developers, and architects present projects with clarity and confidence.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" label="Instagram" />
              <SocialLink href="#" label="LinkedIn" />
              <SocialLink href="#" label="Behance" />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/20 mb-8">Services</h4>
            <div className="flex flex-col gap-4">
              {SERVICES.map((service) => (
                <Link key={service.path} to={service.path} className="text-xs text-zinc-500 dark:text-white/50 hover:text-musk-green transition-colors">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/20 mb-8">Company</h4>
            <div className="flex flex-col gap-4">
              <Link to="/portfolio" className="text-xs text-zinc-500 dark:text-white/50 hover:text-musk-green transition-colors">Portfolio</Link>
              <Link to="/pricing" className="text-xs text-zinc-500 dark:text-white/50 hover:text-musk-green transition-colors">Pricing</Link>
              <Link to="/about" className="text-xs text-zinc-500 dark:text-white/50 hover:text-musk-green transition-colors">About</Link>
              <Link to="/contact" className="text-xs text-zinc-500 dark:text-white/50 hover:text-musk-green transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/20 mb-8">Contact</h4>
            <div className="flex flex-col gap-6">
              <a href="mailto:info@thenewrender.com" className="flex items-center gap-3 text-xs text-zinc-500 dark:text-white/50 hover:text-musk-green transition-colors">
                <Mail size={14} />
                info@thenewrender.com
              </a>
              <a href="tel:+13058972291" className="flex items-center gap-3 text-xs text-zinc-500 dark:text-white/50 hover:text-musk-green transition-colors">
                <Phone size={14} />
                +1 (305) 897-2291
              </a>
              <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-white/50">
                <MessageSquare size={14} />
                Orlando, Florida
              </div>
              <Link to="/contact" className="inline-block border border-zinc-200 dark:border-white/20 px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-musk-green hover:border-musk-green hover:text-white transition-all text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-[10px] text-zinc-400 dark:text-white/20 tracking-widest uppercase">
            © 2026 The New Render. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[10px] text-zinc-400 dark:text-white/20 tracking-widest uppercase">
            <Link to="/locations/orlando-architectural-rendering" className="hover:text-musk-green transition-colors">Orlando</Link>
            <Link to="/locations/florida-real-estate-rendering" className="hover:text-musk-green transition-colors">Florida</Link>
            <Link to="/solutions/renderings-for-realtors" className="hover:text-musk-green transition-colors">Realtors</Link>
            <Link to="/solutions/renderings-for-developers" className="hover:text-musk-green transition-colors">Developers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-musk-green">
      <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M12 4V20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-white/30 hover:text-musk-green transition-colors">
      {label}
    </a>
  );
}
