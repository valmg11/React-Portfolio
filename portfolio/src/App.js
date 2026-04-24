// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Intro/>

        {/* <p>hi</p> */}
        <About/>
        <Projects/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
