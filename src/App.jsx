import './styles.css';
import './transitions.css';

import { useRef, useEffect, useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { motion } from "framer-motion";

import Landing from './components/Landing/Landing';
import ParticleBackground from './components/Landing/ParticleBackground';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import DotNav from './components/DotNav';

export default function App() {
  const [loading, setLoading] = useState(true);
  
  const [showTransition, setShowTransition] = useState(false);
  const [transitionOpacity, setTransitionOpacity] = useState('1');
  const [barWidth, setBarWidth] = useState('0');

  const [showDotNav, setShowDotNav] = useState(false);

  // Wait for all images and window resources to load
  useEffect(() => {
    const handleWindowLoad = () => setLoading(false);

    // If already loaded, set loading to false
    // Otherwise set listener
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleWindowLoad);
      return () => window.removeEventListener('load', handleWindowLoad);
    }
  }, []);

  // 3 colour bar transition after loading
  useEffect(() => {
    // Skip transition for initial mounting of loading state
    if (loading) return;

    setShowTransition(true);

    // Start bar animation after 50ms
    setTimeout(() => {
      setBarWidth('100vw');
    }, 50);

    // Start name fade out after 700ms
    setTimeout(() => {
      setTransitionOpacity('0');
    }, 700);

    // Remove all transition elements after 2.5s
    setTimeout(() => {
      setShowTransition(false);
    }, 2500);
  }, [loading]);

  // Show dot nav if distance between the top of the About section and the top of
  // the window is less than half of the viewport height
  // The origin (0,0) is the top left of the window
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');

    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 2)
        setShowDotNav(true);
      else
        setShowDotNav(false);
    }
  };

  // Add scroll event listener for displaying dot nav using handleScroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Loading Screen
  if (loading) {
    return (
      <div className="loading-screen">
        <PuffLoader color="#faf6e5" size={200} />
      </div>
    );
  }

  // Transition screen
  // i don't know why motion.div doesn't work here so i used transitionOpacity
  if (showTransition) {
    return (
      <div className="scanlines" style={{ opacity: transitionOpacity }}>
        <div className="transition-container" style={{ opacity: transitionOpacity }}>
          <div className="transition-circle" />
          <div className="transition-bar" style={{ width: barWidth, opacity: transitionOpacity }}>
            <div style={{ flex: 1, background: '#5C7F70', width: '100%' }} />
            <div style={{ flex: 1, background: '#BB8530', width: '100%' }} />
            <div style={{ flex: 1, background: '#802521', width: '100%' }} />
          </div>
          <div className="transition-name" style={{ opacity: transitionOpacity }}>
            JUN BIN CHENG
            <br />
            鄭俊斌
          </div>
        </div>
      </div>
    );
  }

  // The main app
  return (
    <motion.div // Fade in entire app after transition
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='particles-container'><ParticleBackground /></div>
      {showDotNav && <DotNav />}
      <Landing />
      <About />
      <Experience />
      <Projects />
    </motion.div>
  );
}