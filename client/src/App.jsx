import Topbar from "./components/topbar/Topbar";
import Home from "./components/Home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Home/>
       <Skills/>
       <Projects/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
