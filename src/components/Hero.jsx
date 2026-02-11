import React from 'react';
import { portfolioData } from '../data';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <h1 className="hero-title fade-in-up">
                    Hi, I'm <span className="highlight">Pranita Urlam</span>
                </h1>
                <p className="hero-subtitle fade-in-up delay-200">
                    First-year student at Medhavi Skills University WISE program by Polaris School of Technology with a strong interest in software development.
                </p>
                <div className="hero-buttons fade-in-up delay-300">
                    <a href={portfolioData.about.socials.github} target="_blank" rel="noreferrer" className="btn primary">
                        GitHub
                    </a>
                    <a href={portfolioData.about.socials.linkedin} target="_blank" rel="noreferrer" className="btn secondary">
                        LinkedIn
                    </a>
                    <a href="mailto:pranitaurlam@gmail.com" className="btn secondary">
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
