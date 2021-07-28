import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom'

class CourseOffering extends Component{
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
                    <Link to="/"><span className="underline" style={{color: "#CCC"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/admissions"><span className="underline" style={{color: "#EEE"}}>
					Admissions
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Course Offering</span>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Transfer Credit</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '22px'}}>This serves as the basis for exemption and credit transfers for all students who qualify for exemption and transfer of credits.
                    </p>
                    <p className="my-4" style={{fontSize: '22px'}}>It is recognized that many students wishing to join Victoria University (VU) are students with transcripts and qualifications from other universities and from different levels. Unfortunately, some students are denied admissions due to the absence of recognized measures to help them assimilate their points and apply for admission to the appropriate programs implemented in the University.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-features-1">
	<div className="features-1-mian py-5">
		<div className="container">
			
		</div>
		<div className="container py-lg-5">
			<div className="row grids-innf my-lg-5">
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-vcard" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Credit for previous education</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-calculator" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Credit for work and life experiences</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-money" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Challenge for credit</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-credit-card" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Get credit at your school from studying at VU</a></h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Requirements for exemption</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>We have lots of options to help you get credit for your previous post-secondary experience, including individual course assessment, block transfer, post-diploma, or second degrees. First, you should check if your previous education is within the right time limits to be considered <span className="fa fa-external-link"></span> for transfer credits. After that, our transfer credit assessment tool can give you an idea of how your previous courses might transfer even if you did not complete a diploma or degree.</p>
                    <p>
                        <Link className="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                            <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;
                            </span><span className="underline">Assess my transfer credits</span>
                        </Link>
                    </p>
                    <br/>
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize: '30px'}}>Academic qualifications</h6>
                    <br/>
                    <p className="my-4" style={{fontWeight: '600', fontSize: '24px'}}>Undergraduate</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>To be exempted at an undergraduate degree programme, the following criteria have to be fulfilled:</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A student should provide equated and certified results in English language from the authorized regulator, if the awarding institution is from an institution outside the jurisdiction of NCHE.  Otherwise authentication of the validity of the documents can always be established by Victoria University experts assigned.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A student should have done a 2-year Diploma Programme in the relevant field and scored a minimum grade set for the first year modules/course units of the programme for which the exemption is being performed.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The Diploma should have been obtained from an institution recognized by National Council for Higher Education</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Victoria University diploma graduates who wish to exempt programme units should have obtained at least a lower second-class Diploma in the relevant field.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A student should have passed the relevant Programme with 60% and above.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Exemptions shall be available to only registered students</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Core modules for a programme shall not be exempted such as Research Methodology, Dissertation, and core (fundamental/essential) modules for a specific Programme Education. (NCHE).</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A lump sum of UGX 200,000 shall be charged as an administrative cost for each student’s exemption regardless of the number of modules exempted.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Up to a maximum of 12 Programme units/ modules for 3-year Programmes and 15 Programme units for 4- and 5-year Programmes shall be exempted for the applicant.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;There shall be no exemption what so ever for students progressing from the Foundation program or Higher Certificate of Education.</li><br/>
                        </ul>
                    </p>
                    <p className="my-4" style={{fontWeight: '600', fontSize: '24px'}}>Masters</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>Victoria University shall exempt Programme units for students admitted at master's level with a relevant post graduate diploma. To be exempted Programme units at masters, the following criteria have to be fulfilled:</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A student should have passed the relevant Programme unit with 60% and above.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A student should be from an institution recognized by NCHE.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A student should not have exceeded 5 years after her/his previous qualification.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Allows a maximum of 6 Programme units in case of exemptions.</li><br/>
                        </ul>
                    </p>
                    <p className="my-4" style={{fontSize: '30px'}}>Period of Previous Training</p>
                    <p className="my-4">This should not be more than 5 years after acquiring the qualification that is being considered for exemption. The degree, diploma and certificate should be relevant to the field a student intends to undertake</p>
                    <p className="my-4" style={{fontSize: '30px'}}>Experience</p>
                    <p className="my-4">Minimum working experience of two years after completion of the Programme in a relevant field. e.g. Nursing, midwifery, Social work practice in Primary agencies, auditing, etc. would be an added advantage.</p>
                    <p className="my-4" style={{fontSize: '30px'}}>Specification of previous training institution.</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>This shall be a University and any other recognized and licensed Institution of Higher Learning.</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Exemption of Programme units is optional.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;It should only be the Senate or Senate standing committee to exempt a student either from subjects, a semester, or a whole year of study,</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Exemption will be a process considered on merit, case by case. When one has been admitted and registered and he/she needs exemption, He/She should write an application to the Academic Registrar.  All approved exemption cases shall receive confirmation from the Academic Registrar in writing including the exemption fee charges.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;A student who applies for exemptions should fill in an exemption form in Triplicate indicating the module(s), score(s) and grade(s). Results should be verified by both the Head of Department who makes a recommendation to the Dean of Faculty, who should sign that form and submit it to the Academic Registrar's Office</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The Academic Registrar should then compile a list of all students who are recommended for exemption per Faculty per semester for the approval of Senate.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Fully complete transcript and certificates</li><br/>
                        </ul>
                    </p>
                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Credit Transfer</h6>
                    <p className="my-4">Through the process of credit transfer, a student will earn the credit value of-the transferred unit. For credit transfer from diploma or degree programmes of other institutions, credit hours with grades will be transferred.</p>
                    <p className="my-4" style={{fontSize: '30px'}}>Maximum permitted credit transfer</p>
                    <p className="my-4">Undergraduate students are therefore expected to spend two full-time-years at Victoria University. Any exemptions to this rule of maximum credit must be approved by the Senate or the Academic Registrar</p>
                    <p className="my-4" style={{fontSize: '30px'}}>Process of Admission (Credit Transfers)</p>
                    <p className="my-4">Victoria University shall admit students from other (recognized) institutions on normal degree or diploma programs. Students applying for credit transfers should meet the following requirements:</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Prospective students shall present a release letter from the sending institution and previous academic documents.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Apply to Academic Registrar through the Faculty Dean</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Should have passed all subjects for which s/he is seeking transfer of credits</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;No credit transfer will be effected in the final year of study</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;The procedure to be followed will be based on NCHE guidelines.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Should be a registered student</li><br/>
                        </ul>
                    </p>
                    <p className="my-4" style={{fontSize: '30px'}}>Exemption Fees Structure</p>
                    <p className="my-4">Students should pay a fee to be determined by University Council for each exempted programme unit of study. The current charges shall be a lump sum administrative fee of UGX 200,000. Terms and conditions apply</p>
                    <br/>
                </div>
            </div>
            {/* <div className="col-lg-2 mb-lg-0 mb-5">
                <p className="my-4">
                    Victoria University
                    Enrolment Services
                    Office of the Registrar
                    1 University Drive
                    Victoria, AB T9S 3A3
                </p>
            </div> */}
            {/* <table style={{width: '100%', height: '100%'}}>
                <tr>
                    <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                    <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Current credit evaluation processing time: 4 weeks after all documents are received. However, depending on individual circumstances and capacity it can take up to 12 weeks to complete your evaluation.</td>
                </tr>
            </table> */}
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
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous post-secondary courses<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate studentsa</p>
                                        <p className="my-4"><span className="fa fa-clock-o"></span> Apply anytime – no deadline!</p>
                                        <p className="my-4">You can apply to VU anytime without a deadline. All undergraduate programs enrol students year round. Just keep in mind that after your program application gets approved you will still need to register for courses to get started.</p>
                                        <p><Link className="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                            <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;
                                            </span><span className="underline">Learn more about undergraduate applications</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous diploma or related credentials<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p className="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p><Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                                            <span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;
                                            </span><span className="underline">Learn how to register for courses</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous undergraduate courses<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p className="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p><Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                                            <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span className="underline">Learn how to register for courses</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous foreign credentials<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p className="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p>
                                        <Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
                                            <span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;
                                            </span><span className="underline">Learn how to register for courses</span>
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
{/* <section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Get credit for work & life experience</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Lessons learned outside the classroom are relevant and valued at Victoria University. Why spend time and money to study something you already know when Prior Learning Assessment and Recognition (PLAR) <span className="fa fa-external-link"></span> let you focus on new learning?</p>
                    <p className="my-4">A successful PLAR assessment will award you credit toward your VU undergraduate degree or certificate. This means:</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;fewer courses to take</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;cost savings in course fees</li>
                        </ul>
                    </p>
                    <p className="my-4">To get the most benefit out of your past experience an assigned mentor will provide essential guidance throughout the development of your PLAR portfolio.</p>
                    <p className="my-4">You want to know if PLAR is an option for you? Please make sure to carefully read through all assessment details:</p>
                    <p><Link className="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                        <span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00',}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span className="underline">How does PLAR work?</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> 
<hr style={{width: '90%'}}/>*/}
{/* <section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Challenge a course for credit</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Everyone comes to Victoria University with different life and educational experiences. This is why many of our courses have a challenge for credit option. Challenging a course for credit allows you to skip a course by proving that you already understand the course content.</p>
                </div>
            </div>
            <table style={{width: '100%', height: '100%'}}>
                <tr>
                    <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                    <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please note: Graduate courses cannot be challenged for credit.</td>
                </tr>
            </table>
        </div>
    </div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>What courses can I challenge for credit?</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Most undergraduate courses above the 100 (preparatory) level have a challenge for credit option. There are, however, some specific circumstances where you can’t challenge an undergraduate course for credit, even if that option is normally available. To find out if a particular course offers challenge for credit, please see the information box at the top of the course page.</p>
                    <p><Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
                        <span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;View challenge for credit exceptions</span>
                        </Link>
                    </p>
                    <p className="my-4">Good to know:</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;There is a non-refundable challenge for credit fee <span className="fa fa-external-link"></span></li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;You must get approval to challenge a course from the faculty member (or designate) who is responsible for the course.</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Courses successfully challenged for credit will not count toward your residency requirement (the total number of VU credits that must be taken within your program).</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;You have only one opportunity to challenge a course. If you don’t complete or fail a challenge, you must register in the course and pass to get credit.</li>
                        </ul>
                    </p>
                    <p className="my-4">Got more questions about how to challenge a course? Find more information in our Undergraduate Calendar <span className="fa fa-external-link"></span></p>
                    <p><Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner15", "iconner16")} onMouseOut={this.change_icon2.bind(this, "iconner15", "iconner16")}>
                        <span className="lohny-2"><span  id="iconner15" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner16" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Submit your challenge for credit form today</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr style={{width: '90%'}}/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize:'40px'}}>Transfer VU credit to another institution</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Many  Ugandan post-secondaries have transfer agreements with Victoria University that grant credit for most of our courses. However, we can’t guarantee acceptance of your VU credit. The decision to accept transfer courses is made by the institution you’re applying to, and you should contact them with any questions or concerns.</p>
                    <p><Link className="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner17", "iconner18")} onMouseOut={this.change_icon2.bind(this, "iconner17", "iconner18")}>
                        <span className="lohny-2"><span  id="iconner17" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner18" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span className="underline">Learn more about transferring VU courses</span>
                        </Link>
                    </p>
                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Visiting students</h6>
                    <p className="my-4">If you’re enrolled in a program at another university and want to take an VU course for one of your program requirements, you'll need to enrol as a non-program student. Once you have become a student, you can begin registering for courses right away.</p>
                    <p className="my-4">We encourage you to get a letter of permission from your school to ensure your VU credits will transfer to your program. This is for your peace of mind only – you don’t need to send us this letter.</p>
                    <p className="my-4">Once you've completed your VU course, you will also need to send an VU transcript to your school. You can do this online through myVU or by submitting a Transcript Request Form by fax or mail. <span className="fa fa-file-pdf-o"></span></p>
                    <p><Link className="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner19", "iconner20")} onMouseOut={this.change_icon2.bind(this, "iconner19", "iconner20")}>
                        <span className="lohny-2"><span  id="iconner19" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00',}}></span><span id="iconner20" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span className="underline">Apply as a visiting student</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> */}
                <GetInfo />
                <Footer />
            </React.Fragment>
        )
    }
}

export default CourseOffering;