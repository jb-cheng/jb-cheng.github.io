import './Landing.css';

import WideThreeColourBar from './WideThreeColourBar';
import Rings from '../../assets/Rings.svg';
import DownArrow from './DownArrow';
import NavItem from './NavItem';
import ParticleBackground from './ParticleBackground';
import Donut from '../Donut';
import RhinePause from '../../assets/RhinePause.png';
import AdAstra from '../../assets/AdAstraQuiet.mp3';

export default function Landing() {
    // Play Music on Click
    const handlePlayMusic = () => {
        const audio = document.getElementById('landing-audio');
        if (audio) {
            if (audio.paused) {
                audio.play().catch(error => {
                    console.log('Audio play failed:', error);
                });
            } else {
                audio.pause();
            }
        }
    };

    return (
        <section
            id="landing"
            style={{ backgroundColor: "#181818", overflow: "hidden"}}
        >
            <audio
                id="landing-audio"
                src={AdAstra}
                preload="auto"
                volume={0.005}
                loop
                style={{ display: 'none' }}
            />
            <div
                style={{ opacity: 0.15 }}
            >
                <Donut size={2000} colors={['#2A2A2A', '#2A2A2A', '#2A2A2A', '#2A2A2A']} />
            </div>
            <img
                src={RhinePause}
                alt="Rhine Pause"
                onClick={handlePlayMusic}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '6em',
                    height: 'auto',
                    zIndex: 2,
                    userSelect: 'none',
                    pointerEvents: 'auto',
                    opacity: 0.2,
                    cursor: 'pointer'
                }}
            />
            <div className='particles-container'><ParticleBackground /></div>
            <div className='container'>
                <div className="box">
                    <img src={Rings} alt="Concentric Rings" style={{ opacity: 0.3, position: "relative", top: "5.5%", left: "4.5%", userSelect: "none"}}/>
                    <div className="SWE-text-wrapper">4A Software Engineering Student</div>
                    <h1 className='title'>JUN BIN CHENG</h1>
                    <WideThreeColourBar />
                </div>
                <div className="box">
                    <NavItem targetId="about">About Me</NavItem>
                    <NavItem targetId="experience">Experience</NavItem>
                    <NavItem targetId="projects">Projects</NavItem>
                </div>
            </div>
            <DownArrow />
        </section>
    );
}