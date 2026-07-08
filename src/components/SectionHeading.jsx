export default function SectionHeading({ label, heading }) {
  return (
    <div className="fade-up">
      {label && <div className="section-label">{label}</div>}
      {heading && <h2 className="section-heading">{heading}</h2>}
    </div>
  );
}
