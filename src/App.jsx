import './styles.css';

import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop/>
    </div>
  );
}

export default App;