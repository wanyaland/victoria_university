import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';


class Careers extends Component{

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
        <section class="w3l-top-header-content" style={{marginTop: '-20px'}}>
            <div class="hny-top-menu">
                <div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
                    <div class="container-fluid">
                        <div class="row">
                            <ol class="accounts col-md-3">
                                <li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / Careers Opportunities</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="w3l-apply-6">
            <div class="apply-info py-5">
                <div class="container py-lg-5">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="">
                            <h4 class="text-left" style={{textTransform: 'capitalize'}}>Career opportunities</h4>
                    </div>
                    <div style={{width:'10%', border:'#f04545 2px solid', display: 'subgrid'}} class="text-left"></div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="apply-grids-info">
                        <div class="mt-lg-5 mt-4 justify-content-center">
                            <div class="appyl-sub-icon-info text-center">
                                <div style={{border: '#FFF 2px solid', height: '40px', width: '2%', margin: '0 auto', borderRadius: '40%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <br/>
        <section class="w3l-wecome-content-6">
            <div class="ab-content-6-mian py-5">
                <div class="container py-lg-5">
                    <div class="welcome-grids row">
                        <div class="col-lg-12 welcome-image">
                            <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                                <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                                    <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Executive/Senior Management and Other Opportunities <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                                    <div class="contenter">
                                        <br/>
                                        <div class="col-lg-12 welcome-image">
                                            <div class="" style={{width: '100%', backgroundColor: '#fff', border:'#187eb4 1px solid'}}>
                                                <ul class="job_list" style={{listStyle: 'none'}}>
                                                    <li class="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li class="job_title"><a href="assets/docs/job_ad.pdf" download="assets/docs/job_ad.pdf">Store Manager&nbsp;<span class="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
                                            </div>
                                        </div>	
                                        <br/>
                                    </div>
                                    <li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Management, Academic, Professional &amp; Administrative Opportunities <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                                    <div class="contenter">
                                        <br/>
                                        <div class="col-lg-12 welcome-image">
                                            <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#187eb4 1px solid'}}>
                                                <ul class="job_list" style={{listStyle: 'none'}}>
                                                    <li class="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li class="job_title"><a href="assets/docs/job_ad.pdf" download="assets/docs/job_ad.pdf">Store Manager&nbsp;<span class="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
                                                </ul>
                                            </div>
                                        </div>	
                                        <br/>
                                    </div>
                                    <li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Research Assistant Opportunities<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                                    <div class="contenter">
                                        <br/>
                                        <div class="col-lg-12 welcome-image">
                                            <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#187eb4 1px solid'}}>
                                                <ul class="job_list" style={{listStyle: 'none'}}>
                                                    <li class="" style={{backgroundColor: '#0077b5', color: '#FFF'}}><b>Job Title</b></li>
                                                    <li class="job_title"><a href="assets/docs/job_ad.pdf" download="assets/docs/job_ad.pdf">Store Manager&nbsp;<span class="fa fa-file-pdf-o" style={{color: '#d32727'}}></span></a></li>
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
        <section class="w3l-features-1">
            <div class="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
                <div class="">
                    <h4 class="hny-title text-center" style={{color: '#0077b5', fontSize: '36px'}}>What We Offer at a Glance</h4>
                </div>
                <div class="container py-lg-5">
                    <div class="row grids-innf my-lg-5">
                        <div class="features-1-info col-lg-4 col-md-6">
                            <div class="features-1-info-icon text-center">
                                <span class="fa fa-stethoscope" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div class="features-1-info-info text-center">
                                <h6 class="text-center">Health Care Benefitsn</h6>
                                <p>Coverage for dental, vision, prescription drugs, out-of-country health care coverage, counselling services.</p>
                            </div>
                        </div>
                        <div class="features-1-info col-lg-4 col-md-6">
                            <div class="features-1-info-icon text-center">
                                <span class="fa fa-shield" style={{color: '#0077b5', padding: '20px 25px', fontSize: '58px'}}></span>
                            </div>
                            <div class="features-1-info-info text-center">
                                <h6 class="text-center">Insurance Benefits</h6>
                                <p>Life insurance, accident insurance, long-term disability insurance.</p>
                            </div>
                        </div>
                        
                        <div class="features-1-info col-lg-4 col-md-6">
                            <div class="features-1-info-icon text-center">
                                <span class="fa fa-plane" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div class="features-1-info-info text-center">
                                <h6 class="text-center">Vacation</h6>
                                <p>Paid vacation days and statutory holidays.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row grids-innf my-lg-5">
                        <div class="features-1-info col-lg-4 col-md-6">
                            <div class="features-1-info-icon text-center">
                                <span class="fa fa-clock-o" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div class="features-1-info-info text-center">
                                <h6 class="text-center">Time Off</h6>
                                <p>Holiday break from Dec 25 – Jan 1 each year, sick leave, special leave, parental leaves (maternity, parental/adoption), compassionate care leave.</p>
                            </div>
                        </div>
                        <div class="features-1-info col-lg-4 col-md-6">
                            <div class="features-1-info-icon text-center">
                                <span class="fa fa-connectdevelop" style={{color: '#0077b5', padding: '20px 25px', fontSize: '58px'}}></span>
                            </div>
                            <div class="features-1-info-info text-center">
                                <h6 class="text-center">Learning and Professional Development</h6>
                                <p>Paid time off and funds each year for professional development activities.</p>
                            </div>
                        </div>
                        
                        <div class="features-1-info col-lg-4 col-md-6">
                            <div class="features-1-info-icon text-center">
                                <span class="fa fa-book" style={{color: '#0077b5', padding: '22px 18px', fontSize: '58px'}}></span>
                            </div>
                            <div class="features-1-info-info text-center">
                                <h6 class="text-center">Research and Study Leave</h6>
                                <p>Paid research and study leave for academic, professional and tutor positions.</p>
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