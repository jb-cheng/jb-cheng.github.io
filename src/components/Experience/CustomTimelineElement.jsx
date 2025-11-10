import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TiltImage from './TiltImage';
import { useRef, useEffect, useState } from 'react';

export default function CustomTimelineElement({
  iconBackgroundColour,
  logoSrc,
  jobTitle,
  dateRange,
  companyName,
  jobDetails = [],
  imageSrc,
  imageAlt,
  imageMinHeight = 0
}) {
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      // Check if we're in tablet mode (1560px breakpoint)
      const isMobileView = window.innerWidth <= 1560;
      
      if (isMobileView) {
        // In mobile view, image is positioned relatively and shouldn't sync height
        setContentHeight(0); // Reset to use minHeight/auto
        return;
      }

      if (containerRef.current) {
        // Find the timeline content element by traversing up from our container
        const timelineElement = containerRef.current.closest('.vertical-timeline-element');
        const contentElement = timelineElement?.querySelector('.vertical-timeline-element-content');
        
        if (contentElement) {
          const height = contentElement.offsetHeight;
          // console.log('Timeline content height:', height); // Debug
          setContentHeight(height);
        }
      }
    };

    // Initial measurement with delay to ensure DOM is ready
    const timeoutId = setTimeout(updateHeight, 200);

    // Listen for window resize events
    const handleResize = () => {
      setTimeout(updateHeight, 100); // Small delay to let layout settle
    };
    
    window.addEventListener('resize', handleResize);

    // Use ResizeObserver for more precise tracking (only in desktop view)
    let resizeObserver;
    if (containerRef.current && window.ResizeObserver && window.innerWidth > 1560) {
      const timelineElement = containerRef.current.closest('.vertical-timeline-element');
      const contentElement = timelineElement?.querySelector('.vertical-timeline-element-content');
      
      if (contentElement) {
        resizeObserver = new ResizeObserver(() => {
          // Double-check we're still in desktop view before updating
          if (window.innerWidth > 1560) {
            handleResize();
          }
        });
        resizeObserver.observe(contentElement);
      }
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [jobDetails]); // Re-run when content changes
  
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
      <div ref={containerRef} style={{display: "block"}}>
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
          style={{ 
            height: contentHeight > 0 ? `${contentHeight}px` : '28em',
            width: contentHeight > 0 ? '' : 'auto',
            minHeight: imageMinHeight,
            // position: contentHeight > 0 ? 'relative' : 'absolute',
            left: contentHeight > 0 ? '' : '10%',
            // top: contentHeight > 0 ? '0' : '0',
            // transform: contentHeight > 0 ? '' : 'translateX(50%)',
          }}
        />
      </div>
    </VerticalTimelineElement>
  );
}