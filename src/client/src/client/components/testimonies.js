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
	<div className="specification-content py-5"  style={{backgroundColor: '#FFF'}}>
	<p><h6 className="hny-title text-center" style={{color: '#555', fontSize: '40px'}}>What Our Students Say</h6></p>
		<div className="container" style={{maxWidth: '80%', display: 'flex',padding: '0', paddingBottom: '.0rem !important'}}>
			<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active testimonial_slides">
						<div className="mission-grids-info row" style={{marginLeft: '0', marginRight: '0', padding: '5px', display: 'flex', alignItems: 'center', alignContent: 'center'}}>
							<div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
								<span class="img-box"><img src="assets/images/test1.jpg" alt=""/></span>
							</div>
							<div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
								<p className="inside-text" style={{fontSize: '12px'}}>
									<span className="fa fa-quote-left quotes"></span>
									<br/><b>
									<span style={{color: '#FFF'}}>Name: NALUGYA VICTORIA</span>&#44;&nbsp;<br/>
									<span style={{color: '#FFF'}}>Course: </span><br/>
									<span style={{color: '#FFF'}}>Year of study: Year II (2021)</span></b>
									<br/>
									I have been a student at Victoria University for the last two years, and I can assure you that I have had a great experience. This is a great university. The lecturers are very reasonable and fair. The support staff is excellent. We also have a great regulatory system, which promotes creativity and acceptance in the divergence in views; for all of us to contribute to solutions daily. We have student-centered education in this university, and we just do not sit back to take notes from lectures. We also have practical or call it authentic learning; which allows us to practically try out what we study in class, daily. Why would this be impossible, when the founders of this university, as the leaders in business in this country, with a chain of companies and partnerships? Apart from academics, we are involved in sports and entertainment. We have vast access to entertainment, political, and media celebrities since some of them are our fellow students. Everyone at Victoria University is destined for a great future.
								</p>
							</div>
						</div>
					</div>{/*  */}
					<div class="carousel-item testimonial_slides">
						<div className="mission-grids-info row" style={{marginLeft: '0', marginRight: '0'}}>
							<div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
								<span class="img-box"><img src="assets/images/test2.jpg" alt=""/></span>
							</div>
							<div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
								<p className="inside-text">
									<span className="fa fa-quote-left quotes"></span>
									<br/><b>
									<span style={{color: '#FFF'}}>Name: ACHIENG SUZAN</span>&#44;&nbsp;<br/>
									<span className="overview" style={{color: '#FFF'}}>Course: Bachelor Of Business Administration</span><br/>
									<span className="overview" style={{color: '#FFF'}}>Year of study: Year II (2021)</span></b>
									<br/>
									Victoria university to me is a dream come through, I prayed for a miracle to study here n it came to pass! It has aided me in understanding most of the modules being taught in class and my GPA has improved with time. The lecturers are good to us; they give us ample time to do our work.
								</p>
							</div>
						</div>
					</div>{/*  */}
					<div class="carousel-item testimonial_slides">
						<div className="mission-grids-info row" style={{marginLeft: '0', marginRight: '0'}}>
							<div className="mission-gd-right col-lg-3 pl-lg-4 testimonial_title">
								<span class="img-box"><img src="assets/images/test3.jpg" alt=""/></span>	
							</div>
							<div className="mission-gd-right col-lg-9 pl-lg-4 testimonial_text">
								<p className="inside-text">
									<span className="fa fa-quote-left quotes"></span>
									<br/><b>
									<span style={{color: '#FFF'}}>Name: SANDRA ALAKA</span>&#44;&nbsp;
									<br/>
									<span className="overview" style={{color: '#FFF'}}>Course: Bachelor in science of Oil and Gas Accounting</span><br/>
									<span className="overview" style={{color: '#FFF'}}>Year of study: Year III (2021)</span></b>
									<br/>
									Am among the fortunate students to have benefited from Victoria University’s scholarship program and also got an opportunity to participate in the different University activities including exercising my potential in the leadership position at the University Electoral commission, Oil and Gas Course condinator among others.
								</p>
							</div>
						</div>
					</div>{/*  */}
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