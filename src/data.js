import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";

export const navLinks = [
    {id: 1, href: "#home", text: "Home"},
    {id: 2, href: "#about", text: "Profile"},
    {id: 3, href: "#Portfolio", text: "Portfolio"},
    {id: 4, href: "#Projects", text: "Projects"},
];

export const smLinks = [
    {id: 1, href: "https://www.linkedin.com/in/innocent-ihedioha-2545ba229", icon: 'fab fa-linkedin'},
    {id: 1, href: "https://github.com/EjikesII", icon: 'fab fa-github'},
    {id: 1, href: "https://www.twitter.com/seniorcitizen22", icon: 'fab fa-twitter'},
];

export const portfolio = [
    {
        id:1,
        icon:"fab fa-node fa-fw",
        header:"Node.Js Projects Repo",
        text:"This repo contains a list of all my Backend Node.js projects",
    },
    {
        id:2,
        icon:"fab fa-react fa-fw",
        header:"react Projects Repo",
        text:"This repo contains a list of all my frontend React.js projects",
    },
    {
        id:3,
        icon:"fab fa-dev fa-fw",
        header:"DevOps Projects Repo",
        text:"This repo contains a list of some my Docker containerization,Linux automation and K8s orchestration projects",
    },
];

export const projects = [
    {
        id: 1, 
        image: tour1, 
        stack: "HTML, CSS & React.JS", 
        title: "E-Market Square", 
        info: "The E-market Square App is built on React JS and MongoDB stack. it is a frontend implementation of the Node Emart-Shop",
        hosted: "Heroku",
        active: "Live view: Yes",
        Author: "Innocent Ihedioha",
    },
    {
        id: 2, 
        image: tour2, 
        stack: "Node.Js, Mongo DB and Express Js", 
        title: "E-Mart Shop", 
        info: "The E-market Square App is built on Node.Js and MongoDB stack. it is a backend implementation of the React.Js Emart-Shop",
        hosted: "AWS",
        active: "On-Demand",
        Author: "Innocent Ihedioha",
    },
    {
        id: 3,
        image: tour3, 
        stack: "Node.Js", 
        title: "Shopaholic", 
        info: "A containerized microservices built on docker, K8s, and Linux VM on AWS. Can run on any platform that supports container orchestration",
        hosted: "DockerHub, AWS clouds",
        active: "Containerized",
        Author: "Innocent Ihedioha",
    },
];