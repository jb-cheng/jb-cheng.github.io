
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

  // Show red bar transition after loading
  useEffect(() => {
    let transitionEndHandler;
    let fallbackTimeout;
    if (!loading) {
      setShowTransition(true);
      setTimeout(() => {
        if (transitionRef.current) {
          transitionRef.current.classList.add('bar-slide-up');
        }
      }, 50); // allow render
        // Fade out name before bar fades out
        setTimeout(() => {
          setFadeOutName(true);
        }, 700); // fade out name earlier
      setTimeout(() => {
        if (transitionRef.current) {
          transitionRef.current.classList.add('bar-fade-out');
        }
      }, 1050); // after slide up

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
                  <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                    <div ref={transitionRef} className="red-bar-transition">
                      <div className="bar-colors-container">
                        <div className="bar-left" />
                        <div className="bar-center" />
                        <div className="bar-right" />
                      </div>
                    </div>
                    {/* Stationary name behind bar */}
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
                        color: '#faf6e5',
                        letterSpacing: '0.05em',
                        zIndex: 1999,
                        pointerEvents: 'none',
                        fontFamily: 'Poppins, Inter, Arial, sans-serif',
                        transition: 'opacity 1.2s cubic-bezier(0.77,0,0.175,1) 1s'
                      }}
                    >
                      JUN BIN CHENG
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