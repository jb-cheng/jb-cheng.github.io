import { useEffect, useState } from "react";
import CPlusPlus from "../../assets/logos/CPlusPlus.svg";
import Java from "../../assets/logos/Java.svg";
import JS from "../../assets/logos/JS.svg";
import NodeJS from "../../assets/logos/NodeJS.svg";
import NumPy from "../../assets/logos/NumPy.svg";
import Python from "../../assets/logos/Python.svg";
import PyTorch from "../../assets/logos/PyTorch.svg";
import SQL from "../../assets/logos/SQL.svg";
import Tensorflow from "../../assets/logos/Tensorflow.svg";
import React from "../../assets/logos/React.svg";
import Docker from "../../assets/logos/Docker.svg";
import Azure from "../../assets/logos/Azure.svg";

const logos = [
  { src: Python, alt: "Python" },
  { src: Java, alt: "Java" },
  { src: CPlusPlus, alt: "C++" },
  { src: PyTorch, alt: "PyTorch" },
  { src: NumPy, alt: "NumPy" },
  { src: Tensorflow, alt: "TensorFlow" },
  { src: React, alt: "React" },
  { src: JS, alt: "JavaScript" },
  { src: NodeJS, alt: "Node.js" },
  { src: SQL, alt: "SQL" },
  { src: Docker, alt: "Docker" },
  { src: Azure, alt: "Azure" }
];


export default function LogoGrid() {
  const [activeLogo, setActiveLogo] = useState(null);

  // Change the active logo every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Choose a random logo to set as active
      setActiveLogo(Math.floor(Math.random() * logos.length));

      // Reset the active logo after 1 second
      setTimeout(() => {
        setActiveLogo(null);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-container">
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`logo ${index === activeLogo ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};