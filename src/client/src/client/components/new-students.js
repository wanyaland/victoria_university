import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'

class NewStudents extends Component{
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
                <BreadNavBar/>
                <NavBar />
                <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="">
                    <Link to="/"><span className="underline" style={{color: "#CCC"}}>
					Victoria University 
					</span></Link>&nbsp;
                    <Link to="/current-students"><span className="underline" style={{color: "#CCC"}}>
					/ Current Students 
					</span></Link>&nbsp;
					<span style={{color: '#CCC'}}>/ New Students</span>
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
                    <h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>New Students</h6>
                    <br/>
                    <p class="my-4" style={{fontSize: '22px'}}>Welcome to Victoria University. Your student experience at AU won’t be the same as at a traditional university, but we’ll help you through the new parts. We have lots of experience in distance education – it’s been our focus since 2011.
                    </p>
                    <p class="my-4">
                        Once you’ve finished your application you’re an AU student and you can register for courses right away.
                    </p>
                    <p class="my-4">
                        Your main point of contact with AU as a student will be through myVU <span class="fa fa-external-link"></span>, our student portal.
                    </p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Learn About myVU</h4>
                        </a>
                    </p>
                    <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <h4 class="lohny-2"><span  id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;View new student orientation
                        </h4>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color: '#000', width: '90%'}}></hr>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Your first course – what you need to know</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Before your course begins, check myVU <span class="fa fa-external-link"></span> for</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;tutor or student support centre information, including contact information and hours</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;a link to your course site and a learning resource package that includes a recommended study schedule</p>
                    <p class="my-4">
                        Once you receive your course materials, you should
                    </p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;review your course syllabus to determine the major assignments and exam requirements</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;use the recommended study schedule to plan your studies <span class="fa fa-external-link"></span> – you should plan to complete all of your course requirements at least 4 to 6 weeks before the date that the final grade is required</p>
                    <p class="my-4">
                        During your course, you should
                    </p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;follow your personal study schedule to complete your readings, assignments and quizzes</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;follow up with your tutor/student support centre when you need help</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;consult our study skills resources <span class="fa fa-external-link"></span> or contact a counsellor <span class="fa fa-external-link"></span> if you’re feeling overwhelmed</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;request your exams well ahead of your course end date</p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color:'#000', width: '90%'}} />
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{ontSize: '48px', color: '#0077b5'}}>Changing from a non-program to a program student</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>If you’re currently a non-program student and you decide to enter an AU program, the credits you’ve already earned may be applied to your new program. Be sure to contact an advisor before starting your new program to find out if your previous courses will be accepted.r</p>
                    <p class="my-4">To change your student status from non-program to program:</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Log in to myVU <span class="fa fa-external-link"></span>.</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;fClick “Change Your Program” in the Manage Your Program section.</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Select the “applying to a specific program” option and complete the rest of the form.</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;If you haven’t already had your previous post-secondary studies evaluated for VU transfer credit, you should do so now. There is a one-time fee <span class="fa fa-external-link"></span> this service.</p>
                    <p class="my-4">
                        You are now ready to register for your courses.
                    </p>
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
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Program advising<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">
                                            Our academic advisors <span class="fa fa-external-link"></span> help you with choosing your courses and planning your program.
                                        </p>
                                        <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                                            <h4 class="lohny-2"><span  id="iconner5" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Contact Adivsor</h4>
                                            </a>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;New Student Orientation<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Learn more about AU’s services and resources in our new student orientation.</p>
                                        <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                                            <h4 class="lohny-2"><span  id="iconner7" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;View Orientation</h4>
                                            </a>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Common student policies<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Student Appeals Policy&nbsp;<span class="fa fa-file-pdf-o"></span></p>
                                        <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Student Academic Misconduct Policy&nbsp;<span class="fa fa-file-pdf-o"></span></p>
                                        <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Returns & Refunds&nbsp;<span class="fa fa-file-pdf-o"></span></p>
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

export default NewStudents;