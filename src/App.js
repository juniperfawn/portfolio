import "./App.css";
import Navigation from "./components/navigation/navigation";
import Home from "./Home";
import ProjectOverview from "./ProjectOverview";
import AboutMe from "./AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<AboutMe />}></Route>
          <Route exact path="/project" element={<ProjectOverview />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
