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
      {/* <span className="circle"></span> */}
      <div className="about-container">
        <div className="about-me-text-container">
          <p className="about-me-text" style={{marginLeft: "1em"}}>
            <span className='vert-line'></span>
            <i id="hello">Hello, World!</i>My name is <b>Jun Bin</b> and I'm going into my fourth year of software engineering at Ontario
            Tech university!&#8195;I'm passionate about <b>Machine Learning</b> and <b>Artificial Intelligence</b>, 
            and I love diving into projects that challenge me.&#8195;When I'm not programming, I enjoy rock climbing, building Lego, and playing video games!
          </p>
          <div className="about-me-sub-text">
            <img src={Chevron} style={{width: "1em"}}/>
            <span>Currently, I am:</span>
            <ul className="arrow-list">
              <li>Automating Autodesk Revit workflows as a Software Developer at H.H. Angus</li>
              <li>Organizing Ontario Tech University's annual Hackathon</li>
              <li>Reading 'Designing Machine Learning Systems' by Chip Huyen</li>
            </ul>
          </div>
          <div className="about-me-sub-text">
            <img src={Chevron} style={{width: "1em"}}/>
            <span>In the past, I have:</span>
            <ul className="arrow-list">
              <li>Won three hackathons, most recently at Canada's largest AI hackathon</li>
              <li>Achieved a cumulative GPA of 4.0</li>
              <li>Received two NSERC USRA undergraduate research awards</li>
            </ul>
          </div>
          <i style={{position: "absolute", marginTop: "0.5em", marginLeft: "14%", fontSize: "4em"}}>Jun Bin Cheng.</i>
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
        position: "relative",
        left: 0,
        // bottom: "7em",
        overflow: "hidden",
        userSelect: "none",
        marginTop: "5em"
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{marginRight: "7em", fontWeight: "bold", color: "white", marginBottom: "3px"}}>▼ SECTOR 02 - EXPERIENCE ▼</span>
        ))}
      </div>

      {/* <div style={{
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
      </div> */}

      {/* <div style={{
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
      </div> */}
    </section>
  );
}