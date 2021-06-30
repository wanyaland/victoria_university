import React, { Component } from 'react';

class Testimonies extends Component{
	componentDidMount(){
		var myIndex = 0;
		carousel();

		function carousel() {
		var i;
		var x = document.getElementsByClassName("testimonial_slides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].style.display = "block";  
		setTimeout(carousel, 9000);    
		}
	}
    render(){
        return(
            <React.Fragment>
<section class="w3l-specification-6">
	<div class="specification-content py-5">
		<div class="container py-lg-5" style={{maxWidth: '100%', display: 'flex'}}>
			<div class="mission-grids-info row">
				<div class="mission-gd-right col-lg-6 pl-lg-4 testimonial_title">
					<p><h5 class="hny-title" style={{color: '#FFF', fontSize: '40px'}}>What Our Students Say</h5></p>
				</div>
				<div class="mission-gd-right col-lg-6 pl-lg-4 testimonial_text">
					<div class="w3-content w3-section">
						<div class="testimonial_slides w3-animate-top">
							<p style={{color: '#FFF'}}>
								<span class="fa fa-quote-left" style={{fontSize: '40px'}}></span>
								<br/>
								I have been a student at Victoria University for 2years and from what I have experienced. I can tell you it is a great institution. The lecturers are very reasonable and fair. The staff is excellent and the rules help to keep the institution in order. There is an equal balance of learning and reviewing information so that everyone gets what is to be done and there’s tutoring if we need it. 
								I like the fact that Victoria University has many activities for students for example sports, talk shows, faculty seminars, one on ones with artists in the entertainment industry and students are able to show case talents. Everyone at Victoria University is destined for a great future. 
								<br/>
								<br/>
								<div class="course-content">
									<div class="course-divider">
										<div class="course-meta" style={{color: '#FFF'}}>
											&#126;&nbsp;<span style={{color: '#FFF'}}>NALUGYA VICTORIA</span>&#44;&nbsp;
											{/* <span class="overview" style={{color: '#FFF'}}>Bachelor Of Banking And Finance</span> */}
										</div>
									</div>
								</div>
							</p>
						</div>
						<div class="testimonial_slides w3-animate-top">
							<p style={{color: '#FFF'}}>
								<span class="fa fa-quote-left" style={{fontSize: '40px'}}></span>
								<br/>
								Victoria university to me is a dream come through, I prayed for a miracle to study here n it came to pass! It has aided me in understanding most of the modules being taught in class and my GPA has improved with time. The lecturers are good to us; they give us ample time to do our work.
								<br/>
								<br/>
								<div class="course-content">
									<div class="course-divider">
										<div class="course-meta" style={{color: '#FFF'}}>
											&#126;&nbsp;<span style={{color: '#FFF'}}>ACHIENG SUZAN</span>&#44;&nbsp;
											{/* <span class="overview" style={{color: '#FFF'}}>Bachelor Of Banking And Finance</span> */}
										</div>
									</div>
								</div>
							</p>
						</div>
						<div class="testimonial_slides w3-animate-top">
							<p style={{color: '#FFF'}}>
								<span class="fa fa-quote-left" style={{fontSize: '40px'}}></span>
								<br/>
								Am among the fortunate students to have benefited from Victoria University’s scholarship program and also got an opportunity to participate in the different University activities including exercising my potential in the leadership position at the University Electoral commission, Oil and Gas Course condinator among others. These skills have already impacted on my general leadership ability and expressions towards my peers.
								<br/>
								<br/>
								<div class="course-content">
									<div class="course-divider">
										<div class="course-meta" style={{color: '#FFF'}}>
											&#126;&nbsp;<span style={{color: '#FFF'}}>SANDRA ALAKA</span>&#44;&nbsp;
											<span class="overview" style={{color: '#FFF'}}>Bachelor in science of Oil and Gas Accounting</span>
										</div>
									</div>
								</div>
							</p>
						</div>
					</div>		
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
            </React.Fragment>
        )
    }
}

export default Testimonies;