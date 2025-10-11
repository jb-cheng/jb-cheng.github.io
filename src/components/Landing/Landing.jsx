import './Landing.css';

import UnderlineBar from './UnderlineBar';
import Rings from '../../assets/Rings.svg';
import NavItem from './NavItem';
import Donut from '../Donut';
import DownArrow from './DownArrow';

import RhinePause from '../../assets/RhinePause.png';
import AdAstra from '../../assets/AdAstra.mp3';

export default function Landing() {
  // Play/pause background music
  const handlePlayMusic = () => {
    const audio = document.getElementById('landing-audio');
    if (audio)
      if (audio.paused)
        audio.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      else
        audio.pause();
  };

  return (
    <section id="landing">
      <audio
        id="landing-audio"
        src={AdAstra}
        preload="auto"
        loop
      />

      <div className="landing-donut">
        <Donut diameter={2000} colour='#2A2A2A' />
      </div>
      
      <img  // Play button for background music
        src={RhinePause}
        alt="Play Music: Ad Astra by Steven Grove"
        onClick={handlePlayMusic}
        title="Ad Astra"
        className="audio-play-pause"
      />
      
      <div className="landing-container">
        {/* Title and Subtitle */}
        <div>
          <img src={Rings} alt="Concentric Rings" className="rings" />
          <div className="subtitle">4th Year Software Engineering Student</div>
          <h1 className="name">JUN BIN CHENG</h1>
          <UnderlineBar />
        </div>

        {/* Navigation Menu */}
        <div>
          <NavItem targetId="about">About Me</NavItem>
          <NavItem targetId="experience">Experience</NavItem>
          <NavItem targetId="projects">Projects</NavItem>
        </div>
      </div>
      <DownArrow />
    </section>
  );
}