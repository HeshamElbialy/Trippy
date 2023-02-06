import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Headerhome = ({ title, children }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <article
      className="headline text-center p-5"
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-duration="900"
      data-aos-delay="200"
    >
      <h1>{title}</h1>
      <p>{children}</p>
    </article>
  );
};

export default Headerhome;
