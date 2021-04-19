import React, { Component } from 'react';

class NewsHub extends Component{
    render(){
        return(
            <React.Fragment>
                <section class="w3-gallery">
	<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4">
			<div class="row title-content">
				<div class="col-lg-4 title-left">
					<h4 class="hny-title">News From The Hub</h4>
				</div>
			</div>
			<br />

			<div class="row">
				<div class="col-md-4 filter photo">
					<div class="each-item">
						<a href="home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>

					</div>
					<div class="course-content">
						<div class="course-info">
							<a href="home" class="course-titlegulp-wrapper">
								<h3 class="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</a>
							<h6><a class="course-instructor" href="home">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</a></h6>
						</div>
						<div class="course-divider">
							<div class="course-meta"><span class="course-students" title=""><span
										class="fa fa-clock-o" aria-hidden="true"></span> 46 Mins Ago</span>
							</div>
							<button class="price-course btn">More</button>
						</div>
					</div>
				</div>

				<div class="col-md-4 filter graphic photo">
					<div class="each-item">
						<a href="home"><img class="port-image img-fuild" src="assets/images/bg2.jpg" alt="" /></a>

					</div>
					<div class="course-content">
						<div class="course-info">
							<a href="home" class="course-title-wrapper">
								<h3 class="course-title" data-gal="prettyPhoto[gallery]">Best Performer 2021</h3>
							</a>
							<h6><a class="course-instructor" href="home">Victoria University 5th Graduation 2021 Best Performer</a></h6>
						</div>
						<div class="course-divider">
							<div class="course-meta"><span class="course-students" title=""><span
										class="fa fa-clock-o" aria-hidden="true"></span> 46 Mins Ago</span>
							</div>
							<button class="price-course btn">More</button>
						</div>
					</div>
				</div>

				<div class="col-md-4 filter webdesign">
					<div class="each-item">
						<a href="home"><img class="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
					</div>
					<div class="course-content">
						<div class="course-info">
							<a href="home" class="course-title-wrapper">
								<h3 class="course-title" data-gal="prettyPhoto[gallery]">Feb-Mar 2021 Intake</h3>
							</a>
							<h6><a class="course-instructor" href="home">Victoria University welcomes you all for our new semester that will start on 22nd March, 2021.</a></h6>
						</div>
						<div class="course-divider">
							<div class="course-meta"><span class="course-students" title=""><span
										class="fa fa-clock-o" aria-hidden="true"></span> 46 Mins Ago</span>
							</div>
							<button class="price-course btn">More</button>
						</div>
					</div>
				</div>
				</div>
		</div>
	</div>
</section>
<hr class="text-center" style={{color:'#000', width: '90%'}}></hr>
            </React.Fragment>
        )
    }
}

export default NewsHub;