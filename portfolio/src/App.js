// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import About from "./components/About"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <p>hi</p> */}
        <About/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
