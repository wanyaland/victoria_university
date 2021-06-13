import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Trustees extends Component {
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
<section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="">
					<Link to="/"><span className="underline" style={{color: "#CCC"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#CCC'}}>/ Board of Trustees</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section class="w3l-footer-16 text-center">
	<div class="container">
		<h3 class="hny-title text-left" style={{color: '#dd6018', fontSize: '50px', fontWeight: '600'}}>Our Board of Trustees</h3>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/chancellor.jpg" class="img-fluid" alt="" style={{height: '100%', width: '100%'}} />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Prof. John Opuda – Asibo</h6>
					<p class="my-4">Chairman Victoria University Limited. He served as the Chancellor of Victoria University from 3rd October 2013 to 10th January 2020. He has also served as the first chancellor of Gulu University, a public university in northern Uganda between 2004 and 2014 before he became the chancellor of Victoria University. </p>
					<p class="mb-4"></p>
					<button class="bio_btn" id="myBtn_bio" onClick={() => this.view_bio("myModal_bio 1")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 1" class="modal_bio">
				<div class="modal-content_bio">
					<span class="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
					<br/>
					<p class="my-4">Chairman Victoria University Limited. He served as the Chancellor of Victoria University from 3rd October 2013 to 10th January 2020. He has also served as the first chancellor of Gulu University, a public university in northern Uganda between 2004 and 2014 before he became the chancellor of Victoria University. Dr. Aliker has a Bachelor of Arts degree, with a major in Political Science and a Doctor of Dental Surgery (DDS) degree. He set up the first private dental clinic owned by an indigenous in Uganda.
                    <br /><br />Dr Aliker is also a businessman, entrepreneur as well as a community leader. He is a senior adviser to President Yoweri Kaguta Museveni. Dr. Aliker has sat on the board of nearly forty companies in Uganda. Among many other companies, Dr Aliker is a shareholder in Stanbic Bank Uganda Limited, Uganda Clays Limited, Nation Media Group, National Insurance Corporation and East African Breweries. These companies are listed on the Uganda Securities Exchange. He is the Chairman of Uganda Clays Limited. He also sits on the “Acting East African Advisory Board”, the private equity firm of the United Kingdom’s Commonwealth Development Corporation.
                    </p>
				</div>
			</div>			  
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Dr.  Sudhir Ruparelia</h6>
					<p class="my-4">
                        Dr Ruparelia was born in in Kabatoro, Kasese district in western Uganda. In 1985, he returned from the UK to Uganda with $25,000 in savings that he earned from several casual jobs in London including working in supermarkets, factories, butcheries and ventured into importing beer from Kenya which – a commodity which was scarce at the time.
					</p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 2")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 2" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
				  <br/>
				  <p class="my-4">
                    Dr Ruparelia was born in in Kabatoro, Kasese district in western Uganda. In 1985, he returned from the UK to Uganda with $25,000 in savings that he earned from several casual jobs in London including working in supermarkets, factories, butcheries and ventured into importing beer from Kenya which – a commodity which was scarce at the time.
                    <br/><br/>In 2007, he was awarded an honorary Doctorate of Law in Business by Uganda Pentecostal University in recognition of his investments in several sectors that have provided employment and contributed to Uganda’s economic growth.
				  </p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mrs. Jyotsna Ruparelia</h6>
					<p class="my-4">
                        Mrs. Ruparelia was born in Kamuli in Eastern Uganda and educated in Kampala and in north west London. Jyotsna paid her way through education by working in supermarkets and navigating her way through the system; she eventually attained a Diploma in Banking.
                    </p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 3")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 3" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 3")}>&times;</span>
				  <br/>
				  <p class="my-4">
                    Mrs. Ruparelia was born in Kamuli in Eastern Uganda and educated in Kampala and in north west London. Jyotsna paid her way through education by working in supermarkets and navigating her way through the system; she eventually attained a Diploma in Banking.
                  </p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/" class="img-fluid" alt="" style={{height: '100%', width: '100%'}} />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Rajiv Ruparelia</h6>
					<p class="my-4">Rajiv, a graduate of Regents College in London with a degree in Financial Management, is a passionate promoter of Victoria University. With a top-class education, he has the knowledge and training to steer the university to the 21st Century.</p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 4")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 4" class="modal_bio">
				<div class="modal-content_bio">
					<span class="close_bio" onClick={() => this.close_bio("myModal_bio 4")}>&times;</span>
					<br/>
					<p class="my-4">
                        Rajiv, a graduate of Regents College in London with a degree in Financial Management, is a passionate promoter of Victoria University. With a top-class education, he has the knowledge and training to steer the university to the 21st Century.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Ms. Meera Ruparelia</h6>
					<p class="my-4">
                        Meera, a graduate of City University, UK is active in conserving wildlife and the areas they live in. She also works with a real estate holding company, Meera Investments, which manages over 300 properties in the country.
					</p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 5")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 5" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 5")}>&times;</span>
				  <br/>
				  <p class="my-4">
                    Meera, a graduate of City University, UK is active in conserving wildlife and the areas they live in. She also works with a real estate holding company, Meera Investments, which manages over 300 properties in the country.
				  </p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Ms. Sheena Ruparelia</h6>
					<p class="my-4">Sheena, a graduate of City University, UK with a degree in Economics and Accountancy is active in several foundation-related projects for children which include the construction of homes for child-led families, health awareness projects and provision of clean water.</p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 6")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 6" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 6")}>&times;</span>
				  <br/>
				  <p class="my-4">
                    Sheena, a graduate of City University, UK with a degree in Economics and Accountancy is active in several foundation-related projects for children which include the construction of homes for child-led families, health awareness projects and provision of clean water.
                  </p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mrs. Naiya Ruparelia</h6>
					<p class="my-4">
                        Upon graduating, Ms. Naiya held three jobs primarily in the marketing and sales domain in England before coming to Uganda where she is currently a Director at the privately owned Victoria University, Director Premier Advertising, a full-service advertising and marketing agency.
                    </p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 6")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 6" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 6")}>&times;</span>
				  <br/>
				  <p class="my-4">
                    Upon graduating, Ms. Naiya held three jobs primarily in the marketing and sales domain in England before coming to Uganda where she is currently a Director at the privately owned Victoria University, Director Premier Advertising, a full-service advertising and marketing agency.
                    <br/><br/>She is a Director Ruparelia Foundation that works to improve and promote health, education, sports, general welfare, and poverty eradication, improve livelihoods, support the welfare of wildlife and preservation of the environment by fostering partnerships among businesses, corporations, with the government, non-governmental organisations and individuals.
                  </p>
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

export default Trustees;