import { personal } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import '../styles/footer.css';

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-container">
        <a href="#home" className="footer-brand hover-target">
          Farhath<span>.dev</span>
        </a>
        
        <p className="footer-copy">
          Built with ♥ by Farhathullah Najeeb · &copy; 2025
        </p>
        
        <div className="footer-socials">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="footer-social-link hover-target" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link hover-target" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link hover-target" aria-label="Instagram">
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
