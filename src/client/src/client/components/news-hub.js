import React, { Component } from "react";
//import { Link } from 'react-router-dom';

class NewsHub extends Component {
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
  toEvents = () => {
    window.location.href = "events-hub";
  };
  render() {
    return (
      <React.Fragment>
        <section className="w3-gallery">
          <div className="porfolio-inf py-5">
            <div className="container pt-lg-5 pb-lg-4">
              <div className="row title-content">
                <div className="col-lg-4 title-left">
                  <h4
                    className="hny-title"
                    style={{ fontSize: "24px", color: "#0077b5" }}
                  >
                    News Feed
                  </h4>
                </div>
                <div className="col-lg-8 title-info"></div>
              </div>
              <br />
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/10/30/victoria-university-extends-5290-bursaries-to-members-of-parliament/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/1.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/10/30/victoria-university-extends-5290-bursaries-to-members-of-parliament/"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Victoria University Extends 5290 Bursaries to
                                Members of Parliament
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                October 30, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/09/17/victoria-university-gets-nche-permission-to-conduct-online-exams/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/2.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/09/17/victoria-university-gets-nche-permission-to-conduct-online-exams/"
                              className="course-title-wrapper"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                EDUCATION GIANTS: Victoria University gets NCHE
                                Permission to continue conducting online exams
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                September 17, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/10/08/victoria-university-to-host-nigerias-youngest-billionaire-sijibomi-in-open-public-lecture/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/7.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/10/08/victoria-university-to-host-nigerias-youngest-billionaire-sijibomi-in-open-public-lecture/"
                              className="course-title-wrapper"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Victoria University to host Nigeria’s Youngest
                                Billionaire Sijibomi in Open Public Lecture
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                October 8, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/09/27/socialite-bad-black-named-victoria-university-brand-ambassador/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/4.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/09/27/socialite-bad-black-named-victoria-university-brand-ambassador/"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Socialite Bad Black named Victoria University
                                Brand Ambassador
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                September 27, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/09/20/victoria-university-extends-semester-opening-date-for-2021-2022-academic-year/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/5.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/09/20/victoria-university-extends-semester-opening-date-for-2021-2022-academic-year/"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Victoria University extends semester opening
                                date for 2021/2022 academic year
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                September 20, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/09/28/victoria-university-clarifies-on-bad-blacks-appointment-as-its-ambassador/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/6.jpeg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/09/28/victoria-university-clarifies-on-bad-blacks-appointment-as-its-ambassador/"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Victoria University clarifies on Bad Black’s
                                Ambassadorial appointment
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                September 28, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/09/06/here-is-your-last-chance-to-join-victoria-university-as-it-pushes-semester-opening-to-september-20th/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/8.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/09/06/here-is-your-last-chance-to-join-victoria-university-as-it-pushes-semester-opening-to-september-20th/"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Here is your last chance to join Victoria
                                University as it pushes semester opening to
                                September 20th
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta grid">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                September 6, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://dailyexpress.co.ug/2021/10/29/victoria-university-to-host-ugandan-celebrities-in-endiba-weekend-soccer-bonanza/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/3.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://dailyexpress.co.ug/2021/10/29/victoria-university-to-host-ugandan-celebrities-in-endiba-weekend-soccer-bonanza/"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Victoria University to host Ugandan Celebrities
                                in “Endiba” Weekend Soccer Bonanza
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                October 29, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* new new feeds */}
                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://twitter.com/VUKampala/status/1539317462998474753?t=QtWyagLvnNTtNrZ7cXujcA&s=08"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/9.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://twitter.com/VUKampala/status/1539317462998474753?t=QtWyagLvnNTtNrZ7cXujcA&s=08"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Vision Group's Managing Director & CEO
                                @DonWanyama & Victoria University's Vice
                                Chancellor Prof. @ReachDrMuganga today signed a
                                MoU to promote education, especially
                                Work-Integrated Learning for the University's
                                students
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                October 29, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 filter webdesign graphic">
                        <div className="each-item">
                          <a
                            href="https://twitter.com/VUKampala/status/1539317462998474753?t=QtWyagLvnNTtNrZ7cXujcA&s=08"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="port-image img-fuild"
                              src="assets/images/articles/9.jpg"
                              alt=""
                              style={{ border: "#CCC 1px solid" }}
                            />
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-info">
                            <a
                              href="https://twitter.com/VUKampala/status/1539317462998474753?t=QtWyagLvnNTtNrZ7cXujcA&s=08"
                              target="_blank"
                              rel="noreferrer"
                              className="course-title-wrapper"
                            >
                              <h3
                                className="course-title"
                                data-gal="prettyPhoto[gallery]"
                              >
                                Vision Group's Managing Director & CEO
                                @DonWanyama & Victoria University's Vice
                                Chancellor Prof. @ReachDrMuganga today signed a
                                MoU to promote education, especially
                                Work-Integrated Learning for the University's
                                students
                              </h3>
                            </a>
                          </div>
                          <div className="course-divider">
                            <div className="course-meta">
                              <span className="course-students" title="">
                                <span
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></span>{" "}
                                October 29, 2021
                              </span>
                              {/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
                            </div>
                            <button
                              className="price-course btn"
                              onClick={this.toEvents}
                            >
                              More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {/* <div className="text-right">
				<p>
					<Link className="logo-2" to="/events-hub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
						<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF',}}></span>&nbsp;</span><span className="underline">View all News</span>
					</Link>
				</p>
			</div> */}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default NewsHub;
