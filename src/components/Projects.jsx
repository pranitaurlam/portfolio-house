import React from 'react';
import { portfolioData } from '../data';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {portfolioData.projects.map((project, index) => (
                        <div key={index} className="project-card fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map(tech => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
