import './About.css'

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import LogoGrid from './LogoGrid';
import LinkBar from './LinkBar';
import Donut from '../Donut';

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
                            <i>Hello, World!</i>&nbsp;&nbsp;&nbsp;My name is <b>Jun Bin</b> and I just completed my third year of software engineering at Ontario
                            Tech university! &nbsp;I'm passionate about <b>Machine Learning</b> and <b>Artificial Intelligence</b>, 
                            and I love diving into projects that challenge me. &nbsp;In my free time, I like to go rock climbing, build Lego, and play video games!
                        </p>
                        <p className="about-me-sub-text" id="currently">
                            <img src={Chevron} style={{width: "1em"}}/>
                            Currently, I am:
                            <br />
                            ↳ Conducting an NSERC USRA-funded research project under Dr. Annie Lee, enhancing URIEL++, a multilingual NLP database for 8,000+ languages.
                            <br />
                            ↳ Organizing Ontario Tech University's Hackathon and Computer Science Club events.
                        </p>
                        <p className="about-me-sub-text" id="past">
                            <img src={Chevron} style={{width: "1em"}}/>
                            In the past, I have:
                            <br />
                            ↳ Won three hackathons, most recently at Canada's largest AI hackathon
                            <br />
                            ↳ Achieved a cumulative GPA of 4.0
                            <br />
                            ↳ Recevied two NSERC USRA undergraduate research awards
                        </p>
                        <i style={{position: "absolute", marginTop: "0.2em", marginLeft: "14%", fontSize: "4em"}}>Jun Bin Cheng.</i>
                        <LinkBar/>
                        {/* <i style={{position: "absolute", marginTop: "1em", marginLeft: "14%", fontSize: "4em"}}>Jun Bin Cheng.</i> */}
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
                {/* <div className="about-me-repeating-text"> */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} style={{marginRight: "1em", fontWeight: "bold", color: "white", marginBottom: "3px"}}>ABOUT ME</span>
                    ))}
                {/* </div> */}
                </div>
        </section>
    );
}