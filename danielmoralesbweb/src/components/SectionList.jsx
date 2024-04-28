import React, { useState } from "react";

import { data } from "../data";

function SectionList(props) {
    let [toggleContent, setToggleContent] = useState(false);

    const toggleThis =(index) => {
        setToggleContent(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }
    return (
        <>
            {
                data.sectionList[props.page].map((section, index) => (
                    <section key={index} className="project project--list">
                        <div className="project__inner container">
                            <div className="project__text">
                                <h3 className="project__title">{section.title}</h3>
                                <p className="project__date">{section.date}</p>
                                <p className="project__description">{section.description}</p>
                                <p className="project__link"><button className="btn btn--link" onClick={() => toggleThis(index)}>View case</button></p>
                            </div>
                            <div className="project__image">
                                <img src={section.image} alt={section.imageAlt} />
                            </div>
                        </div>
                        <div className={`project__content container ${toggleContent[index] ? "show" : ""}`}>
                            <h4>Challenge</h4>
                            <p>{section.challenge}</p>
                            <h4>Approach</h4>
                            <p>{section.approach}</p>
                            <h4>Results</h4>
                            <p>{section.results}</p>
                        </div>
                    </section>
                ))
            }
        </>
    );
}

export default SectionList;