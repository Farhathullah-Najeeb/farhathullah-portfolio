import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-dashed border-[#1A1A1A]/10 bg-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-xs text-zinc-500 font-bold tracking-wider uppercase font-mono">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social links connect */}
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase font-mono">
            Let's Connect
          </span>
          <div className="flex items-center gap-4">
            <a 
              aria-label="LinkedIn" 
              className="text-zinc-600 hover:text-[#1A1A1A] hover:bg-yellow-100 p-1.5 border border-transparent hover:border-[#1A1A1A]/10 rounded-lg transition-all duration-300 hover-target" 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiLinkedin className="h-4.5 w-4.5" />
            </a>
            <a 
              aria-label="GitHub" 
              className="text-zinc-600 hover:text-[#1A1A1A] hover:bg-yellow-100 p-1.5 border border-transparent hover:border-[#1A1A1A]/10 rounded-lg transition-all duration-300 hover-target" 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiGithub className="h-4.5 w-4.5" />
            </a>
            <a 
              aria-label="Instagram" 
              className="text-zinc-600 hover:text-[#1A1A1A] hover:bg-yellow-100 p-1.5 border border-transparent hover:border-[#1A1A1A]/10 rounded-lg transition-all duration-300 hover-target" 
              href={personal.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiInstagram className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
