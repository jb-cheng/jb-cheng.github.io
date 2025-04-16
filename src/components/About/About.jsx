import './About.css'

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import LogoGrid from './LogoGrid';
import LinkBar from './LinkBar';

export default function About() {
    return (
        <section className='white-bg' id="about" style={{
            display: "block", 
            width: "100%", 
            padding: "5% 0", 
            overflow: "visible",
            height: "auto",
            minHeight: "90vh",
            paddingBottom: "0%"
        }}>
                <SideBar text="About Me" scrollAmount="200"/>
                {/* <SectionHeader text="About Me"/> */}
                
                <div className="about-container">
                    <div>
                        <span className="circle"></span>
                        <p className="about-me-text">
                            <div className='vert-line'></div>
                            <i>Hello, World!</i>&nbsp;&nbsp;&nbsp;My name is <b>Jun Bin</b> and I just complated my third year of software engineering <br /> at Ontario
                            Tech university! &nbsp;I'm passionate about <b>Machine Learning</b> and <b>Artificial Intelligence</b>, 
                            and <br />I love diving into projects that challenge me. &nbsp;In my free time, I like to go rock climbing, build Lego, <br />and play video games!
                            <br />
                            <br />
                            <br />
                            &nbsp;&nbsp;Currently, I am:
                            <br />
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;- 
                            <br /> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;- Conducting an NSERC USRA-funded research project under Dr. Annie Lee, enhancing URIEL++, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a multilingual NLP database for 8,000+ languages.
                            <br />
                            <br />
                            <br />
                            &nbsp;&nbsp;In the past, I have:
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Won three hackathons
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Achieved a cumulative GPA of 4.0
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Recevied two NSERC USRA undergraduate research awards
                            <br />
                            <br />
                            {/* 🚀 <u><b>Looking ahead, I would like to: </b></u>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Get hired (please)
                            <br />
                            <br /> */}
                        </p>
                        <LinkBar/>
                        <i style={{position: "absolute", marginTop: "1em", marginLeft: "14%", fontSize: "4em"}}>Jun Bin Cheng.</i>
                    </div>
                    <div>
                        <LogoGrid/>
                        <p style={{position: "relative", fontSize: "1.25em", alignContent: "center", textAlign: "center"}}>
                            
                            <br />
                            {/* <a className='email' href="mailto:junbin.cheng@ontariotechu.net"> junbin.cheng@ontariotechu.net </a> */}
                        </p>
                    </div>
                </div>
        </section>
    );
}