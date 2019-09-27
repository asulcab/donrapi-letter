import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Flow from "../components/Flow";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer from "../components/Footer.js";

const home = () => {
  return (
    <>     
      {/*
      <Hero>
        <Banner
          title="bonitos muebles"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      */}
      <Flow />
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
