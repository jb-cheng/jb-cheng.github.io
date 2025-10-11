export default function TiltImage({ src, alt, className, style }) {
  const THRESHOLD = 20;

  // Handle mouse movement over the image to apply tilt effect
  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const offsetLeft = currentTarget.getBoundingClientRect().left;
    const offsetTop = currentTarget.getBoundingClientRect().top;
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  };

  // Reset styles when mouse leaves the image
  const resetStyles = (e) => {
    e.currentTarget.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
      draggable={false}
    />
  );
}