import React, { Component } from 'react';

class Testimonies extends Component{
	componentDidMount(){
		/* var myIndex = 0;
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
		setTimeout(carousel, 2000);    
		} */
	}
    render(){
        return(
            <React.Fragment>
<section className="w3l-specification-6">
	<div className="specification-content py-5">
		<div className="container py-lg-5" style={{maxWidth: '100%', display: 'flex'}}>
			<div className="mission-grids-info row">
				<div className="mission-gd-right col-lg-6 pl-lg-4 testimonial_title">
					<p><h5 className="hny-title" style={{color: '#FFF', fontSize: '40px'}}>What Our Students Say</h5></p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-4 testimonial_text">
					{/* <div className="w3-content w3-section"> */}
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active testimonial_slides w3-animate-top">
								<p style={{color: '#FFF'}}>
									<span className="fa fa-quote-left" style={{fontSize: '40px'}}></span>
									<br/>I have been a student at Victoria University for the last two years, and I can assure you that I have had a great experience.<br/>
										This is a great university. The lecturers are very reasonable and fair. The support staff is excellent. We also have a great regulatory system, which promotes creativity and acceptance in the divergence in views; for all of us to contribute to solutions daily.<br/>
										We have student-centered education in this university, and we just do not sit back to take notes from lectures. We also have practical or call it authentic learning; which allows us to practically try out what we study in class, daily. Why would this be impossible, when the founders of this university, as the leaders in business in this country, with a chain of companies and partnerships?<br/>
										Apart from academics, we are involved in sports and entertainment. We have vast access to entertainment, political, and media celebrities since some of them are our fellow students.<br/>
										Everyone at Victoria University is destined for a great future.
									<br/>
									<br/>
									<div className="course-content">
										<div className="course-divider">
											<div class="img-box"><img src="assets/images/test1.jpg" alt=""/></div>
											<div className="course-meta" style={{color: '#FFF'}}>
												&#126;&nbsp;<span style={{color: '#FFF'}}>NALUGYA VICTORIA</span>&#44;&nbsp;
												{/* <span className="overview" style={{color: '#FFF'}}>Bachelor Of Banking And Finance</span> */}
											</div>
										</div>
									</div>
								</p>
							</div>
							<div className="carousel-item testimonial_slides w3-animate-top">
								<p style={{color: '#FFF'}}>
									<span className="fa fa-quote-left" style={{fontSize: '40px'}}></span>
									<br/>
									Victoria university to me is a dream come through, I prayed for a miracle to study here n it came to pass! It has aided me in understanding most of the modules being taught in class and my GPA has improved with time. The lecturers are good to us; they give us ample time to do our work.
									<br/>
									<br/>
									<div className="course-content">
										<div className="course-divider">
											<div class="img-box"><img src="assets/images/test2.jpg" alt=""/></div>
											<div className="course-meta" style={{color: '#FFF'}}>
												&#126;&nbsp;<span style={{color: '#FFF'}}>ACHIENG SUZAN</span>&#44;&nbsp;
												<span className="overview" style={{color: '#FFF'}}>Bachelor Of Business</span>
											</div>
										</div>
									</div>
								</p>
							</div>
							<div className="carousel-item testimonial_slides w3-animate-top">
								<p style={{color: '#FFF'}}>
									<span className="fa fa-quote-left" style={{fontSize: '40px'}}></span>
									<br/>
									Am among the fortunate students to have benefited from Victoria University’s scholarship program and also got an opportunity to participate in the different University activities including exercising my potential in the leadership position at the University Electoral commission, Oil and Gas Course condinator among others. These skills have already impacted on my general leadership ability and expressions towards my peers.
									<br/>
									<br/>
									<div className="course-content">
										<div className="course-divider">
											<div class="img-box"><img src="assets/images/test3.jpg" alt=""/></div>
											<div className="course-meta" style={{color: '#FFF'}}>
												&#126;&nbsp;<span style={{color: '#FFF'}}>SANDRA ALAKA</span>&#44;&nbsp;
												<span className="overview" style={{color: '#FFF'}}>Bachelor in science of Oil and Gas Accounting</span>
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
	</div>
</section>
<br/>
            </React.Fragment>
        )
    }
}

export default Testimonies;