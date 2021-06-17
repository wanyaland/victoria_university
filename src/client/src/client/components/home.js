import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import BannerHome from './bannerHome';
import NewsHub from './newshub';
import Events from './events';
import Testimonies from './testimonies';
import Footer from './footer';
import { Link } from 'react-router-dom';

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
        <section class="w3l-content-6">
	            <div class="content-6-mian py-5">
		            <div class="container py-lg-5">

			{/* <div class="row title-content">
				<div class="col-lg-4 title-left">
					<h3 class="hny-title" style={{color:'#0077b5'}}>Welcome To VU</h3>
				</div>
				<div class="col-lg-8 title-info">
					<p>Victoria University is one of the leading universities in Uganda and stands out as a center for academic excellence. We offer a wide variety of courses and our qualifications are designed to meet the needs of the market place.</p>
				</div>
			</div> */}
		            </div>
			<section class="w3l-footer-16 text-center">
				<div class="">
					<img src="assets/images/fav.png" class="text-center bordered" title="Victoria University" width="120" height="120" alt="img"/>
					<h3 class="hny-title text-center" style={{color:'#0077b5'}}>Select Your Path</h3>
					<h6 class="hny-title text-center">Choose your path and jump right in</h6>
				</div>
			</section>
			<div class="content-info-in row mt-md-5 mt-4 justify-content-center" style={{marginLeft: 0, marginRight:0}}>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<div class="justify-content-center pathdots orange">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" to="/apply">
						<img src="assets/images/path1.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center hover-team" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Foundation</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer orange_d"></div>
							</div>
						</div>
					</Link>
				</div>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<div class="justify-content-center pathdots brown">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" to="/apply">
						<img src="assets/images/path3.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center hover-team2" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Undergraduate</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer brown_d"></div>
							</div>
						</div>
					</Link>
				</div>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<div class="justify-content-center pathdots blue">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" to="/apply">
						<img src="assets/images/path2.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center hover-team3" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Postgraduate</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer blue_d"></div>
							</div>
						</div>
					</Link>
				</div>
				<div class="col-lg-3 col-md-5 imghrs flexd">
					<div class="justify-content-center pathdots purple">&nbsp;</div>
					<div class="justify-content-center pathdots_round">&nbsp;</div>
					<Link class="imghr" to="/apply">
						<img src="assets/images/path4.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div class="details text-center hover-team4" style={{height: '100%'}}>
							<div class="text-center path_stick"></div>
							<div class="" style={{top: '1.8%', position: 'relative'}}>
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" class="path_img"/>
							</div>
							<br/>
							<div class="title">Diploma</div><br/>
							<div style={{top: '14%', position: 'relative'}}>
								<div class="text"><div style={{width:'15%', border:'#FFF 2px solid', margin: '0 auto'}} class="text-center"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div class="fa fa-angle-right path_pointer purple_d"></div>
							</div>
						</div>
					</Link>
				</div>

			</div>

	            </div>
        </section>
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
		<section class="w3l-footer-16">
			<div class="col-md-8 mt-md-0 text-center justify-content-center dotcontrol">	
				<ul class="social d-flex dotcontrol">
					<li><a href="home" style={{backgroundColor: '#e6a329', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#9b6a6a', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#0077b5', height: '20px', width: '20px'}}>&nbsp;</a></li><hr class="dotconnect" />
					<li><a href="home" style={{backgroundColor: '#b951ce', height: '20px', width: '20px'}}>&nbsp;</a></li>
				</ul>
			</div>
		</section>
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