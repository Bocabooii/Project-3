import React from "react";
import Layout from '../pages/Layout';
// import Auth from '../utils/auth'; 
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
        <div className="container">
        <p>A frequency media player that uses isochronic/binaural tones, relaxation, and meditation music to enhance one's life. It is a brainwave entrainment for people that are trying to hack their brain state to achieve a desired mental state. It uses binaural beat recordings/tones designed to alter brainwaves and consciousness.
        </p>
      </div>
      <div class="image-wrap">
        <img src="/images/binaural.png" />
      </div>
    </Layout>
    
  );
};

export default About;