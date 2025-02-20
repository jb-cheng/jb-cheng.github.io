import './Landing.css';

import WideThreeColourBar from './WideThreeColourBar';
import Rings from '../../assets/Rings.svg';
import DownArrow from './DownArrow';
import NavItem from './NavItem';

export default function Landing() {
    return (
        <section>
            <div className="box">
                <img src={Rings} alt="Concentric Rings" style={{ opacity: 0.3, position: "relative", top: "7.5%", left: "5.5%", userSelect: "none"}}/>
                <div className="SWE-text-wrapper">Software Engineer</div>
                <h1>JUN BIN CHENG</h1>
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