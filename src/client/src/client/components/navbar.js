import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component{
	search() {
		document.getElementById("myDropdownr").classList.toggle("showr");
	}
	redirect() {
		window.location.href = "search";
	}
	dropdowned(id) {
		document.getElementById(id).classList.toggle("shower");
	}
	componentDidMount(){
		window.onclick = function(event) {
			if (!event.target.matches('.dropbtned')) {
				var dropdowns = document.getElementsByClassName("dropdown-contenter");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('shower')) {
					openDropdown.classList.remove('shower');
					}
				}
			}
		}
	}
	render(){
        return(
	<React.Fragment>
    <section className="w3l-banner-slider-main w3l-inner-page-main">
	<div className="breadcrumb-infhny">
		<header className="top-headerhny" id="head_runner">
			<nav className="navbar navbar-expand-lg navbar-light fill">
				<div className="container-fluid">
						<a className="navbar-brand" href="home.php">
							<img src="assets/images/logo.png" alt="Victoria University" title="Victoria University" style={{height:'55px'}} />
						</a> 
					<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mx-lg-auto ml-auto">
								<li className="nav-item">
									<Link to="./" className="nav-link">Home</Link>
								</li>
								<li className="nav-item">
									<Link href="#" onClick={this.dropdowned.bind(this, "about")} className="dropbtned nav-link">About&nbsp;&nbsp;<span className="fa fa-angle-down" style={{color: '#FFF', fontSize: '14px'}}></span></Link>
									<div id="about" className="dropdown-contenter">
										<Link to="/about" className="text-left" style={{color: '#888', fontWeight: '700'}}>About VU<span className="fa fa-home justify-content-lg-end" style={{fontSize: '20px', float: 'right'}}></span></Link>
										<Link to="/glance" className="text-left" style={{color: '#888', fontWeight: '700'}}>Vu at a Glance</Link>
										<Link to="/council" className="text-left" style={{color: '#888', fontWeight: '700'}}>Our Executive Team</Link>
										<Link to="/trustees" className="text-left" style={{color: '#888', fontWeight: '700'}}>Board of Trustees</Link>
										<Link to="/faculties" className="text-left" style={{color: '#888', fontWeight: '700'}}>Academic Faculties & Centers</Link>
										<Link to="/governing" className="text-left" style={{color: '#888', fontWeight: '700'}}>Governance</Link>
										<Link to="/history" className="text-left" style={{color: '#888', fontWeight: '700'}}>History</Link>
										<Link to="/partners" className="text-left" style={{color: '#888', fontWeight: '700'}}>Collaborations &amp; Partnerships</Link>
										<Link to="/staff" className="text-left" style={{color: '#888', fontWeight: '700'}}>Employee Information</Link>
									</div>
								</li>
								<li className="nav-item">
									<Link to="/programs" className="nav-link">Programmes</Link>
								</li>
								<li className="nav-item">
									<Link onClick={this.dropdowned.bind(this, "admissions")} className="dropbtned nav-link">Admissions&nbsp;&nbsp;<span className="fa fa-angle-down" style={{color: '#FFF', fontSize: '14px'}}></span></Link>
									<div id="admissions" className="dropdown-contenter">
										<Link to="/admissions" className="text-left" style={{color: '#888', fontWeight: '700'}}>Admissions</Link>
										<Link to="/student-profile" className="text-left" style={{color: '#888', fontWeight: '700'}}>What's your student profile?</Link>
										<Link to="/requirements" className="text-left" style={{color: '#888', fontWeight: '700'}}>Admission Requirements</Link>
										<Link to="/student-guidelines" className="text-left" style={{color: '#888', fontWeight: '700'}}>International Students Guidelines</Link>
										<Link to="/transfer-credit" className="text-left" style={{color: '#888', fontWeight: '700'}}>Exemption and Transfer Credit</Link>
										<Link to="/dates-deadlines" className="text-left" style={{color: '#888', fontWeight: '700'}}>Key dates and deadllines</Link>
										<Link to="/tuition-fees" className="text-left" style={{color: '#888', fontWeight: '700'}}>Tuition and Fees</Link>
										<Link to="/apply" className="text-left" style={{color: '#888', fontWeight: '700'}}>How To Apply And Register</Link>
									</div>
								</li>
								<li className="nav-item">
									<Link onClick={this.dropdowned.bind(this, "current-students")} className="dropbtned nav-link">Current Students&nbsp;&nbsp;<span className="fa fa-angle-down" style={{color: '#FFF', fontSize: '14px'}}></span></Link>
									<div id="current-students" className="dropdown-contenter">
										<Link to="/current-students" className="text-left" style={{color: '#888', fontWeight: '700'}}>Current Students</Link>
										<Link to="/new-students" className="text-left" style={{color: '#888', fontWeight: '700'}}>New Students</Link>
										<Link to="/course-offering" className="text-left" style={{color: '#888', fontWeight: '700'}}>Course Offerings</Link>
										<Link to="/myvu-student-portal" className="text-left" style={{color: '#888', fontWeight: '700'}}>myVU & Student Record</Link>
										{/* <Link to="/course-procedures" className="text-left" style={{color: '#888', fontWeight: '700'}}>Course proceduress</Link> */}
										<Link to="/dates-deadlines" className="text-left" style={{color: '#888', fontWeight: '700'}}>Course Records</Link>
										<Link to="/exams" className="text-left" style={{color: '#888', fontWeight: '700'}}>Exams</Link>
										<Link to="/apply" className="text-left" style={{color: '#888', fontWeight: '700'}}>Transcripts & Grades</Link>
										<Link to="/appeals" className="text-left" style={{color: '#888', fontWeight: '700'}}>Appeals</Link>
									</div>
								</li>
								<li className="nav-item">
									<Link to="/wil" className="nav-link" title="Work Intergrated Learning">Get To Work</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/research">Research</Link>
								</li>
							</ul>
					</div>
					<div className="d-flex searchhny-form" style={{display: 'flex', alignItems: 'center'}}>
						<a className="navbar-brand" href="home">
							<img src="assets/images/myvu.png" alt="Victoria University" title="Victoria University" style={{height: '55px'}} />
						</a> 
						<a href="contact" className="nav-link">
							<span className="fa fa-comments" style={{fontSize: '.85rem', color: '#FFF'}}></span>&nbsp;&nbsp;<span style={{fontSize: '13px', color: '#FFF'}}>Help &amp; Contact</span>
						</a>
						<span className="nav-link cursor">
							<span className="fa fa-search dropbtner" style={{fontSize: '1rem', color: '#FFF'}} onClick={this.search}></span>
							<div className="dropdownr">
								<div id="myDropdownr" className="dropdown-contentr">
									<form action="#" method="post" className="d-flex searchhny-form" style={{border: '#999 1px solid'}}>
										<input type="search" placeholder="Start Your Search" style={{color: '#000', backgroundColor: '#CCC'}} required="required" />
										<button className="search_btn" onClick={this.redirect}>Search</button>
									</form>
								</div>
							</div>
						</span> 
					</div>
				</div>
			</nav>
    </header>
		{/* rolling banner here - banner Home */}

	</div>

</section>
</React.Fragment>
        )
    }
}
function About() {
	return (
	  <About />
	);
  }
export default NavBar;