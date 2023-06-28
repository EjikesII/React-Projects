import aboutImg from "../images/about.jpeg"
import Title from "./Title";
const About = () => {
    return (
        <section className="section" id="about">
          <Title header="About" subHeader="Me" />

          <div className="section-center about-center">
            <div className="about-img">
              <img src={aboutImg} className="about-photo" alt="awesome beach"/>
            </div>
          <article className="about-info">
            <h3>Learn about me</h3>
            <p>
            Innocent Ihedioha is an experienced developer with extensive hands-on skills 
            on the web using PHP and MySQL, Nodejs and MongoDB, javascript, 
            python and the aurora database on AWS.
            He is more a backend and DevOps Engineer these days, containerizing and bulding Microservices apps with Docker.
            Orchestrating the containers using Kubernetes. Working with tools like Ansible, cloud automation with 
            Terraform, python and bashscript.  
            </p>
            <p>
            His skillset includes Architecting the cloud, AWS, Azure, Project management,
            Agile, automated testing, CI/CD, Nodejs, Javascrript, React, Python for automation,
            Terraform, Docker, Kubernetes, Ansible, Linux(I love this one most especially), HTML, CSS etc.
            </p>
            <a href="#about" className="btn">read more</a>
          </article>
          </div>
        </section>
    );
};

export default About;