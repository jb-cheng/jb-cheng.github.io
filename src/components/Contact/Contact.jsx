import SideBar from "../SideBar";
import SectionHeader from '../SectionHeader';

export default function Contact() {
    return (
        <section className='white-bg' id="contact">
                <SideBar text="Contact" scrollAmount="2200"/>
                <SectionHeader text="Contact"/>
        </section>
    );
}