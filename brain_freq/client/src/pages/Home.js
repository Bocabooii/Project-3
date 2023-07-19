import React from "react";
import AudioPlayer from "../components/AudioPlayer";
import Layout from '../pages/Layout';

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