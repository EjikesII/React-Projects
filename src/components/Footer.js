
import { navLinks, smLinks } from "../data";

const Footer = () => {
    return (
        <footer className="section footer">
        <ul className="footer-links">
            {navLinks.map((link)=>{
               const {id, href, text} = link
               return (
                <li key={id}>
                    <a href={href} className="footer-link"> {text} </a>
                </li>
            );
            
            } )};
        </ul>
        <ul className="footer-icons">
            {smLinks.map((link)=>{
                const{id, href, icon} = link
                return(
                   <li key={id}> <a
                    href={href}
                    target="_blank"
                    className="footer-icon"
                    rel="noreferrer">
                    <i className={icon}></i>
                    </a>
                </li>
                );
            })};
            </ul>
         
        <p className="copyright">
              copyright &copy; Innocent Ihedioha
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
        </footer>
    );
};
export default Footer;