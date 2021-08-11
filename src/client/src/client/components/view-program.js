import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer'
import Data from './data/courses.json'
import { Link } from 'react-router-dom';
///

class ViewProgram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course_prog: {},
			course_desc: "",
			course_test: "",
			banner_src: ""
		}
	}
	componentDidMount(){
		window.onscroll = function() {stickyMenu()};
	
		var header = document.getElementById("myHeader2");
		var sticky = header.offsetTop;
		
		function stickyMenu() {
		  if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		  } else {
			header.classList.remove("sticky");
		  }
		}
		this.getCourse_ch()
	}
	getCourse_ch = () => {
		var progData = Data
		const result = progData.find( ({ program }) => program === this.props.match.params.program );
		this.setState({
			course_prog: result,
			facultyBanner: result.faculty
		})
		if(result.faculty === "Faculty Of Business And Management"){
			this.setState({
				banner_src: 'assets/images/faculties/business.jpg'
			})
		} else if(result.faculty === "Faculty Of Science And Technology"){
			this.setState({
				banner_src: 'assets/images/faculties/tech.jpg'
			})
		} else if(result.faculty === "Faculty of Health Sciences"){
			this.setState({
				banner_src: 'assets/images/faculties/health.jpg'
			})
		} else if(result.faculty === "Faculty of Humanities and Social Sciences"){
			this.setState({
				banner_src: 'assets/images/faculties/humanities.jpg'
			})
		} else if(result.faculty === "Institute Of Education And Social Sciences"){
			this.setState({
				banner_src: 'assets/images/faculties/education.jpg'
			})
		} else if(result.faculty === "School Of Law"){
			this.setState({
				banner_src: 'assets/images/faculties/law.jpg'
			})
		}
	}
	openForm(){
        document.getElementById("myForm").style.display = "block";
    }
	apply(){
        window.location.href = "apply-now";
    }
	viewSummary(){
        window.location.href = "#summary";
    }
	updateOverview = () =>{
		var overview = document.getElementById('overview')
		var duration = document.getElementById('duration')
		var admission = document.getElementById('admission')
		var tuition = document.getElementById('admission')
		var mainDisplay = document.getElementById('main-display')
		mainDisplay.innerHTML = '<h6 class="hny-title" style="font-size: 28px; color: #444; font-weight: 500;">Programme Overview</h6><br/><p class="my-4" style="font-size: 18px">'+this.state.course_prog.full_desc+'</p>'
		overview.classList.add('activeSummaryRed')
		duration.classList.remove('activeSummaryBlue')
		admission.classList.remove('activeSummaryPurple')
		tuition.classList.remove('activeSummaryBrown')
	}
	updateTime = () => {
		var overview = document.getElementById('overview')
		var duration = document.getElementById('duration')
		var admission = document.getElementById('admission')
		var tuition = document.getElementById('tuition')
		var mainDisplay = document.getElementById('main-display')
		mainDisplay.innerHTML = '<h6 class="hny-title" style="font-size: 28px; color: #444; font-weight: 500;">Completion Time</h6><br/><p class="my-4" style="font-size: 18px">'+this.state.course_prog.duration+' Years</p>'
		overview.classList.remove('activeSummaryRed')
		duration.classList.add('activeSummaryBlue')
		admission.classList.remove('activeSummaryPurple')
		tuition.classList.remove('activeSummaryBrown')
	}
	updateRequirements = () => {
		var overview = document.getElementById('overview')
		var duration = document.getElementById('duration')
		var admission = document.getElementById('admission')
		var tuition = document.getElementById('tuition')
		var mainDisplay = document.getElementById('main-display')
		mainDisplay.innerHTML = '<h6 class="hny-title" style="font-size: 28px; color: #444; font-weight: 500;">Program Requirements</h6><br/><p class="my-4" style="font-size: 18px;"><a href="requirements#business" class="underline" style="color: #0077b5;" target="_blank">Click here to view course requirements under faculty <b style="font-weight: 600;">'+this.state.course_prog.faculty+'</b></a></p>'
		overview.classList.remove('activeSummaryRed')
		duration.classList.remove('activeSummaryBlue')
		admission.classList.add('activeSummaryPurple')
		tuition.classList.remove('activeSummaryBrown')
	}
	updateReqcourses = () => {
		window.location.href = "requirements";
	}
	updateFees = () => {
		var overview = document.getElementById('overview')
		var duration = document.getElementById('duration')
		var admission = document.getElementById('admission')
		var tuition = document.getElementById('tuition')
		var mainDisplay = document.getElementById('main-display')
		mainDisplay.innerHTML = '<h6 class="hny-title" style="font-size: 28px; color: #444; font-weight: 500;">Fees and Tuition</h6><p class="my-4" style="font-size: 18px"><br><h6 class="hny-title" style="font-size: 28px; color: #444; font-weight: 500;">Local Students</h6><br><h6 class="hny-title" style="font-size: 20px; color: #444; font-weight: 400;text-decoration: underline;">First Semester</h6>Tuition Fee: UGX '+this.state.course_prog.local_price+'<br>Functional Fee: UGX '+this.state.course_prog.local_func_fee+'<br>Registration Fee: UGX 50,000<br>Application Fee: UGX 160,000<br><br><h6 class="hny-title" style="font-size: 20px; color: #444; font-weight: 400;text-decoration: underline;">Second Semester</h6>Tuition Fee: UGX '+this.state.course_prog.local_price+'<br>Functional Fee: UGX '+this.state.course_prog.local_func_fee+'<br>Registration Fee: UGX 50,000<br>Application Fee: UGX 160,000<br><hr style="width:100%;"/><h6 class="hny-title" style="font-size: 28px; color: #444; font-weight: 500;">International Students</h6><br/><h6 class="hny-title" style="font-size: 20px; color: #444; font-weight: 400;text-decoration: underline;">First Semester</h6>Tuition Fee: USD '+this.state.course_prog.int_price+'<br>Funcitional Fee: USD '+this.state.course_prog.int_func_fee+'<br>Registration Fee: USD 16<br>Application Fee: USD 51<br><br><h6 class="hny-title" style="font-size: 20px; color: #444; font-weight: 400;text-decoration: underline;">Second Semester</h6>Tuition Fee: USD '+this.state.course_prog.int_price+'<br>Funcitional Fee: USD '+this.state.course_prog.int_func_fee+'<br>Registration Fee: USD 16<br>Application Fee: USD 51</p>'
		overview.classList.remove('activeSummaryRed')
		duration.classList.remove('activeSummaryBlue')
		admission.classList.remove('activeSummaryPurple')
		tuition.classList.add('activeSummaryBrown')

	}
	glance = () => {
		window.location.href = "#glance"
	}
	getInfo = () => {
		window.location.href = "#get-info"
	}
	resources = () => {
		window.location.href = "#resources"
	}
    render(){
		//const { search } = this.props.location
		//const { match } = this.props
		//const { params } = match
		//const { program } = params
		//console.log({program}, "PROGRAM SELECT", {search});
		//con
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
						<img className="w-100" src={this.state.banner_src} style={{filter: 'brightness(70%)'}} alt="slide"/>
					</div>
					<div className="carousel-caption">
							<h6 className="sub-head-view" style={{textTransform: 'capitalize', color: '#FFF', textShadow: '2px 2px #000'}}>{this.state.course_prog.program}</h6>
						<br/>
						<p className="text-center d-block"><button className="btn_linked-view" onClick={this.apply}>Apply Online</button>&nbsp;&nbsp;&nbsp;&nbsp;<br/><button className="btn_linked-view2" onClick={this.viewSummary}>Program Summary</button></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-top-header-content" id="myHeader2" style={{zIndex: '1'}}>
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '10px 0px 10px 0px', backgroundColor: '#EEE'}}>
			<div className="container-fluid">
				<div className="row">
					<ol className="accounts col-md-12 justify-content-center">
                        <li className="breadcrumb-item cursor" style={{color: '#000'}} onClick={this.glance}><span className="fa fa-gears" style={{fontSize: '32px', color: '#013f61'}}></span><span className="titled4 text-hider" style={{color: '#0077b5'}}>&nbsp;At a Glance</span></li>
						<li className="breadcrumb-item cursor" style={{color: '#000'}} onClick={this.viewSummary}><span className="fa fa-dot-circle-o" style={{fontSize: '32px', color: '#013f61'}}></span><span className="titled4 text-hider" style={{color: '#0077b5'}}>&nbsp;Program Summary</span></li>
						<li className="breadcrumb-item cursor" style={{color: '#000'}} onClick={this.resources}><span className="fa fa-photo" style={{fontSize: '32px', color: '#013f61'}}></span><span className="titled4 text-hider" style={{color: '#0077b5'}}>&nbsp;Resources & Links</span></li>
						<li className="breadcrumb-item cursor" style={{color: '#000'}} onClick={this.getInfo}><span className="fa fa-cubes" style={{fontSize: '32px', color: '#013f61'}}></span><span className="titled4 text-hider" style={{color: '#0077b5'}}>&nbsp;Get information</span></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-specification-6" id="glance">
	<div className="specification-content py-5">
		<div className="container py-lg-5">
			<h6 className="hny-title text-center" style={{fontSize: '32px'}}><span className="fa fa-window-maximize text-center" style={{fontSize: '48px'}}></span><br/>At a Glance</h6>
			<p className="hny-title text-center" style={{fontSize: '18px'}}><span>Level of Education: {this.state.course_prog.level}</span>&nbsp;|&nbsp;<span>Credits: {this.state.course_prog.credit}</span>&nbsp;|&nbsp;<span>Next Start:</span></p>
			<p className="my-4 text-center">Advance your skills and begin your academic journey with Victoria University’s {this.state.course_prog.program}.</p>
			<div className="mission-grids-info row">
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p style={{fontSize: '24px', color: '#025886'}}><b style={{fontWeight: '600'}}>Q:</b>&nbsp;Why take {this.state.course_prog.program}?</p>
					<p><b style={{fontWeight: '600', color: '#025886'}}>A:</b>{this.state.course_prog.short_desc}</p>
			    </div>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p style={{fontSize: '24px', color: '#025886'}}><b >Q:</b>&nbsp;How long would it take to complete?</p>
					<p><b style={{fontWeight: '600', color: '#025886'}}>A:</b>&nbsp;The expected normal completion time is {this.state.course_prog.duration} years.</p>
				</div>
			</div>
		</div>
    </div>
