import React, { Component } from 'react';

class Footer extends Component{
	topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
    openForm(){
        document.getElementById("myForm").style.display = "block";
    }
    render(){
        return(
            <React.Fragment>
        <section class="w3l-footer-16">
    <div class="w3l-footer-16-main py-5">
        <div class="container">
			<br/>
            <div class="row">
                <div class="col-lg-4 column">
                    <div class="row">
                        <div class="col-md-8 column">

                                <a class="logo-2" href="home.php">
                                        <label class="lohny-2" style={{fontSize: '60px'}}><img src="assets/images/fav.png" width="60" height="60" alt="img"/> VU</label></a>
                        </div>
                    </div>
                </div>
            </div>
					<div class="appyl-sub-icon-info">
						<p style={{color: '#FFF'}}>Victoria University is home to opportunities. It’s where you’ll leave behind what’s familiar and step into a world of endless possibilities. Who you are, what you want, where you’ll go, and how you can impact your community, country and the world are yours to discover.</p>
					</div>
					<div class="columns-2 mt-md-0 mt-3">
						<ul class="social text-right">
							<li><a href="https://www.facebook.com/VUKampala"><span class="fa fa-facebook" aria-hidden="true"></span>&nbsp;</a>
							</li>
							<li><a href="https://www.linkedin.com/company/victoria-university-kampala/"><span class="fa fa-linkedin" aria-hidden="true"></span>&nbsp;</a>
							</li>
							<li><a href="https://twitter.com/VUKampala"><span class="fa fa-twitter" aria-hidden="true"></span>&nbsp;</a>
							</li>
							<li><a href="https://www.instagram.com/victoriauniversity_kampala/"><span class="fa fa-instagram" aria-hidden="true"></span>&nbsp;</a>
							</li>
							<li><a href="https://www.youtube.com/user/vukampala"><span class="fa fa-youtube-play" aria-hidden="true"></span>&nbsp;</a>
							</li>
						</ul>
					</div>
            <div class="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                <div class="columns text-lg-left text-center" style={{color: '#FFF'}}>
                    <p style={{color: '#FFF'}}>© 2021 Victoria University, Kampala, Uganda. All rights reserved | Victoria University is part of the Ruparelia Group of Companies
                    </p>
                </div>
            </div>
        </div>
    </div>
    <button onClick={this.topFunction} id="movetop" title="Go to top">
        <span class="fa fa-angle-up"></span>
    </button>
    <button class="open-button" onClick={this.openForm}><span class="fa fa-comments text-center justify-content-center" title="Chat And Help"></span></button>
</section>
            </React.Fragment>
        )
    }
}

export default Footer;