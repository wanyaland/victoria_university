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
            <section className="w3l-top-header-content">
		<div className="hny-top-menu">
			<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
				<div className="container-fluid">
					<div className="" style={{color: '#EEE'}}>
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
    <section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div className="welcome-grids row">
					<div className="col-lg-12 mb-lg-0 mb-5">
						<h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Admission Requirements</h6>
						<br/>
						<p className="my-4" style={{fontSize: '22px'}}>We believe in education and learning opportunities for everyone. That’s why Victoria University programs are made to work for our students regardless of level of experience, previous grades or degrees. It’s our priority to ensure that our post-secondary online education is accessible and flexible, so our admission policy accepts undergraduate students to a program as long as they pass the minimum age restriction of 16 years of age.</p>
						<p className="mb-4" style={{fontSize: '18px'}}>From arts, to business, to tech, to nursing and many more:  are available to our students even without being enrolled in an VU undergraduate or graduate program. All of Victoria University’s minimum requirements listed here apply to both Canadian and international candidates.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div className="welcome-grids row">
					<div className="col-lg-12 mb-lg-0 mb-5" style={{borderBottom: 'orange 5px solid', padding: '0'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td className="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', padding: '50px 20px 20px 40px'}}>
									<h4>Thinking of studying with us</h4>
									<p className="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
									<p className="my-4"><button className="btn_link2">Access the viewbook</button></p>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5">
				<div className="welcome-grids row">
					<div className="col-lg-12 welcome-image">
						<h6 className="hny-title" style={{fontSize: '38px', color: '#003d5e', fontWeight: '600'}}>Faculty of Science And Technology</h6>
						<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
							<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Bachelor of science in visual effects and animation<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4" style={{fontWeight: '500'}}><b>Admission Requirements</b></p>
										<p className="my-4">Direct Entry</p>
											<p className="my-4">Candidate must have a minimum requirement of admission on a diploma as required by Victoria University Uganda.</p>
											<p>
											<p className="my-4">Candidates seeking admission on this scheme should have:</p>
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;At least five credits at O-Level.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A candidate must have at least one principal pass at Advanced level obtained at the same sitting.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;General paper, computer skills and Sub mathematics are desirable subjects.</li>
											</ul>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
													<span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Find all your requirements for your undergraduate program</span>
												</Link>
											</p>
											<p className="my-4">Diploma</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education (UCE) or its equivalent, with a credit in Mathematics</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
											</p>
											<p className="my-4">Mature Age Entry Scheme</p>
											<p className="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p className="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p className="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p className="my-4">
										Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.
										</p>
											<p>
												<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
													<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
													<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Diploma in science in visual effects and animation<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4" style={{fontWeight: '500'}}><b>Admission Requirements</b></p>
										<p className="my-4">Direct Entry</p>
											<p className="my-4">Candidate must have a minimum requirement of admission on a diploma as required by Victoria University Uganda.</p>
											<p>
											<p className="my-4">Candidates seeking admission on this scheme should have:</p>
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;At least five credits at O-Level.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A candidate must have at least one principal pass at Advanced level obtained at the same sitting.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;General paper, computer skills and Sub mathematics are desirable subjects.</li>
											</ul>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
													<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Find all your requirements for your undergraduate program</span>
												</Link>
											</p>
											<p className="my-4">Diploma</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education (UCE) or its equivalent, with a credit in Mathematics</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
											</p>
											<p className="my-4">Mature Age Entry Scheme</p>
											<p className="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p className="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p className="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p className="my-4">
										Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.
										</p>
											<p>
												<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
													<span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
													<span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Masters of science in big data analytics<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">
											The Faculty will admit students on the Masters of Science in Big data Analytics programme who possess at least a second-class honors Bachelor’s degree in Information Technology, Computer Science or any other Computing or Mathematics discipline from any recognized university in and beyond Uganda. Applicants with a PGD in the above disciplines will also be considered.
										</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Masters of science in information technology<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">
										One will first satisfy the general requirements for admission to Victoria University prior to being considered for admission to the programme. Admission to the programme shall be open to the following category of candidate.
										</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Holder of a minimum of second-class honors undergraduate degree that has content rich in Information Technology, Information systems, computer science, software engineering or mathematics.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Holder of postgraduate diploma in Information Technology, Information Systems, Computer Science, Software Engineering and Computer Engineering from a recognized University/ Institution</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any other relevant degree from a recognized university/institution with evidence of having taken a considerable number of acceptable courses related to the Information Technology or Information Systems discipline.</li>
											</ul>
										</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Diploma in information technology<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">Direct Entry</p>
										<p className="my-4">
										Candidate must have minimum requirements of admission to a Diploma programme as required by Victoria University Uganda.
										</p>
										<p className="my-4">Candidates seeking admission on this scheme should have:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Credit passes in Mathematics and English at O-Level.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;At least one principal passes at Advanced level obtained at the same sitting.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;General paper and Sub mathematics are desirable subjects.</li>
											</ul>
										</p>
										<p className="my-4">Foundation Programme</p>
										<p className="my-4">Applicants should have passed with at least a class two (credit) equivalent to 2.80 - 4.39 CGPA.
										</p>
										<p className="my-4">Mature Age Entry Scheme</p>
										<p className="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p className="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p className="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p>
											<p className="my-4">
											Credit transfer from other universities
											</p>
											<p className="my-4">Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.</p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
													<span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of industrial art and innovative design<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission to Other Years</h6>
										<p className="my-4">
										A student who transfers from other recognized universities or institutions must spend at least two years on the programme.
										</p>
										<p className="my-4">A student who holds a second-class Diploma in the field of Art and Design with education from a recognized institution may be eligible to join Year II of study.</p>
										<p className="my-4">Duration</p>
										<p className="my-4">The programme shall be a full-time undertaking.  The programme shall last for six (6) semesters for direct entry and four (4) semesters for candidates with a Diploma in Art. </p>
										<p className="my-4">A semester shall be (17) seventeen weeks with (15) weeks being for teaching and two (2) weeks for examination.  The duration of each course is designed in credit units where one credit unit is equivalent to 15 lecture hours.  One lecture hour is equivalent to 2 (two) hours of practice.</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of information technology<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">Direct Entry</p>
										<p className="my-4">Candidates must have a minimum requirement of admission on a degree as required by Victoria University Uganda.</p>
										<p className="my-4">Candidates seeking admission on this scheme should have:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;At least a credit in Mathematics and English at O-Level.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A candidate must have two principal passes at Advanced level obtained at the same sitting.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The essential subjects are; Economics, Geography, Entrepreneurship, Fine Art, Technical Drawing, Literature, Computer Studies, Electronics, Mathematics, Physics, Chemistry, Foods and Nutrition, Biology, Healthy Science and Agriculture.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any other subject done and passed at Advanced level is relevant.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;General paper and Sub mathematics are desirable subjects.</li>
											</ul>
										</p>
										<p className="my-4">Diploma:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education (UCE) or its equivalent, with a credit in Mathematics</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
										</p>
										<p className="my-4">Mature Age Entry Scheme</p>
										<p className="my-4">
										A candidate must be 25 years of age and above have passed the mature age entry examination conducted by National Council for Higher Education (NCHE) or an institution accredited by 
										</p>
										<p className="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Makererere University</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Gulu University.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Islamic University in Uganda Mbale</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Mbarara University of Science and Technology</li>
											</ul>
											</p>
											<p className="my-4">The eligible candidate must have got two principal passes at A Level in relevant subjects and 5 passes at O’Level. They should have been obtained at the same sitting, not consecutive sittings.</p>
											<p className="my-4">
											Credit transfer from other universities
											</p>
											<p className="my-4">Credit transfers from other universities are considered on a one-to one basis depending on the university where the student is transferring from and the grades obtained in the relevant modules.</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of science in computer science<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">
										Admission into the first year is through any of the avenues below:
										</p>
										<p className="my-4">Direct Entry Scheme (from A-level):</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education(UCE) or its equivalent, with a credit in Mathematics</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;At least two principal passes  from the same sitting of UACE</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;At least one subsidiary pass in Mathematics in UACE</li>
											</ul>
										</p>
										<p className="my-4">Diploma Holder Entry Scheme:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The Uganda Certificate of Education(UCE) or its equivalent, with a credit in Mathematics</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma in Computer Science, IT, Mathematics, Information Systems, Statistics, Computer Engineering or equivalent from a recognized institution.</li>
											</ul>
										</p>
										<p className="my-4">Mature Age Entry Scheme:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A pass in appropriate mature-age examinations conducted by any NCHE – accredited and approved university or institution
												</li>
											</ul>
										</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelor of Business Information Systems<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">
										To gain admission to the programme, a candidate must first of all satisfy the general requirements for admission into Victoria University at a Bachelors level. In addition, a candidate shall be eligible for admissions to the programme on meeting any of the following minimum qualifications: -
										</p>
										<p className="my-4">Direct Entry:</p>
										<p className="my-4">
										At least two principal passes in the Uganda Advanced Certificate of Education (UACE) level in one sitting or its equivalent and at least a credit in mathematics at O-level. The essential subject at Advanced level will be Economics.
										</p>
										<p className="my-4">Diploma Entry:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any Diploma (Upper credit and above) from a recognized Institution of learning can be admitted or</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Candidates with at least a second-class Lower division and five passes at ordinary level in one sitting will be considered plus one principal pass</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;For credit transfer entry: Since there are no current CATs, university management will consider this later.</li>
											</ul>
										</p>
										<p className="my-4">Credit transfer from other universities:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;There will be a possibility of credit transfer from other Ugandan Universities. The formula will be worked out accordingly.
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
					<div className="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please ensure to review the specific requirements for the undergraduate or graduate program you are applying for carefully before submitting your final application.</td>
							</tr>
						</table>
					</div>	
				</div>
			</div>
		</div>
	</section>
	<section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5">
				<div className="welcome-grids row">
					<div className="col-lg-12 welcome-image">
						<h6 className="hny-title" style={{fontSize: '38px', color: '#003d5e', fontWeight: '600'}}>Faculty of Business And Management</h6>
						<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
							<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Bachelor of International Business<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<p className="my-4">
										This programme prepares undergraduates for tasks demanding business expertise and for entry-level managerial positions worldwide in national and international companies and organisations. The Program is a three-year full-time; day, evening and weekend programme of intensive study for learners wishing to earn a Bachelor of International Business degree from Victoria University. It may, however  , be completed in four to six semesters depending on the admission criteria. All elements of the programme have a strong international orientation and aim to develop soft skills such as communication, presentation skills, intercultural competence, and business ethics.
									</p>
									<p className="my-4">
										The programme is targeted at learners who want to work in a multicultural environment. The programme is designed to offer you the opportunity to apply theoretical business management knowledge in a real-life business environment, and further develop soft skills while extending your comprehension of business issues and management tasks. Furthermore, the internship programme gives you the chance to broaden your intercultural competencies and build international networks. The international study semester is an essential part of the programme and is fully accredited with a certificate of competence. 
									</p>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4" style={{fontWeight: '500'}}><b>Admission Requirements</b></p>
										<p className="my-4">To gain admission to the programme, a candidate must first of all satisfy the general requirements for admission into Victoria University at a Bachelors level. In addition, a candidate shall be eligible for admissions to the programme on meeting any of the following minimum qualifications: -</p>
										<p className="my-4">Direct Entry</p>
											<p className="my-4">At least two principal passes in the Uganda Advanced Certificate of Education level in one sitting or its equivalent and at least a credit in mathematics at O-level. The essential subject at Advanced level will be Economics.</p>
											<p className="my-4">Diploma</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any Diploma (Upper credit and above) from a recognized Institution of learning can be admitted or</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Candidates with at least a second class Lower division and five passes at ordinary level in one sitting will be considered plus one principal pass.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;For credit transfer entry: Since there is no current CATs, university management will consider this later.</li>
											</ul>
											</p>
											<p className="my-4">Credit transfer from other universities</p>
											<p className="my-4">There will be a possibility of credit transfer from other Ugandan Universities. The formula will be worked out accordingly.
										</p>
										<p className="my-4">NCHE. NCHE recognizes the following institutions’ mature age examinations:</p>
										<p className="my-4" style={{fontWeight: '500'}}>Duration of th programme</p>
											<p className="my-4">The Bachelor’s Degree in International Business shall extend over a period of six semesters. For category 4b. (i) the duration will be 4 semesters.
											</p>
											<p>
												<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
													<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
													<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp; Bachelor of Science In Oil And Gas Accounting<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<p className="my-4">Victoria University is one of the premier providers of Petroleum and Energy Education in East Africa. Situated in the heart of Kampala City, the University intends to be the leading provider of high quality of Oil and Gas and energy studies in East Africa at both the undergraduate and postgraduate level as well the provider of quality research in petroleum and energy studies in the region.</p>
									<p className="my-4">
										With an outstanding line-up of highly qualified and well experienced Oil and Gas and business professionals as part of its academic staff, rigorous academic standards, an excellent purpose built, modern campus, and strong collaborations locally and international oil and gas companies, studying at Victoria University will benefit a learner with the top class qualifications and training in the Oil and Gas that will unlock your potential to succeed as petroleum economist, business analyst, energy economist, among other areas of expertise in the wide spectrum of the market. Victoria University aims at helping students, professionals to achieve real industry competence and analytical skills in Uganda’s petroleum sector in particular, and eventually the regional and global petroleum industry in general. All academic programs at Victoria University are delivered through highly interactive, market oriented modern learning atmosphere and by highly sought after professionals who are either working in the oil and gas sector or have been trained in various aspects that suite the course units involved. On successful completion of this programme, the student shall be awarded a Bachelor of Science in Oil and Gas Accounting.
									</p>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">Duration of the programme</p>
										<p className="my-4">The program will take a maximum of three years. Each year has two learning semesters.</p>
										<p className="my-4" style={{fontWeight: '500'}}><b>Admission Requirements</b></p>
										<p className="my-4">Direct Entry</p>
											<p className="my-4">At least two principal passes in the Uganda certificate of Education (UACE) or its equivalent and at least a credit in accounts, mathematics, at O-level.</p>
											<p className="my-4">Diploma</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any Diploma from a recognized University, but applicants with diplomas in business studies and accounting will have added advantage.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Preference/exemption might be accorded to applicants with good diplomas in accounting and oil and gas training i.e. applicants might be exempted from offering similar courses or modules attended elsewhere prior to joining Victoria University</li>
											</ul>
											</p>
											<p className="my-4">Credit transfer from other Universities</p>
											<p className="my-4">There will be a possibility of credit transfer from other Universities. The formula will be worked out accordingly
											</p>
											<p>
												<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
													<span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
													<span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Diploma in Banking and Finance<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<p className="my-4" style={{fontWeight: '600'}}>Programme Description</p>
										<p className="my-4">The Diploma in Banking and Finance (DBF) Program is a two-year full time; day, evening and weekend programmes of intensive study for learners wishing to earn a Banking and Finance diploma from Victoria University. This diploma is appropriate for learners who want to acquire extensive skills and knowledge in banking and non-banking financial institutions. The design of the programmes is intended to transform learners to graduates with a capacity to solve complex business problems with enormous creativity and innovation. The blend of the content will expose the learner to international banking outlook but with particular focus on Ugandan banking and finance industry.</p>
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">Direct Entry</p>
										<p className="my-4">
										<p className="my-4">Candidates seeking admission on this scheme should have:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Sat the O’ Level examination (or equivalent) and obtained at least 5 passes; and or</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Obtained at least 1 Principal Pass and 2 subsidiary passes obtained at the same sitting or the equivalent</li>
											</ul>
										</p>
										<p className="my-4">The Weighting System is as follows:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Essential</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Mathematics and Economics as A’ level Subjects.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Relevant</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Third best done of all A’ level Subjects</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Desirable</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;General Paper</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Others</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;All Others</li>
											</ul>
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Diploma Holders scheme</p>
										<p className="my-4">A candidate must hold a good diploma in any discipline from a recognized institution
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Professional Qualification</p>
										<p className="my-4">Candidates who completed level one of any professional programme will also be eligible.
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Mature Age scheme.</p>
										<p className="my-4">Passed mature age entrance examinations.
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Admission to the Second Year (Transfer of Credits)</p>
										<p className="my-4">A candidate may be admitted to the second year of studies under the following conditions: <br/><br/>Admission other than to the first year of the program shall require a special resolution of the Faculty Board and permission of the Senate. The department will work out all appropriate Credit transfers, which shall not exceed 40% of the minimum diploma Credit units.  Persons holding a good diploma with at least a second class lower division, from a recognized institution can be admitted to 2nd year, with the provision that they will be required to take some Modules from the 1st year that the Faculty Board will have identified and deemed mandatory.
										</p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
													<span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Diploma In Human Resource Management <span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<p className="my-4" style={{fontWeight: '600'}}>Programme Description</p>
										<p className="my-4">Human Resource Management is a strategic and coherent approach to the management of an organization’s most valued assets, the people working in organizations, individually and collectively to contribute to the achievement of organizational goals.  Application of competencies in Human Resource Management is essential for survival of any organization.
										The programme is intended to familiarize students with the cases, theories and practices that illustrate new developments in Human Resource Management. The course shall enable learners to acquire competencies in attracting and selecting the best employees at the right time in the right place, motivating, and monitoring performance for effective competitiveness to the organization.
										</p>
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">Direct Entry</p>
										<p className="my-4">
										<p className="my-4">Candidates seeking admission on this scheme should have:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Sat the O’ Level examination (or equivalent) and obtained at least 5 passes; and or</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Obtained at least 1 Principal Pass and 2 subsidiary passes obtained at the same sitting or the equivalent</li>
											</ul>
										</p>
										<p className="my-4">The Weighting System is as follows:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Essential</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Two best done of All A’ level Subjects or five O passes</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Relevant</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Third best done of All A’ level Subjects</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Desirable</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;General Paper</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<b style={{fontWeight: '600'}}>Others</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;All Others</li>
											</ul>
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Diploma Holders scheme</p>
										<p className="my-4">A candidate must hold a good diploma in any discipline from a recognized institution
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Professional Qualification</p>
										<p className="my-4">Candidates who completed level one of any professional programme will also be eligible.
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Mature Age scheme.</p>
										<p className="my-4">Passed mature age entrance examinations.
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Admission to the Second Year (Transfer of Credits)</p>
										<p className="my-4">A candidate may be admitted to the second year of studies under the following conditions: <br/><br/>Admission other than to the first year of the program shall require a special resolution of the Faculty Board and permission of the Senate. The department will work out all appropriate Credit transfers, which shall not exceed 40% of the minimum diploma Credit units.  Persons holding a good diploma with at least a second class lower division, from a recognized institution can be admitted to 2nd year, with the provision that they will be required to take some Modules from the 1st year that the Faculty Board will have identified and deemed mandatory.
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Duration of the Programme</p>
										<p className="my-4">The Diploma shall normally extend over a period of two years.</p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
													<span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
							</ul>
						</div>
					</div>
					<div className="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please ensure to review the specific requirements for the undergraduate or graduate program you are applying for carefully before submitting your final application.</td>
							</tr>
						</table>
					</div>	
				</div>
			</div>
		</div>
	</section>
	<section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5">
				<div className="welcome-grids row">
					<div className="col-lg-12 welcome-image">
						<h6 className="hny-title" style={{fontSize: '38px', color: '#003d5e', fontWeight: '600'}}>Faculty of Humanities And Social Sciences</h6>
						<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
							<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Diploma in Public Administration<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<p className="my-4">
									The study of Public Administration has roots way back in 1887 when it started being a specific field of study. The Egyptians and Greeks organized public affairs by office, and the principal officeholders. These were regarded as being principally responsible for administering justice, maintaining law and order, and providing plenty. These are key principles relevant but still inadequate in many institutions today. Public Administration is closely linked with Global Sustainable Development Goal Number Sixteen. This goal considers Peace, Justice and Strong Institutions as key ingredients that humankind requires. This calls for the need to train and skill public administrators that can promote and defend such noble goal. The program will prepare students for administrative and management careers with not only local, state or federal government agencies, but also non-profit organizations. Implementing public programs and managing the people who are involved with those programs is one of the core functions of public administration.
									</p>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4" style={{fontWeight: '500'}}><b>Admission Requirements</b></p>
										<p className="my-4">In line with Victoria university policy of offering quality education, the department admits candidates to Diploma in Public Administration programme who are in the following category:</p>
										<p className="my-4">Direct Entry</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;UCE & UACE Certificate with 1 Principal Pass (Ugandans)</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp; KCSE holders must have a minimum grade of C+ and above. OR ACE, 'GCE or A-levels' applicants must have at least 1 principal Pass or its equivalent. (Kenyans)</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;TCE & TACE Certificate with at least 1 Principal Pass (Tanzanians)</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Qualifications that are recognized for University entry in their respective countries, these will always be vetted by the NCHE. (Other Nationals)</li>
											</ul>
											</p>
											<p className="my-4">Diploma</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Related Diploma from a recognized institution of Higher Learning</li>
											</ul>
											</p>
										<p className="my-4" style={{fontWeight: '500'}}>Duration of th programme</p>
											<p className="my-4">The Diploma in Public Administration shall extend to a period of two years over a period of four semesters. Each Semester will last seventeen weeks.
											</p>
											<p>
												<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
													<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
													<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Master of Arts in Diplomacy and Global Studies<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<p className="my-4">In line with Victoria university policy of offering quality education, the department admits candidates to master’s degree programme who possess at least one of the following:</p>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">Duration of the programme</p>
										<p className="my-4">The program will take a maximum of three years. Each year has two learning semesters.</p>
										<p className="my-4" style={{fontWeight: '500'}}><b>Admission Requirements</b></p>
										<p className="my-4">Direct Entry</p>
											<p className="my-4">At least two principal passes in the Uganda certificate of Education (UACE) or its equivalent and at least a credit in accounts, mathematics, at O-level.</p>
											<p className="my-4">Diploma</p>
											<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A good first degree from Victoria University, Uganda, or</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any accredited university in Uganda in a similar program with at least a second class.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any recognized international degree in Diplomacy and Global studies or related field with at least second-class honors or its equivalent.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Applicants with a PGD in diplomacy and global studies or any other closely related field.</li>
											</ul>
											</p>
											<p className="my-4" style={{fontWeight: '500'}}>Duration of th programme</p>
											<p className="my-4">The Master of Arts in Diplomacy and Global studies shall extend to over a period of four semesters
											</p>
											<p>
												<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
													<span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to transfer credit</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
													<span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Master of Arts in Mass Communication <span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<p className="my-4" style={{fontWeight: '600'}}>Programme Description</p>
										<p className="my-4">The history of mass communication can be traced back to a time long before the invention of traditional mass communication tools- radio, television and newspaper. News sheets appeared as far back as 100BC and allowed for the communication of messages to a relatively larger audience for the time. However, media that allows messages to reach a truly mass audience were only developed at around 500 years ago. The invention of the printing press by Gutenberg at around 1440 completely revolutionized the printing press and basically changed society in ways no one could have thought possible. Today the internet has caused another major shift in the way people communicate and is shaping the entire media industry as well.</p>
										<p className="my-4">
											The media industry in Uganda is rapidly growing and expanding. This is attributed to an increasing appreciation for communication, news and information. This expansion is also greatly influenced by innovations in the media industry thanks to the internet, readily available and affordable technology and of course the increasing proportion of the middle class in Africa and Uganda specifically.
										</p>
										<p className="my-4">
										Mass communication deals with how messages are created/produced and then disseminated on a large scale. This field can further be broken down into the following broad industries- print, radio, television, public relations, advertising and applied communication. At master’s level, students are not just concerned with the production and dissemination of information, but also go into great details on the development and application of theories, understanding the role of media in society and developing research that helps position the media industry better to remain relevant in a digital world
										</p>
										<p className="my-4">If leveraged properly, the media can act as a catalyst for developmental change. It is therefore important that a holistic approach is taken when teaching the programme, so that through the teaching of Mass Communication at this level, socio-economic issues, such as climate change, gender equality, health communication and many more are properly addressed.</p>
										<p className="my-4">In view of this, it has become pertinent to provide the much-needed human resource to drive this industry and to ensure that the media industry in Uganda and Africa remains vibrant and competitive.</p>
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">
										In line with the university’s policy of offering quality education, the department admits candidates to master’s degree programme who possess at least one of the following:
										</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A good first degree from Victoria University, Uganda, or</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any accredited university in Uganda in a similar programme with at least a second class degree.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Any recognized international degree in Mass Communication or related field with at least second-class honors or its equivalent.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Applicants with a PGD in mass communication, media studies or any other closely related field are also considered.</li>
											</ul>
											<p className="my-4" style={{fontWeight: '500'}}>Duration of the programme</p>
											<p className="my-4">The Master of Arts in Mass Communication shall extend to over a period of four semesters.
											</p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
													<span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Bachelors Of Social Work (B.Sw) Programme<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<p className="my-4" style={{fontWeight: '600'}}>Programme Description</p>
										<p className="my-4">Social work is a practice based profession and an academic discipline that promotes social change and development, while addressing life challenges and enhances the wellbeing of the people. Given the global health challenges, this programme is designed to enhance innovativeness in delivery of developmental social welfare and wellbeing as well as harmonizing therapeutic, preventive, rehabilitative, curative and promotive aspects of social work.
										</p>
										<p className="my-4">
										In this view, this particular social work programme is designed to prepare competent, pragmatic professionals, ethical and environment aware social work human resources who can work with individual family groups, organization and or communities in a variety of practice settings to promote social functioning.  Students will learn skills including problem solving, engagement, assessment, intervention and evaluation. They will acquire requisite competencies in planning, advocacy, policy, critical thinking and research/ evidence based practice and apply them at Micro, Meso and macro levels while challenging and addressing societal problems / concerns in the context of aspirations of Ugandan Nation, Africa and beyond. 
										</p>
										<p className="my-4">The programme attempts to meet the standards set by international Association of Schools of Social work (ISSW), the international federation of Social workers (IFSW) and has been made in close consultations with the National Association of Social workers of Uganda (NASWU).</p>
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Admission Requirements</h6>
										<p className="my-4">In line with the university’s policy of offering quality education, the department admits candidates to B.SW programme who possess the following;</p>
										<p className="my-4">Direct Entry</p>
										<p className="my-4">
										<p className="my-4">Admission through Direct Entry Scheme requires the following;</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Sat the O’ Level examination (or equivalent) and obtained at least 5 passes; and or</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Obtained at least 1 Principal Pass and 2 subsidiary passes obtained at the same sitting or the equivalent</li>
											</ul>
										</p>
										<p className="my-4">The Weighting System is as follows:</p>
										<p className="my-4">
											<ul style={{listStyle: 'none'}}>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;‘O' Level Certificate of Education (UCE) with at least five Passes or its equivalent.</li>
												<li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;At least two `A' Level principal passes at the same sitting of the U.A.C.E. (or its equivalent).</li>
											</ul>
										</p>
										<p className="my-4" style={{fontWeight: '600'}}>Duration of the Programme</p>
										<p className="my-4">The Diploma shall normally extend over a period of two years.</p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
													<span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
							</ul>
						</div>
					</div>
					<div className="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please ensure to review the specific requirements for the undergraduate or graduate program you are applying for carefully before submitting your final application.</td>
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