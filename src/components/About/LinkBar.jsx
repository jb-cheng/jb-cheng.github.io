export default function LinkBar() {
    return (
        <div className='link-bar'>
            <div className='link-btn' onClick={() => {window.open("https://www.google.com")}}>Resume</div>
            <div className='link-btn' onClick={() => {window.open("https://www.linkedin.com/in/jb-cheng/")}}>LinkedIn</div>
            <div className='link-btn' onClick={() => {window.open("https://github.com/jb-cheng")}}>GitHub</div>
        </div>
    );
};