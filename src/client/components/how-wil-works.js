import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class HowWilWorks extends Component{
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
					<span style={{color: '#EEE'}}>/ How WIL Works</span>
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
					<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>How WIL Works</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
                        <br/>
                        <br/>
                        <p className="my-4" style={{fontSize: '30px', color: '#0077b5'}}>Victoria University WIL program involves five stakeholders:</p>
                        <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Victoria University (GRIP)</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Victoria University Students</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Your (Host) Organization</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Victoria University Lecturers/researchers & Educators</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Government regulators-NCHE & MOES and other professional-specific bodies</li>
                            </ul>
                        </p>
                        <p style={{fontSize: '30px', color: '#0077b5'}}><b>Here is how the involvement works for the benefit of all			</b></p>
                        <p className="my-4">
                        <table class="table table-bordered" style={{fontSize: '.8em'}}>
							<thead>
								<tr>
									<th scope="col">STAKEHOLDER/TIMING</th>
									<th scope="col">PRE-WIL</th>
									<th scope="col">DURING WIL</th>
									<th scope="col">POST-WIL</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th><b>Students</b></th>
									<td><b>Prepares for WIL experience by participating in curricular preparatory content and activities (pedagogy)</b></td>
									<td><b>Engages effectively with work and people (experience) Engages with curricular expectations of academic program (pedagogy)</b></td>
									<td><b>Leaves WIL experience having met all expected obligations and with positive working relationships Reflects on experience and learning/growth (pedagogy and reflection)</b></td>
								</tr>
								<tr>
									<th >Host (Your Organization)</th>
									<td>Prepares for Student arrival</td>
									<td>Provides responsibilities for students that are authentic and meaningful (experience) and connect to students’ skill sets/knowledge base (pedagogy) Provides support for students (experience)</td>
									<td>Provides assessment of student learning and performance (assessment) Considers what went well and what might be changed for a subsequent student (reflection)</td>
								</tr>
								<tr>
									<th>Educators/lecturers/researchers from Victoria University</th>
									<td>Supports students and hosts in preparatory activities including designing curricular content and assessments (pedagogy)</td>
									<td>Monitors progress and provides supports to students and hosts as needed (experience)</td>
									<td>Facilitates student reflection and follows up with host to evaluate experience (pedagogy and reflection)</td>
								</tr>
								<tr>
									<th>Victoria University (GRIP)</th>
									<td colspan="3">Recognizing WIL as part of curricular Enabling curricular reform through reports from students and educators</td>
								</tr>
								<tr>
									<th>Government</th>
									<td colspan="3">Support VU WIL through NDP III Creating better conditions for organizations that support WIL</td>
								</tr>
							</tbody>
						</table>
                        </p>
                        {/* <p className="my-4">
                            It is not just teachers, nurses, doctors and engineers that can take part in these meaningful workplace learning opportunities, with WIL courses being offered as part of degree programs in diverse fields such as Information Technology, Communications and Design, Humanities, Business, Commerce and Marketing.
                        </p>
                        <p className="my-4">
                            As WIL is predominantly part of courses within degrees, WIL opportunities are delivered at different times of the year, depending on the course and semester timetable and annual course structures.
                        </p> */}
                        <table style={{width: '100%', height: '100%'}}>
                        
							<tr>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px', fontSize: '30px'}}><Link to="/contactwil" className="underline" style={{color: '#FFF'}}><b>CONTACT US</b></Link><br/>Get in touch if you're interested in hosting WIL</td>
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

export default HowWilWorks;