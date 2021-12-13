import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Directors extends Component {
    view_bio(id) {
        var modal = document.getElementById(id);
        modal.style.display = "block";
    }

    close_bio(id) {
        var modal = document.getElementById(id);
        modal.style.display = "none";
    }
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
<section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="" style={{color: '#EEE'}}>
					<Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Our Team</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-footer-16 text-center">
	<div className="container">
		<h3 className="hny-title text-left" style={{color: '#f74040', fontSize: '48px', fontWeight: '600'}}>Directors</h3>
	</div>
</section>
<section class="w3l-team-main">
		<div class="team py-5">
			<div class="container py-lg-5">
				<div class="row team-row">
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 1")}>
								<a href="#url"><img src="assets/images/trustees/aliker.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr Martin Jerome Okec Aliker</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 1")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 1" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
									<br/>
									<p className="my-4 text-left">Chairman Victoria University Limited. He served as the Chancellor of Victoria University from 3rd October 2013 to 10th January 2020. He has also served as the first chancellor of Gulu University, a public university in northern Uganda between 2004 and 2014 before he became the chancellor of Victoria University. Dr. Aliker has a Bachelor of Arts degree, with a major in Political Science and a Doctor of Dental Surgery (DDS) degree. He set up the first private dental clinic owned by an indigenous in Uganda.
									<br /><br />Dr Aliker is also a businessman, entrepreneur as well as a community leader. He is a senior adviser to President Yoweri Kaguta Museveni. Dr. Aliker has sat on the board of nearly forty companies in Uganda. Among many other companies, Dr Aliker is a shareholder in Stanbic Bank Uganda Limited, Uganda Clays Limited, Nation Media Group, National Insurance Corporation and East African Breweries. These companies are listed on the Uganda Securities Exchange. He is the Chairman of Uganda Clays Limited. He also sits on the “Acting East African Advisory Board”, the private equity firm of the United Kingdom’s Commonwealth Development Corporation.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 2")}>
								<a href="#url"><img src="assets/images/trustees/sudhir.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr. Sudhir Ruparelia</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 2")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 2" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
								<br/>
								<p className="my-4 text-left">
									Dr. Sudhir Ruparelia was born in in Kabatoro, Kasese district in western Uganda. In 1985, he returned from the UK to Uganda with $25,000 in savings that he earned from several casual jobs in London including working in supermarkets, factories, butcheries and ventured into importing beer from Kenya which – a commodity which was scarce at the time.
									<br/><br/>In 2007, he was awarded an honorary Doctorate of Law in Business by Uganda Pentecostal University in recognition of his investments in several sectors that have provided employment and contributed to Uganda’s economic growth.
								</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 3")}>
								<a href="#url"><img src="assets/images/trustees/rajiv.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Mr. Rajiv Ruparelia</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 3")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 3" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 3")}>&times;</span>
								<br/>
								<p className="my-4 text-left">Mr. Rajiv Ruparelia, a graduate of Regents College in London with a degree in Financial Management, is a passionate promoter of Victoria University. With a top-class education, he has the knowledge and training to steer the university to the 21st Century.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 4")}>
								<a href="#url"><img src="assets/images/trustees/jyotsna.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Mrs. Jyotsna Ruparelia</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 4")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 4" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 4")}>&times;</span>
								<br/>
								<p className="my-4 text-left">
								Mrs. Jyotsna Ruparelia was born in Kamuli in Eastern Uganda and educated in Kampala and in north west London. Jyotsna paid her way through education by working in supermarkets and navigating her way through the system; she eventually attained a Diploma in Banking.
								</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row team-row">
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 5")}>
								<a href="#url"><img src="assets/images/trustees/meera.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Ms. Meera Ruparelia</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 5")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 5" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 5")}>&times;</span>
									<br/>
									<p className="my-4 text-left">Ms. Meera Ruparelia, a graduate of City University, UK is active in conserving wildlife and the areas they live in. She also works with a real estate holding company, Meera Investments, which manages over 300 properties in the country.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 6")}>
								<a href="#url"><img src="assets/images/trustees/sheena.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Ms. Sheena Ruparelia</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 6")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 6" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 6")}>&times;</span>
								<br/>
								<p className="my-4 text-left">Ms. Sheena Ruparelia, a graduate of City University, UK with a degree in Economics and Accountancy is active in several foundation-related projects for children which include the construction of homes for child-led families, health awareness projects and provision of clean water.
                    			</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 7")}>
								<a href="#url"><img src="assets/images/trustees/naiya.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Ms Naiya Ruparelia</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 7")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 7" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 7")}>&times;</span>
								<br/>
								<p className="my-4 text-left">Upon graduating, Mrs. Naiya Ruparelia held three jobs primarily in the marketing and sales domain in England before coming to Uganda where she is currently a Director at the privately owned Victoria University, Director Premier Advertising, a full-service advertising and marketing agency.
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
        )
    }
}

export default Directors;