import './About.css'

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import LogoGrid from './LogoGrid';
import LinkBar from './LinkBar';

import Chevron from '../../assets/chevron.svg';

export default function About() {
    return (
        <section className='white-bg' id="about">
                <SideBar text="About Me" scrollAmount="200"/>
                <SectionHeader text="About Me"/>
                <span className="circle"></span>
                <div className="about-container">
                    <div className="about-me-text-container">
                        <p className="about-me-text" style={{marginLeft: "1em"}}>
                            <span className='vert-line'></span>
                            <i>Hello, World!</i>&nbsp;&nbsp;&nbsp;My name is <b>Jun Bin</b> and I'm going into my fourth year of software engineering at Ontario
                            Tech university! &nbsp;I'm passionate about <b>Machine Learning</b> and <b>Artificial Intelligence</b>, 
                            and I love diving into projects that challenge me. &nbsp;When I'm not programming, I enjoy rock climbing, building Lego, and playing video games!
                        </p>
                        <p className="about-me-sub-text" id="currently">
                            <img src={Chevron} style={{width: "1em"}}/>
                            Currently, I am:
                            <ul className="arrow-list">
                                <li>Working as a Software Developer on the internal tooling team at H.H. Angus</li>
                                <li>Organizing Ontario Tech University's annual Hackathon and Computer Science Club events</li>
                                <li>Reading 'Designing Machine Learning Systems' by Chip Huyen</li>
                            </ul>
                        </p>
                        <p className="about-me-sub-text" id="past">
                            <img src={Chevron} style={{width: "1em"}}/>
                            In the past, I have:
                            <ul className="arrow-list">
                                <li>Won three hackathons, most recently at Canada's largest AI hackathon</li>
                                <li>Achieved a cumulative GPA of 4.0</li>
                                <li>Recevied two NSERC USRA undergraduate research awards</li>
                            </ul>
                        </p>
                        <i style={{position: "absolute", marginTop: "0.2em", marginLeft: "14%", fontSize: "4em"}}>Jun Bin Cheng.</i>
                        <LinkBar/>
                    </div>
                    <div className="about-me-logo-grid">
                        <LogoGrid/>
                    </div>
                </div>
                <div style={{
                    width: "100vw",
                    height: "1.5em",
                    backgroundColor: "#B2653B",
                    position: "absolute",
                    left: 0,
                    bottom: "7em"
                }}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} style={{marginRight: "1em", fontWeight: "bold", color: "white", marginBottom: "3px"}}>ABOUT ME</span>
                    ))}
                </div>
                <div style={{
                    width: "100vw",
                    height: "1.5em",
                    backgroundColor: "#B2653B",
                    position: "relative",
                    left: 0,
                    top: "6em",
                    bottom: "7em"
                }}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} style={{marginRight: "1em", fontWeight: "bold", color: "white", marginBottom: "3px"}}>EXPERIENCE</span>
                    ))}
                </div>
        </section>
    );
}