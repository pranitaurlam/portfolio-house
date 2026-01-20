import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import './Section.css';

const Typewriter = ({ text, speed = 30 }) => {
    const [displayedContent, setDisplayedContent] = useState([]);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        // Parse text into structured segments: [{ text: "...", bold: boolean, newline: boolean }]
        const segments = [];
        const paragraphs = text.split('\n\n');

        paragraphs.forEach((para, i) => {
            const parts = para.split('**');
            parts.forEach((part, j) => {
                if (part) {
                    segments.push({ text: part, bold: j % 2 === 1 });
                }
            });
            if (i < paragraphs.length - 1) {
                segments.push({ text: '', newline: true });
            }
        });

        // Flatten segments into a character stream for simpler logic could be hard with bold.
        // Instead, let's just reveal character by character based on total length.

        let currentSegmentIndex = 0;
        let currentCharIndex = 0;
        let timeoutId;

        const type = () => {
            if (currentSegmentIndex >= segments.length) {
                setIsTyping(false);
                return;
            }

            const segment = segments[currentSegmentIndex];

            if (segment.newline) {
                setDisplayedContent(prev => [...prev, { ...segment }]);
                currentSegmentIndex++;
                currentCharIndex = 0;
                timeoutId = setTimeout(type, speed);
                return;
            }

            // Add one char
            const char = segment.text[currentCharIndex];

            setDisplayedContent(prev => {
                const newContent = [...prev];
                const lastSegment = newContent[newContent.length - 1];

                // If we are starting a new segment or the last one in state isn't the current one being typed
                if (!lastSegment || newContent.length - 1 < currentSegmentIndex) {
                    // Need to handle previous completed segments if logic allowed skipping, 
                    // but here we push progressively.
                    // Actually, we need to replicate the structure.
                    // Let's refine: displayedContent is the list of fully or partially typed segments.
                    return [...prev, { text: char, bold: segment.bold, partial: true }];
                } else {
                    // Append to last segment if it matches our current typing segment type?
                    // Actually, easier to maintain a separate "renderedSegments" array in the effect closure
                    // and just update state with the specific change? 
                    // React state updates are async, so let's rebuild the array.

                    // Simpler approach: 
                    // Just track `totalCharsRevealed`. 
                    // Render function does the calculation.
                    return []; // unused in this logic branch
                }
            });

            // Let's restart the approach: 
            // Just modify a separate object loop.
        };

        // Better Approach:
        // Simply render based on a "limit" index.
        let totalChars = 0;
        segments.forEach(s => totalChars += (s.text ? s.text.length : 0));

        let charCount = 0;

        const interval = setInterval(() => {
            charCount++;
            setDisplayedContent(renderAt(segments, charCount));
            if (charCount >= totalChars) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, speed);

        return () => clearInterval(interval);

    }, [text, speed]);

    // Helper to slice the segments based on char count
    const renderAt = (segments, count) => {
        let remaining = count;
        const result = [];

        for (let segment of segments) {
            if (remaining <= 0) break;

            if (segment.newline) {
                result.push(segment);
                continue;
            }

            const len = segment.text.length;
            if (remaining >= len) {
                result.push(segment);
                remaining -= len;
            } else {
                result.push({ ...segment, text: segment.text.substring(0, remaining) });
                remaining = 0;
            }
        }
        return result;
    };

    return (
        <div className="typewriter-content">
            {groupSegmentsIntoParagraphs(displayedContent)}
            {isTyping && <span className="cursor">|</span>}
        </div>
    );
};

// Helper to group flat segments back into <p> tags
const groupSegmentsIntoParagraphs = (segments) => {
    const paragraphs = [];
    let currentPara = [];

    segments.forEach((seg, i) => {
        if (seg.newline) {
            paragraphs.push(<p key={i}>{currentPara}</p>);
            currentPara = [];
        } else {
            currentPara.push(
                seg.bold ? <strong key={i}>{seg.text}</strong> : <span key={i}>{seg.text}</span>
            );
        }
    });
    if (currentPara.length > 0) {
        paragraphs.push(<p key="last">{currentPara}</p>);
    }
    return paragraphs;
};


const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <Typewriter text={portfolioData.about.description} speed={20} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
