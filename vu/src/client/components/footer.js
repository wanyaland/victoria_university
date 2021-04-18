import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <section class="w3l-footer-16">
    <div class="w3l-footer-16-main py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 column">
                    <div class="row">
                        <div class="col-md-8 column">

                                <a class="logo-2" href="home.php">
                                        <label class="lohny-2"><img src="assets/images/fav.png" width="50" height="50" /> Victoria</label>University</a>
                           
                            <div class="ad-text-inf">
                                <p style="color:#FFF"><span class="color-hny" style="color:#FFF"><b>Address :</b></span> Victoria Towers, 1-13 Jinja Road, Kampala, Uganda.</p>
                             </div>
                             <div class="ad-text-inf">
                                    <p><span class="color-hny"><b>Email :</b></span> <a href="mailto:admissions@vu.ac.ug">admissions@vu.ac.ug</a></p>
                                 </div>
                                 <div class="ad-text-inf">
                                        <p><span class="color-hny"><b>Phone :</b></span> <a href="tel:+142 5897555">(+256) 200405433</a></p>
                                     </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 column column4 mt-lg-0 mt-4">
                    <div class="col-md-6 column">
                            <h3>Featured Links</h3>
                            <ul class="footer-gd-16">
                                <li><a href="#">Graduation</a></li>
                                <li><a href="#">Admissions</a></li>
                                <li><a href="#">Staff</a></li>
                                <li><a href="#">Events</a></li>
								<li><a href="#">News</a></li>
								<li><a href="#">Alumni</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                </div>
                <div class="col-lg-4 col-md-6 column column4 mt-lg-0 mt-4">
                    <h3>Newsletter </h3>
                    <div class="end-column">
                        <h4>Subscribe Here Now</h4>
                        <form action="#" class="subscribe" method="post">
                            <input type="email" name="email" placeholder="Email Address" required=""/>
                            <button><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
                        </form>
                        <p style="color:#FFF">Subscribe to our mailing list and get updates to your email inbox.</p>
                    </div>
                </div>
            </div>
            <div class="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                <div class="columns text-lg-left text-center" style="color:#FFF">
                    <p style="color:#FFF">© 2021 Victoria University, Kampala, Uganda. All rights reserved | Victoria University is part of the Ruparelia Group of Companies
                    </p>
                </div>
                <div class="columns-2 mt-md-0 mt-3">
                    <ul class="social">
                        <li><a href="https://www.facebook.com/VUKampala"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://www.linkedin.com/company/victoria-university-kampala/"><span class="fa fa-linkedin" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://twitter.com/VUKampala"><span class="fa fa-twitter" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://www.instagram.com/victoriauniversity_kampala/"><span class="fa fa-instagram" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://www.youtube.com/user/vukampala"><span class="fa fa-youtube-play" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <button onclick="topFunction()" id="movetop" title="Go to top">
        <span class="fa fa-angle-up"></span>
    </button>
</section>
            </React.Fragment>
        )
    }
}

export default Footer;