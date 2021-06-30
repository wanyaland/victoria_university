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
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>FACTS YOU NEED TO KNOW ABOUT VICTORIA UNIVERSITY</b></h6>
						<p class="my-4" style={{fontSize: '24px'}}>At Victoria University we understand that good things happen when you’re outside yourcomfort zone, away from the classroom and beyond the textbooks. That’s why integrated practical experience is embedded into all of our degrees.</p>
						<p class="my-4">Providing meaningful, hands-on workplace experience to enrich the theoretical learning of students and to enhance the employability of graduates is a key focus of our University.</p>
						<div class="w3l-features-1">
							<div class="features-1-mian py-5" style={{paddingBottom: '0rem !important', backgroundColor: '#FFF'}}>
								<div class="container py-lg-5" style={{paddingBottom: '0rem !important', backgroundColor: '#FFF'}}>
									<div class="row title-content" style={{}}>
										<div class="counter-main-sec">
											<div class="row">
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter">No.</span><span class="counter" data-TargetNum="1" data-Speed="2000">0</span>
														</h6>
													</div>
													<p>University for industry collaboration. We are the leading university in Uganda and East Africa when it comes to Experiential Learning and Working Integrated Learning.</p>
												</div>
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter" data-TargetNum="103" data-Speed="2000">0</span><span>+</span>
														</h6>
													</div>
													<p>We have over 103 Employer Connections and Partnerships.</p>
												</div>
											</div>
											<div class="row">
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter" data-TargetNum="95" data-Speed="2000">0</span><span>%</span>
														</h6>
													</div>
													<p>of our Graduates find employment within 3 months of graduating</p>
												</div>
												<div class="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 class="titled">
															<span class="counter" data-TargetNum="3000" data-Speed="2000">0</span><span>+</span>
														</h6>
													</div>
													<p>3000 Work Integrated Learning Experiences: We are the only University with a program that is working to deliver 3000 Work Integrated Learning experiences to students in two years</p>
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