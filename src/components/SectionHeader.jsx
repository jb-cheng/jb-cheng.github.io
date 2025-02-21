import NarrowThreeColourBar from './NarrowThreeColourBar';

export default function SectionHeader({text}) {
    return (
        <div style={{width: "33%", height: 63, transformOrigin: 'top left', background: '#181818', position: 'absolute', top: "5%", left: "14%"}}>
            <h2 className='section-header'>{text}</h2>
            <NarrowThreeColourBar/>
        </div>
    );
}