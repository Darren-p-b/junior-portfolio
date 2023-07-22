// Imports -> variables -> functions -> return statement -> export

// Imports
import './styles.css';
import React from 'react';
import LinkedIn from './Linked-In-logo.png';
import Github from './Github-logo.png';
// Variables
    // link variables for Home, About, Projects, Contact to find the element by id
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');
    
//     // link variables for personal links online 
//     const github = ""
//     const linkedin = ""
    

// // Functions

// // Return statement
const Navbar = () => {
return (
    <div id='navbar'>
        <img src={LinkedIn} alt="My logo" className='navbar-logo'/>
        <ul className="navbar-ul">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <a href="https://www.linkedin.com/in/d-p-broomhall-ffx4shb19ffx4shb19/"><img src={LinkedIn} alt="Linked-in logo" className='navbar-socials' /></a>
        <a href="https://github.com/Darren-p-b"><img src={Github} alt="Github logo" className='navbar-socials'/></a>
    </div>
)}
// // {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //     <a className="navbar-brand" href="#">Navbar</a>
// //     <button className="navbar-toggler" type="button" data-toggle="collapse"
// //         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
// //         aria-expanded="false" aria-label="Toggle navigation">
// //         <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
// // </nav> */}
// // Export
export default Navbar
// // Styling with bootstrap?
