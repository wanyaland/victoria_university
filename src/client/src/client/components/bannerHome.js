import React, { Component } from "react";
import { Link } from "react-router-dom";

class BannerHome extends Component {
  toVclass = () => {
    window.location.href = "vclass";
  };
  render() {
    return (
      <React.Fragment>
        <section className="w3l-banner-slider-main w3l-inner-page-main">
          <div
            className="w3l-banner-slider-main breadcrumb-infhny"
            style={{ zIndex: "0" }}
          >
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
                      // minWidth: "80vw",
                      // justifySelf: "center",
                      // left: "0",
                    }}
                  >
                    <marquee
                      loop="2"
                      style={{
                        position: "absolute",
                        top: "-150px",
                        left: "12.5%",
                        fontSize: "50px",
                        width: "100%",
                        // transform: "tranlate(0, -50%)",
                        // margin: "auto",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "50px",
                          textShadow: "3px 3px red",
                        }}
                      >
                        VU Upcoming 6<sup>th</sup> Graduation Happening on 26
                        <sup>th</sup> August 2022 &nbsp;
                      </h2>
                    </marquee>
                    <h1
                      className="main-header"
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      EXPERIENCE
                    </h1>
                    <p className="sub-head text-center">
                      A WORK-INTEGRATED LEARNING APPROACH FOR AFRICA
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
