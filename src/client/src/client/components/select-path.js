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
					<Link className="imghr" href="home"><img src="assets/images/path1.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
					<div className="details text-center hover-team" style={{height: '100%'}}>
							<div className="text-center path_stick"></div>
							<div className="img_pos">
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" className="path_img"/>
							</div>
							<br/>
							<div className="title_path">Undergraduate Programme</div><br/>
							<div className="extra-dets">
								<div className="text"><div className="text-center dets-text"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div className="fa fa-angle-right path_pointer orange_d" style={{fontSize: '40px'}}></div>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-2-5 imghrs">
					<div className="justify-content-center pathdots brown">&nbsp;</div>
					<div className="justify-content-center pathdots_round">&nbsp;</div>
					<Link className="imghr" href="home"><img src="assets/images/path3.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
					<div className="details text-center hover-team2" style={{height: '100%'}}>
							<div className="text-center path_stick"></div>
							<div className="img_pos">
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" className="path_img"/>
							</div>
							<br/>
							<div className="title_path">Postgraduate Programme</div><br/>
							<div className="extra-dets">
								<div className="text"><div className="text-center dets-text"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div className="fa fa-angle-right path_pointer brown_d" style={{fontSize: '40px'}}></div>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-2-5 imghrs">
					<div className="justify-content-center pathdots blue">&nbsp;</div>
					<div className="justify-content-center pathdots_round">&nbsp;</div>
					<Link className="imghr" href="home"><img src="assets/images/path2.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
					<div className="details text-center hover-team3" style={{height: '100%'}}>
							<div className="text-center path_stick"></div>
							<div className="img_pos">
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" className="path_img"/>
							</div>
							<br/>
							<div className="title_path">Diploma Programme</div><br/>
							<div className="extra-dets">
								<div className="text"><div className="text-center dets-text"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div className="fa fa-angle-right path_pointer blue_d" style={{fontSize: '40px'}}></div>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-2-5 imghrs">
					<div className="justify-content-center pathdots purple">&nbsp;</div>
					<div className="justify-content-center pathdots_round">&nbsp;</div>
					<Link className="imghr" href="home"><img src="assets/images/path4.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div className="details text-center hover-team4" style={{height: '100%'}}>
							<div className="text-center path_stick"></div>
							<div className="img_pos">
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" className="path_img"/>
							</div>
							<br/>
							<div className="title_path">Foundations</div><br/>
							<div className="extra-dets">
								<div className="text"><div className="text-center dets-text"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div className="fa fa-angle-right path_pointer purple_d" style={{fontSize: '40px'}}></div>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-md-2-5 imghrs">
					<div className="justify-content-center pathdots red">&nbsp;</div>
					<div className="justify-content-center pathdots_round">&nbsp;</div>
					<Link className="imghr" href="home"><img src="assets/images/path4.jpg" className="img-fluid" alt="" style={{filter: 'brightness(70%)'}}/>
						<div className="details text-center hover-team5" style={{height: '100%'}}>
							<div className="text-center path_stick"></div>
							<div className="img_pos">
								<img src="assets/images/fav.png" alt="Your logo" title="Your logo" className="path_img"/>
							</div>
							<br/>
							<div className="title_path">Professional Developments</div><br/>
							<div className="extra-dets">
								<div className="text"><div className="text-center dets-text"></div><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima accusantium reiciendis	
								</div>
								<div className="fa fa-angle-right path_pointer red_d" style={{fontSize: '40px'}}></div>
							</div>
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