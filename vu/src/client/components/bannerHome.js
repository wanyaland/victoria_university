import React, { Component } from 'react';

class BannerHome extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
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
				</div>
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
        )
    }
}

export default BannerHome;