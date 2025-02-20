import './About.css'

import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';

export default function About() {
    return (
        <section className='white-bg' id="about">
                <SideBar text="About Me"/>
                <SectionHeader text="About Me"/>

        </section>
    );
}