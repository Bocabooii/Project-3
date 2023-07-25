import React from "react";
import Layout from '../pages/Layout';
// import Auth from '../utils/auth'; 
// import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
        <div className="container">
          <p>
            <b>Phone:</b> +1 888-89-1234
          </p>
          <p>
            <b>Email: </b> some@thing.com
          </p>
      </div>
    </Layout>
    
  );
};

export default Contact;