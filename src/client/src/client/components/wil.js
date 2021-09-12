import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';


class Wil extends Component{
    render(){
        return(
            <React.Fragment>
			<BreadNavBar />
			<NavBar />
<section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className=""  style={{color: '#EEE'}}>
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
<WilBanner />
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="container py-lg-5" >
			<div className="justify-content-center"  style={{display: 'flex'}}>
					<WilNav />
				<div className="col-lg-9"   style={{padding: '0px', backgroundColor: '#FFF'}}>
					<div className="search_results">
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>About WIL</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
						<br/><br/>
						<p className="my-4" style={{fontSize: '30px', color: '#0077b5'}}><b>Facts you need to know about Victoria University</b></p>
						<p className="my-4">At Victoria University we understand that good things happen when you’re outside yourcomfort zone, away from the classroom and beyond the textbooks. That’s why integrated practical experience is embedded into all of our degrees.</p>
						<p className="my-4">Providing meaningful, hands-on workplace experience to enrich the theoretical learning of students and to enhance the employability of graduates is a key focus of our University.</p>
						<div className="w3l-features-1">
							<div className="features-1-mian py-5" style={{paddingBottom: '0rem !important', backgroundColor: '#FFF'}}>
								<div className="container py-lg-5" style={{paddingBottom: '0rem !important', backgroundColor: '#FFF'}}>
									<div className="row title-content" style={{}}>
										<div className="counter-main-sec">
											<div className="row">
												<div className="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 className="titled">
															<span className="counter">No.</span><span className="counter" data-TargetNum="1" data-Speed="2000">0</span>
														</h6>
													</div>
													<p>University for industry collaboration. We are the leading university in Uganda and East Africa when it comes to Experiential Learning and Working Integrated Learning.</p>
												</div>
												<div className="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 className="titled">
															<span className="counter" data-TargetNum="103" data-Speed="2000">0</span><span>+</span>
														</h6>
													</div>
													<p>We have over 103 Employer Connections and Partnerships.</p>
												</div>
											</div>
											<div className="row">
												<div className="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 className="titled">
															<span className="counter" data-TargetNum="95" data-Speed="2000">0</span><span>%</span>
														</h6>
													</div>
													<p>of our Graduates find employment within 3 months of graduating</p>
												</div>
												<div className="counter-gd col-md-6 text-center">
													<div id="counters_3">
														<h6 className="titled">
															<span className="counter" data-TargetNum="3000" data-Speed="2000">0</span><span>+</span>
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
						<p className="my-4">
							While work experience, volunteering and the like can be valuable to increase student employability skills, it is not work integrated learning. Work Integrated Learning - or WIL as we like to call it - is an umbrella term used to describe a range of approaches that integrate theory with the practice of work within a purposefully designed curriculum. That means, for it to be WIL, it needs to be part of a course or a graduation requirement of a program.
						</p>
						<div className="w3l-wecome-content-6">
							<div className="ab-content-6-mian py-5">
								<div className="container py-lg-5">
									<div className="welcome-grids row">
										<div className="welcome-image">
											<img src="assets/images/wil_banner.jpg" className="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<table style={{width: '100%', height: '100%'}}>
						
							<tr>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px', fontSize: '30px'}}><b>INSTERESTED IN HOSTING WIL</b>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/contactwil" className="underline" style={{color: '#FFF'}}>Contact Us!</Link></td>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#0077b5'}}><Link to="/contactwil" className="underline" style={{color: '#FFF'}}><span className="fa fa-angle-right" style={{fontSize: '20px', color: '#fff'}}></span></Link></td>
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