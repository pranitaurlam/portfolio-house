import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ isDark, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo" onClick={() => scrollTo('hero')}>
                    Portfolio
                </div>
                <div className="nav-links">
                    <button onClick={() => scrollTo('about')}>About</button>
                    <button onClick={() => scrollTo('skills')}>Skills</button>
                    <button onClick={() => scrollTo('projects')}>Projects</button>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDark ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
