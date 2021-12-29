import React from "react";
import Header from "../src/components/header/header"
import Stepper from "../src/components/stepper/stepper";
import About from "./components/about/about";

const App = () => {
  return (
    <div>
    <Header/>
    <Stepper/>
    <About/>
    </div>
  );
}

export default App;
