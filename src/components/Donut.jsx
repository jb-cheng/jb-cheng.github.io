import '../Styles.css';

const Donut = ({ size = 200, colors = ['red', '#EB9974', '#333333', '#666666'] }) => {
    const center = size / 2;
    const maxRadius = size / 2 - 10; // Leave some padding

    const thicknesses = [32, 55, 95, 140]; // Outer to inner ring thicknesses
    const gaps = [22, 30, 40]; // Outer to inner gaps
    
    // Calculate radii for each ring
    const rings = [];
    let currentRadius = maxRadius;
    
    for (let i = 0; i < 4; i++) {
        const thickness = thicknesses[i];
        const outerRadius = currentRadius;
        const innerRadius = currentRadius - thickness;
        
        rings.push({
            outerRadius,
            innerRadius,
            thickness,
            color: colors[i]
        });
        
        // Use different gap for each ring (except the last one)
        if (i < 3) {
            currentRadius = innerRadius - gaps[i];
        }
    }
    
    return (
        <div className="donut-background">
            <div className="donut-container">
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    {rings.map((ring, index) => {
                        const circumference = 2 * Math.PI * ((ring.outerRadius + ring.innerRadius) / 2);
                        
                        return (
                            <circle
                                key={index}
                                cx={center}
                                cy={center}
                                r={(ring.outerRadius + ring.innerRadius) / 2}
                                fill="none"
                                stroke={ring.color}
                                strokeWidth={ring.thickness}
                                className={`donut-ring ring-${index + 1}`}
                                style={{
                                    strokeDasharray: circumference,
                                    strokeDashoffset: circumference,
                                    animation: `fillRing 1.5s ease-out ${index * 0.2}s forwards`
                                }}
                            />
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default Donut;