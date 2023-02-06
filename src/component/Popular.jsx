import React, { Fragment, useEffect } from "react";
import { about } from "../data";
import Headerhome from "./Headerhome";
import Aos from "aos";
import "aos/dist/aos.css";

const Popular = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section className="popular">
        <Headerhome title="Popular Destinations">
          Tours give you the opportunity to see a lot, within a time frame
        </Headerhome>
        <div className="container">
          <div className="text-box">
            {about.map(({ id, title, desc, image1, image2 }) => {
              return (
                <Fragment key={id}>
                  <div className="popular-box">
                    <div
                      className="text"
                      data-aos="fade-down"
                      data-aos-offset="100"
                      data-aos-duration="900"
                      data-aos-delay="200"
                      // data-aos-once='true'
                    >
                      <h1>{title}</h1>
                      <p>{desc}</p>
                    </div>
                    <div className="img-box">
                      <img
                        src={image1}
                        alt={image1}
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-duration="900"
                        data-aos-delay="200"
                        // data-aos-once='true'
                      />
                      <img
                        className="img2"
                        src={image2}
                        alt={image2}
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-duration="900"
                        data-aos-delay="200"
                        // data-aos-once='true'
                      />
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
