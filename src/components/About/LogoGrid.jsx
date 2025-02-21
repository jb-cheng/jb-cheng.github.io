import { useEffect, useState } from "react";

const logos = [
    { src: "../../assets/logos/CPlusPlus.svg", alt: "C++" },
    { src: "../../assets/logos/Java.svg", alt: "Java" },
    { src: "../../assets/logos/JS.svg", alt: "JavaScript" },
    { src: "../../assets/logos/NodeJS.svg", alt: "Node.js" },
    { src: "../../assets/logos/NumPy.svg", alt: "NumPy" },
    { src: "../../assets/logos/Python.svg", alt: "Python" },
    { src: "../../assets/logos/PyTorch.svg", alt: "PyTorch" },
    { src: "../../assets/logos/React.svg", alt: "React" },
    { src: "../../assets/logos/Tensorflow.svg", alt: "TensorFlow" },
  ];

const LogoGrid = () => {
  const [activeLogo, setActiveLogo] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(Math.floor(Math.random() * logos.length));

      setTimeout(() => {
        setActiveLogo(null);
      }, 1000); // Reset the effect after 1 second
    }, 2000); // Change logo every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={`transition-transform duration-500 ${
            index === activeLogo ? "scale-110" : "scale-100"
          }`}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

export default LogoGrid;
