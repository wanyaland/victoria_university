import React, { Component } from "react";

class Testimonies extends Component {
  componentDidMount() {
    /* var myIndex = 0;
		carousel();

		function carousel() {
		var i;
		var x = document.getElementsByClassName("testimonial_slides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].style.display = "block";  
		setTimeout(carousel, 2000);    
		} */
  }
  render() {
    return (
      <React.Fragment>
        <section className="w3l-specification-6">
          <div
            className="specification-content py-5"
            style={{ backgroundColor: "#FFF" }}
          >
            <p>
              <h6
                className="hny-title text-center"
                style={{ color: "#0077b5", fontSize: "40px" }}
              >
                What Our Students Say
              </h6>
            </p>
            <div
              className="container"
              style={{
                maxWidth: "100%",
                display: "flex",
                padding: "0",
                paddingBottom: ".0rem !important",
              }}
            >
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active testimonial_slides">
                    <div
                      className="mission-grids-info row"
                      style={{
                        marginLeft: "0",
                        marginRight: "0",
                        padding: "0px",
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                        transform: "scaleX(1)",
                      }}
                    >
                      <div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
                        <span className="img-box">
                          <img src="assets/images/test1.jpg" alt="" />
                        </span>
                      </div>
                      <div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
                        <p className="inside-text">
                          {/* <span className="fa fa-quote-left quotes"></span> */}
                          <br />
                          <b>
                            <span style={{ color: "#FFF" }}>
                              Name: NALUGYA VICTORIA
                            </span>
                            &#44;&nbsp;
                            <br />
                            <span style={{ color: "#FFF" }}>Course: </span>
                            <br />
                            <span style={{ color: "#FFF" }}>
                              Nationality: Ugandan
                            </span>
                          </b>
                          <br />I have been a student at Victoria University for
                          the last two years, and I can assure you that I have
                          had a great experience. This is a great university.
                          The lecturers are very reasonable and fair. The
                          support staff is excellent. We also have a great
                          regulatory system, which promotes creativity and
                          acceptance in the divergence in views; for all of us
                          to contribute to solutions daily. We have
                          student-centered education in this university, and we
                          just do not sit back to take notes from lectures. We
                          also have practical or call it authentic learning;
                          which allows us to practically try out what we study
                          in class, daily. Why would this be impossible, when
                          the founders of this university, as the leaders in
                          business in this country, with a chain of companies
                          and partnerships? Apart from academics, we are
                          involved in sports and entertainment. We have vast
                          access to entertainment, political, and media
                          celebrities since some of them are our fellow
                          students. Everyone at Victoria University is destined
                          for a great future.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="carousel-item testimonial_slides">
                    <div
                      className="mission-grids-info row"
                      style={{
                        marginLeft: "0",
                        marginRight: "0",
                        transform: "scaleX(1)",
                      }}
                    >
                      <div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
                        <span className="img-box">
                          <img src="assets/images/test3.jpg" alt="" />
                        </span>
                      </div>
                      <div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
                        <p className="inside-text">
                          <span className="fa fa-quote-left quotes"></span>
                          <br />
                          <b>
                            <span style={{ color: "#FFF" }}>
                              Name: SANDRA ALAKA
                            </span>
                            &#44;&nbsp;
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Course: Bachelor in science of Oil and Gas
                              Accounting
                            </span>
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Nationality: Ugandan
                            </span>
                          </b>
                          <br />I chose Victoria University because of its
                          central location in the capital city of Kampala, which
                          is very accessible and of a shorter distance to the
                          University, I chose doing BACHELOR’S DEGREE IN SCIENCE
                          OF OIL AND GAS ACCOUNTING because currently in Uganda,
                          the Oil and Gas sector has limited local skilled man
                          power and I wanted to be skilled to contribute to the
                          sector. Accounting Aspect in my course has been most
                          beneficial to my career development in that I know how
                          to use and extract statement in Accounting to show
                          whether a company is earning Profits or losses and
                          know it's financial position to show the total assets
                          and liabilities for that a company. My favorite memory
                          was when I was given an opportunity to perform and act
                          as a Secretary to the University Electoral commission
                          where I actively participated in electoral commission
                          meetings and compiled minutes for all the meetings.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="carousel-item testimonial_slides">
                    <div
                      className="mission-grids-info row"
                      style={{
                        marginLeft: "0",
                        marginRight: "0",
                        transform: "scaleX(1)",
                      }}
                    >
                      <div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
                        <span className="img-box">
                          <img
                            src="assets/images/clone.png"
                            alt=""
                            style={{ backgroundColor: "#FFF" }}
                          />
                        </span>
                      </div>
                      <div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
                        <p className="inside-text">
                          <span className="fa fa-quote-left quotes"></span>
                          <br />
                          <b>
                            <span style={{ color: "#FFF" }}>
                              Name: Mbuyi Kalombo Jonathan
                            </span>
                            &#44;&nbsp;
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Course:{" "}
                            </span>
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Nationality: Congolese
                            </span>
                          </b>
                          <br />I chose VU because it was only the best place
                          for me as a foreign student to complete my studies and
                          it is also among the best universities in the country
                          and I chose public health because it was my passion
                          first and I have always loved saving life and this was
                          directly my only option for me so i am proud of the
                          choice of myself. To be honest, most of them were
                          perfect where I learned a lot and other modules such
                          as communication skills, and it was not in my program
                          but VU had helped me by studying it and now I know
                          some aspects of this module. It's when they (VU) tell
                          the students that the exams are coming soon! MDR
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="carousel-item testimonial_slides">
                    <div
                      className="mission-grids-info row"
                      style={{
                        marginLeft: "0",
                        marginRight: "0",
                        transform: "scaleX(1)",
                      }}
                    >
                      <div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
                        <span className="img-box">
                          <img
                            src="assets/images/clone.png"
                            alt=""
                            style={{ backgroundColor: "#FFF" }}
                          />
                        </span>
                      </div>
                      <div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
                        <p className="inside-text">
                          <span className="fa fa-quote-left quotes"></span>
                          <br />
                          <b>
                            <span style={{ color: "#FFF" }}>
                              Name: Nicholus Abisinguza
                            </span>
                            &#44;&nbsp;
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Course: Bachelor Information Technology (IT)
                            </span>
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Nationality: Ugandan
                            </span>
                          </b>
                          <br />
                          Vu is more than a university, it gives you the
                          knowledge, confidence skills, and experience that you
                          are looking for to make your environment better.
                          Whether you're a mature student or a school leaver Vu
                          opens up a host of new opportunities to control your
                          future. Also being an international university, I
                          wanted to meet many international students from
                          different countries with different backgrounds and
                          with different experiences, and that would give me a
                          range of experience to broaden my knowledge. 1.
                          Communication skills [ listening, speaking and
                          writing] 2. Ability to make decisions and solve
                          problems. 3. Flexibility and Adaptability. My favorite
                          memory of Vu is the day I got to campus and I was told
                          by security personnel that I can't enter with my bag.
                          That day I became mad at everyone
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="carousel-item testimonial_slides">
                    <div
                      className="mission-grids-info row"
                      style={{
                        marginLeft: "0",
                        marginRight: "0",
                        transform: "scaleX(1)",
                      }}
                    >
                      <div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
                        <span className="img-box">
                          <img
                            src="assets/images/img/Tanaka.jpeg"
                            alt=""
                            style={{ backgroundColor: "#FFF" }}
                          />
                        </span>
                      </div>
                      <div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
                        <p className="inside-text">
                          <span className="fa fa-quote-left quotes"></span>
                          <br />
                          <b>
                            <span style={{ color: "#FFF" }}>
                              Name: Mombera Tanaka
                            </span>
                            &#44;&nbsp;
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Course: Bachelor's degree in business information
                              systems
                            </span>
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Nationality: Zimbabwean
                            </span>
                          </b>
                          <br />
                          Victoria University was a dream come true for my dad
                          and I, Victoria University is an institution that put
                          the students’ needs first more than anything. Choosing
                          my course was easier because I loved playing around
                          with computers since childhood, more so the course was
                          a two in one course, which was IT and business
                          related, so I needed to spice up my IT with business
                          theory. The curriculum currently has well revised
                          modules which bring more of hands-on training and a
                          broad approach towards critical thinking individually
                          or as a group. Furthermore, the equipment at VU is
                          favorable towards the everyday student environment.
                          The lecturers are very friendly which creates a
                          one-on-one interaction. My best memory is the cultural
                          gala which was in November 2019, it was a beautiful
                          and tremendous day where people exhibited their
                          backgrounds. I learnt a lot about different cultures
                          from different countries and tribes.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="carousel-item testimonial_slides">
                    <div
                      className="mission-grids-info row"
                      style={{
                        marginLeft: "0",
                        marginRight: "0",
                        transform: "scaleX(1)",
                      }}
                    >
                      <div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
                        <span className="img-box">
                          <img
                            src="assets/images/clone.png"
                            alt=""
                            style={{ backgroundColor: "#FFF" }}
                          />
                        </span>
                      </div>
                      <div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
                        <p className="inside-text">
                          <span className="fa fa-quote-left quotes"></span>
                          <br />
                          <b>
                            <span style={{ color: "#FFF" }}>
                              Name: Musiime Linda Rosette
                            </span>
                            &#44;&nbsp;
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Course: Bachelor's of Business Administration
                            </span>
                            <br />
                            <span
                              className="overview"
                              style={{ color: "#FFF" }}
                            >
                              Nationality: Ugandan
                            </span>
                          </b>
                          <br />I chose Victoria University above all the others
                          because it understands what one requires and nurture
                          them according to their abilities which I have already
                          experienced and in regards to my course, I chose it
                          according to my talent. I love business and I Majorly
                          enjoy marketing of which my university got me to kind
                          of check my instincts of marketing by making an
                          advert. My favorite memory at VU is the time when I
                          was making the advert with all the willingness and
                          passion within me.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </React.Fragment>
    );
  }
}

export default Testimonies;
