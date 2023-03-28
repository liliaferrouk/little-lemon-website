import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import ConstumersSay from "../components/ConstumersSay";
import Chicago from "../components/Chicago"
import './Home.css'

const Home = () => {
  return (
    <>
      <Hero/>
      <Specials/>
      <ConstumersSay/>
      <Chicago/>
    </>
  );
};

export default Home;
