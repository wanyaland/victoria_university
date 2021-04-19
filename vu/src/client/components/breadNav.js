import React, { Component } from 'react';

class BreadNavBar extends Component {
    render(){
        return(
		<React.Fragment>
            <section class="w3l-top-header-content">
				<div class="hny-top-menu">
					<div class="top-hd back" style={{background:'#E35A25'}}>
						<div class="container-fluid">
					<div class="row">
						<ul class="social-top col-md-7 padded">
							<li class="fonted"><a href="home">COVID-19: Important information for VU Learners and Team Members.</a></li>
						</ul>
						<ul class="accounts col-md-5">
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="hny-top-menu">
			<div class="top-hd">
				<div class="container-fluid">
					<div class="row">
						<ul class="social-top col-md-7 padded">
							<li className="fonted white"><b>Next Undergrad Deadline:</b> Register by April 10th to start on May 1st <a href="contact.php" class="white underline"><b>Apply Now</b></a></li>
						</ul>
						<ul class="accounts col-md-5">
							<li class="top_li"><a href="home">Staff</a></li>
							<li class="top_li"><a href="home">ALumni</a></li>
							<li class="top_li"><a href="home">News</a></li>
							<li class="top_li"><a href="home">Events</a></li>
							<li class="top_li"><a href="home">Career</a></li>
							<li class="top_li"><a href="home">Gallery</a></li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	</section>
</React.Fragment>
        )
    }
}

export default BreadNavBar;