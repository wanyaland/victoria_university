import React, { Component } from 'react';

class Testimonies extends Component{
    render(){
        return(
            <React.Fragment>
<section class="w3l-team-main">
	<div class="team py-5">
		<div class="py-lg-5" >
			<div class="justify-content-center"  style={{display: 'flex'}}>
				<div class="col-lg-6 testimonial_title">
					<h5 class="hny-title" style={{color: '#FFF', fontSize: '40px'}}>What Our Students Say</h5>
					<div class="triangle-topright"></div>
				</div>
				
				<div class="col-lg-6 testimonial_text">
					<p style={{color: '#FFF', fontSize: '17px', padding: '12px'}}>
						<span class="fa fa-quote-left" style={{fontSize: '40px'}}></span>
						<br/>
						<p style={{padding: '20px', color: '#FFF'}}>
							My Appreciation to Victoria University. Greetings to you all, I would like to take this opportunity to thank the whole organized VU team for making my three years stay at Victoria University a time of learning, developing making friends and an enjoyable one. Am also grateful of the epic Graduation ceremony you organized for us, am really humbled.
							<br/>
							<br/>
							<div class="course-content">
								<div class="course-divider">
									<div class="course-meta" style={{color: '#FFF'}}>
										&#126;&nbsp;<span style={{color: '#FFF'}}>JOSHUA MUTEGHEKI</span>&#44;&nbsp;
										<span class="overview" style={{color: '#FFF'}}>Bachelor Of Banking And Finance</span>
									</div>
								</div>
							</div>
						</p>
					</p>
					<div class="triangle-topleft"></div>
				</div>
			</div>
		</div>
	</div>
</section>
            </React.Fragment>
        )
    }
}

export default Testimonies;