</section>
<section className="w3l-team-main" id="summary">
	<div className="team py-5">
		<div className="py-lg-5" >
			<h6 className="hny-title text-center" style={{fontSize: '28px', color: '#025886', fontWeight: '500'}}>Programme Overview</h6>
			<br/>
			<div className="justify-content-center container col-lg-9"  style={{display: 'flex'}}>
				<div className="col-lg-3 with_shadow" style={{border: '#888 1px solid', backgroundColor: '#EEE'}}>
					<div className="sidenavd" style={{backgroundColor: '#EEE'}}>
                       {/*  <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container hover-program-red" style={{borderBottom: 'none'}} onClick={this.updateOverview}>Overview</li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}} onClick={this.updateTime}>Completion time</li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}} onClick={this.updateRequirements}>Admission requirements</li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}} onClick={this.updateFees}>Tuition and fees</li>
                        </ul> */}
                        <ul className="prog-listuv" style={{boxShadow: 'none'}}>
                            <li className="prog-listv hover-program-red activeSummaryRed" id="overview" onClick={this.updateOverview}>Overview</li>
                            <li className="prog-listv hover-program-blue" id="duration" onClick={this.updateTime}>Completion time</li>
                            <li className="prog-listv hover-program-purple" id="admission" onClick={this.updateRequirements}>Admission requirements</li>
                            <li className="prog-listv hover-program-brown" id="tuition" onClick={this.updateFees}>Tuition and fees</li>
                        </ul>
                    </div>
				</div>
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', border: '#888 1px solid'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5" id="main-display">
						<h6 className="hny-title" style={{fontSize: '28px', color: '#444', fontWeight: '500'}}>Programme Overview</h6>
						<br/>
						<p className="my-4" style={{fontSize: '18px'}}>{this.state.course_prog.full_desc}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-features-1" id="resources">
	<div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
		<div className="container py-lg-5" style={{border: '#c2c2c2 10px solid', paddingBottom: '0rem !important'}}>
                <div className="row grids-innf my-lg-5" style={{marginTop: '0 !important', marginBottom: '0 !important', padding: '20px'}}>
					<div className="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0',  marginBottom: '40px'}}>
						<p className="text-center" style={{color: '#025886', fontSize: '42px'}}><span className="fa fa-sign-in"></span></p>
						<p className="my-4 text-center" style={{color: '#025886'}}>Resources & links</p>
						<p className="my-4 text-center">Additional information that you need to know about VU and this program.</p>
                    </div>
                    <div className="features-1-info col-lg-4 col-md-4" style={{borderRight: '#c2c2c2 1px solid'}}>
						<br/>
                        <div className="features-1-info-info text-center">
                            <h6 className="text-center" style={{color: '#025886'}}>Program resources</h6>
                        </div>
						<p className="my-4 text-center">
							<ul style={{listStyle: 'none'}}>
								<Link to="/apply-now"><li className="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span className="fa fa-external-link" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span className="underline">Apply Online</span></li></Link>
							</ul>
						</p>
                    </div>
                    <div className="features-1-info col-lg-4 col-md-4" style={{borderRight: '#c2c2c2 1px solid'}}>
                        <div className="features-1-info-info text-center">
                            <h6 className="text-center" style={{color: '#025886'}}>Additional resources</h6>
                        </div>
						<p className="my-4 text-center">
							<ul style={{listStyle: 'none'}}>
								<li className="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span className="fa fa-external-link" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span className="underline" onClick={this.openForm}>Ask VU</span></li>
							</ul>
						</p>
                    </div>
					<div className="features-1-info col-lg-4 col-md-4">
                        <div className="features-1-info-info text-center">
                            <h6 className="text-center" style={{color: '#025886'}}>Program contact</h6>
                        </div>
						<p className="my-4 text-center">
							<ul style={{listStyle: 'none'}}>
								<li className="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span className="fa fa-angle-right" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span className="">+256 759 996 130 or +256 700 300 088 or +256 707 780 158</span></li>
								<li className="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span className="fa fa-angle-right" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span className="">admissions@vu.ac.ug OR marketing@vu.ac.ug</span></li>
							</ul>
						</p>
                    </div>
                </div>
		</div>
	</div>
</section>
<div id="get-info"></div>
                <GetInfo />
                <Footer />
            </React.Fragment>
        )
    }
}

export default ViewProgram