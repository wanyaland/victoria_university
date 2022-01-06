import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom'

class CurrentStudents extends Component{
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
     toVclass = () => {
        window.location.href = "https://vclass.ac/"
    }
    render(){
        return(
            <React.Fragment>
            <BreadNavBar />
            <NavBar />
            <section className="w3l-apply-6">
					<div className=""  style={{}}>
						<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
							<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src="assets/images/students.jpg" alt="First slide" style={{filter: 'brightness(60%)'}}/>
									</div>
                                    <div className='banner-caption'>&nbsp;Students</div>
								</div>
							</div>
						</div>
					</div>
				</section>
<section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Students</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Students</h6>
                    <br/>
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Why should a student choose Victoria University?</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>
                    Victoria University is different; we help our students create knowledge and we teach
                    them experience. When you come to Victoria University you are assured that you will
                    graduate with 2-3 years’ experience and you also have an opportunity to be accorded a
                    job placement through our partner organizations within and out of the country. We are
                    the only university in East Africa that is implementing an experiential learning model
                    through our work integrated learning program; the priority of this program is to make
                    sure that every student of the university is placed in a real job to gain real experience
                    needed in the labor market. So when you come to Victoria University we will teach
                    you experience.<br/><br/>
                    Secondly, we are a university that welcomes everyone and their diverse needs. For
                    example, if you are busy with your job and cannot come to Victoria University, we
                    have the best online learning platform that will help you pursue your education
                    seamlessly. You do not need to come to Victoria University, Victoria University will
                    find you where you are.<br/><br/>
                    Thirdly, we are a university that understands you. When you are failing to support
                    your online education, Victoria University will give you free education data and when
                    you fail to purchase relevant textbooks required for your learning, Victoria University
                    will give you free digital textbooks to support completion of your studies.
                    All in all we are the University of You and you can comfortably choose Victoria
                    University for a greater and memorable education experience.
                    </p>
                    <p>
                        <Link className="logo-2" to="/new-students" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Overview for new students</span></span>
                        </Link>
                    </p>
                    <p><a href="https://vclass.ac/login" className="logo-2" style={{color: '#0077b5'}} target="_blank" rel="noreferrer" onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">myVU Student Portal</span></span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Working Class Students</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Victoria University believes in empowering people to solve problems in their respective communities and workplaces. We have several partnerships with different
                    top universities around the world and through these partnerships, we have developed a
                    rich portfolio of professional courses that Ugandans can benefit from to enhance their
                    competences and gain unique skills that are required in their various respective
                    workplaces. We therefore invite Ugandans to join Victoria University and benefit
                    from the rich experience that they would gain through pursuing our diverse
                    internationalized professional development courses.</p>
                    <br/>
                    <br/>
                    <img src="assets/images/studs.jpg" className="img-fluid" alt="" />
                    <br/>
                    <br/>
                    <p><Link className="logo-2" to="/new-students" style={{color: '#0077b5'}} onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                        <span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Course procedures for new students</span></span>
                        </Link>
                    </p>
                    {/* <p><Link className="logo-2" to="/exams" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                        <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Learn more about our exam procedures</span></span>
                        </Link>
                    </p> */}
                    <h6 className="hny-title" style={{fontSize: '34px', color: '#0077b5'}}>International Students</h6>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                    Victoria University is privileged to have the most diverse student community
                    in Uganda. We have students coming from more than 50 countries including
                    Kuwait, Haiti, Oman, Afghanistan, India, Comoros, Nigeria, Chad, Liberia to
                    mention but a few. We are a non-discriminatory institution and we call
                    ourselves ‘The University of You’.
                    </p>
                    {/* <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Letter of permission request form (pdf)&nbsp;<span className="fa fa-external-link"></span></p>
                    <p className="my-4">Once your course is complete, you must have the school send an official transcript to VU.</p> */}
                </div>
                <div className="mission-gd-right col-lg-12 pl-lg-4">
                    		<img src="assets/images/lounge.JPG" className="img-fluid" alt="WIL" />
						<p><b style={{fontWeight: '500'}}>Image:</b> Student's Lounge</p>
					</div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Student Online Learning</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Victoria University has developed an interactive state of the art learning
                    management system that keep students learning without any interruption.
                    V-Class (our online learning management portal) was vetted by Uganda’s
                    National Council for Higher Education and was accorded a score of 80% -
                    making it one of the top learning management systems in the country.<br/><br/>
                    In the quest to make our students proficient in the 21st century skills, we have
                    made digital literacy a priority for all students and teachers. We have
                    accomplished this by doing the following;
                    </p>
                    <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Becoming the first university that requires students to writeexams digitally and discarding the traditional method of handwritten scripts.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;We have also become the first university in Uganda to give freetextbooks in digital version to all interested students and VictoriaUniversity does this to further immerse them in digital literacy learning.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;To those students and families that have found it difficult to support their studies online, Victoria University has provided free education data and</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Victoria University has also offered free basic computer training to students who are not tech savvy or have never been exposed to computer use.</li>
                            </ul>
                        </p>
                    <p><Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner29", "iconner30")} onMouseOut={this.change_icon2.bind(this, "iconner29", "iconner30")}>
                        <span className="lohny-2"><span  id="iconner29" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner30" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Transcripts & grades</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <hr className="text-center" style={{color: '#000', width: '90%'}}/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Undergraduate orientation</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Our orientation offers an overview of services available to you as an VU student, and guides you through the processes needed to complete your studies.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                        <span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate orientation</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Learner support</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        Find out more about our range of support services, including counselling, the library, and the Write Site.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
                        <span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Student Services</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> */}
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '38px', color: '#0077b5'}}>Find Help</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        No matter where you are in your VUexperience, we’re here to help you along the way.
                    </p>
                    <p>
                    <Link className="logo-2" to="/contact" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner15", "iconner16")} onMouseOut={this.change_icon2.bind(this, "iconner15", "iconner16")}>
                        <span className="lohny-2"><span  id="iconner15" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner16" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Help & Support</span></span>
                        </Link>
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
                <div className="col-lg-12 welcome-image">
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Questions? Ask VU<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            Find answers about fees, admissions, courses, programs, transcripts, exams, and more.
                                        </p>
                                        <p><Link className="logo-2" to="/contact" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner17", "iconner18")} onMouseOut={this.change_icon2.bind(this, "iconner17", "iconner18")}>
                                            <span className="lohny-2"><span  id="iconner17" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner18" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Ask a Question</span></span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Undergraduate calendar&nbsp;<span className="fa fa-external-link"></span></p>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Graduate calendar&nbsp;<span className="fa fa-external-link"></span></p>
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
            <GetInfo />
            <Footer />
            </React.Fragment>
        )
    }
}

export default CurrentStudents;