import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container text-light">
        <div className="trippy d-flex justify-content-between align-items-center pb-5">
          <div className="head">
            <h1 className="fw-bold">Trippy</h1>
            <small className="fw-bold">Choose your favourite destination</small>
          </div>
          <div className="social">
            <a href="/#">
              <FaFacebookF />
            </a>
            <a href="/#">
              <BsInstagram />
            </a>
            <a href="/#">
              <BsTwitter />
            </a>
            <a href="/#">
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className="links ">
          <div className="project">
            <h2>Projects</h2>
            <h5>Changing</h5>
            <h5>Status</h5>
            <h5>License</h5>
            <h5>All Versions</h5>
          </div>
          <div className="community">
            <h2>Community</h2>
            <h5>Github</h5>
            <h5>Issues</h5>
            <h5>Project</h5>
            <h5>Twitter</h5>
          </div>
          <div className="help">
            <h2>Help</h2>
            <h5>Support</h5>
            <h5>Troubleshooting</h5>
            <h5>Contaact Us</h5>
          </div>
          <div className="others">
            <h2>Others</h2>
            <h5>Terms of Services</h5>
            <h5>Privacy Policy</h5>
            <h5>License</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
