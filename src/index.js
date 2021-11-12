import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./images/cougarcslogo.png";
import SocialLinksContainer from "./components/SocialLinks/SocialLinksContainer/SocialLinksContainer";
import CarouselLinkContainer from './components/ImportantLinksCarousel/CarouselLinkContainer/CarouselLinkContainer';

ReactDOM.render(
  <React.StrictMode>
    <body className="App-body">
      <header className="App-header">
        <img src={logo} alt="" className="header-logo" />
      </header>
      <div className="grid-container">
        <section className="important-links">
          <h1>Important Links</h1>
          <CarouselLinkContainer />
        </section>
        <section className="social-links">
          <h1>Connect With Us</h1>
          <SocialLinksContainer />
        </section>
      </div>
    </body>
  </React.StrictMode>,
  document.getElementById("root")
);
