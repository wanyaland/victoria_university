import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
	<React.Fragment>
    <section class="w3l-banner-slider-main w3l-inner-page-main" id="">
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
								<a class="nav-link" href="home.html">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="about.html">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="home">Programmes</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="home">Admissions</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="co-ops.html">Co-Ops</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="home">Research</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="home">Life At VU</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="contact.php"><span class="fa fa-comments"></span>&nbsp;&nbsp;Help &amp; Contact</a>
							</li>
							<li class="nav-item">
								<a href="home" class="nav-link"><span class="fa fa-search" style={{fontsize: '1rem'}}></span></a> 
							</li>
						</ul>

					</div>
				</div>
			</nav>
    </header>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="container">
					</div>
				</div>
				<div class="carousel-item item2">
					<div class="container">
					</div>
				</div>
				<div class="carousel-item item3">
					<div class="container">
					</div>
				</div>
				<div class="carousel-item item4">
					<div class="container">
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>

	</div>

</section>
</React.Fragment>
        )
    }
}

export default NavBar;