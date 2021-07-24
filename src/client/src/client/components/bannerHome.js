import React, { Component } from 'react';

class BannerHome extends Component{
	toVclass = () => {
		window.location.href = 'vclass'
	}
    render(){
        return(
<React.Fragment>
	<section className="w3l-banner-slider-main w3l-inner-page-main" id="">
		<div className="w3l-banner-slider-main breadcrumb-infhny" style={{zIndex: '0'}}>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					{/* <div className="carousel-item active">
						<div className="container">
						</div>
					</div>
					<div className="carousel-item item2">
						<div className="container">
						</div>
					</div>
					<div className="carousel-item item3">
						<div className="container">
						</div>
					</div>
					<div className="carousel-item item4">
						<div className="container">
						</div>
					</div> */}
					<video src="assets/media/home_wel2.mp4" className="img-fluid" alt="" autoPlay="true" muted="true" style={{width: '100%'}} loop="true"></video><p class="text-center" style={{position: 'absolute', zIndex: '1', top: '90%', left: '42.5%'}}><button class="btn_link" onClick={this.toVclass}>Take a Tour of Vclass</button></p>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	</section>
</React.Fragment>
        )
    }
}

export default BannerHome;