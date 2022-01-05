import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class ContactWil extends Component{
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
					<span style={{color: '#EEE'}}>/ Contact Us</span>
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
                    <h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Contact us</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
						<p className="my-4">Your Points of Contact (PoC) for further details are:</p>
						<p className="my-4">
                        Dr. John Mayanja Bbale<br/>
Director, Grants, Research, Innovations & Partnership (GRIP)<br/>
Email Address: jbbale@vu.ac.ug <br/>
						</p>
                        <p className='my-4'>Mr. Maurice A. Otieno<br/>
Coordinator, Grants, Research & Innovations and Partnerships (GRIP)<br/>
Email Address: m.otieno@vu.ac.ug</p>
						<p className="my-4">Phone: +256707780158, +256755026776, +256770546537<br/>
                            Email: grip@vu.ac.ug / marketing@vu.ac.ug
                        </p>
                        <div className="w3l-features-1">
                            <div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
                                <div className="container py-lg-5">
                                    <div className="row grids-innf my-lg-5" style={{border: '#CCC 1px solid'}}>
                                        <div className="features-1-info col-lg-12 col-md-12">
                                            <br/>
                                            <div className="features-1-info-icon text-center">
                                                <span className="fa fa-fax" style={{color: '#0077b5', fontSize: '90px'}}></span>
                                            </div>
                                            <div className="features-1-info-info text-center">
                                                <h6 className="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Get information about VU</h6>
                                                <p className="text-center" style={{fontSize: '18px'}}>We have information to share with you!</p>
                                            </div>
                                            <div className="container_form">
                                                <form action="/action_page.php">
                                                    <div className="row_form">
                                                        <div className="col-75">
                                                        <input type="text" id="fname" className="form_fields" name="firstname" placeholder="Your name.." />
                                                        </div>
                                                    </div>
                                                    <div className="row_form">
                                                        <div className="col-75">
                                                        <input type="text" id="lname" className="form_fields" name="lastname" placeholder="Your position.." />
                                                        </div>
                                                    </div>
                                                    <div className="row_form">
                                                        <div className="col-75">
                                                        <input type="text" id="lname" className="form_fields" name="email" placeholder="Your organisation.." />
                                                        </div>
                                                    </div>
                                                    <div className="row_form">
                                                        <div className="col-75">
                                                        <input type="text" id="lname" className="form_fields" name="email" placeholder="Telephone.." />
                                                        </div>
                                                    </div>
                                                    <div className="row_form">
                                                        <div className="col-75">
                                                        <input type="text" id="lname" className="form_fields" name="email" placeholder="Email Address.." />
                                                        </div>
                                                    </div>
                                                    <div className="row_form">
                                                        <div className="col-75">
                                                        <textarea type="text" id="lname" className="form_fields" name="email" placeholder="Background on WIL opportunity you are seeking or interested in providing:.."></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row_form">
                                                        <input type="submit" value="Submit" className="applier" />
                                                    </div>
                                                    </form>
                                              </div>
                                        </div>
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

export default ContactWil;