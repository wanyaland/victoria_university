import React, { Component } from 'react';

class WilBanner extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="w3l-apply-6">
					<div className=""  style={{}}>
						<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
							<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src="assets/images/wil.JPG" alt="First slide" style={{filter: 'brightness(55%)'}}/>
									</div>
									<div className='banner-caption'>&nbsp;Get To Work</div>
								</div>
							</div>
						</div>
					</div>
				</section>
            </React.Fragment>
        )
    }
}

export default WilBanner;