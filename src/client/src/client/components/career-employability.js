import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import Altfooter from "./alt-footer";
import { Link } from "react-router-dom";

class Employability extends Component {
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
  render() {
    return (
      <React.Fragment>
        <BreadNavBar />
        <NavBar />
        <section className="w3l-top-header-content">
          <div className="hny-top-menu">
            <div
              className="top-hd"
              style={{ padding: "5px 0px 5px 0px", backgroundColor: "#024c74" }}
            >
              <div className="container-fluid">
                <div className="">
                  <Link to="/">
                    <span className="underline" style={{ color: "#EEE" }}>
                      Victoria University
                    </span>
                  </Link>
                  &nbsp;
                  <span style={{ color: "#EEE" }}>/ Employability</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="features-6">
          <div className="features6-block py-5">
            <div className="container py-lg-5">
              <div className="features6-grids text-center mt-5">
                <img
                  src="assets/images/b3.jpg"
                  className="img-fluid"
                  alt=""
                  style={{ filter: "brightness(70%)" }}
                />
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
              <div className="welcome-grids row">
                <div className="col-lg-6 welcome-image">
                  <img
                    src="assets/images/ab.jpg"
                    className="img-fluid"
                    alt=""
                    style={{ filter: "brightness(70%)" }}
                  />
                  <div className="img-text-centered">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae eligendi minima accusantium reiciendis,
                    cupiditate optio corrupti quis quam at!.
                  </div>
                  <div className="img-text-bottom-right">
                    <span className="fa fa-file-text-o"></span>
                  </div>
                </div>
                <div className="col-lg-6 welcome-image">
                  <img
                    src="assets/images/ab.jpg"
                    className="img-fluid"
                    alt=""
                    style={{ filter: "brightness(70%)" }}
                  />
                  <div className="img-text-centered">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae eligendi minima accusantium reiciendis,
                    cupiditate optio corrupti quis quam at!.
                  </div>
                  <div className="img-text-bottom-right">
                    <span className="fa fa-file-text-o"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w3-gallery">
          <div className="porfolio-inf py-5">
            <div className="container pt-lg-5 pb-lg-4">
              <div className="row">
                <div className="col-md-12 filter photo">
                  <a href="#home" className="course-titlegulp-wrapper">
                    <h2
                      className="course-title"
                      data-gal="prettyPhoto[gallery]"
                    >
                      <span className="text-primary">CAREER EMPLOY</span>
                      <b className="text-danger">ABILITY</b>
                    </h2>
                  </a>
                  <ul
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      listStyle: "none",
                    }}
                    className="col-md-8  mb-4 pb-4"
                  >
                    <li>
                      <a href="#about">About us</a>
                    </li>
                    <li>
                      <a href="#events">Events</a>
                    </li>
                    <li>
                      <a
                        href="https://vclass.ac/login"
                        rel={"noreferrer"}
                        target={"_blank"}
                      >
                        Appointments
                      </a>
                    </li>
                    <li>
                      <a href="#wil">Work-integrated learning</a>
                    </li>
                    <li>
                      <a href="#jobs">Jobs and opportunities</a>
                    </li>
                    <li>
                      <a href="#resources">Resources</a>
                    </li>
                  </ul>
                  <div className="each-item">
                    <a href="#home">
                      <video
                        src="assets/media/career_emp.MP4"
                        className="img-fluid"
                        alt=""
                        autoPlay="true"
                        controls="true"
                        style={{ width: "100%", transform: "scale(.9)" }}
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <div id="about"></div>
                      <div className="row justify-center  mx-4 py-4 my-4">
                        <div
                          className="col-md-4 p-4 alert"
                          style={{ border: "1px solid gray" }}
                        >
                          <img
                            src="assets/images/emp1.PNG"
                            alt=""
                            className="img-fluid"
                          />
                          <h5 className="text-justify">
                            Plan your career-Equipping you with (This is where
                            we shall share the skills you program) need to
                            prepare for the world of work
                          </h5>
                        </div>
                        <div
                          className="col-md-4 mx-4 alert"
                          style={{ border: "1px solid gray" }}
                        >
                          <img
                            src="assets/images/emp2.png"
                            alt=""
                            style={{ width: "100%", height: "180px" }}
                          />
                          <h5 className="text-justify">
                            Discover what’s on this semester Equipping you with
                            (This is where we shall share the skills you
                            program)
                          </h5>
                        </div>
                      </div>
                      <div>
                        <p className="pt-4 mt-4">
                          <h5>About us</h5>
                          Career- employability’s mission will facilitate
                          students to gain skills necessary to plan, build and
                          design purposeful careers. As the VU Career
                          Employability HUB, our decisive duty is to support
                          student’s steady transition from education to
                          meaningful employment by leveraging partnerships with
                          industry leaders.
                        </p>
                        <p>
                          Our firm resolve is to confront the human-capital
                          deficit in the country by transforming higher
                          education to meet the challenges of the times and be
                          flexible to the future. To deliver on this,
                          Work-integrated learning (WIL) will play a prominent
                          role.
                        </p>
                        <p>
                          WIL allows our students to familiarize with the world
                          of work - earmarking the workplace as the center of
                          practical learning and not text book.
                        </p>
                        <p className="mb-4 pb-4">
                          The scheme is tailored to equip our students with the
                          “must knows” and “should haves” that guarantee a
                          competent workforce, and future ready employees .
                        </p>

