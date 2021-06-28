import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
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
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section class="w3l-top-header-content">
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="">
				<Link to="/"><span className="underline" style={{color: "#EEE"}}>
						Home 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Admissions</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-apply-6">
	<div class="apply-info py-5">
		<div class="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
			<div class="">
					<h4 class="text-center"><span style={{borderLeft: '8px #D4484A solid'}}>&nbsp;Admissions At VU</span></h4>
				</div>
			<div class="apply-grids-info row">
					<div class="row mt-lg-5 mt-4 col-md-12">
						<div class="appyl-sub-icon-info text-center">
							<p>Connect with Admissions to learn how Victoria University and our world-renowned cooperative education program could be the right fit for you. We are here to make applying as simple and convenient as possible.</p>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	  <div class="ab-content-6-mian py-5">
			 <div class="container py-lg-5">
					<div class="welcome-grids row">
							<div class="col-lg-6 mb-lg-0 mb-5" style={{borderTop: '#D4484A 4px solid'}}>
								<h4 class="hny-title" style={{fontSize: '32px'}}>
									What's your student profile?
								</h4>
								<p class="my-4">Since admission requirements vary by program, degree, and course choices make sure to identify which student profile matches your interests before starting the application process!</p>
								<p>
									<Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
										<span class="lohny-2"><span id="iconner11" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00',color: '#FFF'}}></span>&nbsp;</span><span class="underline">Undergraduate Programs</span>
									</Link>	
								</p>
								<br/>
							</div>
							<div class="col-lg-6 welcome-image">
                                <img src="assets/images/bg1.jpg" class="img-fluid" alt="" />
							</div>	
						</div>
				 </div>
			</div>
</section>
<section class="w3l-wecome-content-6">
	  <div class="ab-content-6-mian py-5">
			 <div class="container py-lg-5">
					<div class="welcome-grids row">
                            <div class="col-lg-6 welcome-image">
                                <img src="assets/images/bg1.jpg" class="img-fluid" alt=""/>
                            </div>	
							<div class="col-lg-6 mb-lg-0 mb-5" style={{borderTop: '#D4484A 4px solid'}}>
								<h4 class="hny-title" style={{fontSize: '32px'}}>
									Admission requirements
								</h4>
								<p class="my-4">As long as you meet the minimum age requirement of being at least 16 years old, you'll fit right in! With our open admission policy becoming an online student at Victoria University has never been easier.</p>
								<p>
									<Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
										<span class="lohny-2"><span id="iconner9" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner10" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00',color: '#FFF'}}></span>&nbsp;</span><span class="underline">Browse our different degree and course requirements</span>
									</Link>	
								</p>
								<br/>
							</div>
						</div>
				 </div>
			</div>
</section>
<section class="w3l-content-5">
	<div class="content-5-main">
		<div class="container">
		<h4 class="text-center" style={{color: '#FFF'}}>Guidelines for International Students</h4>
			<div class="content-info-in row">
				<p>Admission requirements, deadlines and fees vary by program and depending on whether you study from within Victoria University or not. View our guidelines to find out what applies to your specific choice of courses, program and educational background.</p>
			</div>
			<p>
				<Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
					<span class="lohny-2"><span id="iconner7" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00',color: '#FFF'}}></span>&nbsp;</span><span class="underline">Check our guidelines for International Students</span>
				</Link>	
			</p>
		</div>
	</div>
</section>
<section class="w3l-footer-16 text-center">
    <div class="container">
        <br/>
        <span class="fa fa-puzzle-piece text-center" style={{color: 'steelblue', fontSize: '80px'}}></span>
        <h5 class="hny-title text-center" style={{color:'#0077b5', fontSize: '30px'}}>Wherever you want to take your online education, Victoria University is <b>the perfect fit for you.</b></h5>
    </div>
