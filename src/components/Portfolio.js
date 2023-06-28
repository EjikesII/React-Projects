import Title from "./Title";
import { portfolio } from "../data";

const Portfolio = () => {
    return (
        <section className="section Portfolio" id="Portfolio">
          <Title header="My Github" subHeader="Portfolio" />
          
          <div className="section-center portfolio">
            {portfolio.map((portfolio) =>{
              const{id, icon, header, text} = portfolio 
              return (
                <article className="portfolios" key={id}>
                  <span className="portfolios-icon">
                    <i className={icon}></i>
                  </span>
                  <div className="portfolios-info">
                    <h4 className="portfolios-title">{header} </h4>
                    <p className="portfolios-text">{text}</p>
                  </div>
                </article>
              );
            })}
        
            </div>
    </section>

    );
};

export default Portfolio;