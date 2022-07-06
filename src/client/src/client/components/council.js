import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

class Council extends Component {
  view_bio(id) {
    var modal = document.getElementById(id);
    modal.style.display = "block";
  }

  close_bio(id) {
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
                <div className="" style={{ color: "#EEE" }}>
                  <Link to="/">
                    <span className="underline" style={{ color: "#EEE" }}>
                      Victoria University
                    </span>
                  </Link>
                  &nbsp;/&nbsp;
                  <Link to="/about">
                    <span className="underline" style={{ color: "#EEE" }}>
                      About
                    </span>
                  </Link>
                  &nbsp;
                  <span style={{ color: "#EEE" }}>/ Our Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="w3l-footer-16 text-center">
          <div className="container">
            <h3
              className="hny-title text-left"
              style={{ color: "#f74040", fontSize: "48px", fontWeight: "600" }}
            >
              University Council
            </h3>
          </div>
        </section>
        <section class="w3l-team-main">
          <div class="team py-5">
            <div class="container py-lg-5">
              <div class="row team-row">
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 4")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/joram-francis-kahenano.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Joram Francis Kahenano</a>
                      </h3>
                      <p>Chairman</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 4")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 4" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 4")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Joram Francis Kahenano is a distinguished banker,
                          with a banking career that has spanned over 36 years
                          of professional experience. He has served on many
                          boards of national institutions. He is currently the
                          Diocesan Secretary, Kampala Diocese, Church of Uganda.
                          <br />
                          <b>
                            Educational Qualifications: B. Com. (Hons),
                            Postgrad. Diploma, Economic Planning.
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 1")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/joseph-biribonwa.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Joseph N. Biribonwa</a>
                      </h3>
                      <p>Vice Chairperson University Council</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 1")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 1" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 1")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Joseph N. Biribonwa is a seasoned expert in
                          democracy & governance, management & administration,
                          finance and corporate governance, with over forty (40)
                          years of professional experience.
                          <br />
                          <b>Current Designation: Deputy Chairperson</b>
                          <br />
                          <b>Educational Qualifications: B.Com. (Hons.)</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 2")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/james-kalebbo.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Kalebbo James</a>
                      </h3>
                      <p>Council Member</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 2")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 2" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 2")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Kalebbo James has profiled himself as a top
                          executive manager, management practitioner, trainer
                          and consultant with over forty years of professional
                          experience. He headed the Uganda Management Institute
                          for over 12 years, spearheading its transformation
                          from the then Institute of Public Administration to
                          Uganda Management Institute.
                          <br />
                          <b>Educational Qualifications: B.A., M. Soc. Sc.</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 3")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/mary.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Mary Kanyiginya Tizikara</a>
                      </h3>
                      <p>Council Member</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 3")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 3" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 3")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Dr. Mary Kanyiginya Tizikara is an expert in Human
                          Resource Management & Development, Policy and Practice
                          with special emphasis on employee job satisfaction;
                          higher education management. A Ph.D holder of Makerere
                          University awarded in Jan, 2018 and a Chartered human
                          resource analyst awarded in April 2017 by the American
                          Academy of Project Management. <br />
                          <br />A champion of best practice in talent and SHRM,
                          employment laws, diversity management and equal
                          employment opportunities to ensure attraction,
                          retention and succession, with more than 20 years of
                          administrative and human resource management
                          experience, eleven of them at a senior managerial
                          level in Higher Education, University experience in
                          all HR functions. She is also an experienced team
                          leader, trainer of trainers and adviser on HR policy,
                          and practice on global HR trends including HR metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row team-row">
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 5")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/sameer.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Sameer Thakkar</a>
                      </h3>
                      <p>Council Member</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 5")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 5" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 5")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Sameer Thakkar is widely experienced in
                          international Reporting Standards and was involved
                          with ICPAU in the Technical Committee which is
                          mandated to promote and maintain compliance with
                          professional standards, legal and other regulatory
                          requirements, and also a member of the Education
                          Sub-Committee (ICPAU) that deals with matters related
                          to the education and training of the Institute’s
                          students. He is also responsible for providing the
                          continuous professional development of members and
                          also coordinates research. One of his achievements was
                          his contribution in the formation of a joint degree
                          programme for Uganda Martyrs University incorporating
                          CPA and Accounting and Finance of the University. He
                          holds FFCA (UK) and CPA (U).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 6")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/trustees/rajiv.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Rajiv Ruparelia</a>
                      </h3>
                      <p>Council Member</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 6")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 6" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 6")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Rajiv Ruparelia is a representative of the Board
                          of Directors of VU LTD which owns Victoria University.
                          He is a graduate of Regents College London holds a
                          degree in Financial Management. He is passionate about
                          the growth and development of Victoria University.{" "}
                          <br />
                          <br /> With top – class education, he has the
                          knowledge and training to steer the University through
                          the 21st Century. He has strong analytical and
                          technical skills in business management combined with
                          the ability to use initiative as well as applying
                          professional judgment to aid decision making.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 7")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/ssemambo.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Ssemambo Rashid</a>
                      </h3>
                      <p>Council Member</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 7")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 7" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 7")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Ssemambo Rashid is an Advocate of all courts of
                          Judicature in Uganda with thirteen years of
                          progressive hands-on work experience in private legal
                          practice, financial management, international
                          transactions, logistical management, administration,
                          proposal and grant writing, team building, people
                          management, report writing, data analyzing and
                          compiling. He is currently the managing partner in
                          Ssemambo & Ssemambo Advocates. He owns a number of
                          businesses among which include Chrome Beverages
                          Limited. He holds Bachelors of Law from Makerere
                          University and Postgraduate Diploma in Legal Practice.
                          He is currently pursuing his Master of Laws at
                          Makerere University.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 8")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/kabonesa.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Kabonesa Consolata</a>
                      </h3>
                      <p>Council Member</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 8")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 8" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 8")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Dr. Kabonesa Consolata holds over 25 years of
                          specialized experience in leadership, women and gender
                          programming, teaching human and community development,
                          gender training and conducting gender responsive
                          research. She holds the following qualifications: BA
                          (Hons) in Liberal Arts; MA Modern English and American
                          Literature; Higher. Dip. Education; M.S Human
                          Resources and Family Studies; Ph. D Human and
                          Community Development and; Certificate in IT
                          Essentials.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row team-row">
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 9")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/Mr. Andrew Mwenda.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Andrew M. Mwenda</a>
                      </h3>
                      <p>Council Member</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 9")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 9" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 9")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Andrew M. Mwenda is an African journalist and
                          entrepreneur. Currently he is the Managing Director of
                          Independent Publications Limited, the publishers of
                          The Independent, East Africa’s leading current affairs
                          news magazine. He has also invested in schools, is
                          involved in microfinance, mobile money and strategic
                          communications. On top of sitting on the boards of
                          some multi-national corporations in Africa, Mwenda
                          also sits on the Presidential Advisory Committee of
                          President Paul Kagame of Rwanda Nominated by Foreign
                          Policy among the Top 100 Global Thinkers in 2010,
                          Mwenda was also nominated by the World Economic Forum
                          as a Young Global Leader in 2008 and by the Africa
                          Study Institute as an Archbishop Tutu fellow, a
                          program for “Africa’s future leaders” (2009). He has
                          also won the International Press Freedom Award (2008)
                          by the Committee to Protect Journalists “in tribute to
                          his commitment to a free press in Uganda and the whole
                          world” and the Outstanding Alumni Award from the
                          British Council (2006).
                          <br />
                          <br />
                          A winner of the British Chevening Scholarship, Mwenda
                          holds a Master of Science degree in Development
                          Studies from the University of London’s School of
                          Oriental and African Studies and a Bachelor’s degree
                          in journalism from Makerere University in Uganda. He
                          was a visiting fellow at Yale University (2010), a
                          fellow at the University of Oxford’s Said School of
                          Business (2009), a John Knight Fellow at Stanford
                          University (2006-07), a visiting lecturer at the
                          University of Florida at Gainesville (2005) and a
                          visiting fellow at the University of Leiden’s Africa
                          Study Centre (2003). <br />
                          <br />
                          Mwenda is one of the most recognised African voices in
                          the global debate on the failures of foreign aid to
                          Africa and the need for investment and trade as
                          drivers of growth. A TED speaker, he is a regular
                          speaker at conferences across the world. Mwenda worked
                          as Political Editor of Daily Monitor and General
                          Manager of its affiliate FM radio, KFM before
                          establishing The Independent in 2007. He has worked as
                          a consultant for the World Bank, the World Resources
                          Institute and Transparency International. He has also
                          written for international news media like Des Spiegel
                          and the International Herald Tribune, New York Times
                          and Foreign Policy; produced documentaries for BBC
                          World television and radio.
                          <br />
                          <br />
                          Mwenda has also authored and co-authored articles for
                          international academic journals like Africa Affairs,
                          Journal of Modern African Studies, Review of African
                          Political Economy, Journal of Commonwealth Studies,
                          Journal for Contemporary African Studies and the
                          Journal of Democracy on top of publishing chapters in
                          several books among others.
                          <br />
                          <br />
                          Mwenda was born in Fort Portal, Western Uganda on
                          October 3rd, 1972. He grew up in a family with an
                          intense intellectual curiosity where dinner was always
                          spiced with discussions of philosophy and politics –
                          from Plato and Aristotle to Adam Smith and Karl Marx.
                          “Read,” Mwenda remembers his late father always
                          telling him, “read, especially history.” He has a
                          passion for ancient Greek and Roman history, poetry,
                          philosophy and art. He is also a Pan Africanist.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 11")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/MR WALIRAKI J. BOSCO.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Waliraki J. Bosco</a>
                      </h3>
                      <p>Staff Representative</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 11")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 11" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 11")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mr. Waliraki J. Bosco has served as a programme
                          coordinator, Finance and Accounting for over 7 years
                          at CUU. He has lectured in finance and accounting for
                          eight (8), he is currently the head of department,
                          Banking and Finance of Faculty of Business and
                          Management, Victoria University.
                          <br />
                          <b>
                            Qualifications: Master of Business
                            Administration(Finance) Muk, BSc Degree (Economics
                            and Statistics)(Hons Muk) and has ACCA and CPA(U)
                            professional accounting qualifications
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 19")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/guild.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">H.E Michelle Kirabo</a>
                      </h3>
                      <p>Guild President</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 19")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 19" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 19")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Michelle Kirabo is the 2022-2023 Guild President of
                          Victoria University.
                          {/* <br/>
									<b>Qualifications: Diploma in Human Resource Management, Victoria University.</b> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 10")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/M.G KATUSABE SSEMWEZI.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">
                          Mary Goretti Katusabe – Ssemwezi (Mrs.)
                        </a>
                      </h3>
                      <p>EX-Officio/Secretary To Council</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 10")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 10" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 10")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Mrs M.G Katusabe - Ssemwezi is the Victoria University
                          Secretary and secretary to Council. She is a seasons
                          professional in University governance and management
                          stretching over 30 years. She has served in various
                          positions in higher education and was the pioneer
                          University Secretary of Kyambogo University and also
                          served in same position at Nkumba University. She is
                          passionate about higher education governance and
                          management.
                          <br />
                          <b>
                            Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak),
                            PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row team-row">
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 12")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/vc.JPG"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Prof. Lawrence Muganga</a>
                      </h3>
                      <p>Vice Chancellor</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 12")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 12" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 12")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          I am a Ugandan-born Canadian researcher, academic
                          administrator and an award winning author of several
                          books that have been ranked by Amazon as best sellers
                          around the world. Currently I am honored to serve as
                          Vice Chancellor of Victoria University Uganda. I am
                          the author of both “You Can&#39;t Make Fish Climb
                          Trees” and “Transform”. I also happen to be the first
                          Education Scholar to research and introduce Authentic
                          Learning Education in Uganda, with emphasis on
                          Real-World Learning for all levels of education.{" "}
                          <br />
                          <br />
                          I am an ardent advocate for the implementation of a
                          real-world Education Model that emphasizes both
                          Experiential Learning (EXL) &amp; Work-Integrated
                          Learning (WIL) programs to ensure that students
                          maximize their learning and gain meaningful education.
                          My transformational education research that embraces
                          and embeds both technology and learning in the
                          real-world has prepared me to deploy my unconscious
                          mind that looks at education very differently with the
                          intention of making learning relevant to every learner
                          and making education work for everyone. I have been
                          blessed to visit 47 countries for purposes of research
                          and education advisory role. I have been privileged to
                          advise education institutions in several countries
                          including Sweden, Finland, Canada, USA, Ethiopia,
                          Argentina, Singapore, Uganda, Solomon Islands and the
                          list goes on.
                          <br />
                          <br />
                          In terms of Education background, I have had the
                          opportunity to pursue my studies at several
                          universities around the world including Makerere
                          University, where I obtained both a Bachelors and
                          Master’s Degree in Economics, then University of
                          Alberta in Canada where I successfully attained both a
                          Master’s in Education and PHD in Educational
                          Administration and Leadership. Because we live in a
                          world where lifelong learning has become part of us; I
                          further ended up at Harvard University to pursue my
                          Post- Doctoral studies focusing on Higher Education
                          Teaching. I have also been awarded the title of
                          Honorary Professorship of the Academic Union by the
                          Academic Union of Oxford, UK for my continued
                          contribution towards developing the University of the
                          Future driven by Digital Transformation.
                          <br />
                          <br />
                          Some of my work as an educationist has focused on
                          transforming education to make it fit in the times we
                          live in now and those we anticipate in the future, in
                          fact, one of my education books focusing on authentic
                          learning attracted several awards and grants including
                          a $1,300,000 grant from the Bill &amp; Melinda Gates
                          Foundation. This remarkable book &quot;YOU CAN&#39;T
                          MAKE FISH CLIMB TREES - OVERCOMING EDUCATIONAL
                          MALPRACTICE THROUGH AUTHENTIC LEARNING&quot;, has been
                          praised, endorsed and promoted by Uganda&#39;s First
                          Lady and Minister of Education and Sports (MOES), Hon.
                          Janet Kataha Museveni. The book has triggered the
                          infusion of Authentic Learning into Uganda&#39;s
                          Curriculum for the first time in the history of
                          Uganda&#39;s education system and this initiative no
                          doubt puts the country&#39;s education on course to
                          greatness.
                          <br />
                          <br />
                          <h6 style={{ fontSize: "22px", color: "#0077b5" }}>
                            <a
                              href="assets/docs/Dr. Lawrence Muganga.pdf"
                              className="underline"
                              download={"assets/docs/Dr. Lawrence Muganga.pdf"}
                              style={{ color: "#0077b5" }}
                            >
                              Download Full Profile{" "}
                              <span className="fa fa-file-pdf-o"></span>
                            </a>{" "}
                            |{" "}
                            <a
                              href="admissions#vid"
                              style={{ color: "#0077b5" }}
                              className="underline"
                            >
                              View video{" "}
                              <span className="fa fa-video-camera"></span>
                            </a>
                          </h6>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Council;
