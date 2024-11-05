import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import DateTimeCondition from "./DateTimeCondition";
import avatar from "./assets/images/logo.svg";
import MyVideo from "./components/MyVideo";
import AudioLab from "./components/AudioLab";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        {/* <a href="#" className="nav-item">
          Homepage
        </a> */}
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <DateTimeCondition />

      {/* Images */}
      <img src={avatar} height={200} alt="a logo example" />
      <img
        src={require("./assets/images/logo.svg")}
        height={200}
        alt="a logo example"
      />

      {/* Video */}
      <MyVideo />
      <p></p>

      {/* Lab */}
      <AudioLab />
    </div>
  );
}

export default App;
