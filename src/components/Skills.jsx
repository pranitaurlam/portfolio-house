import React from 'react';
import { portfolioData } from '../data';
import './Skills.css';

const Skills = () => {
    // Combine all skills into one single row
    const allSkills = [
        ...portfolioData.skills.languages,
        ...portfolioData.skills.frontend,
        ...portfolioData.skills.database,
        ...portfolioData.skills.tools,
        "Problem Solving",
        "Teamwork"
    ];

    // Duplicating items to create seamless loop
    const MarqueeRow = ({ items, reverse = false }) => (
        <div className="marquee-row">
            <div className={`marquee-content ${reverse ? 'reverse' : ''}`}>
                {items.map((skill, index) => (
                    <span key={`a-${index}`} className="skill-pill">{skill}</span>
                ))}
                {/* Duplicate for loop */}
                {items.map((skill, index) => (
                    <span key={`b-${index}`} className="skill-pill">{skill}</span>
                ))}
                {items.map((skill, index) => (
                    <span key={`c-${index}`} className="skill-pill">{skill}</span>
                ))}
            </div>
            {/* Second set for seamless visual if width is large */}
            <div className={`marquee-content ${reverse ? 'reverse' : ''}`} aria-hidden="true">
                {items.map((skill, index) => (
                    <span key={`d-${index}`} className="skill-pill">{skill}</span>
                ))}
                {items.map((skill, index) => (
                    <span key={`e-${index}`} className="skill-pill">{skill}</span>
                ))}
                {items.map((skill, index) => (
                    <span key={`f-${index}`} className="skill-pill">{skill}</span>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title fade-in-up">Skills & Technologies</h2>
                <div className="skills-container fade-in-up delay-200">
                    <MarqueeRow items={allSkills} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
