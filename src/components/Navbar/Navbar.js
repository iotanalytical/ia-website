import "./Navbar.scss";

import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 5) {
      this.setState({
        scrollingLock: true,
      });
    } else if (window.scrollY < 5) {
      this.setState({
        scrollingLock: false,
      });
    }
  }
  render() {
    return (
      <div
        className={`sticky-wrapper ${
          this.state.scrollingLock ? "is-sticky" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg navbar-dark navbar-header fixed-top sticky sticky-dark pl-0 pr-0">
          <div className="container">
            <AnchorLink className="navbar-brand" href="#header">
              {/* <img src="./../assets/images/logo.png" height="35" alt="logo" /> */}
              <h3>IoT Analytical</h3>
            </AnchorLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ion ion-md-menu"></i>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <AnchorLink className="nav-link" href="#about">
                    About
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#features">
                    Features
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" offset="80" href="#video">
                    Video
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#faq">
                    FAQ
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#team">
                    Team
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink className="nav-link" href="#contact">
                    Contact
                  </AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

