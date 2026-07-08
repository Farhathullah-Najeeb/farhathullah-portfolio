import { useState, useEffect } from 'react';
import { personal } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out px-4 sm:px-6 ${
      scrolled ? 'top-4 sm:top-6' : 'top-0'
    }`}>
      <div className={`w-full transition-all duration-500 ease-out flex flex-col md:flex-row md:items-center justify-between ${
        scrolled 
          ? 'max-w-5xl bg-[#16171a]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] rounded-[1.8rem] md:rounded-full px-6 py-3.5 md:py-3 gap-4' 
          : 'max-w-6xl border-b border-white/[0.03] py-6 px-0'
      }`}>
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo brand */}
          <a href="#home" className="text-2xl font-normal tracking-wide text-white hover-target" style={{ fontFamily: 'var(--font-serif), serif' }}>
            Farhath
            <span className="text-zinc-500 font-sans font-normal text-lg">.</span>
          </a>

          {/* Mobile hamburger menu */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors hover-target" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-5 w-5">
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links */}
        <nav className={`md:flex items-center gap-1.5 ${isOpen ? 'flex flex-col pt-4 md:pt-0 pb-2 md:pb-0' : 'hidden'}`}>
          <a href="#home" onClick={() => setIsOpen(false)} className="relative py-1.5 px-3 rounded-full hover:bg-white/[0.03] border border-transparent hover:border-white/[0.02] text-[10px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 hover-target w-full md:w-auto text-center">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="relative py-1.5 px-3 rounded-full hover:bg-white/[0.03] border border-transparent hover:border-white/[0.02] text-[10px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 hover-target w-full md:w-auto text-center">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="relative py-1.5 px-3 rounded-full hover:bg-white/[0.03] border border-transparent hover:border-white/[0.02] text-[10px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 hover-target w-full md:w-auto text-center">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="relative py-1.5 px-3 rounded-full hover:bg-white/[0.03] border border-transparent hover:border-white/[0.02] text-[10px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 hover-target w-full md:w-auto text-center">Contact</a>
        </nav>

        {/* Right side CTA Let's talk */}
        <div className={`md:block ${isOpen ? 'block pt-2' : 'hidden'}`}>
          <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="block w-full text-center">
            <button className="inline-flex items-center justify-center transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer btn-silver h-9 px-4 text-[11px] uppercase tracking-wider font-semibold gap-1 rounded-full hover-target w-full md:w-auto">
              Let's Talk 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-3.5 w-3.5">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
