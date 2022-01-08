import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class ExecTeam extends Component {
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
		<h3 className="hny-title text-left" style={{color: '#f74040', fontSize: '50px', fontWeight: '600'}}>Our Executive Team</h3>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/chancellor.jpg" className="img-fluid" alt="" style={{height: '100%', width: '100%'}} />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Prof. John Opuda – Asibo</h6>
					<h6 style={{color: '#0077b5'}}><i>University Chancellor</i></h6>
					<p className="my-4">Professor John Opuda - Asibo, joins Victoria University as its Chancellor with over 43 years of wide professional experience gained from universities, government departments and research institutions in Africa, Europe, Japan and USA relevant to University teaching. He holds a Veterinary Medical Degree (1977) from Makerere University, a Master of Public Health (1980) and PhD (1983) degrees, the latter in Microbiology, Epidemiology and Public Health, both from the University of Minnesota, USA.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" id="myBtn_bio" onClick={() => this.view_bio("myModal_bio 1")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 1" className="modal_bio">
				<div className="modal-content_bio">
					<span className="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
					<br/>
					<p className="my-4">Professor John Opuda - Asibo, joins Victoria University as its Chancellor with over 43 years of wide professional experience gained from universities, government departments and research institutions in Africa, Europe, Japan and USA relevant to University teaching. He holds a Veterinary Medical Degree (1977) from Makerere University, a Master of Public Health (1980) and PhD (1983) degrees, the latter in Microbiology, Epidemiology and Public Health, both from the University of Minnesota, USA. <br /><br />His Public Health training has equiped him with multi-sectoral knowledge application in Epidemiology (observational and analytical), Administration, Economics, Education and Governance. He is an accomplished researcher and has published widely in refereed journals and with chapters in books.<br /><br />He has a respectable experience in Administration and Institutional Management, Financing and
					regulation of higher education.
					<br /><br />He rose through the ranks to full Professor in 1997 at Makerere University and was a Chair of a
					Department, Director of Graduate Studies and Research. At Kyambogo University, he was, a
					Deputy Vice Chancellor Academic Affairs (Provost) and Vice Chancellor (President). He was
					also an Executive Director and Chief Regulator of Higher education at the National Council for
					Higher Education, Uganda.<br /><br />
					His other experiences include;
					<br /><br />A Senior Research Fulbright Fellow at the University of California at Davis teaching graduate
					programmes
					<br />Visiting scholar at Nagasaki University Institute of Tropical Medicine, Japan
					External examiner and supervisor of graduate students in Uganda, Kenya, Canada, Germany,
					Swaziland, Zimbabwe, Zambia, UK, Japan, Sweden, Norway and USA.
					<br />Member and Chairman of the National Biosafety Committee in Uganda.
					<br />Director POSTA Uganda
					<br />Member Higher Education Financing Board
					<br />A consultant and a Key note speaker.
					<br />Professor John Opuda - Asibo is a practitioner of positive human values, which include - good
					leadership, respect of authority, financial transparency, honesty while accommodating other
					people and opinions
					<br />The Chancellor is the titular head of the University and as such presides at all ceremonial
					assemblies of the University and, in the name of that University, confers degrees and other
					academic titles and distinctions of that University.</p>
				</div>
			</div>			  
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/joseph-biribonwa.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Joseph N. Biribonwa</h6>
					<h6 style={{color: '#0077b5'}}><i>Vice Chairperson University Council</i></h6>
					<p className="my-4">Mr. Joseph N. Biribonwa is a seasoned expert in democracy & governance, management & administration, finance and corporate governance, with over forty (40) years of professional experience.
						<br/>
						<b>Current Designation: Deputy Chairperson</b>
						<br/>
						<b>Educational Qualifications: B.Com. (Hons.)</b>
					</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 2")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 2" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
				  <br/>
				  <p className="my-4">Mr. Joseph N. Biribonwa is a seasoned expert in democracy & governance, management & administration, finance and corporate governance, with over forty (40) years of professional experience.
					<br/>
					<b>Current Designation: Deputy Chairperson</b>
					<br/>
					<b>Educational Qualifications: B.Com. (Hons.)</b>
				  </p>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/lawerence.JPG" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Prof. Lawrence Muganga.</h6>
					<h6 style={{color: '#0077b5'}}><i>Vice Chancellor/Deputy Vice Chancellor – Academic Affairs</i></h6>
					<p className="my-4">Prof. Lawrence Muganga doubles as the Ag. Vice Chancellor and Deputy Vice Chancellor – Academic Affairs of Victoria University. He is an award-winning writer and author, researcher, educator, public policy practitioner, strategy advisor, development management Specialist and authentic learning enthusiast based in Edmonton, Alberta Canada.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 13")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 13" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 13")}>&times;</span>
				  <br/>
				  <p className="my-4 text-left">I am a Ugandan-born Canadian researcher, academic administrator and an award winning author
						of several books that have been ranked by Amazon as best sellers around the world. Currently I
						am honored to serve as Vice Chancellor of Victoria University Uganda. I am the author of both
						“You Can&#39;t Make Fish Climb Trees” and “Transform”. I also happen to be the first Education
						Scholar to research and introduce Authentic Learning Education in Uganda, with emphasis on
						Real-World Learning for all levels of education. <br/><br/>
						I am an ardent advocate for the implementation of a real-world Education Model that emphasizes
						both Experiential Learning (EXL) &amp; Work-Integrated Learning (WIL) programs to ensure that
						students maximize their learning and gain meaningful education. My transformational education
						research that embraces and embeds both technology and learning in the real-world has prepared
						me to deploy my unconscious mind that looks at education very differently with the intention of
						making learning relevant to every learner and making education work for everyone. I have been
						blessed to visit 47 countries for purposes of research and education advisory role. I have been
						privileged to advise education institutions in several countries including Sweden, Finland,
						Canada, USA, Ethiopia, Argentina, Singapore, Uganda, Solomon Islands and the list goes on.<br/><br/>
						In terms of Education background, I have had the opportunity to pursue my studies at several
						universities around the world including Makerere University, where I obtained both a Bachelors
						and Master’s Degree in Economics, then University of Alberta in Canada where I successfully
						attained both a Master’s in Education and PHD in Educational Administration and Leadership.
						Because we live in a world where lifelong learning has become part of us; I further ended up at
						Harvard University to pursue my Post- Doctoral studies focusing on Higher Education Teaching.
						I have also been awarded the title of Honorary Professorship of the Academic Union by the
						Academic Union of Oxford, UK for my continued contribution towards developing the
						University of the Future driven by Digital Transformation.<br/><br/>
						Some of my work as an educationist has focused on transforming education to make it fit in the
						times we live in now and those we anticipate in the future, in fact, one of my education books
						focusing on authentic learning attracted several awards and grants including a $1,300,000 grant
						from the Bill &amp; Melinda Gates Foundation. This remarkable book &quot;YOU CAN&#39;T MAKE FISH
						CLIMB TREES - OVERCOMING EDUCATIONAL MALPRACTICE THROUGH
						AUTHENTIC LEARNING&quot;, has been praised, endorsed and promoted by Uganda&#39;s First Lady
						and Minister of Education and Sports (MOES), Hon. Janet Kataha Museveni. The book has
						triggered the infusion of Authentic Learning into Uganda&#39;s Curriculum for the first time in the
						history of Uganda&#39;s education system and this initiative no doubt puts the country&#39;s education on
						course to greatness.
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

export default ExecTeam;