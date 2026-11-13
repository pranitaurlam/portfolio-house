import React from 'react';
import { portfolioData } from '../data';
import './Hero.css';

const INTRO = `Hi, I’m Urlam Pranita, a student at Medhavi Skills University WISE program by Polaris School of Technology with a strong interest in software development and open-source systems. I enjoy building clean, efficient solutions and continuously improving my problem-solving skills through hands-on projects and coding practice.`;

// Reveals the intro one word at a time, each fading up out of a blur.
const WordReveal = ({ text, className, start = 600, step = 45 }) => (
    <p className={className}>
        {text.split(' ').map((word, i) => (
            <span
                key={i}
                className="word"
                style={{ animationDelay: `${start + i * step}ms` }}
            >
                {word}
            </span>
        ))}
    </p>
);

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-badge fade-in-up">
                        <span className="status-dot" />
                        Open to internships &amp; opportunities
                    </span>
                    <h1 className="hero-title fade-in-up delay-100">
                        Hi, I'm <span className="highlight">Urlam Pranita</span>
                    </h1>
                    <WordReveal text={INTRO} className="hero-subtitle" />
                    <div className="hero-buttons fade-in-up delay-300">
                        <a
                            href={portfolioData.about.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn primary"
                        >
                            GitHub
                        </a>
                        <a
                            href={portfolioData.about.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="btn secondary"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="hero-photo fade-in-up delay-200">
                    <div className="photo-frame">
                        <img
                            src="/pranita.jpg"
                            alt="Portrait of Urlam Pranita"
                            width="900"
                            height="900"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
