import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'



class Careers extends Component{
startHere = () => {
    window.location.href = "#available"
}
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
                        <div className="underline">
                            <Link to="/"><span className="underline" style={{color: "#EEE"}}>
                            Victoria University 
					        </span></Link>&nbsp;
					        <span style={{color: '#EEE'}}>/ Careers Opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w3l-apply-6">
	<div className="apply-info py-5">
		<div className="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
            <br/>
			<div className="">
					<h4 className="text-center" style={{textTransform: 'capitalize'}}>Career Opportunities</h4>
			</div>
			<br/>
			<p className="text-center"><button className="btn_link" onClick={this.startHere}>Apply Here</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn_link">Student Recruitment</button></p>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	</div>
</section>
        <br/>
        <br/>
        <section className="w3l-wecome-content-6">
            <div className="ab-content-6-mian py-5">
                <div className="container py-lg-5">
                    <div className="welcome-grids row">
                        <div className="col-lg-12 welcome-image" id="available">
                        <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Available vacancies</h6><br/>
                            <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                                <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Quality Assurance Manager<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                    <div className="contenter">
                                        <br/>
                                        <div className="col-lg-12 welcome-image">
                                            <div className="" style={{width: '100%', backgroundColor: '#fff', border:'#187eb4 1px solid'}}>
                                                <ul className="job_list" style={{listStyle: 'none'}}>
                                                    <li className="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li className="job_title"><a href="assets/docs/job_ad2.pdf" download="assets/docs/job_ad2.pdf">Job Description&nbsp;<span className="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
                                            </div>
                                        </div>	
                                        <br/>
                                    </div>
                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Manager Internal Audit<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                    <div className="contenter">
                                        <br/>
                                        <div className="col-lg-12 welcome-image">
                                            <div className="" style={{width: '100%', backgroundColor: '#fff', border:'#187eb4 1px solid'}}>
                                                <ul className="job_list" style={{listStyle: 'none'}}>
                                                    <li className="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li className="job_title"><a href="assets/docs/job_ad2.pdf" download="assets/docs/job_ad2.pdf">Job Description&nbsp;<span className="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
                                            </div>
                                        </div>	
                                        <br/>
                                    </div>
                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Librarian<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                    <div className="contenter">
                                        <br/>
                                        <div className="col-lg-12 welcome-image">
                                            <div className="" style={{width: '100%', backgroundColor: '#fff', border:'#187eb4 1px solid'}}>
                                                <ul className="job_list" style={{listStyle: 'none'}}>
                                                    <li className="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li className="job_title"><a href="assets/docs/job_ad2.pdf" download="assets/docs/job_ad2.pdf">Job Description&nbsp;<span className="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
                                            </div>
                                        </div>	
                                        <br/>
                                    </div>
                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Human Resource Officer<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                    <div className="contenter">
                                        <br/>
                                        <div className="col-lg-12 welcome-image">
                                            <div className="" style={{width: '100%', backgroundColor: '#fff', border:'#187eb4 1px solid'}}>
                                                <ul className="job_list" style={{listStyle: 'none'}}>
                                                    <li className="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li className="job_title"><a href="assets/docs/job_ad2.pdf" download="assets/docs/job_ad2.pdf">Job Description&nbsp;<span className="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
                                            </div>
                                        </div>	
                                        <br/>
                                    </div>
                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Web Administrator<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                    <div className="contenter">
                                        <br/>
                                        <div className="col-lg-12 welcome-image">
                                            <div className="" style={{width: '100%', backgroundColor: '#fff', border:'#187eb4 1px solid'}}>
                                                <ul className="job_list" style={{listStyle: 'none'}}>
                                                    <li className="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li className="job_title"><a href="assets/docs/job_ad2.pdf" download="assets/docs/job_ad2.pdf">Job Description&nbsp;<span className="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
                                            </div>
                                        </div>	
                                        <br/>
                                    </div>
                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Executive Assistant (Personal Assistant<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                    <div className="contenter">
                                        <br/>
                                        <div className="col-lg-12 welcome-image">
                                            <div className="" style={{width: '100%', backgroundColor: '#fff', border:'#187eb4 1px solid'}}>
                                                <ul className="job_list" style={{listStyle: 'none'}}>
                                                    <li className="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li className="job_title"><a href="assets/docs/job_ad2.pdf" download="assets/docs/job_ad2.pdf">Job Description&nbsp;<span className="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
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
        <section className="w3l-features-1">
            <div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
                <div className="">
                    <h4 className="hny-title text-center" style={{color: '#0077b5', fontSize: '36px'}}>What We Offer at a Glance</h4>
                </div>
                <div className="container py-lg-5">
                    <div className="row grids-innf my-lg-5">
                        <div className="features-1-info col-lg-4 col-md-6">
                            <div className="features-1-info-icon text-center">
                                <span className="fa fa-money" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div className="features-1-info-info text-center">
                                <h6 className="text-center">Commission for student recruitment</h6>
                                <p>Commission for every successful student recruitment made</p>
                            </div>
                        </div>
                        <div className="features-1-info col-lg-4 col-md-6">
                            <div className="features-1-info-icon text-center">
                                <span className="fa fa-stethoscope" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div className="features-1-info-info text-center">
                                <h6 className="text-center">Health Care Benefits</h6>
                                <p>Coverage for dental, vision, prescription drugs, out-of-country health care coverage, counselling services.</p>
                            </div>
                        </div>
                        <div className="features-1-info col-lg-4 col-md-6">
                            <div className="features-1-info-icon text-center">
                                <span className="fa fa-shield" style={{color: '#0077b5', padding: '20px 25px', fontSize: '58px'}}></span>
                            </div>
                            <div className="features-1-info-info text-center">
                                <h6 className="text-center">Insurance Benefits</h6>
                                <p>Life insurance, accident insurance, long-term disability insurance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row grids-innf my-lg-5">
                        <div className="features-1-info col-lg-4 col-md-6">
                            <div className="features-1-info-icon text-center">
                                <span className="fa fa-clock-o" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div className="features-1-info-info text-center">
                                <h6 className="text-center">Time Off</h6>
                                <p>Holiday break from Dec 25 – Jan 1 each year, sick leave, special leave, parental leaves (maternity, parental/adoption), compassionate care leave.</p>
                            </div>
                        </div>
                        <div className="features-1-info col-lg-4 col-md-6">
                            <div className="features-1-info-icon text-center">
                                <span className="fa fa-connectdevelop" style={{color: '#0077b5', padding: '20px 25px', fontSize: '58px'}}></span>
                            </div>
                            <div className="features-1-info-info text-center">
                                <h6 className="text-center">Learning and Professional Development</h6>
                                <p>Paid time off and funds each year for professional development activities.</p>
                            </div>
                        </div>
                        
                        <div className="features-1-info col-lg-4 col-md-6">
                            <div className="features-1-info-icon text-center">
                                <span className="fa fa-book" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div className="features-1-info-info text-center">
                                <h6 className="text-center">Research and Study Leave</h6>
                                <p>Paid research and study leave for academic, professional and tutor positions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row grids-innf my-lg-5">
                        <div className="features-1-info col-lg-4 col-md-6">
                            <div className="features-1-info-icon text-center">
                                <span className="fa fa-plane" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div className="features-1-info-info text-center">
                                <h6 className="text-center">Vacation</h6>
                                <p>Paid vacation days and statutory holidays.</p>
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

export default Careers;