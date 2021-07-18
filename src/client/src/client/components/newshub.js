import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsHub extends Component{
		change_icon(id, id2) {
		var element = document.getElementById(id);
		element.classList.add("hider");
		var element2 = document.getElementById(id2);
		element2.classList.add("block");
	 }
	 change_icon2(id, id2){
		var element = document.getElementById(id);
		element.classList.remove("hider");
		var element2 = document.getElementById(id2);
		element2.classList.remove("block");
		console.log('HI4')
	 }
	 toNewshub = () => {
		 window.location.href = "news"
	 }
    render(){
        return(
            <React.Fragment>
                <section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			<div className="row title-content">
				<div className="col-lg-4 title-left">
					<h4 className="hny-title">News From The Hub</h4>
				</div>
			</div>
			<br />

			<div className="row">
				<div className="col-md-4 filter photo">
					<div className="each-item">
						<Link to="/news"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></Link>

					</div>
					<div className="course-content">
						<div className="course-info">
							<Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link>
							<h6><a className="course-instructor" href="home">Victoria University is to hold it's 5th Graduation Ceremony on the 19th February 2021.</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span
										className="fa fa-clock-o" aria-hidden="true"></span> 46 Mins Ago</span>
							</div>
							<button className="price-course btn" onClick={this.toNewshub}>More</button>
						</div>
					</div>
				</div>

				<div className="col-md-4 filter graphic photo">
					<div className="each-item">
						<Link to="/news"><img className="port-image img-fuild" src="assets/images/bg2.jpg" alt="" /></Link>
					</div>
					<div className="course-content">
						<div className="course-info">
							<Link to="/news" className="course-title-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Best Performer 2021</h3>
							</Link>
							<h6><a className="course-instructor" href="home">Victoria University 5th Graduation 2021 Best Performer</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span
										className="fa fa-clock-o" aria-hidden="true"></span> 46 Mins Ago</span>
							</div>
							<button className="price-course btn" onClick={this.toNewshub}>More</button>
						</div>
					</div>
				</div>

				<div className="col-md-4 filter webdesign">
					<div className="each-item">
						<Link to="/news"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></Link>
					</div>
					<div className="course-content">
						<div className="course-info">
							<Link to="/news" className="course-title-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Feb-Mar 2021 Intake</h3>
							</Link>
							<h6><a className="course-instructor" href="home">Victoria University welcomes you all for our new semester that will start on 22nd March, 2021.</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span
										className="fa fa-clock-o" aria-hidden="true"></span> 46 Mins Ago</span>
							</div>
							<button className="price-course btn" onClick={this.toNewshub}>More</button>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div className="text-right">
				<p><Link className="logo-2" to="/news" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
					<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">View all VU News</span>
					</Link>
				</p>
			</div>
		</div>
	</div>
</section>
<hr className="text-center" style={{color:'#000', width: '90%'}}></hr>
            </React.Fragment>
        )
    }
}

export default NewsHub;