import React from "react";
import Header from "../../component/Header";
import Popular from "../../component/Popular";
import Trips from "../../component/Trips";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Popular />
      <Trips />
    </>
  );
};

export default Home;
