import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#121316] py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-xs text-zinc-500 font-semibold tracking-wider uppercase">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social links connect */}
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Let's Connect
          </span>
          <div className="flex items-center gap-4">
            <a 
              aria-label="LinkedIn" 
              className="text-zinc-400 hover:text-white transition-colors duration-300 hover-target" 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiLinkedin className="h-4.5 w-4.5" />
            </a>
            <a 
              aria-label="GitHub" 
              className="text-zinc-400 hover:text-white transition-colors duration-300 hover-target" 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiGithub className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
