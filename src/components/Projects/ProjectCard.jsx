export default function ProjectCard({name, img, link, linkText, description, description2, languages = [], frameworks = [], tools = []}) {

    const colourMapping = [
        { items: languages, colour: "#802521" },
        { items: frameworks, colour: "#5C7F70" },
        { items: tools, colour: "#BB8530" }
    ]

    return (
        <article>
            <div class="article-wrapper">
                <figure>
                    <img src={img} alt="" />
                </figure>
                <div class="article-body">
                    <h2>{name}</h2>
                    <p>
                        {description}
                        <br />
                        {description2}
                    </p>

                    <div className="tool-container">
                        {/* For each list of items, add a div of the corresponding colour to the div */}
                        {colourMapping.map(({ items, colour }, index) =>
                            items.map((item, i) => (
                                <div className='tool' style={{color: colour}}>
                                    {item}
                                </div>
                            ))
                        )}
                    </div>
                    <br />
                    <a href={link} target="_blank" class="read-more">
                        <span class="sr-only">{linkText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
}