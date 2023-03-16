// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import{Route,Routes} from "react-router-dom"
import PortfolioPage from "./Pages/Portfolio/PortfolioPage";
import Projects from "./Pages/Portfolio/Projects";

function App() {
   return (
    <>
      <Navbar />
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<PortfolioPage />}/>
          <Route path="/writing" element={<Portfolio />}/>
          <Route path="/projects" element={<Projects />}/>

        </Routes>
      </div>
    </>
  );
}

export default App;
