import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Sidebar = ({ text, scrollAmount}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > scrollAmount); // Adjust threshold as needed
        };

        // Run immediately on page load to check initial scroll position
        handleScroll(); 

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sidebar">
            <motion.h1
                className="side-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
            >
                {text}
            </motion.h1>
        </div>
    );
};

export default Sidebar;
