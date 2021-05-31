import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Research extends Component {
    componentDidMount(){
        var coll = document.getElementsByClassName("collapsible");
		var i;
		
		for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("activer");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
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
	 change_icon2(id, id2){
		var element = document.getElementById(id);
		element.classList.remove("hider");
		var element2 = document.getElementById(id2);
		element2.classList.remove("block");
		console.log('HI4')
	 }
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section class="w3l-top-header-content" style={{marginTop: '-25px', borderBottom: '#CCC 1px solid'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="row">
					<ol class="accounts col-md-2">
						<li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span>Home / Research at AU</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-team-main">
	<div class="team py-5">
		<div class="py-lg-5" >
			<div class="justify-content-center"  style={{display: 'flex'}}>
				<div class="col-lg-3 with_shadow">
					<div class="sidenavd">
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Research Center <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Research Portal<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Ethics<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Funding<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Research Assistantships<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Research at VU<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Industry Partnerships<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Public Disclosure<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Contact Us<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container">News & Events<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>The Hub<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-external-link"></span></span></li>
							<li class="w3-display-container" >Victoria University Strategic Research Plan 2018-2022<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-file-pdf-o"></span></span></li>
                        </ul>
                    </div>
				</div>
				<div class="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div class="col-lg-12 mb-lg-0 mb-5">
						<h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Overview</h6>
						<br/>
						<p class="my-4" style={{fontSize: '22px'}}>Victoria University is a Comprehensive Alberta Research University (CARU) committed to the highest professional standards of scholarly research and research ethics. AU's research includes a wide range of creative and innovative scholarly activity.</p>
						<p class="mb-4" style={{fontSize: '18px'}}>From arts, to business, to tech, to nursing and many more: all of our over 850 courses are available to our students even without being enrolled in an VU undergraduate or graduate program. All of Victoria University’s minimum requirements listed here apply to both Canadian and international candidates.</p>
						<p class="my-4">
							<h4>Our areas of research</h4>
							Victoria University’s existing and emerging research strengths can be grouped into four broad themes and serve to identify the University’s strategic research directions for the upcoming five years. The themes are not inclusive of all the research being conducted at AU. The themes foster development of a critical mass of researchers to cultivate the growth of leading edge disciplinary and interdisciplinary research and afford opportunities to align strategic research infrastructure investments with research capacity. 
							<p class="my-4">Environmental and societal dynamics of sustainability encompasses research related to the complex social, economic and ecological dimensions of sustainability</p>
							<p class="my-4">Disruptive pedagogies advance pedagogical theory and practice by calling into question traditional views of education and training, including commonly held assumptions about how people learn and how learning can be nurtured and measured.</p>
							<p class="my-4">Society, culture, health and well-being addresses questions related to the human experience, be it individual or collective, past, present or future.</p>
							<p class="my-4">Digital futures embody the design, application and impact of digital technology on society and the potential of open data and open science to advance knowledge and address social, economic, and environmental concerns.</p>
						</p>
						<p>
							<Link class="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
							<span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">Strategic Research Plan</span>
							</Link>
						</p>
						<p class="my-4">
							<h4>Research chairs</h4>
							Research chairs play a vital role in enhancing AU’s research and research training, and in attracting and retaining other exceptional researchers. VU currently holds provincial, national and international research chair positions.
						</p>
						<p>
							<Link class="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
							<span class="lohny-2"><span  id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">Learn more about our research chairs</span>
							</Link>
						</p>
						<p class="my-4">
							<h4>Student research</h4>
							Research is a key part of the graduate degree experience. That’s why we place a high priority on providing our students with research opportunities.
							<p class="my-4">Through your graduate research, you will make your own contributions to your field of study while completing an important milestone in your academic career. VU recognizes both inquiry-based and creative learning, so you can investigate the questions that move you.</p>
						</p>
						<p>
							<Link class="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
							<span class="lohny-2"><span  id="iconner5" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">Learn about graduate student funding opportunities</span>
							</Link>
						</p>
						<p class="my-4">
							<h4>Hands-on experience</h4>
							In addition to completing your own master’s or doctoral research project, as a graduate student you may have the opportunity to work with VU faculty as a research assistant. Openings are posted as they become available.
						</p>
						<p>
							<Link class="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
							<span class="lohny-2"><span  id="iconner7" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">Learn more about research assistant opportunities</span>
							</Link>
						</p>
						<p class="my-4">
							<h4>Undergraduate research</h4>
							<p class="my-4">U also supports undergraduate research. If you are studying engineering or the natural sciences, you can apply for NSERC’s $4,500 Undergraduate Student Research Awards. VU provides an additional financial supplement to award winners.</p>
							<p class="my-4">Each award provides 16 weeks of full-time research work experience in an academic setting.</p>
							<p class="my-4">If you would like to work with an VU faculty member in your area of interest, please contact the Research Centre.</p>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5">
            <div class="welcome-grids row">
                <div class="col-lg-12 welcome-image">
                    <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 class="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Contact Information<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Learn how you can</p>
                                        <p class="my-4">support our efforts &nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></p>
                                        <p class="my-4">to remove barriers to university-level studies and help students succeed.</p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                        </ul>
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

export default Research;