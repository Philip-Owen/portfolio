import React from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
