export default function SectionHeader({text}) {
    return (
        <div className='section-bar'>
            <h2 className='section-header'>{text}</h2>
            <div style={{width: 19, height: 63, position: 'absolute', right: 0, top: 0}}>
                <div style={{width: 6.33, height: 63, left: 0, top: 0, position: 'absolute', background: '#802521'}} />
                <div style={{width: 6.33, height: 63, left: 12.67, top: 0, position: 'absolute', background: '#5C7F70'}} />
                <div style={{width: 6.33, height: 63, left: 6.33, top: 0, position: 'absolute', background: '#BB8530'}} />
            </div>
        </div>
    );
}