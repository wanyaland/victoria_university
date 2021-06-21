import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
							<li className="fonted"><b>Next Undergrad Deadline:</b> Register by April 10th to start on May 1st <Link to="/apply" class="fonted underline" style={{color: '#000'}}><b>Apply Now</b></Link></li>
						</ul>
						<ul class="accounts col-md-5">
							<li class="top_li"><a href="home">Staff</a></li>
							<li class="top_li"><Link to="/alumni">Alumni</Link></li>
							<li class="top_li"><Link to="/news">News</Link></li>
							<li class="top_li"><Link to="/events-hub">Events</Link></li>
							<li class="top_li"><Link to="/careers">Career</Link></li>
							<li class="top_li"><a href="home">Gallery</a></li>
							<li class="top_li"><a href="home">Life At VU</a></li>
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