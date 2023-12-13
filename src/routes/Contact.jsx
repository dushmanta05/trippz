import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImg="https://images.unsplash.com/photo-1612871802733-d26bfb7b3da7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact"
        btnClass="hide"
      />
    </div>
  );
};

export default Contact;
