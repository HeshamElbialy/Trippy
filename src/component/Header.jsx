import React from "react";
import Image from "../assets/12.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="section">
          <img src={Image} alt="" />
          <div className="container">
            <div className="text-info">
              <h1>Your Journey Your Story</h1>
              <h5>Choose Your Favourite Destination</h5>
              <a href="/#">
                <button>Travel Plan</button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
