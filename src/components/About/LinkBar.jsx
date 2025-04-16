import Linkedin from '../../assets/logos/Linkedin.svg';
import Github from '../../assets/logos/Github.svg';
import Email from '../../assets/logos/Email.svg';

export default function LinkBar() {
    return (
        <div className='link-bar'>
            <img src={Linkedin} alt="LinkedIn Icon" style={{width: '3em', height: '3em'}} onClick={() => {window.open("https://www.linkedin.com/in/jb-cheng/")}}/>

            <img src={Github} alt="GitHub Icon" style={{width: '3em', height: '3em'}} onClick={() => {window.open("https://github.com/jb-cheng")}}/>

            <img src={Email} alt="Email Icon" style={{width: '3em', height: '3em'}} onClick={() => window.location = 'mailto:junbin.cheng@ontariotechu.net'}/>

            <div className='link-btn' onClick={() => {window.open("https://drive.google.com/file/d/1uVpb3O3t0P0xEpFoOboiMue5ZQQycqUF/view?usp=sharing")}}>Resume</div>

            {/* <div className='link-btn' onClick={() => {window.open("https://www.linkedin.com/in/jb-cheng/")}}>LinkedIn</div>
            <div className='link-btn' onClick={() => {window.open("https://github.com/jb-cheng")}}>GitHub</div> */}
        </div>
    );
};