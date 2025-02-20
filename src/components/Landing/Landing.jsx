import './Landing.css';

import WideThreeColourBar from './WideThreeColourBar';
import Rings from '../../assets/Rings.svg';
import DownArrow from './DownArrow';
import NavItem from './NavItem';
import ParticleBackground from './ParticleBackground';

export default function Landing() {
    return (
        <section style={{ position: "relative", overflow: "hidden" }}>
            <div className='particles-container'><ParticleBackground /></div>
            <div className="box">
                <img src={Rings} alt="Concentric Rings" style={{ opacity: 0.3, position: "relative", top: "10%", left: "5.5%", userSelect: "none"}}/>
                <div className="SWE-text-wrapper">3B Software Engineering Student</div>
                <h1 className='title'>JUN BIN CHENG</h1>
                <WideThreeColourBar />
            </div>
            <div className="box" style={{left: "52%"}}>
                <NavItem targetId="about">About Me</NavItem>
                <NavItem targetId="experience">Experience</NavItem>
                <NavItem targetId="projects">Projects</NavItem>
            </div>
            <DownArrow />
        </section>
    );
}