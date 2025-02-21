import './About.css'

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';

export default function About() {
    return (
        <section className='white-bg' id="about">
                <SideBar text="About Me" scrollAmount="200"/>
                <SectionHeader text="About Me"/>
                <p className="about-me-text">
                    Hello, World! My name is <b>Jun Bin</b> and I'm a third year software engineering <br />student at Ontario
                    Tech university!  I'm passionate about Machine Learning and <br /> Artificial Intelligence, particularly in areas 
                    like deep learning, NLP, and computer <br />vision. From building image classifiers to exploring Graph Neural 
                    Networks, <br />I enjoy solving complex problems and pushing the boundaries of AI.
                    <br />
                    <br />
                    In my free time, I like going rock climbing, playing video games, and <br />learning about traditional Chinese culture!
                    <br />
                    <br />
                    ✨ <u><b>Currently I'm</b></u>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- Working on this website
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- Participiating in UTMIST's AI2 Reinforcement Learning Tournament
                    <br />
                    <br />
                    🧭 <u><b>In the past, I've </b></u>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- Competed at 2 hackathons, winner of 1 of them!
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- Achieved Dean's list for 5 consecutive terms with a 4.0 GPA
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- Researched AI-driven options trading funded by the Government of Canada
                    <br />
                    <br />
                    🚀 <u><b>Looking ahead, I'd like to</b></u>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- Get hired (please)
                    <br />
                    <br />
                </p>
        </section>
    );
}