import Aos from "aos";
import "aos/dist/aos.css";
import './Projects.css'
import { useState, useEffect } from "react";
import img1 from "./imgs/portfolio1.png"
import img2 from "./imgs/portfolio2.png"
import img3 from "./imgs/portfolio3.png"
import img4 from "./imgs/portfolio4.png"
import img5 from "./imgs/portfolio5.png"
import img6 from "./imgs/portfolio6.png"
import img7 from "./imgs/portfolio7.png"
import img8 from "./imgs/portfolio8.png"
import img9 from "./imgs/portfolio9.png"
import img10 from "./imgs/portfolio10.png"
import img11 from "./imgs/portfolio11.png"
import img12 from "./imgs/portfolio12.png"
import img13 from "./imgs/portfolio13.png"
import img14 from "./imgs/portfolio14.png"
import img15 from "./imgs/portfolio15.png"


const projectsData = [
    { id: 8, title: 'Interactive Brazil Map', category: 'ReactJS', info: 'A interactive map of all the Brazillian states, including name, capital, biome, time zone and photos. Made with ReactJS, GeoJSON Polygons and NPoint Cloud Hosting.', img: img8, url: 'https://brazil-map.vercel.app/' },
    { id: 4, title: 'Weather Report', category: 'ReactJS', info: 'A Weather Forecast application made with ReactJS and OpenWeatherMap API, containing 200.000+ cities, temperature, wind speed, humidity and more!', img: img5, url: 'https://react-weather-report.vercel.app/' },
    { id: 7, title: 'Full-stack Notes App', category: 'ReactJS', info: 'A CRUD App, made using ReactJS, MongoDB, NodeJS, ExpressJS and hosted in AWS, with the backend API hosted on EC2 and the frontend in Amazon S3.', img: img7, url: 'http://notes-frontend-pedro.s3-website-us-east-1.amazonaws.com/' },
    { id: 5, title: '1st Portfolio', category: 'ReactJS', info: 'My first ever portfolio project, made in December 2022! In it, you can find projects from 2022-23, my first time using React Router, Light/Dark mode options and a my first deep dive into CSS.', img: img10, url: 'https://pedro-portfolio-cyan.vercel.app' },
    { id: 3, title: 'React Calculator', category: 'ReactJS', info: 'A fully functional calculator made using ReactJS, including all the basic operations and features.', img: img4, url: 'https://react-calculator-kappa-ten.vercel.app' },
    { id: 6, title: 'EJ Landing Page', category: 'ReactJS', info: "A simple ReactJS Landing Page project, made as a challenge for myself, with the intent of joining Presidnte Prudente UNESP's Junior Company, EJCOMP.", img: img11, url: 'https://ej-landingpage.vercel.app' },
    { id: 1, title: 'Tenzi Game', category: 'ReactJS', info: 'A begginer Tenzi project, where you roll the dies until all numbers are the same. Made with the intent of having a more in-depth understanding of programming logic as a begginer developer.', img: img3, url: 'http://tenzi-game-project.vercel.app/' },
    { id: 2, title: 'Travel Journal', category: 'ReactJS', info: 'A "Travl Journal" application made in early 2022, made primarly to have my first contacts with React and URLs in projects.', img: img9, url: 'http://traveljournal-eta.vercel.app/' },
    { id: 15, title: '7Wonders', category: 'Angular', info: 'My first Angular Project and a passion project of mine. I Wanted to create a project revolving History, a topic that i love, and the project begun. Came up with new ways of doing CSS and had a real hands-on practice with Angular17.', img: img14, url: 'https://7wonders-beige.vercel.app/' },
    { id: 9, title: 'NextJS Pokédex', category: 'NextJS', info: 'First contact with Next, a "Remake" of my original HTML Pokedex, this time with a lot more Pokémon, Custom pages, Pokémon, CSS and a really solid practice with Next.', img: img12, url: 'https://pokedex-next-six-rho.vercel.app/' },
    { id: 10, title: 'SQL Login', category: 'NextJS', info: 'A NextJS full-stack practice with Cloud Hosting of Databases, made primarly to sharpen my Database/Application connection knowledge, Programming Logic and my understanding of CSS, this time utilizing TailwindCSS.', img: img15, url: 'https://next-login-front.vercel.app/' },
    { id: 11, title: 'Pokedex', category: 'DOM', info: 'A web project using HTML5, CSS3 and JavaScript to create a stylized pokédex based on the game franchise "Pokémon".', img: img2, url: 'http://pokedex-ph.vercel.app/' },
    { id: 12, title: 'Gesture Controller Stream', category: 'DOM', info: 'A pre-trained machine learning project, using of tools like Web Workers for the Machine Learning process execution, TensorFlowJS and a variety of APIs.', img: img1, url: 'https://pedromilani04.github.io/hands-detection-stream/' },
    { id: 13, title: 'Shopping Cart', category: 'DOM', info: 'A vanilla javascript "Shopping Cart" project, made with the intention of acquiring more experience on working with JavaScript and its functionalities in a recurring enviroment.', img: img6, url: 'https://pedromilani04.github.io/e-commerce-cart/' },
    { id: 14, title: 'Pokemon Card CSS Practice', category: 'DOM', info: 'A really simple application inspired by Pokemon Company official website, trying to replicate the same effect seem there with my own knowledge of JavaScript for positioning and CSS.', img: img13, url: 'https://poke-card1.vercel.app/' },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [clickedProject, setClickedProject] = useState(null);
  
    const filteredProjects =
      selectedCategory === 'All'
        ? projectsData
        : projectsData.filter((project) => project.category === selectedCategory);
  
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      // Add a scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleClick = (projectId) => {
      // Set the clicked project id
      setClickedProject(projectId);
    };
  
    return (
      <div className='Projects'>
        <h1
          className='projecth1'
          style={{ backgroundPositionY: `${scrollPosition}px` }}
          data-aos='fade-down'
        >
          {' '}
          Projects
        </h1>
        <div className='button-container'>
          <div className='buttonstop'>
            <button onClick={() => setSelectedCategory('All')} className='button1'>
              All
            </button>
            <button onClick={() => setSelectedCategory('ReactJS')} className='button1'>
              ReactJS
            </button>
          </div>
          <div className='buttonsbottom'>
            <button onClick={() => setSelectedCategory('NextJS')} className='button1'>
              NextJS
            </button>
            <button onClick={() => setSelectedCategory('Angular')} className='button1'>
              Angular
            </button>
            <button onClick={() => setSelectedCategory('DOM')} className='button1'>
              DOM
            </button>
          </div>
        </div>
        <div className='project-content'>
          {filteredProjects.map((project) => (
            <a href={project.url} key={project.id}>
              <div
                className={`project`}
                data-aos='fade-up'
                onMouseDown={() => handleClick(project.id)}
              >
                <img className='projimg' src={project.img} />
  
                <div className='text'>
                  <h3 className='projtitle'>{project.title}</h3>
                  <p className='projp'>{project.info}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;