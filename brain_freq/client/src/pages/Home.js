import React from "react";
import AudioPlayer from "../components/AudioPlayer";
import Layout from  "../pages/Layout";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart/index";

const Home = () => {

  return (
    <Layout>
      <div className="container">
        <AudioPlayer />
        <ProductList />
        <Cart />
      </div>
    </Layout>

  );
};

export default Home;