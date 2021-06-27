import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';

class ContactWil extends Component{
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
					<span style={{color: '#EEE'}}>/ Contact Us</span>
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
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>Contact us</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} class="text-left"></div>
						<p class="my-4">Identifying the discipline or area that you are interested in hosting at your organisation is the first step to find the best point of contact.</p>
						<p class="my-4">
							Then either complete the form below or get in touch with Employability and Enterprise:
						</p>
						<p class="my-4">Ph: (02) 4921 5588<br/>
                            Email: WIL@newcastle.edu.au
                        </p>
                        
                        <div class="w3l-features-1">
                            <div class="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
                                <div class="container py-lg-5">
                                    <div class="row grids-innf my-lg-5" style={{border: '#CCC 1px solid'}}>
                                        <div class="features-1-info col-lg-9 col-md-12">
                                            <br/>
                                            <div class="features-1-info-icon text-center">
                                                <span class="fa fa-fax" style={{color: '#0077b5', fontSize: '90px'}}></span>
                                            </div>
                                            <div class="features-1-info-info text-center">
                                                <h6 class="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Get information about VU</h6>
                                                <p class="text-center" style={{fontSize: '18px'}}>We have information to share with you!</p>
                                            </div>
                                            <div class="container_form">
                                                <form action="/action_page.php">
                                                    <div class="row_form">
                                                        <div class="col-75">
                                                        <input type="text" id="fname" class="form_fields" name="firstname" placeholder="Your name.." />
                                                        </div>
                                                    </div>
                                                    <div class="row_form">
                                                        <div class="col-75">
                                                        <input type="text" id="lname" class="form_fields" name="lastname" placeholder="Your position.." />
                                                        </div>
                                                    </div>
                                                    <div class="row_form">
                                                        <div class="col-75">
                                                        <input type="text" id="lname" class="form_fields" name="email" placeholder="Your organisation.." />
                                                        </div>
                                                    </div>
                                                    <div class="row_form">
                                                        <div class="col-75">
                                                        <input type="text" id="lname" class="form_fields" name="email" placeholder="Telephone.." />
                                                        </div>
                                                    </div>
                                                    <div class="row_form">
                                                        <div class="col-75">
                                                        <input type="text" id="lname" class="form_fields" name="email" placeholder="Email Address.." />
                                                        </div>
                                                    </div>
                                                    <div class="row_form">
                                                        <div class="col-75">
                                                        <textarea type="text" id="lname" class="form_fields" name="email" placeholder="Background on WIL opportunity you are seeking or interested in providing:.."></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="row_form">
                                                        <input type="submit" value="Submit" class="applier" />
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