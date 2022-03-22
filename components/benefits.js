import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class Benefits extends Component{
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
                    <h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Organization / Partner / Employer Benefits</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
                        {/* <br/>
                        <br/> */}
                        {/* <p style={{fontSize: '30px', color: '#0077b5'}}><b>What can WIL do for your organisation?</b></p> */}
						<p className="my-4">The Strategic benefits of Victoria University WIL program for employers Fresh ideas and approaches | Recruitment pathway | Flexible options Workplace-ready graduate | Return on investment | Partnerships with Universities</p>
                        {/* <p className="my-4" style={{fontSize: '30px', color: '#0077b5'}}><b>Benefits for hosts:</b></p>
                        <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-check-circle-o"></span>&emsp;Fresh ideas and approaches, Since students bring fresh ideas and approaches to the workplace, by sharing the latest research and thinking in the field they study, the organization is able to latch on to the latest buzz in that line of business. </li>
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
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Fresh ideas and approaches:</span> Since students bring fresh ideas and approaches to the workplace, by sharing the latest research and thinking in the field they study, the organization is able to latch on to the latest buzz in that line of business. </li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Recruitment pathway:</span> Victoria University WIL program will provide a customized recruitment pathway which is an opportunity to closely examine the skills and suitability of students before they graduate.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Flexible options:</span> Victoria University WIL program also offers an enthusiastic, short term ‘employee’ who can undertake projects or tasks which might not otherwise get done on a regular basis. The company can commission short customer surveys, product placements, events etc.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Workplace-ready graduate:</span> The program will also engender valuable training ground in mentoring and management to existing employees. The existing employees will now have a number of enthusiastic human resource to coach in that industry. In the long-run, the organization has a steady pool of ‘company-trained and work-ready,’ human resources ready for immediate deployment.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Return on investment:</span> Partnering with Victoria University WIL program is an important chance for companies to venture into Victoria University’s communities and business enterprises. It encapsulates new industry connections engendering and exhibiting company products and services. This has the effect of promoting the organizations name, goodwill and attendant marketability. The return on investment is huge.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Partnership with Victoria University:</span> Victoria University WIL program is an opportunity for partners to also make their contribution to their industry, and the communities they serve as thought leaders. Participating organizations and their captains can make well informed and tested ideas to curriculum design and to develop research or other relationships with Victoria University.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;<span style={{fontWeight: '500'}}>Government Recognition as a supporter of WIL:</span> There will be opportunities for the government to recognize the efforts of the host organization in implementing and supporting the WIL program.</li>
                            </ul>
                        </p>
                        <p style={{fontSize: '30px', color: '#0077b5'}}><b>What can WIL do for your organisation?</b></p>
                        <p className="my-4">Victoria University's commitment to providing world-class learning opportunities for its students underpins WIL as a process of reciprocal involvement for the mutual benefit of all involved.</p>
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
                        </p>
                        <p className="my-4">
                            WIL allows industry and the Victoria University to work together to develop Uganda;s future workforce and to help build our national economy, through ensuring that graduates are adept and sufficiently agile to face the challenges of a changing job market.
                        </p>
                        <div className="w3l-wecome-content-6">
							<div className="ab-content-6-mian py-5">
								<div className="container py-lg-5">
									<div className="welcome-grids row">
										<div className="welcome-image">
											<img src="assets/images/field.jpg" className="img-fluid" alt="" />
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

export default Benefits;