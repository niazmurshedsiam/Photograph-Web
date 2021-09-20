import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About></About>
    </div>
  );
};

export default Home;