                        <p>
                          <h6>OUR PRIORITIES FOR 2022 - 2023</h6>
                          Our endevour to provide career and leadership
                          development opportunities for our students goes
                          deeper:
                          <ul className="mx-4 px-4">
                            <li>
                              Support students discover their journey identity
                              and individual interests
                            </li>
                            <li>
                              Equip students with job ready leadership skills.
                            </li>
                            <li>
                              Avail a work-integrated learning platform for all
                              students
                            </li>
                            <li>
                              Build an eco-system of industry partnerships that
                              support experiential learning
                            </li>
                            <li>
                              Support students network with employers to expand
                              their scope
                            </li>
                            <li>
                              Contribute to global agenda 2030 by participating
                              in the realization of SDG 4- Quality education and
                              its influence on SDG 8- Decent work & economic
                              development
                            </li>
                          </ul>
                        </p>
                        <p className="mt-4 pt-4">
                          <h5 className="my-4">OUR SERVICES</h5>
                          <div id="events"></div>
                          <h6>Career guidance and leadership development</h6>
                          We deliver seminars, workshops and programs customized
                          to student advancement
                          <h6 className="pt-4">Appointments</h6>
                          <div id="wil"></div>
                          <div id="jobs"></div>
                          Discover how to book a 1:1 career guidance appointment
                          with our career consultants. We support our students
                          that have received a job interview invitation with
                          mock interviews, and those who seek to gain clarity on
                          their career prospects.
                          <h6 className="pt-4">Events</h6>
                          Find out what we have on our impact fused program. We
                          host leaders in the industry to share their milestones
                          and experiences that are benched on inspiring and
                          challenging our students to attain career prospects
                          <h6 className="pt-4">Work-integrated Learning</h6>
                          Get to know our partners that support experiential
                          learning
                          <div id="resources"></div>
                          <h6 className="pt-4">Jobs and opportunities</h6>
                          Search here for roles across organizations
                          <h6 className="pt-4">Resources</h6>
                          Access our advise on a variety of career topics
                        </p>

