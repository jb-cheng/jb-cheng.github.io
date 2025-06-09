import './Experience.css';

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import Blueprint from '../../assets/jobs/Blueprint.png';
import NSERC from '../../assets/jobs/NSERC.png';
import CYM from '../../assets/jobs/CYM.png';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
            <div className="job-container">
                <VerticalTimeline lineColor='#EB9974'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024 - Present"
                        dateClassName='date'
                        contentStyle={{ background: 'rgb(234, 224, 201)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(234, 224, 201)' }}
                        iconStyle={{ background: 'rgb(0, 120, 232)', color: '#fff' }}
                        icon={<img src={Blueprint} alt="Blueprint Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Co-President, Co-Founder</h3>
                        <h4 className="vertical-timeline-element-subtitle">@ OTU Blueprint</h4>
                        <p>
                            • Direct Ontario Tech University's first Blueprint chapter, a student organization originating from UC Berkeley that develops pro-bono technological solutions for non-profits.
                            <br />
                            • Lead workflows and foster collaboration among executives, developers, and contributors to ensure client-centered product delivery and high-quality outcomes.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2024 - Aug 2024"
                        dateClassName='date'
                        contentStyle={{ background: 'rgb(234, 224, 201)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(234, 224, 201)' }}
                        iconStyle={{ background: 'rgb(237, 55, 41)', color: '#fff' }}
                        icon={<img src={NSERC} alt="NSERC Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Quantitative Researcher</h3>
                        <h4 className="vertical-timeline-element-subtitle">@ Natural Sciences and Engineering Research Council of Canada</h4>
                        <p>
                            • Developed an AI-driven stock Options trading bot using the Interactive Brokers API, that streamlined and democratized Options trading for broad audiences.
                            <br />
                            • Designed and implemented a data pipeline for the acquisition and preparation of daily Options trading data with up to 1 second resolutions, that optimized input for machine learning models.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2023 - Aug 2023"
                        dateClassName='date'
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        contentStyle={{ background: 'rgb(234, 224, 201)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(234, 224, 201)' }}
                        icon={<img src={CYM} alt="CYM Logo" style={{width: "100%", height: "100%", userSelect: "none"}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">@ CYM Graphics</h4>
                        <p>
                            • Established an Azure-based database for personnel info and product ID tags, that integrates with an Arduino RFID tag reader to enable cloud-based system management for staff and customers.
                            <br />
                            • Implemented a JavaScript search filter for the in-house B2B e-commerce platform
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}