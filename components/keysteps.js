import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class keySteps extends Component{
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
					<span style={{color: '#EEE'}}>/ Benefits</span>
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
                    <h6 style={{color: '#076ea5', fontSize: '34px'}}><b>The key steps in Victoria University Work-Integrated Learning</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
                        <br/>
                        <br/>
                        {/* <p style={{fontSize: '30px', color: '#0077b5'}}><b>What can WIL do for your organisation?</b></p>
						<p className="my-4">Victori, a University's commitment to providing world-class learning opportunities for its students underpins WIL as a process of reciprocal involvement for the mutual benefit of all involved.</p>
                        <p className="my-4" style={{fontSize: '30px', color: '#0077b5'}}><b>Benefits for hosts:</b></p>
                        <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Benefit from the injection of new and innovative ideas, cognitive diversity, and ‘fresh eyes’ of students.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Work with Victoria University staff to design a project to create real-world outcomes for your organisation.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Have direct access to a pool of talented graduates for future employment.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Provide your current staff with a valuable professional development opportunity as mentees.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Engage directly with the Victoria University and help to shape the future of the degree programs offered by the world-class organisation.</li>
                            </ul>
                        </p>
                        <p className="my-4" style={{fontSize: '34px', color: '#0077b5'}}><b>Benefits for students:</b></p>
                        <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;WIL makes students career-ready.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Enriched knowledge of field of study through hands on exposure in the workplace.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Provides an insight into the professional attitudes and attributes needed to be prepared for the jobs of the future.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;WIL provides a competitive advantage in the competitive global employment marketplace.</li>
                            </ul>
                        </p> */}
                        <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Step one:</span> VICTORIA University Enters into a partnership with the host organization and a Memorandum of understanding (MOU) is signed.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Step two:</span> Upon acceptance of the proposal, host organization designates a point of contact/liaison who is then directly attached to the faculty head of Department (HoD) and the GRIP office at Victoria University, gets a notification.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Step three:</span> A meeting between the host organization liaison and Victoria University takes place to go through the learning outcomes and key result areas expected of the student and all the stakeholders.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Step four:</span> Students are released by Victoria University after a faculty/GRIP Office briefing on expectations and they sign a pledge emphasizing their commitment to work, research, learn and write scheduled reports from the host organization and the university.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Step five:</span> The students commence WIL experiential learning according to the schedule agreed upon by the host organization and all the stakeholders.</li>
                            </ul>
                        </p>
                        <div className="w3l-wecome-content-6">
							<div className="ab-content-6-mian py-5">
								<div className="container py-lg-5">
									<div className="welcome-grids row">
										<div className="welcome-image">
											<img src="assets/images/wil3.jpg" className="img-fluid" alt="" />
										</div>
                                        {/* <span><i><span className="fa fa-sort-asc"></span><b>Video:</b> BMG Partnership</i></span> */}
									</div>
								</div>
							</div>
						</div>
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

export default keySteps;