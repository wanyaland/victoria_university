import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'

class Exams extends Component{
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
    render() {
        return (
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
                    <Link to="/current-students"><span className="underline" style={{color: "#EEE"}}>
					Current Students 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Exams</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Exams</h6>
                    <br/>
                    <div className="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#975110'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td className="text-left" style={{backgroundColor: '#d37217', textAlign: 'center', color: '#FFF', padding: '20px'}}>Due to Covid-19, Victoria University exam locations are closed and only ONLINE exams are being issued. Students must confirm that an invigilation centre is open before booking an exam. Please refer to the QA covid page for any updates and current steps for booking an online exam.</td>
							</tr>
						</table>
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
                    <p className="mb-4" style={{fontSize: '24px'}}>Exams are different from the quizzes or tests that might be part of your course work. Exams must be written in a supervised environment, with an approved exam invigilator (supervisor). As there are no pre-set dates for exams, you must schedule an exam to write it.</p>
                    <p className="my-4">If you have a disability, you may qualify for exam accommodations <span className="fa fa-external-link"></span>. Please contact our Accessibility Services office <span className="fa fa-external-link"></span> for assistance.</p>
                    <p className="my-4">
                        You must complete any exams before the end of your course contract, with the exception of late exam requests.
                    </p>
                    <p className="my-4">
                        On this page:
                    </p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Requesting exams</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Exam deadlines</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Writing exams</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Rescheduling exams</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Where to write - invigilation network</p>
                    <p className="my-4">
                        You need your student ID number and password to access myVU.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Log in to  myVU</span>
                        </span>
                        </Link>
                    </p>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Requesting exams</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Before you request your exam, you should talk to your tutor or student support centre to make sure you’re prepared. Once you’re ready, contact your invigilator to set a date and time to write and to discuss possible fees.</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Find out where to write your exam</p>
                    <p className="my-4">Unless you're planning to write your exam at an VU location, you must book a date and time with your invigilator before you request your exam. You can request your exam through myVU <span className="fa fa-external-link"></span>, in the Student Record section.</p>
                    <p className="my-4">Please remember the necessary when you make your request <span className="fa fa-external-link"></span>. There is a fee for late exam requests if you submit yours after the deadline.</p>
                    <p className="">
                        Remember that times close to the end of the month are in higher demand, and exams are scheduled on a first-come, first-served basis.
                    </p>
                    <p className="fa fa-external-link">
                        If you're writing in a new location or for the first time, choose your invigilator at least 60 days before you intend to write your first exam. This will ensure you meet the deadline for requesting a new invigilator, if one is required.
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Exam deadlines</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>All exam deadlines are based on your course contract end date, which can be viewed in myVU by selecting ‘Check your course status’ in the Manage Your Courses section.</p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Request deadlines</h6>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;You can request your exam date anytime, but to avoid a late exam request fee, you must request before the following deadlines:</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;outside of Uganda – 30 days before scheduled write date</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;inside Uganda. – 20 days before scheduled write date</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;to write at an VU location – 10 days before scheduled write date
                        (If you would like to write your exam the last week of the month, it is recommended you book a month in advance as timeslots close to the end of the month are in higher demand.)
                    </p>
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
                    <h6 className="hny-title" style={{fontsize: '30px', color: '#0077b5'}}>Completion deadlines</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>You can write your exam at any time</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>within your course contract period</p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Request deadlines</h6>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;If you submit a late exam request, it must be received</p>
                    <p className="my-4"><b>before</b></p>
                    <p className="my-4">your contract end date. You must schedule a write date that is within 30 days after the course contract end date.</p>
                    <p className="my-4">
                        Regardless of when you write your exam, all coursework (such as assignments, quizzes or papers) must be completed by the course contract end date.
                    </p>
                    <p className="my-4">
                        For more information visit the Undergraduate Calendar <span className="fa fa-external-link"></span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}}></hr>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Writing exams</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Your course materials will have information about your exam, including</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;the maximum amount of time that you have to complete the exam</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;if you can bring specific items (like a calculator) into the exam room</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;the format of the exam (multiple choice, short answer, long answer, etc.)</p>
                    <p className="my-4">
                        This information will also be provided to your invigilator, along with specific procedures for the exam.
                    </p>
                    <p className="my-4">
                        You must show your invigilator government-issued photo ID (i.e. passport, driver’s licence) or a VU student ID card to write your exam.
                    </p>
                    <p className="my-4">
                        Please arrive a few minutes early for your exam to allow time for check-in, etc. Exams start at 9:00 am, 1:00 pm or 5:00 pm. In consideration of students who have arrived on time and started writing, we cannot accommodate late arrivals.
                    </p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Online exams</h6>
                    <p className="my-4">
                        Many of our courses now have online exams. Online exams still require invigilation, and you will need to schedule them the same way you would a paper-based exam.
                    </p>
                    <p className="my-4">
                        There are 2 ways to write an online exam.
                    </p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;On-site with an approved invigilator from our invigilation network. Be sure your location is able to accommodate online exams. You cannot use your personal laptop for on-site online exams.</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;At home or work with a virtual invigilator. VU is working with ProctorU <span className="fa fa-external-link"></span> that provides invigilation through a webcam and a high-speed Internet connection. You can use your personal laptop with virtual invigilation, as long as it meets the minimum technical requirements. There is an invigilation fee to use this service.</p>
                    <p className="my-4">
                        Check the Evaluation section of your course syllabus to find out if your course has an online exam.
                    </p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Supplemental exams</h6>
                    <p className="my-4">
                        If you’re not happy with your exam grade, you can attempt a supplemental exam (exam rewrite). The higher mark will be used in calculating your final course grade. You request a supplemental exam using the regular exam request process, but you will have to pay the supplemental exam fee.
                    </p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Timelines for supplemental exams <span className="fa fa-external-link"></span></p>
                    <p className="my-4">
                        <b>Note:</b> If you are a visiting student, you should check with your school to make sure your course will still transfer if you write a supplemental exam.
                    </p>
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
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Rescheduling exams</h6>
                    <br/>
                    <p className="mb-4">If you can’t write your exam on the requested date, you may reschedule your exam up to 10 business days after your original write date, as long as the invigilator can supervise at that time.</p>
                    <p className="mb-4">To reschedule your exam, contact the location where you are writing. If you are writing at an VUlocation, contact Exam Services at +256 759 996 130 or +256 700 300 088 or +256 707 780 158 to reschedule.</p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Fees</h6>
                    <p className="my-4">If you are writing at an VU location, there is a non-refundable exam rebooking fee <span className="fa fa-external-link"></span>.</p>
                    <p className="my-4">If you need to reschedule your exam to a write date more than 10 business days later, your original exam will be returned to VUunwritten. You will need to submit a new exam request, and pay a multiple exam fee <span className="fa fa-external-link"></span>.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}}></hr>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Invigilation network</h6>
                    <br/>
                    <p className="mb-4">VU has established a Uganda-wide examination invigilation network <span className="fa fa-external-link"></span> to help students write their exams. If you live within 100 km of an approved VUexamination centre, you must write your exam at one of the centres.</p>
                    <p className="my-4">If you live outside of Uganda, contact examunit@vu.ac.ug for help finding an invigilator in your area.</p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Find an invigilator</span></span>
                        </Link>
                    </p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>I can’t find an invigilator in my area</h6>
                    <p className="my-4">If you can’t find an exam invigilator within 100 km of your residence, you can ask to have an invigilator established. You must do this at least 60 days before the date you plan to write your exam. Proposed invigilators must meet the invigilator guidelines.</p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Fees</h6>
                    <p className="my-4">
                        To ensure the health and safety of our learners and team members, VU’s exam centres in Victoria, Calgary, and Edmonton remain closed until further notice. If you are writing in another location, you should know that most invigilators charge a fee for their services. These fees are your responsibility.
                    </p>
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
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Feeling anxious<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            It’s normal to be nervous before an exam. Learn how to identify and reduce the anxiety you may be feeling.
                                        </p>
                                        <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                                            <span className="lohny-2"><span  id="iconner5" className="fa fa-external-link programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Mastering exam anxiety</span>
                                            </span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Learn more about VU’s services and resources in our New Student Orientation <span className="fa fa-external-link"></span>.</p>
                                        <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                                            <span className="lohny-2"><span  id="iconner7" className="fa fa-external-link programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">View orientation</span>
                                            </span>
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
</section>
                 <Footer />
             </React.Fragment>
        );
    }
}

export default Exams;