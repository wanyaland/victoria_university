import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer';

class TransferCredit extends Component{
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
                        <li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / Admissions / Transfer Credit</li>
                    </ol>
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
                    <h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Transfer Credit</h6>
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Get advanced credit towards your degree</h6>
                    <br/>
                    <p class="my-4" style={{fontSize: '22px'}}>At Victoria University, your previous education and experience count! We don’t want to teach you what you already know, so we offer the option of getting credit for your prior learning. That could mean taking fewer courses to get your degree, saving you valuable time and money.
                    </p>
                    <p class="mb-4" style={{fontSize: '18px'}}>You must be enrolled in an AU program before your transfer or advanced credit can be evaluated. However, you can start the process by requesting an evaluation right when you apply. Find out which kind of knowledge recognition applies to you below:</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w3l-features-1">
	<div class="features-1-mian py-5">
		<div class="container">
			
		</div>
		<div class="container py-lg-5">
			<div class="row grids-innf my-lg-5">
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-vcard" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Credit for previous education</a></h6>
					</div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-calculator" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Credit for work and life experiences</a></h6>
					</div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-money" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Challenge for credit</a></h6>
					</div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-credit-card" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Get credit at your school from studying at VU</a></h6>
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
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Get advanced credit towards your degree</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>We have lots of options to help you get credit for your previous post-secondary experience, including individual course assessment, block transfer, post-diploma, or second degrees. First, you should check if your previous education is within the right time limits to be considered <span class="fa fa-external-link"></span> for transfer credits. After that, our transfer credit assessment tool can give you an idea of how your previous courses might transfer even if you did not complete a diploma or degree.</p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Assess my transfer credits
                        </h4>
                        </a>
                    </p>
                    <p class="mb-4" style={{fontSize: '18px'}}>Your courses aren't listed? Don't worry. You may still be eligible for transfer credit on an individual basis.</p>
                    <p class="mb-4" style={{fontSize: '18px'}}>An evaluation of your prior post-secondary courses or programs will take place after you have applied to a program, submitted all the required documents and paid the one time, non-refundable evaluation fee.</p>
                    <p class="mb-4" style={{fontSize: '18px'}}>If you are already an active VU unclassified or visiting student and wish to become a program student and have an evaluation completed, you can do this by logging in to myAU and selecting "Change of Program." Then select your program and complete the process, indicating that you would like to have your transfer credit evaluated. After you requested the evaluation, you will need to pay a one-time, non-refundable evaluation fee and arrange to have official transcripts from each institution you formerly attended sent directly to:</p>
                </div>
            </div>
            <div class="col-lg-2 mb-lg-0 mb-5">
                <p class="my-4">
                    Athabasca University
                    Enrolment Services
                    Office of the Registrar
                    1 University Drive
                    Athabasca, AB T9S 3A3
                </p>
            </div>
            <table style={{width: '100%', height: '100%'}}>
                <tr>
                    <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                    <td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Current credit evaluation processing time: 4 weeks after all documents are received. However, depending on individual circumstances and capacity it can take up to 12 weeks to complete your evaluation.</td>
                </tr>
            </table>
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
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous post-secondary courses<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Undergraduate studentsa</p>
                                        <p class="my-4"><span class="fa fa-clock-o"></span> Apply anytime – no deadline!</p>
                                        <p class="my-4">You can apply to AU anytime without a deadline. All undergraduate programs enrol students year round. Just keep in mind that after your program application gets approved you will still need to register for courses to get started.</p>
                                        <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                                            <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Learn more about undergraduate applications
                                            </h4>
                                            </a>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous diploma or related credentials<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p class="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                                            <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Learn how to register for courses
                                            </h4>
                                            </a>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous undergraduate courses<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p class="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                                            <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Learn how to register for courses
                                            </h4>
                                            </a>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Credits for previous foreign credentials<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p class="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                                            <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Learn how to register for courses
                                            </h4>
                                            </a>
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
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Get credit for work & life experience</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Lessons learned outside the classroom are relevant and valued at Athabasca University. Why spend time and money to study something you already know when Prior Learning Assessment and Recognition (PLAR) <span class="fa fa-external-link"></span> let you focus on new learning?</p>
                    <p class="my-4">A successful PLAR assessment will award you credit toward your AU undergraduate degree or certificate. This means:</p>
                    <p class="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;fewer courses to take</li>
                            <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;cost savings in course fees</li>
                        </ul>
                    </p>
                    <p class="my-4">To get the most benefit out of your past experience an assigned mentor will provide essential guidance throughout the development of your PLAR portfolio.</p>
                    <p class="my-4">You want to know if PLAR is an option for you? Please make sure to carefully read through all assessment details:</p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00',}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;How does PLAR work?</h4>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr style={{width: '90%'}}/>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Challenge a course for credit</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Everyone comes to Athabasca University with different life and educational experiences. This is why many of our courses have a challenge for credit option. Challenging a course for credit allows you to skip a course by proving that you already understand the course content.</p>
                </div>
            </div>
            <table style={{width: '100%', height: '100%'}}>
                <tr>
                    <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                    <td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please note: Graduate courses cannot be challenged for credit.</td>
                </tr>
            </table>
        </div>
    </div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>What courses can I challenge for credit?</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Most undergraduate courses above the 100 (preparatory) level have a challenge for credit option. There are, however, some specific circumstances where you can’t challenge an undergraduate course for credit, even if that option is normally available. To find out if a particular course offers challenge for credit, please see the information box at the top of the course page.</p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;View challenge for credit exceptions</h4>
                        </a>
                    </p>
                    <p class="my-4">Good to know:</p>
                    <p class="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;There is a non-refundable challenge for credit fee <span class="fa fa-external-link"></span></li>
                            <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;You must get approval to challenge a course from the faculty member (or designate) who is responsible for the course.</li>
                            <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;Courses successfully challenged for credit will not count toward your residency requirement (the total number of AU credits that must be taken within your program).</li>
                            <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-angle-right"></span>&emsp;You have only one opportunity to challenge a course. If you don’t complete or fail a challenge, you must register in the course and pass to get credit.</li>
                        </ul>
                    </p>
                    <p class="my-4">Got more questions about how to challenge a course? Find more information in our Undergraduate Calendar <span class="fa fa-external-link"></span></p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Submit your challenge for credit form today</h4>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr style={{width: '90%'}}/>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize:'40px'}}>Transfer AU credit to another institution</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Many Canadian post-secondaries have transfer agreements with Athabasca University that grant credit for most of our courses. However, we can’t guarantee acceptance of your AU credit. The decision to accept transfer courses is made by the institution you’re applying to, and you should contact them with any questions or concerns.</p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Learn more about transferring AU courses</h4>
                        </a>
                    </p>
                    <h6 class="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Visiting students</h6>
                    <p class="my-4">If you’re enrolled in a program at another university and want to take an AU course for one of your program requirements, you'll need to enrol as a non-program student. Once you have become a student, you can begin registering for courses right away.</p>
                    <p class="my-4">We encourage you to get a letter of permission from your school to ensure your AU credits will transfer to your program. This is for your peace of mind only – you don’t need to send us this letter.</p>
                    <p class="my-4">Once you've completed your AU course, you will also need to send an AU transcript to your school. You can do this online through myAU or by submitting a Transcript Request Form by fax or mail. <span class="fa fa-file-pdf-o"></span></p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00',}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Apply as a visiting student</h4>
                        </a>
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

export default TransferCredit;