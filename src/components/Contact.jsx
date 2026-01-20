import React from 'react';
import { portfolioData } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <h2>Let's Connect</h2>
                <p>I'm always open to discussing web development, open-source projects, or new opportunities.</p>
                <div className="footer-links">
                    <a href={portfolioData.about.socials.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={portfolioData.about.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:pranitaurlam@gmail.com">Email</a>
                </div>
                <div className="copyright">
                    © {new Date().getFullYear()} Pranita Urlam. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Contact;
