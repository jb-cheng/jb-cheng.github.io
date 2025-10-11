import './About.css'

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import LogoGrid from './LogoGrid';
import LinkBar from './LinkBar';
import SectionDivider from '../SectionDivider';

import Chevron from '../../assets/chevron.svg';

export default function About() {
  return (
    <section id="about" className='white-bg'>
      <SideBar text="About Me" />
      <SectionHeader text="About Me"/>

      <div className="about-container">
        <div className="about-me-text-container">
          <p className="about-me-text">
            <span className='vertical-line'/>
            <i id="hello">Hello, World!</i>My name is <b>Jun Bin</b> and I'm going into my fourth year of software engineering at Ontario
            Tech university!&#8195;I'm passionate about <b>Machine Learning</b> and <b>Artificial Intelligence</b>, 
            and I love diving into projects that challenge me.&#8195;When I'm not programming, I enjoy rock climbing, building Lego, and playing video games!
          </p>
          
          <div className="about-me-sub-text">
            <img src={Chevron} className="list-chevron"/>
            <span>What I'm Up To:</span>
            <ul className="arrow-list">
              <li>Automating Autodesk Revit workflows as a Software Developer at H.H. Angus</li>
              <li>Organizing Ontario Tech University's annual Hackathon</li>
              <li>Maintaining a 4.0 cumulative GPA</li>
              <li>Reading 'Designing Machine Learning Systems' by Chip Huyen</li>
            </ul>
          </div>
          
          <div className="about-me-sub-text">
            <img src={Chevron} className="list-chevron"/>
            <span>In the past, I have:</span>
            <ul className="arrow-list">
              <li>Won three hackathons, most recently at Canada's largest AI hackathon</li>
              <li>Received two NSERC USRA undergraduate research awards</li>
              <li>Been awarded consecutive scholarships for academic excellence</li>
            </ul>
          </div>
          <i className="signature">Jun Bin Cheng</i>
          <LinkBar/>
        </div>
          <LogoGrid/>
      </div>

      <SectionDivider text="▼ SECTOR 02 - EXPERIENCE ▼"></SectionDivider>
    </section>
  );
}