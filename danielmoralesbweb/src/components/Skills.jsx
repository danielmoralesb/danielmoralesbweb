import { useState } from 'react';
import HtmlReactParser from 'html-react-parser';

import { data } from '../data';

function Skills() {
    const [toggleStateSkills, setToggleStateSkills] = useState(0);

    const toggleSkills = (index) => {
        setToggleStateSkills(index)
    }
    return (
        <section>
        <h2>Skills</h2>
        <div className="skills">
            {data.skills.map((skill, index) => (
                <div key={index} className={toggleStateSkills === 1 ? `skills__box ${skill.style}` : `skills__box ${index > 3 ? 'hidden ' + skill.style : skill.style}`}>
                    <h3>{HtmlReactParser(skill.title)}</h3>
                    <p>{skill.description}</p>
                    <div className="skills__logos">
                        {skill.logos.map((logo, index) => (
                            <img key={index} src={logo.src} className={`logo ${logo.style}`} alt={logo.alt} />
                        ))}
                    </div>
                </div>
            ))}
            {data.skills.length > 4 && (
                <button onClick={() => toggleSkills(1)} className={toggleStateSkills === 1 ? `hidden` : `btn btn--primary btn--icon btn--icon--plus`}>More Skills</button>
            )}
        </div>
    </section>
    )
}

export default Skills;