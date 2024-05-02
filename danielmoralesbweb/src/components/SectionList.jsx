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
                    <section key={index} className={`project project--list show ${toggleContent[index] ? "show" : ""}`}>
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
                            <div className="project__case-section">
                                <h4>Challenge</h4>
                                <div className="project__case-section__inner">
                                    <div className="project__case-section__column">
                                        <p>{section.challengeParagraph}</p>
                                    </div>
                                    <div className="project__case-section__column">
                                        <img className="project__image" src={section.imageChallenge} alt={section.imageChallengeAlt} />
                                    </div>
                                </div>
                            </div>
                            <div className="project__case-section">
                                <h4>Approach</h4>
                                <div className="project__case-section__inner">
                                    <div className="project__case-section__column">
                                        <p>{section.approachLeftParagraph}</p>
                                        <img className="project__image project__image-sm" src={section.imageApproach1} alt={section.imageApproach1Alt} />
                                    </div>
                                    <div className="project__case-section__column">
                                        <p>{section.approachRightParagraph}</p>
                                        <img className="project__image project__image-sm" src={section.imageApproach2} alt={section.imageApproach2Alt} />
                                    </div>
                                </div>
                            </div>
                            <div className="project__case-skills">
                                <div className="project__case-skills__column">
                                    <h5>Skills implemented on this Approach</h5>
                                    {section.skills && section.skills.length > 0 ? (
                                        <ul>
                                            {section.skills.map((skill, index) => (
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No skills implemented on this approach.</p>
                                    )}
                                </div>
                                <div className="project__case-skills__column">
                                    <img className="project__image project__image-skills" src={section.imageSkills} alt={section.imageSkillsAlt} />
                                </div>
                            </div>
                            <div className="project__case-section">
                                <h4>Results</h4>
                                <p>{section.resultsParagraph}</p>
                            </div>
                            <p className="project__link"><button className="btn btn--link" onClick={() => toggleThis(index)}>Collapse case</button></p>
                        </div>
                    </section>
                ))
            }
        </>
    );
}

export default SectionList;