import React, { useState } from 'react';

import {data} from '../data';

function Tabs(props) {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    
    return (
        <section>
            <h2>Categories</h2>
            <div className="tabs">
                <div className="container">
                    <div className="tabs__header">
                    {
                        data.tabs[props.page].map((tab, index) => (
                            <div key={index} className={toggleState === index ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(index)}>{tab.control}</div>
                        ))
                    }
                    </div>
                </div>
                <div className="tabs__body">
                    {
                        props.page === "websites" ? 
                        data.tabs[props.page].map((tab, index) => (
                            <div key={index} className={toggleState === index ? "tabs__content tabs__content--active" : "tabs__content"}>
                                {
                                    tab.projects.map((project, index) => (
                                        <section key={index} className="project">
                                            <div className="project__inner container">
                                                <div className="project__text">
                                                    <h3 className="project__title">{project.title}</h3>
                                                    <p className="project__date">{project.date}</p>
                                                    <p className="project__description">{project.description}</p>
                                                    <p className="project__link"><a href={project.url} title={project.title} target="_blank" rel="noreferrer">View site</a></p>
                                                </div>
                                                <div className="project__image">
                                                    <img src={project.image} alt={project.title} />
                                                </div>
                                            </div>
                                        </section>
                                    ))
                                }
                            </div>
                        )) : data.tabs[props.page].map((tab, index) => (
                            <div key={index} className={toggleState === index ? "tabs__content tabs__content--active" : "tabs__content"}>
                                {
                                    tab.projects.map((project, index) => (
                                        <section key={index} className="project">
                                            <div className="project__inner container">
                                                <div className="project__text">
                                                    <h3 className="project__title">{project.title}</h3>
                                                    <p className="project__date">{project.date}</p>
                                                    <p className="project__description">{project.description}</p>
                                                </div>
                                                <div className="project__image">
                                                    <img src={project.image} alt={project.title} />
                                                </div>
                                            </div>
                                        </section>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Tabs;