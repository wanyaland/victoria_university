import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/breadNav-custom-css.css";

class BannerHome extends Component {
  toVclass = () => {
    window.location.href = "vclass";
  };
  render() {
    var aa = setInterval(() => {
      const grad_img = document.getElementById("grad-img");
      grad_img.classList.add("large");
    }, 5000);

    setTimeout(aa, 1000);

    var bb = setInterval(() => {
      const grad_img = document.getElementById("grad-img");
      grad_img.classList.remove("large");
    }, 5100);
    setTimeout(bb, 1000);

    return (
      <React.Fragment>
        <section className="w3l-banner-slider-main w3l-inner-page-main">
          <div
            className="w3l-banner-slider-main breadcrumb-infhny"
            style={{ zIndex: "0" }}
          >
            <div className="cube">
              {/* <div> */}
              <div className="back slider">
                <h1>Anatoli</h1>
              </div>
              <div className="left slider">
                <img src="assets/images/graduation.jpg" />
              </div>
              <div className="right slider">
                <h1>Your future begins with us</h1>
              </div>
              <div className="top slider">
                <h1>
                  You can graduate with 1000<sup>+</sup>hours of experience on
                  your CV
                </h1>
              </div>
              <div className="bottom slider">
                <h1>Step into a world of experience</h1>
              </div>
              <div className="front slider">
                <h1>Education that is driven by experience</h1>
              </div>
              {/* </div> */}
            </div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {/* <div className="carousel-item active">
						<div className="container">
						</div>
					</div>
					<div className="carousel-item item2">
						<div className="container">
						</div>
					</div>
					<div className="carousel-item item3">
						<div className="container">
						</div>
					</div>
					<div className="carousel-item item4">
						<div className="container">
						</div>
					</div>
					<div className="carousel-item item4 active" style={{backgroundColor: '#FFF'}}>
						<div className="container">
						
						</div>
					</div> */}
                {/* <img
                  src="assets/images/graduation.jpg"
                  className="img-fluid"
                  alt="PROMO"
                  // style={{}}
                  id="grad-img"
                /> */}
                <div>
                  <video
                    src="assets/media/home_wel_no_txt.mp4"
                    className="img-fluid"
                    alt=""
                    autoPlay="true"
                    muted="true"
                    style={{ width: "100%" }}
                    loop="true"
                  ></video>
                  <div
                    className="carousel-caption"
                    style={{
                      border: "transparent 1px solid",
                    }}
                  >
                    <marquee
                      loop="2"
                      style={{
                        position: "absolute",
                        top: "-150px",
                        left: "5.5%",
                        fontSize: "50px",
                        width: "100%",
                        // transform: "tranlate(0, -50%)",
                        // margin: "auto",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "40px",
                        }}
                      >
                        VU Upcoming 6<sup>th</sup> Graduation Happening on 3
                        <sup>rd</sup> September 2022 &nbsp;
                      </h2>
                    </marquee>

                    <h1
                      className="main-header"
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      EXPERIENCE
                    </h1>
                    <p
                      className="sub-head text-center"
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      EDUCATION FOR DIFFERENCE MAKERS
                    </p>
                    <p
                      className="sub-link"
                      style={{ textTransform: "lowercase" }}
                    >
                      www.vclass.ac
                    </p>
                    <div className="v-btn-link">
                      {/* <div className="eff-4"></div> */}
                      {/* <a href="https://vclass.ac/login" target="_blank" rel="noreferrer" className="btn_linked" >Take a Tour of VClass</a> */}
                      <Link to="/vclass" className="btn_linked">
                        Take a Tour of VClass
                      </Link>
                    </div>
                  </div>
                  {/* <p className="text-center" style={{position: 'absolute', zIndex: '1', top: '90%', left: '45%'}}><button className="btn_link" onClick={this.toVclass}>Take a Tour of Vclass</button></p> */}
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BannerHome;
