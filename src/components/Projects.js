import Title from "./Title";
import { projects } from "../data";

const Projects = () => {
    return (
        <section className="section" id="Project tour">
          <Title header="Featured" subHeader="Projects" />

            <div className="section-center featured-center">
            {projects.map((project)=>{
              const{id, image, stack, title, info, active, hosted, author} = project
              return (
                <article className="tour-card" key={id}>
                    <div className="tour-img-container">
                        <img src={image} className="tour-img" alt={title} />
                        <p className="tour-date">{stack} </p>
                    </div>
                    <div className="tour-info">
                    <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p> {info} </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {hosted} </p>
                  <p>{active} </p>
                  <p> {author} </p>
                  </div>
                </div>
                </article>
              );
            }
            )
            }
        </div>
      </section>
    );
};
export default Projects