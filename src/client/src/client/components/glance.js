import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'

class Glance extends Component {
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
    render() {
        return (
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-apply-6">
				<div className=""  style={{}}>
					<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
						<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="d-block w-100" src="assets/images/glance.jpg" alt="First slide" style={{filter: 'brightness(60%)'}}/>
								</div>
								<div className='banner-caption'>&nbsp;At a Glance</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
					<span style={{color: '#EEE'}}>/ At a Glance</span>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Victoria University at a Glance</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '18px'}}>Victoria University provides learning for life. Through the achievements of its students, faculty and staff, VU stands out as a provider of high quality post-secondary education.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="welcome-image text-center" style={{width: '100%'}}>
                    <video src="assets/media/message from vc.mp4" className="img-fluid" alt="" autoPlay="true" controls="true" style={{width: '80%'}}/>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>The university</h6>
                    <br/>
                    <p className="my-4">We are setting the bar for co-op education and experiential learning in Uganda because we saw a need for experienced, university-educated graduates. We encourage dreamers and entrepreneurs because we believe that cultivating creativity is key to global progress. We value diversity and inclusivity because we know we’re better, brighter, and stronger together. Some people call us innovative, but that’s just who we are. As we welcome you to Victoria University, we encourage you to be yourself, work hard, and reap the rewards. We’ll do the same to support you as our student and partner in impacting society.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Our students</h6>
                    <br/>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;VU is the No. 1 University for industry collaboration. We are the leading university in Uganda and East Africa when it comes to Experiential Learning and Working Integrated Learning.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;We have over 103 Employer Connections and Partnerships.</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;95% of our Graduates find employment within 3 months of graduating</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;3000 Work Integrated Learning Experiences: We are the only University with a program that is working to deliver 3000 Work Integrated Learning experiences to students in two years</li>
                        </ul>
                    </p>
                    <p className="my-4">While work experience, volunteering and the like can be valuable to increase student employability skills, it is not work integrated learning. Work Integrated Learning - or WIL as we like to call it - is an umbrella term used to describe a range of approaches that integrate theory with the practice of work within a purposefully designed curriculum. That means, for it to be WIL, it needs to be part of a course or a graduation requirement of a program.</p>
                </div>
            </div>
        </div>
    </div>
</section> */}
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>What Makes VU Unique</h6>
                    <br/>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Online learning</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Work Integrated Learning</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Multi-Culture student’s community</li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Student’s research support </li><br/>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Strategic Location</li>
                        </ul>
                    </p>
                    {/* <p className="my-4">While work experience, volunteering and the like can be valuable to increase student employability skills, it is not work integrated learning. Work Integrated Learning - or WIL as we like to call it - is an umbrella term used to describe a range of approaches that integrate theory with the practice of work within a purposefully designed curriculum. That means, for it to be WIL, it needs to be part of a course or a graduation requirement of a program.</p> */}
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Institutional learning outcomes</h6>
                    <br/>
                    <p className="my-4">We are crafting the future of the Victoria University experience around Academic Excellence, Research Excellence & Impact, Authentic Learning Education, Internationalization and Entrepreneurship. With Authentic Learning at our core, we are shaping our future with an emphasis on.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="col-lg-12 welcome-image">
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Give to VU<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Learn how you can</p>
                                        <p className="my-4">support our efforts &nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span className="fa fa-external-link"></span></a></p>
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
</section> */}
                <Footer />
            </React.Fragment>
        )
    }
}
export default Glance;