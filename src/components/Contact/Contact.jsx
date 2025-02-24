import './Contact.css';

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';

export default function Contact() {
    return (
        <div className="contact-container">
            <p style={{position: "relative", fontSize: "1.25em"}}>
                Please contact me through my email: 
                <a href="mailto:junbin.cheng@ontariotechu.net"> junbin.cheng@ontariotechu.net </a>
            </p>
        </div>
    );
}