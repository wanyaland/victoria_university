import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Altfooter from './alt-footer';
import { Link } from 'react-router-dom'

class EventsHub extends Component{
    	change_icon(id, id2) {
		var element = document.getElementById(id);
		element.classList.add("hider");
		var element2 = document.getElementById(id2);
		element2.classList.add("block");
	 }
	 change_icon2(id, id2){
		var element = document.getElementById(id);
		element.classList.remove("hider");
		var element2 = document.getElementById(id2);
		element2.classList.remove("block");
		console.log('HI4')
	 }
    render() {
        return (
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-top-header-content">
		<div className="hny-top-menu">
			<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
				<div className="container-fluid">
					<div className="">
                        <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Home 
					</span></Link>&nbsp;
                    <span>/ Events</span>
					</div>
				</div>
			</div>
		</div>
	</section>
    <br/>
	<br/>
    <section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div className="welcome-grids row">
					<div className="col-lg-12 mb-lg-0 mb-5">
						<h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Upcoming Events</h6>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="w3l-wecome-content-6">
        <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
                <div className="welcome-grids row">
                    <div className="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
                        <div className="img-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis, cupiditate optio corrupti quis quam at!.</div>
                        <div className="img-text-bottom-right"><span className="fa fa-calendar"></span></div>
                    </div>
                    <div className="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
                        <div className="img-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis, cupiditate optio corrupti quis quam at!.</div>
                        <div className="img-text-bottom-right"><span className="fa fa-calendar"></span></div>
                    </div>
                </div>	
            </div>
        </div>
    </section>
    <section className="w3-gallery">
        <div className="porfolio-inf py-5">
            <div className="container pt-lg-5 pb-lg-4">
                <div className="row">
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 filter photo">
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div className="course-info">
                                <a href="#home" className="course-titlegulp-wrapper">
                                    <h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a className="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <p><Link className="logo-2" to="/events-hub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">See all recent posts</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </section>  
                  <Altfooter />
            </React.Fragment>
        );
    }
}

export default EventsHub;