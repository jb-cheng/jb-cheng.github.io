import './Landing.css';

import UnderlineBar from './UnderlineBar';
import Rings from '../../assets/Rings.svg';
import NavItem from './NavItem';
import Donut from '../Donut';
import DownArrow from './DownArrow';

import RhinePause from '../../assets/RhinePause.png';
import AdAstra from '../../assets/AdAstra.mp3';

import { useState, useRef, useEffect } from 'react';

export default function Landing() {
  const [volume, setVolume] = useState(0.95);
  const audioRef = useRef(null);

  // Play/pause background music
  const handlePlayMusic = () => {
    const audio = audioRef.current;

    if (!audio) 
      return;
    
    if (audio.paused) 
      audio.play().catch(error => {
       console.log('Audio play failed:', error); 
      });
    else 
      audio.pause();
  };

  // Update audio volume when slider changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio)
      audio.volume = Number(volume);
  }, [volume]);

  return (
    <section id="landing">
      <audio
        id="landing-audio"
        ref={audioRef}
        src={AdAstra}
        preload="auto"
        loop
      />

      <div className="landing-donut">
        <Donut diameter={2000} colour='#2A2A2A' />
      </div>
      
      <img  // Play button for background music
        src={RhinePause}
        alt="Play/Pause: Ad Astra by Steven Grove"
        onClick={handlePlayMusic}
        title="Play/Pause: Ad Astra by Steven Grove"
        className="audio-play-pause"
      />

      <input
        className="audio-volume-slider"
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={volume}
        title={`Volume: ${Math.round(volume * 100)}%`}
        onChange={event => setVolume(event.target.valueAsNumber)}
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