import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
