import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiGithub, FiExternalLink, FiArrowRight, FiAward, FiCode } from 'react-icons/fi';
import { useState, useRef, useCallback } from 'react';
import '../styles/projects.css';

export default function ProjectsSection() {
  useScrollAnimation();
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef({});
  const timeoutRef = useRef(null);

  const handleMouseMove = useCallback((e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback((id) => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Use a small delay to prevent flickering
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null);
      setMousePosition({ x: 0, y: 0 });
      timeoutRef.current = null;
    }, 50);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <SectionHeading label="03 / Portfolio" heading="Featured Projects" />

        <div className="projects-grid">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;
            const rotateX = isHovered ? mousePosition.y * -8 : 0;
            const rotateY = isHovered ? mousePosition.x * 8 : 0;
            const translateZ = isHovered ? 20 : 0;

            return (
              <div
                key={project.id}
                className="project-card-wrapper"
                ref={el => cardRefs.current[project.id] = el}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
              >
                <div
                  className={`project-card card fade-up ${isHovered ? 'hovered' : ''}`}
                  style={{
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                    transition: isHovered ? 'none' : 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Glow Effect */}
                  <div
                    className="project-card-glow"
                    style={{
                      background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(37, 99, 235, 0.15) 0%, transparent 70%)`,
                      opacity: isHovered ? 1 : 0
                    }}
                  />

                  {/* Border Gradient Animation */}
                  <div className="project-card-border" />

                  <div className="project-card-header">
                    <div className="project-header-left">
                      <span className="project-number">{project.id.padStart(2, '0')}</span>
                      {project.badge && (
                        <span className="project-badge-custom">
                          <FiAward className="badge-icon" />
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="project-header-right">
                      {project.link && (
                        <span className="project-status-badge live">
                          <span className="status-dot" />
                          Live
                        </span>
                      )}
                      {!project.link && project.badge && (
                        <span className="project-status-badge demo">
                          <span className="status-dot" />
                          Demo Available
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="project-body">
                    {project.category && (
                      <span className="project-category">{project.category}</span>
                    )}
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-desc">{project.desc}</p>

                    <div className="project-metrics">
                      {project.metrics && project.metrics.map((metric, idx) => (
                        <div key={idx} className="project-metric">
                          <span className="metric-value">{metric.value}</span>
                          <span className="metric-label">{metric.label}</span>
                        </div>
                      ))}
                      {!project.metrics && (
                        <>
                          <div className="project-metric">
                            <span className="metric-value">⭐ 4.5+</span>
                            <span className="metric-label">Rating</span>
                          </div>
                          <div className="project-metric">
                            <span className="metric-value">✓</span>
                            <span className="metric-label">Production</span>
                          </div>
                        </>
                      )}
                    </div>

                    {project.tags && (
                      <div className="project-tags">
                        {project.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="project-footer">
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link hover-target"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub /> Code
                        </a>
                      )}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link primary hover-target"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo <FiExternalLink />
                        </a>
                      ) : (
                        <a
                          href="#contact"
                          className="project-link primary hover-target"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Request Demo <FiArrowRight />
                        </a>
                      )}
                    </div>

                    <div className="project-tech-stack">
                      <FiCode className="tech-icon" />
                      <span>{project.techCount || project.tags?.length || 4} technologies</span>
                    </div>
                  </div>

                  {/* Particle Effects */}
                  {isHovered && (
                    <div className="project-particles">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="particle"
                          style={{
                            '--delay': `${i * 0.05}s`,
                            '--x': `${(Math.random() - 0.5) * 200}%`,
                            '--y': `${(Math.random() - 0.5) * 200}%`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}