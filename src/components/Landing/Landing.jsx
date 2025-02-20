import TitleThreeColourBar from '../Title';
import Rings from '../../assets/Rings.svg';
import './Landing.css';

export default function Landing() {
    return (
        <section>
            <div className="box">
                <img src={Rings} alt="Concentric Rings" style={{ opacity: 0.3, position: "relative", top: "7.5%", left: "5.5%", userSelect: "none"}} />
                <div className="SWE-text-wrapper">Software Engineer</div>
                <h1>JUN BIN CHENG</h1>
                <TitleThreeColourBar />
            </div>
            <div className="box" style={{left: "50%"}}>
                <h2 onClick={(e) => {e.preventDefault(); window.location.replace('/#about')}}>About Me</h2>
                <h2 onClick={(e) => {e.preventDefault(); window.location.replace('/#experience')}}>Experience</h2>
                <h2 onClick={(e) => {e.preventDefault(); window.location.replace('/#projects')}}>Projects</h2>
            </div>
        </section>
    );
}