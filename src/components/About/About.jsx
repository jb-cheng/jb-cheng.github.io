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
                            <i>Hello, World!</i>&nbsp;&nbsp;&nbsp;My name is <b>Jun Bin</b> and I just completed my third year of software engineering at Ontario
                            Tech university! &nbsp;I'm passionate about <b>Machine Learning</b> and <b>Artificial Intelligence</b>, 
                            and I love diving into projects that challenge me. &nbsp;In my free time, I like to go rock climbing, build Lego, and play video games!
                            <br />
                            <br />
                            <br />
                        </p>
                        <p className="about-me-sub-text">
                            <img src={Chevron} style={{width: "1em"}}/>
                            Currently, I am:
                            <br />
                            ↳ Conducting an NSERC USRA-funded research project under Dr. Annie Lee, enhancing URIEL++, a multilingual NLP database for 8,000+ languages.
                            <br />
                            <br />
                            <br />
                        </p>
                        <p className="about-me-sub-text">
                            <img src={Chevron} style={{width: "1em"}}/>
                            In the past, I have:
                            <br />
                            ↳ Won three hackathons, most recently at Canada's largest AI hackathon
                            <br />
                            ↳ Achieved a cumulative GPA of 4.0
                            <br />
                            ↳ Recevied two NSERC USRA undergraduate research awards
                            <br />
                            <br />
                        </p>
                        <LinkBar/>
                        <i style={{position: "absolute", marginTop: "1em", marginLeft: "14%", fontSize: "4em"}}>Jun Bin Cheng.</i>
                    </div>
                    <div className="about-me-logo-grid">
                        <LogoGrid/>
                    </div>
                </div>
        </section>
    );
}