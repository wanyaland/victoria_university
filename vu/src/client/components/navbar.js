import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component{
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
									<Link to="/about" className="nav-link">About</Link>
								</li>
								<li class="nav-item">
									<Link to="/programs" className="nav-link">Programmes</Link>
								</li>
								<li class="nav-item">
									<Link to="/admissions" className="nav-link">Admissions</Link>
								</li>
								<li class="nav-item">
									{/* <Link to="/co-ops" className="nav-link">WIL</Link> */}
									<div class="dropdown" style={{float:'left'}}>
									<Link class="dropdown nav-link" to="/wil">WIL&nbsp;<span className="fa fa-angle-down" style={{color:'#FFF', fontSize: '14px'}}></span></Link>
									<div class="dropdown-content" style={{left:'0'}}>
										<Link to="/co-ops" class="nav-link text-left" style={{color: '#000'}}>Co-ops</Link>
										<Link to="home" class="nav-link text-left" style={{color: '#000'}}>Experiential Learning</Link>
										<Link to="/co-ops" class="nav-link text-left" style={{color: '#000'}}>Co-ops</Link>
										<Link to="home" class="nav-link text-left" style={{color: '#000'}}>Experiential Learning</Link>
									</div>
								</div>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="home">Research</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="home">Life At VU</a>
								</li>
								{/* <li class="nav-item">
									<Link to="/contact" class="nav-link"><span class="fa fa-comments" style={{fontSize: '.85rem'}}></span>&nbsp;&nbsp;Help &amp; Contact</Link>
								</li>
								<li class="nav-item">
									<a href="home" class="nav-link"><span class="fa fa-search" style={{fontsize: '1rem'}}></span></a> 
								</li> */}
							</ul>
					</div>
					<div class="d-flex searchhny-form" style={{display: 'flex', alignItems: 'center'}}>
						<a class="navbar-brand" href="home">
							<img src="assets/images/myvu.png" alt="Victoria University" title="Victoria University" style={{height: '55px'}} />
						</a> 
						<a href="contact" class="nav-link">
							<span class="fa fa-comments" style={{fontSize: '.85rem', color: '#FFF'}}></span>&nbsp;&nbsp;<span style={{fontSize: '13px', color: '#FFF'}}>Help &amp; Contact</span>
						</a>
						<a href="home" class="nav-link">
							<span class="fa fa-search" style={{fontSize: '1rem', color: '#FFF'}}></span>
						</a> 
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