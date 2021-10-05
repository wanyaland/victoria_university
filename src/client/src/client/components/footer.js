import React, { Component } from 'react';
import Chat from './chat';
import PayPop from './paypop';

class Footer extends Component{
    constructor(props) {
        super(props);
        
        this.popPay = this.popPay.bind(this)
    }
    
	topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
    openForm(){
        document.getElementById("myForm").style.display = "block";
    }
    /* payed(){
        window.location.href = "https://payments.pesapal.com/victoriauniversity";
    } */
    apply(){
        window.location.href = "https://eadmissions.vu.ac.ug/";
    }
    popPay(){
		var modal = document.getElementById("pay-myModal");
		modal.style.display = "block";
	}
    render(){
        return(
            <React.Fragment>
            <Chat />
            <PayPop />
            <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=elFld1AV4L5eoI9oxn1qLKb1xoAAmYvZvWDiT81XlryapnR1ZPqwOuWdpKsH"></script></span>
        <section className="w3l-footer-16">
    <div className="w3l-footer-16-main py-5">
        <div className="container">
			<br/>
            <div className="row">
                <div className="col-lg-4 column">
                    <div className="row">
                        <div className="col-md-8 column">

                                <a className="logo-2" href="home.php">
                                        <label className="lohny-2" style={{fontSize: '60px'}}><img src="/assets/images/fav.png" width="60" height="60" alt="img"/> VU</label></a>
                        </div>
                    </div>
                </div>
            </div>
					<div className="appyl-sub-icon-info">
						<p style={{color: '#FFF'}}>Victoria University is home to opportunities. It’s where you’ll leave behind what’s familiar and step into a world of endless possibilities. Who you are, what you want, where you’ll go, and how you can impact your community, country and the world are yours to discover.</p>
					</div>
					<div className="columns-2 mt-md-0 mt-3">
						<ul className="social text-right">
							<li><a href="https://www.facebook.com/VUKampala"><span className="fa fa-facebook" aria-hidden="true"></span><i></i></a>
							</li>
							<li><a href="https://www.linkedin.com/company/victoria-university-kampala/"><span className="fa fa-linkedin" aria-hidden="true"></span><i></i></a>
							</li>
							<li><a href="https://twitter.com/VUKampala"><span className="fa fa-twitter" aria-hidden="true"></span><i></i></a>
							</li>
							<li><a href="https://www.instagram.com/victoriauniversity_kampala/"><span className="fa fa-instagram" aria-hidden="true"></span><i></i></a>
							</li>
							<li><a href="https://www.youtube.com/user/vukampala"><span className="fa fa-youtube-play" aria-hidden="true"></span><i></i></a>
							</li>
						</ul>
					</div>
            <div className="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                <div className="columns text-lg-left text-center" style={{color: '#FFF'}}>
                    <p style={{color: '#FFF'}}>© 2021 Victoria University, Kampala, Uganda. All rights reserved | Victoria University is part of the Ruparelia Group of Companies
                    </p>
                </div>
            </div>
        </div>
    </div>
    <button onClick={this.topFunction} id="movetop" title="Go to top">
        <span className="fa fa-angle-up"></span>
    </button>
    <button className="open-button" onClick={this.openForm}><span className="fa fa-comments text-center justify-content-center" title="Chat And Help" style={{display: 'flex', alignItems: 'center'}}></span></button>
    <button className="open-pay" onClick={this.popPay}><span style={{color: '#FFF'}}>Pay</span></button>
    <button className="open-apply" onClick={this.apply}><span style={{color: '#FFF'}}>Apply Now</span></button>
</section>
            </React.Fragment>
        )
    }
}

export default Footer;