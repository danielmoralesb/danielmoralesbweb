import { data } from "../data";


function MoreProjects() {
  return (
    <section>
        <div className="container">
            <h2>{data.moreProjects.title}</h2>
            <p className="text-center">{data.moreProjects.description}</p>
            <ul className="project-list">
                {data.moreProjects.projects.map((project, index) => (
                    <li key={index}>
                        <a href={project.url} target="_blank" title={project.name} rel="noreferrer">{project.name}</a>
                    </li>))}
            </ul>
        </div>
    </section>
  );
}

export default MoreProjects;