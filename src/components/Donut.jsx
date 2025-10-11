import '../styles.css';

export default function Donut({ diameter, colour }) {
  const rings = [];

  const center = diameter / 2;
  const maxRadius = diameter / 2 - 10;    // 10px padding because it might get clipped by the SVG viewbox

  const thicknesses = [32, 55, 95, 140];  // Outer to inner ring thicknesses
  const gaps = [22, 30, 40];              // Outer to inner gaps thicknesses
  
  // Calculate radii for each ring
  // - outerRadius: outer edge of the ring = previous innerRadius - gap
  // - innerRadius: inner edge of the ring = outerRadius - thickness
  // - Start from the outermost ring with outerRadius = maxRadius
  let outerRadius = maxRadius;
  for (let i = 0; i < thicknesses.length; i++) {
    const thickness = thicknesses[i];
    const innerRadius = outerRadius - thickness;

    rings.push({
      outerRadius,
      innerRadius,
      thickness,
      colour
    });
    
    if (i < thicknesses.length - 1)
      outerRadius = innerRadius - gaps[i];
  }
  
  return (
    <div className="donut-container">
      <svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}>
        {rings.map((ring, index) => {
          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={(ring.outerRadius + ring.innerRadius) / 2}
              fill="none"
              stroke={ring.colour}
              strokeWidth={ring.thickness}
              className="donut-ring"
            />
          );
        })}
      </svg>
    </div>
  );
}