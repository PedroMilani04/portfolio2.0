import Aos from "aos";
import "aos/dist/aos.css";
import './Projects.css'
import { useState, useEffect } from "react";

const projectsData = [
    { id: 1, title: 'Tenzi Game', category: 'ReactJS', info: 'Lorem ipsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Game', img: 'https://placekitten.com/200/200' },
    { id: 2, title: 'Travel Journal', category: 'ReactJS', info: 'Lorem ipsum for Tpsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gravel Journal', img: 'https://placekitten.com/200/200' },
    { id: 3, title: 'React Calculator', category: 'ReactJS', info: 'Lorem ipsum forpsum for Tenzi Gpsum for Tenzi G React Calculator', img: 'https://placekitten.com/200/200' },
    { id: 4, title: 'Weather Report', category: 'ReactJS', info: 'Lorem ipsum for psum for Tenzi Gpsum for Tenzi Gpsum for Tenzi GWeather Report', img: 'https://placekitten.com/200/200' },
    { id: 5, title: '1st Portfolio', category: 'ReactJS', info: 'Lorem ipsum for 1psum for Tenzi Gpsum for Tenzi Gst Portfolio', img: 'https://placekitten.com/200/200' },
    { id: 6, title: 'EJ Landing Page', category: 'ReactJS', info: 'Lorem ipsum fopsum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gr EJ Landing Page', img: 'https://placekitten.com/200/200' },
    { id: 7, title: 'Full-stack Notes App', category: 'ReactJS', info: 'Lorem psum for Tenzi Gipsum for Full-stack Notes App', img: 'https://placekitten.com/200/200' },
    { id: 8, title: 'Interactive Brazil Map', category: 'ReactJS', info: 'Lorem psum for Tenzi Gpsum for Tenzi Gipsum for Interactive Brazil Map', img: 'https://placekitten.com/200/200' },
    { id: 9, title: 'NextJS Pokédex', category: 'NextJS', info: 'Lorem ipsum fopsum for Tenzi Gpsum for Tenzi Gr NextJS Pokédex', img: 'https://placekitten.com/200/200' },
    { id: 10, title: 'SQL Login', category: 'NextJS', info: 'Lorem ipsum forpsum for Tenzi G SQL Login', img: 'https://placekitten.com/200/200' },
    { id: 11, title: 'Pokedex', category: 'DOM', info: 'Lorem ipsum forpsum for Tenzi Gpsum for Tenzi G Pokedex', img: 'https://placekitten.com/200/200' },
    { id: 12, title: 'Gesture Controller Stream', category: 'DOM', info: 'Lorem ipsum for Gesture Controller Stream', img: 'https://placekitten.com/200/200' },
    { id: 13, title: 'Shopping Cart', category: 'DOM', info: 'Lorem ipsum for psum for Tenzi Gpsum for Tenzi GShopping Cart', img: 'https://placekitten.com/200/200' },
    { id: 14, title: 'Pokemon Card CSS Practice', category: 'DOM', info: 'Lorem psum for Tenzi Gpsum for Tenzi Gpsum for Tenzi Gipsum for Pokemon Card CSS Practice', img: 'https://placekitten.com/200/200' },
    { id: 15, title: '7Wonders', category: 'Angular', info: 'Lorem ipsum for 7Wpsum for Tenzi Gonders', img: 'https://placekitten.com/200/200' },
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
            <h1 className='projecth1' style={{ backgroundPositionY: `${scrollPosition}px` }}> Projects</h1>
            <div className='button-container'>
                <button onClick={() => setSelectedCategory('All')} className="button1" >All</button>
                <button onClick={() => setSelectedCategory('ReactJS')} className="button1">ReactJS</button>
                <button onClick={() => setSelectedCategory('NextJS')} className="button1">NextJS</button>
                <button onClick={() => setSelectedCategory('Angular')} className="button1">Angular</button>
                <button onClick={() => setSelectedCategory('DOM')} className="button1">DOM</button>
            </div>
            <div className='project-content'>
                {filteredProjects.map((project) => (
                    <div key={project.id} className='project'  data-aos="fade-up" data-aos-delay="160">
                                                <img className="projimg" src={project.img} />

                        <h3 className="projtitle">{project.title}</h3>
                        <p className="projp">{project.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
