import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
			curTime: '0:00',
		}
    }
    componentDidMount(){
        this.getCurrentTime()
    }
    getCurrentTime = () => {
        var timestamp = Date.now();
        var d = new Date(timestamp);
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		console.log(strTime)
		this.setState({
			curTime: strTime,
		})
	}
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-top-header-content">
            <div className="hny-top-menu">
                <div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
                    <div className="container-fluid">
                        <div className="underline">
                            <Link to="/"><span className="underline" style={{color: "#EEE"}}>
                            Victoria University 
					        </span></Link>&nbsp;
					        <span style={{color: '#EEE'}}>/ Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		<section className="w3l-apply-6">
					<div className=""  style={{}}>
						<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
							<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src="assets/images/contact.JPG" alt="First slide" style={{filter: 'brightness(60%)'}}/>
									</div>
									<div className='banner-caption'>&nbsp;Contact Us</div>
								</div>
							</div>
						</div>
					</div>
				</section>
		<section className="w3l-features-1">
		<div className="features-1-mian" style={{backgroundColor: '#FFF', paddingBottom: '0rem !important'}}>
			<div className="container">
				<div className="row grids-innf" style={{marginBottom: '0rem !important'}}>
					{/* <div className="features-1-info col-lg-3 col-md-3" style={{borderRight: '#c2c2c2 1px solid', padding: '0'}}>
						<img src="assets/images/path1.jpg" className="img-fluid" id="fixer4"  alt="img"/>
					</div> */}
					<div class="grid col-lg-6">
					<div class="column">
						<h3 class="hny-title" style={{color: '#0077b5'}}>Contact Info</h3>
						<p class="head-main">Welcome to our Website. We are glad to have you around. You can call us during business hours (8:30 a.m. to 4:30 p.m.). It is currently {this.state.curTime} in Kampala.</p>
					</div>
					<div class="column2">
						<div class="contact-para contact-info-align">
							<div class="icon">
								<span class="fa fa-map-marker"  style={{color: '#0077b5'}}></span>
							</div>
							<div>
								<strong class="info">Office Address :</strong> <p>Victoria Towers, 1-13 Jinja Road, Kampala</p>
							</div>
						</div>
						<div class="contact-info-align">
							<div class="icon">
								<span class="fa fa-phone" style={{color: '#0077b5'}}></span>
							</div>
							<div div class="icon-con-info">
							    <strong class="info">Phone:</strong><br/> 
								<a href="tel:+256 759 996 130"> +256 759 996 130</a><br/>
								<a href="tel:+256 700 300 088"> +256 700 300 088</a><br/>
								<a href="tel:+256 707 780 158"> +256 707 780 158</a>
						    </div>
						</div>
						<div class="contact-info-align">
							<div class="icon">
								<span class="fa fa-envelope-open-o" style={{color: '#0077b5'}}> </span>
							</div>
							<div>
							<strong class="info">Email:</strong> <br/>
							<a href="mailto:admissions@vu.ac.ug"> admissions@vu.ac.ug</a><br/>
							<a href="mailto:admissions@vu.ac.ug"> Marketing@vu.ac.ug</a><br/><br/>
						</div>
						</div>
					</div>{/* 
					<div class="column3">
						<h4 class="header">Follow us </h4>
						<a href="#facebook" class="facebook" title="facebook"><span class="fa fa-facebook"></span></a>
						<a href="#twitter" class="twitter" title="twitter"><span class="fa fa-twitter"></span></a>
						<a href="#linkedin" class="linkedin" title="linkedin"><span class="fa fa-linkedin"></span></a>
						<a href="#instagram" class="instagram" title="instagram"><span class="fa fa-instagram"></span></a>
					</div> */}
				</div>
					<div className="features-1-info col-lg-6">
						<div className="features-1-info-icon text-center">
							{/* <span className="fa fa-envelope-o" style={{color: '#0077b5', fontSize: '90px'}}></span> */}
						</div>
						<div className="features-1-info-info text-center">
							<h6 className="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Send us an inquiry</h6>
							<p className="text-center" style={{fontSize:'18px'}}>We have information to share with you!</p>
						</div>
						<div className="container_form">
							<form action="/action_page.php">
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="fname" className="form_fields" name="firstname" placeholder="Your name.."/>
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="lname" className="form_fields" name="lastname" placeholder="Your last name.." />
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="lname" className="form_fields" name="email" placeholder="Your email.."/>
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<textarea type="text" id="lname" className="form_fields" name="message" placeholder="Your email.." rows="6"></textarea>
									</div>
								</div>
								{/* <div className="row_form">
									<div className="col-75">
									<input type="checkbox" id="lname" className="" name="" required/>&nbsp;<span>Yes, I would like to receive communications via e-mail from Victoria University</span>
									</div>
								</div> */}
								<div className="row_form">
									<input type="submit" value="Send Inquiry" className="applier"/>
								</div>
								</form>
						  </div>
					</div>
				</div>
			</div>
		</div>
	</section>
       {/*  <section className="w3l-features-1">
		<div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
			<div className="container py-lg-5" id="fixer3">
					<div className="row grids-innf my-lg-5" id="fixer">
						<div className="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0', marginBottom: '40px'}}>
							<table style={{width: '100%', height: '100%'}}>
							
								<tr>
									<td className="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>Get in touch with us</td>
								</tr>
								
							</table>
						</div>
						<div className="features-1-info col-lg-6 col-md-6" style={{borderRight: '#c2c2c2 1px solid'}}>
							<div className="features-1-info-info text-center">
								<h6 className="text-center">Ask Us</h6>
							</div>
							<div className="features-1-info-icon text-center">
								<span className="fa fa-edit" style={{color: '#0077b5', fontSize: '90px'}}></span>
							</div>
							<div className="features-1-info-info text-center">
								<h6 className="text-center">Get real-time answers to common questions about Victoria University.</h6>
							</div>
							<div className="features-1-info-info text-center">
								<h6 className="text-center">Email: admissions@vu.ac.ug</h6>
								<h6 className="text-center">Email: Marketing@vu.ac.ug</h6>
							</div>
                            <br/>
                            <br/>
						</div>
						<div className="features-1-info col-lg-6 col-md-6">
							<div className="features-1-info-info text-center">
								<h6 className="text-center">Call Us</h6>
							</div>
							<div className="features-1-info-icon text-center">
								<span className="fa fa-globe" style={{color: '#0077b5', fontSize:'90px'}}></span>
							</div>
							<div className="features-1-info-info text-center">
								<h6 className="text-center">+256 759 996 130 or +256 700 300 088 or +256 707 780 158</h6>
							</div>
                            <br/>
                            <br/>
						</div>
						<div className="features-1-info col-lg-12 col-md-12" id="fixer2" style={{paddingBottom: '0 !important'}}>
							<table style={{width: '100%', height: '100%'}}>
							
								<tr>
									<td className="text-center" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '10px'}}>You can call us during business hours (8:30 a.m. to 4:30 p.m.). It is currently {this.state.curTime} in Kampala.</td>
								</tr>
								
							</table>
						</div>
					</div>
			</div>
		</div>
	</section> */}
<section class="w3l-contact-main w3l-contact3">
	<div class="contact1-bg">
		<div class="container" style={{minWidth: '100%'}}>
			<div class="row">
				<div className="col-lg-12 mb-lg-0 mb-5 text-center align-center">
					<h6 className="hny-title" style={{fontSize: '38px',  color: '#0077b5'}}>Sign up for our newsletter</h6>
					<div className="input-container align-center" style={{width: '50%', position: 'relative', left: '25%'}}>
						<input className="input-field justify-content-center" type="text" placeholder="Enter your email Here" name="search"/>
						<button className="search_btn" style={{borderRadius:'0rem',backgroundColor: '#0077b5'}}><span className='fa fa-paper-plane'></span></button>
					</div>
					<br/>
				</div>
			</div>
			<div class="row"  style={{minHeight: '500px'}}>
				<div class="map col-lg-12" style={{padding: '0'}}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.03418861348!2d32.589167!3d0.313628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x384a30e2f12512dd!2sVictoria%20University%20Kampala!5e0!3m2!1sen!2sug!4v1628174976678!5m2!1sen!2sug"
						frameborder="0" style={{border: '0',  minHeight: '500px'}} width="800" allowfullscreen="" title="map"></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Contact;