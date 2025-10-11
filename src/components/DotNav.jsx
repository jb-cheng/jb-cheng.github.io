import '../styles.css';

import { useEffect, useState } from 'react';

export default function DotNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    'landing',
    'about',
    'experience',
    'projects'
  ];

  // Scroll to the corresponding section when a dot is clicked
  const handleDotClick = (index) => {
    const section = document.getElementById(sections[index]);

    if (section)
      section.scrollIntoView({ behavior: 'smooth' });
  };

  // Update active dot based on scroll position
  // - If distance between the top of a given section and the top of
  //   the window is less than half of the viewport height, then that
  //   section covers over 50% of the screen, meaning that we are
  //   currently viewing that section
  // - The origin (0,0) is the top left of the window
  const handleScroll = () => {
    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2)
          setActiveIndex(index);
      }
    });
  };

  // Add scroll event listener for updating active dot using handleScroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dot-nav">
      {sections.map((_, index) => (
        <div
          key={index}
          className={`dot ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};