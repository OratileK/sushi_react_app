import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background (2).jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Sasha's SushiBar </h1>
        <p> PURE BLISS WITH EVERY BITE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
