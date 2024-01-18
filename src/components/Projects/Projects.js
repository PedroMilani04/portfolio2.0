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
    { id: 1, title: 'Tenzi Game', category: 'ReactJS', info: 'Lorem ipsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Game', img: img3 },
    { id: 2, title: 'Travel Journal', category: 'ReactJS', info: 'Lorem ipsum for Tpsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gravel Journal', img: img9 },
    { id: 3, title: 'React Calculator', category: 'ReactJS', info: 'Lorem ipsum forpsum for Tenzi Gpsum for Tenzi G React Calculator', img: img4 },
    { id: 4, title: 'Weather Report', category: 'ReactJS', info: 'Lorem ipsum for psum for Tenzi Gpsum for Tenzi Gpsum for Tenzi GWeather Report', img: img5 },
    { id: 5, title: '1st Portfolio', category: 'ReactJS', info: 'Lorem ipsum for 1psum for Tenzi Gpsum for Tenzi Gst Portfolio', img: img10 },
    { id: 6, title: 'EJ Landing Page', category: 'ReactJS', info: 'Lorem ipsum fopsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gr EJ Landing Page', img: img11 },
    { id: 7, title: 'Full-stack Notes App', category: 'ReactJS', info: 'Lorem psum for Tenzi Gipsum for Full-stack Notes App', img: img7 },
    { id: 8, title: 'Interactive Brazil Map', category: 'ReactJS', info: 'Lorem psum for Tenzi Gpsum for Tenzi Gipsum for Interactive Brazil Map', img: img8 },
    { id: 9, title: 'NextJS Pokédex', category: 'NextJS', info: 'Lorem ipsum fopsum for Tenzi Gpsum for Tenzi Gr NextJS Pokédex', img: img12 },
    { id: 10, title: 'SQL Login', category: 'NextJS', info: 'Lorem ipsum forpsum for Tenzi G SQL Login', img: img15 },
    { id: 11, title: 'Pokedex', category: 'DOM', info: 'Lorem ipsum forpsum for Tenzi Gpsum for Tenzi G Pokedex', img: img2 },
    { id: 12, title: 'Gesture Controller Stream', category: 'DOM', info: 'Lorem ipsum for Gesture Controller Stream', img: img1 },
    { id: 13, title: 'Shopping Cart', category: 'DOM', info: 'Lorem ipsum for psum for Tenzi Gpsum for Tenzi GShopping Cart', img: img6 },
    { id: 14, title: 'Pokemon Card CSS Practice', category: 'DOM', info: 'Lorem psum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gipsum for Pokemon Card CSS Practice', img: img13 },
    { id: 15, title: '7Wonders', category: 'Angular', info: 'Lorem ipsum for 7Wpsum for Tenzi Gonders', img: img14 },
  ];
  

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All' ? projectsData : projectsData.filter((project) => project.category === selectedCategory)



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


    return (
        <div className='Projects'>
            <h1 className='projecth1' style={{ backgroundPositionY: `${scrollPosition}px` }} data-aos="fade-down" > Projects</h1>
            <div className='button-container'> {/* botao bugfando a responsividade no cel */}
               <div className="buttonstop">
               <button onClick={() => setSelectedCategory('All')} className="button1" data-aos="zoom-in" >All</button>
                <button onClick={() => setSelectedCategory('ReactJS')} className="button1" data-aos="zoom-in">ReactJS</button>
               </div>
               <div className="buttonsbottom">
               <button onClick={() => setSelectedCategory('NextJS')} className="button1" data-aos="zoom-in">NextJS</button>
                <button onClick={() => setSelectedCategory('Angular')} className="button1" data-aos="zoom-in">Angular</button>
                <button onClick={() => setSelectedCategory('DOM')} className="button1" data-aos="zoom-in">DOM</button>
               </div>
            </div>
            <div className='project-content'>
                {filteredProjects.map((project) => (
                    <div key={project.id} className='project' >
                                                <img className="projimg" src={project.img} />

                     <div className="text">
                     <h3 className="projtitle">{project.title}</h3>
                        <p className="projp">{project.info}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
