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
<section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Current Students</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Current Students</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '22px'}}>Congratulations on your decision to become an Victoria University student. Let us show you what you need to know to succeed.
                    </p>
                    <p>
                        <Link className="logo-2" to="/new-students" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Overview for new students</span></span>
                        </Link>
                    </p>
                    <p><Link className="logo-2" style={{color: '#0077b5'}} onclick={this.toVclass}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">myVU Student Portal</span></span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Taking courses</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Find out exactly what you need to know about registering in, withdrawing from and extending a course – then learn about the exam process at VU.</p>
                    <br/>
                    <br/>
                    <img src="assets/images/class_mat.jpg" className="img-fluid" alt="" />
                    <br/>
                    <br/>
                    <p><Link className="logo-2" to="/new-students" style={{color: '#0077b5'}} onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                        <span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Course procedures for new students</span></span>
                        </Link>
                    </p>
                    <p><Link className="logo-2" to="/exams" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                        <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Learn more about our exam procedures</span></span>
                        </Link>
                    </p>
                    <h6 className="hny-title" style={{fontSize: '34px', color: '#0077b5'}}>Taking another university’s course for VU credit</h6>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        You may be able to use courses from another university to fulfil an VU program requirement. You’ll need to get a letter of permission before you register in the course.
                    </p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Letter of permission request form (pdf)&nbsp;<span className="fa fa-external-link"></span></p>
                    <p className="my-4">Once your course is complete, you must have the school send an official transcript to VU.</p>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Grades</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Check your grades online and learn about requesting transcripts.
                    </p>
                    <p><Link className="logo-2" to="/transfer-credit" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner29", "iconner30")} onMouseOut={this.change_icon2.bind(this, "iconner29", "iconner30")}>
                        <span className="lohny-2"><span  id="iconner29" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner30" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Transcripts & grades</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}}/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Undergraduate orientation</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Our orientation offers an overview of services available to you as an VU student, and guides you through the processes needed to complete your studies.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                        <span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate orientation</span></span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Learner support</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        Find out more about our range of support services, including counselling, the library, and the Write Site.
                    </p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
                        <span className="lohny-2"><span  id="iconner13" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Student Services</span></span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Find Help</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>
                        No matter where you are in your VUexperience, we’re here to help you along the way.
                    </p>
                    <p>
                    <Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner15", "iconner16")} onMouseOut={this.change_icon2.bind(this, "iconner15", "iconner16")}>
                        <span className="lohny-2"><span  id="iconner15" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner16" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Help & Support</span></span>
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
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Questions? Ask VU<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            Find answers about fees, admissions, courses, programs, transcripts, exams, and more.
                                        </p>
                                        <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner17", "iconner18")} onMouseOut={this.change_icon2.bind(this, "iconner17", "iconner18")}>
                                            <span className="lohny-2"><span  id="iconner17" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner18" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Ask a Question</span></span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
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