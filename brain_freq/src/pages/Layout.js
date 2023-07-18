import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="app-body">
      {children}
      <footer className="app-footer">
        <pre className="ascii-art">
          <code>
            {`▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
              ██░███░██░▄▄▄██░█████░▄▄▀██░▄▄▄░██░▄▀▄░██░▄▄▄
              ██░█░█░██░▄▄▄██░█████░█████░███░██░█░█░██░▄▄▄
              ██▄▀▄▀▄██░▀▀▀██░▀▀░██░▀▀▄██░▀▀▀░██░███░██░▀▀▀
              ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`}
          </code>
        </pre>
        <p>&copy; 2023 Brain Freq. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;