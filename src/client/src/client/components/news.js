import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import Altfooter from "./alt-footer";
import { Link } from "react-router-dom";

class News extends Component {
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
                  <span style={{ color: "#EEE" }}>/ News</span>
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
                  <div className="each-item">
                    <a href="#home">
                      <img
                        className="port-image img-fuild"
                        src="assets/images/charter.jpg"
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
                        <h2
                          className="course-title"
                          data-gal="prettyPhoto[gallery]"
                        >
                          President Museveni grants Victoria University a
                          Charter
                        </h2>
                      </a>
                      <div>
                        <p>
                          VICTORIA University has been granted a charter by H.E
                          the President of the Republic of Uganda, Yoweri Kaguta
                          Museveni. Our Charter was signed by President Museveni
                          on July 31, 2022.
                        </p>
                        <p>
                          We do appreciate and salute the President, the First
                          Lady and Hon. Minister of Education and Sports, Mrs.
                          Janet Museveni, the National Council for Higher
                          Education Executive Director, Prof. Mary Okwakol; and
                          her entire team for recognizing and authenticating the
                          growth that Victoria University has undertaken in the
                          last few years.
                        </p>
                        <p>
                          A charter is granted to universities that have
                          demonstrated high quality in staffing, teaching and
                          learning, research output, technology and
                          practical-led learning, infrastructural development,
                          and good governance, among other issues. For any
                          institution to be accredited, the President and NCHE
                          must be satisfied after a series of inspections and
                          visitations.
                        </p>
                        <p>
                          According to the Universities and other Tertiary
                          Institutions Act (2001), a charter is "granted by the
                          President as evidence that the university meets the
                          requirements and standards of academic excellence set
                          by the NCHE." Furthermore, a "chartered university,"
                          as defined in section 103(a) of the same Act 2001 as
                          amended, is a university comparable to a public
                          university."
                        </p>
                        <p>
                          This makes Victoria University the 11th private
                          university in the country to be chartered, out of 32
                          private universities in Uganda. This is on top of the
                          other 10 public universities in the country.
                        </p>
                        <p>
                          <h5>Impact of the Charter on Victoria University</h5>
                          Victoria University’s academic awards can now be
                          recognized by all universities and institutions around
                          the world; in case one is securing a job or upgrading
                          in academic studies. More so, Victoria University now
                          has attained the same privileges like the public
                          universities in the country, other than the direct
                          financial support to the institution. However, the
                          institution will get special recognition and support
                          in the areas of funding students’ education,
                          especially through the Students Loan Scheme, under the
                          Higher Education Students Financing Board.
                        </p>
                        <p>
                          By law, the Charter also allows Victoria University to
                          begin awarding all degrees, including Bachelors,
                          Masters, Doctorates, and Honorary Degrees. Based on
                          this, Victoria University has already laid the ground
                          for the start of a doctoral college, with a plan to
                          start 30 Ph.D. Programmes in the next two years.
                        </p>
                        <p>
                          <h6>Who we are</h6>
                          The Universities and other Tertiary Institutions Act,
                          states that the Charter is granted by the President as
                          evidence that the university meets the requirements
                          and standards of academic excellence set by the NCHE.
                        </p>
                        <p>
                          For Victoria University, August 19, 2022 will go into
                          the history of the institution, as a day it was born
                          again. We are now in a pool of universities whose
                          standards and recognition is highly acclaimed locally
                          and internationally, after being granted a Charter by
                          the President.
                        </p>
                        <p>
                          As Victoria University, we believe that this Charter,
                          is a confirmation that we are a leading University in
                          Uganda, East Africa, and Africa in offering
                          Experiential and Work Integrated Learning. We are
                          determined to produce graduates with employable skills
                          and capacity to creatively employ themselves. We do
                          this by providing meaningful, hands-on workplace
                          experience to enrich theoretical learning. Our work
                          integrated learning program is enabling students to
                          complete a program of three to four years with at
                          least 2 to 3 years’ work experience.
                        </p>
                        <p>
                          At Victoria University, our hands-on, technology-based
                          education and applied research are essential to the
                          productivity and prosperity of the country and the
                          region. We always strive to ensure that our graduates
                          have the knowledge, skills and competencies employers
                          want. Our graduates leave Victoria University with
                          soft skills, quality degrees, confident, prepared and
                          in demand.
                        </p>
                        <p>
                          We are the only university in the country with a
                          career and employability program, which was
                          intentionally designed, to empower all students at
                          Victoria University with soft skills.
                        </p>
                        <p>
                          We also do pride in our Innovation and Virtual Reality
                          Learning Centre, set up with the intention of bringing
                          the latest digital literacies and skills to our
                          learners. With new technologies related to the
                          development of computers, graphics, hardware, and the
                          emergence of Web 3.0 technology and the Blockchain
                          networks; the virtual world has become a reality.
                          Every other day, the demand for virtual reality
                          increases, and the industry represented by the
                          Metaverse is developing; and as a university, we are
                          determined to keep our students on top of the
                          exposure-to-learning chain. In the Metaverse, a
                          virtual world that transcends reality, artificial
                          intelligence and blockchain technology are being
                          combined, and Victoria University is ready to take a
                          lead in the continent’s institutions.
                        </p>
                        <p>
                          We offer a fresh and intellectually stimulating
                          environment that nurtures critical thinkers. The
                          University was opened in August 2013 and has the
                          capacity, the facilities and determination to
                          revitalize higher education in Uganda and in the
                          region. We are committed to playing a leading role in
                          bringing and developing high quality education,
                          through student-centered learning opportunities based
                          on standards of excellence that are unique and
                          innovative.
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

export default News;
