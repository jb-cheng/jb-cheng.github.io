import '../styles.css';

export default function SectionDivider({ text, bottomPos = 0 }) {
  return (
    <div className="section-divider" style={{ bottom: bottomPos }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="section-divider-text">{text}</span>
      ))}
    </div>
  );
}