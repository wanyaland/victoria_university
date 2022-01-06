import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class YourCall extends Component{
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
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
					<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Your Call</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
                        <br/>
                        {/* <p style={{fontSize: '30px', color: '#0077b5'}}><b>What can WIL do for your organisation?</b></p> */}
						<p className="my-4">This is an opportunity to chart a new journey to give Uganda, East Africa, Africa and the entire world a better human resource that is not only ready on day one of formal contractual work, but also fit for the specific work package with ability to creatively and innovatively deliver under all circumstances. <br />You are free to contact the GRIP office for further clarification.</p>
                       {/*  <p className="my-4" style={{fontSize: '30px', color: '#0077b5'}}><b>Benefits for hosts:</b></p>
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
                        </p> */}
                        <div className="w3l-wecome-content-6">
							<div className="ab-content-6-mian py-5">
								<div className="container py-lg-5">
									<div className="welcome-grids row">
										<div className="welcome-image">
											<img src="assets/images/wil_banner.jpg" className="img-fluid" alt="" />
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

export default YourCall;