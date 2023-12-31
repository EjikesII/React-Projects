import logo from "../images/logo.svg"
import { navLinks, smLinks } from "../data";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="myprofile"/>
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <ul className="nav-links" id="nav-links">
                {navLinks.map((links)=>{
                    return(
                        <li key={links.id}>
                            <a href={links.href} className="nav-link"> 
                            {links.text} 
                            </a>
                        </li>
                    );
                })}
           </ul>

        <ul className="nav-icons">
            {smLinks.map((links)=>{
                const {id,href,icon} = links
                return(
                    <li key={id}>
                        <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
                        <i className={icon}></i>
                        </a>
                    </li>
                );
            })};
            
    
        </ul>
        </div>
        </nav>

    );
};
export default Navbar;