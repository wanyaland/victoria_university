import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class WilFaqs extends Component{
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
					<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Frequently Asked Questions</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
                        <br/>
                        {/* <p style={{fontSize: '30px', color: '#0077b5'}}><b>What can WIL do for your organisation?</b></p> */}
						<p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>1. Are all industries/Sectors covered by this Victoria University WIL Program?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Victoria University offers a variety of courses from diploma level, to undergraduate and post graduate studies. These cover most sectors of the global economy and body politic. Therefore, most sectors can benefit from participating in the Victoria University WIL program. <br/>Professional fields such as nursing, teaching and engineering already have a structured work integrated learning associated with professional accreditation requirements. Other courses/programs; Law, Humanities & Social Sciences, Information Technology and Computer Sciences, Business and Agriculture are all fused with Work integrated learning. <br/>Adjustments and reasonable accommodation can be made to fit the unique expectations and requirements of an organization. </span></li>
                            </ul>
						</p>
						<p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>2. Does the organization need to provide anything for the student? </p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">The participating organization should offer a rewarding workplace experience for the student which includes the tools they need to do the work /tasks assigned to them. The common work-place tools of trade: a workspace, suitable equipment and appropriate mentoring and supervision. The organization is not required to pay any money to the student placed.</span></li>
                            </ul>
						</p>
						<p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>3. How will this program help my organization/business?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">When an organization mentors a student, the benefits are immense. The business/organisation has extra pairs of hands available immediately to be engaged in your projects, events and campaigns. The full-time staff who mentor the student will learn valuable management skills. Needless to say, you will be aiding to improve the quality of graduates available to your industry. Other benefits have been discussed elsewhere in this proposal</span></li>
                            </ul>
						</p>
						<p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>4. When are students available for the VU WIL?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Victoria University WIL program is unique. Our students are available throughout the year. We request for 2-3 days a week 8am-5pm which translates to 16-24hours a week. Victoria University WIL department (GRIP) and specific faculties will work with your organization for suitable days of the week that is convenient to the organization, the student and the university faculty supervisor. </span></li>
                            </ul>
						</p>
						<p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>5. How much work will my staff have to do to support the student? </p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">In collaboration with Faculty staff and Victoria University WIL department, a student work plan will be created. Supervision and reporting will be needed and the work plan should dictate the amount of time, your staff needs to be involved.</span></li>
                            </ul>
						</p>
						<p className="my-4" style={{fontSize: '22px', fontWeight: '500'}}>6. This program sounds great, how much will it cost?</p>
                        <p className="mb-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">ZERO. The student is undertaking a real-life study experience. There is no cost expected from you. All motivational arrangements will be a consideration between you and the student. Victoria University only insists that it should be genuine, well deserved and meritorious.</span></li>
                            </ul>
						</p>
                        <div className="w3l-wecome-content-6">
							<div className="ab-content-6-mian py-5">
								<div className="container py-lg-5">
									<div className="welcome-grids row">
										<div className="welcome-image">
											<img src="assets/images/wil.jpg" className="img-fluid" alt="" />
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

export default WilFaqs;