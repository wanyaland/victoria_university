import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SelectPath extends Component {
    render(){
        return(
<React.Fragment>
	<br/>
	<section className="w3l-footer-16 text-center">
	<div className="">
		<img src="assets/images/fav.png" className="text-center bordered" title="Victoria University" width="120" height="120" alt="img"/>
		<h3 className="hny-title text-center" style={{color:'#0077b5'}}>Select Your Path</h3>
		<h6 className="hny-title text-center">Choose your path and jump right in</h6>
	</div>
	</section>
	<section className="w3l-content-6">
		<div className="content-6-mian py-5">
			<div className="container py-lg-5" style={{maxWidth: '100%'}}>
				<div className="content-info-in row mt-md-5 mt-4">
					<div className="col-md-2-5 imghrs">
						<div className="justify-content-center pathdots orange">&nbsp;</div>
						<div className="justify-content-center pathdots_round">&nbsp;</div>
						<Link className="imghr" to="/prog-index"><img src="assets/images/path1.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div className="details text-center hover-team" style={{height: '100%'}}>
								{/* <div className="text-center path_stick"></div> */}
								<div className="title_path">Undergraduate Programme</div><br/>
								<div className="extra-dets ext-1">
									<div className="text"><div className="text-center dets-text"></div>Victoria  University offers a number of Bachelors Degree Programmes. They are listed below under their respective faculties.</div>
								</div>
								<div className="fa fa-angle-right path_pointer path_point1 orange_d" style={{fontSize: '40px'}}></div>
							</div>
						</Link>
					</div>
					<div className="col-md-2-5 imghrs">
						<div className="justify-content-center pathdots brown">&nbsp;</div>
						<div className="justify-content-center pathdots_round">&nbsp;</div>
						<Link className="imghr" to="/prog-index"><img src="assets/images/path3.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div className="details text-center hover-team2" style={{height: '100%'}}>
								{/* <div className="text-center path_stick"></div> */}
								
								<div className="title_path">Postgraduate Programme</div><br/>
								<div className="extra-dets ext-2">
									<div className="text"><div className="text-center dets-text"></div>Victoria University offers post  graduate programmes, listed below under their respective faculties</div>
								</div>
								<div className="fa fa-angle-right path_pointer path_point2 brown_d" style={{fontSize: '40px'}}></div>
							</div>
						</Link>
					</div>
					<div className="col-md-2-5 imghrs">
						<div className="justify-content-center pathdots blue">&nbsp;</div>
						<div className="justify-content-center pathdots_round">&nbsp;</div>
						<Link className="imghr" to="/prog-index"><img src="assets/images/path2.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div className="details text-center hover-team3" style={{height: '100%'}}>
								{/* <div className="text-center path_stick"></div> */}
								
								<div className="title_path">Diploma Programme</div><br/>
								<div className="extra-dets ext-3">
									<div className="text"><div className="text-center dets-text"></div>Victoria University offers Diploma  programs  They are listed below under their respective faculties</div>
								</div>
								<div className="fa fa-angle-right path_pointer path_point3 blue_d" style={{fontSize: '40px'}}></div>
							</div>
						</Link>
					</div>
					<div className="col-md-2-5 imghrs">
						<div className="justify-content-center pathdots purple">&nbsp;</div>
						<div className="justify-content-center pathdots_round">&nbsp;</div>
						<Link className="imghr" to="/prog-index"><img src="assets/images/path4.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
							<div className="details text-center hover-team4" style={{height: '100%'}}>
								{/* <div className="text-center path_stick"></div> */}
								
								<div className="title_path">Foundations</div><br/>
								<div className="extra-dets ext-4">
									<div className="text"><div className="text-center dets-text"></div>Victoria University offers foundation programs that help prepare students for higher education and also advance their careers.  Foundations help students who didnot perform well to attain a course of thier interest</div>
								</div>
								<div className="fa fa-angle-right path_pointer path_point4 purple_d" style={{fontSize: '40px'}}></div>
							</div>
						</Link>
					</div>
					<div className="col-md-2-5 imghrs">
						<div className="justify-content-center pathdots red">&nbsp;</div>
						<div className="justify-content-center pathdots_round">&nbsp;</div>
						<Link className="imghr" to="/prog-index"><img src="assets/images/path5.jpg" className="img-fluid" alt="" style={{filter: 'brightness(90%)'}}/>
							<div className="details text-center hover-team5" style={{height: '100%'}}>
								{/* <div className="text-center path_stick"></div> */}
								
								<div className="title_path">Professional Developments</div><br/>
								<div className="extra-dets ext-5">
									<div className="text"><div className="text-center dets-text"></div> Join one of our professional development courses and learn new and verifiable skills for your career.</div>
								</div>
								<div className="fa fa-angle-right path_pointer path_point5 red_d" style={{fontSize: '40px'}}></div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
 </React.Fragment>
        )
    }
}

export default SelectPath;