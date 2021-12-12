import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Partners extends Component {

    componentDidMount(){
        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("activer");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }
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
				<div className="" style={{color: '#EEE'}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Collaboration &amp; Partnership</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://munyonyocommonwealth.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/1.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeresort.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/2.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://kabiracountryclub.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/3.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekehotel.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/4.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://dolphinsuites.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/5.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.forest-cottages.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/6.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                    </div>
                    <div className="carousel-item">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeapartments.com/wampewo/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/7.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeapartments.com/kitante/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/8.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.bukotoheights.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/9.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.tagoreapartments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/10.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.boulevardsuites.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/11.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.naguruapartments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/12.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                    </div>
                    <div className="carousel-item">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/13.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://tagoreliving.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/14.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/15.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/16.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/17.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/18.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                        </div>{/*  */}
                    </div>
                    <div className="carousel-item">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/19.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/20.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/21.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/22.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.cms.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/23.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.meerainvestments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/24.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                    </div>
                    <div className="carousel-item">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/25.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/26.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.premieradvertising.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/27.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://premierrecruitment.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/28.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/29.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://mail.calabashspa.com/index.html" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/30.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                    </div>
                    <div className="carousel-item">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.rupareliafoundation.org/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/31.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://vu.ac.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/40.jpg" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://dpsuganda.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/32.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.kisu.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/33.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://kampalaparents.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/34.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/35.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                        </div>{/*  */}
                    </div>
                    <div className="carousel-item">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://sanyufm.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/36.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.goldstarinsurance.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/37.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.rosebudlimited.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/38.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://premier-roses.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/39.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize:'48px', color: '#f74040', fontWeight: '600'}}>Collaboration & Partnerships</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>VU has a long-standing practice of working collaboratively with other  Ugandan and international post-secondary educational institutions, with professional associations and employer groups and with First Nations institutions and communities to facilitate access to university-level study. Over 350 formal collaborative agreements are now in place. In addition, students enrolled at other post-secondary institutions make extensive use of VU courses and educational services to help them complete their degrees.</p>
                    <p className="mb-4"></p>
                    <br/>
                </div>
            </div>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize:'36px', color: '#004063'}}>Educational partnerships</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>Educational partnerships provide real opportunities for you. Through VU's partnerships with other post-secondary institutions, you can, for example, add VU courses to your program at a partner institution, take classroom versions of VU courses at a partner institution or enrol in VU programs while studying at or working for a partner institution.<br/><br/>
                    Through established transfer agreements, VU also recognizes previous education that you may have obtained through colleges, technical institutes or professional organizations. Block credit transfer arrangements have been established with numerous educational providers across Uganda, granting program graduates a specified number of credits toward particular VU degrees.<br/><br/>
                    Visit the <a href="#home" style={{color: '#025683'}}>Learning Services Collaborations <span className="fa fa-external-link"></span></a> web page to learn more about our educational partners, the different types of partnerships in which we are engaged and the educational opportunities available to you as a result.</p>
                    <p className="mb-4"></p>
                    <br/>
                </div>
            </div>
            <hr className="text-center" style={{color: '#000', width: '100%'}} />
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '36px', color: '#004063'}}>Partners</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>We maintain additional educational or research agreements with the following institutions and organizations:</p>
                    <div className="container py-lg-5">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://munyonyocommonwealth.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/1.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeresort.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/2.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://kabiracountryclub.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/3.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekehotel.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/4.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://dolphinsuites.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/5.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.forest-cottages.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/6.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeapartments.com/wampewo/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/7.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeapartments.com/kitante/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/8.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.bukotoheights.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/9.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.tagoreapartments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/10.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.boulevardsuites.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/11.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.naguruapartments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/12.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/13.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://tagoreliving.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/14.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/15.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/16.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/17.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/18.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/19.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/20.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/21.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/22.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.cms.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/23.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.meerainvestments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/24.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/25.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/26.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.premieradvertising.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/27.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://premierrecruitment.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/28.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/29.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://mail.calabashspa.com/index.html" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/30.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.rupareliafoundation.org/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/31.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://vu.ac.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/40.jpg" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://dpsuganda.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/32.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.kisu.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/33.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://kampalaparents.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/34.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/35.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://sanyufm.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/36.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.goldstarinsurance.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/37.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.rosebudlimited.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/38.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://premier-roses.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/39.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="welcome-grids row">
				<div className="col-lg-12 welcome-image">
					<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
						<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Give To VU<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">Learn how you can</p>
                                        <p className="my-4">support our efforts &nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="#home" style={{color: '#025683'}}><span className="fa fa-external-link"></span></a></p>
                                        <p className="my-4">to remove barriers to university-level studies and help students succeed.</p>
									</div>
								</div>	
								<br/>
							</div>
						</ul>
					</div>
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

export default Partners;