import React, { Fragment, useEffect } from "react";
import Headerhome from "./Headerhome";
import { trips } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

const Trips = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="trips">
      <Headerhome title="Recent Trips">
        You can discover uniqe destination using google maps
      </Headerhome>
      <div className="container trips-container">
        {trips.map(
          ({
            id,
            title,
            desc,
            image,
            animation,
            animationOffset,
            dataAosDelay,
            dataAosDuration,
          }) => {
            return (
              <Fragment key={id}>
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
  );
};

export default Trips;
