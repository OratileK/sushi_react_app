import React from "react";
import MultipleSushis from "../assets/assorted nigari.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleSushis})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Sasha's SushiBar, a delightful and authentic taste of Japan nestled in the heart of South Africa. Our small traditional sushi website brings the true essence of Japanese cuisine to your doorstep.
        At Sasha's SushiBar, we pride ourselves on offering a unique and memorable dining experience. Inspired by the rich culinary heritage of Japan, our skilled chefs meticulously prepare each sushi roll with love and precision, using only the freshest and finest ingredients available. Whether you're a seasoned sushi connoisseur or a first-time adventurer, we have something to tantalize your taste buds.
        Founded by Sasha Nakamura, a passionate sushi aficionado with a vision to share her love for Japanese cuisine, Sasha's SushiBar was born from a humble beginning. What started as a small family-owned sushi bar has now evolved into an online platform that brings the same authentic flavors to sushi enthusiasts across South Africa.
        <br></br>
        Sasha's SushiBar is not just a place to enjoy extraordinary food; it's a community of food lovers who appreciate the beauty of traditional sushi. We foster a warm and welcoming atmosphere where customers become part of our extended family. Our commitment to exceptional service ensures that every visit, whether in-person or online, is nothing short of remarkable.


        </p>
      </div>
    </div>
  );
}

export default About;