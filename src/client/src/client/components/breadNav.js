import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/breadNav-custom-css.css";

class BreadNavBar extends Component {
  render() {
    setInterval(() => {
      const applyLink = document.getElementById("apply-Link");
      applyLink.classList.add("red-color");
      applyLink.classList.remove("blue-color");
    }, 500);
    setInterval(() => {
      const applyLink = document.getElementById("apply-Link");
      applyLink.classList.remove("red-color");
      applyLink.classList.add("blue-color");
    }, 1000);
    return (
      <React.Fragment>
        <section className="w3l-top-header-content">
          <div className="hny-top-menu">
            <div className="top-hd back" style={{ background: "#d63a3a" }}>
              <div className="container-fluid">
                <div className="row">
                  <ul className="social-top col-md-7 padded">
                    <li className="fonted">
                      <span
                        className="fa fa-exclamation-circle"
                        style={{ color: "#FFF" }}
                      ></span>
                      &nbsp;&nbsp;
                      <Link to="/covid-notice">
                        <span className="underline underlined">
                          COVID-19: Important information for VU Learners and
                          Team Members.
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="accounts col-md-5"></ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hny-top-menu">
            <div className="top-hd">
              <div className="container-fluid">
                <div className="row">
                  <ul className="social-top col-md-7 padded">
                    <li className="fonted">
                      Join us Now for September 2022 intake{" "}
                      <a
                        href="https://eadmissions.vu.ac.ug/"
                        target="_blank"
                        rel="noreferrer"
                        className="fonted underline"
                        style={{
                          color: "#04f",
                          fontSize: "20px",
                          paddingLeft: "10px",
                        }}
                      >
                        <b id="apply-Link" className="aa">
                          Apply Now
                        </b>
                        &nbsp;
                        <b
                          style={{
                            fontSize: "16px",
                            color: "#0077b5",
                          }}
                        >
                          VU Upcoming 6<sup>th</sup> Graduation Happening on 3
                          <sup>rd</sup> September 2022
                        </b>
                      </a>
                    </li>
                  </ul>
                  <ul className="accounts col-md-5">
                    {/* <li className="top_li underline"><Link to="/staff">Staff</Link></li> */}
                    <li className="top_li underline">
                      <Link to="/library">Library</Link>
                    </li>
                    <li className="top_li underline">
                      <Link to="/alumni">Alumni</Link>
                    </li>
                    <li className="top_li underline">
                      <Link to="/downloads">Downloads</Link>
                    </li>
                    {/* <li className="top_li underline"><Link to="/news">News</Link></li>
							<li className="top_li underline"><Link to="/events-hub">Events</Link></li> */}
                    <li className="top_li underline">
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li className="top_li underline">
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    {/* <li className="top_li underline"><Link to="/life-at-vu">Life At VU</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BreadNavBar;
