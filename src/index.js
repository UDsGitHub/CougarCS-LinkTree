import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "../public/images/cougarcslogo.png";
import SocialLinks from './SocialLinks';

ReactDOM.render(
  <React.StrictMode>
    <body className="App-body">
      <header className="App-header">
        <img src={logo} alt="" className="header_logo" />
      </header>
      <div className="grid_container">
        <section className="important_links">
          <h1>Important Links</h1>
        </section>
        <section className="social_links">
          <h1>Connect With Us</h1>
          <SocialLinks/>
        </section>
      </div>
    </body>
  </React.StrictMode>,
  document.getElementById("root")
);
