import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component{
	search() {
		document.getElementById("myDropdownr").classList.add("showr");
	}
	redirect() {
		window.location.href = "search";
	}
	toVclass = () => {
        window.location.href = "https://vclass.ac/"
    }
	componentDidMount(){
		window.onscroll = function() {stickyMenu()};
	
		var header = document.getElementById("head_runner");
		var sticky = header.offsetTop;
		
		function stickyMenu() {
		  if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		  } else {
			header.classList.remove("sticky");
		  }
		}
	}
	render(){
		const currentURL = window.location.pathname;
		const under = 'undergraduate'
		const postg = 'postgraduate'
		const diploma = 'diploma'
		const found = 'foundation'
		const professional = 'professional'
		const all = 'all'
        return(
	<React.Fragment>
    <section className="w3l-banner-slider-main w3l-inner-page-main" id="head_runner" style={{zIndex: '1'}}>
	<div className="breadcrumb-infhny">
		<header className="top-headerhny">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img src="/assets/images/logo.png" alt="Victoria University" title="Victoria University" style={{height:'55px'}} />
					</Link> 
					<ul className="nav-mob">
					<Link to="/">
						<li className="nav-item nav-focus">
							<img src="/assets/images/fav.png" alt="Victoria University" title="Victoria University" style={{height:'55px'}} />
						</li></Link>
						<li className="nav-item nav-focus">
							<Link onClick={this.toVclass} className="nav-link">VClass</Link>
						</li>
						<li className="nav-item nav-focus">
							<Link to="/contact" className="nav-link"><span className="fa fa-comments"></span></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" onClick={this.redirect}><span className="fa fa-search"></span></Link>
						</li>
					</ul>
					<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						&nbsp;<ul className="navbar-nav">
							<li className={currentURL === "/"? "nav-item nav-hover-activated" : "nav-item nav-hover"}>
								<Link to="/" className="nav-link">Home</Link>
							</li>
							<li className={currentURL === "/about" || currentURL === "/glance" || currentURL === "/council" || currentURL === "/executive-team" || currentURL === "/trustees" || currentURL === "/faculties" || currentURL === "/governing" || currentURL === "/history" || currentURL === "/partners" || currentURL === "/staff"? "dropdown nav-item nav-hover-activated" : "dropdown nav-item nav-hover"}><span className="dropdown-toggle nav-link" data-toggle="dropdown">About&nbsp;&nbsp;<span className="fa fa-angle-down"></span></span>
								<ul className="dropdown-menu dropdown-contenter">
									<Link to="/about" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>About VU<span className="fa fa-home justify-content-lg-end" style={{fontSize: '20px', float: 'right'}}></span></Link>
									<Link to="/glance" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Vu at a Glance</Link>
									{/* <Link to="/team" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Our Teams</Link> */}
									<div class="dropdown3">
									{/* <button class="dropbtn3">Dropdown</button> */}
									<Link className="text-left link-hover dropbtn3" style={{color: '#FFF', fontWeight: '400'}}>Our Teams</Link>
									<div class="dropdown-content3">
										<Link to="/directors" className="text-left link-hover"  style={{color: '#FFF', fontWeight: '400'}}>Directors</Link>
										<Link to="/council" className="text-left link-hover"  style={{color: '#FFF', fontWeight: '400'}}>University Council</Link>
										<Link to="/senate" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>University Senate</Link>
										<Link to="/staff" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Management Team</Link>
									</div>
									</div>
									{/* <Link to="/executive-team" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Our Executive Team</Link>
									<Link to="/trustees" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Board of Trustees</Link> */}
									<Link to="/governing" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Governance</Link>
									<Link to="/history" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>History</Link>
									<Link to="/partners" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Collaborations &amp; Partnerships</Link>
									{/* <Link to="/staff" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Management Team</Link> */}
								</ul>
							</li>
							{/* <li className={currentURL === "/programs"? "nav-item nav-hover-activated" : "nav-item nav-hover"}>
								<Link to="/programs" className="nav-link">Programmes</Link>
							</li> */}
							<li className={currentURL === "/programs"? "dropdown nav-item nav-hover-activated" : "dropdown nav-item nav-hover"}><span className="dropdown-toggle nav-link" data-toggle="dropdown">Programmes&nbsp;&nbsp;<span className="fa fa-angle-down"></span></span>
								<ul className="dropdown-menu dropdown-contenter">
									<Link to={`/prog-index/${under}`} className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Undergraduate</Link>
									<Link to={`/prog-index/${postg}`} className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Postgraduate</Link>
									<Link to={`/prog-index/${diploma}`} className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Diploma</Link>
									<Link to={`/prog-index/${found}`} className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Foundations</Link>
									<Link to={`/prog-index/${professional}`} className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Professional Development</Link>
									<Link to={`/prog-index/${all}`} className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>All Programmes</Link>
								</ul>
							</li>
							<li className={currentURL === "/admissions" || currentURL === "/vclass" || currentURL === "/student-profile" || currentURL === "/requirements" || currentURL === "/student-guidelines" || currentURL === "/transfer-credit" || currentURL === "/tuition-fees" || currentURL === "/apply" || currentURL === "/apply-now"? "dropdown nav-item nav-hover-activated" : "dropdown nav-item nav-hover"}><span className="dropdown-toggle nav-link" data-toggle="dropdown">Admissions&nbsp;&nbsp;<span className="fa fa-angle-down"></span></span>
								<ul className="dropdown-menu dropdown-contenter">
									<Link to="/admissions" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Admissions<span className="fa fa-home justify-content-lg-end" style={{fontSize: '20px', float: 'right'}}></span></Link>
									<Link to="/vclass" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>VClass</Link>
									<li><Link to="/faculties" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Academic Faculties & Centers</Link></li>
									<Link to="/student-profile" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>What's your student profile?</Link>
									<Link to="/requirements" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Admission Requirements</Link>
									<Link to="/student-guidelines" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>International Students Guidelines</Link>
									<Link to="/transfer-credit" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Exemption and Transfer Credit</Link>
									{/* <Link to="/dates-deadlines" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Key dates and deadllines</Link> */}
									<Link to="/tuition-fees" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Tuition and Fees</Link>
									<Link to="/apply" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>How To Apply And Register</Link>
									<a href="https://eadmissions.vu.ac.ug/" target="_blank" rel="noreferrer" className="text-center backed-btn" style={{fontWeight: '400'}}>Apply Now</a>
								</ul>
							</li>
							<li className={currentURL === "/current-students" || currentURL === "/exams"? "dropdown nav-item nav-hover-activated" : "dropdown nav-item nav-hover"}><span className="dropdown-toggle nav-link" data-toggle="dropdown">Students&nbsp;&nbsp;<span className="fa fa-angle-down"></span></span>
								<ul className="dropdown-menu dropdown-contenter">
								<Link to="/current-students" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Students <span className="fa fa-home justify-content-lg-end" style={{fontSize: '20px', float: 'right'}}></span></Link>
								<Link to="/exams" className="text-left link-hover" style={{color: '#FFF', fontWeight: '400'}}>Exams</Link>
								</ul>
							</li>
							<li className={currentURL === "/wil-landing" || currentURL === "/wil" || currentURL === "/how-wil-works" || currentURL === "/benefits" || currentURL === "/costs-and-insurance" || currentURL === "/wil-hall-of-fame" || currentURL === "/contactwil"? "nav-item nav-hover-activated" : "nav-item nav-hover"}>
								<Link to="/wil-landing" className="nav-link" title="Work Intergrated Learning">Get To Work</Link>
							</li>
							<li className={currentURL === "/research" || currentURL === "/about-res" || currentURL === "/ethics-res" || currentURL === "/avail-res" || currentURL === "/academic-res" || currentURL === "/superv-res"? "nav-item nav-hover-activated" : "nav-item nav-hover"}>
								<Link className="nav-link" to="/research">Research</Link>
							</li>
						</ul>
					</div>
					<ul className="d-flex searchhny-form navbar-nav" style={{display: 'flex', alignItems: 'center', padding: '0px'}}>
						<li className="nav-hover">
							<a className="" href="https://vclass.ac/login" target="_blank" rel="noreferrer">
								<span><img src="/assets/images/vcla.png" className="img-fluid" alt="Victoria University" title="Victoria University" /></span>
							</a>
						</li>
						<li className={currentURL === "/contact"? "nav-item nav-hover-activated" : "nav-item nav-hover"}>
							<Link to="/contact" className="nav-link">
								<span className="fa fa-comments" style={{fontSize: '.85rem', color: '#FFF'}}></span>&nbsp;&nbsp;<span style={{fontSize: '13px', color: '#FFF'}}>Help &amp; Contact</span>
							</Link>
						</li>
						<span className="nav-item nav-hover">
							<span className="fa fa-search nav-link" style={{fontSize: '15px', color: '#FFF'}} onClick={this.search}></span>
							<div className="dropdownr">
								<div id="myDropdownr" className="dropdown-contentr">
									<form action="#" method="post" className="d-flex searchhny-form" style={{border: '#999 1px solid'}}>
										<input type="search" placeholder="Start Your Search" style={{color: '#000', backgroundColor: '#CCC'}} required="required" />
										<button className="search_btn" onClick={this.redirect}>Search</button>
									</form>
								</div>
							</div>
						</span> 
					</ul>
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