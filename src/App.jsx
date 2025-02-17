import '../styles.css';

import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;