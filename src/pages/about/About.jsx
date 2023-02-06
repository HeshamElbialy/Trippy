import React, { useEffect } from "react";
import Headpage from "../../component/Headpage";
import "./about.css";
import Headerimage from "../../assets/night.jpg";
import Navbar from "../../component/Navbar";
import Historyimage from "../../assets/5.jpg";
import Visionimage from "../../assets/9.jpg";
import Missionimage from "../../assets/8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Headpage title="About" image={Headerimage}></Headpage>
      <section className="about">
        <div className="container pt-5 pb-5">
          <div className="about-history ">
            <div
              className="text-box"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <h1>Our History</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                sint impedit, non facere repellendus consequuntur blanditiis,
                illum possimus quo tempore, magni totam quas. Ducimus corporis
                consectetur ipsam? Deserunt, assumenda fugiat.
              </p>
            </div>
            <div
              className="img-box"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <img src={Historyimage} alt="History imag" />
            </div>
          </div>
          <div className="about-vision">
            <div
              className="img-box"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <img src={Visionimage} alt="vision imag" />
            </div>
            <div
              className="text-box"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <h1>Our Vision</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                sint impedit, non facere repellendus consequuntur blanditiis,
                illum possimus quo tempore, magni totam quas. Ducimus corporis
                consectetur ipsam? Deserunt, assumenda fugiat.
              </p>
            </div>
          </div>
          <div className="about-mission ">
            <div
              className="text-box"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                sint impedit, non facere repellendus consequuntur blanditiis,
                illum possimus quo tempore, magni totam quas. Ducimus corporis
                consectetur ipsam? Deserunt, assumenda fugiat.
              </p>
            </div>
            <div
              className="image-box"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <img src={Missionimage} alt="mission imag" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
