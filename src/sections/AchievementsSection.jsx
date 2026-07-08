import { achievements } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useRef, useEffect } from 'react';
import '../styles/achievements.css';

export default function AchievementsSection() {
  useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counting animation
          achievements.forEach((item, idx) => {
            const metric = item.metric;
            const numMatch = metric.match(/(\d+\.?\d*)/);
            if (numMatch) {
              const target = parseFloat(numMatch[1]);
              const suffix = metric.replace(numMatch[0], '');
              let start = 0;
              const duration = 2000;
              const step = Math.max(1, target / 60);
              const timer = setInterval(() => {
                start += step;
                if (start >= target) {
                  start = target;
                  clearInterval(timer);
                }
                setCounters(prev => ({
                  ...prev,
                  [idx]: {
                    value: Math.floor(start) + suffix,
                    raw: start
                  }
                }));
              }, 30);
            } else {
              setCounters(prev => ({
                ...prev,
                [idx]: { value: metric, raw: 0 }
              }));
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="achievements-section"
      id="achievements"
    >
      {/* Background Decorations */}
      <div className="achievements-bg-decoration">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="achievements-container">
        <div className="fade-up">
          <div className="section-label">
            <span className="label-icon">⚡</span>
            Performance Indicators
          </div>
          <h2 className="section-heading">Key Achievements</h2>
          <p className="section-subtitle">
            Proven track record of delivering exceptional results in fintech and mobile development
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const displayValue = counters[idx]?.value || item.metric;

            return (
              <div
                key={idx}
                className={`achievement-card-wrapper fade-up delay-${idx}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`achievement-card ${isHovered ? 'hovered' : ''}`}>
                  {/* Glow Effect */}
                  <div className="achievement-glow"></div>

                  {/* Border Animation */}
                  <div className="achievement-border"></div>

                  {/* Icon with animated ring */}
                  <div className="achievement-icon-wrapper">
                    <div className="achievement-icon-ring">
                      <svg viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          className="ring-path"
                          style={{
                            strokeDasharray: isHovered ? '283' : '0',
                            strokeDashoffset: isHovered ? '0' : '283',
                            transition: 'stroke-dasharray 0.8s ease, stroke-dashoffset 0.8s ease'
                          }}
                        />
                      </svg>
                    </div>
                    <div className="achievement-icon">{item.icon}</div>
                  </div>

                  <div className="achievement-content">
                    <div className="achievement-metric-wrapper">
                      <span className="achievement-metric">{displayValue}</span>
                      {isHovered && (
                        <span className="achievement-sparkle">✨</span>
                      )}
                    </div>
                    <div className="achievement-detail">{item.detail}</div>
                  </div>

                  {/* Progress Bar */}
                  <div className="achievement-progress">
                    <div
                      className="achievement-progress-bar"
                      style={{
                        width: isHovered ? '100%' : `${(idx + 1) * 20}%`,
                        transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    ></div>
                  </div>

                  {/* Number Indicator */}
                  <div className="achievement-number">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Particle Effects on Hover */}
                  {isHovered && (
                    <div className="achievement-particles">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="achievement-particle"
                          style={{
                            '--delay': `${i * 0.06}s`,
                            '--tx': `${(Math.random() - 0.5) * 150}%`,
                            '--ty': `${(Math.random() - 0.5) * 150}%`,
                            '--size': `${2 + Math.random() * 4}px`
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

        {/* Bottom Decoration */}
        <div className="achievements-bottom-decoration">
          <div className="achievement-stats-bar">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Production Apps</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.5★</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}