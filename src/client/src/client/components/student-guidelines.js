import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import AskInfo from './ask-info';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom';

class StudentGuidelines extends Component{
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
                <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
		<div class="hny-top-menu">
			<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
				<div class="container-fluid">
					<div class="">
						<Link to="/"><span className="underline" style={{color: "#CCC"}}>
					Victoria University 
					</span></Link>&nbsp;
					<Link to="/admissions"><span className="underline" style={{color: "#CCC"}}>
					/ Admissions
					</span></Link>&nbsp;
					<span style={{color: '#CCC'}}>/ International Student Guidelines</span>
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
						<h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>International Student Guidelines</h6>
						<br/>
						<p class="my-4" style={{fontSize: '22px'}}>Aside from providing high-level accredited online education, at Victoria University we pride ourselves on flexibility, accessibility and outstanding support to help all of our students around the world succeed.</p>
						<p class="mb-4" style={{fontSize: '18px'}}>For international students, application requirements, deadlines and processes vary depending on whether you decide to study in your home country or from within Canada. Be sure to review the English language requirements section and the Transfer Credit section, as these apply to all our international applicants.</p>
                        <p class="my-4">To apply for a graduate program at Victoria University as international student, please consult the program’s website since admission requirements, deadlines and English Language Proficiency requirements are different for each graduate program. Browse our list of graduate programs.</p>
                        <p class="my-4">For further enrolment information, please contact the faculty or centre that offers your program by calling (+256) 200 405 433 (international) or (+256) 200 405 433 (toll-free in Uganda.)</p>
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
							<ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Studying outside Uganda<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">If you are not a Canadian citizen or permanent resident of Canada, and you plan to stay in your home country while completing your Victoria University program, you can follow the regular application process. There will be a onetime, non-refundable CDN fee once you submit your application. For fee information, please visit Academic-related fees .<span class="fa fa-external-link"></span></p>
											<p><Link class="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
												<span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">I want to become an VU undergraduate student</span>
												</Link>
											</p>
											<p>
												<Link class="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
												<span class="lohny-2"><span  id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">I want to become a VU undergraduate student</span>
												</Link>
											</p>
											<p>
												<Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
												<span class="lohny-2"><span  id="iconner5" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">I want to register for courses</span>
												</Link>
											</p>
                                            <p class="my-4">You should register for your courses at least one month before your intended start date. Also, you should note that students studying internationally may have different timelines for:</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Processing exam requests&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Marking&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Regular mail correspondence&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Read our service standards&nbsp;&nbsp;</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Studying in Uganda on study permit<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">If you plan to come to Canada on a study permit, our offerings are limited to students in specific circumstances. VU does not offer any programs that meet IRCC regulations for long-term study permits and unfortunately there’s no option to get a study permit to take an online program in Canada under IRCC regulations.</p>
                                            <p class="my-4">You must enrol in an eligible course or program that is held in a classroom if you plan to live in Uganda on a study permit. Short-term study permits will be issued only for the required in-person components of an otherwise online-only degree. This includes graduate students required to be in Canada to complete research under the supervision of VU faculty.</p>
                                            <p class="my-4">The following undergraduate and graduate programs have practicums, residencies or field placements that require short-term stays in Canada:</p>
											<p class="my-4" style={{fontSize: '18px'}}>Undergraduate</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;University Certificate in Heritage Resources Management&nbsp;&nbsp;</p>
                                            <p class="my-4" style={{fontSize: '18px'}}>Graduate</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Master of Counselling&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Master of Nursing: Nurse Practitioner&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Post-Baccalaureate Diploma in Heritage Resources Management&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Post-Baccalaureate Diploma in Counselling&nbsp;&nbsp;</p>
                                            <p class="my-4">Study permits will be issued for the length of time you are required to be in Canada only and are issued by Immigration, Refugees and Citizenship Canada (IRCC). You must meet eligibility requirements in order to get a study permit. All questions about applying for study permits should be directed to IRCC.</p>
                                            <p class="my-4">Apply using the online application form.<span class="fa fa-external-link"></span></p>
                                            <p class="my-4">For more guidance on short-term study permits, please contact international@vu.ac.ug.</p>
										</div>
									</div>	
									<br/>
								</div>
                                <li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Graduate Admission Requirements<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">To apply for an Victoria University graduate program you must have an undergraduate degree. Doctorate programs require a master’s degree to qualify for admission. Requirements for graduate programs vary and are listed on each program’s website. You can take some graduate courses without being admitted to the full program if you meet the non-program student requirements for said program. Requirements for graduate programs are listed on each program’s website.</p>
											<p><Link class="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
												<span class="lohny-2"><span  id="iconner7" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">Find all your requirements for your graduate program</span>
												</Link>
											</p>
											<p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
												<span class="lohny-2"><span  id="iconner9" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
                                <li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Studying in Uganda on a work or visitor's permit<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">According to IRCC, if you are in Canada on a work or visitors permit, you can take an online course or program – even if your permit says you can’t attend school. Apply using the online application form.<span class="fa fa-external-link"></span></p>
										</div>
									</div>	
									<br/>
								</div>
                                <li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;English language requirements for International students<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">If your native language is not English, you must demonstrate English Language Proficiency (ELP) to take Victoria University courses. VU accepts the following as proof of English Language Proficiency:</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Completion of high school in an English-speaking country.&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Completion of 15 university credits from a recognized English-speaking university, or 1 year at a non-university post-secondary institution with an overall average of 75% (GPA of 3.0).&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 6 on the International English Language Testing System (IELTS).&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 60% on the Canadian Academic English Language Assessment (CAEL).&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 80 on the Michigan English Language Battery (MELAB) test.&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 59 on the Pearson Test of English (PTE).&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 213 on the computer- or paper-based Test of English as a Foreign Language (TOEFL PBT), with 4.5 on the Test of Written English (TWE).&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 80 with an essay score of 20 on the Internet-based Test of English as a Foreign Language (TOEFL iBT).&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Successful completion of AU’s English Language Proficiency Program <span class="fa fa-external-link"></span> with an overall average of 75% (GPA of 3.0).&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;See the English Language Proficiency Requirements Policy <span class="fa fa-file-pdf-o"></span> for further details.&nbsp;&nbsp;</p>
                                            <p class="my-4">AU’s graduate programs have slightly different ELP requirements. In addition to the general graduate ELP requirements, individual programs may also have their own rules.</p>
											<p><Link class="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
												<span class="lohny-2"><span  id="iconner11" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span class="underline">Find your graduate program</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
                                <li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Transfer credit from previous non-Ugandan education<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">If you have credentials from an institution outside of Canada or the United States and you would like VU to consider them for transfer credit, you need to have an assessment done through an international assessment agency.</p>
											<p>
												<Link class="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
												<span class="lohny-2"><span  id="iconner13" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span class="underline">Transfer credit for foreign credentials</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
                                <li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Travel tips and frequently asked questions<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid;'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4"><b style={{fontSize:'18px', fontWeight: '600', color: 'orchid'}}>Q:</b>&nbsp;&nbsp;I want to take an online program. Can I get a study permit for entry into Canada?</p>
                                            <p class="my-4"><b style={{fontWeight: '600', color: 'orchid'}}>A:</b>&nbsp;&nbsp;No. Distance education (online) does not require you to be in Uganda. According to IRCC regulations, a study permit can’t be issued for distance education (online) courses or programs.</p>
                                            <p class="my-4">&nbsp;&nbsp;Online programs can be taken from anywhere in the world without ever having to travel to Uganda.</p>
                                            <p class="my-4"><b style={{fontSize:'18px', fontWeight: '600', color: 'orchid'}}>Q:</b>&nbsp;&nbsp;I already have a study permit. Can I change schools to take an online program at Victoria University?</p>
                                            <p class="my-4"><b style={{fontWeight: '600', color: 'orchid'}}>A:</b>&nbsp;&nbsp;No. If you change to an VU online program, you can’t maintain the conditions of your study permit according to IRCC regulations. You will not be able to renew, extend, or apply for a new study permit using an VU online program. To keep your study permit, you must be taking an in-person program.</p>
                                            <p class="my-4"><b style={{fontSize:'18px', fontWeight: '600', color: 'orchid'}}>Q:</b>&nbsp;&nbsp;Can I take an VU course while studying at another Canadian institution? How do I transfer those courses?</p>
                                            <p class="my-4"><b style={{fontWeight: '600', color: 'orchid'}}>A:</b>&nbsp;&nbsp;If you are an international student studying at another institution in Canada you can take VU courses and transfer them into your program. You need to follow the below process:</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Get a Letter of Permission <span class="fa fa-external-link"></span> from your home institution to ensure the VU course will transfer into your program.&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Apply using the online application form.<span class="fa fa-external-link"></span>&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Register for your courses through your myVU account <span class="fa fa-external-link"></span> You will have access to myVU once your application has been processed. You can also register using the paper course registration form.<span class="fa fa-file-pdf-o"></span>&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Use the Request Transcripts function in myVU <span class="fa fa-external-link"></span> to have your official VU transcript sent to your home university upon grade finalization.&nbsp;&nbsp;</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Post-Baccalaureate Diploma in Counselling&nbsp;&nbsp;</p>
                                            <p class="my-4"><b style={{fontSize:'18px', fontWeight: '600', color: 'orchid'}}>Q:</b>&nbsp;&nbsp;Where do I find my letter of acceptance to submit with my study permit application?</p>
                                            <p class="my-4"><b style={{fontWeight: '600', color: 'orchid'}}>A:</b>&nbsp;&nbsp;We will send your letter of acceptance when you are ready to begin the in-person part of your program. Please send an email to international@Victoriau.ca to request your letter. You may want to check IRCC’s application processing times to make sure you meet your course registration deadline. Letters of acceptance as required by IRCC are not provided to students enrolled in online programs.</p>
                                            <p class="my-4"><b style={{fontSize:'18px', fontWeight: '600', color: 'orchid'}}>Q:</b>&nbsp;&nbsp;Getting ready for your trip:</p>
                                            <p class="my-4"><b style={{fontWeight: '600', color: 'orchid'}}>A:</b>&nbsp;&nbsp;Since it will be several weeks before you may be eligible for Alberta Health Care coverage, it's imperative to buy travel insurance for your trip and the first weeks of your stay in Canada. Medical costs generally can get very expensive. That’s why it’s important to get health care coverage for your trip to Canada, and to make sure you have appropriate coverage while you’re here.</p>
                                            <p class="my-4">&emsp;Basic health care: If you are studying for 12 months or longer on-site in Alberta you qualify for the Alberta Health Care Insurance Plan (AHCIP). You need to apply for AHCIP within 90 days of your arrival in Alberta.</p>
                                            <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Learn about AHCIP for temporary residents of Alberta <span class="fa fa-external-link"></span>&nbsp;&nbsp;</p>
                                            <div class="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
                                                <table style={{width: '100%', height: '100%'}}>
                                                    <tr>
                                                        <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                        <td class="text-left" style={{backgroundColor: '#0077b5', textAlign:'center', color: '#FFF', padding: '20px'}}>
                                                            Please note that the Alberta Health Care Insurance Plan only covers some expenses. You may want to consider supplementary plans (see below) in case you need prescriptions or dental or eye care.</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <br/>
                                            <p class="my-4">Other AHCIP exclusions: If you are studying for less than 12 months on-site in Alberta, you need to buy health insurance to cover your journey and stay.</p>
                                            <p class="my-4">Supplementary plans: Several companies offer private health insurance. Search online for "health insurance plans Alberta."</p>
                                            <p class="my-4">Graduate students may be eligible for optional dental and prescription coverage through the Victoria University Graduate Students' Association. Undergraduate students should direct inquiries to the Victoria University Students' Union at ausu@ausu.org.</p>
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
                <AskInfo />
                <GetInfo />
                <Footer />
            </React.Fragment>
        )
    }
}

export default StudentGuidelines;