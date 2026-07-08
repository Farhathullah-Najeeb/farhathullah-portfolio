import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personal } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiArrowRight } from 'react-icons/fi';
import '../styles/contact.css';

export default function ContactSection() {
  useScrollAnimation();
  const [btnText, setBtnText] = useState('Send Message');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Message sent ✓');
    setSuccess(true);
    e.target.reset();

    setTimeout(() => {
      setBtnText('Send Message');
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <SectionHeading label="05 / Connect" heading="Get In Touch" />
      
      <div className="contact-grid">
        {/* Left column: Info cards */}
        <div className="contact-info fade-up">
          <p className="text-body" style={{ marginBottom: '2rem' }}>
            Have a startup concept, project idea, or seeking a highly technical Flutter architect? Reach out directly. I usually respond within a business day.
          </p>
          
          <a href={`mailto:${personal.email}`} className="contact-info-card hover-target">
            <div className="contact-info-card-icon">
              <FiMail />
            </div>
            <div className="contact-info-card-details">
              <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>Email Me</span>
              <span className="text-title" style={{ marginTop: '0.2rem', fontSize: '1rem' }}>{personal.email}</span>
            </div>
          </a>

          <a href={`tel:${personal.phone}`} className="contact-info-card hover-target">
            <div className="contact-info-card-icon">
              <FiPhone />
            </div>
            <div className="contact-info-card-details">
              <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>Call / Text</span>
              <span className="text-title" style={{ marginTop: '0.2rem', fontSize: '1rem' }}>{personal.phone}</span>
            </div>
          </a>

          {personal.location && (
            <div className="contact-info-card hover-target">
              <div className="contact-info-card-icon">
                <FiMapPin />
              </div>
              <div className="contact-info-card-details">
                <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>Location</span>
                <span className="text-title" style={{ marginTop: '0.2rem', fontSize: '1rem' }}>{personal.location}</span>
              </div>
            </div>
          )}

          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-card hover-target">
            <div className="contact-info-card-icon">
              <FiLinkedin />
            </div>
            <div className="contact-info-card-details">
              <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>LinkedIn</span>
              <span className="text-title" style={{ marginTop: '0.2rem', fontSize: '1rem' }}>Connect professionally</span>
            </div>
          </a>
        </div>

        {/* Right column: Form */}
        <div className="contact-form-wrapper fade-up delay-2">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="form-name" className="text-caption" style={{ marginBottom: '0.5rem' }}>Your Name</label>
                <input type="text" id="form-name" className="form-input hover-target" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="form-email" className="text-caption" style={{ marginBottom: '0.5rem' }}>Your Email</label>
                <input type="email" id="form-email" className="form-input hover-target" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="form-subject" className="text-caption" style={{ marginBottom: '0.5rem' }}>Subject</label>
              <input type="text" id="form-subject" className="form-input hover-target" placeholder="Mobile App Project" required />
            </div>
            <div className="form-group">
              <label htmlFor="form-message" className="text-caption" style={{ marginBottom: '0.5rem' }}>Message</label>
              <textarea id="form-message" className="form-textarea hover-target" placeholder="Hi Farhath, let's build something awesome..." required></textarea>
            </div>
            <div className="submit-btn-container">
              <button
                type="submit"
                className="btn-primary hover-target"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: success ? '#10b981' : 'var(--accent)'
                }}
                disabled={success}
              >
                {btnText} {!success && <FiArrowRight />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
