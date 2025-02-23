import './Projects.css';

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';

import ProjectCard from './ProjectCard';

import ANN from '../../assets/projects/ANN.png';
import OU from '../../assets/projects/OU.png';
import RideShareRally from '../../assets/projects/ridesharerally.png';

export default function Projects() {
    return (
        <section className='white-bg' id="projects" style={{
            display: "block", 
            width: "100%", 
            padding: "20px 0", 
            overflow: "visible",
            height: "100%",
            minHeight: "100vh"
        }}>
                <SideBar text="Projects" scrollAmount="1600"/>
                <SectionHeader text="Projects"/>

                <div className='project-grid'>
                    <ProjectCard 
                        name="TuringSketch" 
                        img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/207/371/datas/gallery.jpg"
                        link="https://devpost.com/software/idkkkkkkk" 
                        linkText="Learn more about TuringSketch!"
                        description="Award Winner at DeltaHacks XI."
                        description2="Turing Test inspired game where players guess which image is AI generated and which is human drawn."
                    /> 

                    <ProjectCard
                        name="Deep Learning Specalization Suite" 
                        img={ANN}
                        description="A collection of deep learning models for image and speech recognition, music synthesis, chatbots, and 
                                     machine translation using advanced architectures including CNNs, RNNs, LSTMs, ResNets, YOLO, U-Net, and Transformers."
                    />

                    <ProjectCard
                        name="University Decisions Discord Bot"
                        img={OU}
                        description="An AI-powered Discord bot in Python that consolidates and classifies university program admission averages using BERT (PyTorch) with search, view, and statistical analysis capabilities."
                        link="https://devpost.com/software/idkkkkkkk" 
                        linkText="Learn more about the bot!"
                    />

                    <ProjectCard
                        name="RideShareRally"
                        img={RideShareRally}
                        description="A web-based ride-sharing application using the MVC architecture with Node.js, and Express.js, and Azure SQL. Passengers can browse available rides, post ride requests, and drivers can offer or accept rides seamlessly."
                        link="https://github.com/jb-cheng/OnMyWay" 
                        linkText="Learn more about RideShareRally!"
                    />
                </div>
        </section>
    );
}