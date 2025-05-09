import React from "react";
import Navbar from "./components/Navbar";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Problem />
      <Solution />
      <Footer />
    </>
  );
};

export default App;
