import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Dataceo from "./data/ceoplatform.json";
import Data from "./data/gallery.json";
import Datas from "./data/skillslab.json";
import DataMrVU from "./data/MrVU.json";
import DataLib from "./data/library.json";
import DataFBall from "./data/freshersball.json";
import Datav from "./data/galleryv.json";
import GalleryList from "./gallery-list";
import GalleryListLib from "./gallery-list-lib";
import GalleryListFBall from "./gallery-list-fball";
import GalleryListSkillsLab from "./gallery-list-skillslab";
import GalleryListCEO from "./galleri-list-ceoplatform";
import GalleryListMrVU from "./gallery-list-mrvu";
import GalleryListv from "./gallery-listv";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerylister: [],
      gallerylisterceo: [],
      gallerylisterMrVU: [],
      gallerylisters: [],
      gallerylisterv: [],
      gallerylisterLib: [],
      gallerylisterFBall: [],
    };
    this.view_photo = this.view_photo.bind(this);
    this.view_photos = this.view_photos.bind(this);
    this.view_photoLib = this.view_photoLib.bind(this);
    this.view_photoMrVU = this.view_photoMrVU.bind(this);
    this.view_photoceo = this.view_photoceo.bind(this);
    this.view_photoFBall = this.view_photoFBall.bind(this);
    this.close_bio = this.close_bio.bind(this);
    this.close_bioceo = this.close_bioceo.bind(this);
    this.close_bioMrVU = this.close_bioMrVU.bind(this);
    this.close_bioLib = this.close_bioLib.bind(this);
    this.close_bios = this.close_bios.bind(this);
    this.close_bioFBall = this.close_bioFBall.bind(this);
    // this.view_photov = this.view_photov.bind(this);
    // this.close_biov = this.close_biov.bind(this);
  }
  componentDidMount() {
    this.getGallery();
    this.getGalleryLib();
    this.getSkillsLab();
    this.getGalleryceo();
    this.getGalleryMrVU();
    this.getGalleryFBall();
    this.getGalleryv();
  }
  getGallery = () => {
    this.setState({
      gallerylister: Data,
    });
  };

  getGalleryceo = () => {
    this.setState({
      gallerylisterceo: Dataceo,
    });
  };

  getGalleryFBall = () => {
    this.setState({
      gallerylisterFBall: DataFBall,
    });
  };

  getGalleryLib = () => {
    this.setState({
      gallerylisterLib: DataLib,
    });
  };

  getGalleryMrVU = () => {
    this.setState({
      gallerylisterMrVU: DataMrVU,
    });
  };

  getSkillsLab = () => {
    this.setState({
      gallerylisters: Datas,
    });
  };

  getGalleryv = () => {
    this.setState({
      gallerylisterv: Datav,
    });
  };
  view_photo(id) {
    console.log(id, "ID");
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  view_photoceo(id) {
    console.log(id, "ID");
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  view_photoLib(id) {
    console.log(id, "ID");
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  view_photoFBall(id) {
    console.log(id, "ID");
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  view_photoMrVU(id) {
    console.log(id, "ID");
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  view_photos(id) {
    console.log(id, "ID");
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  close_bio(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
  close_bioceo(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
  close_bioFBall(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
  close_bioLib(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
  close_bioMrVU(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
  close_bios(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
  }
  view_photov(id) {
    console.log(id, "ID");
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }
  close_biov(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
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
                  <span style={{ color: "#EEE" }}>/ Gallery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3-gallery">
          <div className="porfolio-inf py-5">
            <div
              className="container pt-lg-5 pb-lg-4"
              style={{ maxWidth: "90%" }}
            >
              <div className="row title-content">
                <div className="col-lg-4 title-left">
                  <h6
                    className="hny-title"
                    style={{
                      fontSize: "46px",
                      color: "#f74040",
                      fontWeight: "600",
                    }}
                  >
                    Gallery
                  </h6>
                </div>
              </div>
              <div id="library" style={{ paddingTop: "" }}></div>
              <br />
              <br />
              <br />
              <br />
              <h1>Library</h1>
              <div className="row">
                <GalleryListLib
                  gallerylisterLib={this.state.gallerylisterLib}
                  view_photoLib={this.view_photoLib}
                  close_bioLib={this.close_bioLib}
                />
              </div>
              <div id="international-day" style={{ paddingTop: "100px" }}></div>
              <br />
              <br />
              <br />
              <br />
              <h1>International Day</h1>
              <hr />
              <div className="row">
                <GalleryList
                  gallerylister={this.state.gallerylister}
                  view_photo={this.view_photo}
                  close_bio={this.close_bio}
                />

                {/* <GalleryListv
                  gallerylisterv={this.state.gallerylisterv}
                  view_photov={this.view_photov}
                  close_biov={this.close_biov}
                /> */}
              </div>
              <div id="skills-lab" style={{ paddingTop: "100px" }}></div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>Skills Lab</h1>
              <hr />
              <div className="row">
                <GalleryListSkillsLab
                  gallerylisters={this.state.gallerylisters}
                  view_photos={this.view_photos}
                  close_bios={this.close_bios}
                />
              </div>
              <div id="ceo-platform" style={{ paddingTop: "100px" }}></div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>CEO Platiform</h1>
              <hr />
              <div className="row">
                <GalleryListCEO
                  gallerylisterceo={this.state.gallerylisterceo}
                  view_photoceo={this.view_photoceo}
                  close_bioceo={this.close_bioceo}
                />
              </div>
              <div id="mr-vu" style={{ paddingTop: "100px" }}></div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>Mr. and Ms. VU</h1>
              <hr />
              <div className="row">
                <GalleryListMrVU
                  gallerylisterMrVU={this.state.gallerylisterMrVU}
                  view_photoMrVU={this.view_photoMrVU}
                  close_bioMrVU={this.close_bioMrVU}
                />
              </div>
              <div id="freshers-ball" style={{ paddingTop: "100px" }}></div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>Freshers Ball</h1>
              <hr />
              <div className="row">
                <GalleryListFBall
                  gallerylisterFBall={this.state.gallerylisterFBall}
                  view_photoFBall={this.view_photoFBall}
                  close_bioFBall={this.close_bioFBall}
                />
              </div>

              <br />
              <br />
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Gallery;
