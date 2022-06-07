import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import BannerHome from "./bannerHome";
import NewsHub from "./news-hub";
//import Events from './events';
import Testimonies from "./testimonies";
import Footer from "./footer";
import { Link } from "react-router-dom";
import SelectPath from "./select-path";
import CalculatorFees from "./calculator-modal";
import "../assets/css/breadNav-custom-css.css";

class Home extends Component {
  change_icon(id, id2) {
    var element = document.getElementById(id);
    element.classList.add("hider");
    var element2 = document.getElementById(id2);
    element2.classList.add("block");
  }
  change_icon2(id, id2) {
    var element = document.getElementById(id);
    element.classList.remove("hider");
    var element2 = document.getElementById(id2);
    element2.classList.remove("block");
    console.log("HI4");
  }
  popCal() {
    var modal = document.getElementById("cal-myModal");
    modal.style.display = "block";
  }
  promoClose() {
    var modal = document.getElementById("myModalpromo");
    modal.style.display = "none";
  }
  componentDidMount() {
    //document.getElementById("myModalpromo").style.display= "block";
    window.onscroll = function () {
      stickyMenu();
    };

    var header = document.getElementById("head_runner");
    var sticky = header.offsetTop;

    function stickyMenu() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <BreadNavBar />
        <NavBar />
        <BannerHome />
        <div id="myModalpromo" className="modalpromo">
          <div className="modal-content-promo">
            <span className="closepromo underline" onClick={this.promoClose}>
              Close
            </span>
            <img
              src="assets/images/admissions.jpg"
              className="img-fluid"
              alt="PROMO"
            />
          </div>
        </div>

        <section className="w3l-features-1">
          <div className="features-1-mian py-5">
            <div className="container py-lg-5">
              <div className="row title-content"></div>
              <div className="counter-main-sec">
                <div className="">
                  <Link to="/about">
                    <h3
                      className="hny-title text-center howvu"
                      style={{ color: "#fff" }}
                    >
                      We Are The University Of You
                      <span className="triangle-down text-center"></span>
                    </h3>
                  </Link>
                  <br />
                  <h4
                    className="hny-title text-center"
                    style={{ color: "#555" }}
                  >
                    Victoria University
                  </h4>
                  <div className="text-center longdash"></div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="counter-gd col-md-4 text-center">
                    <h4 className="titled4" style={{ color: "#e25252" }}>
                      Beyond Expectations
                    </h4>
                    <br />
                    <div id="counters_3">
                      <h6 className="titled">
                        <span
                          className="counter"
                          data-TargetNum="97"
                          data-Speed="2000"
                        >
                          0
                        </span>
                        <span>%</span>
                      </h6>
                      <br />
                      <p className="titled3">
                        of employers say VU grads meet or exceed their
                        expectations
                      </p>
                    </div>
                  </div>
                  <div className="counter-gd col-md-4 text-center">
                    <h4 className="titled4" style={{ color: "#e25252" }}>
                      Prepared For The Jobs
                    </h4>
                    <br />
                    <div id="counters_3">
                      <h6 className="titled">
                        <span
                          className="counter"
                          data-TargetNum="97"
                          data-Speed="2000"
                        >
                          0
                        </span>
                        <span>%</span>
                      </h6>
                      <br />
                      <p className="titled3">
                        said VU graduates were well prepared for their jobs
                      </p>
                    </div>
                  </div>
                  <div className="counter-gd col-md-4 text-center">
                    <h4 className="titled4" style={{ color: "#e25252" }}>
                      Top Candidates
                    </h4>
                    <br />
                    <div id="counters_3">
                      <h6 className="titled">
                        <span
                          className="counter"
                          data-TargetNum="96"
                          data-Speed="2000"
                        >
                          0
                        </span>
                        <span>%</span>
                      </h6>
                      <br />
                      <p className="titled3">
                        said they would hire another VU graduate
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="text-center">
                  {/* <a className="logo-2" href="home.php">
                        <h3 className="lohny-2 text-center" style={{color:'#0077b5'}}><span className="fa fa-chain programfa"></span>&nbsp;What Makes VU Unique</h3>
					</a> */}
                  <p>
                    <a
                      className="logo-2"
                      href="about#unique"
                      style={{ color: "#0077b5" }}
                      onMouseOver={this.change_icon.bind(
                        this,
                        "iconner",
                        "iconner2"
                      )}
                      onMouseOut={this.change_icon2.bind(
                        this,
                        "iconner",
                        "iconner2"
                      )}
                    >
                      <span className="lohny-2">
                        <span
                          id="iconner"
                          className="fa fa-chain programfa"
                          style={{ backgroundColor: "#f74040" }}
                        ></span>
                        <span
                          id="iconner2"
                          className="fa fa-arrow-right programfa hider"
                          style={{ backgroundColor: "#f74040", color: "#FFF" }}
                        ></span>
                        &nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="underline">What Makes VU Unique</span>
                    </a>
                  </p>
                </div>
              </div>
              {/* Start of close */}
            </div>
          </div>
        </section>
        {/*<section className="w3l-content-5">
	<div className="content-5-main" style={{border: 'red 1px solid'}}>
		<div className="container">
			<div className="content-info-in row">*/}
        <Link to="/glance">
          <img
            src="assets/images/discover.png"
            className="img-fluid"
            alt="Discover"
          />
        </Link>
        {/*</div>
			<div className="content-info-in row">
			</div>
		</div>
	</div>
</section>*/}
        <br />
        <SelectPath />
        <Testimonies />
        <section className="w3l-features-1">
          <div className="features-1-mian py-5">
            <div className="">
              <h3
                className="hny-title text-center"
                style={{ color: "#0077b5", fontSize: "40px" }}
              >
                Maximize
              </h3>
              <h4 className="hny-title text-center">
                Take Advantage Of VU's Offerings
              </h4>
              <h4>&nbsp;</h4>
              {/* <div className="text-center dashunder"></div> */}
            </div>
            <div className="w3l-footer-16">
              <div className="col-md-8 mt-md-0 text-center justify-content-center dotcontrol">
                <ul className="social d-flex dotcontrol">
                  <li>
                    <a
                      href="home"
                      style={{
                        backgroundColor: "#e6a329",
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      &nbsp;
                    </a>
                  </li>
                  <hr className="dotconnect" />
                  <li>
                    <a
                      href="home"
                      style={{
                        backgroundColor: "#9b6a6a",
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      &nbsp;
                    </a>
                  </li>
                  <hr className="dotconnect" />
                  <li>
                    <a
                      href="home"
                      style={{
                        backgroundColor: "#0077b5",
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      &nbsp;
                    </a>
                  </li>
                  <hr className="dotconnect" />
                  <li>
                    <a
                      href="home"
                      style={{
                        backgroundColor: "#b951ce",
                        height: "20px",
                        width: "20px",
                      }}
                    >
                      &nbsp;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container py-lg-5">
              <div className="row title-content"></div>
              <div className="row grids-innf my-lg-5">
                <div className="features-1-info col-lg-3 col-md-6">
                  <div className="features-1-info-icon text-center">
                    <span className="fa fa-graduation-cap circler circle1 orange_c"></span>
                  </div>
                  <div className="features-1-info-info text-center">
                    <h6 className="text-center">Online Education</h6>
                    <span className="dot orange"></span>
                    <p>
                      <Link to="/vclass">Visit VClass</Link>
                    </p>
                    {/* <p><Link to="/about">How VU Works</Link></p> */}
                  </div>
                  <div style={{ border: "#000 1px solid;" }}></div>
                  <div className="text-center smalldash orange_d"></div>
                </div>
                <div className="features-1-info col-lg-3 col-md-6">
                  <div className="features-1-info-icon text-center">
                    <span className="fa fa-user circler circle2 brown_c"></span>
                  </div>
                  <div className="features-1-info-info text-center">
                    <h6 className="text-center">
                      <Link to="/admissions">Admissions</Link>
                    </h6>
                    <span className="dot brown"></span>
                    <p>
                      <Link to="/requirements">Requirements per faculty</Link>
                    </p>
                    {/* <p><Link to="/dates-deadlines">Date &amp; Deadlines</Link></p> */}
                  </div>
                  <div className="text-center smalldash brown_d"></div>
                </div>
                <div className="features-1-info col-lg-3 col-md-6">
                  <div className="features-1-info-icon text-center">
                    <span className="fa fa-book circler circle3 blue_c"></span>
                  </div>
                  <div className="features-1-info-info text-center">
                    <h6 className="text-center">
                      <Link to="/transfer-credit">Transfer Credit</Link>
                    </h6>
                    <span className="dot blue"></span>
                    <p>
                      <Link to="/transfer-credit">
                        Transfer to a VU program
                      </Link>
                    </p>
                    {/* <p><Link to="/admissions">Courses for other tuitions</Link></p> */}
                  </div>
                  <div className="text-center smalldash blue_d"></div>
                </div>
                <div className="features-1-info col-lg-3 col-md-6">
                  <div className="features-1-info-icon text-center">
                    <span className="fa fa-money circler circle3 purple_c"></span>
                  </div>
                  <div className="features-1-info-info text-center">
                    <h6 className="text-center">
                      <Link to="/tuition-fees">Tuition &amp; Fees</Link>
                    </h6>
                    <span className="dot purple"></span>
                    <p>
                      <Link className="calBtn" onClick={this.popCal}>
                        Calculate Fees
                      </Link>
                    </p>
                    <p>
                      <Link to="/tuition-fees">Fees and tuition payment</Link>
                    </p>
                  </div>
                  <div className="text-center smalldash purple_d"></div>
                </div>
              </div>
              {/* First close */}
            </div>
          </div>
        </section>
        <hr
          className="text-center"
          style={{ color: "#000", width: "90%" }}
        ></hr>
        <NewsHub />
        {/* <Events /> */}
        <div className="marginize"></div>
        <div className="marginize2"></div>
        <CalculatorFees />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
