import React from "react";
import AudioPlayer from "../components/AudioPlayer";
import Layout from '../pages/Layout';
import Auth from '../utils/auth'; 
import { Link } from "react-router-dom";

const Home = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Layout>
      <div className="container">
        <AudioPlayer />
      </div>
      <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
    </Layout>
    
  );
};

export default Home;