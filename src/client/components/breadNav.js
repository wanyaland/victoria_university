import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BreadNavBar extends Component {
    render(){
        return(
<React.Fragment>
    <section className="w3l-top-header-content">
				<div className="hny-top-menu">
					<div className="top-hd back" style={{background:'#d63a3a'}}>
						<div className="container-fluid">
					<div className="row">
						<ul className="social-top col-md-7 padded">
							<li className="fonted"><span className="fa fa-exclamation-circle" style={{color: '#FFF'}}></span>&nbsp;&nbsp;<Link to="/covid-notice"><span className="underline underlined">COVID-19: Important information for VU Learners and Team Members.</span></Link></li>
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
							<li className="fonted">Join us Now for February - March 2022 intake <a href="https://eadmissions.vu.ac.ug/" target="_blank" rel="noreferrer" className="fonted underline" style={{color: '#000'}}><b>Apply Now</b></a></li>
						</ul>
						<ul className="accounts col-md-5">
							{/* <li className="top_li underline"><Link to="/staff">Staff</Link></li> */}
							<li className="top_li underline"><Link to="/library">Library</Link></li>
							<li className="top_li underline"><Link to="/alumni">Alumni</Link></li>
							<li className="top_li underline"><Link to="/downloads">Downloads</Link></li>
							{/* <li className="top_li underline"><Link to="/news">News</Link></li>
							<li className="top_li underline"><Link to="/events-hub">Events</Link></li> */}
							<li className="top_li underline"><Link to="/careers">Careers</Link></li>
							<li className="top_li underline"><Link to="/gallery">Gallery</Link></li>
							{/* <li className="top_li underline"><Link to="/life-at-vu">Life At VU</Link></li> */}
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