import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Governing extends Component{
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
									<img className="d-block w-100" src="assets/images/abt.JPG" alt="First slide" style={{filter: 'brightness(60%)'}}/>
								</div>
								<div className='banner-caption'>&nbsp;Governance</div>
							</div>
						</div>
					</div>
				</div>
			</section>
                <section className="w3l-top-header-content">
    <div className="hny-top-menu">
        <div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
            <div className="container-fluid">
                <div className=""  style={{color: "#EEE"}}>
                    <Link to="/"><span className="underline"  style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Governance</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Governance</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '18px'}}>Victoria University has a principle of good governance  structure through which the academic and administrative affairs of University are Conducted .The governance of the University shall be vested in the Board of Directors, University Chancellor, University Council, University Senate,University Top Management.</p>
                    {/* <p>
                        <Link className="logo-2" to="/about" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Visit the Office of the University Secretariat website.</span>
                        </Link>
                    </p> */}
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
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Mission and Pillars<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Vision</h6>
                                        <p className="my-4">To be a world class University for transformational education</p>
                                        <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Mission</h6>
                                        <p className="my-4">To provide a dynamic environment for learning, innovation, research and community engagement</p>
                                        <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Our Pillars</h6>
                                        <p className="my-4">Academic Excellence</p>
                                        <p className="my-4">
                                        <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Deliver Outstanding Academic Programming</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Develop And Nurture A Robust Employer-staff Relationship</li>
                                            </ul>
                                        </p>
                                        <p className="my-4">Research Excellence & Impact</p>
                                        <p className="my-4">
                                        <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Develop Transformational Research to Increase Worldwide Impact And Recognition</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Create A Centre For Teaching Excellence</li>
                                            </ul>
                                        </p>
                                        <p className="my-4">Authentic Learning Education</p>
                                        <p className="my-4">
                                        <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Become the Leader In Technology enabled Authentic Experiential Learning</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Deliver A Vibrant Student Experience</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Create Career building Opportunities for Students</li>
                                            </ul>
                                        </p>
                                        <p className="my-4">Internationalization</p>
                                        <p className="my-4">
                                        <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Promote A Sound Value System Embodied By Student, Staff And Affiliates</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Achieve Regional Prominence and Internationalization</li>
                                            </ul>
                                        </p>
                                        <p className="my-4">Entrepreneurship</p>
                                        <p className="my-4">
                                        <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Evolve Reputation into The Leading Entrepreneurial University In The Region</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;I-Care values<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                    <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Our I-CARE values</h6>
                                    <p className="my-4">The students and staff of  VictoriaUniversity hold a set of complementary values that are fundamental to  Victoria University's identity and functioning.</p>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diversity</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Integrity</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Empathy</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Critical thinking</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Innovativeness</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Discipline</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Passion</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Respect</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Resilience</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Team Work</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            {/* <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;University documents<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">To apply for an Victoria University graduate program you must have an undergraduate degree. Doctorate programs require a master’s degree to qualify for admission. Requirements for graduate programs vary and are listed on each program’s website. You can take some graduate courses without being admitted to the full program if you meet the non-program student requirements for said program. Requirements for graduate programs are listed on each program’s website.</p>
                                    </div>
                                </div>	
                                <br/>
                            </div> */}
                            <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Policy manuals<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                        The  Victoria University Policy and Procedures Manual, the official source for VU's policies, is a public document maintained and issued by the Office of the University Secretariat. Unless otherwise noted, policies apply to all units under VU's jurisdiction.</p>
                                        <p className="my-4">The Office of the University Secretariat considers the online, published version of all policies and procedures as part of the Policy and Procedures Manual to be the official records
                                        </p>
                                        <p>
                                        <Link className="logo-2" to="/policies" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                            <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Visit the Policy Manual website</span>
                                        </Link>
                    </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            {/* <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Privacy - brief summary<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">If your native language is not English, you must demonstrate English Language Proficiency (ELP) to take Victoria University courses. VU accepts the following as proof of English Language Proficiency:</p>
                                    </div>
                                </div>	
                                <br/>
                            </div> */}
                            {/* <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Service standards<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">If you have credentials from an institution outside of Uganda and you would like VU to consider them for transfer credit, you need to have an assessment done through an international assessment agency.</p>
                                    </div>
                                </div>	
                                <br/>
                            </div> */}
                            <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Key Facts<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>Key Facts</h6>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;No.1 in Uganda for Experiential Learning Education</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;No.1 in Uganda for Employer-Student Connections</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;No.1 in Uganda for graduate employability</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;No.1 in Uganda for “CREATOR OWNS INTELLECTUAL PROPERTY” our intellectual property policy means your great ideas belong to you.</li>
                                            </ul>
                                        </p>
                                        <h6 className="hny-title text-left" style={{color: '#0077b5', fontSize: '40px'}}>The VU Difference</h6>
                                        <p className="my-4">We are building a University where:</p>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Student experience and our research portfolio are built around our academic core</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Research is high quality, interdisciplinary and benchmarks internationally</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;World-class entrepreneurial skills development is woven across all academic programs</li>
                                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;We take calculated risks to nurture ideas into real-world application</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            {/* <li className="w3-display-container collapsible"><span className="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Related Links<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4"><b style={{fontSize: '18px', fontWeight: '600', color: 'orchid'}}>Q:</b>&nbsp;&nbsp;I want to take an online program. Can I get a study permit for entry into Uganda?</p>
                                    </div>
                                </div>	
                                <br/>
                            </div> */}
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

export default Governing;