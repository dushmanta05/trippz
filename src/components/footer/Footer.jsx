import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="footer-logo">
          <h1>
            Trippz<span>.</span>
          </h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="socials">
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="project">
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div className="community">
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">FAQs</a>
        </div>
        <div className="help">
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Trip Guide</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="others">
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
          <a href="/">Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
