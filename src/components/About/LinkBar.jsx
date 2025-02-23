export default function LinkBar() {
    return (
        <div className='link-bar'>
            <div className='link-btn' onClick={() => {window.open("https://drive.google.com/file/d/1Q-JqmP3gyhAw0awH96Ld_qf_WJIlSKRX/view?usp=sharing")}}>Resume</div>
            <div className='link-btn' onClick={() => {window.open("https://www.linkedin.com/in/jb-cheng/")}}>LinkedIn</div>
            <div className='link-btn' onClick={() => {window.open("https://github.com/jb-cheng")}}>GitHub</div>
        </div>
    );
};