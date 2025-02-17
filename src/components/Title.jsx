export const Rings = () => {
    return (
        <div className="rings">
            <div className="overlap-group">
                <div className="ellipse" />

                <div className="div" />

                <div className="ellipse-2" />

                <div className="ellipse-3" />

                <div className="ellipse-4" />

                <div className="ellipse-5" />

                <div className="ellipse-6" />

                <div className="ellipse-7" />

                <div className="ellipse-8" />

                <div className="ellipse-9" />

                <div className="ellipse-10" />

                <div className="ellipse-11" />

                <div className="ellipse-12" />

                <div className="ellipse-13" />
            </div>
        </div>
    );
};


export default function ThreeColourBar({
    className,
    rectangleClassName,
    rectangleClassNameOverride,
    divClassName}) {
    return (
        <div className={`element-colour-bar ${className}`}>
            <div className={`rectangle ${rectangleClassName}`} />

            <div className={`div ${rectangleClassNameOverride}`} />

            <div className={`rectangle-2 ${divClassName}`} />
        </div>
    );
};