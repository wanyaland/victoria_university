import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import GetInfo from "./get_info";
import Footer from "./footer";
import { Link } from "react-router-dom";

class CurrentStudents extends Component {
  componentDidMount() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("activer");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }
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
  toVclass = () => {
    window.location.href = "https://vclass.ac/";
  };
  render() {
    return (
      <React.Fragment>
        <BreadNavBar />
        <NavBar />
        <section className="w3l-apply-6">
          <div className="" style={{}}>
            <div
              className="container"
              style={{ maxWidth: "100%", padding: "0", margin: "0" }}
            >
              <div
                id="carouselExampleSlidesOnly"
                className="carousel"
                data-ride=""
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="assets/images/students.jpg"
                      alt="First slide"
                      style={{ filter: "brightness(60%)" }}
                    />
                  </div>
                  <div className="banner-caption">&nbsp;Students</div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  <span style={{ color: "#EEE" }}>/ Students</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div
              className="container py-lg-5"
              style={{ paddingBottom: "0rem !important" }}
            >
              <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                  <h6
                    className="hny-title"
                    style={{
                      fontSize: "48px",
                      color: "#f74040",
                      fontWeight: "600",
                    }}
                  >
                    Students
                  </h6>
                  <br />
                  <h6
                    className="hny-title"
                    style={{ fontSize: "38px", color: "#0077b5" }}
                  >
                    Why should a student choose Victoria University?
                  </h6>
                  <p className="my-4" style={{}}>
                    Victoria University is different; we help our students
                    create knowledge and we teach them experience. When you come
                    to Victoria University you are assured that you will
                    graduate with 2-3 years’ experience and you also have an
                    opportunity to be accorded a job placement through our
                    partner organizations within and out of the country. We are
                    the only university in East Africa that is implementing an
                    experiential learning model through our work integrated
                    learning program; the priority of this program is to make
                    sure that every student of the university is placed in a
                    real job to gain real experience needed in the labor market.
                    So when you come to Victoria University we will teach you
                    experience.
                    <br />
                    <br />
                    Secondly, we are a university that welcomes everyone and
                    their diverse needs. For example, if you are busy with your
                    job and cannot come to Victoria University, we have the best
                    online learning platform that will help you pursue your
                    education seamlessly. You do not need to come to Victoria
                    University, Victoria University will find you where you are.
                    <br />
                    <br />
                    Thirdly, we are a university that understands you. When you
                    are failing to support your online education, Victoria
                    University will give you free education data and when you
                    fail to purchase relevant textbooks required for your
                    learning, Victoria University will give you free digital
                    textbooks to support completion of your studies. All in all
                    we are the University of You and you can comfortably choose
                    Victoria University for a greater and memorable education
                    experience.
                  </p>
                  {/* <p>
                        <Link className="logo-2" to="/new-students" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Overview for new students</span></span>
                        </Link>
                    </p> */}
                  <p>
                    <a
                      href="https://vclass.ac/login"
                      className="logo-2"
                      style={{ color: "#0077b5" }}
                      target="_blank"
                      rel="noreferrer"
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
                        <span className="underline">myVU Student Portal</span>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="text-center" style={{ color: "#000", width: "90%" }} />
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div
              className="container py-lg-5"
              style={{ paddingBottom: "0rem !important" }}
            >
              <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                  <h6
                    className="hny-title"
                    style={{ fontSize: "38px", color: "#0077b5" }}
                  >
                    Working Class Students
                  </h6>
                  <br />
                  <p className="mb-4" style={{}}>
                    Victoria University believes in empowering people to solve
                    problems in their respective communities and workplaces. We
                    have several partnerships with different top universities
                    around the world and through these partnerships, we have
                    developed a rich portfolio of professional courses that
                    Ugandans can benefit from to enhance their competences and
                    gain unique skills that are required in their various
                    respective workplaces. We therefore invite Ugandans to join
                    Victoria University and benefit from the rich experience
                    that they would gain through pursuing our diverse
                    internationalized professional development courses.
                  </p>
                  <br />
                  <br />
                  <img
                    src="assets/images/studs.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <br />
                  <br />
                  <p>
                    <Link
                      className="logo-2"
                      to="/new-students"
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
                        <span className="underline">
                          Course procedures for new students
                        </span>
                      </span>
                    </Link>
                  </p>
                  {/* <p><Link className="logo-2" to="/exams" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                        <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Learn more about our exam procedures</span></span>
                        </Link>
                    </p> */}
                  <h6
                    className="hny-title"
                    style={{ fontSize: "34px", color: "#0077b5" }}
                  >
                    International Students
                  </h6>
                  <p className="mb-4" style={{}}>
                    Victoria University is privileged to have the most diverse
                    student community in Uganda. We have students coming from
                    more than 50 countries including Kuwait, Haiti, Oman,
                    Afghanistan, India, Comoros, Nigeria, Chad, Liberia to
                    mention but a few. We are a non-discriminatory institution
                    and we call ourselves ‘The University of You’.
                  </p>
                  {/* <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Letter of permission request form (pdf)&nbsp;<span className="fa fa-external-link"></span></p>
                    <p className="my-4">Once your course is complete, you must have the school send an official transcript to VU.</p> */}
                </div>
                <div className="mission-gd-right col-lg-12 pl-lg-4">
                  <img
                    src="assets/images/lounge.JPG"
                    className="img-fluid"
                    alt="WIL"
                  />
                  <p>
                    <b style={{ fontWeight: "500" }}>Image:</b> Student's Lounge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="text-center" style={{ color: "#000", width: "90%" }} />
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div
              className="container py-lg-5"
              style={{ paddingBottom: "0rem !important" }}
            >
              <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                  <h6
                    className="hny-title"
                    style={{ fontSize: "38px", color: "#0077b5" }}
                  >
                    Student Online Learning
                  </h6>
                  <br />
                  <p className="mb-4" style={{}}>
                    Victoria University has developed an interactive state of
                    the art learning management system that keep students
                    learning without any interruption. V-Class (our online
                    learning management portal) was vetted by Uganda’s National
                    Council for Higher Education and was accorded a score of 80%
                    - making it one of the top learning management systems in
                    the country.
                    <br />
                    <br />
                    In the quest to make our students proficient in the 21st
                    century skills, we have made digital literacy a priority for
                    all students and teachers. We have accomplished this by
                    doing the following;
                  </p>
                  <p className="my-4">
                    <ul style={{ listStyle: "none" }}>
                      <li
                        className=""
                        style={{ marginBottom: ".5rem !important" }}
                      >
                        &emsp;<span className="fa fa-angle-right"></span>
                        &emsp;Becoming the first university that requires
                        students to writeexams digitally and discarding the
                        traditional method of handwritten scripts.
                      </li>
                      <li
                        className=""
                        style={{ marginBottom: ".5rem !important" }}
                      >
                        &emsp;<span className="fa fa-angle-right"></span>
                        &emsp;We have also become the first university in Uganda
                        to give freetextbooks in digital version to all
                        interested students and VictoriaUniversity does this to
                        further immerse them in digital literacy learning.
                      </li>
                      <li
                        className=""
                        style={{ marginBottom: ".5rem !important" }}
                      >
                        &emsp;<span className="fa fa-angle-right"></span>
                        &emsp;To those students and families that have found it
                        difficult to support their studies online, Victoria
                        University has provided free education data and
                      </li>
                      <li
                        className=""
                        style={{ marginBottom: ".5rem !important" }}
                      >
                        &emsp;<span className="fa fa-angle-right"></span>
                        &emsp;Victoria University has also offered free basic
                        computer training to students who are not tech savvy or
                        have never been exposed to computer use.
                      </li>
                    </ul>
                  </p>
                  <p>
                    <Link
                      className="logo-2"
                      to="/transfer-credit"
                      style={{ color: "#0077b5" }}
                      onMouseOver={this.change_icon.bind(
                        this,
                        "iconner29",
                        "iconner30"
                      )}
                      onMouseOut={this.change_icon2.bind(
                        this,
                        "iconner29",
                        "iconner30"
                      )}
                    >
                      <span className="lohny-2">
                        <span
                          id="iconner29"
                          className="fa fa-chain programfa"
                          style={{ backgroundColor: "#f74040" }}
                        ></span>
                        <span
                          id="iconner30"
                          className="fa fa-arrow-right programfa hider"
                          style={{ backgroundColor: "#f74040", color: "#FFF" }}
                        ></span>
                        &nbsp;
                        <span className="underline">
                          Transfer Credits and Exemptions
                        </span>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <hr className="text-center" style={{color: '#000', width: '90%'}}/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Undergraduate orientation</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Our orientation offers an overview of services available to you as an VU student, and guides you through the processes needed to complete your studies.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                        <span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate orientation</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Learner support</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        Find out more about our range of support services, including counselling, the library, and the Write Site.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
                        <span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Student Services</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> */}
        <hr className="text-center" style={{ color: "#000", width: "90%" }} />
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div
              className="container py-lg-5"
              style={{ paddingBottom: "0rem !important" }}
            >
              <div className="welcome-grids row" id="charter">
                <div className="col-lg-12 mb-lg-0 mb-5">
                  <h1 style={{ fontSize: "65px", color: "#0077b5" }}>
                    Students' Charter
                  </h1>
                  <h6
                    className="hny-title"
                    style={{
                      fontSize: "38px",

                      color: "rgb(247, 64, 64)",
                    }}
                  >
                    Victoria University Rules And Regulations
                  </h6>
                  <br />
                  <h4 style={{ color: "#0077b5" }}>1. Admission</h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Victoria University is committed to helping students achieve
                    their full potential. The student selection process seeks to
                    recognize that potential and to place students in the course
                    or program best suited to their needs and aspirations. This
                    means that each enquiry is answered responsibly and every
                    application is reviewed on an individual basis. Where
                    appropriate we will discuss the options available to each
                    candidate and will make offers or provide advice based on
                    what in our judgment is in the candidate’s best interest.
                    All students are required to complete and fulfil all
                    admission requirements during the admission process.
                  </p>
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    1.1 Student Registration
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    All students are required to register at the start of every
                    academic year through the registry office. Registration fee
                    is UGX 100,000 for nationals and USD 32 for International
                    students. Registration should be done within the 14 days
                    from the start of the academic year.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Upon clearing with the Academic Registrar’s office, students
                    are then required to report to their respective faculties to
                    complete the registration process; where they will be given
                    programme structures, class timetables and faculty specific
                    orientation. Details of student orientation will be provided
                    on reporting date.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b>Note:</b> Late registration triggers a UGX 50,000 for
                    nationals and $16 for International students.
                  </p>
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    1.2 Module Registration
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    All students are required to register for each module he/she
                    intends to do per program in their respective faculties at
                    the beginning of every semester on the university online
                    portal - <b>VCLASS.</b> This also includes modules he/she
                    has to re-take in each semester, but shall not exceed the
                    maximum load per semester.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Students are responsible for ensuring that they are
                    registered for the appropriate courses or modules because
                    this determines their eligibility to sit examinations. The
                    maximum load per semester shall be <b>8 modules.</b>
                  </p>
                  <br />
                  <h4 style={{ color: "#0077b5" }}>
                    2. Student Academic Assessment and Grading
                  </h4>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    2.1 Continuous Assessment (CA)
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Students shall be expected to submit at least two
                    assignments within each module and course work(s) which all
                    contribute towards the final examination. Assessment ratios
                    vary per program and are available to students through their
                    respective faculties.
                  </p>
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    2.2 Final Examination
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    A student shall be required to sit for all Continuous
                    Assessments (CA) for each module and shall not be permitted
                    to sit final examinations if he/she shall not have obtained
                    the set pass mark in Continuous Assessment per module.
                    Besides a student must have attended 75% of the total module
                    hours. The Continuous Assessment and the Final Examination
                    shall each contribute in the students’ assessment for
                    progression.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Victoria University strongly encourages students to do
                    examinations online as all employers require graduates to
                    have sufficient digital literacies, the University cannot
                    afford to continue promoting handwritten exams. We have to
                    prepare our students to ably fit within the digital economy
                    by empowering students with computing skills and that is why
                    we require all our students to do their examinations through
                    the examination portal provided by VCLASS.
                  </p>
                  <p>
                    <b>Note: </b>
                    Victoria University also has a provision for physical
                    examinations.
                  </p>
                  <p>
                    A student will only be permitted to sit final examinations
                    upon;
                    <ul>
                      <span></span>
                      &emsp; &emsp;• Fulfilling academic clearance at faculty
                      level (continuous assessments & at least 75% class
                      attendance)
                      <span></span>
                      <br />
                      &emsp; &emsp;• Clearing all fees to zero balance.
                      (Tuition, Functional, retake, exemption, resumption fees
                      and other fines/penalties)
                    </ul>
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>2.3 Research</h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Each student save for the Foundation Programme and Diploma,
                    will be expected to present and defend a research conducted
                    during studies in order to graduate. This will be considered
                    as a module on its own during the first semester of year
                    three or year four in which a student will have completed
                    and submitted a copy of dissertation. This will be marked
                    out of 100%
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>2.4 Internship</h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    At Victoria University we understand that good things happen
                    when you are outside your comfort zone, away from the
                    classroom and beyond the textbooks. That is why integrated
                    practical experience is embedded into all of our degrees.
                    Providing meaningful, hands-on workplace experience to
                    enrich the theoretical learning of students and to enhance
                    the employability of graduates is a key focus of our
                    University.
                  </p>
                  <p>
                    <b>Note: </b>Internship schedules are available at faculty.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    2.5 Recognition of Excellence
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    The Senate shall recognize Academic excellence in the
                    following manner;
                    <br />
                    <b>a)</b> Declaring a candidate who has a CGPA OF 4.40 and
                    above to appear on the Vice Chancellor’s list and to
                    announce such a candidate at graduation ceremony.
                    <br />
                    <b>b)</b> To present an award e.g. physical award, financial
                    or full scholarship if judged appropriate, to the best
                    candidate in a cohort who has scored 4.5 CGPA and above as
                    shall be recommended by the Senate from time to time and
                    approved by the University Council. Senate shall comply with
                    rules, laws and procedures set by regulatory and
                    professional bodies which are related to Victoria University
                    programmes of study.
                  </p>
                  <br />
                  <h4 style={{ color: "#0077b5" }}>
                    3. Student Academic progression
                  </h4>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.1 Grading of modules
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    a) Each module shall be graded out of a maximum of 100 marks
                    obtained from Continuous Assessment (CA); Practical exams
                    and written exams. Appropriate letter grade and grade point
                    (GP) shall be assigned as follows:-
                  </p>
                  <table border="2" style={{ padding: "10px" }}>
                    <thead>
                      <tr>
                        <th>Marks</th>
                        <th>80-100</th>
                        <th>75-79</th>
                        <th>70-74</th>
                        <th>65-69</th>
                        <th>60-64</th>
                        <th>55-59</th>
                        <th>50-54</th>
                        <th>0-49</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alpha grade</td>
                        <td>A</td>
                        <td>B+</td>
                        <td>B</td>
                        <td>C+</td>
                        <td>C</td>
                        <td>D+</td>
                        <td>D</td>
                        <td>F</td>
                      </tr>
                      <tr>
                        <td>Grade point</td>
                        <td>5</td>
                        <td>4.5</td>
                        <td>4</td>
                        <td>3.5</td>
                        <td>3</td>
                        <td>2.5</td>
                        <td>2</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <p>
                    b) For the degree, a CGPA of 4.4-5.0 is a first class while
                    1.90 is considered a failure.
                    <br />
                    The following additional letters will be used where
                    appropriate:
                    <br />
                    &emsp;• W – Withdraw from Course.
                    <br />
                    &emsp;• I – Incomplete
                    <br />
                    &emsp;• AU- Audited Course Only
                    <br />
                    &emsp;• P – Pass
                    <br />
                    &emsp;• F – Failure.
                  </p>
                  <p>
                    The course pass grade point per course shall be 2.0. No
                    credit unit shall be awarded for any course failed by the
                    student i.e where a pass grade point is below 2.0 or pass
                    mark of below 50% for undergraduate and 60% for postgraduate
                    programmes.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.1.2 Minimum Pass Mark
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    A minimum pass grade for each course shall be 2.0 grade
                    points.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.1.3 Progression
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Progression of a student shall be classified as Normal or
                    Probationary.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.1.4 Normal Progress
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Normal Progress shall occur when a student has passed the
                    Assessment in all the modules he/she had registered for the
                    in a particular semester.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.1.5 Probationary Progress
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    A student who has obtained the Grade Point Average (GPA) of
                    less than 2.0 in one or more modules he/she had registered
                    for in a particular semester shall be placed on Probation.
                    Such a student shall be allowed to progress to the next
                    semester/academic year but shall still retake the module(s)
                    he/she failed when next offered.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.2 Re-taking a course
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Senate permits students an opportunity to improve their
                    grades or to pass modules which they have failed. The
                    following conditions apply;
                    <br />
                    <br />
                    &emsp;a) A student shall be allowed to re-take a module or
                    modules when next offered again in order to obtain at least
                    the pass mark (50%) if she/he had failed it.
                    <br />
                    <br />
                    &emsp;b) While re-taking a module(s) the candidate shall;
                    <br />
                    &emsp;&emsp;• Attend all the prescribed lectures, tutorials,
                    practical and fieldwork in the module.
                    <br />
                    &emsp;&emsp;• Satisfy all the requirements for the
                    coursework component in the module.
                    <br />
                    &emsp;&emsp;• Sit for the University examinations in the
                    module(s)
                    <br />
                    <br />
                    &emsp;c) A warning letter shall be issued by the Faculty
                    Dean to a student who fails to obtain at least the Pass mark
                    of (50%) during the second assessment in the same module (s)
                    he/she has retaken.
                    <br />
                    <br />
                    &emsp;d) A continuing student shall not be allowed to retake
                    modules beyond the maximum semester load of 8 modules.
                    <br />
                    <br />
                    &emsp;e) Retake (R) shall be indicated on the Academic
                    Transcript whenever a module or modules has/have been
                    retaken.
                    <br />
                    <br />
                    &emsp;f) A student shall be allowed to retake any module
                    after paying a fee as stated in the University Tuition and
                    Fees collection policy. Students who completed shall in
                    addition to the Retake fees pay Registration and Examination
                    fees.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    3.3.0 CLASSIFATION OF UNIVERSITY AWARDS
                  </h4>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.3.1Classification of Degrees
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    The Degrees, Diplomas, and Certificates of the University
                    shall be classified as provided for in the National Council
                    for Higher Education guidelines.
                  </p>
                  <table border="2">
                    <thead>
                      <tr>
                        <th>Class</th>
                        <th>CGPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>First Class</td>
                        <td>4.40 – 5.00</td>
                      </tr>
                      <tr>
                        <td>Second class (Upper Division)</td>
                        <td>3.60 – 4.39</td>
                      </tr>
                      <tr>
                        <td>Second Class (Lower Division)</td>
                        <td>2.80 – 3.59</td>
                      </tr>
                      <tr>
                        <td>Third Class (Pass)</td>
                        <td>2.0 – 2.79</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.3.2 Classification of awards for Diplomas
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    In line with the provisions of NCHE, the Diplomas shall be
                    classified as in the table below;
                  </p>
                  <table border="2">
                    <thead>
                      <tr>
                        <th>CLASS</th>
                        <th>CGPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Class 1 (Distinction)</td>
                        <td>4.45 - 5.00</td>
                      </tr>
                      <tr>
                        <td>Class 11 (Credit)</td>
                        <td>2.80 – 4.39</td>
                      </tr>
                      <tr>
                        <td>Class 111 (Pass)</td>
                        <td> 2.00 – 2.79</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.4.0 Discontinuation
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    A student shall be discontinued from the programme if one of
                    the following conditions is obtained;
                    <br />
                    &emsp;a) A student who misses more than 3 classes
                    <br />
                    &emsp;b) Does a re-take twice and does not qualify for a
                    compensatory pass.
                    <br />
                    &emsp;c) Accumulates three consecutive probations based on
                    CGPA
                    <br />
                    &emsp;d) Fails to attain a minimum of 2.0 CGPA in at least
                    three (3) consecutive semesters
                    <br />
                    &emsp; e) Over stays on an Academic Programme by more than:
                    <br /> &emsp;&emsp;• A maximum of two (2) years for one (1)
                    year certificate programme
                    <br />
                    &emsp;&emsp;• A maximum of three (3) years, for a two (2)
                    year diploma
                    <br />
                    &emsp;&emsp;• A maximum of five (5) years, for a three (3)
                    year degree programme
                    <br />
                    &emsp;&emsp;• A maximum of six (6) years for a four (4) year
                    degree.
                    <br />
                    &emsp;f) And/or other indiscipline situation NOTE: The
                    maximum period permitted for each programme is inclusive of
                    a dead semester/year. A student who is discontinued shall be
                    given a partial transcript of what he/she studied.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>4. Class Attendance</h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Students are expected to attend class regularly; lectures,
                    seminars, tutorials, visits and other classes in all modules
                    or courses, to present written work as required, and to take
                    the specified assignments, tests and examinations. Failure
                    to attend classes and tutorials or other compulsory
                    activities may result in the candidate being excluded from
                    banned from sitting examinations.
                  </p>
                  <p>
                    A student is expected to attend atleast 75% of the module
                    hours within the semester.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    4.1 Teaching and learning
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    All classes for are scheduled as below
                  </p>
                  <table border="2">
                    <tr>
                      <th
                        rowSpan={"3"}
                        style={{ backgroundColor: "#0077b5", color: "#fff" }}
                      >
                        Day session
                      </th>
                      <th style={{ backgroundColor: "#0077b5", color: "#fff" }}>
                        8:00am to 11:00am
                      </th>
                    </tr>
                    <tr>
                      <td>11:00am to 2:00pm</td>
                    </tr>
                    <tr>
                      <td>82:00pm to 5:00pm</td>
                    </tr>
                    <tr>
                      <td>Evening session </td>
                      <td>6:00pm – 9:00pm</td>
                    </tr>
                    <tr>
                      <td rowSpan={"3"}>Weekend session</td>
                      <td>8:00am to 11:00am</td>
                    </tr>
                    <tr>
                      <td>11:00am to 2:00pm</td>
                    </tr>
                    <tr>
                      <td>2:00pm to 5:00pm</td>
                    </tr>
                  </table>
                  <p>
                    <b>Note: </b>No student will be allowed in class both
                    physical and online 15 minutes after start of class
                  </p>
                  <br />
                  <br />
                  <h4 style={{ color: "#0077b5" }}>
                    5. Certificate of Due Performance (Result statement)
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    A student who has fully attended class, done all the course
                    works, continuous assessments and paid all University dues
                    will be eligible to get their result statements before the
                    beginning of the next semester.
                    <br />
                    <br />
                    However; a student who does not comply will be barred from
                    sitting examinations for the modules for which he/she has
                    been registered. Senate shall nullify examination results
                    should such a candidate irregularly take the examinations.
                    Failure to fulfil any of the following conditions shall be
                    reason enough to deny the student a certificate of Due
                    Performance:
                    <br />
                    a) Has been absent from the University for more than three
                    classes of the semester for any reason without notice or
                    authorization from the university; or whose attendance at
                    prescribed lectures, classes, practical classes, seminars,
                    or tutorials has been unsatisfactory or;
                    <br />
                    b) Has failed to submit essays or exercises or take tests or
                    class examinations set by the candidate’s lecturers.
                    <br />
                    c) Has not submitted field work or internship or research
                    report.
                    <br />
                    d) For a student to be awarded a certificate of Due
                    Performance he or she shall have attended a minimum of 75%
                    of the lectures and done the prescribed continuous
                    assessments.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    6. Dead Semester/Dead Year
                  </h4>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    6.1.1 Definition of Dead Semester/Year
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    a) A dead semester is a period of seventeen weeks ( 15 weeks
                    of teaching and other related activities e.g fieldwork, and
                    two weeks of examinations) which a student does not attend
                    having been granted permission by the Academic Registrar
                    using delegated authority from Senate.
                    <br />
                    b) Two consecutive dead semesters constitute a dead year.
                    <br />
                    <br />A student who is not able to continue with a Semester
                    shall apply for a dead semester and will officially be
                    granted permission to be absent from his/her studies for the
                    duration of one semester. If circumstances are such that the
                    students requires a longer time off the programme of study.
                    The student shall apply for a dead year. The following
                    procedures shall apply:
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    6.1.2 Application Procedure for Dead Semester/Year
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    a) The student shall apply to the Academic Registrar through
                    the Dead of Faculty committing to resume studies at the
                    beginning of the next Semester/Academic year.
                    <br />
                    b) Such an application should be made within the first three
                    weeks of Semester.
                    <br />
                    c) The Academic Registrar shall grant permission in writing
                    to the student with copies to the Deputy Vice Chancellor
                    Academic Affairs and Dean of the Faculty. A copy shall also
                    be kept in the student’s personal file in the Registry.
                    <br />
                    d) Any fees shall be in accordance with the fees collection
                    policy.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    6.1.3 Resuming Studies after Dead Semester/Dead Year
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    a) When the time granted to the student has expired; he/she
                    shall apply to the Academic Registrar making reference to
                    the permission which he/she had been granted.
                    <br />
                    b) A resumption fee of UGX 100,000 for nationals and $32 for
                    International students shall be paid at the time of
                    application to resume semester/year.
                    <br />
                    c) Upon presentation of clearance of payment, the Academic
                    Registrar shall issue a letter authorizing the student to
                    resume studies.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    6.2 Failure to apply for Dead Semester/Year.
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    a) A student who fails to apply for a dead Semester/year
                    within the first three weeks of the semester, or misses a
                    semester, shall on application for resumption of studies be
                    treated as follows;
                    <br /> &emsp;• Fill a resumption form on return at registry
                    through faculty.
                    <br />
                    &emsp;• Pay resumption fee of UGX 187,500 for nationals and
                    $60 for International students on return.
                    <br />
                    <br />
                    b) A student who fails to apply for a dead year and misses
                    at least two consecutive semesters shall be treated as a
                    drop out and shall have to apply for re-admission just like
                    a new entrant.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    7. Transferring to an alternate Programme.
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b>
                      There are three categories in regard to change of
                      programmes;
                    </b>
                    <br />
                    i) Change of programme within one month upon admission (no
                    penalty)
                    <br />
                    ii) Change of programme after studying for a semester
                    (penalty charged)
                    <br />
                    iii) Change of programme after studying for a full academic
                    year and above (penalty charged)
                    <br />
                    <br />
                    Students wishing to change programme may do so with the
                    approval of both their current Dean and the Dean of the new
                    programme/faculty they intend to join.
                    <br />
                    <br />
                    An appropriate transfer form should be obtained from and
                    returned to Academic Registrar’s office for any changes to
                    take effect.
                    <br />
                    <br />
                    Where the programme requires students to take electives
                    modules, they must register their choice of subject with
                    their own programme and if the course or module is taught
                    within another programme; the appropriate form is available
                    from the Academic Registrar’s office for that purpose.
                    <br />
                    <br />
                    <b>Note: </b>Penalties and charges guided by fees collection
                    policy.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>8. Deregistration.</h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    A student shall be deregistered from the University when
                    he/she absconds (absent from class without prior written
                    notice) from the University for two to more semesters. Such
                    a student can obtain his/her results. The student shall pay
                    registration fee to resume studies.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>9. Student Welfare</h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Victoria University aims to provide a holistic and
                    supportive learning environment for all students; it is for
                    this purpose that the University has the Dean of Students
                    office to serve as a primary administrative contact and
                    advocate for students in both graduate and undergraduate
                    programs.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    9.1 International Students
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    The Dean of Students office gives support to international
                    students in areas as listed below;
                    <br />
                    &emsp;• Secure student pass/visa <br />
                    &emsp;• Guidance on immigration requirements <br />
                    &emsp;• Guidance on equating of foreign academic documents
                    from their respective regulatory bodies.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    9.2 Student Guild body
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    The Students Guild is a link between the students’ body and
                    the University Administration. It is headed by a Guild
                    President who is democratically elected by the students in
                    accordance with the existing guidelines. The student guild
                    body is managed and coordinated by the Dean of students’
                    office. All students are encouraged to actively take part in
                    guild activities like student clubs and associations.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    10. Brand Victoria University
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Victoria University may use the name and pictures of
                    students in campus or during any other Victoria University
                    related activities for promotion and Marketing purposes for
                    lifetime.
                  </p>
                  <br />
                  <br />
                  <h1 style={{ color: "rgb(247, 64, 64)" }}>
                    Study Environment
                  </h1>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    We aim to provide a supportive learning environment which
                    will enable each and every student to reach their full
                    academic and professional potential. We understand that our
                    students come from a range of different educational
                    backgrounds and that some may need additional support in
                    order to develop their capacity for independent, creative
                    learning.
                  </p>
                  <h6 style={{ color: "rgb(247, 64, 64)" }}>
                    PLEDGE OF STUDENT COMMITMENT
                  </h6>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    1. Full participation in all the learning activities of
                    their particular study programs. This includes attendance at
                    all compulsory classes and assessments, thorough preparation
                    for study activities; and the timely submission of assessed
                    work.
                    <br />
                    <br />
                    2. How to attend class: (Online & physical) Online classes:
                    All online classes are conducted via VCLASS (Student
                    learning portal)
                    <br />
                    &emsp;• The university issues an official student email
                    account & password upon registration.
                    <br />
                    &emsp;• Email activation is done by the student with support
                    from Victoria University IT staff
                    <br />
                    &emsp;• Acquire Vclass details for log-in & module selection
                    and registration. (Demo/trainings available through faculty
                    registrars.
                    <br />
                    &emsp;• Module details and timetables to be shared by the
                    respective faculty registrars via your official student
                    email at the start of every semester.
                    <br />
                    &emsp;• Clashing timetable concerns to be raised by students
                    immediately.
                    <br />
                    <br />
                    3. Conducting themselves responsibly; and showing respect
                    for staff, students and external stakeholders. This
                    principle applies particularly when students are
                    representing Victoria University off-campus, for example, at
                    sporting or cultural events, or on field study and work
                    placement program.
                    <br />
                    <br />
                    4. Ensuring that they are aware of, and compliant with all
                    relevant University Regulations, Processes and Procedures.
                    This includes any requirements specific to the particular
                    program of study.
                    <br />
                    <br />
                    5. Bringing any problems or issues which may affect their
                    course of study to the attention of relevant academic staff;
                    Faculty Deans or HODs, Dean of Students and the Academic
                    Registry and / or Finance Office as appropriate. These
                    include, but are not limited to, concerns about class
                    attendance and absence; personal or academic issues with
                    other students or staff; and any worries about assessment
                    and examinations.
                    <br />
                    <br />
                    6. Maintaining high standards of personal integrity
                    including making no attempt to cheat or gain unfair
                    advantage in all assessments and examinations, or and
                    plagiarize the work or published documents of a third party.
                    <br />
                    <br />
                    7. Always seeking aerk or published documents of a third
                    party. when in any doubt lye guidance from appropriate
                    University staff when in any doubt as to requirements or
                    regulations.
                  </p>
                  <br />
                  <br />
                  <br />
                  <h6 style={{ color: "rgb(247, 64, 64)" }}>
                    <i>
                      Please use the emails and numbers below for further
                      assistance;
                    </i>
                  </h6>
                  <table border="2">
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>CONTACT PERSON</th>
                        <th>EMAIL</th>
                        <th>TELEPHONE</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Academic Registrar</td>
                        <td>registry@vu.ac.ug</td>
                        <td>0759996107</td>
                        <td>All academic related issues/queries</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>EA- Academic Registrar</td>
                        <td>pa-registry@vu.ac.ug</td>
                        <td>0706226726</td>
                        <td>All academic related issues/queries</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Admissions</td>
                        <td>admissions@vu.ac.ug</td>
                        <td>0703525075</td>
                        <td>All admission related issues/queries</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Assistant Academic Registrar</td>
                        <td>assistant-ar@vu.ac.ug</td>
                        <td>0701662101</td>
                        <td>Progress & exam results </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Dean of Students</td>
                        <td>deanofstudents@vu.ac.ug</td>
                        <td>0707780168</td>
                        <td>Student welfare /International student support</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Executive assistant – Dean of Students</td>
                        <td>ea-dos@vu.ac.ug</td>
                        <td></td>
                        <td>Student welfare /International student support</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Faculty Dean –FHS</td>
                        <td>deanhealthscience@vu.ac.ug</td>
                        <td>0755512527</td>
                        <td>Faculty of Health Science</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Faculty Registrar /Executive assistant</td>
                        <td>ea-healthscience@vu.ac.ug</td>
                        <td>0707780170</td>
                        <td>Faculty of Health Science</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Faculty Dean - FHSS</td>
                        <td>deanofhumanities@vu.ac.ug</td>
                        <td>0759996105</td>
                        <td>Faculty of Humanities and Social Sciences</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Faculty Registrar /Executive assistant</td>
                        <td>ea-deanofhumanities@vu.ac.ug</td>
                        <td>0707780162</td>
                        <td>Faculty of Humanities and Social Sciences</td>
                      </tr>

                      <tr>
                        <td>11</td>
                        <td>Faculty Dean - FBM</td>
                        <td>deanofbusiness@vu.ac.ug</td>
                        <td>0759996143</td>
                        <td>Faculty of Business Management</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Faculty Registrar /Executive assistant</td>
                        <td>ea-deanofbusiness@vu.ac.ug</td>
                        <td></td>
                        <td>Faculty of Business Management</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Faculty Dean - FST</td>
                        <td>deanoftechnology@vu.ac.ug</td>
                        <td></td>
                        <td>Faculty of Science and Technology</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Faculty Registrar /Executive assistant</td>
                        <td>ea-deanoftechnology@vu.ac.ug</td>
                        <td>0707780165</td>
                        <td>Faculty of Science and Technology</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>School of Law</td>
                        <td>erutechura@vu.ac.ug</td>
                        <td></td>
                        <td>School of Law</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>Institute of Education</td>
                        <td>pkabeera@vu.ac.ug</td>
                        <td></td>
                        <td>Institution of Education</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>Short course coordinator</td>
                        <td>marketing@vu.ac.ug</td>
                        <td>0707780158</td>
                        <td>Short courses</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Bursar</td>
                        <td>bursar@vu.ac.ug</td>
                        <td>0759996141</td>
                        <td>Finance</td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Accounts clerk</td>
                        <td>accounts_clerk.1@vu.ac.ug</td>
                        <td>0707780167</td>
                        <td>Finance</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>IT Department</td>
                        <td>it@vu.ac.ug</td>
                        <td>0758327898</td>
                        <td>IT support</td>
                      </tr>
                      <tr>
                        <td>21</td>
                        <td>Sports Coordinator</td>
                        <td>sports@vu.ac.ug</td>
                        <td></td>
                        <td>Sports</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1
                    style={{
                      color: "#0077b5",
                      fontSize: "60px",
                      fontWeight: "300",
                    }}
                  >
                    New Tuition and Fees Collection Policy
                  </h1>
                  <br />
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    <i>1.Full payment per year (s) with rebates/discounts:</i>
                  </h4>
                  <table border="2">
                    <tr style={{ backgroundColor: "#0077b5", color: "#fff" }}>
                      <th colSpan={"3"}>
                        1.Full payment per year (s) with rebates/discounts:
                      </th>
                    </tr>
                    <tr>
                      <th>#</th>
                      <th>Criteria</th>
                      <th>Discount</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Full fees paid for 1 year</td>
                      <td>4% discount on tuition</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Full fees paid for 2 years</td>
                      <td>8% discount on tuition</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Full fees paid for 3 years</td>
                      <td>12% discount on tuition</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Full fees paid for 4 years</td>
                      <td>16% discount on tuition</td>
                    </tr>
                  </table>
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    <i>2. Full payment for Semester</i>
                  </h4>
                  <table border="2">
                    <tr
                      style={{
                        backgroundColor: "#0077b5",
                        color: "#fff",
                        borderColor: "#ffff",
                        textAlign: "center",
                      }}
                    >
                      <th></th>
                      <th>First instalment</th>
                      <th>Second instalment</th>
                      <th colSpan={"4"}>Penalty charges</th>
                    </tr>
                    <tr>
                      <th>#</th>
                      <th>1st month</th>
                      <th>2nd month</th>
                      <th>3rd month</th>
                      <th>4th month</th>
                      <th>National students</th>
                      <th>International students</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>100%</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        UGX 100,000 penalty charge to defaulters per month
                      </td>
                      <td>$32 penalty charge to defaulters per month</td>
                    </tr>
                  </table>
                  <br />
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    <i>3. Instalment payment for Semester</i>
                  </h4>
                  <table border={"2"}>
                    <tr
                      style={{
                        backgroundColor: "#0077b5",
                        color: "#fff",
                        borderColor: "#ffff",
                        textAlign: "center",
                      }}
                    >
                      <th></th>
                      <th>First Instalment</th>
                      <th>Second Instalment</th>
                      <th colSpan={"5"}></th>
                    </tr>
                    <tr
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <th></th>
                      <th colSpan={"2"}>1st Month</th>
                      <th>2nd Month</th>
                      <th>3rd Month</th>
                      <th>4th Month</th>
                      <th colSpan={"2"}>Penalty charges</th>
                    </tr>
                    <tr
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <th>#</th>
                      <th>Week 2</th>
                      <th>Week 4</th>
                      <th>Week 8</th>
                      <th></th>
                      <th></th>
                      <th>National students</th>
                      <th>International students</th>
                    </tr>
                    <tr
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <td>1</td>
                      <td>40%</td>
                      <td>20%</td>
                      <td>40%</td>
                      <td></td>
                      <td></td>
                      <td>
                        UGX 100,000 penalty charge to defaulters per month
                      </td>
                      <td>$32 penalty charge to defaulters per month</td>
                    </tr>
                  </table>
                  <br />
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    <i>4. Other University Fees</i>
                  </h4>
                  <table border={"2"}>
                    <thead>
                      <tr>
                        <th>Fees</th>
                        <th>National Students</th>
                        <th>International Students</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Application fees</td>
                        <td>UGX 50,000</td>
                        <td>$ 16</td>
                      </tr>
                      <tr>
                        <td>Registration fees</td>
                        <td>UGX 100,000</td>
                        <td>$ 32</td>
                      </tr>
                      <tr>
                        <td>Identity card</td>
                        <td>UGX 10,000</td>
                        <td>$ 3</td>
                      </tr>
                      <tr>
                        <td>Resumption fees with notice</td>
                        <td>UGX 100,000</td>
                        <td>$ 32</td>
                      </tr>
                      <tr>
                        <td>Resumption fees without notice</td>
                        <td>UGX 187,500</td>
                        <td>$ 60</td>
                      </tr>
                      <tr>
                        <td>Retake fees</td>
                        <td>UGX 200,000</td>
                        <td>$ 64</td>
                      </tr>
                      <tr>
                        <td>Caution fees</td>
                        <td>UGX 50,000</td>
                        <td>$ 16</td>
                      </tr>
                      <tr>
                        <td>Missed paper</td>
                        <td>UGX 200,000</td>
                        <td>$ 64</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    <i>
                      Fees payment will be done through the options listed
                      below:
                    </i>
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "50%" }}>
                      <h6
                        className="hny-title"
                        style={{ fontSize: "20px", color: "#0077b5" }}
                      >
                        Stanbic Bank (Bank Details)
                      </h6>
                      <p className="my-4">
                        <ul style={{ listStyle: "none" }}>
                          {/* <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>1</span>&emsp;
                        <a
                          href="https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "#025683" }}
                        >
                          <span className="underline">
                            Login into
                            https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx&nbsp;&nbsp;
                            <span className="fa fa-external-link"></span>
                          </span>
                        </a>
                      </li> */}
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">Account Name: </span>
                            <b className="">Victoria University</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">UGX Account Number: </span>
                            <b className="">9030020161085</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">USD Account Number: </span>
                            <b className="">9030020161247</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">Bank Name: </span>
                            <b className="">STANBIC BANK</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">SWIFT Code: </span>
                            <b className="">SBICUGKX</b>
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <br />
                      <h6
                        className="hny-title"
                        style={{ fontSize: "20px", color: "#0077b5" }}
                      >
                        Payment Methods
                      </h6>
                      <p className="my-4">
                        <ul style={{ listStyle: "none" }}>
                          {/* <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>1</span>&emsp;
                        <a
                          href="https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "#025683" }}
                        >
                          <span className="underline">
                            Login into
                            https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx&nbsp;&nbsp;
                            <span className="fa fa-external-link"></span>
                          </span>
                        </a>
                      </li> */}
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>1.</span>
                            &emsp;
                            <span className="">
                              Direct payment to the bank - Victoria University
                              account
                            </span>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>2.</span>
                            &emsp;
                            <span className="">
                              Pay through agent banking - Must have Victoria
                              account number
                            </span>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>3.</span>
                            &emsp;
                            <span className="">
                              Mobile money payment - Use`{" "}
                              <b>Merchant Code (239748)</b> for MTN or Airtel
                            </span>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>4.</span>
                            &emsp;
                            <span className="">
                              School pay - Use code provided
                            </span>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>5.</span>
                            &emsp;
                            <span className="">
                              Online payment - e-commerce
                            </span>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>5.</span>
                            &emsp;
                            <span className="">Pay through e-wallet</span>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ width: "50%" }}>
                      <h6
                        className="hny-title"
                        style={{ fontSize: "20px", color: "#0077b5" }}
                      >
                        GTBank (Bank Details)
                      </h6>
                      <p className="my-4">
                        <ul style={{ listStyle: "none" }}>
                          {/* <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>1</span>&emsp;
                        <a
                          href="https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "#025683" }}
                        >
                          <span className="underline">
                            Login into
                            https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx&nbsp;&nbsp;
                            <span className="fa fa-external-link"></span>
                          </span>
                        </a>
                      </li> */}
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">Account Name: </span>
                            <b className="">Victoria University</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">UGX Account Number: </span>
                            <b className="">218143915151110</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">USD Account Number: </span>
                            <b className="">218143915251110</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">Bank Name: </span>
                            <b className="">Guaranty Trust Bank (Uganda) Ltd</b>
                          </li>
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>#</span>
                            &emsp;
                            <span className="">SWIFT Code: </span>
                            <b className="">GTBIUGKA</b>
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <h6
                        className="hny-title"
                        style={{ fontSize: "20px", color: "#0077b5" }}
                      >
                        Payment Methods
                      </h6>
                      <p className="my-4">
                        <ul style={{ listStyle: "none" }}>
                          {/* <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>1</span>&emsp;
                        <a
                          href="https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "#025683" }}
                        >
                          <span className="underline">
                            Login into
                            https://eportal.vu.ac.ug/cooperp/mobile/cardpay.aspx&nbsp;&nbsp;
                            <span className="fa fa-external-link"></span>
                          </span>
                        </a>
                      </li> */}
                          <li className="mb-1 t2">
                            &emsp;<span style={{ color: "#025683" }}>1.</span>
                            &emsp;
                            <span className="">
                              Direct payment to the bank - Victoria University
                              account
                            </span>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <br />
                    <h6
                      className="hny-title"
                      style={{ fontSize: "20px", color: "#0077b5" }}
                    >
                      Pesapal (Click the link below to make payment)
                    </h6>
                    <p className="my-4">
                      <ul style={{ listStyle: "none" }}>
                        <li className="mb-4 t2">
                          &emsp;
                          <span
                            className="fa fa-angle-right"
                            style={{ color: "#025683" }}
                          ></span>
                          &emsp;
                          <a
                            href="https://payments.pesapal.com/victoriauniversity"
                            rel="noreferrer"
                            target="_blank"
                            style={{ color: "#025683" }}
                          >
                            <span className="underline">
                              Pesapal&nbsp;&nbsp;
                              <span className="fa fa-external-link"></span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </p>
                  </div>
                  <br />
                  <br />
                  <h6
                    className="hny-title"
                    style={{ fontSize: "38px", color: "#0077b5" }}
                  >
                    Academic Misconduct Document
                  </h6>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>Definition:</h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Academic misconduct means an attempt by students to gain an
                    unfair advantage in their assessed work, including
                    assignments and examinations. Academic Misconduct includes
                    plagiarism, collusion, failure of disclosure, impersonation,
                    and other malpractices.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b style={{ color: "rgb(247, 64, 64)" }}>Policy: </b>
                    Except where otherwise clearly indicated; students shall be
                    assessed on the basis of their own unassisted and unaided
                    work.
                    <br />
                    Where feasible, coursework will be compared against
                    databanks of existing material in order to check whether
                    there is a degree of similarity that might arouse suspicions
                    of academic misconduct. Such a databank may also be used to
                    check whether there are pronounced differences in standard
                    or style between two or more pieces of work by the same
                    students sufficient to arouse suspicions of unauthorized
                    assistance or inauthenticity.
                    <br />
                    Assignments must include full disclosure of the following;
                    <br />
                    1. All sources of information used (which should be cited
                    according to normal scholarly conventions)
                    <br />
                    2. A full description of any help received in the
                    preparation of the assignment, with full identification of
                    the individual or individuals who provided the assistance.
                    <br />
                    3. Bribery in respect to preparation of the assignments
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b style={{ color: "rgb(247, 64, 64)" }}>Plagiarism: </b>
                    This is where students present as if their own the thoughts
                    ideas, data, or writings of others. It includes presenting
                    extracts from books, articles, these, or other hard copies,
                    or items from the internet or other electronic
                    communications or other published or unpublished works,
                    without the use of quotation marks and/or acknowledgement of
                    the source material. It also includes the incorporation of
                    very closely paraphrased sentences or whole paragraphs
                    without due acknowledgement.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b style={{ color: "rgb(247, 64, 64)" }}>Collusion: </b>
                    This is where material is copied from the work of other
                    students, with or without permission. Students who assist in
                    the collusion as just as guilty as those who attempt to
                    benefit from it.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b style={{ color: "rgb(247, 64, 64)" }}>Impersonation: </b>
                    Impersonation is where students place their name against
                    work which is not their own, or sit examinations on behalf
                    of other students.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b style={{ color: "rgb(247, 64, 64)" }}>
                      Initial Checks:{" "}
                    </b>
                    Where a tutor, course leader or Dean does not believe that
                    work submitted could be the students’ own unaided products,
                    shorts tests may be set on the instruction of Dean or
                    Director where the students will be required to show command
                    of the relevant knowledge of skills under controlled
                    circumstances. The results of such test may form part of the
                    evidence in such cases.
                  </p>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    <b style={{ color: "rgb(247, 64, 64)" }}>
                      Initial Checks:{" "}
                    </b>
                    Where a tutor, course leader or Dean does not believe that
                    work submitted could be the students’ own unaided products,
                    shorts tests may be set on the instruction of Dean or
                    Director where the students will be required to show command
                    of the relevant knowledge of skills under controlled
                    circumstances. The results of such test may form part of the
                    evidence in such cases.
                  </p>
                  <br />
                  <br />
                  <h6
                    className="hny-title"
                    style={{ fontSize: "38px", color: "#0077b5" }}
                  >
                    Academic Misconduct In Respect Of Examinations and
                    Assignments
                  </h6>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    1.0 Assignment and Course work
                  </h4>
                  <h4 style={{ color: "#0077b5" }}>
                    <i>1.1 Misconduct in Relation to Coursework/Assignment</i>
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    It shall be an offence for a student to avail to another
                    student his/her prepared coursework with a view to assisting
                    the latter to do his/her coursework or to negligently expose
                    his/her coursework to another candidate to use.
                  </p>
                  <br />
                  <h4 style={{ color: "#0077b5" }}>
                    <i>1.2 Fraud in Relation to Coursework</i>
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    It is an offence for a student to:
                    <br />
                    &emsp;• Submit coursework not prepared by him/her
                    <br />
                    &emsp;• Substantially plagiarize the work of any other
                    person
                    <br />
                    &emsp;• Solicit/Purchase any coursework from any other
                    person
                    <br />
                    &emsp;• Falsify marks awarded on a coursework script.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    <i>
                      1.2.1 Penalty (Misconduct in Relation to Coursework/
                      Assignment)
                    </i>
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Any student found guilty of the offence above shall be
                    liable to:
                    <br />
                    &emsp;• Caution and Cancellation of his/her coursework
                    <br />
                    &emsp;• Caution and Cancellation of his/her coursework and
                    suspension from his/her studies for a period not exceeding
                    one academic year.
                  </p>
                  <br />
                  <br />
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    2.0 Malpractices in the Conduct of Examinations (both
                    physical & online exams)
                  </h4>

                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    It is an offense for a student involved in an
                    examination/test to:
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>1. </b>Sit or
                    attempt to sit the examination without valid examination
                    permit.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>2. </b>Enter the
                    examination room later than half an hour after the
                    examination/test has commenced.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>3. </b>Leave the
                    examination room earlier than half an hour after the
                    examination has commenced except in emergencies with the
                    express permission of the invigilator.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>4. </b>Carry out a
                    conversation or any other communication with another
                    student/candidate once the examination has commenced.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>5. </b>Indulge in
                    any disruptive conduct including, but not limited to
                    shouting, assault of another student, using abusive and/or
                    threatening language, destruction of University property or
                    property of another student.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>6. </b>Take out of
                    the examination room answer booklet(s), used or unused.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>7. </b>Neglect,
                    omit or in any other way fail to follow lawful instructions
                    or orders issued by the invigilator.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>8. </b>Physically
                    assault or insult an invigilator or any University Official
                    involved in conduct of the examination.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>9. </b>Plagiarism
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>10. </b>Collision
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>11. </b>
                    Impersonation
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    <i>
                      2.1 Penalties (Malpractices in the Conduct of
                      Examinations)
                    </i>
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Any student found guilty of contravening rules, shall be
                    liable to:
                    <br />
                    &emsp;• Caution and Cancellation of the relevant examination
                    and suspension from the University for a period not
                    exceeding two years person
                    <br />
                    &emsp;• Cancellation of relevant examination and dismissal
                    from the University.
                    <br />
                    &emsp;• Any student who contravenes rule 5 above shall be
                    liable to a fine as well as any penalty specified.
                    <br />
                    &emsp;• Any student found guilty of contravening rule 8
                    above by physically assaulting an invigilator or University
                    Official shall be dismissed from the University.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    3.0 Cheating in an Examination (both physical and online)
                  </h4>

                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    It is an offence for any student involved in an examination
                    to:
                    <br />
                    &emsp;• Take into the examination room, in person or by
                    agent, unauthorized material including, but not limited to,
                    plain papers, condensed notes, books and handkerchiefs on
                    which information is written or information written on any
                    part of the body, recording apparatus, mobile phones, or any
                    unauthorized electronic equipment.
                    <br />
                    &emsp;• Copy from any other student
                    <br />
                    &emsp;• Involve oneself in plagiarism, that is:
                    <br />
                    &emsp;• Pass off the words or ideas of someone else as
                    his/her own without proper acknowledgment of crediting the
                    original source.
                    <br />
                    &emsp;• Replicate one’s own work which one has been
                    presented elsewhere for assessment.
                    <br />
                    &emsp;• Aid and/or abet another student to copy from a
                    script/book of another person.
                    <br />
                    &emsp;• Exchange answers with another students in or outside
                    the examination room.
                    <br />
                    &emsp;• Collaborate with another student in the examination
                    room to use telephone discussions and share material
                    including calculators and other electronic equipment.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    <i>3.1 Penalties (Cheating in an Examination)</i>
                  </h4>

                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Any student found guilty of cheating in examinations as
                    defined above shall be liable to:
                    <br />
                    &emsp;• Caution and Cancellation of the relevant examination
                    <br />
                    &emsp;• Caution and Cancellation of the relevant examination
                    and suspension from the University for a period not
                    exceeding two years
                    <br />
                    &emsp;• Cancellation of relevant examination and dismissal
                    from the University.
                    <br />
                    &emsp;• Where several paragraphs or ideas have been
                    plagiarized; the student shall be warned and awarded zero
                    for the submitted work.
                  </p>
                  <h4 style={{ color: "#0077b5" }}>
                    <i>3.2 Fraud in Examinations</i>
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    It is an offence for a student involved in the examination
                    to:
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>1. </b>Import into
                    the examination room, in person or by agent, a pre-prepared
                    answer script/booklet.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>2. </b>Substitute
                    an answer script/booklet prepared outside the examination
                    room/hall for the one already submitted to the
                    invigilator/examiner.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>3. </b>Impersonate
                    another student/candidate.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>4. </b>Procure or
                    induce another person to sit for him/her.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>5. </b>Utter false
                    documents in relation to eligibility to sit University exams
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>6. </b>Sit or
                    attempt to sit an examination without authority.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>7. </b>Deliver to
                    the examiner’s office or residence an examination
                    script/booklet outside the scheduled time for delivery
                    without due authority.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>8. </b>Fraudulently
                    receive examination papers/questions which have been
                    illegally procured or made available.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>9. </b>
                    Fraudulently access or attempt to access examinations
                    questions before the examination is due.
                    <br />
                    <b style={{ color: "rgb(247, 64, 64)" }}>10. </b>Pay or
                    induce another person to illegally procure or make available
                    examination questions/papers.
                  </p>
                  <h4 style={{ color: "rgb(247, 64, 64)" }}>
                    <i>3.2.1 Penalties (Fraud in Examinations)</i>
                  </h4>
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    Any student found guilty of fraudulent conduct as defined
                    above shall be liable to:
                    <br />
                    &emsp;• Caution and Cancellation of the relevant examination
                    <br />
                    &emsp;• Caution and Cancellation of the relevant examination
                    and suspension from the University for a period not
                    exceeding two years
                    <br />
                    &emsp;• Cancellation of relevant examination and dismissal
                    from the University.
                  </p>
                  <br />
                  <br />
                  <p>
                    <a
                      className="logo-2"
                      href="/assets/docs/students charter.pdf"
                      download="assets/students charter.pdf"
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
                        &nbsp;
                      </span>
                      <span
                        className="hny-title underline"
                        style={{ fontSize: "28px", color: "#0077b5" }}
                      >
                        Download the Students' Charter here.
                        <span className="fa fa-file-pdf-o"></span>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="text-center" style={{ color: "#000", width: "90%" }} />
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div
              className="container py-lg-5"
              style={{ paddingBottom: "0rem !important" }}
            >
              <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                  <h6
                    className="hny-title"
                    style={{ fontSize: "38px", color: "#0077b5" }}
                  >
                    Find Help
                  </h6>
                  <br />
                  <p className="mb-4" style={{ fontSize: "18px" }}>
                    No matter where you are in your VUexperience, we’re here to
                    help you along the way.
                  </p>
                  <p>
                    <Link
                      className="logo-2"
                      to="/contact"
                      style={{ color: "#0077b5" }}
                      onMouseOver={this.change_icon.bind(
                        this,
                        "iconner15",
                        "iconner16"
                      )}
                      onMouseOut={this.change_icon2.bind(
                        this,
                        "iconner15",
                        "iconner16"
                      )}
                    >
                      <span className="lohny-2">
                        <span
                          id="iconner15"
                          className="fa fa-chain programfa"
                          style={{ backgroundColor: "#f74040" }}
                        ></span>
                        <span
                          id="iconner16"
                          className="fa fa-arrow-right programfa hider"
                          style={{ backgroundColor: "#f74040", color: "#FFF" }}
                        ></span>
                        &nbsp;<span className="underline">Help & Support</span>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-wecome-content-6">
          <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
              <div className="welcome-grids row">
                <div className="col-lg-12 welcome-image">
                  <div
                    className=""
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      border: "#CCC 10px solid",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "#CCC",
                        border: "#CCC 1px solid",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                      }}
                    >
                      <h5
                        className="text-center"
                        style={{ fontSize: "30px", color: "#025683" }}
                      >
                        Helpful links & resources:
                      </h5>
                    </div>
                    <ul
                      className="w3-ul w3-card-4"
                      style={{ boxShadow: "none" }}
                    >
                      <li className="w3-display-container collapsible">
                        <span>
                          <span className="fa fa-chevron-right programfa2"></span>
                        </span>
                        &nbsp;&nbsp;&nbsp;Questions? Ask VU
                        <span
                          onClick="this.parentElement.style.display='none'"
                          className="w3-button w3-transparent w3-display-right"
                        ></span>
                      </li>
                      <div
                        className="contenter"
                        style={{ backgroundColor: "#FFF" }}
                      >
                        <br />
                        <div className="col-lg-12 welcome-image">
                          <div
                            className=""
                            style={{ width: "100%", backgroundColor: "#fff" }}
                          >
                            <p className="my-4">
                              Find answers about fees, admissions, courses,
                              programs, transcripts, exams, and more.
                            </p>
                            <p>
                              <Link
                                className="logo-2"
                                to="/contact"
                                style={{ color: "#0077b5" }}
                                onMouseOver={this.change_icon.bind(
                                  this,
                                  "iconner17",
                                  "iconner18"
                                )}
                                onMouseOut={this.change_icon2.bind(
                                  this,
                                  "iconner17",
                                  "iconner18"
                                )}
                              >
                                <span className="lohny-2">
                                  <span
                                    id="iconner17"
                                    className="fa fa-chain programfa"
                                    style={{ backgroundColor: "#f74040" }}
                                  ></span>
                                  <span
                                    id="iconner18"
                                    className="fa fa-arrow-right programfa hider"
                                    style={{
                                      backgroundColor: "#f74040",
                                      color: "#FFF",
                                    }}
                                  ></span>
                                  &nbsp;
                                  <span className="underline">
                                    Ask a Question
                                  </span>
                                </span>
                              </Link>
                            </p>
                          </div>
                        </div>
                        <br />
                      </div>
                      <li className="w3-display-container collapsible">
                        <span>
                          <span className="fa fa-chevron-right programfa2"></span>
                        </span>
                        &nbsp;&nbsp;&nbsp;Calendar
                        <span
                          onClick="this.parentElement.style.display='none'"
                          className="w3-button w3-transparent w3-display-right"
                        ></span>
                      </li>
                      <div
                        className="contenter"
                        style={{ backgroundColor: "#FFF" }}
                      >
                        <br />
                        <div className="col-lg-12 welcome-image">
                          <div
                            className=""
                            style={{ width: "100%", backgroundColor: "#fff" }}
                          >
                            <p className="my-4">
                              &emsp;<span className="fa fa-angle-right"></span>
                              &nbsp;&nbsp;Undergraduate calendar&nbsp;
                              <span className="fa fa-external-link"></span>
                            </p>
                            <p className="my-4">
                              &emsp;<span className="fa fa-angle-right"></span>
                              &nbsp;&nbsp;Graduate calendar&nbsp;
                              <span className="fa fa-external-link"></span>
                            </p>
                          </div>
                        </div>
                        <br />
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GetInfo />
        <Footer />
      </React.Fragment>
    );
  }
}

export default CurrentStudents;
