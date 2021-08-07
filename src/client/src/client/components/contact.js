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
        <section className="w3l-features-1">
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
	</section>
<section class="w3l-contact-main w3l-contact3">
	<div class="contact1-bg py-5">
		<div class="container py-lg-5" style={{maxWidth: '100%'}}>
			<div class="row contact-main" style={{margin: '0', padding: '0'}}>
				<div class="map col-lg-12">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.03418861348!2d32.589167!3d0.313628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x384a30e2f12512dd!2sVictoria%20University%20Kampala!5e0!3m2!1sen!2sug!4v1628174976678!5m2!1sen!2sug"
						frameborder="0" style={{border: '0'}} width="800" height="600" allowfullscreen="" title="map"></iframe>
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