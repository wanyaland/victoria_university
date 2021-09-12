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
		const under = 'undergraduate'
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
				<Link to="/"><span className="underline" style={{color: "#EEE"}}>
						Home 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Admissions</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-apply-6">
	<div className="apply-info py-5">
		<div className="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
			<div className="">
					<h4 className="text-center"><span style={{borderLeft: '8px #D4484A solid'}}>&nbsp;Admissions At VU</span></h4>
				</div>
			<div className="apply-grids-info row">
					<div className="row mt-lg-5 mt-4 col-md-12">
						<div className="appyl-sub-icon-info text-center">
							<p>Connect with Admissions to learn how Victoria University and our world-renowned cooperative education program could be the right fit for you. We are here to make applying as simple and convenient as possible.</p>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	  <div className="ab-content-6-mian py-5">
			 <div className="container py-lg-5">
					<div className="welcome-grids row">
							<div className="col-lg-6 mb-lg-0 mb-5" style={{borderTop: '#D4484A 4px solid'}}>
								<h4 className="hny-title" style={{fontSize: '32px'}}>
									What's your student profile?
								</h4>
								<p className="my-4">Since admission requirements vary by program, degree, and course choices make sure to identify which student profile matches your interests before starting the application process!</p>
								<p>
									<Link className="logo-2" to={`/prog-index${under}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
										<span className="lohny-2"><span id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Undergraduate Programs</span>
									</Link>	
								</p>
								<br/>
							</div>
							<div className="col-lg-6 welcome-image">
                                <img src="assets/images/bg1.jpg" className="img-fluid" alt="" />
							</div>	
						</div>
				 </div>
			</div>
</section>
<section className="w3l-wecome-content-6">
	  <div className="ab-content-6-mian py-5">
			 <div className="container py-lg-5">
					<div className="welcome-grids row">
                            <div className="col-lg-6 welcome-image">
                                <img src="assets/images/bg1.jpg" className="img-fluid" alt=""/>
                            </div>
							<div className="col-lg-6 mb-lg-0 mb-5" style={{borderTop: '#D4484A 4px solid'}}>
								<h4 className="hny-title" style={{fontSize: '32px'}}>
									Admission requirements
								</h4>
								<p className="my-4">As long as you meet the minimum age requirement of being at least 16 years old, you'll fit right in! With our open admission policy becoming an online student at Victoria University has never been easier.</p>
								<p>
									<Link className="logo-2" to="/requirements" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
										<span className="lohny-2"><span id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Browse our different degree and course requirements</span>
									</Link>	
								</p>
								<br/>
							</div>
						</div>
				 </div>
			</div>
</section>
<section className="w3l-content-5">
	<img src="assets/images/admission_banner.jpg" className="img-fluid" alt="Discover"/>
</section>
<section className="w3l-footer-16 text-center">
    <div className="container">
        <br/>
        <span className="fa fa-puzzle-piece text-center" style={{color: 'steelblue', fontSize: '80px'}}></span>
        <h5 className="hny-title text-center" style={{color:'#0077b5', fontSize: '30px'}}>Wherever you want to take your online education, Victoria University is <b>the perfect fit for you.</b></h5>
    </div>
</section>
<br/>
<br/>
<br/>
<br/>
<section className="w3l-wecome-content-6">
	  <div className="ab-content-6-mian py-5">
			 <div className="container py-lg-5">
					<div className="welcome-grids row">
                            <div className="col-lg-3 welcome-image">
                                <span className="fa fa-laptop img-fluid text-center" style={{fontSize: '250px', color: '#7ea7f5'}}></span>
                            </div>	
							<div className="col-lg-9 mb-lg-0 mb-5">
								<h4 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>
									Make your previous experience work for you: <b>Transfer Credits.</b>
								</h4>
								<p className="my-4">We don’t want to teach you things you already know. If you have a degree, work experience, or any other relevant experience, at VU you can make it count! Getting credit for your knowledge can save you time and money on your way</p>
								<p>
									<Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
										<span className="lohny-2"><span id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Learn more about advanced credits</span>
									</Link>	
								</p>
								<br/>
							</div>
						</div>
				 </div>
			</div>
</section>
<section className="w3l-wecome-content-6">
	  <div className="ab-content-6-mian py-5">
			 <div className="container py-lg-5" >
					<div className="welcome-grids row">
                            <div className="col-lg-3 welcome-image">
                                <span className="fa fa-clock-o  text-center" style={{fontSize: '250px', color: '#7ea7f5'}}></span>
                            </div>	
							<div className="col-lg-9 mb-lg-0 mb-5">
								<h4 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>
									Dates and Deadlines? We <b>prioritize your schedule and timing.</b>
								</h4>
								<p className="my-4">It’s important for us to make sure that your online education syncs with your life rather than complicates it. Which is why we like to be as flexible as possible and have our admission policies reflect that.</p>
								<p>
									<Link className="logo-2" to="/dates-deadlines" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
										<span className="lohny-2"><span id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Check which dates are important for your classes or degree</span>
									</Link>	
								</p>
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
                            <div className="col-lg-3 welcome-image">
                                <span className="fa fa-mobile-phone img-fluid text-center" style={{fontSize: '250px', color: '#7ea7f5',}}></span>
                            </div>	
							<div className="col-lg-9 mb-lg-0 mb-5">
								<h4 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>
									Everything else in life works <b>pay-as you-go</b>. So should your tuition.
								</h4>
								<p className="my-4">After a one-time non-refundable fee when you first apply to Victoria University, you pay for your classes only when you register for them. You have full control over your pace and your finances.</p>
								<p>
									<Link className="logo-2" to="/tuition-fees" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
										<span className="lohny-2"><span id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Find out how Tuition & Fees work at VU.</span>
									</Link>	
								</p>
								<br/>
							</div>
						</div>
				 </div>
			</div>
</section>
<section className="w3l-footer-16 text-center">
    <div className="container">
        <img src="assets/images/fav.png" className="text-center" title="Victoria University" width="80" height="80" alt="img"/>
        <h3 className="hny-title text-center" style={{color:'#0077b5'}}>Ready to get your online education started?</h3>
        <h4 className="hny-title text-center">Choose a program that’s right for you and set yourself up for success with an accredited undergraduate, graduate, doctorate degree or single courses that match your personal goals.</h4>
        <div className="button-4-pink justify-content-center text-center" style={{margin: '0 auto', padding: '0px 7px'}}>
            <div className="eff-4-pink"></div>
            <a href="https://eadmissions.vu.ac.ug/" target="_blank" rel="noreferrer"> Apply Now</a>
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