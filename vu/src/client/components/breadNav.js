import React, { Component } from 'react';

class BreadNavBar extends Component {
    render(){
        return(
		<React.Fragment>
            <section class="w3l-top-header-content">
				<div class="hny-top-menu">
					<div class="top-hd" style="background-color:#E35A25;">
						<div class="container-fluid">
					<div class="row">
						<ul class="social-top col-md-7" style="padding: 4px 8px 4px 8px;">
							<li class="" style="font-size: .8rem"><a href="#">COVID-19: Important information for VU Learners and Team Members.</a></li>
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
						<ul class="social-top col-md-7" style="padding: 4px 8px 4px 8px;">
							<li style="color: #fff; font-size: .8rem"><b>Next Undergrad Deadline:</b> Register by April 10th to start on May 1st <a href="contact.php" class="" style="color: #fff; text-decoration: underline;"><b>Apply Now</b></a></li>
						</ul>
						<ul class="accounts col-md-5">
							<li class="top_li"><a href="#"></a>Staff</li>
							<li class="top_li"><a href="#"></a>ALumni</li>
							<li class="top_li"><a href="#"></a>News</li>
							<li class="top_li"><a href="#"></a>Events</li>
							<li class="top_li"><a href="#"></a>Career</li>
							<li class="top_li"><a href="#"></a>Gallery</li>
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