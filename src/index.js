import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./images/cougarcslogo.png";
import SocialLinks from './components/LinkButtonLayout/SocialLinks';

ReactDOM.render(
  <React.StrictMode>
    <body className="App-body">
      <header className="App-header">
        <img src={logo} alt="" className="header-logo" />
      </header>
      <div className="grid-container">
        <section className="important-links">
          <h1>Important Links</h1>
        </section>
        <section className="social-links">
          <h1>Connect With Us</h1>
          <SocialLinks/>
        </section>
      </div>
    </body>
  </React.StrictMode>,
  document.getElementById("root")
);
