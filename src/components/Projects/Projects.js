import React, { useState } from 'react';
import './Projects.css'
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

    return (
        <div className='Projects'>
            <div className='button-container'>
                <button onClick={() => setSelectedCategory('All')}>All</button>
                <button onClick={() => setSelectedCategory('ReactJS')}>ReactJS</button>
                <button onClick={() => setSelectedCategory('NextJS')}>NextJS</button>
                <button onClick={() => setSelectedCategory('Angular')}>Angular</button>
                <button onClick={() => setSelectedCategory('DOM')}>DOM</button>
            </div>
            <div className='project-content'>
                {filteredProjects.map((project) => (
                    <div key={project.id} className='project'>
                        <h3>{project.title}</h3>
                        {/* Add other project details */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
