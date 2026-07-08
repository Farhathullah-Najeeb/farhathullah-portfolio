import { useEffect, useState, useRef } from 'react';
import { personal, stats } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/hero.css';

// Count up animation when stats come into view
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const numeric = parseInt(end);
      if (isNaN(numeric)) { setCount(end); return; }
      let start = 0;
      const step = numeric / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= numeric) { setCount(end); clearInterval(timer); }
        else setCount(Math.floor(start) + (end.toString().includes('+') ? '+' : ''));
      }, 16);
      observer.disconnect();
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return [count, ref];
};

function StatItem({ stat }) {
  const [count, ref] = useCountUp(stat.number);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count}</div>
      <div className="stat-label" dangerouslySetInnerHTML={{ __html: stat.label.replace(' ', '<br />') }} />
    </div>
  );
}

export default function HeroSection() {
  useScrollAnimation();
  const [roleText, setRoleText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = personal.typewriterRoles[wordIdx];
    let typingTimer;

    if (isDeleting) {
      typingTimer = setTimeout(() => {
        setRoleText(currentWord.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      }, 55);
    } else {
      typingTimer = setTimeout(() => {
        setRoleText(currentWord.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }, 110);
    }

    if (!isDeleting && charIdx === currentWord.length) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % personal.typewriterRoles.length);
    }

    return () => clearTimeout(typingTimer);
  }, [charIdx, isDeleting, wordIdx]);

  return (
    <section id="home">
      <div className="hero-text-col fade-up">
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div className="hero-badge" style={{ marginBottom: 0 }}>
            <span className="badge-dot"></span> Available for opportunities
          </div>
          {personal.location && (
            <div className="hero-badge" style={{ marginBottom: 0 }}>
              📍 {personal.location}
            </div>
          )}
        </div>
        
        <h1 className="hero-name">
          Farhathullah<br />Najeeb
        </h1>
        
        {personal.subtitle && (
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem', fontWeight: 500 }}>
            {personal.subtitle}
          </div>
        )}
        
        <div className="hero-subtitle text-title" style={{ marginTop: '1.5rem' }}>
          I'm a <span>{roleText}</span><span className="typewriter-cursor">|</span>
        </div>
        
        <p className="hero-bio">
          {personal.bio}
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn-primary hover-target">
            View My Work <FiArrowRight />
          </a>
          <a href={`mailto:${personal.email}`} className="btn-secondary hover-target">
            Get In Touch
          </a>
        </div>
        
        <div className="social-links">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-link hover-target" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link hover-target" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="social-link hover-target" aria-label="Instagram">
            <FiInstagram />
          </a>
        </div>
        
        <div className="stats-row">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>
      </div>
      
      <div className="hero-img-col fade-up delay-2">
        <img
          src={personal.heroImage}
          onError={(e) => { e.target.onerror = null; e.target.src = personal.aboutImage; }}
          alt={personal.name}
          className="hero-photo hover-target"
        />
      </div>
    </section>
  );
}
