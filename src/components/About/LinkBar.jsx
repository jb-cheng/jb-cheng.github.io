import './About.css'

import Linkedin from '../../assets/Linkedin.svg';
import Github from '../../assets/Github.svg';
import Email from '../../assets/Email.svg';

export default function LinkBar() {
  return (
    <div className='link-bar'>
      <img src={Linkedin} alt="LinkedIn Icon" onClick={() => {window.open("https://www.linkedin.com/in/jb-cheng/")}}/>
      <img src={Github} alt="GitHub Icon" onClick={() => {window.open("https://github.com/jb-cheng")}}/>
      <img src={Email} alt="Email Icon" onClick={() => window.location = 'mailto:junbin.cheng@ontariotechu.net'}/>
      <div className='resume-btn' onClick={() => {window.open("https://drive.google.com/file/d/1uVpb3O3t0P0xEpFoOboiMue5ZQQycqUF/view?usp=sharing")}}>Resume</div>
    </div>
  );
};