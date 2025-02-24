import './About.css'

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import LogoGrid from './LogoGrid';
import LinkBar from './LinkBar';

export default function About() {
    return (
        <section className='white-bg' id="about">
                <SideBar text="About Me" scrollAmount="200"/>
                <SectionHeader text="About Me"/>
                <div className="about-container">
                    <div>
                        <p className="about-me-text">
                            Hello, World! My name is <b>Jun Bin</b> and I'm a third year software engineering <br />student at Ontario
                            Tech university!  I'm passionate about <b>Machine Learning</b> and <br /> <b>Artificial Intelligence</b>, particularly in areas 
                            like deep learning, NLP, and computer <br />vision. From building image classifiers to exploring Graph Neural 
                            Networks, <br />I enjoy solving complex problems and pushing the boundaries of AI.
                            <br />
                            <br />
                            In my free time, I like to go rock climbing, play video games, build Lego, and <br />learn about different cultures!
                            <br />
                            <br />
                            ✨ <u><b>Currently I am: </b></u>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Participiating in UTMIST's AI2 Reinforcement Learning Tournament
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Doing undergraduate research in URIEL++ with Dr. Annie Lee
                            <br />
                            <br />
                            🧭 <u><b>In the past, I have: </b></u>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Competed at 2 hackathons, winner of 1 of them!
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Achieved Dean's list for 5 consecutive terms with a 4.0 GPA
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Researched AI-driven options trading funded by the Government of Canada
                            <br />
                            <br />
                            🚀 <u><b>Looking ahead, I would like to: </b></u>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Get hired (please)
                            <br />
                            <br />
                        </p>
                        <LinkBar/>
                    </div>
                    <div>
                        <LogoGrid/>
                        <p style={{position: "relative", fontSize: "1.25em", alignContent: "center", textAlign: "center"}}>
                            Please contact me through my email: 
                            <br />
                            <a className='email' href="mailto:junbin.cheng@ontariotechu.net"> junbin.cheng@ontariotechu.net </a>
                        </p>
                    </div>
                </div>
        </section>
    );
}