import './Projects.css';

export default function ProjectCard({name, img, link, linkText, description, description2, languages = [], frameworks = [], tools = []}) {
  const colourMapping = [
    { items: languages, colour: "#802521" },  // Languages: Red
    { items: frameworks, colour: "#5C7F70" }, // Libraries and Frameworks: Green
    { items: tools, colour: "#BB8530" }       // Tools: Yellow
  ]

  return (
    <article className="project-card">
      <div className="article-wrapper">
        <figure>
          <img src={img} alt={name} />
        </figure>

        <div className="article-body">
          <h2 className="project-name">{name}</h2>
          <p className="description">{description}</p>
          <p className="description">{description2}</p>

          <div className="skills-container">
            {colourMapping.map(({ items, colour }, index) =>
              items.map((item, i) => (
                <div className='skill' style={{color: colour}} key={`${index}-${i}`}>
                  {item}
                </div>
              ))
            )}
          </div>

          {linkText && (
            <a href={link} target="_blank" className="read-more" rel="noopener noreferrer">
              <span className="sr-only">{linkText}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}