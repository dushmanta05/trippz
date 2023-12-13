import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Destination from "../components/destination/Destination";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero"
        heroImg="https://images.unsplash.com/photo-1639980290886-6bdd61c7582b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
    </div>
  );
};

export default Home;
