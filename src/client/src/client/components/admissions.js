import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Admissions extends Component{
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
		//const under = 'undergraduate'
        return(
            <React.Fragment>
            <BreadNavBar />
            <NavBar />
            <section className="w3l-apply-6">
					<div className=""  style={{}}>
						<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
							<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src="assets/images/admissions.jpg" alt="First slide" style={{filter: 'brightness(60%)'}}/>
									</div>
                                    <div className='banner-caption'>&nbsp;Admissions</div>
								</div>
							</div>
						</div>
					</div>
				</section>
<section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Admissions</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Admissions</h6>
                    <br/>
                    {/* <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Why should a student choose Victoria University?</h6> */}
                    <p className="my-4" style={{}}>
                    Victoria University is the leading University in Uganda and East Africa when it comes to
						offering Experiential and Work Integrated Learning. We are determined to produce graduates
						with employable skills and capacity to creatively employ themselves. We do this by providing
						meaningful, hands-on workplace experience to enrich theoretical learning. Our work integrated
						learning program is enabling students to complete a program of three years with at least 2-3
						years’ work experience. <br/><br/>
						Victoria University offers a number of academic programmes at Diploma, Undergraduate and
						Postgraduate, Higher Education Certificate and Professional Development levels. Please click
						the links below to view detailed list of courses in the respective categories.<br/><br/>
						Once students are admitted, we ensure that they are given the academic, personal and where
						appropriate, spiritual support necessary for successful completion of their courses at Victoria
						University.<br/><br/>
						Our aim is to operate a fair and transparent admission process to select the most suitable, able
						and motivated applicants who can best benefit from Victoria University education. Every
						applicant is important to us and we welcome applications from different prospects irrespective of
						their background.<br/><br/>
						Admission is made on the basis of one’s own presented documents which are subjected to
						verification with original documents at the time of registration. Any subsequent discovery of
						falsification or forgery will lead to automatic cancellation of the admission.
                    </p>
                    {/* <p>
                        <Link className="logo-2" to="/new-students" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Overview for new students</span></span>
                        </Link>
                    </p> */}
                    {/* <p><a href="https://vclass.ac/login" className="logo-2" style={{color: '#0077b5'}} target="_blank" rel="noreferrer" onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">myVU Student Portal</span></span>
                        </a>
                    </p> */}
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Minimum entry requirements:</h6>
                    <br/>
                    <p className="mb-4" style={{}}>
					The admissions office approves minimum entry requirements (as provided under the National
					Council for Higher Education Act 2001) and English language requirements for Victoria
					University courses.
					Admission into Nursing and Midwifery courses also take cognizance of the requirements from
					Uganda Nurses and Midwives Council.
					Minimum entry requirements are set to ensure that a student is only admitted to a course when
					the admissions office and or faculties believe that the student can undertake the course with a
					reasonable prospect of success.
					</p>
                    <br/>
                    <img src="assets/images/admis.jpg" className="img-fluid" alt="" />
                    <br/>
                    <br/>
                    {/* <p><Link className="logo-2" to="/new-students" style={{color: '#0077b5'}} onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                        <span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Course procedures for new students</span></span>
                        </Link>
                    </p> */}
                    {/* <p><Link className="logo-2" to="/exams" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                        <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Learn more about our exam procedures</span></span>
                        </Link>
                    </p> */}
                    {/* <h6 className="hny-title" style={{fontSize: '34px', color: '#0077b5'}}>International Students</h6>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                    Victoria University is privileged to have the most diverse student community
                    in Uganda. We have students coming from more than 50 countries including
                    Kuwait, Haiti, Oman, Afghanistan, India, Comoros, Nigeria, Chad, Liberia to
                    mention but a few. We are a non-discriminatory institution and we call
                    ourselves ‘The University of You’.
                    </p> */}
                    {/* <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Letter of permission request form (pdf)&nbsp;<span className="fa fa-external-link"></span></p>
                    <p className="my-4">Once your course is complete, you must have the school send an official transcript to VU.</p> */}
                </div>
                {/* <div className="mission-gd-right col-lg-12 pl-lg-4">
                    		<img src="assets/images/lounge.JPG" className="img-fluid" alt="WIL" />
						<p><b style={{fontWeight: '500'}}>Image:</b> Student's Lounge</p>
					</div> */}
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Important Things To Note</h6>
                    <br/>
                   {/*  <p className="mb-4" style={{fontSize: '18px'}}>Victoria University has developed an interactive state of the art learning
                    management system that keep students learning without any interruption.
                    V-Class (our online learning management portal) was vetted by Uganda’s
                    National Council for Higher Education and was accorded a score of 80% -
                    making it one of the top learning management systems in the country.<br/><br/>
                    In the quest to make our students proficient in the 21st century skills, we have
                    made digital literacy a priority for all students and teachers. We have
                    accomplished this by doing the following;
                    </p> */}
                    <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;1&emsp;All students should complete all registration formalities within four (04) weeks from
								the starting date of the Academic Year or Semester. All those who do not register within
								this time will be deemed to have turned down the offer of admission, and their places
								declared vacant for replacement.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;2&emsp;Any student who intends to withdraw from the University can only do so within the
								first one month from the beginning of the academic year.  Requests for and permission to 
								withdraw shall be in writing, and except on grounds of medical incapacitation, be valid for
								a period of  only one academic year.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;3&emsp;Students granted permission to withdraw, shall be required to resume studies as stated in the letters granting them permission to withdraw.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;4&emsp;Full contact addresses of students, parents/guardians must be provided on the Registration Forms.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;5&emsp;Upon completing the registration exercise, all foreign students shall be required to obtain a Ugandan Student Pass issued by the Immigration Department, Ministry of Internal Affairs.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;6&emsp;The University reserves the right to automatically cancel a student’s admission into the University at any time for impersonation, falsification of documents or giving false/incomplete information whenever discovered or for any other sufficient reason.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;7&emsp;The University runs a 7-day week.  Lectures, tests, practicals and examinations shall therefore be conducted on any of the 7 days of the week.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;8&emsp;Fees defaulters shall not be allowed to sit any examinations.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;9&emsp;Breach of any University Rules and Regulations shall lead to dire consequences, including dismissal from the University. Acquaint yourself with these and any other University regulations from the outset.</li><br/>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;10&emsp;All admitted students are required to sign this letter in the space provided as a sign of acceptance of the offer and return a copy to the Admissions Office.</li>
                            </ul>
                        </p>
                    {/* <p><Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner29", "iconner30")} onMouseOut={this.change_icon2.bind(this, "iconner29", "iconner30")}>
                        <span className="lohny-2"><span  id="iconner29" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner30" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Transcripts & grades</span></span>
                        </Link>
                    </p> */}
                </div>
            </div>
        </div>
    </div>
</section>
{/* <hr className="text-center" style={{color: '#000', width: '90%'}}/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Undergraduate orientation</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Our orientation offers an overview of services available to you as an VU student, and guides you through the processes needed to complete your studies.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                        <span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate orientation</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Learner support</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        Find out more about our range of support services, including counselling, the library, and the Write Site.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
                        <span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Student Services</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> */}
{/* <hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Find Help</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        No matter where you are in your VUexperience, we’re here to help you along the way.
                    </p>
                    <p>
                    <Link className="logo-2" to="/contact" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner15", "iconner16")} onMouseOut={this.change_icon2.bind(this, "iconner15", "iconner16")}>
                        <span className="lohny-2"><span  id="iconner15" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner16" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Help & Support</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> */}
{/* <section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="col-lg-12 welcome-image">
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Questions? Ask VU<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            Find answers about fees, admissions, courses, programs, transcripts, exams, and more.
                                        </p>
                                        <p><Link className="logo-2" to="/contact" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner17", "iconner18")} onMouseOut={this.change_icon2.bind(this, "iconner17", "iconner18")}>
                                            <span className="lohny-2"><span  id="iconner17" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner18" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Ask a Question</span></span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Undergraduate calendar&nbsp;<span className="fa fa-external-link"></span></p>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Graduate calendar&nbsp;<span className="fa fa-external-link"></span></p>
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
{/* <section className="w3l-wecome-content-6" id='vid'>
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="welcome-image text-center" style={{width: '100%'}}>
                    <video src="assets/media/message from vc.mp4" className="img-fluid" alt="" autoPlay="true" controls="true" style={{width: '80%'}}/>
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

export default Admissions;