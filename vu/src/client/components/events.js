import React, { Component } from 'react';

class Events extends Component{
    render(){
        return(
            <React.Fragment>
                <section class="w3-gallery">
		<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4">
			<div class="row title-content">
				<div class="col-lg-4 title-left">
					<h4 class="hny-title">Upcoming Events</h4>
				</div>
				<div class="col-lg-8 title-info">
				</div>
			</div>
			<br />

			<div class="row">
				<div class="col-md-4 filter webdesign graphic">
					<div class="each-item">
						<a href="home"><img class="port-image img-fuild" src="assets/images/bg2.jpg" alt="" /></a>

					</div>
					<div class="course-content">
						<div class="course-info">
							<a href="home" class="course-title-wrapper">
								<h3 class="course-title" data-gal="prettyPhoto[gallery]">ICT &amp; Transport Expo</h3>
							</a>
						</div>
						<div class="course-divider">
							<div class="course-meta grid"><span class="course-students" title=""><span
										class="fa fa-clock-o" aria-hidden="true"></span> June 3</span>
								<span class="course-reviews" title="Location"><span class="fa fa-map-marker"
										aria-hidden="true"></span> Main Campus</span>

							</div>
							<button class="price-course btn">More</button>


						</div>
					</div>
				</div>

				<div class="col-md-4 filter photo">
					<div class="each-item">
						<a href="home"><img class="port-image img-fuild" src="assets/images/bg4.jpg" alt="" /></a>

					</div>
					<div class="course-content">
						<div class="course-info">
							<a href="home" class="course-title-wrapper">
								<h3 class="course-title" data-gal="prettyPhoto[gallery]">ICT hackathon</h3>
							</a>
						</div>
						<div class="course-divider">
							<div class="course-meta grid"><span class="course-students" title=""><span
										class="fa fa-clock-o" aria-hidden="true"></span> Jun 13</span>
								<span class="course-reviews" title=""><span class="fa fa-map-marker"
										aria-hidden="true"></span> Main Campus</span>

							</div>
							<button class="price-course btn"> More </button>


						</div>
					</div>
				</div>
				<div class="col-md-4 filter photo">
					<div class="each-item">
						<a href="home"><img class="port-image img-fuild" src="assets/images/bg2.jpg" alt="" /></a>

					</div>
					<div class="course-content">
						<div class="course-info">
							<a href="home" class="course-title-wrapper">
								<h3 class="course-title" data-gal="prettyPhoto[gallery]">Freshers Ball (August Intake)</h3>
							</a>
						</div>
						<div class="course-divider">
							<div class="course-meta grid"><span class="course-students" title=""><span
										class="fa fa-clock-o" aria-hidden="true"></span> Aug 3</span>
								<span class="course-reviews" title=""><span class="fa fa-map-marker"
										aria-hidden="true"></span> Main Campus</span>
							</div>
							<button class="price-course btn"> More </button>


						</div>
					</div>
				</div>
			</div>
			<br/>
			<div class="text-right">
				<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
					<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;View all Events</h4>
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
            </React.Fragment>
        )
    }
}

export default Events;