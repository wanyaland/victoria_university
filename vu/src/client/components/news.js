import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Altfooter from './alt-footer';
import { Link } from 'react-router-dom';

class News extends Component{
    change_icon() {
		var element = document.getElementById("iconner");
		element.classList.add("hider");
		var element2 = document.getElementById("iconner2");
		element2.classList.add("block");
	 }
	 change_icon2(){
		var element = document.getElementById("iconner");
		element.classList.remove("hider");
		var element2 = document.getElementById("iconner2");
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
					<div class="row">
						<ol class="accounts col-md-2">
							<li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Home</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="features-6">
        <div class="features6-block py-5">
            <div class="container py-lg-5">
                <div class="features6-grids text-center mt-5">
                    <img src="assets/images/b3.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}} />
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
                        <div class="img-text-bottom-right"><span class="fa fa-file-text-o"></span></div>
                    </div>
                    <div class="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" class="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
                        <div class="img-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis, cupiditate optio corrupti quis quam at!.</div>
                        <div class="img-text-bottom-right"><span class="fa fa-file-text-o"></span></div>
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
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon} onMouseOut={this.change_icon2}>
                        <h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;See all recent posts</h4>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <hr class="text-center" style={{color: '#000', width: '90%'}} />
    <section class="w3l-wecome-content-6">
        <div class="ab-content-6-mian py-5">
            <div class="container py-lg-5">
                <h3>Upcoming Events</h3>
                <br/>
                <div class="welcome-grids row">
                    <div class="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" class="img-fluid" alt="" />
                        <div class="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div class="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-right">
                    <p>
                        <Link class="logo-2" href="/newshub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon} onMouseOut={this.change_icon2}>
                        <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">See all upcoming events</span>
                        </Link>
                    </p>
                </div>	
            </div>
        </div>
    </section>
    <section class="w3l-wecome-content-6">
        <div class="ab-content-6-mian py-5">
            <div class="container py-lg-5">
                <h3>Videos</h3>
                <br/>
                <div class="welcome-grids row">
                    <div class="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" class="img-fluid" alt="" />
                        <div class="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div class="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-right">
                    <p>
                    <Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon} onMouseOut={this.change_icon2}>
                        <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">See all Videos</span>
                        </Link>
                    </p>
                </div>	
            </div>
        </div>
    </section>
    <section class="w3l-wecome-content-6">
        <div class="ab-content-6-mian py-5">
            <div class="container py-lg-5">
                <h3>Podcasts</h3>
                <br/>
                <div class="welcome-grids row">
                    <div class="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" class="img-fluid" alt="" />
                        <div class="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div class="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>	
                <div class="text-right">
                    <p>
                        <Link class="logo-2" to="/newshub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon} onMouseOut={this.change_icon2}>
                        <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">See all Podcasts</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="w3l-wecome-content-6">
        <div class="ab-content-6-mian py-5">
            <div class="container py-lg-5">
                <h3>Q & A</h3>
                <br/>
                <div class="welcome-grids row">
                    <div class="col-lg-6 welcome-image">
                        <img src="assets/images/ab.jpg" class="img-fluid" alt="" />
                        <div class="text-left">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam.</div>
                    </div>
                    <div class="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                        <ul class="list-unstyled d-flex flex-wrap">
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                            <li class="">
                                <div class="row">
                                    <a class="col-md-5 col-4" href="#home">
                                        <img class="rounded img-fluid img-responsive" src="assets/images/bg1.jpg"
                                            alt="img"/><i></i>
                                    </a>
                                    <div class="col pl-0">
                                        <a class="footer-small-text" href="#home">Lorem ipsum dolor sit amet adipiscin elit</a>
                                        <div class="text-sub-small">Feb 20th</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-right">
                        <p>
                            <Link class="logo-2" to="/newshub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon} onMouseOut={this.change_icon2}>
                        <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span class="underline">See all Q & A</span>
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