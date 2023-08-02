// Imports
import './styles.css';
import React from 'react';
import Portrait from './me.jpeg';

// Variables
    
// Functions

// Return statement
    // Arrow function is necessary for the return statement to work without any other functions
const aboutMe = () => {
return (
    <div id='about-me'>
        <div className='introduction'>
            <p>Hello there! I'm Darren, a Full-Stack Web Developer Bootcamp Graduate from the West Midlands</p>
            <img src={Portrait} alt="My portrait" className='portrait'/>
        </div>
        <div className='message'>
        </div>
    </div>
)}

// Export
export default aboutMe;

