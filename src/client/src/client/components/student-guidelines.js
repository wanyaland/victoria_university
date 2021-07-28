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
					<span style={{color: '#EEE'}}>/ International Student Guidelines</span>
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
						<h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>International Student Guidelines</h6>
						<br/>
						<p className="my-4" style={{fontSize: '32px'}}>Make the most of your experience at Victoria University </p>
						<p className="mb-4" style={{fontSize: '18px'}}>Victoria University has a student community with over 45 Nationalities</p>
                        <p className="my-4">Special Services Offered to international students:</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Visa processing</p>
						<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Coordinating accommodation</p>
						<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Counselling and Guidance</p>
						<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Assist in Verification of Academic documents to check eligibility</p>
						<p className="my-4">Each year Victoria University welcomes students from more than 45 countries. These students have access to free advice , support and assistance</p>
						<p className="my-4" style={{fontSize: '32px'}}>Our international students center provides some of the following services.:</p>
						<p className="my-4">Special Services Offered to international students:</p>
                        <p className="my-4">Advice on Visas and Entry to Uganda for students and visiting family as well as assisting students in obtaining a rate at the Ministry of internal affairs.</p>
                        <p className="my-4">Students from countries outside East Africa will normally require a student ( General) Visa in order to study in Uganda. To apply for this Visa students will require a confirmation of acceptance for study (CAS) and also appropriate evidence of their funding.</p>
						<p className="my-4">A (CAS) will be issued by the University when you accept our Offer , meet any conditions mentioned in the offer, and pay a deposit. This deposit is offset against your tuition fees and if you have an official sponsor , for example your government or an international scholarship agency , you will not need to pay this deposit.</p>
						<p className="my-4">Instead , you should send a copy of your sponsorship letter to the University's finance office consideration. Our international welcome at the start of your first semester includes a special induction programme to guide you through your initial administrative tasks (such as applying for a bank account and providing a range of social activities to help you meet new friends. The international student center also coordinates activities and events for international students ,providing exciting and interesting opportunities to learn about life in Uganda and kampala in Particular.</p>
						<p className="my-4" style={{fontSize: '32px'}}>YOUR SECURITY AND SAFETY WITHIN UGANDA</p>
						<p className="my-4">Safety and security is always a big issue everywhere in Africa and the World. Uganda is one of the safest countries in Africa and Kampala is one of the safest capitals. You can move with ease day and night but precautions have to be taken late at night.</p>
						<p className="my-4">Simply follow safe practices and you will enjoy your safety in the pearl of Africa</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    {/* <section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5">
				<div className="welcome-grids row">
					<div className="col-lg-12 welcome-image">
						<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
							<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Studying outside Uganda<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p className="my-4">If you are not a Ugandan citizen or permanent resident of Uganda, and you plan to stay in your home country while completing your Victoria University program, you can follow the regular application process. There will be a onetime, non-refundable CDN fee once you submit your application. For fee information, please visit Academic-related fees .<span className="fa fa-external-link"></span></p>
											<p><Link className="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
												<span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">I want to become an VU undergraduate student</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
												<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">I want to become a VU undergraduate student</span>
												</Link>
											</p>
											<p>
												<Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
												<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">I want to register for courses</span>
												</Link>
											</p>
                                            <p className="my-4">You should register for your courses at least one month before your intended start date. Also, you should note that students studying internationally may have different timelines for:</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Processing exam requests&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Marking&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Regular mail correspondence&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Read our service standards&nbsp;&nbsp;</p>
										</div>
									</div>	
									<br/>
								</div>
								<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Studying in Uganda on study permit<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p className="my-4">If you plan to come to Ugandaon a study permit, our offerings are limited to students in specific circumstances. VU does not offer any programs that meet IRCC regulations for long-term study permits and unfortunately there’s no option to get a study permit to take an online program in Ugandaunder IRCC regulations.</p>
                                            <p className="my-4">You must enrol in an eligible course or program that is held in a classroom if you plan to live in Uganda on a study permit. Short-term study permits will be issued only for the required in-person components of an otherwise online-only degree. This includes graduate students required to be in Ugandato complete research under the supervision of VU faculty.</p>
                                            <p className="my-4">The following undergraduate and graduate programs have practicums, residencies or field placements that require short-term stays in Uganda:</p>
											<p className="my-4" style={{fontSize: '18px'}}>Undergraduate</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;University Certificate in Heritage Resources Management&nbsp;&nbsp;</p>
                                            <p className="my-4" style={{fontSize: '18px'}}>Graduate</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Master of Counselling&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Master of Nursing: Nurse Practitioner&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Post-Baccalaureate Diploma in Heritage Resources Management&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Post-Baccalaureate Diploma in Counselling&nbsp;&nbsp;</p>
                                            <p className="my-4">Study permits will be issued for the length of time you are required to be in Ugandaonly and are issued by Immigration, Refugees and Citizenship Uganda(IRCC). You must meet eligibility requirements in order to get a study permit. All questions about applying for study permits should be directed to IRCC.</p>
                                            <p className="my-4">Apply using the online application form.<span className="fa fa-external-link"></span></p>
                                            <p className="my-4">For more guidance on short-term study permits, please contact international@vu.ac.ug.</p>
										</div>
									</div>	
									<br/>
								</div>
                                <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Graduate Admission Requirements<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p className="my-4">To apply for an Victoria University graduate program you must have an undergraduate degree. Doctorate programs require a master’s degree to qualify for admission. Requirements for graduate programs vary and are listed on each program’s website. You can take some graduate courses without being admitted to the full program if you meet the non-program student requirements for said program. Requirements for graduate programs are listed on each program’s website.</p>
											<p><Link className="logo-2" to="/requirements" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
												<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Find all your requirements for your graduate program</span>
												</Link>
											</p>
											<p><Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
												<span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">How to apply</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
                                <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Studying in Uganda on a work or visitor's permit<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p className="my-4">According to IRCC, if you are in Ugandaon a work or visitors permit, you can take an online course or program – even if your permit says you can’t attend school. Apply using the online application form.<span className="fa fa-external-link"></span></p>
										</div>
									</div>	
									<br/>
								</div>
                                <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;English language requirements for International students<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p className="my-4">If your native language is not English, you must demonstrate English Language Proficiency (ELP) to take Victoria University courses. VU accepts the following as proof of English Language Proficiency:</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Completion of high school in an English-speaking country.&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Completion of 15 university credits from a recognized English-speaking university, or 1 year at a non-university post-secondary institution with an overall average of 75% (GPA of 3.0).&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 6 on the International English Language Testing System (IELTS).&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 60% on the Ugandan Academic English Language Assessment (CAEL).&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 80 on the Michigan English Language Battery (MELAB) test.&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 59 on the Pearson Test of English (PTE).&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 213 on the computer- or paper-based Test of English as a Foreign Language (TOEFL PBT), with 4.5 on the Test of Written English (TWE).&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Minimum score of 80 with an essay score of 20 on the Internet-based Test of English as a Foreign Language (TOEFL iBT).&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Successful completion of VU’s English Language Proficiency Program <span className="fa fa-external-link"></span> with an overall average of 75% (GPA of 3.0).&nbsp;&nbsp;</p>
                                            <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;See the English Language Proficiency Requirements Policy <span className="fa fa-file-pdf-o"></span> for further details.&nbsp;&nbsp;</p>
                                            <p className="my-4">AU’s graduate programs have slightly different ELP requirements. In addition to the general graduate ELP requirements, individual programs may also have their own rules.</p>
											<p><Link className="logo-2" to="/prog-index" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
												<span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Find your graduate program</span>
												</Link>
											</p>
										</div>
									</div>	
									<br/>
								</div>
                                <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Transfer credit from previous non-Ugandan education<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
								<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div className="col-lg-12 welcome-image">
										<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p className="my-4">If you have credentials from an institution outside of Ugandaor the United States and you would like VU to consider them for transfer credit, you need to have an assessment done through an international assessment agency.</p>
											<p>
												<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
												<span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Transfer credit for foreign credentials</span>
												</Link>
											</p>
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
	</section> */}
                <AskInfo />
                <GetInfo />
                <Footer />
            </React.Fragment>
        )
    }
}

export default StudentGuidelines;