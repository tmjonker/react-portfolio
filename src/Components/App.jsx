import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Greeting from "./Greeting.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Greeting />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
