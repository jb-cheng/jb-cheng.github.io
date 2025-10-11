import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TiltImage from './TiltImage';

export default function CustomTimelineElement({
  iconBackgroundColour,
  logoSrc,
  jobTitle,
  dateRange,
  companyName,
  jobDetails = [],
  imageSrc,
  imageAlt,
  imageHeight
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      dateClassName='date'
      contentStyle={{ 
        background: 'rgb(234, 224, 201)', 
        borderTop: '4px solid #EB9974'
      }}
      contentArrowStyle={{ borderLeft: '7px solid  rgb(234, 224, 201)' }}
      iconStyle={{ background: iconBackgroundColour }}
      icon={<img src={logoSrc} alt={companyName + ' logo'} className="icon"/>}
    >
      <div style={{display: "block"}}>
        <h3 className="vertical-timeline-element-title">{jobTitle}</h3>
        {/* class styling doesnt work for date because it wasn't in the original library */}
        <span style={{display: "inline", fontSize: "1rem", color: "black", fontFamily: "inherit", float: "right"}}>{dateRange}</span>
      </div>

      <h4 className="vertical-timeline-element-subtitle">{companyName}</h4>

      <ul className="job-detail-list">
        {jobDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      <TiltImage
        src={imageSrc}
        alt={imageAlt}
        className="vertical-timeline-element-image"
        style={{ height: imageHeight }}
      />
    </VerticalTimelineElement>
  );
}