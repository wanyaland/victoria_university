import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import GetInfo from "./get_info";
import Footer from "./footer";
import CalculatorFees from "./calculator-modal";
import { Link } from "react-router-dom";

class Tuition extends Component {
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
  popPay() {
    var modal = document.getElementById("pay-myModal");
    modal.style.display = "block";
  }
  popCal() {
    var modal = document.getElementById("cal-myModal");
    modal.style.display = "block";
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
                      src="assets/images/admissions.jpg"
                      alt="First slide"
                      style={{ filter: "brightness(60%)" }}
                    />
                  </div>
                  <div className="banner-caption">&nbsp;Tuition And Fees</div>
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
                <div className="" style={{ color: "#EEE" }}>
                  <Link to="/">
                    <span className="underline" style={{ color: "#EEE" }}>
                      Victoria University
                    </span>
                  </Link>
                  &nbsp;/&nbsp;
                  <Link to="/admissions">
                    <span className="underline" style={{ color: "#EEE" }}>
                      Admissions
                    </span>
                  </Link>
                  &nbsp;/&nbsp;
                  <span style={{ color: "#CCC" }}> Tuition and Fees</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="w3l-features-1">
          <div className="features-1-mian py-5">
            <div className="container">
              <h3 className="hny-title text-left" style={{ color: "#f74040" }}>
                Tuition and Fees
              </h3>
            </div>
            <div className="container py-lg-5">
              <div className="row grids-innf my-lg-5">
                {/* <div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-vcard" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Online tuition and fee assesment</a></h6>
					</div>
				</div> */}
                <div
                  className="features-1-info col-lg-4 col-md-6 fa-hover"
                  onClick={this.popPay}
                >
                  <div className="features-1-info-icon text-center">
                    <span
                      className="fa fa-credit-card"
                      style={{ color: "#0077b5", fontSize: "47px" }}
                    ></span>
                  </div>
                  <div className="features-1-info-info text-center">
                    <h6 className="text-center">
                      <a href="#home">Fee payment</a>
                    </h6>
                  </div>
                </div>
                <div
                  className="features-1-info col-lg-4 col-md-6 fa-hover"
                  onClick={this.popCal}
                >
                  <div className="features-1-info-icon text-center">
                    <span
                      className="fa fa-calculator"
                      style={{ color: "#0077b5", fontSize: "47px" }}
                    ></span>
                  </div>
                  <div className="features-1-info-info text-center">
                    <h6 className="text-center">
                      <a href="#home">Calculate undergraduate course fees</a>
                    </h6>
                  </div>
                </div>
                <div
                  className="features-1-info col-lg-4 col-md-6 fa-hover"
                  onClick={this.popCal}
                >
                  <div className="features-1-info-icon text-center">
                    <span
                      className="fa fa-calculator"
                      style={{ color: "#0077b5", fontSize: "47px" }}
                    ></span>
                  </div>
                  <div className="features-1-info-info text-center">
                    <h6 className="text-center">
                      <a href="#home">Calculate postgraduate course fees</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    style={{ fontSize: "32px", color: "#0077b5" }}
                  >
                    Your tuition, your career investment
                  </h6>
                  <br />
                  <p className="mb-4" style={{}}>
                    At Victoria University we want to allow you to study at your
                    own pace. To reflect that, all our courses are
                    pay-as-you-go. You pay for each course only when you
                    register for it, and our course fees include all textbooks,
                    class materials, and access to a tutor or success centre.
                    All course fees must be paid in full when you register.
                  </p>
                  <p className="mb-4" style={{}}>
                    The first time you take an VU course or apply to an VU
                    program, you’ll also pay a one-time, non-refundable
                    application fee. You won’t have to pay this fee again, no
                    matter how many courses you take, or how long you wait
                    between courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-wecome-content-6" id="trackdoc">
          <div className="ab-content-6-mian py-5">
            <div
              className="container py-lg-5"
              style={{ paddingBottom: "0rem !important" }}
            >
              <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                  <h6
                    className="hny-title"
                    style={{ fontSize: "32px", color: "#0077b5" }}
                  >
                    Online tuition and fee assessment
                  </h6>
                  <br />
                  <p className="mb-4" style={{}}>
                    Understanding how your fees and tuition are calculated is
                    important to make sure you stay within your budget and make
                    informed decisions when choosing, adding or dropping
                    courses. VU academic fees are calculated differently for
                    undergraduate and graduate students and will also vary
                    depending on where you live while studying, course choice
                    and other individual circumstances.
                  </p>
                  <p className="mb-4" style={{}}>
                    Make sure to understand the details of all tuition and fees
                    that apply to your choice of program - if in doubt, please
                    feel free to contact Victoria University’s administrators
                    for clarification.
                  </p>
                  <p>
                    <a
                      className="logo-2"
                      href="/assets/docs/Tution and Fees Documentation.pdf"
                      download="assets/docs/Tution and Fees Documentation.pdf"
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
                        View our tuition and fees documentation{" "}
                        <span className="fa fa-file-pdf-o"></span>
                      </span>
                    </a>
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
                    <ul
                      className="w3-ul w3-card-4"
                      style={{ boxShadow: "none" }}
                    >
                      <li className="w3-display-container collapsible">
                        <span>
                          <span className="fa fa-chevron-right programfa2"></span>
                        </span>
                        &nbsp;&nbsp;&nbsp;Undergraduate tuition and fees
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
                            <p className="my-4">Undergraduate studentsa</p>
                            <p className="my-4">
                              <span className="fa fa-clock-o"></span> Apply
                              anytime – no deadline!
                            </p>
                            <p className="my-4">
                              You can apply to VU anytime without a deadline.
                              All undergraduate programs enrol students year
                              round. Just keep in mind that after your program
                              application gets approved you will still need to
                              register for courses to get started.
                            </p>
                            <p>
                              <Link
                                className="logo-2"
                                to="/apply"
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
                                    style={{
                                      backgroundColor: "#f74040",
                                      color: "#FFF",
                                    }}
                                  ></span>
                                  &nbsp;
                                </span>
                                <span className="underline">
                                  Learn more about undergraduate applications
                                </span>
                              </Link>
                            </p>
                            <p>
                              <a
                                className="logo-2"
                                href="/assets/docs/Tution and Fees Documentation.pdf"
                                download="assets/docs/Tution and Fees Documentation.pdf"
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
                                    style={{
                                      backgroundColor: "#f74040",
                                      color: "#FFF",
                                    }}
                                  ></span>
                                  &nbsp;
                                </span>
                                <span
                                  className="hny-title underline"
                                  style={{ fontSize: "28px", color: "#0077b5" }}
                                >
                                  View our tuition and fees documentation{" "}
                                  <span className="fa fa-file-pdf-o"></span>
                                </span>
                              </a>
                            </p>
                          </div>
                        </div>
                        <br />
                      </div>
                      <li className="w3-display-container collapsible">
                        <span>
                          <span className="fa fa-chevron-right programfa2"></span>
                        </span>
                        &nbsp;&nbsp;&nbsp;Graduate tuition and fees
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
                              Undergraduate course registration
                            </p>
                            <table style={{ width: "100%", height: "100%" }}>
                              <tr>
                                <td
                                  style={{
                                    width: "5%",
                                    textAlign: "center",
                                    backgroundColor: "#003d5e",
                                  }}
                                >
                                  <span
                                    className="fa fa-info-circle"
                                    style={{ fontSize: "20px", color: "#fff" }}
                                  ></span>
                                </td>
                                <td
                                  className="text-left"
                                  style={{
                                    backgroundColor: "#0077b5",
                                    textAlign: "center",
                                    color: "#FFF",
                                    padding: "20px",
                                  }}
                                >
                                  Next Deadline: Register by February 10th to
                                  start on March 1st
                                </td>
                              </tr>
                            </table>
                            <p className="my-4">
                              Courses start on the first of each month. However,
                              you must register and pay by the 10th of the
                              previous month to begin on the first.
                            </p>
                            <p>
                              <Link
                                className="logo-2"
                                to="/apply"
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
                                    style={{
                                      backgroundColor: "#f74040",
                                      color: "#FFF",
                                      fontSize: "26px",
                                    }}
                                  ></span>
                                  &nbsp;
                                </span>
                                <span className="underline">
                                  Learn how to register for courses
                                </span>
                              </Link>
                            </p>
                            <p>
                              <a
                                className="logo-2"
                                href="/assets/docs/Tution and Fees Documentation.pdf"
                                download="assets/docs/Tution and Fees Documentation.pdf"
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
                                    style={{
                                      backgroundColor: "#f74040",
                                      color: "#FFF",
                                    }}
                                  ></span>
                                  &nbsp;
                                </span>
                                <span
                                  className="hny-title underline"
                                  style={{ fontSize: "28px", color: "#0077b5" }}
                                >
                                  View our tuition and fees documentation{" "}
                                  <span className="fa fa-file-pdf-o"></span>
                                </span>
                              </a>
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
                    style={{ fontSize: "32px", color: "#0077b5" }}
                  >
                    Tuition and Fees payment
                  </h6>
                  <p className="my-4">
                    {" "}
                    All students become liable to pay their full tuition fees
                    from first day of term on their programme. Mode of payment.
                    All the fees have to be deposited in the Accounts of
                    Victoria University .Fees can be deposited in the following
                    modes: <br />
                    <br />
                  </p>
                  <img
                    src="assets/images/pay_banner.jpg"
                    className="img-fluid"
                    alt="Discover"
                  />
                  <br />
                  <br />
                  <h6
                    className="hny-title"
                    style={{ fontSize: "38px", color: "#0077b5" }}
                  >
                    Payment steps for our accepted modes of payment
                  </h6>
                  <br />
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
                        style={{ fontSize: "28px", color: "#0077b5" }}
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
                        style={{ fontSize: "28px", color: "#0077b5" }}
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
                        style={{ fontSize: "28px", color: "#0077b5" }}
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
                        style={{ fontSize: "28px", color: "#0077b5" }}
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

                  {/* <br />
                  <h6
                    className="hny-title"
                    style={{ fontSize: "28px", color: "#0077b5" }}
                  >
                    Wire Transfer Payment Option (For International students)
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
                        <span className="">
                          Account Name: Victoria University
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;
                        <span
                          className="fa fa-angle-right"
                          style={{ color: "#025683" }}
                        ></span>
                        &emsp;
                        <span className="">
                          UGX Account Number: 218143915151110
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;
                        <span
                          className="fa fa-angle-right"
                          style={{ color: "#025683" }}
                        ></span>
                        &emsp;
                        <span className="">
                          USD Account Number: 218143915251110
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;
                        <span
                          className="fa fa-angle-right"
                          style={{ color: "#025683" }}
                        ></span>
                        &emsp;
                        <span className="">
                          Bank Name: Guaranty Trust Bank (U) Ltd
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;
                        <span
                          className="fa fa-angle-right"
                          style={{ color: "#025683" }}
                        ></span>
                        &emsp;<span className="">Swift Code: GTBIUGKA</span>
                      </li>
                    </ul>
                  </p>
                  <h6
                    className="hny-title"
                    style={{ fontSize: "28px", color: "#0077b5" }}
                  >
                    USSD Steps for MTN users
                  </h6>
                  <p className="my-4">
                    <ul style={{ listStyle: "none" }}>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>1</span>&emsp;
                        <span className="">Dial *237*100#</span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>2</span>&emsp;
                        <span className="">
                          Select Tuition payment (Option 1)
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>3</span>&emsp;
                        <span className="">
                          Select Victoria University (Option 1)
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>4</span>&emsp;
                        <span className="">Enter Your Student Number </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>5</span>&emsp;
                        <span className="">Enter Your Tuition Amount </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>6</span>&emsp;
                        <span className="">Confirm Your Tuition Amount</span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>7</span>&emsp;
                        <span className="">
                          Press cancel. Then complete the prompted screen from
                          your MM or Dial *165 #for confirmation and PIN entry
                        </span>
                      </li>
                    </ul>
                  </p> */}
                  {/* <h6
                    className="hny-title"
                    style={{ fontSize: "28px", color: "#0077b5" }}
                  >
                    USSD Steps for Airtel users
                  </h6>
                  <p className="my-4">
                    <ul style={{ listStyle: "none" }}>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>1</span>&emsp;
                        <span className="">Dial *237*100#</span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>2</span>&emsp;
                        <span className="">
                          Select Tuition payment (Option 1)
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>3</span>&emsp;
                        <span className="">
                          Select Victoria University (Option 1)
                        </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>4</span>&emsp;
                        <span className="">Enter Your Student Number </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>5</span>&emsp;
                        <span className="">Enter Your Tuition Amount </span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>6</span>&emsp;
                        <span className="">Confirm Your Tuition Amount</span>
                      </li>
                      <li className="mb-4 t2">
                        &emsp;<span style={{ color: "#025683" }}>7</span>&emsp;
                        <span className="">
                          Enter your PIN To close Transaction
                        </span>
                      </li>
                    </ul>
                  </p> */}
                  <br />
                  <h6
                    className="hny-title"
                    style={{ fontSize: "28px", color: "#0077b5" }}
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
                      <br />
                      <h6
                        className="hny-title"
                        style={{ fontSize: "28px", color: "#0077b5" }}
                      >
                        Details Needed when Paying
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
                              Student name and Registration Number{" "}
                              <b>eg Atim Peace VU-BBA-2201-001</b>
                            </span>
                          </li>
                        </ul>
                      </p>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CalculatorFees />
        <GetInfo />
        <Footer popPay={this.popPay} />
      </React.Fragment>
    );
  }
}

export default Tuition;
