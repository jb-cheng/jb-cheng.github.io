
import './styles.css';
import { useRef } from 'react';

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
  const [showTransition, setShowTransition] = useState(false);
  const [transitionDone, setTransitionDone] = useState(false);
  const [fadeOutName, setFadeOutName] = useState(false);
  const transitionRef = useRef(null);
  const [barWidth, setBarWidth] = useState('0');

  // Wait for all images and window resources to load
  useEffect(() => {
    const handleWindowLoad = () => setLoading(false);
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleWindowLoad);
      return () => window.removeEventListener('load', handleWindowLoad);
    }
  }, []);

  // Show 3 colour bar transition after loading
  useEffect(() => {
    let transitionEndHandler;
    let fallbackTimeout;
    if (!loading) {
      setShowTransition(true);
      setTimeout(() => {
        setBarWidth('100vw');
      }, 50); // allow render
      // Fade out name before bar fades out
      setTimeout(() => {
        setFadeOutName(true);
      }, 700);
      setTimeout(() => {
        if (transitionRef.current) {
          transitionRef.current.classList.add('bar-fade-out');
        }
      }, 1050);
      // Remove bar only after opacity transition ends
      transitionEndHandler = (e) => {
        if (e.propertyName === 'opacity') {
          setShowTransition(false);
          setTransitionDone(true);
        }
      };
      if (transitionRef.current) {
        transitionRef.current.addEventListener('transitionend', transitionEndHandler, { once: true });
      }
      // Fallback: ensure bar is removed after 2.5s
      fallbackTimeout = setTimeout(() => {
        setShowTransition(false);
        setTransitionDone(true);
      }, 2500);
    }
    return () => {
      if (transitionRef.current && transitionEndHandler) {
        transitionRef.current.removeEventListener('transitionend', transitionEndHandler);
      }
      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout);
      }
    };
  }, [loading]);

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


  if (loading || showTransition) {
    return (
      <>
        {loading && (
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#181818", zIndex: 1000}}>
            <PuffLoader color="#faf6e5" size={200} />
          </div>
        )}
        {showTransition && (
          <div className="scanlines loading-overlay">
            <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className='loading-circle'></div>
              <div
                ref={transitionRef}
                className="red-bar-transition"
                style={{
                  width: barWidth,
                  height: '18vh',
                  position: 'fixed',
                  left: 0,
                  top: '75%',
                  zIndex: 2000,
                  opacity: 1,
                  pointerEvents: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'width 1s cubic-bezier(0.77,0,0.175,1), opacity 1.2s cubic-bezier(0.77,0,0.175,1) 1s',
                }}
              >
                <div style={{ flex: 1, background: '#5C7F70', width: '100%' }}></div>
                <div style={{ flex: 1, background: '#BB8530', width: '100%' }}></div>
                <div style={{ flex: 1, background: '#802521', width: '100%' }}></div>
              </div>
              <div
                className={fadeOutName ? 'fade-out-name' : ''}
                style={{
                  position: 'absolute',
                  top: 'calc(10% + 10vh)',
                  left: 0,
                  width: '100vw',
                  textAlign: 'center',
                  fontSize: '10em',
                  fontWeight: 'bold',
                  color: '#f9ead3',
                  letterSpacing: '0.05em',
                  zIndex: 3000,
                  pointerEvents: 'none',
                  fontFamily: 'Poppins, Inter, Arial, sans-serif',
                  transition: 'opacity 1.2s cubic-bezier(0.77,0,0.175,1) 1s',
                  textShadow: '0 0 2px #fac16b, 0 0 2px #fac16b, 0 0 2px #fac16b',
                  userSelect: 'none'
                }}
              >
                JUN BIN CHENG
                <br/>
                鄭俊斌
              </div>
            </div>
          </div>
        )}
      </>
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
      <Landing />
      <About />
      <Experience />
      <Projects />
    </motion.div>
  );
}

export default App;