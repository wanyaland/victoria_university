import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';

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
							<li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / Admissions / Admission Requirements</li>
						</ol>
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
						<h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Admission Requirements</h6>
						<br/>
						<p class="my-4" style={{fontSize: '22px'}}>We believe in education and learning opportunities for everyone. That’s why Victoria University programs are made to work for our students regardless of level of experience, previous grades or degrees. It’s our priority to ensure that our post-secondary online education is accessible and flexible, so our admission policy accepts undergraduate students to a program as long as they pass the minimum age restriction of 16 years of age.</p>
						<p class="mb-4" style={{fontSize: '18px'}}>From arts, to business, to tech, to nursing and many more: all of our over 850 courses are available to our students even without being enrolled in an AU undergraduate or graduate program. All of Victoria University’s minimum requirements listed here apply to both Canadian and international candidates.</p>
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
									<h4>Thinking of studying with us</h4>
									<p class="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
									<p class="my-4"><button class="btn_link2">Access the viewbook</button></p>
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
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5">
				<div class="welcome-grids row">
					<div class="col-lg-12 welcome-image">
						<div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
							<ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Undergraduate Admission Requirements<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">Athabasca University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Find all your requirements for your undergraduate program</h4>
												</a>
											</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;How to apply</h4>
												</a>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Graduate Admission Requirements<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">To apply for an Athabasca University graduate program you must have an undergraduate degree. Doctorate programs require a master’s degree to qualify for admission. Requirements for graduate programs vary and are listed on each program’s website. You can take some graduate courses without being admitted to the full program if you meet the non-program student requirements for said program. Requirements for graduate programs are listed on each program’s website.</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Find all your requirements for your graduate program</h4>
												</a>
											</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;How to apply</h4>
												</a>
											</p>
										</div>
									</div>	
									<br/>
								</div>
							</ul>
						</div>
					</div>
					<div class="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please ensure to review the specific requirements for the undergraduate or graduate program you are applying for carefully before submitting your final application.</td>
							</tr>
						</table>
					</div>	
				</div>
			</div>
		</div>
	</section>
    <section class="w3l-features-1">
		<div class="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
			<div class="container py-lg-5" id="fixer3">
					<div class="row grids-innf my-lg-5" id="fixer">
						<div class="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0', marginBottom: '40px'}}>
							<table style={{width: '100%', height: '100%'}}>
								<tr>
									<td class="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>Still have questions?</td>
								</tr>
							</table>
						</div>
						<div class="features-1-info col-lg-6 col-md-6" style={{borderRight: '#c2c2c2 1px solid'}}>
							<div class="features-1-info-info text-center">
								<h6 class="text-center">Ask Us</h6>
							</div>
							<div class="features-1-info-icon text-center">
								<span class="fa fa-edit" style={{color: '#0077b5', fontSize: '90px'}}></span>
							</div>
							<div class="features-1-info-info text-center">
								<h6 class="text-center">Get real-time answers to common questions about Athabasca University.</h6>
							</div>
                            <br/>
                            <br/>
						</div>
						<div class="features-1-info col-lg-6 col-md-6">
							<div class="features-1-info-info text-center">
								<h6 class="text-center">Call Us</h6>
							</div>
							<div class="features-1-info-icon text-center">
								<span class="fa fa-globe" style={{color: '#0077b5', fontSize:'90px'}}></span>
							</div>
							<div class="features-1-info-info text-center">
								<h6 class="text-center">(+256) 200 405 433 (international) or (+256) 200 405 433 (toll-free in Uganda.) Fax: (+256) 200 405 433</h6>
							</div>
                            <br/>
                            <br/>
						</div>
						<div class="features-1-info col-lg-12 col-md-12" id="fixer2" style={{paddingBottom: '0 !important'}}>
							<table style={{width: '100%', height: '100%'}}>
								<tr>
									<td class="text-center" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '10px'}}>You can call us during business hours (8:30 a.m. to 4:30 p.m.). It is currently 9:28 a.m. in Kampala.</td>
								</tr>
							</table>
						</div>
					</div>
			</div>
		</div>
	</section>
    <section class="w3l-features-1">
		<div class="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
			<div class="container py-lg-5">
				<div class="row grids-innf my-lg-5" style={{border: '#CCC 1px solid'}}>
					<div class="features-1-info col-lg-3 col-md-3" style={{borderRight: '#c2c2c2 1px solid', padding: '0'}}>
						<img src="assets/images/path1.jpg" class="img-fluid" id="fixer4"  alt="img"/>
					</div>
					<div class="features-1-info col-lg-9 col-md-9">
						<br/>
						<div class="features-1-info-icon text-center">
							<span class="fa fa-fax" style={{color: '#0077b5', fontSize: '90px'}}></span>
						</div>
						<div class="features-1-info-info text-center">
							<h6 class="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Get information about VU</h6>
							<p class="text-center" style={{fontSize:'18px'}}>We have information to share with you!</p>
						</div>
						<div class="container_form">
							<form action="/action_page.php">
								<div class="row_form">
									<div class="col-75">
									<input type="text" id="fname" class="form_fields" name="firstname" placeholder="Your name.."/>
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
									<input type="text" id="lname" class="form_fields" name="lastname" placeholder="Your last name.." />
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
									<input type="text" id="lname" class="form_fields" name="email" placeholder="Your email.."/>
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
										<div class="features-1-info col-lg-12 col-md-12" style={{height: '60px', width: '100%', marginTop: '40px !important', padding: '0'}}>
											<table style={{width: '100%', height: '100%'}}>
												<tr>
													<td class="text-left" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '20px'}}>Areas Of interest</td>
												</tr>
											</table>
										</div>
										<div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 1px solid', padding: '15px'}}>
											<p><input type="radio" id="1" name="gender" value="male"/>&nbsp;&nbsp;Apply for undergraduate program</p>
											<p><input type="radio" id="2" name="gender" value="male"/>&nbsp;&nbsp;Apply for graduate program</p>
											<p><input type="radio" id="3" name="gender" value="male"/>&nbsp;&nbsp;Take an undergraduate course</p>
											<p><input type="radio" id="4" name="gender" value="male"/>&nbsp;&nbsp;Take a course to transfer credit back to my university</p>
										</div>
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
									<input type="checkbox" id="lname" class="" name="" required/>&nbsp;<span>Yes, I would like to receive communications via e-mail from Victoria University</span>
									</div>
								</div>
								<div class="row_form">
									<input type="submit" value="Get Started" class="applier"/>
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

export default Requirements;