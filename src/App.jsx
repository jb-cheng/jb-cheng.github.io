import './styles.css';

import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import DotNav from './components/DotNav';

import { useEffect, useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { motion } from "framer-motion";

function App() {
    const [loading, setLoading] = useState(true);
    const [showDotNav, setShowDotNav] = useState(false);

    // Loading screen for 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    // Show dot nav when about section is in view
    const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                setShowDotNav(true);
            } else {
                setShowDotNav(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (loading) {
        return (<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    <PuffLoader
                        color="#faf6e5"
                        size={200}
                    />
                </div>
        );
    }

    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="text-center"
        >
            {showDotNav && <DotNav />}
            {//<ScrollToTop/>   // Don't need this because of the dot nav?  might put it back later idk
            }
            <Landing />
            <About />
            <Experience />
            <Projects />
            {//<Contact />
            }
        </motion.div>
    );
}

export default App;