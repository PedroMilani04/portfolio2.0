import Aos from "aos";
import "aos/dist/aos.css";
import './Projects.css'
import { useState, useEffect } from "react";

const projectsData = [
    { id: 1, title: 'Tenzi Game', category: 'ReactJS' },
    { id: 2, title: 'Travel Journal', category: 'ReactJS' },
    { id: 3, title: 'React Calculator', category: 'ReactJS' },
    { id: 4, title: 'Weather Report', category: 'ReactJS' },
    { id: 5, title: '1st Portfolio', category: 'ReactJS' },
    { id: 6, title: 'EJ Landing Page', category: 'ReactJS' },
    { id: 7, title: 'Full-stack Notes App', category: 'ReactJS' },
    { id: 8, title: 'Interactive Brazil Map', category: 'ReactJS' },
    { id: 9, title: 'NextJS Pokédex', category: 'NextJS' },
    { id: 10, title: 'SQL Login', category: 'NextJS' },
    { id: 11, title: 'Pokedex', category: 'DOM' },
    { id: 12, title: 'Gesture Controller Stream', category: 'DOM' },
    { id: 13, title: 'Shopping Cart', category: 'DOM' },
    { id: 14, title: 'Pokemon Card CSS Practice', category: 'DOM' },
    { id: 15, title: '7Wonders', category: 'Angular' },

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
                <button onClick={() => setSelectedCategory('All')}>All</button>
                <button onClick={() => setSelectedCategory('ReactJS')}>ReactJS</button>
                <button onClick={() => setSelectedCategory('NextJS')}>NextJS</button>
                <button onClick={() => setSelectedCategory('Angular')}>Angular</button>
                <button onClick={() => setSelectedCategory('DOM')}>DOM</button>
            </div>
            <div className='project-content'>
                {filteredProjects.map((project) => (
                    <div key={project.id} className='project'  data-aos="fade-up">
                        <h3>{project.title}</h3>
                        {/* Add other project details */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
