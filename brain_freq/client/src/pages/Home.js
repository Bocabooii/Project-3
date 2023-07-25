import React from "react";
import AudioPlayer from "../components/AudioPlayer";
import Layout from '../pages/Layout';
// import Auth from '../utils/auth';
// import { Link } from "react-router-dom";

const Home = () => {

  return (
    <Layout>
      <div className="container">
        <AudioPlayer />
      </div>
    </Layout>

  );
};

export default Home;