</section>
<br/>
<br/>
<br/>
<br/>
<section class="w3l-wecome-content-6">
	  <div class="ab-content-6-mian py-5">
			 <div class="container py-lg-5">
					<div class="welcome-grids row">
                            <div class="col-lg-3 welcome-image">
                                <span class="fa fa-laptop img-fluid text-center" style={{fontSize: '250px', color: '#7ea7f5'}}></span>
                            </div>	
							<div class="col-lg-9 mb-lg-0 mb-5">
								<h4 class="hny-title" style={{fontSize: '32px'}}>
									Make your previous experience work for you: <b>Transfer Credits.</b>
								</h4>
								<p class="my-4">We don’t want to teach you things you already know. If you have a degree, work experience, or any other relevant experience, at VU you can make it count! Getting credit for your knowledge can save you time and money on your way</p>
								<p>
									<Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
										<span class="lohny-2"><span id="iconner5" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00',color: '#FFF'}}></span>&nbsp;</span><span class="underline">Learn more about advanced credits</span>
									</Link>	
								</p>
								<br/>
							</div>
						</div>
				 </div>
			</div>
</section>
<section class="w3l-wecome-content-6">
	  <div class="ab-content-6-mian py-5">
			 <div class="container py-lg-5" >
					<div class="welcome-grids row">
                            <div class="col-lg-3 welcome-image">
                                <span class="fa fa-clock-o  text-center" style={{fontSize: '250px', color: '#7ea7f5'}}></span>
                            </div>	
							<div class="col-lg-9 mb-lg-0 mb-5">
								<h4 class="hny-title" style={{fontSize: '32px'}}>
									Dates and Deadlines? We <b>prioritize your schedule and timing.</b>
								</h4>
								<p class="my-4">It’s important for us to make sure that your online education syncs with your life rather than complicates it. Which is why we like to be as flexible as possible and have our admission policies reflect that.</p>
								<p>
									<Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
										<span class="lohny-2"><span id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00',color: '#FFF'}}></span>&nbsp;</span><span class="underline">Check which dates are important for your classes or degree</span>
									</Link>	
								</p>
								<br/>
							</div>
						</div>
				 </div>
			</div>
</section>
<section class="w3l-wecome-content-6">
	  <div class="ab-content-6-mian py-5">
			 <div class="container py-lg-5">
					<div class="welcome-grids row">
                            <div class="col-lg-3 welcome-image">
                                <span class="fa fa-mobile-phone img-fluid text-center" style={{fontSize: '250px', color: '#7ea7f5',}}></span>
                            </div>	
							<div class="col-lg-9 mb-lg-0 mb-5">
								<h4 class="hny-title" style={{fontSize: '32px'}}>
									Everything else in life works <b>pay-as you-go</b>. So should your tuition.
								</h4>
								<p class="my-4">After a one-time non-refundable fee when you first apply to Victoria University, you pay for your classes only when you register for them. You have full control over your pace and your finances.</p>
								<p>
									<Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
										<span class="lohny-2"><span id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00',color: '#FFF'}}></span>&nbsp;</span><span class="underline">Find out how Tuition & Fees work at AU.</span>
									</Link>	
								</p>
								<br/>
							</div>
						</div>
				 </div>
			</div>
</section>
<section class="w3l-footer-16 text-center">
    <div class="container">
        <img src="assets/images/fav.png" class="text-center" title="Victoria University" width="80" height="80" alt="img"/>
        <h3 class="hny-title text-center" style={{color:'#0077b5'}}>Ready to get your online education started?</h3>
        <h4 class="hny-title text-center">Choose a program that’s right for you and set yourself up for success with an accredited undergraduate, graduate, doctorate degree or single courses that match your personal goals.</h4>
        <div class="button-4-pink justify-content-center text-center" style={{margin: '0 auto', padding: '0px 7px'}}>
            <div class="eff-4-pink"></div>
            <a href="hmme"> Apply Now</a>
        </div>
    </div>
</section>
<br/>
<br/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Admissions;