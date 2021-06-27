import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';


class Wil extends Component{
    render(){
        return(
            <React.Fragment>
			<BreadNavBar />
			<NavBar />
<section class="w3l-top-header-content">
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class=""  style={{color: '#EEE'}}>
				<Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/wil"><span className="underline" style={{color: "#EEE"}}>
					Work Integrated Learning 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ About WIL</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-team-main">
	<div class="team py-5">
		<div class="py-lg-5" >
			<div class="justify-content-center"  style={{display: 'flex'}}>
				<div class="col-lg-3 with_shadow">
					<WilNav />
				</div>
				<div class="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
					<div class="search_results">
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>How WIL works</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} class="text-left"></div>
						<br/><br/>
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>What is WIL?</b></h6>
						<p class="my-4" style={{fontSize: '24px'}}>WIL is known by many names across the University and Australia. You may have heard of WIL as practicum, clinical placement, internship or fieldwork, to name a few.</p>
						<p class="my-4">
							WIL also occurs in various types. While placement is the most known form, WIL can also be project-based learning, simulation activities, clinic-based, fieldwork and even virtual.
						</p>
						<p class="my-4">WIL opportunities are aligned with the curriculum of hundreds of courses offered by the University of Newcastle and are delivered at different times of the year.</p>
						<div class="w3l-features-1">
							<div class="features-1-mian py-5" style={{paddingBottom: '0rem !important'}}>
								<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
									<div class="row title-content">
										<div class="counter-main-sec">
											<div class="row">
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter">No.1</span>
														</h6>
													</div>
													<p>university in Australia for industry collaboration</p>
												</div>
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter">3000+</span>
														</h6>
													</div>
													<p>employer connections</p>
												</div>
											</div>
											<div class="row">
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter">89.5%</span>
														</h6>
													</div>
													<p>of our undergraduate graduates find employment within four months of graduating</p>
												</div>
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter">23,000+</span>
														</h6>
													</div>
													<p>Work Integrated Learning experiences delivered each year</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<p class="my-4">
							While work experience, volunteering and the like can be valuable to increase student employability skills, it is not work integrated learning. Work Integrated Learning - or WIL as we like to call it - is an umbrella term used to describe a range of approaches that integrate theory with the practice of work within a purposefully designed curriculum. That means, for it to be WIL, it needs to be part of a course or a graduation requirement of a program.
						</p>
						<div class="w3l-wecome-content-6">
							<div class="ab-content-6-mian py-5">
								<div class="container py-lg-5">
									<div class="welcome-grids row">
										<div class="welcome-image">
											<img src="assets/images/b3.jpg" class="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px', fontSize: '30px'}}><b>INSTERESTED IN HOSTING WIL</b>&nbsp;&nbsp;|&nbsp;&nbsp;Contact Us!</td>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#0077b5'}}><span class="fa fa-angle-right" style={{fontSize: '20px', color: '#fff'}}></span></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<BottomWil />
<Footer />
            </React.Fragment>
        )
    }
}

export default Wil;