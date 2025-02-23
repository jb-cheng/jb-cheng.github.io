import './styles.css';

import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';

import { useEffect, useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { motion } from "framer-motion";

function App() {
    const [loading, setLoading] = useState(true);

    // Loading screen for 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 750);
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
            <Landing />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <ScrollToTop/>
        </motion.div>
    );
}

export default App;