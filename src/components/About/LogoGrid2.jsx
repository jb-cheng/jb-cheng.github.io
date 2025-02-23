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

const logos1 = [
    { src: CPlusPlus, alt: "C++" },
    { src: Java, alt: "Java" },
    { src: JS, alt: "JavaScript" },
    { src: NodeJS, alt: "Node.js" },
    { src: NumPy, alt: "NumPy" },
    { src: Python, alt: "Python" },
    { src: PyTorch, alt: "PyTorch" },
    { src: SQL, alt: "SQL" },
    { src: Tensorflow, alt: "TensorFlow" },
];

const logos2 = [
    { src: React, alt: "React" },
    // TODO: add 8 more
    { src: Java, alt: "Java" },
    { src: JS, alt: "JavaScript" },
    { src: NodeJS, alt: "Node.js" },
    { src: NumPy, alt: "NumPy" },
    { src: Python, alt: "Python" },
    { src: PyTorch, alt: "PyTorch" },
    { src: SQL, alt: "SQL" },
    { src: Tensorflow, alt: "TensorFlow" },
];


export default function LogoGrid() {
    const [activeLogo, setActiveLogo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Get logos based on the current page
    const logos = currentPage === 1 ? logos1 : logos2;


    // Set the page every 5 seconds
    useEffect(() => {
        const pageSwitchInterval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage === 1 ? 2 : 1));
        }, 5000); // Change page every 5 seconds
    
        return () => clearInterval(pageSwitchInterval);
    }, []);


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
    }, [logos]);

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