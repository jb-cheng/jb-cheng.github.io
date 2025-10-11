import './Projects.css';

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';
import ProjectCard from './ProjectCard';

import ANN from '../../assets/projects/ANN.png';
import OU from '../../assets/projects/OU.png';
import RideShareRally from '../../assets/projects/ridesharerally.png';
import VaxPass from '../../assets/projects/vaccine.png';
import LabelLens from '../../assets/projects/lens.png';
import Donut from '../Donut';

export default function Projects() {
  return (
    <section id="projects" className='white-bg'>
      <SideBar text="Projects"/>
      <SectionHeader text="Projects"/>

      <div className="projects-donut">
        <Donut diameter={1750} colour='#F9F4EB' />
      </div>

      <div className='project-grid'>
        <ProjectCard 
          name="LabelLens" 
          img={LabelLens}
          link="https://devpost.com/software/LabelLens" 
          linkText="Learn more about LabelLens!"
          description="🏆Award Winner at GenAI Genesis 2025"
          description2="An app that scans medicine labels and provides personalized reccommendations about the medicine's ingredients."
          languages={["HTML", "CSS", "Javascript", "Docker"]}
          frameworks={["React"]}
          tools={["Google Gemini", "Weviate", "Node.js", "RAG"]}
        /> 

        <ProjectCard 
          name="TuringSketch" 
          img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/207/371/datas/gallery.jpg"
          link="https://devpost.com/software/idkkkkkkk" 
          linkText="Learn more about TuringSketch!"
          description="🏆Award Winner at DeltaHacks XI"
          description2="A Turing Test inspired game where players guess which image is AI generated and which is human drawn."
          languages={["Python"]}
          frameworks={["Streamlit"]}
          tools={["pollinations.ai", "Azure SQL"]}
        /> 

        <ProjectCard
          name="Deep Learning Specalization Suite" 
          img={ANN}
          description="A collection of deep learning models for image and speech recognition, music synthesis, chatbots, and 
                 machine translation using advanced architectures including CNNs, RNNs, LSTMs, ResNets, YOLO, U-Net, and Transformers."
          languages={["Python"]}
          frameworks={["TensorFlow", "Keras", "NumPy"]}
        />

        <ProjectCard
          name="University Decisions Discord Bot"
          img={OU}
          description="An AI-powered Discord bot in Python that consolidates and classifies university program admission averages using BERT with search, view, and statistical analysis capabilities."
          link="https://github.com/jb-cheng/DecisionsBot_v2/tree/statistics" 
          linkText="Learn more about the bot!"
          languages={["Python"]}
          frameworks={["Transformers", "Matplotlib", "Discord.py"]}
          tools={["Google Sheets API"]}
        />

        <ProjectCard
          name="RideShareRally"
          img={RideShareRally}
          description="A web-based ride-sharing application using the MVC architecture with Node.js, and Express.js, and Azure SQL. Passengers can browse available rides, post ride requests, and drivers can offer or accept rides seamlessly."
          link="https://github.com/jb-cheng/OnMyWay" 
          linkText="Learn more about RideShareRally!"
          languages={["HTML", "CSS", "JavaScript"]}
          frameworks={["Express.js", "EJS", "Bootstrap"]}
          tools={["Azure SQL", "Node.js"]}
        />

        <ProjectCard
          name="Ontario Vaccine Passport"
          img={VaxPass}
          description="A full-stack vaccine passport web application for Ontario using Flask and SQL. Medical professionals can update patient vaccination records and patients can generateunique QR codes displaying their vaccination status."
          link="https://github.com/jb-cheng/VaxPass" 
          linkText="Learn more about the Passport!"
          languages={["HTML", "CSS", "JavaScript", "Python"]}
          frameworks={["Flask", "Jinja", "Bootstrap"]}
          tools={["SQLite"]}
        />
      </div>
    </section>
  );
}