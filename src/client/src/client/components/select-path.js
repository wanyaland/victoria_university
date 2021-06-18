import React, { Component } from 'react';

class SelectPath extends Component {
    render(){
        return(
            <React.Fragment>
            <br/>
            <section class="w3l-footer-16 text-center">
				<div class="">
					<img src="assets/images/fav.png" class="text-center bordered" title="Victoria University" width="120" height="120" alt="img"/>
					<h3 class="hny-title text-center" style={{color:'#0077b5'}}>Select Your Path</h3>
					<h6 class="hny-title text-center">Choose your path and jump right in</h6>
				</div>
			</section>
                <section class="w3l-content-6">
	<div class="content-6-mian py-5">
		<div class="container py-lg-5" style={{maxWidth: '100%'}}>
			<div class="content-info-in row mt-md-5 mt-4">
				<div class="col-lg-3 col-md-6 imghrs">
					<a class="imghr" href="home"><img src="assets/images/path1.jpg" class="img-fluid" alt=""/>
						<div class="details"><span class="title">Development</span><span class="info">Add Description</span></div>
					</a>
				</div>
				<div class="col-lg-3 col-md-6 imghrs">
					<a class="imghr" href="home"><img src="assets/images/path2.jpg" class="img-fluid" alt=""/>
						<div class="details"><span class="title">Graphic Design</span><span class="info">Add Description</span></div>
					</a>
				</div>
				<div class="col-lg-3 col-md-6 imghrs">
					<a class="imghr" href="home"><img src="assets/images/path3.jpg" class="img-fluid" alt=""/>
						<div class="details"><span class="title">Languages</span><span class="info">Add Description</span></div>
					</a>
				</div>
				<div class="col-lg-3 col-md-6 imghrs">
					<a class="imghr" href="home"><img src="assets/images/path4.jpg" class="img-fluid" alt=""/>
						<div class="details"><span class="title">Photography</span><span class="info">Add Description</span></div>
					</a>
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