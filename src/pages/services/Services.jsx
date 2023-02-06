import React, { Fragment, useEffect } from "react";
import Headerimage from "../../assets/night.jpg";
import Navbar from "../../component/Navbar";
import Headpage from "../../component/Headpage";
import Headerhome from "../../component/Headerhome";
import { trips } from "../../data";
import Aos from "aos";
import "aos/dist/aos.css";
import "./services.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <Headpage title="Services" image={Headerimage}></Headpage>
      <section className="services">
        <Headerhome title="Recent Trips">
          You can discover uniqe destination using google maps
        </Headerhome>
        <div className="container trips-container">
          {trips.map(
            (
              {
                title,
                desc,
                image,
                animation,
                animationOffset,
                dataAosDelay,
                dataAosDuration,
              },
              index
            ) => {
              return (
                <Fragment key={index}>
                  <div
                    className="card"
                    data-aos={animation}
                    data-aos-offset={animationOffset}
                    data-aos-delay={dataAosDelay}
                    data-aos-duration={dataAosDuration}
                  >
                    <img src={image} className="card-img-top" alt={title} />
                    <div className="card-body">
                      <h3 className="card-title">{title}</h3>
                      <p className="card-text">{desc}</p>
                    </div>
                  </div>
                </Fragment>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
