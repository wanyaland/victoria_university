import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer'
import Data from './data/courses.json'
import { Link } from 'react-router-dom';

class ViewProgram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course_prog: {},
			course_desc: "",
			course_test: ""
		}
	}
	componentDidMount(){
		this.getCourse_ch()
		this.getBanner()
	}
	getCourse_ch = () => {
		var progData = Data
		const result = progData.find( ({ program }) => program === this.props.match.params.program );
		this.setState({
			course_prog: result,
		})
	}
	getBanner = () => {
		var facultyBanner = this.state.course_prog.faculty
		if(facultyBanner === "Faculty Of Business And Management"){

		} else if(facultyBanner === "Faculty Of Science And Technology"){

		} else if(facultyBanner === "Faculty of Health Sciences"){

		} else if(facultyBanner === "Faculty of Humanities and Social Sciences"){

		} else if(facultyBanner === "Institute Of Education And Social Sciences"){

		} else if(facultyBanner === "School Of Law"){
			
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
		mainDisplay.innerHTML = '<h6 class="hny-title" style="font-size: 28px; color: #444; font-weight: 500;">Fees and Tuition</h6><p class="my-4" style="font-size: 18px"><br><h6 class="hny-title" style="font-size: 20px; color: #444; font-weight: 500;">Local Students</h6>Tuition Fee: UGX '+this.state.course_prog.local_price+'<br>Functional Fee: UGX '+this.state.course_prog.local_func_fee+'<br>Registration Fee: UGX 50,000<br>Application Fee: UGX 160,000<br><hr style="width:100%;"><h6 class="hny-title" style="font-size: 20px; color: #444; font-weight: 500;">International Students</h6>Tuition Fee: USD '+this.state.course_prog.int_price+'<br>Funcitional Fee: USD '+this.state.course_prog.int_func_fee+'<br>Registration Fee: USD 16<br>Application Fee: USD 51</p>'
		overview.classList.remove('activeSummaryRed')
		duration.classList.remove('activeSummaryBlue')
		admission.classList.remove('activeSummaryPurple')
		tuition.classList.add('activeSummaryBrown')

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
				
<section class="w3l-apply-6">
	<div class="apply-info py-5">
		<div class="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
            <br/>
			<div class="">
					<h4 class="text-center" style={{textTransform: 'capitalize'}}>{this.state.course_prog.program}</h4>
			</div>
			<br/>
			<p class="text-center"><button class="btn_link" onClick={this.apply}>Apply Online</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn_link" onClick={this.viewSummary}>Program Summary</button></p>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	</div>
</section>
<section class="w3l-top-header-content" id="myHeader2" style={{zIndex: '1'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '10px 0px 10px 0px', backgroundColor: '#EEE'}}>
			<div class="container-fluid">
				<div class="row">
					<ol class="accounts col-md-12 justify-content-center">
                        <li class="breadcrumb-item" style={{color: '#000'}}><span class="fa fa-gears" style={{fontSize: '32px', color: '#013f61'}}></span><span class="titled4" style={{color: '#0077b5'}}>&nbsp;At a Glance</span></li>
						<li class="breadcrumb-item" style={{color: '#000'}}><span class="fa fa-dot-circle-o" style={{fontSize: '32px', color: '#013f61'}}></span><span class="titled4" style={{color: '#0077b5'}}>&nbsp;Resources & Links</span></li>
						<li class="breadcrumb-item" style={{color: '#000'}}><span class="fa fa-photo" style={{fontSize: '32px', color: '#013f61'}}></span><span class="titled4" style={{color: '#0077b5'}}>&nbsp;Start your journey</span></li>
						<li class="breadcrumb-item" style={{color: '#000'}}><span class="fa fa-cubes" style={{fontSize: '32px', color: '#013f61'}}></span><span class="titled4" style={{color: '#0077b5'}}>&nbsp;Related Programmes</span></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-specification-6">
	<div class="specification-content py-5">
		<div class="container py-lg-5">
			<h6 class="hny-title text-center" style={{fontSize: '32px'}}><span class="fa fa-window-maximize text-center" style={{fontSize: '48px'}}></span><br/>At a Glance</h6>
			<p class="hny-title text-center" style={{fontSize: '18px'}}><span>Level of Education: {this.state.course_prog.level}</span>&nbsp;|&nbsp;<span>Credits: {this.state.course_prog.credit}</span>&nbsp;|&nbsp;<span>Next Start:</span></p>
			<p class="my-4 text-center">Advance your skills and begin your academic journey with Victoria University’s {this.state.course_prog.program}.</p>
			<div class="mission-grids-info row">
				<div class="mission-gd-right col-lg-6 pl-lg-4">
					<p style={{fontSize: '24px', color: '#025886'}}><b style={{fontWeight: '600'}}>Q:</b>&nbsp;Why take {this.state.course_prog.program}?</p>
					<p><b style={{fontWeight: '600', color: '#025886'}}>A:</b>{this.state.course_prog.short_desc}</p>
			    </div>
				<div class="mission-gd-right col-lg-6 pl-lg-4">
					<p style={{fontSize: '24px', color: '#025886'}}><b >Q:</b>&nbsp;How long would it take to complete?</p>
					<p><b style={{fontWeight: '600', color: '#025886'}}>A:</b>&nbsp;The expected normal completion time is {this.state.course_prog.duration} years.</p>
				</div>
			</div>
		</div>
    </div>
</section>
<section class="w3l-team-main" id="summary">
	<div class="team py-5">
		<div class="py-lg-5" >
			<h6 class="hny-title text-center" style={{fontSize: '28px', color: '#025886', fontWeight: '500'}}>Programme Overview</h6>
			<br/>
			<div class="justify-content-center container col-lg-9"  style={{display: 'flex'}}>
				<div class="col-lg-3 with_shadow" style={{border: '#888 1px solid', backgroundColor: '#EEE'}}>
					<div class="sidenavd" style={{backgroundColor: '#EEE'}}>
                       {/*  <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container hover-program-red" style={{borderBottom: 'none'}} onClick={this.updateOverview}>Overview</li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}} onClick={this.updateTime}>Completion time</li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}} onClick={this.updateRequirements}>Admission requirements</li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}} onClick={this.updateFees}>Tuition and fees</li>
                        </ul> */}
                        <ul class="prog-listuv" style={{boxShadow: 'none'}}>
                            <li class="prog-listv hover-program-red activeSummaryRed" id="overview" onClick={this.updateOverview}>Overview</li>
                            <li class="prog-listv hover-program-blue" id="duration" onClick={this.updateTime}>Completion time</li>
                            <li class="prog-listv hover-program-purple" id="admission" onClick={this.updateRequirements}>Admission requirements</li>
                            <li class="prog-listv hover-program-brown" id="tuition" onClick={this.updateFees}>Tuition and fees</li>
                        </ul>
                    </div>
				</div>
				<div class="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', border: '#888 1px solid'}}>
                    <div class="col-lg-12 mb-lg-0 mb-5" id="main-display">
						<h6 class="hny-title" style={{fontSize: '28px', color: '#444', fontWeight: '500'}}>Programme Overview</h6>
						<br/>
						<p class="my-4" style={{fontSize: '18px'}}>{this.state.course_prog.full_desc}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-features-1">
	<div class="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
		<div class="container py-lg-5" style={{border: '#c2c2c2 10px solid', paddingBottom: '0rem !important'}}>
                <div class="row grids-innf my-lg-5" style={{marginTop: '0 !important', marginBottom: '0 !important', padding: '20px'}}>
					<div class="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0',  marginBottom: '40px'}}>
						<p class="text-center" style={{color: '#025886', fontSize: '42px'}}><span class="fa fa-sign-in"></span></p>
						<p class="my-4 text-center" style={{color: '#025886'}}>Resources & links</p>
						<p class="my-4 text-center">Additional information that you need to know about VU and this program.</p>
                    </div>
                    <div class="features-1-info col-lg-4 col-md-4" style={{borderRight: '#c2c2c2 1px solid'}}>
                        <div class="features-1-info-info text-center">
                            <h6 class="text-left" style={{color: '#025886'}}>Program resources</h6>
                        </div>
						<p class="my-4">
							<ul style={{listStyle: 'none'}}>
								<Link to="/apply-now"><li class="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span class="fa fa-external-link" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span class="underline">Apply Online</span></li></Link>
							</ul>
						</p>
                    </div>
                    <div class="features-1-info col-lg-4 col-md-4" style={{borderRight: '#c2c2c2 1px solid'}}>
                        <div class="features-1-info-info text-center">
                            <h6 class="text-center" style={{color: '#025886'}}>Additional resources</h6>
                        </div>
						<p class="my-4">
							<ul style={{listStyle: 'none'}}>
								<li class="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span class="fa fa-external-link" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span class="underline" onClick={this.openForm}>Ask VU</span></li>
							</ul>
						</p>
                    </div>
					<div class="features-1-info col-lg-4 col-md-4">
                        <div class="features-1-info-info text-center">
                            <h6 class="text-center" style={{color: '#025886'}}>Program contact</h6>
                        </div>
						<p class="my-4">
							<ul style={{listStyle: 'none'}}>
								<li class="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span className="fa fa-angle-right" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span className="">+256 759 996 130 or +256 700 300 088 or +256 707 780 158</span></li>
								<li className="" style={{marginBottom: '.5rem !important', color: '#025886'}}><span className="fa fa-angle-right" style={{color: '#025886', fontSize: '18px'}}></span>&emsp;<span className="">admissions@vu.ac.ug OR marketing@vu.ac.ug</span></li>
							</ul>
						</p>
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

export default ViewProgram