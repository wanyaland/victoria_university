import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component{
	search() {
		document.getElementById("myDropdownr").classList.toggle("showr");
	}
	redirect() {
		window.location.href = "search";
		console.log("Clicked")
	}

componentDidMount(){
	 /* window.onclick = function(event) {
		if (!event.target.matches('.dropbtner')) {
		  var dropdowns = document.getElementsByClassName("dropdown-contentr");
		  var i;
		  for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('showr')) {
			  openDropdown.classList.remove('showr');
			}
		  }
		}
	  } */
}
	render(){
        return(
	<React.Fragment>
    <section class="w3l-banner-slider-main w3l-inner-page-main">
	<div class="breadcrumb-infhny">
		<header class="top-headerhny" id="head_runner">
			<nav class="navbar navbar-expand-lg navbar-light fill">
				<div class="container-fluid">
						<a class="navbar-brand" href="home.php">
							<img src="assets/images/logo.jpg" alt="Victoria University" title="Victoria University" style={{height:'55px'}} />
						</a> 
					<button class="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav mx-lg-auto ml-auto">
								<li class="nav-item">
									<Link to="./" className="nav-link">Home</Link>
								</li>
								<li class="nav-item">
									<div class="dropdown" style={{float: 'left'}}>
										<Link class="dropdown nav-link" to="/about">About&nbsp;&nbsp;<span class="fa fa-angle-down" style={{color: '#FFF', fontSize: '14px'}}></span></Link>
										<div class="dropdown-content" style={{left: '0'}}>
											<Link to="/about" class="text-left" style={{color: '#888', fontWeight: '700'}}>About VU<span class="fa fa-home justify-content-lg-end" style={{fontSize: '20px', float: 'right'}}></span></Link>
											<Link to="/council" class="text-left" style={{color: '#888', fontWeight: '700'}}>Our Executive Team</Link>
											<Link to="/partners" class="text-left" style={{color: '#888', fontWeight: '700'}}>Collaborations &amp; Partnerships</Link>
										</div>
								</div>
								</li>
								<li class="nav-item">
									<Link to="/programs" className="nav-link">Programmes</Link>
								</li>
								<li class="nav-item">
									<div class="dropdown" style={{float:'left'}}>
									<Link class="dropdown nav-link" to="/admissions">Admissions&nbsp;&nbsp;<span class="fa fa-angle-down" style={{color: '#FFF', fontSize: '14px'}}></span></Link>
									<div class="dropdown-content" style={{left:'0'}}>
										<Link to="/student-profile" class="text-left" style={{color: '#888', fontWeight: '700'}}>What's your student profile?</Link>
										<Link to="/requirements" class="text-left" style={{color: '#888', fontWeight: '700'}}>Admission Requirements</Link>
										<Link to="/student-guidelines" class="text-left" style={{color: '#888', fontWeight: '700'}}>International Students Guidelines</Link>
										<Link to="/transfer-credit" class="text-left" style={{color: '#888', fontWeight: '700'}}>Transfer Credit</Link>
										<Link to="/dates-deadlines" class="text-left" style={{color: '#888', fontWeight: '700'}}>Key dates and deadllines</Link>
										<Link to="/tuition-fees" class="text-left" style={{color: '#888', fontWeight: '700'}}>Tuition, Fees and Financial Aid</Link>
										<Link to="/apply" class="text-left" style={{color: '#888', fontWeight: '700'}}>How To Apply And Register</Link>
									</div>
								</div>
								</li>
								<li class="nav-item">
								<div class="dropdown" style={{float: 'left'}}>
									<Link class="dropdown nav-link" to="/wil">WIL&nbsp;&nbsp;<span class="fa fa-angle-down" style={{color: '#FFF', fontSize: '14px'}}></span></Link>
									<div class="dropdown-content" style={{left: '0'}}>
										<Link to="/co-ops" class="text-left" style={{color: '#888', fontWeight: '700'}}>Co-ops</Link>
										<Link to="/co-ops" class="text-left" style={{color: '#888', fontWeight: '700'}}>Co-ops</Link>
										<Link to="/co-ops" class="text-left" style={{color: '#888', fontWeight: '700'}}>Co-ops</Link>
									</div>
								</div>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="home">Research</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="home">Life At VU</a>
								</li>
							</ul>
					</div>
					<div class="d-flex searchhny-form" style={{display: 'flex', alignItems: 'center'}}>
						<a class="navbar-brand" href="home">
							<img src="assets/images/myvu.png" alt="Victoria University" title="Victoria University" style={{height: '55px'}} />
						</a> 
						<a href="contact" class="nav-link">
							<span class="fa fa-comments" style={{fontSize: '.85rem', color: '#FFF'}}></span>&nbsp;&nbsp;<span style={{fontSize: '13px', color: '#FFF'}}>Help &amp; Contact</span>
						</a>
						<Link to="/" class="nav-link">
							<span class="fa fa-search dropbtner" style={{fontSize: '1rem', color: '#FFF'}} onClick={this.search}></span>
							<div class="dropdownr">
								<div id="myDropdownr" class="dropdown-contentr">
									<form action="#" method="post" class="d-flex searchhny-form" style={{border: '#999 1px solid'}}>
										<input type="search" placeholder="Start Your Search" style={{color: '#000'}} required="required" />
										<button class="search_btn" onClick={this.redirect}>Search</button>
									</form>
								</div>
							</div>
						</Link> 
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