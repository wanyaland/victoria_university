import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Events extends Component{
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
	 toEvents = () => {
		 window.location.href = "events-hub"
	 }
    render(){
        return(
            <React.Fragment>
                <section className="w3-gallery">
		<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			<div className="row title-content">
				<div className="col-lg-4 title-left">
					<h4 className="hny-title">Upcoming Events</h4>
				</div>
				<div className="col-lg-8 title-info">
				</div>
			</div>
			<br />

			<div className="row">
				<div className="col-md-4 filter webdesign graphic">
					<div className="each-item">
					<Link to="/events-hub"><img className="port-image img-fuild" src="assets/images/bg2.jpg" alt="" /></Link>

					</div>
					<div className="course-content">
						<div className="course-info">
							<Link to="/events-hub" className="course-title-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Guild elections</h3>
							</Link>
						</div>
						<div className="course-divider">
							<div className="course-meta grid"><span className="course-students" title=""><span
										className="fa fa-clock-o" aria-hidden="true"></span> June 3</span>
								<span className="course-reviews" title="Location"><span className="fa fa-map-marker"
										aria-hidden="true"></span> Main Campus</span>

							</div>
							<button className="price-course btn" onClick={this.toEvents}>More</button>


						</div>
					</div>
				</div>

				<div className="col-md-4 filter photo">
					<div className="each-item">
						<Link to="/events-hub"><img className="port-image img-fuild" src="assets/images/bg4.jpg" alt="" /></Link>
					</div>
					<div className="course-content">
						<div className="course-info">
							<Link to="/events-hub" className="course-title-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">End on semesters exams</h3>
							</Link>
						</div>
						<div className="course-divider">
							<div className="course-meta grid"><span className="course-students" title=""><span
										className="fa fa-clock-o" aria-hidden="true"></span> Jun 13</span>
								<span className="course-reviews" title=""><span className="fa fa-map-marker"
										aria-hidden="true"></span> Main Campus</span>

							</div>
							<button className="price-course btn" onClick={this.toEvents}> More </button>


						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item">
						<Link to="/events-hub"><img className="port-image img-fuild" src="assets/images/bg2.jpg" alt="" /></Link>
					</div>
					<div className="course-content">
						<div className="course-info">
							<Link to="/events-hub" className="course-title-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Festival of ideas</h3>
							</Link>
						</div>
						<div className="course-divider">
							<div className="course-meta grid"><span className="course-students" title=""><span
										className="fa fa-clock-o" aria-hidden="true"></span> Aug 3</span>
								<span className="course-reviews" title=""><span className="fa fa-map-marker"
										aria-hidden="true"></span> Main Campus</span>
							</div>
							<button className="price-course btn" onClick={this.toEvents}> More </button>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div className="text-right">
				<p>
					<Link className="logo-2" to="/events-hub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
						<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF',}}></span>&nbsp;</span><span className="underline">View all Events</span>
					</Link>
				</p>
			</div>
		</div>
	</div>
</section>
            </React.Fragment>
        )
    }
}

export default Events;