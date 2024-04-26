import { data } from "../data";

function SectionList(props) {
    return (
        <>
            {
                data.sectionList[props.page].map((section, index) => (
                    <section key={index} className="project">
                        <div className="project__inner container">
                            <div className="project__text">
                                <h3 className="project__title">{section.title}</h3>
                                <p className="project__date">{section.date}</p>
                                <p className="project__description">{section.description}</p>
                                <p className="project__link"><a href={section.url} title={section.title} target="_blank" rel="noreferrer">View site</a></p>
                            </div>
                            <div className="project__image">
                                <img src={section.image} alt={section.title} />
                            </div>
                        </div>
                    </section>
                ))
            }
        </>
    );
}

export default SectionList;