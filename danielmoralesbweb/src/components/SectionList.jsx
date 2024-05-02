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
                    <section key={index} className={`project project--list ${toggleContent[index] ? "show" : ""}`}>
                        <div className="project__inner container">
                            <h3 className={(section.subTitle) ? "project__title project__title--hassubitle" : "project__title"}>{section.title} {(section.subTitle) ? <span className="project__subtitle"><i className="project__pipe"></i><strong className="project__subtitle__text">{section.subTitle}</strong></span> : ''}</h3>
                            <div className="project__inner__inner">
                                <div className="project__text">
                                    <p className="project__date">{section.date}</p>
                                    <p className="project__description">{section.description}</p>
                                    <p className="project__link"><button className="btn btn--link" onClick={() => toggleThis(index)}>View case</button></p>
                                </div>
                                <div className="project__image">
                                    <figure className="project__figure">
                                        <img src={section.image} alt={section.imageAlt} />
                                        <figcaption className="project__figcaption">{section.imageCaption}</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="project__content container">
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