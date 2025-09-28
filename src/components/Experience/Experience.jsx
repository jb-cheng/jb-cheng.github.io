import './Experience.css';

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import Blueprint from '../../assets/jobs/Blueprint.png';
import NSERC from '../../assets/jobs/NSERC.png';
import CYM from '../../assets/jobs/CYM.png';
import OTUAndUofT from '../../assets/jobs/otuxuoft.png';
import hhangusLogo from '../../assets/jobs/hhangus-logo.png';

import AlignFreeze from '../../assets/alignfreeze_diagram.png';
import BlueWebsite from '../../assets/bluewebsite.png';
import Stonks from '../../assets/ibkrweb.png';
import Catalogue from '../../assets/cymweb.png';
import hhangusJob from '../../assets/hhangus-job.jpg';

import Donut from '../Donut';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// TiltImage component for mouse tilt effect
function TiltImage({ src, alt, className, style }) {
  const THRESHOLD = 20;
  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const offsetLeft = currentTarget.getBoundingClientRect().left;
    const offsetTop = currentTarget.getBoundingClientRect().top;
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  };
  const resetStyles = (e) => {
    e.currentTarget.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  };
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
      draggable={false}
    />
  );
}

export default function Experience() {
  return (
    <section className='white-bg' id="experience" style={{   
      display: "block", 
      width: "100%", 
      padding: "20px 0", 
      overflow: "visible",
      height: "100%",
      minHeight: "100vh",
    }}>
      <SideBar text="Experience" scrollAmount="1100"/>
      <SectionHeader text="Experience"/>
      <div style={{
        position: 'absolute',
        top: '70%',    /* Move up/down (0% = top, 100% = bottom) */
        left: '70%',     /* Move left/right (0% = left, 100% = right) */
        // transform: 'translate(-50%, -50%)', /* Fine-tune centering */
        // opacity: 0.1
        zIndex: 0
      }}>
        <Donut size={1500} colors={['#F1E6D0', '#F1E6D0', '#F1E6D0', '#F1E6D0']} />
      </div>

      {/* <div style={{
        width: 43.29, 
        height: 9.94, 
        left: '3%', 
        top: '20%', 
        position: 'absolute', 
        transform: 'rotate(67deg)', 
        transformOrigin: 'top left', 
        borderRadius: 9999, 
        border: '3px #B3643B solid',
        zIndex: 2
      }} /> */}

      <div className="job-container">
        {/* <img src={AlignFreeze} 
        alt="Drone" 
        className="experience-image"
        style={{ 
          width: "25%",
          position: "absolute", 
          top: "5%", 
          left: "67%", 
          transform: "translateX(-50%)", 
          zIndex: 1, 
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}
        /> */}
        <VerticalTimeline lineColor='#EB9974' layout='1-column-right'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName='date'
            contentStyle={{ 
              background: 'rgb(234, 224, 201)', 
              color: '#fff',
              borderTop: '4px solid #EB9974'
            }}
            contentArrowStyle={{ borderLeft: '7px solid  rgb(234, 224, 201)' }}
            iconStyle={{ background: '#ffffff', color: '#fff'}}
            icon={<img src={hhangusLogo} alt="H.H. Angus Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
          >
            <div style={{display: "block"}}>
              <h3 className="vertical-timeline-element-title" style={{display: "inline", marginRight: "10px", float: "left"}}>Software Development Engineer</h3>
              <span style={{display: "inline", fontSize: "1rem", color: "black", fontFamily: "inherit", float: "right"}}>Sep 2025 - Present</span>
            </div>
            <h4 style={{display: "block", clear: "both"}} className="vertical-timeline-element-subtitle">H.H. Angus and Associates Ltd.</h4>
            <ul className="job-detail-list">
              <li>Developing and maintaining in-house Revit plugins using C#, Dynamo and the Revit API to automate design workflows, improving efficiency for 50+ engineers.</li>
              <li>Identified and rectified critical flaws in a production-level script for BIM validation, which was generating erroneous reports 90% of the time due to unhandled edge cases.</li>
            </ul>
            <TiltImage
              src={hhangusJob}
              alt="Revit Screenshot"
              className="experience-image"
              style={{ 
                width: "101%",
                height: "16em",
                objectFit: "cover",
                objectPosition: "0 0",
                position: "absolute", 
                top: 0, 
                left: "115%", 
                zIndex: 1, 
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName='date'
            contentStyle={{ 
              background: 'rgb(234, 224, 201)',
              borderTop: '4px solid #EB9974'
            }}
            contentArrowStyle={{ borderLeft: '7px solid rgb(234, 224, 201)' }}
            iconStyle={{ background: '#966981', color: '#fff' }}
            icon={<img src={OTUAndUofT} alt="OTU and UofT Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
          >
            <div style={{display: "block"}}>
              <h3 className="vertical-timeline-element-title" style={{display: "inline", marginRight: "10px", float: "left"}}>NLP Researcher</h3>
              <span style={{display: "inline", fontSize: "1rem", color: "black", fontFamily: "inherit", float: "right"}}>May 2025 - Aug 2025</span>
            </div>
            <h4 style={{display: "block", clear: "both"}} className="vertical-timeline-element-subtitle">L<sup style={{fontSize: "75%"}}>3</sup> Lab (University of Toronto/Ontario Tech University)</h4>
            <ul className="job-detail-list">
              <li>Designed a linguistic feature selection method for a cross-lingual knowledge base of 8,000+ languages, resulting in a 50% reduction in dimensions without accuracy loss.</li>
              <li>Engineered an LLM data-imputation system (GPT-4o/Claude/Gemini) to expand low-resource language coverage.</li>
              <li>Co-authored a workshop paper at MELT 2025 on cross-lingual language subset selection (under review).</li>
            </ul>
            <TiltImage
              src={AlignFreeze}
              alt="Diagram of Experimental Pipeline"
              className="experience-image"
              style={{ 
                width: "101%",
                height: "19em",
                objectFit: "cover",
                objectPosition: "0 0",
                position: "absolute", 
                top: 0, 
                left: "115%", 
                zIndex: 1, 
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName='date'
            contentStyle={{ 
              background: 'rgb(234, 224, 201)', 
              color: '#fff',
              borderTop: '4px solid #EB9974'
            }}
            contentArrowStyle={{ borderLeft: '7px solid  rgb(234, 224, 201)' }}
            iconStyle={{ background: 'rgb(0, 120, 232)', color: '#fff' }}
            icon={<img src={Blueprint} alt="Blueprint Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
          >
            <div style={{display: "block"}}>
              <h3 className="vertical-timeline-element-title" style={{display: "inline", marginRight: "10px", float: "left"}}>Co-President, Co-Founder</h3>
              <span style={{display: "inline", fontSize: "1rem", color: "black", fontFamily: "inherit", float: "right"}}>Sep 2024 - Apr 2025</span>
            </div>
            <h4 style={{display: "block", clear: "both"}} className="vertical-timeline-element-subtitle">OTU Blueprint</h4>
            <ul className="job-detail-list">
              <li>Direct Ontario Tech University's first Blueprint chapter, a student organization originating from UC Berkeley that develops pro-bono technological solutions for non-profits.</li>
              <li>Lead workflows and foster collaboration among executives, developers, and contributors to ensure client-centered product delivery and high-quality outcomes.</li>
            </ul>
            <TiltImage
              src={BlueWebsite}
              alt="Diagram of Experimental Pipeline"
              className="experience-image"
              style={{ 
                width: "101%",
                height: "17em",
                objectFit: "cover",
                objectPosition: "0 0",
                position: "absolute", 
                top: 0, 
                left: "115%", 
                zIndex: 1, 
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName='date'
            contentStyle={{ 
              background: 'rgb(234, 224, 201)', 
              color: '#fff',
              borderTop: '4px solid #EB9974'
            }}
            contentArrowStyle={{ borderLeft: '7px solid  rgb(234, 224, 201)' }}
            iconStyle={{ background: 'rgb(237, 55, 41)', color: '#fff' }}
            icon={<img src={NSERC} alt="NSERC Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
          >
            <div style={{display: "block"}}>
              <h3 className="vertical-timeline-element-title" style={{display: "inline", marginRight: "10px", float: "left"}}>Quantitative Researcher</h3>
              <span style={{display: "inline", fontSize: "1rem", color: "black", fontFamily: "inherit", float: "right"}}>May 2024 - Aug 2024</span>
            </div>
            <h4 style={{display: "block", clear: "both"}} className="vertical-timeline-element-subtitle">Natural Sciences & Engineering Research Council, Canada</h4>
            <ul className="job-detail-list">
              <li>Developed an AI-driven stock Options trading bot using the Interactive Brokers API, that streamlined and democratized Options trading for broad audiences.</li>
              <li>Designed and implemented a data pipeline for the acquisition and preparation of daily Options trading data with up to 1 second resolutions, that optimized input for machine learning models.</li>
            </ul>
            <TiltImage
              src={Stonks}
              alt="Diagram of Experimental Pipeline"
              className="experience-image"
              style={{ 
                width: "101%",
                height: "17em",
                objectFit: "cover",
                objectPosition: "0 0",
                position: "absolute", 
                top: 0, 
                left: "115%", 
                zIndex: 1, 
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName='date'
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            contentStyle={{ 
              background: 'rgb(234, 224, 201)', 
              color: '#fff',
              borderTop: '4px solid #EB9974'
            }}
            contentArrowStyle={{ borderLeft: '7px solid  rgb(234, 224, 201)' }}
            icon={<img src={CYM} alt="CYM Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
          >
            <div style={{display: "block"}}>
              <h3 className="vertical-timeline-element-title" style={{display: "inline", marginRight: "10px", float: "left"}}>Software Engineering Intern</h3>
              <span style={{display: "inline", fontSize: "1rem", color: "black", fontFamily: "inherit", float: "right"}}>May 2023 - Aug 2023</span>
            </div>
            <h4 style={{display: "block", clear: "both"}} className="vertical-timeline-element-subtitle">CYM Graphics</h4>
            <ul className="job-detail-list">
              <li>Established an Azure-based database for personnel info and product ID tags, that integrates with an Arduino RFID tag reader to enable cloud-based system management for staff and customers.</li>
              <li>Implemented a JavaScript search filter for the in-house B2B e-commerce platform</li>
            </ul>
            <TiltImage
              src={Catalogue}
              alt="picture of catalogue website"
              className="experience-image"
              style={{ 
                width: "101%",
                height: "16em",
                objectFit: "cover",
                objectPosition: "0 0",
                position: "absolute", 
                top: 0, 
                left: "115%", 
                zIndex: 1, 
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      {/* <div className="timeline-background-shape"></div> */}

      <div style={{
        width: "100vw",
        height: "1.5em",
        backgroundColor: "#B2653B",
        position: "relative",
        left: 0,
        bottom: "2em",
        overflow: "hidden",
        userSelect: "none",
        marginTop: "5em"
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{marginRight: "7em", fontWeight: "bold", color: "white", marginBottom: "3px"}}>▼ SECTOR 03 - PROJECTS ▼</span>
        ))}
      </div>

      {/* <div style={{
        width: "100vw",
        height: "1.5em",
        backgroundColor: "#B2653B",
        marginTop: "3em",
        zIndex: 2
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{marginRight: "1em", fontWeight: "bold", color: "white", marginBottom: "3px"}}>EXPERIENCE</span>
        ))}
      </div>
      <div style={{
        width: "100vw",
        height: "1.5em",
        backgroundColor: "#B2653B",
        marginTop: "0.5em",
        zIndex: 2
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{marginRight: "1em", fontWeight: "bold", color: "white", marginBottom: "3px"}}>EXPERIENCE</span>
        ))}
      </div> */}
    </section>
  );
}