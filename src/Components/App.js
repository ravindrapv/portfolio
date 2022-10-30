// import React, { useEffect } from "react";
import Education from "./Education";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Profilelinks from "./Profilelinks";
import Projects from "./Projects";
import Skills from "./Skills";
import Blog from "./Blogs";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Projects />
        <Blog />
        <Skills />
        <Education />
        <Profilelinks />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
