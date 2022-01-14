import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class History extends Component {
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-apply-6">
				<div className=""  style={{}}>
					<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
						<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="d-block w-100" src="assets/images/abt.JPG" alt="First slide" style={{filter: 'brightness(60%)'}}/>
								</div>
								<div className='banner-caption'>&nbsp;History</div>
							</div>
						</div>
					</div>
				</div>
			</section>
                <section className="w3l-top-header-content">
    <div className="hny-top-menu">
        <div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
            <div className="container-fluid">
                <div className="" style={{color: '#EEE'}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ History</span>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>History</h6>
                    <br/>
                    <p className="my-4">Victoria University is the leading University in Uganda and East Africa when it comes to offering Experiential and Work Integrated Learning <b>(WIL)</b>. We are determined to produce graduates with employable skills and capacity to creatively employ themselves. We do this by providing meaningful, hands-on workplace experience to enrich theoretical learning. Our work integrated learning program is enabling students to complete a program of three years with at least 2-3 years’ work experience with our partner organizations and Companies.
                    </p>
                    <p className="my-4">
                    The University was openned in 2013 and  is centrally located in the heart of Kampala city and on the main public transportation routes coupled with ample parking space. Victoria University is part of the Ruparelia Group of Companies which has a strong presence in the education sector in Uganda and has under its portfolio, kampala international school of uganda, kampala parents school, Delhi Public School international. Victoria University is a cosmopolitan university, accredited by the National Council for Higher Education with a wide range of nationalities. With a reputation as the best private ,forward thinking and modern University in East Africa, Victoria University offers a vibrant and stimulating environment to further your needs, study or research a subject in greater depth, or aiming to extend your knowledge and skills in pursuit of your career ambition""
                    </p>
                </div>
            </div>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <img src='assets/images/grad.jpg' className='img-fluid' alt='grad' />
                </div>
            </div>
        </div>
    </div>
</section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default History;