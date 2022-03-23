import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'

class OurTeam extends Component {
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-apply-6">
				<div className=""  style={{}}>
					<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
						<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="d-block w-100" src="assets/images/glance.jpg" alt="First slide" style={{filter: 'brightness(60%)'}}/>
								</div>
								<div className='banner-caption'>&nbsp;Victoria University<br/>&nbsp;Our Teams</div>
							</div>
						</div>
					</div>
				</div>
			</section>
                <section className="w3l-top-header-content">
    <div className="hny-top-menu">
        <div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
            <div className="container-fluid">
                <div className="" style={{color: '#EEE'}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Our Team</span>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<section className="w3-gallery">
		<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			<div className="row title-content">
				<div className="col-lg-4 title-left">
					<h4 className="hny-title" style={{fontSize: '44px', color: '#0077b5'}}>Our Team</h4>
				</div>
				<div className="col-lg-8 title-info">
				</div>
			</div>
			<br />
			<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div className="row">
							<div className="col-md-3 filter webdesign graphic">
								<div className="each-item">
                                <Link to="/directors"><img className="port-image img-fuild" src="assets/images/trustees/aliker.jpg" alt="" style={{border: '#CCC 1px solid'}}/></Link>
								</div>
								<div className="course-content">
									<div className="course-info">
										<Link to="/directors">
											<h3 className="course-title" data-gal="prettyPhoto[gallery]">Directors</h3>
										</Link>
									</div>
									<div className="course-divider">
										<div className="course-meta">{/* <span className="course-students" title="">
											<span className="fa fa-clock-o" aria-hidden="true"></span> October 30, 2021</span> */}
											{/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
										</div>
										<Link  to="/directors" className="price-course btn">View</Link>
									</div>
								</div>
							</div>
							<div className="col-md-3 filter webdesign graphic">
								<div className="each-item">
                                <Link to="/council"><img className="port-image img-fuild" src="assets/images/img/joram-francis-kahenano.jpg" alt="" style={{border: '#CCC 1px solid'}}/></Link>
								</div>
								<div className="course-content">
									<div className="course-info">
										<Link to="/council">
											<h3 className="course-title" data-gal="prettyPhoto[gallery]">University Council</h3>
										</Link>
									</div>
									<div className="course-divider">
										<div className="course-meta">{/* <span className="course-students" title="">
											<span className="fa fa-clock-o" aria-hidden="true"></span> September 17, 2021</span> */}
											{/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
										</div>
										<Link to="/council" className="price-course btn">View</Link>
									</div>
								</div>
							</div>
							<div className="col-md-3 filter webdesign graphic">
								<div className="each-item">
                                <Link to="/senate"><img className="port-image img-fuild" src="assets/images/img/vc.JPG" alt="" style={{border: '#CCC 1px solid'}}/></Link>
								</div>
								<div className="course-content">
									<div className="course-info">
										<Link to="/senate">
											<h3 className="course-title" data-gal="prettyPhoto[gallery]">University Senate</h3>
										</Link>
									</div>
									<div className="course-divider">
										<div className="course-meta">{/* <span className="course-students" title="">
											<span className="fa fa-clock-o" aria-hidden="true"></span> October 8, 2021</span> */}
											{/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
										</div>
										<Link to="/senate" className="price-course btn">View</Link>
									</div>
								</div>
							</div>
                            <div className="col-md-3 filter webdesign graphic">
								<div className="each-item">
                                <Link to="/staff"><img className="port-image img-fuild" src="assets/images/img/irene.jpg" alt="" style={{border: '#CCC 1px solid'}}/></Link>
								</div>
								<div className="course-content">
									<div className="course-info">
										<Link to="/staff">
											<h3 className="course-title" data-gal="prettyPhoto[gallery]">Management Team</h3>
										</Link>
									</div>
									<div className="course-divider">
										<div className="course-meta">{/* <span className="course-students" title="">
											<span className="fa fa-clock-o" aria-hidden="true"></span> October 8, 2021</span> */}
											{/* <span className="course-reviews" title="Location">
												<span className="fa fa-map-marker" aria-hidden="true"></span> Main Campus
											</span> */}
										</div>
										<Link to="/staff" className="price-course btn">View</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br/>
			{/* <div className="text-right">
				<p>
					<Link className="logo-2" to="/events-hub" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
						<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF',}}></span>&nbsp;</span><span className="underline">View all News</span>
					</Link>
				</p>
			</div> */}
		</div>
	</div>
</section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default OurTeam;