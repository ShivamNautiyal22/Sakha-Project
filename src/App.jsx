import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const App = () => {

   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Loading />;
    }
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
