import './About.css'

import { useEffect, useState } from "react";

import CPlusPlus from "../../assets/skills/CPlusPlus.svg";
import Java from "../../assets/skills/Java.svg";
import JS from "../../assets/skills/JS.svg";
import NodeJS from "../../assets/skills/NodeJS.svg";
import NumPy from "../../assets/skills/NumPy.svg";
import Python from "../../assets/skills/Python.svg";
import PyTorch from "../../assets/skills/PyTorch.svg";
import SQL from "../../assets/skills/SQL.svg";
import Tensorflow from "../../assets/skills/Tensorflow.svg";
import React from "../../assets/skills/React.svg";
import Docker from "../../assets/skills/Docker.svg";
import Azure from "../../assets/skills/Azure.svg";

export default function LogoGrid() {
  const [activeLogo, setActiveLogo] = useState(null);

  const skills = [
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

  // Change the active logo every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(Math.floor(Math.random() * skills.length));

      // Reset the active logo after 1 second
      setTimeout(() => {
        setActiveLogo(null);
      }, 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    
        <div className="logo-grid">
          {skills.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`logo ${index === activeLogo ? "active" : ""}`}
            />
          ))}
        </div>
      
  );
};