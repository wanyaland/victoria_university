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
    render(){
        return(
            <React.Fragment>
            <BreadNavBar />
            <NavBar />
<section class="w3l-top-header-content">
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="">
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
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Current Students</h6>
                    <br/>
                    <p class="my-4" style={{fontSize: '22px'}}>Congratulations on your decision to become an Victoria University student. Let us show you what you need to know to succeed.
                    </p>
                    <p>
                        <Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Overview for new students</span></span>
                        </Link>
                    </p>
                    <p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <span class="lohny-2"><span  id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">myVU Student Portal</span></span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color: '#000', width: '90%'}} />
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Taking courses</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Find out exactly what you need to know about registering in, withdrawing from and extending a course – then learn about the exam process at VU.</p>
                    <p><Link class="logo-2" href="home" style={{color: '#0077b5'}} onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                        <span class="lohny-2"><span  id="iconner5" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Course procedures for new students</span></span>
                        </Link>
                    </p>
                    <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                        <span class="lohny-2"><span  id="iconner7" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Learn more about our exam procedures</span></span>
                        </Link>
                    </p>
                    <h6 class="hny-title" style={{fontSize: '34px', color: '#0077b5'}}>Taking another university’s course for VU credit</h6>
                    <p class="mb-4" style={{fontSize: '18px'}}>
                        You may be able to use courses from another university to fulfil an VU program requirement. You’ll need to get a letter of permission before you register in the course.
                    </p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Letter of permission request form (pdf)&nbsp;<span class="fa fa-external-link"></span></p>
                    <p class="my-4">Once your course is complete, you must have the school send an official transcript to VU.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color: '#000', width: '90%'}} />
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Grades</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Check your grades online and learn about requesting transcripts.
                    </p>
                    <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner29", "iconner30")} onMouseOut={this.change_icon2.bind(this, "iconner29", "iconner30")}>
                        <span class="lohny-2"><span  id="iconner29" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner30" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Transcripts & grades</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color: '#000', width: '90%'}}/>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Undergraduate orientation</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Our orientation offers an overview of services available to you as an VU student, and guides you through the processes needed to complete your studies.
                    </p>
                    <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                        <span class="lohny-2"><span  id="iconner11" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner12" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Undergraduate orientation</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color: '#000', width: '90%'}} />
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Learner support</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>
                        Find out more about our range of support services, including counselling, the library, and the Write Site.
                    </p>
                    <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner13", "iconner14")} onMouseOut={this.change_icon2.bind(this, "iconner13", "iconner14")}>
                        <span class="lohny-2"><span  id="iconner13" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner14" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Student Services</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color: '#000', width: '90%'}} />
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Find Help</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>
                        No matter where you are in your AU experience, we’re here to help you along the way.
                    </p>
                    <p>
                    <Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner15", "iconner16")} onMouseOut={this.change_icon2.bind(this, "iconner15", "iconner16")}>
                        <span class="lohny-2"><span  id="iconner15" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner16" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Help & Support</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5">
            <div class="welcome-grids row">
                <div class="col-lg-12 welcome-image">
                    <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 class="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Questions? Ask VU<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">
                                            Find answers about fees, admissions, courses, programs, transcripts, exams, and more.
                                        </p>
                                        <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner17", "iconner18")} onMouseOut={this.change_icon2.bind(this, "iconner17", "iconner18")}>
                                            <span class="lohny-2"><span  id="iconner17" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner18" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">Ask a Question</span></span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Undergraduate calendar&nbsp;<span class="fa fa-external-link"></span></p>
                                        <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Graduate calendar&nbsp;<span class="fa fa-external-link"></span></p>
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