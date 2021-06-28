import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';

class Benefits extends Component{
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
					<span style={{color: '#EEE'}}>/ Benefits</span>
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
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Benefits</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} class="text-left"></div>
                        <br/>
                        <br/>
                        <h6 style={{color: '#076ea5', fontSize: '34px'}}><b>What can WIL do for your organisation?</b></h6>
						<p class="my-4">Victoria University's commitment to providing world-class learning opportunities for its students underpins WIL as a process of reciprocal involvement for the mutual benefit of all involved.</p>
                        <h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Benefits for hosts:</b></h6>
                        <p class="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;Benefit from the injection of new and innovative ideas, cognitive diversity, and ‘fresh eyes’ of students.</li>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;Work with Victoria University staff to design a project to create real-world outcomes for your organisation.</li>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;Have direct access to a pool of talented graduates for future employment.</li>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;Provide your current staff with a valuable professional development opportunity as mentees.</li>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;Engage directly with the Victoria University and help to shape the future of the degree programs offered by the world-class organisation.</li>
                            </ul>
                        </p>
                        <h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Benefits for students:</b></h6>
                        <p class="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;WIL makes students career-ready.</li>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;Enriched knowledge of field of study through hands on exposure in the workplace.</li>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;Provides an insight into the professional attitudes and attributes needed to be prepared for the jobs of the future.</li>
                                <li class="" style={{marginBottom: '.5rem !important'}}>&emsp;<span class="fa fa-check-circle-o"></span>&emsp;WIL provides a competitive advantage in the competitive global employment marketplace.</li>
                            </ul>
                        </p>
                        <p class="my-4">
                            WIL allows industry and the Victoria University to work together to develop Uganda;s future workforce and to help build our national economy, through ensuring that graduates are adept and sufficiently agile to face the challenges of a changing job market.
                        </p>
                        <div class="w3l-wecome-content-6">
							<div class="ab-content-6-mian py-5">
								<div class="container py-lg-5">
									<div class="welcome-grids row">
										<div class="welcome-image">
											<img src="assets/images/b3.jpg" class="img-fluid" alt="" />
										</div>
                                        <span><i><span class="fa fa-sort-asc"></span><b>Video:</b> BMG Partnership</i></span>
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