import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BreadNavBar extends Component {
    render(){
        return(
<React.Fragment>
    <section className="w3l-top-header-content">
				<div className="hny-top-menu">
					<div className="top-hd back" style={{background:'#E35A25'}}>
						<div className="container-fluid">
					<div className="row">
						<ul className="social-top col-md-7 padded">
							<li className="fonted"><a href="home">COVID-19: Important information for VU Learners and Team Members.</a></li>
						</ul>
						<ul className="accounts col-md-5">
						</ul>
					</div>
				</div>
			</div>
			</div>
			<div className="hny-top-menu">
			<div className="top-hd">
				<div className="container-fluid">
					<div className="row">
						<ul className="social-top col-md-7 padded">
							<li className="fonted"><b>Next Undergrad Deadline:</b> Register by April 10th to start on May 1st <Link to="/apply" className="fonted underline" style={{color: '#000'}}><b>Apply Now</b></Link></li>
						</ul>
						<ul className="accounts col-md-5">
							<li className="top_li"><a href="home">Staff</a></li>
							<li className="top_li"><Link to="/alumni">Alumni</Link></li>
							<li className="top_li"><Link to="/news">News</Link></li>
							<li className="top_li"><Link to="/events-hub">Events</Link></li>
							<li className="top_li"><Link to="/careers">Career</Link></li>
							<li className="top_li"><a href="home">Gallery</a></li>
							<li className="top_li"><a href="home">Life At VU</a></li>
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