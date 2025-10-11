import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import Donut from '../Donut';
import SectionDivider from '../SectionDivider';
import CustomTimelineElement from './CustomTimelineElement';
import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';

import CYM from '../../assets/jobs/CYMLogo.png';
import NSERC from '../../assets/jobs/NSERCLogo.png';
import Blueprint from '../../assets/jobs/BlueprintLogo.png';
import LeeLab from '../../assets/jobs/LeeLabLogo.png';
import HHAngus from '../../assets/jobs/HHAngusLogo.png';

import CYMJob from '../../assets/jobs/CYMJob.png';
import NSERCJob from '../../assets/jobs/NSERCJob.png';
import BlueprintJob from '../../assets/jobs/BlueprintJob.png';
import LeeLabJob from '../../assets/jobs/LeeLabJob.png';
import HHAngusJob from '../../assets/jobs/HHAngusJob.jpg';

export default function Experience() {
  return (
    <section className='white-bg' id="experience">
      <SideBar text="Experience" />
      <SectionHeader text="Experience"/>

      <div className="experience-donut">
        <Donut diameter={1500} colour='#F1E6D0' />
      </div>

      <div className="job-container">
        <VerticalTimeline lineColor='#EB9974' layout='1-column-right'>
          <CustomTimelineElement
            iconBackgroundColour="#ffffff"
            logoSrc={HHAngus}
            jobTitle="Software Development Engineer"
            dateRange="Sep 2025 - Present"
            companyName="H.H. Angus and Associates Ltd."
            jobDetails={[
              "Developing and maintaining in-house Revit plugins using C#, Dynamo and the Revit API to automate design workflows, improving efficiency for 50+ engineers.",
              "Identified and rectified critical flaws in a production-level script for BIM validation, which was generating erroneous reports 90% of the time due to unhandled edge cases."
            ]}
            imageSrc={HHAngusJob}
            imageAlt="Revit Screenshot"
            imageHeight="16em"
          />

          <CustomTimelineElement
            iconBackgroundColour="#966981"
            logoSrc={LeeLab}
            jobTitle="NLP Researcher"
            dateRange="May 2025 - Aug 2025"
            companyName={<span>L<sup style={{fontSize: "75%"}}>3</sup> Lab (University of Toronto/Ontario Tech University)</span>}
            jobDetails={[
              "Designed a linguistic feature selection method for a cross-lingual knowledge base of 8,000+ languages, resulting in a 50% reduction in dimensions without accuracy loss.",
              "Engineered an LLM data-imputation system (GPT-4o/Claude/Gemini) to expand low-resource language coverage.",
              "Co-authored a workshop paper at MELT 2025 on cross-lingual language subset selection (under review)."
            ]}
            imageSrc={LeeLabJob}
            imageAlt="Diagram of Experimental Pipeline"
            imageHeight="19em"
          />

          <CustomTimelineElement
            iconBackgroundColour="rgb(0, 120, 232)"
            logoSrc={Blueprint}
            jobTitle="Co-President, Co-Founder"
            dateRange="Sep 2024 - Apr 2025"
            companyName="OTU Blueprint"
            jobDetails={[
              "Direct Ontario Tech University's first Blueprint chapter, a student organization originating from UC Berkeley that develops pro-bono technological solutions for non-profits.",
              "Lead workflows and foster collaboration among executives, developers, and contributors to ensure client-centered product delivery and high-quality outcomes."
            ]}
            imageSrc={BlueprintJob}
            imageAlt="Diagram of Experimental Pipeline"
            imageHeight="17em"
          />

          <CustomTimelineElement
            iconBackgroundColour="rgb(237, 55, 41)"
            logoSrc={NSERC}
            jobTitle="Quantitative Researcher"
            dateRange="May 2024 - Aug 2024"
            companyName="Natural Sciences & Engineering Research Council, Canada"
            jobDetails={[
              "Developed an AI-driven stock Options trading bot using the Interactive Brokers API, that streamlined and democratized Options trading for broad audiences.",
              "Designed and implemented a data pipeline for the acquisition and preparation of daily Options trading data with up to 1 second resolutions, that optimized input for machine learning models."
            ]}
            imageSrc={NSERCJob}
            imageAlt="Diagram of Experimental Pipeline"
            imageHeight="17em"
          />

          <CustomTimelineElement
            iconBackgroundColour="rgb(255, 255, 255)"
            logoSrc={CYM}
            jobTitle="Software Engineering Intern"
            dateRange="May 2023 - Aug 2023"
            companyName="CYM Graphics"
            jobDetails={[
              "Established an Azure-based database for personnel info and product ID tags, that integrates with an Arduino RFID tag reader to enable cloud-based system management for staff and customers.",
              "Implemented a JavaScript search filter for the in-house B2B e-commerce platform"
            ]}
            imageSrc={CYMJob}
            imageAlt="picture of catalogue website"
            imageHeight="16em"
          />
        </VerticalTimeline>
      </div>
      <SectionDivider text="▼ SECTOR 03 - PROJECTS ▼" bottomPos={"2em"}></SectionDivider>
    </section>
  );
}