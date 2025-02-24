import './Landing.css';

import WideThreeColourBar from './WideThreeColourBar';
import Rings from '../../assets/Rings.svg';
import DownArrow from './DownArrow';
import NavItem from './NavItem';
import ParticleBackground from './ParticleBackground';

export default function Landing() {
    return (
        <section id="landing" style={{ backgroundColor: "#181818" }}>
            <div className='particles-container'><ParticleBackground /></div>
            <div className='container'>
                <div className="box">
                    <img src={Rings} alt="Concentric Rings" style={{ opacity: 0.3, position: "relative", top: "5.5%", left: "4.5%", userSelect: "none"}}/>
                    <div className="SWE-text-wrapper">3B Software Engineering Student</div>
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