import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import BannerHome from './bannerHome';
import NewsHub from './newshub';
import Events from './events';
import Testimonies from './testimonies';
import Footer from './footer';
import { Link } from 'react-router-dom';
import SelectPath from './select-path';

class Home extends Component{
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
		<BannerHome />
<section class="w3l-features-1">
	<div class="features-1-mian py-5">
		<div class="container py-lg-5">
			<div class="row title-content">
			</div>
			<div class="counter-main-sec">
				<div class="">
					<h3 class="hny-title text-center howvu" style={{color: '#fff'}}>HOW VU WORKS<span class="triangle-down text-center"></span></h3>
					<br/>
					<h4 class="hny-title text-center" style={{color: '#002c44'}}>Victoria University</h4>
					<div class="text-center longdash"></div>
				</div>
				<br/>
				<br/>
				<div class="row">
					<div class="counter-gd col-md-4 text-center">
						<h4 class="titled4" style={{color: '#e25252'}}>Beyond Expectations</h4>
						<div id="counters_3">
							<h6 class="titled">
								<span class="counter" data-TargetNum="97" data-Speed="2000">0</span><span>%</span>
							</h6>
						</div>
						<p>of employers say VU grads meet or exceed their expectations</p>
					</div>
					<div class="counter-gd col-md-4 text-center">
						<h4 class="titled4" style={{color: '#e25252'}}>Prepared For The Jobs</h4>
						<div id="counters_3">
							<h6 class="titled">
								<span class="counter" data-TargetNum="97" data-Speed="2000">0</span><span>%</span>
							</h6>
						</div>
						<p>said VU graduates were well prepared for their jobs</p>
					</div>
					<div class="counter-gd col-md-4 text-center">
						<h4 class="titled4" style={{color: '#e25252'}}>Top Candidates</h4>
						<div id="counters_3">
							<h6 class="titled">
								<span class="counter" data-TargetNum="96" data-Speed="2000">0</span><span>%</span>
							</h6>
						</div>
						<p>said they would hire another VU graduate</p>
					</div>
				</div>
				<br/><br/>
				<div class="text-center">
					{/* <a class="logo-2" href="home.php">
                        <h3 class="lohny-2 text-center" style={{color:'#0077b5'}}><span class="fa fa-chain programfa"></span>&nbsp;What Makes VU Unique</h3>
					</a> */}
                    <p>
					<Link class="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
						<span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;&nbsp;&nbsp;</span><span class="underline">What Makes VU Unique</span>
					</Link>
					</p>   
				</div>
			</div>
			{/* Start of close */}
		</div>
	</div>
</section>
<section class="w3l-content-5">
	<div class="content-5-main">
		<div class="container">
			<div class="content-info-in row">
				<div class="content-gd col-lg-6">
						<h3 class="hny-title two" style={{fontSize: '100px'}}>DISCOVER</h3>
				</div>
			</div>
			<div class="content-info-in row">
			</div>
		</div>
	</div>
</section>
        <SelectPath />
		<div className="marginize"></div>
		<div className="marginize2"></div>
		<Testimonies />
		<div className="marginize"></div>
		<div className="marginize2"></div>
<section class="w3l-features-1">
	<div class="features-1-mian py-5">
		<div class="">
			<br/>
			<br/>
			<br/>
			<h3 class="hny-title text-center" style={{color:'#0077b5'}}>Maximize</h3>
			<h4 class="hny-title text-center">Take Advantage Of VU's Offerings</h4>
			<h4>&nbsp;</h4>
			<div class="text-center dashunder"></div>
		</div>
		<br/>
		<br/>
		<br/>
		<div class="w3l-footer-16">
			<div class="col-md-8 mt-md-0 text-center justify-content-center dotcontrol">	
				<ul class="social d-flex dotcontrol">
					<li><a href="home" style={{backgroundColor: '#e6a329', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#9b6a6a', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#0077b5', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#b951ce', height: '20px', width: '20px'}}>&nbsp;</a></li>
				</ul>
			</div>
		</div>
		<div class="container py-lg-5">
			<div class="row title-content">
			</div>
			<div class="row grids-innf my-lg-5">
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-graduation-cap circler circle1 orange_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><Link to="/programs">Online Education</Link></h6>
						<span class="dot orange"></span>
						<p><Link to="/admissions">Flexible Scheduling</Link></p>
						<p><Link to="/about">How VU Works</Link></p>
					</div>
					<div style={{border: '#000 1px solid;'}}></div>
					<div class="text-center smalldash orange_d"></div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-user circler circle2 brown_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><Link to="/admissions">Admissions</Link></h6>
						<span class="dot brown"></span>
						<p><Link to='/requirements'>Requirements</Link></p>
						<p><Link to="/dates-deadlines">Date &amp; Deadlines</Link></p>
					</div>
					<div class="text-center smalldash brown_d"></div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-book circler circle3 blue_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><Link to="/transfer-credit">Transfer Credit</Link></h6>
						<span class="dot blue"></span>
						<p><Link to="/transfer-credit">Transfer to a VU program</Link></p>
						<p><Link to="/admissions">Courses for other tuitions</Link></p>
					</div>
					<div  class="text-center smalldash blue_d"></div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-money circler circle3 purple_c"></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><Link to="/tution-fees">Tution &amp; Fees</Link></h6>
						<span class="dot purple"></span>
						<p><Link to="/tuition-fees">Calculate Fees</Link></p>
						<p><Link to="/tuition-fees">Financial Aid</Link></p>
					</div>
					<div class="text-center smalldash purple_d"></div>
				</div>
			</div>
			{/* First close */}
			</div>
	</div>
</section>
<hr class="text-center" style={{color:'#000', width: '90%'}}></hr>
<NewsHub />
<Events />
<div className="marginize"></div>
<div className="marginize2"></div>
<Footer />
    </React.Fragment>
        );
    }
}

export default Home;