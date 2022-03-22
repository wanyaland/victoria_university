import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class WilLand extends Component{
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <WilBanner />
                <section className="w3l-wecome-content-6">
                    <div className="ab-content-6-mian py-5">
                        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
                            <div className="welcome-grids row">
                                <div className="col-lg-12 mb-lg-0 mb-5">
                                    {/* <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Victoria University at a Glance</h6>
                                    <br/> */}
                                    <p className="my-4 text-center" style={{fontSize: '18px', width: '80%', margin: '0 auto'}}>At Victoria University we understand that good things happen when you’re outside yourcomfort zone, away from the classroom and beyond the textbooks. That’s why integrated practical experience is embedded into all of our degrees. Providing meaningful, hands-on workplace experience to enrich the theoretical learning of students and to enhance the employability of graduates is a key focus of our University.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w3l-specification-6" id="credit">
	<div className="specification-content py-5">
		<div className="container py-lg-5">
			<div className="mission-grids-info row">
				<div className="mission-gd-right col-lg-6 pl-lg-4">
                    <p className="mb-4">
                        <ul className="" style={{boxShadow: 'none', listStyle: 'none'}}>
                            <li className="w3-display-container list-nav-wil" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/wil'><span className="fa fa-users"></span>&nbsp;&nbsp;About WIL&nbsp;<span className="fa fa-angle-right"></span></Link></li>
                            <li className="w3-display-container list-nav-wil" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/how-wil-works'><span className="fa fa-gear"></span>&nbsp;&nbsp;&nbsp;How it works&nbsp;<span className="fa fa-angle-right"></span></Link></li>
                            <li className="w3-display-container list-nav-wil"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/keysteps'><span className="fa fa-dollar"></span>&nbsp;&nbsp;&nbsp;Key Steps&nbsp;<span className="fa fa-angle-right"></span></Link></li>
                            <li className="w3-display-container list-nav-wil" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/benefits'><span className="fa fa-check"></span>&nbsp;&nbsp;Organization / Partner / Employer Benefits&nbsp;<span className="fa fa-angle-right"></span></Link></li>
                            <li className="w3-display-container list-nav-wil" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/yourcall'><span className="fa fa-power-off"></span>&nbsp;&nbsp;Your Call&nbsp;<span className="fa fa-angle-right"></span></Link></li>
                           {/*  <li className="w3-display-container list-nav-wil"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/wil-hall-of-fame'><span className="fa fa-dollar"></span>&nbsp;&nbsp;&nbsp;WIL Hall of Fame&nbsp;<span className="fa fa-angle-right"></span></Link></li> */}
                            <li className="w3-display-container list-nav-wil"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/contactwil'><span className="fa fa-address-card-o"></span>&nbsp;Contact us&nbsp;<span className="fa fa-angle-right"></span></Link></li>
                            <li className="w3-display-container list-nav-wil"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/contactwil'><span className="fa fa-question"></span>&nbsp;FAQs&nbsp;<span className="fa fa-angle-right"></span></Link></li>
                        </ul>
					</p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
                    <video src="assets/media/willer.mp4" className="img-fluid" alt="WIL" autoPlay="true" controls/>
						<p><b style={{fontWeight: '500'}}>Image:</b> Research and learning</p>
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

export default WilLand;