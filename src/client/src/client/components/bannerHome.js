import React, { Component } from 'react';

class BannerHome extends Component{
    render(){
        return(
<React.Fragment>
	<section class="w3l-banner-slider-main w3l-inner-page-main" id="" style={{marginTop: '-26px'}}>
		<div class="w3l-banner-slider-main breadcrumb-infhny" style={{zIndex: '0'}}>
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					{/* <div class="carousel-item active">
						<div class="container">
						</div>
					</div>
					<div class="carousel-item item2">
						<div class="container">
						</div>
					</div>
					<div class="carousel-item item3">
						<div class="container">
						</div>
					</div>
					<div class="carousel-item item4">
						<div class="container">
						</div>
					</div> */}
					<video src="assets/media/speech.mp4" class="img-fluid" alt="" autoPlay="true" muted="true" style={{width: '100%'}}/>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
	</section>
</React.Fragment>
        )
    }
}

export default BannerHome;