import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import AskInfo from './ask-info';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Requirements extends Component{
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
            <section class="w3l-top-header-content">
		<div class="hny-top-menu">
			<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
				<div class="container-fluid">
					<div class="" style={{color: '#EEE'}}>
						<Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
					<Link to="/admissions"><span className="underline" style={{color: "#EEE"}}>
					Admissions 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Admission Requirements</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br/>
	<br/>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Admission Requirements</h6>
						<br/>
						<p class="my-4" style={{fontSize: '22px'}}>We believe in education and learning opportunities for everyone. That’s why Victoria University programs are made to work for our students regardless of level of experience, previous grades or degrees. It’s our priority to ensure that our post-secondary online education is accessible and flexible, so our admission policy accepts undergraduate students to a program as long as they pass the minimum age restriction of 16 years of age.</p>
						<p class="mb-4" style={{fontSize: '18px'}}>From arts, to business, to tech, to nursing and many more:  are available to our students even without being enrolled in an VU undergraduate or graduate program. All of Victoria University’s minimum requirements listed here apply to both Canadian and international candidates.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5" style={{borderBottom: 'orange 5px solid', padding: '0'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td class="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', padding: '50px 20px 20px 40px'}}>
									<h4>Thinking of studying with us</h4>
									<p class="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
									<p class="my-4"><button class="btn_link2">Access the viewbook</button></p>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br/>
	<br/>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5">
				<div class="welcome-grids row">
					<div class="col-lg-12 welcome-image">
						<div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
							<ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Bachelor of science in visual effects and animation<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p class="my-4">Admission Requirements</p>
										<p class="my-4">Direct Entry</p>
											<p class="my-4">Candidate must have a minimum requirement of admission on a diploma as required by Victoria University Uganda.</p>
											<p>
											<p class="my-4">Candidates seeking admission on this scheme should have:</p>
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;At least five credits at O-Level.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;A candidate must have at least one principal pass at Advanced level obtained at the same sitting.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;General paper, computer skills and Sub mathematics are desirable subjects.</li>
											</ul>
												<Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
													<span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">Find all your requirements for your undergraduate program</span>
												</Link>
											</p>
											<p class="my-4">Diploma</p>
											<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education (UCE) or its equivalent, with a credit in Mathematics</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
											</p>
											<p class="my-4">Mature Age Entry Scheme</p>
											<p class="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p class="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p class="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p class="my-4">
										Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.
										</p>
											<p>
												<Link class="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
													<span class="lohny-2"><span  id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
													<span class="lohny-2"><span  id="iconner5" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Diploma in science in visual effects and animation<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p class="my-4">Admission Requirements</p>
										<p class="my-4">Direct Entry</p>
											<p class="my-4">Candidate must have a minimum requirement of admission on a diploma as required by Victoria University Uganda.</p>
											<p>
											<p class="my-4">Candidates seeking admission on this scheme should have:</p>
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;At least five credits at O-Level.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;A candidate must have at least one principal pass at Advanced level obtained at the same sitting.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;General paper, computer skills and Sub mathematics are desirable subjects.</li>
											</ul>
												<Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
													<span class="lohny-2"><span  id="iconner7" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">Find all your requirements for your undergraduate program</span>
												</Link>
											</p>
											<p class="my-4">Diploma</p>
											<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education (UCE) or its equivalent, with a credit in Mathematics</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
											</p>
											<p class="my-4">Mature Age Entry Scheme</p>
											<p class="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p class="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p class="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p class="my-4">
										Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.
										</p>
											<p>
												<Link class="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
													<span class="lohny-2"><span  id="iconner9" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
													<span class="lohny-2"><span  id="iconner11" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Masters of science in big data analytics<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 class="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p class="my-4">
											The Faculty will admit students on the Masters of Science in Big data Analytics programme who possess at least a second-class honors Bachelor’s degree in Information Technology, Computer Science or any other Computing or Mathematics discipline from any recognized university in and beyond Uganda. Applicants with a PGD in the above disciplines will also be considered.
										</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Masters of science in information technology<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 class="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p class="my-4">
										One will first satisfy the general requirements for admission to Victoria University prior to being considered for admission to the programme. Admission to the programme shall be open to the following category of candidate.
										</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Holder of a minimum of second-class honors undergraduate degree that has content rich in Information Technology, Information systems, computer science, software engineering or mathematics.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Holder of postgraduate diploma in Information Technology, Information Systems, Computer Science, Software Engineering and Computer Engineering from a recognized University/ Institution</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Any other relevant degree from a recognized university/institution with evidence of having taken a considerable number of acceptable courses related to the Information Technology or Information Systems discipline.</li>
											</ul>
										</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Diploma in information technology<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 class="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p class="my-4">Direct Entry</p>
										<p class="my-4">
										Candidate must have minimum requirements of admission to a Diploma programme as required by Victoria University Uganda.
										</p>
										<p class="my-4">Candidates seeking admission on this scheme should have:</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Credit passes in Mathematics and English at O-Level.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;At least one principal passes at Advanced level obtained at the same sitting.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;General paper and Sub mathematics are desirable subjects.</li>
											</ul>
										</p>
										<p class="my-4">Foundation Programme</p>
										<p class="my-4">Applicants should have passed with at least a class two (credit) equivalent to 2.80 - 4.39 CGPA.
										</p>
										<p class="my-4">Mature Age Entry Scheme</p>
										<p class="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p class="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p class="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p>
											<p class="my-4">
											Credit transfer from other universities
											</p>
											<p class="my-4">Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.</p>
												<Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
													<span class="lohny-2"><span  id="iconner13" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of industrial art and innovative design<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 class="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission to Other Years</h6>
										<p class="my-4">
										A student who transfers from other recognized universities or institutions must spend at least two years on the programme.
										</p>
										<p class="my-4">A student who holds a second-class Diploma in the field of Art and Design with education from a recognized institution may be eligible to join Year II of study.</p>
										<p class="my-4">Duration</p>
										<p class="my-4">The programme shall be a full-time undertaking.  The programme shall last for six (6) semesters for direct entry and four (4) semesters for candidates with a Diploma in Art. </p>
										<p class="my-4">A semester shall be (17) seventeen weeks with (15) weeks being for teaching and two (2) weeks for examination.  The duration of each course is designed in credit units where one credit unit is equivalent to 15 lecture hours.  One lecture hour is equivalent to 2 (two) hours of practice.</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of information technology<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 class="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p class="my-4">Direct Entry</p>
										<p class="my-4">Candidates must have a minimum requirement of admission on a degree as required by Victoria University Uganda.</p>
										<p class="my-4">Candidates seeking admission on this scheme should have:</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;At least a credit in Mathematics and English at O-Level.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;A candidate must have two principal passes at Advanced level obtained at the same sitting.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;General paper and Sub mathematics are desirable subjects.</li>
											</ul>
										</p>
										<p class="my-4">Diploma:</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education (UCE) or its equivalent, with a credit in Mathematics</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
										</p>
										<p class="my-4">Mature Age Entry Scheme</p>
										<p class="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p class="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p class="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p class="my-4">
											Credit transfer from other universities
											</p>
											<p class="my-4">Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of industrial art and innovative design<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 class="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p class="my-4">
										Admission into the first year is through any of the avenues below:
										</p>
										<p class="my-4">Direct Entry Scheme (from A-level):</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education(UCE) or its equivalent, with a credit in Mathematics</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;At least two principal passes  from the same sitting of UACE</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;At least one subsidiary pass in Mathematics in UACE</li>
											</ul>
										</p>
										<p class="my-4">Diploma Holder Entry Scheme:</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education(UCE) or its equivalent, with a credit in Mathematics</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
										</p>
										<p class="my-4">Mature Age Entry Scheme:</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;A pass in appropriate mature-age examinations conducted by any NCHE – accredited and approved university or institution
												</li>
											</ul>
										</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of Business Information Systems<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 class="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p class="my-4">
										To gain admission to the programme, a candidate must first of all satisfy the general requirements for admission into Victoria University at a Bachelors level. In addition, a candidate shall be eligible for admissions to the programme on meeting any of the following minimum qualifications: -
										</p>
										<p class="my-4">Direct Entry:</p>
										<p class="my-4">
										At least two principal passes in the Uganda Advanced Certificate of Education (UACE) level in one sitting or its equivalent and at least a credit in mathematics at O-level. The essential subject at Advanced level will be Economics.
										</p>
										<p class="my-4">Diploma Entry:</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Any Diploma (Upper credit and above) from a recognized Institution of learning can be admitted or</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Candidates with at least a second-class Lower division and five passes at ordinary level in one sitting will be considered plus one principal pass</li>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;For credit transfer entry: Since there are no current CATs, university management will consider this later.</li>
											</ul>
										</p>
										<p class="my-4">Credit transfer from other universities:</p>
										<p class="my-4">
											<ul style={{listStyle: 'none'}}>
												<li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;There will be a possibility of credit transfer from other Ugandan Universities. The formula will be worked out accordingly.
												</li>
											</ul>
										</p>
										</div>
									</div>	
									<br/>
								</div>
							</ul>
						</div>
					</div>
					<div class="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please ensure to review the specific requirements for the undergraduate or graduate program you are applying for carefully before submitting your final application.</td>
							</tr>
						</table>
					</div>	
				</div>
			</div>
		</div>
	</section>
	<AskInfo />
    <GetInfo />
            <Footer />
            </React.Fragment>
        )
    }
}

export default Requirements;