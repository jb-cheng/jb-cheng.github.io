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
                
                <p className="about-text-container">
                    <i>Hello, World!</i> My name is <b>Jun Bin</b> and I'm a third year software engineering
                    student at Ontario Tech university! I'm passionate about <b>Machine Learning</b> and 
                    <b> Artificial Intelligence</b>, particularly in areas like deep learning, NLP, and computer
                    vision. From building image classifiers to exploring graph neural networks,
                    I enjoy solving complex problems and pushing the boundaries of AI.
                            <br />
                            <br />
                            
                            
                            {/* 🚀 <u><b>Looking ahead, I would like to: </b></u>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Get hired (please)
                            <br />
                            <br /> */}
                        </p>
                <div className="about-container">
                    <p>✨ <b>Currently I am: </b>
                            <br />
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;- 
                            <br /> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;- Doing NSERC USRA research under Dr. Annie Lee
                            <br />
                            <br /></p>
                    <p>🧭 <b>In the past, I have: </b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Competed at 4 hackathons, winner of 3 of them!
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Achieved Dean's list for 5 consecutive terms with a 4.0 GPA
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;- Awarded 2 NSERC USRA undergraduate research awards!
                            <br />
                            <br /></p>


                    {/* <div>
                        <LinkBar/>
                    </div>
                    <div>
                        { <LogoGrid/> }
                        <p style={{position: "relative", fontSize: "1.25em", alignContent: "center", textAlign: "center"}}>
                            
                            <br />
                            <a className='email' href="mailto:junbin.cheng@ontariotechu.net"> junbin.cheng@ontariotechu.net </a>
                        </p>
                    </div> */}
                </div>
        </section>
    );
}