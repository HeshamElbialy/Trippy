import React, { useState } from "react";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavShowing, setisNavShowing] = useState(false);
  return (
    <>
      <div className="container nav-container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link
              className="navbar-brand logo"
              to="/"
              onClick={() => setisNavShowing(false)}
            >
              Trippy
            </Link>
            <button
              onClick={() => setisNavShowing((prev) => !prev)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {isNavShowing ? (
                <AiOutlineClose />
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
              {/* <span className="navbar-toggler-icon"></span>
              <AiOutlineClose className="close" /> */}
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <AiOutlineClose className="close" />
                <li className="nav-item">
                  <Link
                    className=" nav-link active p-2"
                    aria-current="page"
                    to="/"
                  >
                    <AiOutlineHome className="icon"/>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2" to="/about">
                    <BsFillInfoCircleFill className="icon" />
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2" to="/services">
                    <MdOutlineHomeRepairService className="icon" />
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2" to="/contact">
                    <IoMdContact className="icon" />
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link sign" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
