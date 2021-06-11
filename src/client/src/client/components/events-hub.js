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
                <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
		<div class="hny-top-menu">
			<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
				<div class="container-fluid">
					<div class="">
                        <Link to="/"><span className="underline" style={{color: "#CCC"}}>
					Home 
					</span></Link>&nbsp;
					</div>
				</div>
			</div>
		</div>
	</section>
    <br/>
	<br/>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Upcoming Events</h6>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="w3l-wecome-content-6">
        <div class="ab-content-6-mian py-5">
            <div class="container py-lg-5">
                <div class="welcome-grids row">
                    <div class="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
                        <div class="img-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis, cupiditate optio corrupti quis quam at!.</div>
                        <div class="img-text-bottom-right"><span class="fa fa-calendar"></span></div>
                    </div>
                    <div class="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
                        <div class="img-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis, cupiditate optio corrupti quis quam at!.</div>
                        <div class="img-text-bottom-right"><span class="fa fa-calendar"></span></div>
                    </div>
                </div>	
            </div>
        </div>
    </section>
    <section class="w3-gallery">
        <div class="porfolio-inf py-5">
            <div class="container pt-lg-5 pb-lg-4">
                <div class="row">
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 filter photo">
                        <div class="each-item">
                            <a href="#home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div class="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
                            <div class="course-info">
                                <a href="#home" class="course-titlegulp-wrapper">
                                    <h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</h3>
                                </a>
                                <h6><a class="course-instructor" href="#home">Faculty of medicine</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-right">
                    <p><Link class="logo-2" to="/events-hub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">See all recent posts</span>
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