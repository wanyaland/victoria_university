import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom';

class StudentProfile extends Component {
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
					<div class="row">
						<ol class="accounts col-md-4">
							<li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / Admissions / What's Your Student Profile?</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>What's Your Student Profile?</h6>
						<br/>
						<p class="my-4" style={{fontSize: '24px'}}>Are you ready to become an Victoria University student?</p>
						<p class="mb-4" style={{fontSize: '18px'}}>The application process at Victoria University varies depending on what level you wish to study (undergraduate or graduate), where you live, and if you want to take a full program or specific courses. To ensure that you follow the right application process, it is important to understand what type of student you are before getting started. Browse through all our student type options below to find your path!</p>
                        <p class="my-4">If you have any questions or aren’t sure which student category applies to you, feel free to get in touch with one of our online program advisors <span class="fa fa-external-link"></span> or call 1-800-788-9041. Once your application has been approved, you can start registering for courses right away.</p>
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
                                    <h4>THINKING ABOUT STUDYING WITH US?</h4>
									<h2>Learners from across Uganda and the world are finding academic success with VU</h2>
									<p class="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
                                    <p class="my-4">Check out our interactive map to discover where open, accessible and online post-secondary education is being embraced</p>
									<p class="my-4"><button class="btn_link2">Sign up to interact with the map</button></p>
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
    <section class="w3l-footer-16 text-center">
        <div class="container">
            <h4 class="hny-title text-center justify-content-left" style={{color: '#0077b5', fontSize: '30px'}}>Our online education options are as flexible as you are. Discover what type of student you want to be!</h4>
        </div>
    </section>
    <section class="w3l-wecome-content-6">
        <div class="ab-content-6-mian py-5">
            <div class="container py-lg-5">
                <div class="welcome-grids row">
                    <div class="col-lg-12 welcome-image">
                        <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                            <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 class="text-center" style={{fontSize: '30px', color: '#025683'}}>Choose the option that best describes your situation:</h5></div>
                            <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                                <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;You want to enrol in an undergraduate degree, diploma, certificate, or a graduate program offered by Victoria University<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
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
                                <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;You are enrolled in a program at another university or institution and want to take a few courses at VU at the same time<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
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
                                <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;You want to take some courses for general interested but don't want to enrol in a program at this time.<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
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
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<p class="my-4" style={{fontSize: '24px'}}>Program and non-program students also include…</p>
						<p class="mb-4" style={{fontSize: '18px'}}>Returning students</p>
                        <p class="my-4">Once you've become an VU student, you’ll always be an VU student, though you will become inactive after 12 months of your application date if you haven’t registered for a course or your most recent course completion date, course contract end date, withdrawal date.</p>
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
								<li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;He's how to return to VU<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
											<p><Link class="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
												<span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span class="underline">Find all your requirements for your undergraduate program</span>
												</Link>
											</p>
											<p>
                                                <Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
												<span class="lohny-2"><span  id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span class="underline">How to apply</span>
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
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<p class="mb-4" style={{fontSize: '18px'}}>International students</p>
                        <p class="my-4">If you are an international student and want to stay in your home country while you complete one of our programs, you can follow the regular application process. Do you want to come to Canada to study? Many of our programs are eligible to accept students on a study permit.</p>
                        <br/>
                        <br/>
                        <p>
                            <Link class="logo-2" to="/student-guidelines" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                                <span class="lohny-2"><span  id="iconner5" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span class="underline">Learn more about studying at VU as an international student</span>
                            </Link>
                        </p>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<p class="mb-4" style={{fontSize: '18px'}}>Students with loans</p>
                        <p class="my-4">If you are a student seeking financial assistance and would like to apply to one of our programs, your application process is the same as other students, you just need to start a little earlier.</p>
                        <br/>
                        <br/>
                        <p>
                            <Link class="logo-2" to="/tuition-fees" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                                <span class="lohny-2"><span  id="iconner7" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span class="underline">Learn more about our financial aid program</span>
                            </Link>
                        </p>
					</div>
				</div>
			</div>
		</div>
	</section>
    <hr class="text-center" style={{color: '#000', width: '90%'}} />
    <section class="w3l-footer-16 text-center">
        <div class="container">
            <h3 class="hny-title text-left" style={{color: '#0077b5'}}>What application process should you follow?</h3>
            <h4 class="hny-title text-left">To become a program student:</h4>
        </div>
    </section>
    <section class="w3l-wecome-content-6">
          <div class="ab-content-6-mian">
                 <div class="container">
                        <div class="welcome-grids row">
                                <div class="col-lg-6 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid', minHeight: '400px'}}>
                                        <div class="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0'}}>
                                            <table style={{width: '100%', height: '100%'}}>
                                                <tr>
                                                    <td class="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>Undergraduate application</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="features-1-info col-lg-12 col-md-6" style={{padding: '30px'}}>
                                            <div class="features-1-info-icon text-center">
                                                <span class="fa fa-graduation-cap" style={{color: '#0077b5', fontSize: '90px'}}></span>
                                            </div>
                                            <div class="features-1-info-info text-center">
                                                <h6 class="text-center" style={{color: '#024b72', fontSize: '20px'}}>We're accepting undergraduate applications year-round -  if interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate.</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid', minHeight: '400px'}}>
                                        <div class="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0'}}>
                                            <table style={{width: '100%', height: '100%'}}>
                                                <tr>
                                                    <td class="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>Graduate application</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="features-1-info col-lg-12 col-md-6" style={{padding: '30px'}}>
                                            <div class="features-1-info-icon text-center">
                                                <span class="fa fa-book" style={{color: '#0077b5', fontSize: '90px'}}></span>
                                            </div>
                                            <div class="features-1-info-info text-center">
                                                <h6 class="text-center" style={{color: '#024b72', fontSize: '20px'}}>You can get started on your application any time. Graduate programs have a multi-process application process. Most programs have application deadlines and intakes happen on a specific schedule</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                     </div>
                </div>
    </section>
    <br/>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<p class="mb-4" style={{fontSize: '18px'}}>To become a non-program student:</p>
                        <p class="my-4">As a non-program student at Victoria University, you will enjoy all of the same rights and privileges as a full time VU program student. Visiting students should obtain a Letter of Permission from their home institution before they register in an VU course. Ensure that the Letter of Permission indicates that the institution will accept the VU course in your program.</p>
                        <br/>
                        <br/>
                        <p>
                            <Link class="logo-2" to="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
                                <span class="lohny-2"><span  id="iconner9" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;</span><span class="underline">Apply as a non-program student</span>
                            </Link>
                        </p>
					</div>
				</div>
			</div>
		</div>
	</section>
                <GetInfo />
                <Footer />
            </React.Fragment>
        )
    }
}

export default StudentProfile;