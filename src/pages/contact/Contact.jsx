import React from "react";
import Headerpage from "../../component/Headpage";
import contactImage from "../../assets/2.jpg";
import Navbar from "../../component/Navbar";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Headerpage title="Contact" image={contactImage}></Headerpage>
      <section className="contact pt-5 pb-5">
        <div className="container">
          <h1 className="text-center fw-bold pb-5">Send a message to us!</h1>
          <form
            className="text-center"
            action="https://formsubmit.co/heshamelbialy42@gmail.com"
            method="POST"
          >
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