                        <p>
                          <h6 className="pt-4 mt-4">How to contact us</h6>
                          For general and student enquiries, you can email us at
                          careeremployability@vu.ac.ug
                        </p>
                      </div>
                      <h6>
                        {/* <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a> */}
                      </h6>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 filter photo">
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/bg3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="course-content"
                    style={{ backgroundColor: "#FFF", border: "none" }}
                  >
                    <div className="course-info">
                      <a href="#home" className="course-titlegulp-wrapper">
                        <h3
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          Victoria University is to hold it's 5th Graduation
                          Ceremony on the 19th February 2021.
                        </h3>
                      </a>
                      <h6>
                        <a className="course-instructor" href="#home">
                          Faculty of medicine
                        </a>
                      </h6>
                    </div>
                  </div>
                    </div>*/}
              </div>
              {/* <div className="text-right">
                <p>
                  <a
                    className="logo-2"
                    href="home"
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
                    <h4 className="lohny-2">
                      <span
                        id="iconner"
                        className="fa fa-chain programfa"
                        style={{ backgroundColor: "#f74040" }}
                      ></span>
                      <span
                        id="iconner2"
                        className="fa fa-arrow-right programfa hider"
                        style={{
                          backgroundColor: "#f74040",
                          color: "#FFF",
                          fontSize: "26px",
                        }}
                      ></span>
                      &nbsp;See all recent posts
                    </h4>
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </section>
        {/* <hr className="text-center" style={{ color: "#000", width: "90%" }} />
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
              <h3>Upcoming Events</h3>
              <br />
              <div className="welcome-grids row">
                <div className="col-lg-6 welcome-image">
                  <img
                    src="assets/images/ab.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="text-left">
                    Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                    aperiam sequi optio consectetur.Vivamus a ligula quam.
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                  <ul className="list-unstyled d-flex flex-wrap">
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-right">
                <p>
                  <Link
                    className="logo-2"
                    href="/newshub"
                    style={{ color: "#0077b5" }}
                    onMouseOver={this.change_icon.bind(
                      this,
                      "iconner3",
                      "iconner4"
                    )}
                    onMouseOut={this.change_icon2.bind(
                      this,
                      "iconner3",
                      "iconner4"
                    )}
                  >
                    <span className="lohny-2">
                      <span
                        id="iconner3"
                        className="fa fa-chain programfa"
                        style={{ backgroundColor: "#f74040" }}
                      ></span>
                      <span
                        id="iconner4"
                        className="fa fa-arrow-right programfa hider"
                        style={{ backgroundColor: "#f74040", color: "#FFF" }}
                      ></span>
                      &nbsp;
                    </span>
                    <span className="underline">See all upcoming events</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
              <h3>Videos</h3>
              <br />
              <div className="welcome-grids row">
                <div className="col-lg-6 welcome-image">
                  <img
                    src="assets/images/ab.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="text-left">
                    Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                    aperiam sequi optio consectetur.Vivamus a ligula quam.
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                  <ul className="list-unstyled d-flex flex-wrap">
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-right">
                <p>
                  <Link
                    className="logo-2"
                    href="home"
                    style={{ color: "#0077b5" }}
                    onMouseOver={this.change_icon.bind(
                      this,
                      "iconner5",
                      "iconner6"
                    )}
                    onMouseOut={this.change_icon2.bind(
                      this,
                      "iconner5",
                      "iconner6"
                    )}
                  >
                    <span className="lohny-2">
                      <span
                        id="iconner5"
                        className="fa fa-chain programfa"
                        style={{ backgroundColor: "#f74040" }}
                      ></span>
                      <span
                        id="iconner6"
                        className="fa fa-arrow-right programfa hider"
                        style={{ backgroundColor: "#f74040", color: "#FFF" }}
                      ></span>
                      &nbsp;
                    </span>
                    <span className="underline">See all Videos</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
              <h3>Podcasts</h3>
              <br />
              <div className="welcome-grids row">
                <div className="col-lg-6 welcome-image">
                  <img
                    src="assets/images/ab.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="text-left">
                    Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                    aperiam sequi optio consectetur.Vivamus a ligula quam.
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                  <ul className="list-unstyled d-flex flex-wrap">
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-right">
                <p>
                  <Link
                    className="logo-2"
                    to="/newshub"
                    style={{ color: "#0077b5" }}
                    onMouseOver={this.change_icon.bind(
                      this,
                      "iconner7",
                      "iconner8"
                    )}
                    onMouseOut={this.change_icon2.bind(
                      this,
                      "iconner7",
                      "iconner8"
                    )}
                  >
                    <span className="lohny-2">
                      <span
                        id="iconner7"
                        className="fa fa-chain programfa"
                        style={{ backgroundColor: "#f74040" }}
                      ></span>
                      <span
                        id="iconner8"
                        className="fa fa-arrow-right programfa hider"
                        style={{ backgroundColor: "#f74040", color: "#FFF" }}
                      ></span>
                      &nbsp;
                    </span>
                    <span className="underline">See all Podcasts</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
              <h3>Q & A</h3>
              <br />
              <div className="welcome-grids row">
                <div className="col-lg-6 welcome-image">
                  <img
                    src="assets/images/ab.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="text-left">
                    Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                    aperiam sequi optio consectetur.Vivamus a ligula quam.
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                  <ul className="list-unstyled d-flex flex-wrap">
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <div className="row">
                        <a className="col-md-5 col-4" href="#home">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="assets/images/bg1.jpg"
                            alt="img"
                          />
                          <i></i>
                        </a>
                        <div className="col pl-0">
                          <a className="footer-small-text" href="#home">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </a>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-right">
                <p>
                  <Link
                    className="logo-2"
                    to="/newshub"
                    style={{ color: "#0077b5" }}
                    onMouseOver={this.change_icon.bind(
                      this,
                      "iconner9",
                      "iconner10"
                    )}
                    onMouseOut={this.change_icon2.bind(
                      this,
                      "iconner9",
                      "iconner10"
                    )}
                  >
                    <span className="lohny-2">
                      <span
                        id="iconner9"
                        className="fa fa-chain programfa"
                        style={{ backgroundColor: "#f74040" }}
                      ></span>
                      <span
                        id="iconner10"
                        className="fa fa-arrow-right programfa hider"
                        style={{ backgroundColor: "#f74040", color: "#FFF" }}
                      ></span>
                      &nbsp;
                    </span>
                    <span className="underline">See all Q & A</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <Altfooter />
      </React.Fragment>
    );
  }
}

export default Employability;
