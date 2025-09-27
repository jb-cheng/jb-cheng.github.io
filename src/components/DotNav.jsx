import { useEffect, useState } from 'react';

const DotNav = () => {
  const sections = [
    'landing',
    'about',
    'experience',
    'projects'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    const section = document.getElementById(sections[index]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    sections.forEach((sectionId, index) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dot-nav" style={{cursor: "url(./assets/arrowhead-rounded-outline.png), auto"}}>
      {sections.map((_, index) => (
        <div
          key={index}
          className={`dot ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default DotNav;