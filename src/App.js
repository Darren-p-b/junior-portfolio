import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/About-me/About-me';

// Time to build a portfolio!
// 0. Are there any requirements? Packages? Libraries? 
// 1. Create a component tree
  // Navbar
  // About me
  // Skills 
  // Projects
  // Contact
// 2. Create a wireframe
  // Navbar with links to each section & personal links
  // Decide layout
  // Decide color scheme
  // Decide font
// 3. Create root css variables for the color scheme and given them semantic names
  // Primary color
  // Secondary color
  // Font color
  // Background color
  // Bootstrap?
// 4. Plan inside the components
  // Navbar
  // About me
  // Skills
  // Projects
  // Contact
// 5. Stretch goals
  // Consider a database
  // Consider a backend
  // Consider a logo
  // Consider dark/light mode

function App() {
  return (
    <div className="App">
        <header>
          <Navbar />
          <AboutMe />
        </header>
    </div>
  );
}

export default App;
