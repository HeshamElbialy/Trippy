import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import facebookImage from "../../assets/icons8-facebook.svg";
import Google from "../../assets/icons8-google.svg";
import Twitter from "../../assets/icons8-twitter.svg";
import Navbar from "../../component/Navbar";
import Headpage from "../../component/Headpage";
import Headerimage from "../../assets/night.jpg";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <Navbar />
      <Headpage title="Sign Up" image={Headerimage}></Headpage>
      <section className="sign-page">
        <div className="container">
          <h2>Sign up for Trippy</h2>
          <ul>
            <li>
              <AiOutlineUser className="i" />
              <a href="#/">Use phone or email</a>
            </li>
            <li>
              <img src={facebookImage} alt="" />
              <a href="#/">Continue with Facebook</a>
            </li>
            <li>
              <img src={Google} alt="" />
              <a href="#/">Continue with google</a>
            </li>
            <li>
              <img src={Twitter} alt="" />
              <a href="#/">Continue with Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Signup;
