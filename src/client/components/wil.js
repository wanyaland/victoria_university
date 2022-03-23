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
		<div className="py-lg-5" >
			<div className="justify-content-center"  style={{display: 'flex'}}>
				<WilNav />
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderBottom: '#CCC 1px solid', borderRight: '#CCC 1px solid', borderTop: '#CCC 1px solid'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>About WIL</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
						<br/>
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
						Organizations, governments and businesses are presently facing uncertainties about the future. Not only are they concerned with monitoring performance, regulation and compliance, finding and recruiting the right people, developing the right skills and competencies as well as maintaining reputation and managing change, they are also in need of lightening the work-load of current employees, working on projects that have been put on hold for quite some time, and bringing new technology and digital skills into the workplace. 
						<p className='my-4'>Victoria University understands this unprecedented turmoil and its attendant effects. Through our Work-Integrated Learning (WIL) the university is ready to help your organization;</p>
						<p className='my-4'>1.        Obtain access to a pool of new thinking and ideas based on emerging research and practices through a deeper and honest collaboration with faculty and students</p>
						<p className='my-4'>2.        Effortlessly find and recruit graduates in the future, reducing your costs and risks during the recruitment of competent and motivated talents groomed in your areas of operations</p>
						<p className='my-4'>3.        enhance your business and/or stakeholder engagement while improving and promoting your products, corporate image and services because of investing in the future of the next generation of workers</p>
						Victoria University is a premier international institution of higher education and a global focal point for research bringing together students, faculty, and industry complete with expertise and knowledge from all continents of the world to fast-track business, technological, socio-cultural and scientific innovations tackling the needs and issues in the world today.
						<p className='my-4'>In order to fulfil our mandate of bequeathing the world industry-trained, technologically-savvy and innovative workforce, Victoria University has embarked on a new journey of integrating the in-classroom theoretical discourse with real-world practical industry-specific experiential learning in a work-integrated learning (WIL) environment.
						Work-Integrated Learning (WIL), is viewed as an “umbrella term for a range of applications and strategies that integrate theory with the practice of work within a purposefully designed curriculum” (Patrick, Peach, & Pocknee, 2009). </p>
						<p className='my-4'>This involves a partnership between Victoria University, our students (and their sponsors), a trade-specific organization like yours and the regulatory authority-the government. Our focus in this ‘new normal,’ is to produce a highly skilled workforce that can meet industry and community needs.
						The Victoria University WIL is geared towards improving the employability of graduates by providing practical experiences directly related to university courses, as well as facilitating the transition from university to work to improve productivity outcomes for employers and the economy as envisaged by Brimble & Freudenberg, (2010). </p>
						</p>
						<p className='my-4'><span style={{fontWeight: '500'}}>Our Vision</span>To be a world class University for transformational education</p>
						<p className='my-4'><span style={{fontWeight: '500'}}>Our Mission</span>To provide a dynamic environment for learning, innovation, research and community engagement</p>
						<div className="w3l-wecome-content-6">
							<div className="ab-content-6-mian py-5">
								<div className="container py-lg-5">
									<div className="welcome-grids row">
										<div className="welcome-image">
											<img src="assets/images/capture.jpg" className="img-fluid" alt="" />
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