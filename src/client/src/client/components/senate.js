import React, { Component } from "react";
import BreadNavBar from "./breadNav";
import NavBar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

class Senate extends Component {
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
              University Senate
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
                      onClick={() => this.view_bio("myModal_bio 1")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/vc.jpeg"
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
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 2")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/Prof. Aug.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Prof. Augustine Osamor Ifelebuegu</a>
                      </h3>
                      <p>DVC</p>
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
                          <b>DVC</b>
                          <br />
                          <br />
                          NO BIO AT THE MOMENT
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
                          src="assets/images/img/Prof. Athur.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Prof. Athur Ahimbisibwe</a>
                      </h3>
                      <p>Accademic Registrar</p>
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
                          <b>AR</b>
                          <br />
                          <br />
                          Prof. Arthur Ahimbisibwe Rugo holds a PhD in Supply
                          Chain Management from Victoria University of
                          Wellington, New Zealand, Master of Science in
                          Procurement and Supply Chain Management with a
                          distinction from Makerere University, Kampala, Uganda,
                          and a First-Class Degree in Bachelor of Business
                          Administration specialising in Procurement and Supply
                          Chain Management also from Makerere University,
                          Kampala, Uganda. He also possess professional
                          qualifications such as being a certified member of
                          Chartered Institute of Purchasing and supply-MCIPS
                          (UK), a Fellow of Chartered Institute of Logistics and
                          Transport-FCILT (UK), a certified member of Project
                          Management Institute-PMI (UK) and a Certified
                          Procurement Professional, Institute of Procurement
                          Professionals of Uganda-(IPPU) among other
                          qualifications. He is Professor of Supply Chain
                          Management, a senior researcher, consultant and an
                          accomplished academician.
                          <br />
                          <br />
                          Prof. Ahimbisibwe has over fifteen (15) years of
                          working experience in universities, of which eight (8)
                          years he has been in senior managerial positions. He
                          has served in various managerial positions as a Head
                          of Department (HOD) and as Acting Dean both in
                          Makerere University, Dean of School of Postgraduate
                          Studies, Deputy Vice Chancellor Academics and served
                          as Acting Vice Chancellor of University of Kigali.
                          <br />
                          <br />
                          Prof. Ahimbisibwe has written and published more than
                          fifty (50) research articles which have been published
                          in international refereed journals in the top ranked
                          academic journals in the world. Some of the key top
                          most research journals in the world where his work has
                          been published include: Journal of Strategy and
                          Management, Journal of African Business, Journal of
                          Public Procurement, Journal of Enterprise Information
                          Management, Records Management Journal, European
                          Journal of Logistics, Purchasing and Supply Chain
                          Management, International Journal of Operations and
                          Logistics Management, International Journal of Supply
                          Chain Management, European Journal of Business and
                          Management, Journal of Supply Chain Management,
                          European Journal of Logistics, Purchasing and Supply
                          Chain Management, Journal of Management, Journal of
                          Public Procurement and Contract Management, among
                          others.
                          <br />
                          <br />
                          Prof. Ahimbisibwe has supervised over 400 postgraduate
                          students in the Postgraduate School to completion;
                          facilitated in over 110 training workshops and
                          conferences in both local and international
                          environments. He has also worked in collaborations
                          with vibrant, interdisciplinary and dynamic research
                          groups to present research in international
                          conferences, compete for funding and providing
                          guidance to undergraduate, masters and PhD students.
                          In 2011, He was awarded the best research paper of the
                          year in Technology, Innovation and Supply Chain
                          Management at the Australian and New Zealand Academy
                          of Management (ANZAM) Conference, 7-9 December,
                          Wellington, New Zealand. He has excellent written and
                          oral presentation skills, strong interpersonal skills,
                          organizational and communication skills. He speaks
                          very good fluent English and enjoys sharing knowledge
                          through teaching and research.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 4")}
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

                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 5")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr Nkeeto Bill Richard</a>
                      </h3>
                      <p>Dean Faculty of Business and management</p>
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
                          Bill Nkeeto is an economist and lecturer in the
                          Faculty of Business and Management at Victoria
                          University, Kampala - Uganda. He is also the Dean of
                          the Faculty Business and Management (FBM) performing a
                          supervisory role for the four departments of the
                          Faculty (Postgraduate, Research, and Grants - PRG,
                          Department of Management and Finance - DMF, Department
                          of Oil, Procurement, &amp; Real Estates - DOPE,
                          Department of Hospitality Management - DHM)). He is a
                          member of the Victoria University senate as well as
                          the university’s top management. Bill is a Ph.D. in
                          Economics Candidate, holds a Masters in Economic
                          Policy and Planning, and a BA- SS (Economics) all from
                          Makerere University. He has been involved in Ugandan
                          private University Management for the last 12 years,
                          having participated in the establishment, nurturing,
                          and growing of Cavendish University Uganda between
                          2008 and 2015.
                          <br />
                          <br />
                          Bill possesses a wealth of experience in University
                          quality assurance, where he has previously widely
                          consulted with various institutions, something which
                          gives him a holistic understanding of University
                          operations. He has been involved in the development
                          and review of various academic programmes especially
                          those aligned to the Ugandan context, given the SDGs.
                          He participated in drafting the Ministry of Health
                          Quality improvement learners and facilitator Manuals
                          which will eventually become quality improvement tools
                          for all health practitioners in the country. His
                          interest in Health economics has seen him get involved
                          in activities on the demand side of health resources,
                          maternal and newborn health areas, as well as health
                          policy- related issues.
                          <br />
                          <br />
                          Bill’s areas of interest in teaching include;
                          Economics, Marketing, Research Methodology, Strategic
                          Management, Project Management, International
                          Business, Management theory and Practice, operations
                          Management, quality and systems, and Business
                          Statistics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
                {/* <div class="row team-row"> */}
                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 6")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/kakeeto1.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. David Kakeeto</a>
                      </h3>
                      <p>Dean Faculty of Science and Technology</p>
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
                          Dr. David Kakeeto (Ph.D), an Educational Technology
                          (ICT-Educ), a senior lecturer at Victoria University.
                          He is currently academic and administrative Dean,
                          Faculty of Science and Technology (FST), Victoria
                          University, but formerly Head of Department Nkumba
                          University for two years, Head of Department
                          University of Kisubi for three years. A holder of B.A
                          SS (Economics), (Mak), Certificate in Certificate in
                          Computer Networking Technology, (Telecom Institute,
                          Malaysia), Master of ICT with Education, (Mak) and
                          Doctor of Philosophy Ph.D in Education with ICT (Mak).
                          <br></br>
                          Dr. Kakeeto has examined several research projects
                          from different universities in Uganda and both
                          graduate and undergraduate research projects both in
                          areas of ICT and Education. He has vast teaching
                          experience of over sixteen years in areas of:
                          Multimedia for Education, Information systems, Micro
                          Computer Applications, E-Business, Research methods,
                          Data processing and Management, Instructional design
                          and development.
                          <br></br>
                          He is a computing, statistical and operations research
                          consultant with various governmental and private
                          agencies. Dr. Kakeeto is an academic with research
                          interests in Educational Technology, Information
                          systems and E-Health. Has been involved in quite a
                          number of research projects with different
                          institutions, including Governmental parastatals. Dr.
                          Kakeeto has publications in line with ICT and
                          Learning. He has supervised 12 master’s degree
                          students to completion and over 20 undergraduate
                          research projects to graduation.<br></br>
                          Dr. Kakeeto has headed curriculum design and
                          development; reviewed several old curriculum as
                          mandated by the standards of National Council for
                          Higher Education for quite a number of years. Dr.
                          Kakeeto also works with National Council for Higher
                          Education in issues of monitoring and supervision of
                          tertiary institutions, especially in areas of
                          accreditations, a research consultant with Uganda
                          National Examinations Board (UNEB).<br></br>
                          Dr. Kakeeto lectures Database management systems,
                          Information Technology, Information systems, Micro
                          E-Business, Data processing and Management, systems
                          analysis and design, Big data analytics, research
                          methods, ICT, and statistical methods at both
                          postgraduate and undergraduate levels, E-Governance
                          and ICT for Development.
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
                          src="assets/images/img/nnwana-kevin.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Nnwana Kevin</a>
                      </h3>
                      <p>Dean of Health Sciences</p>
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
                          Dr. Nwanna Uchechukwu Kevin is a renowned Public
                          Health specialist, a citizen of Nigeria but resides in
                          Uganda for over 7 years. He had his Doctoral degree in
                          Public Health (specialization in Occupational Safety
                          and Health) from City University, Cambodia. He
                          obtained his Master of Science in Public Health from
                          the International Health Sciences University, Uganda.
                          He studied a Post-Graduate Diploma in Teaching and
                          Management at Higher Education from the Islamic
                          University in Uganda. In addition to his name, he is a
                          U.K certified IOSH specialist (Institute of
                          Occupational Safety and Health); he bagged his
                          Bachelor of Science Degree in Human Anatomy from the
                          University of Portharcourt, Nigeria. <br />
                          <br />
                          Dr. Nwanna is a Senior Lecturer in Victoria
                          University, Uganda and doubles as the Dean of Faculty
                          of Health Sciences in the same University. He has
                          served as Head of Department and Dean of Faculty in
                          two Universities in Uganda and has over 21
                          peer-reviewed research publications attributed to his
                          name together with over 10 short courses and
                          certificates in various academic and social
                          disciplines. <br />
                          <br /> He has consulted for various organizations such
                          as WHO, Uganda Ministry of Health and other
                          international agencies. In academia, he has taught and
                          supervised various undergraduate and postgraduate
                          students to completion since 2015 up till now.One of
                          his newest published research papers is on the impact
                          of Covid-19 on the Education industry in Africa. Dr.
                          Nwanna is a Fellow of the Medical Research Council
                          (FMRC) in the United Kingdom and a Fellow of the
                          African Institute of Public Health Professionals.
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
                          src="assets/images/img/rosemary.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Rosemary Nakijoba</a>
                      </h3>
                      <p>Dean of Humanities and Social Sciences</p>
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
                          Dr. Rosemary Nakijoba (PhD-UWC, MADS-UMU, BDS-NDU)
                          <br />
                          <br />
                          Dr. Rosemary is a Senior Lecturer and doubles as Dean
                          of the Faculty of Humanities and Social Sciences
                          (FHSS). She initially served as the Head of Department
                          in the same Faculty.
                          <br />
                          <br />
                          Dr. Rosemary’s professional purpose is to be a teacher
                          known for inspiring her students to be more than they
                          thought they could. She also aims at using her gifts
                          of intelligence and charisma to cultivate the
                          self-worth and net-worth of women and girls around
                          her.
                          <br />
                          <br />
                          Dr. Rosemary holds a PhD in Development studies from
                          the University of the Western Cape (UWC), in South
                          Africa www.uwc.ac.za; a Master’s Degree in Development
                          Studies from Uganda Martyr’s University (UMU), a
                          Bachelor’s Degree in Development Studies from Ndejje
                          University (NDU) and a Diploma in Education of
                          Kyambogo University (KYU). She also holds another
                          Diploma in Community Development Education of the
                          Institute for Social Transformation, South Africa. She
                          is a graduate of the Global Women’s Leadership Program
                          of Santa Clara University, California, US.A and
                          currently an Alumni Council Member (www.gwln.org).
                          <br />
                          <br />
                          She has over 8 years of experience in the academic
                          field and has supervised graduate and undergraduate
                          research work for students to completion. Dr. Rosemary
                          has published in peer reviewed journals and she is a
                          fellow of the National Institute for Humanities and
                          Social Sciences (NIHSS) in South Africa; a fellow for
                          the Social Sciences Research Council (SSRC), New York
                          and of the Irish Council for International Students
                          (ICOS). She has also engaged into National and
                          International Consulting with organization such as
                          Japan International Cooperation Agency (JICA), the
                          International Labour Organization (ILO) specifically
                          in the area of gender and disability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 9")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/winnie.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Ms Winnie Nassiwa</a>
                      </h3>
                      <p>Dean of Students</p>
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
                          <b>Dean of Students Office</b>
                          <br />
                          <br />
                          The Dean of Students office co-ordinates the
                          activities of students’ welfare in the University. The
                          activities include but are not limited to; creating
                          and maintaining safe, healthy and supportive study
                          environment; student accommodation; promoting a
                          university culture that synthesizes the intellectual,
                          physical, social, emotional and spiritual development
                          in a holistic way. Other sectors overseen by the
                          Dean’s office include the students’ Guild body,
                          counselling section, sports and recreation.
                          <br />
                          <br />
                          <b>Profile for Winfred Nassiwa (Mrs.)</b>
                          <br />
                          <br />
                          Mrs. Winfred Nassiwa is the Dean of students, a
                          primary student advocate and passionate administrator
                          with bias in fostering student support services both
                          academically and socially. She has over 6 years of
                          administrative experience in a university environment
                          through which she is able to efficiently support the
                          students achieve their study objectives at the
                          University. She has managed to administer
                          comprehensive support to student services including;
                          Registry, Student Welfare, University Polices
                          implementation, Admissions and Records Management.
                          <br />
                          <br />
                          Winfred has built judicious proficiency over the years
                          and has a great interest in the following; student
                          recruitment and admissions of new students, support in
                          student enrollment, settling in or transition of new
                          students especially international students. She has
                          potential and ability to support the on boarding of
                          students given the competency attained during her
                          administrative positions/roles in which she served as
                          an Admissions Officer, Senior Assistant Academic
                          Registrar (Admissions) and Ag. Academic Registrar in
                          the prestigious Institution, Victoria University. She
                          has managed to attain strength in supervisory and
                          management experience in higher education. In
                          reference to her ability to serve the community,
                          Winifred has corresponded, supported development and
                          implementation procedures for plans of orientation
                          programs for admitted students and induction of new
                          students, which enhanced her capacity to plan and host
                          for university functions/programs.
                          <br />
                          <br />
                          She has knowledge of organization and administration
                          of higher education and how to implement the
                          university policies and procedures visa vie student
                          services. As a result of her experience within the
                          University Management Systems, she has developed
                          leadership, negotiation, counselling, mentorship and
                          communication skills. Winfred is able to offer
                          guidance, answer questions and respond
                          extemporaneously to a variety of situations. She has
                          comprehension skills to understand and respond to
                          student related cases.
                          <br />
                          <br />
                          Winfred has over 16 years of experience in financial
                          management, including; planning and budgeting;
                          internal auditing; funds accountability and
                          monitoring. She has a rich experience in internal
                          forex exchange and offers financial advice. She
                          desires to always share and offer counsel to the
                          students to manage their current and future financial
                          status.
                          <br />
                          <br />
                          She has with time experienced the ability to oversee
                          the maintenance of vital student’s records, support
                          student financial tracking information, scholarship
                          program, preparation of reports required by the
                          institution for monitoring and evaluation. Winfred
                          holds a Master’s Degree in Business Administration
                          (MBA) from Herriot-Watt University, Edinburg Business
                          School in UK; Certificate in Database Administration
                          (OCA/OCP) from Oracle University in USA, a Bachelor’s
                          Degree in Arts (Social Sciences) from Makerere
                          University, Kampala Uganda.
                          <br />
                          <br />
                          Given her ambition to support and serve humanity,
                          Winfred has mastered the art of humble leadership and
                          administration as a service to the community, where
                          she seeks to mentor and equip the next generation to
                          be solution providers and an inspiration in this
                          advancing technological world.
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
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Ms. LoeKodia Kembabazi</a>
                      </h3>
                      <p>Assistant Librarian</p>
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
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 11")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Shahul Hamid</a>
                      </h3>
                      <p>Bursar</p>
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
                          NO BIO AT THE MOMET
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
                      onClick={() => this.view_bio("myModal_bio 12")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/mbago-ronald.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Ronald Mbago</a>
                      </h3>
                      <p>Quality Assurance</p>
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
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 13")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Erasmus Rutechura</a>
                      </h3>
                      <p>Dean of Law</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 13")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 13" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 13")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 14")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Issa Sserwadda</a>
                      </h3>
                      <p>Head of Department (FBM)</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 14")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 14" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 14")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 15")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/barbra lynn.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Ms. Barbra Lynn Amanya</a>
                      </h3>
                      <p>Head of Department (FBM)</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 15")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 15" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 15")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 16")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Mr. Aggrey Musoke</a>
                      </h3>
                      <p>Head of Departmet (FBM)</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 16")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 16" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 16")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 17")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Ms. Edinah Nimusiima</a>
                      </h3>
                      <p>Head of Department (FBM)</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 17")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 17" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 17")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 18")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/img/lilian tamale.jpg"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Ms. Lillian Tamale</a>
                      </h3>
                      <p>Head of Department (FST)</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 18")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 18" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 18")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          Ms. Lillian Tamale - Head of Computing and Information
                          Science (CIS) Department
                          <br />
                          <br />
                          Lillian Tamale is a Lecturer and the Head of Computing
                          and Information Science (CIS) Department in the
                          Faculty of Science and Technology at Victoria
                          University. She is an Information Technology
                          Professional with an Honours Bachelors degree in
                          Information Technology from Makerere University, a
                          CISCO Certified Network Associate (CCNA), a Master of
                          Business Administration in Information Technology
                          (MBA-IT) and currently pursuing her PhD in Information
                          Systems at Nkumba University.
                          <br />
                          <br />
                          Prior to joining Victoria University, Lillian served
                          as a Lecturer in the Faculty of Science and Technology
                          at Cavendish University Uganda and in the Faculty of
                          Science, Department of Computer Science at Kyambogo
                          University where she has lectured, mentored and
                          examined students in themes along Computer Science,
                          Information Technology, Information Systems, Business
                          Computing and short courses. Lillian has supervised
                          quite a number of undergraduate projects to
                          completion.
                          <br />
                          Lillian has a wealth of experience in planning,
                          coordination and executing a range of administrative
                          services independently. She has been able to take on
                          several administrative roles while working with
                          universities such as; Academic Registrar for the
                          School of Post Graduate and Faculty Secretary for the
                          Faculty of Science and Technology at Cavendish
                          University Uganda. She has been an External Examiner
                          in the Department of Information Technology at Muteesa
                          I Royal University.
                          <br />
                          <br />
                          She is technically skilled personnel in Database
                          design and maintenance, Geographical Information
                          Systems, Website designing, Programming, Networking
                          and Advanced in Statistical Methods of Research using
                          Statistical Data Analysis Using Statistical Package
                          for the Social Sciences (SPSS) Python and R
                          Programming Languages.
                          <br />
                          <br />
                          She has participated and attended in several workshops
                          and trainings within and outside Uganda majorly
                          organised by Regional Universities Forum for Capacity
                          Building in Agriculture (RUFORUM)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 9")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Doreen Ankunda</a>
                      </h3>
                      <p>Head of Department (FHSS)</p>
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
                          NO BIO AT THE MOMENT
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 9")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. Ayodeji Awobamize</a>
                      </h3>
                      <p>Head of Department (FHSS)</p>
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
                          NO BIO AT THE MOMENT
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div class="col-lg-3 col-md-6 team-wrap">
                  <div class="team-info text-center">
                    <div
                      class="column position-relative cursor"
                      onClick={() => this.view_bio("myModal_bio 19")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Ms. Aturinda Precious</a>
                      </h3>
                      <p>Assistant AR</p>
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
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 20")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Ms. Charlotte Mutesi</a>
                      </h3>
                      <p>Relationship and Compliance Manager.</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 20")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 20" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 20")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 21")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
                          alt=""
                          class="img-fluid shadow-hover img-box"
                        />
                      </a>
                    </div>
                    <br />
                    <div class="column">
                      <h3 class="name-pos">
                        <a href="#url">Dr. John Baale Mayanja</a>
                      </h3>
                      <p>Director GRIP</p>
                      <div class="social">
                        <button
                          className="read-more"
                          onClick={() => this.view_bio("myModal_bio 21")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 21" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 21")}
                        >
                          &times;
                        </span>
                        <br />
                        <p className="my-4 text-left">
                          NO BIO AT THE MOMENT
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
                      onClick={() => this.view_bio("myModal_bio 22")}
                    >
                      <a href="#url">
                        <img
                          src="assets/images/clone.png"
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
                          onClick={() => this.view_bio("myModal_bio 22")}
                        >
                          View Bio
                        </button>
                      </div>
                    </div>
                    <div id="myModal_bio 22" className="modal_bio">
                      <div className="modal-content_bio">
                        <span
                          className="close_bio"
                          onClick={() => this.close_bio("myModal_bio 22")}
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
                {/* </div> */}
                <div class="row team-row">
                  {/* <div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 8")}>
								<a href="#url"><img src="assets/images/clone.png" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Mr Moris B. Mwahuhlwa</a></h3>
								<p>Law Instructor</p>
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 8")}>View Bio</button>
								</div>
							</div>
							<div id="myModal_bio 8" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 8")}>&times;</span>
								<br/>
								<p className="my-4 text-left">
								Dr. Walusimbi holds a Doctorate degree from the Maastricht School of Management (MsM) in the Netherlands, an MBA from the East and Southern Africa Management Institute and a Bachelors in Business Administration degree from Makerere University.<br/><br/>An astute academician and organizational development consultant embodied with a wide array of skills which when applied to educational institutions and business enterprises alike has proven to lead to significant
								</p>
								</div>
							</div>
						</div>
					</div> */}
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

export default Senate;
