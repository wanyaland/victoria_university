import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Apply extends Component{
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
    applynow(){
        window.location.href = "apply-now";
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
					<Link to="/admissions"><span className="underline" style={{color: '#EEE'}}>Admissions</span></Link>
                    <span className="underline" style={{color: '#EEE'}}>/ How to Apply and Register</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<br/>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px'}}>How to Apply and Register</h6>
                    <br/>
                    <p className="hny-title" style={{fontSize: '24px', color: '#0077b5'}}>Just a few clicks away from your next big milestone</p>
                    <p className="my-4" style={{fontSize: '20px'}}>After you apply to become an Victoria University student, you can register in courses. The application process varies depending on what level you wish to study (undergraduate, graduate or doctoral), where you live, and if you want to complete a full program or take courses as a non-program student.</p>
                    <p className="mb-4"></p>
                    <br/>
                </div>
                <div className="col-lg-12 mb-lg-0 mb-5" style={{height: '60px'}}>
                    <table style={{width: '100%', height: '100%'}}>
                        <tr>
                            <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                            <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', paddingLeft: '10px'}}>
                                Online registrations for September will be opening soon. Please watch for updates in <b>myVU.</b></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
	</div>
</section>
<br/>
<section className="w3l-features-1">
	<div className="features-1-mian py-5">
		<div className="container">
					<h4 className="hny-title text-left" style={{color: '#024d75'}}>What would you like to do?</h4>
		</div>
		<div className="container py-lg-5">
			<div className="row grids-innf my-lg-5">
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-graduation-cap" style={{color: '#0077b5', fontSize:'37px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Become an undergraduate student</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-institution" style={{color: '#0077b5', fontSize: '38px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Register for course(s)</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-book" style={{color: '#0077b5'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Become a graduate student</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-phone" style={{color: '#0077b5'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Contact Us</a></h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-footer-16 text-center">
    <div className="container">
        <h6 className="hny-title text-center" style={{color:'#004d77', fontSize: '30px'}}>Whether you want to <b>earn a degree, diploma or certificate, or just take some courses,</b> as a non-program student just follow these two steps:</h6>
    </div>
</section>
<section className="w3l-features-1">
	<div className="features-1-mian py-5">
		<div className="container py-lg-5">
			<div className="row grids-innf my-lg-5">
				<div className="features-1-info col-lg-6 col-md-6">
					<div className="features-1-info-icon text-center">
                        <div id="circle" style={{border: 'orange 14px solid'}}>
                            <span className="text-lg-center" style={{position: 'relative', top: '40%'}}>Step 1</span><span className="triangle-step text-center" style={{borderTop: '15px solid orange'}}></span>
                        </div>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Become an undergraduate student</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-6 col-md-6">
					<div className="features-1-info-icon text-center">
						<div id="circle" style={{border: '#0475b3 14px solid'}}>
                            <span className="justify-content-center text-lg-center" style={{position: 'relative', top: '40%'}}>Step 2</span><span className="triangle-step text-center" style={{borderTop: '15px solid #0475b3'}}></span>
                        </div>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Register for course(s)</a></h6>
					</div>
				</div>
			</div>
            <section className="w3l-footer-16">
                <div className="col-md-7 mt-md-0 text-center justify-content-center" style={{margin: '0 auto'}}>	
                    <ul className="social d-flex" style={{margin: '0 auto'}}>
                        <li><a href="#home" style={{backgroundColor: '#80bfff', height: '20px', width: '20px'}}><i></i></a></li><hr style={{border: '#80bfff 1px solid', width: '88%', marginTop: '10px'}}/>
                        <li><a href="#home" style={{backgroundColor: '#80bfff', height: '20px', width: '20px'}}><i></i></a></li>
                    </ul>
                </div>
            </section>
            <div className="row grids-innf my-lg-5">
				<div className="features-1-info col-lg-6 col-md-6">
					<div className="features-1-info-icon text-center">
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center">You only have to apply once. After applying, you can register for courses (Step 2) immediately</h6>
                        <br/>
                        <button className="btn_link" onClick={this.applynow}>Apply Now</button>
					</div>
				</div>
				<div className="features-1-info col-lg-6 col-md-6">
					<div className="features-1-info-icon text-center">
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center">Register by the 10th day of any month to start your course on the 1st day of the following month.</h6>
                        <br/>
                        <button className="btn_link">Login</button>
					</div>
				</div>
			</div>
            <div className="col-lg-12 mb-lg-0 mb-5">
                <table style={{width: '100%', height: '100%'}}>
                    <tr>
                        <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                        <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}><b>Note:</b> If you are an international student, an inactive/former student (not active for 12 months or longer), or a student with a loan you will find all required information here:
                            <br/>
                            <br/>
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right" style={{color: '#FFF'}}></span>&emsp;<b>International student guidelines</b>&nbsp;&nbsp;<a href="#home" style={{color: '#FFF'}}><i></i></a></li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right" style={{color: '#FFF'}}></span>&emsp;<b>Inactive and former student information</b>&nbsp;&nbsp;<a href="#home" style={{color: '#FFF'}}><i></i></a></li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right" style={{color: '#FFF'}}></span>&emsp;<b>Information for students with a loan</b>&nbsp;&nbsp;<a href="#home" style={{color: '#FFF'}}><i></i></a></li>
                            </ul>
                        </td>
                    </tr>
                </table>
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
                    <p className="hny-title" style={{fontSize: '34px', color: '#0077b5', fontWeight: '500'}}>Apply to become an <b>VU undergraduate student</b></p>
                    <p className="my-4" style={{fontSize: '18px'}}>We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate, or just take some courses as a non-program student - it’s up to you. If you change your mind later, you won’t have to pay another application fee. You can start registering for courses as soon as you finish your application.</p>
                    <p className="mb-4" style={{fontWeight: '700'}}>No matter what route you choose, you’ll start with our online application system.</p>
                    <br/>
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
						<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Enrolling in an undergraduate program <span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">All undergraduate programs have continuous enrolment – you can start registering for courses as soon as you finish your application. Many undergraduate programs are open admission, but some do have specific entry requirements. Visit our programs page to find out what's needed for your program of interest.</p>
                                        <h6 className="hny-tile" style={{color: '#06547e', fontSize: '24px'}}>About Apply</h6>
                                        <p className="my-4">VU is a part of the Apply system. When you apply to an VU program, you’ll start and finish your application with us. In between, you’ll use Apply - no matter what country or  Ugandan province you are from - to enter your personal and academic information and send us any required documents you may have. Want to know more?</p>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;<b style={{fontWeight:'600'}}>Learn About Apply</b>&nbsp;&nbsp;<span className="fa fa-external-link"></span></p>
                                        <p className="my-4">First to get started:</p>
                                        <p className="my-4"><span>1.</span>Choose your program . Be sure to note the number of years (if applicable) and your major – you’ll need this detailed information for step 3 below.
                                        </p>
                                        <p className="my-4"><span>2.</span>If you have previous post-secondary education or significant work or life experience that could be assessed for credit, explore your options for <a href="#home">transfer and advanced credit.</a>
                                        </p>
                                        <p className="my-4">You are now ready to become an VU student and receive an VU student ID number, and apply to an undergraduate program.</p>
                                        <p className="my-4">&emsp;<span>1.</span> &nbsp;Fill out the Undergraduate General Application  and select the "Yes, I am applying to a specific program." option.</p>
                                        <p className="my-4">&emsp;<span>2.</span> &nbsp;Continue to the Apply site. Learn more about the Apply application process .</p>
                                        <p className="my-4">&emsp;<span>3.</span> &nbsp;Apply will return you to the VU site. Complete the rest of the application.</p>
                                        <p className="my-4">&emsp;<span>4.</span> &nbsp;Pay the one-time general application fee  and the evaluation fee (if applicable). Be sure to have your official transcripts sent to VU if Apply was unable to forward them automatically.</p>
                                        <p className="my-4">&emsp;<span>5.</span> &nbsp;Write down your VU student ID number at the end of the application process. Your ID number will also appear on your printed or e-mailed receipt if you choose one of those options.</p>
                                        <p className="my-4">&emsp;<span>6.</span> &nbsp;Be sure to have your official transcripts sent directly to VU, if Apply was unable to forward them automatically. Also, arrange to submit any other required supporting documents, that pertain to your application, to the Office of the Registrar.</p>
                                        <p className="my-4">&emsp;<span>7.</span> &nbsp;For the next steps review the section Register for courses - Program students</p>
                                        <p>
                                            <Link className="logo-2" to="/apply-now" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                                                <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Apply Now</span>
                                            </Link>
                                        </p>
									</div>
								</div>	
								<br/>
							</div>
							<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Taking undergraduate courses as a non-program student <span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">Whether you need a course to transfer to a program elsewhere, for professional development, or just for fun, you can do it as a non-program student at Victoria University.</p>
                                        <p className="my-4">Non-program (or unclassified) students are those who want to take courses without registering in a degree, diploma or certificate program. If you later decide to enter an VU program, you can apply credits earned now toward your future program (if the credits fit that program’s requirements).</p>
                                        <p className="my-4">How to enrol as a non-program student:</p>
                                        <p className="my-4">&emsp;<span>1.</span> &nbsp;Fill out the Undergraduate General Application, and choose to enrol as a non-program student.</p>
                                        <p className="my-4">&emsp;<span>2.</span> &nbsp;Pay the one-time general application fee.</p>
                                        <p className="my-4">&emsp;<span>3.</span> &nbsp;Write down your VU student ID number at the end of the application process. Your ID number will also appear on your printed or e-mailed receipt if you choose one of those options.</p>
                                        <p className="my-4">&emsp;<span>4.</span> &nbsp;You are now ready to start registering for VU Undergraduate Course as a Non-Program Student</p>
                                        <p>
                                            <Link className="logo-2" to="/student-guidelines" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                                <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Apply as a non-program student</span>
                                            </Link>
                                        </p>
									</div>
								</div>	
								<br/>
							  </div>
							<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;undergraduate students enrolled at another school<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solids'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor:'#fff'}}>
										<p className="my-4">Already taking a degree program from another school? You are welcome to register for individual courses as a visiting student at VU!</p>
                                        <p className="my-4">Keep in mind that you can't start a full VU degree until you've completed or withdrawn from your other program.</p>
                                        <p>&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;<b style={{fontWeight:'600'}}>Learn more about transferring credit to other institutions.</b></p>
                                        <p>
                                            <Link className="logo-2" to="/apply-now" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                                                <span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Apply Now</span>
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
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <p className="hny-title" style={{fontSize: '34px', color: '#0077b5', fontWeight: '500'}}><b>Register for courses</b></p>
                    <p className="my-4" style={{fontSize: '20px'}}>Once you are an Victoria University student (program or non-program) you can register for your courses online at any time. Undergraduate courses start the first day of each month, but you must register and pay your fees by the 10th of the previous month to begin on the first. You can also choose to set a start date for a course up to 5 months in advance.</p>
                    <p className="mb-4"></p>
                    <br/>
                </div>
                <div className="col-lg-12 mb-lg-0 mb-5" style={{height: '60px'}}>
                    <table style={{width: '100%', height: '100%'}}>
                        <tr>
                            <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                            <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', paddingLeft: '10px'}}>Next deadline: register by February 10 th to start on March 1 st</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="welcome-grids row">
				<div className="col-lg-12 welcome-image">
					<div className="" style={{width: '100%', backgroundColor: '#fff', border:'#CCC 10px solid'}}>
						<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Program Students <span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">If you are enrolled in an VU program, you should review your program requirements (program regulations) before registering for courses.</p>
                                        <p className="my-4">Current undergraduate program regulations are found within each program in the undergraduate calendar. A list of current and archived program regulations are also available.</p>
                                        <p className="my-4">Requirements and regulations for graduate programs are found on the graduate calendar website and on each program website.</p>
                                        <p className="my-4">If you need help deciding which courses to take, contact a program advisor for assistance.</p>
									</div>
								</div>	
								<br/>
							</div>
							<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Non-program Students  <span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">If your application to Victoria University was successful, you can start registering for courses immediately - just like everyone else.</p>
									</div>
								</div>	
								<br/>
							  </div>
							<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Course Availability<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">Our courses are revised periodically to make sure the content stays relevant – those courses are unavailable during the revision period. Some other courses need professor approval, which can be requested during the online registration process.</p>
                                        <p><Link className="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                                            <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Check the course availability</span>
                                            </Link>
                                        </p>
									</div>
								</div>	
								<br/>
							  </div>
                              <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;How to register for courses<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                              <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                  <br/>
                                  <div className="col-lg-12 welcome-image">
                                      <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">You must register and pay by the 10th of the month to start your course on the 1st of the next month. You can also set a start date up to 5 months in advance. Your actual start date will depend on when your registration is received, so you’ll want to register early:</p>
                                        <p className="my-4">&emsp;<span>1.</span> &nbsp;Choose your courses.</p>
                                        <p className="my-4">&emsp;<span>2.</span> &nbsp;Log in to  myVU. You will need your student ID number.</p>
                                        <p>&emsp;&emsp;<span className="fa fa-angle-right"></span>&emsp;If this is your first time logging into  myVU, your password will be your birthday (YYYYMMDD).</p>
                                        <p>&emsp;&emsp;<span className="fa fa-angle-right"></span>&emsp;You will need to change your password and choose a security question after your first login.</p>
                                        <p className="my-4">&emsp;<span>3.</span> &nbsp;Click on "Register in a Course."</p>
                                        <p className="my-4">&emsp;<span>4.</span> &nbsp;Confirm your address.</p>
                                        <p className="my-4">&emsp;<span>5.</span> &nbsp;Select your start term, subject and course(s).</p>
                                        <p className="my-4">&emsp;<span>6.</span> &nbsp;Pay your course fee(s) to complete the registration process. See methods of payment.</p>
                                        <p className="my-4">&emsp;<span>7.</span> &nbsp;You will receive an e-letter confirming your course registration within 2 weeks.</p>
                                        <p>
                                            <Link className="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
                                            <span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Start Now</span>
                                            </Link>
                                        </p>
                                        <h6 className="hny-title" style={{color: '#043a57'}}>After you register</h6>
                                        <p className="my-4">You will receive an e-letter in myVU with your tutor or support information 1–2 weeks before your course starts. In most cases, you will also be able to access your courses from myVU before the official course start date.</p>
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
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <p className="hny-title" style={{fontSize: '34px', color: '#0077b5', fontWeight: '500'}}>Apply to become an <b>VU graduate student</b></p>
                    <p className="my-4" style={{fontSize: '18px'}}>You can get started on your application whenever you’re ready. Graduate programs have a multi-step application process. Most programs have application deadlines and intakes happen on a specific schedule.</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>Graduate programs and courses are advanced studies and generally require an undergraduate degree for admission. Doctoral degrees and post-masters certificates and diplomas require a master’s degree for admission.</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>Once you have accepted your offer of admission, you can begin registering for your courses. Please note that most programs require you to pay an admission fee after you’re accepted into the program.</p>
                    <br/>
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
					<div className="" style={{width: '100%', backgroundColor: '#fff', border:'#CCC 10px solid'}}>
						<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Enrolling in a graduate program <span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">Victoria University’s graduate student application processes vary from program to program. Read the general application process below, then find your program to see its specific requirements and processes.</p>
                                        <h6 className="hny-title" style={{color: '#043a57', fontSize: '22px'}}>Application deadlines</h6>
                                        <p className="my-4">Unlike our undergraduate programs, most graduate programs have specific intake dates. If you miss an application deadline, you will have to wait for the next intake to apply – this could be up to a year for some programs.</p>
                                        <p className="my-4">Be sure to review your program’s information carefully so you can meet all the necessary requirements in time for your application deadline.</p>
                                        <p>
                                            <Link className="logo-2" to="/programs" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                                            <span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">See all graduate programs</span>
                                            </Link>
                                        </p>
                                        <p className="my-4">Specific requirements vary from program to program, but generally involve the following steps.</p>
                                        <p className="my-4">&emsp;<span>1.</span> &nbsp;Request approval to start an application (if required).</p>
                                        <p className="my-4">&emsp;<span>2.</span> &nbsp;Complete the Graduate Application Form and pay the non-refundable application fee.</p>
                                        <p className="my-4">&emsp;<span>3.</span> &nbsp;If you have ever been an VU student in the past, log in to complete the application.</p>
                                        <p className="my-4">&emsp;<span>4.</span> &nbsp;If you are a new VU student, be sure to write down your student ID number at the end of the application process. Your ID number will also appear on your printed or e-mailed receipt if you choose one of those options.</p>
                                        <p className="my-4">&emsp;<span>5.</span> &nbsp;Submit a program-specific application form (available either as part of the application or on the program website).</p>
                                        <p className="my-4">&emsp;<span>6.</span> &nbsp;If necessary, arrange for official transcripts to be sent directly from post-secondary institutions you have previously attended.</p>
                                        <p className="my-4">&emsp;<span>7.</span> &nbsp;Gather and complete other materials required by the program you are applying to. These could include a resumé, a biography, questionnaires, or letters of reference.</p>
                                        <p>
                                            <Link className="logo-2" to="/apply-now" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
                                            <span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Apply Now</span>
                                            </Link>
                                        </p>
                                        
									</div>
								</div>	
								<br/>
							</div>
							<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Taking graduate courses<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">In order to take graduate-level courses, you must satisfy certain prerequisites, which in most cases include an undergraduate degree. However, you don’t need to be enrolled in an Victoria University graduate program to take our graduate courses.</p>
                                        <p className="my-4">Many programs allow you to take a limited number of courses as a non-program student. Each program has a different limit and a different application process. Check each program’s website for specific details.</p>
                                        <p className="my-4">Courses you successfully complete as a non-program student may be applied toward your graduate program when you become a program student.</p>
									</div>
								</div>	
								<br/>
							  </div>
							<li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Graduate students enrolled at another school<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<h6 className="hny-title" style={{color: '#043a57', fontSize: '22px'}}>Visiting students</h6>
                                        <p className="my-4">If you’re enrolled at another university and want to take an VU course for one of your program requirements, you also register as a non-program student. We encourage you to get a letter of permission from your school to ensure your VU credits will transfer to your program. This is for your own records – you don’t have to send it to VU.</p>
                                        <p>
                                            <Link className="logo-2" to="/apply-now" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner15", "iconner16")} onMouseOut={this.change_icon2.bind(this, "iconner15", "iconner16")}>
                                                <span className="lohny-2"><span  id="iconner15" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner16" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Apply Now</span>
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
<section className="w3l-features-1">
	<div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
		<div className="container py-lg-5" id="fixer3">
               
                <div className="row grids-innf my-lg-5" id="fixer">
                    <div className="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0', marginBottom: '40px'}}>
                        <table style={{width: '100%', height: '100%'}}>
                            <tr>
                                <td className="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>We're here to help</td>
                            </tr>
                        </table>
                    </div>
                    <div className="features-1-info col-lg-6 col-md-6" style={{borderRight: '#c2c2c2 1px solid'}}>
                        <div className="features-1-info-info text-center">
                            <h6 className="text-center">Call Us</h6>
                        </div>
                        <div className="features-1-info-icon text-center">
                            <span className="fa fa-globe" style={{color: '#0077b5', fontSize: '90px'}}></span>
                        </div>
                        <div className="features-1-info-info text-center">
                            <h6 className="text-center">+256 759 996 130 or 256 700 300 088 or +256 707 780 158</h6>
                        </div>
                        <br/>
                    </div>
                    <div className="features-1-info col-lg-6 col-md-6">
                        <div className="features-1-info-info text-center">
                            <h6 className="text-center">Help and support</h6>
                        </div>
                        <div className="features-1-info-icon text-center">
                            <span className="fa fa-phone-square" style={{color: '#0077b5', fontSize: '90px'}}></span>
                        </div>
                        <div className="features-1-info-info text-center">
                            <h6 className="text-center">Looking for specific information? VU offers a variety of online student support services to assist you.
                                Find out who to contact</h6>
                        </div>
                        <br/>
                    </div>
                    <div className="features-1-info col-lg-12 col-md-12"  id="fixer2" style={{paddingBottom: '0 !important'}}>
                        <table style={{width: '100%', height: '100%'}}>
                            <tr>
                                <td className="text-center" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '10px'}}>You can call us during business hours (8:30 a.m. to 4:30 p.m.). It is currently 9:28 a.m. in Kampala.</td>
                            </tr>
                        </table>
                    </div>
                </div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-features-1">
	<div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
		<div className="container py-lg-5">
            <div className="row grids-innf my-lg-5" style={{border: '#CCC 1px solid'}}>
                <div className="features-1-info col-lg-3 col-md-3" style={{borderRight: '#c2c2c2 1px solid', padding: '0'}}>
                    <img src="assets/images/path1.jpg" className="img-fluid" id="fixer4" style={{}} alt="img"/>
                </div>
                <div className="features-1-info col-lg-9 col-md-9">
                    <br/>
                    <div className="features-1-info-icon text-center">
                        <span className="fa fa-fax" style={{color: '#0077b5', fontSize: '90px'}}></span>
                    </div>
                    <div className="features-1-info-info text-center">
                        <h6 className="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Get information about VU</h6>
                        <p className="text-center" style={{fontSize: '18px'}}>We have information to share with you!</p>
                    </div>
                    <div className="container_form">
                        <form action="/action_page.php">
                            <div className="row_form">
                                <div className="col-75">
                                <input type="text" id="fname" className="form_fields" name="firstname" placeholder="Your name.."/>
                                </div>
                            </div>
                            <div className="row_form">
                                <div className="col-75">
                                <input type="text" id="lname" className="form_fields" name="lastname" placeholder="Your last name.."/>
                                </div>
                            </div>
                            <div className="row_form">
                                <div className="col-75">
                                <input type="text" id="lname" className="form_fields" name="email" placeholder="Your email.."/>
                                </div>
                            </div>
                            <div className="row_form">
                                <div className="col-75">
                                    <div className="features-1-info col-lg-12 col-md-12" style={{height: '60px', width: '100%', marginTop: '40px !important', padding: '0'}}>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td className="text-left" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '20px'}}>Areas Of interest</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 1px solid', padding: '15px'}}>
										<p><input type="radio" id="1" name="gender" value="male"/>&nbsp;&nbsp;Apply for undergraduate program</p>
										<p><input type="radio" id="2" name="gender" value="male"/>&nbsp;&nbsp;Apply for graduate program</p>
										<p><input type="radio" id="3" name="gender" value="male"/>&nbsp;&nbsp;Take an undergraduate course</p>
										<p><input type="radio" id="4" name="gender" value="male"/>&nbsp;&nbsp;Take a course to transfer credit back to my university</p>
									</div>
                                </div>
                            </div>
                            <div className="row_form">
                                <div className="col-75">
                                <input type="checkbox" id="lname" className="" name="" required/>&nbsp;<span>Yes, I would like to receive communications via e-mail from Victoria University</span>
                                </div>
                            </div>
                            <div className="row_form">
                                <input type="submit" value="Get Started" className="applier"/>
                            </div>
                            </form>
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

export default Apply;