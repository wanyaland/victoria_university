import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Altfooter from './alt-footer';
import { Link } from 'react-router-dom';

class News extends Component{
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
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ News</span>
                </div>
            </div>
			</div>
		</div>
	</section>
    <section className="features-6">
        <div className="features6-block py-5">
            <div className="container py-lg-5">
                <div className="features6-grids text-center mt-5">
                    <img src="assets/images/b3.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}} />
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
                        <div className="img-text-bottom-right"><span className="fa fa-file-text-o"></span></div>
                    </div>
                    <div className="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
                        <div className="img-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis, cupiditate optio corrupti quis quam at!.</div>
                        <div className="img-text-bottom-right"><span className="fa fa-file-text-o"></span></div>
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
                    <p><a className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <h4 className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', fontSize: '26px'}}></span>&nbsp;See all recent posts</h4>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <hr className="text-center" style={{color: '#000', width: '90%'}} />
    <section className="w3l-wecome-content-6">
        <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
                <h3>Upcoming Events</h3>
                <br/>
                <div className="welcome-grids row">
                    <div className="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" className="img-fluid" alt="" />
                        <div className="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul className="list-unstyled d-flex flex-wrap">
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-right">
                    <p>
                        <Link className="logo-2" href="/newshub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">See all upcoming events</span>
                        </Link>
                    </p>
                </div>	
            </div>
        </div>
    </section>
    <section className="w3l-wecome-content-6">
        <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
                <h3>Videos</h3>
                <br/>
                <div className="welcome-grids row">
                    <div className="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" className="img-fluid" alt="" />
                        <div className="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul className="list-unstyled d-flex flex-wrap">
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-right">
                    <p>
                    <Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                        <span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">See all Videos</span>
                        </Link>
                    </p>
                </div>	
            </div>
        </div>
    </section>
    <section className="w3l-wecome-content-6">
        <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
                <h3>Podcasts</h3>
                <br/>
                <div className="welcome-grids row">
                    <div className="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" className="img-fluid" alt="" />
                        <div className="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul className="list-unstyled d-flex flex-wrap">
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>	
                <div className="text-right">
                    <p>
                        <Link className="logo-2" to="/newshub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                        <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">See all Podcasts</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="w3l-wecome-content-6">
        <div className="ab-content-6-mian py-5">
            <div className="container py-lg-5">
                <h3>Q & A</h3>
                <br/>
                <div className="welcome-grids row">
                    <div className="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" className="img-fluid" alt="" />
                        <div className="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul className="list-unstyled d-flex flex-wrap">
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li className="">
                                <div className="row">
                                    <a className="col-md-5 col-4" href="#home">
                                        <img className="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div className="col pl-0">
                                        <a className="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div className="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-right">
                        <p>
                            <Link className="logo-2" to="/newshub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
                        <span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">See all Q & A</span>
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

export default News;