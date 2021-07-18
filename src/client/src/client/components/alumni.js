import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Alumni extends Component {
    render(){
        return(
            <React.Fragment>
            <BreadNavBar />
            <NavBar />
            <section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
					<Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Alumni and Friends</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-apply-6">
	<div className="apply-info py-5">
		<div className="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
            <br/>
			<div className="">
					<h4 className="text-left" style={{textTransform: 'capitalize'}}>DEANNA SYKES</h4>
			</div>
			<div style={{width: '10%', border: '#f89422 2px solid', display: 'subgrid'}} className="text-left"></div>
			
            <p className="text-left">VU’s 2020 Volunteer Service Award Recipient</p>
			<br/>
            <button className="btn_link">Read More</button>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<div className="apply-grids-info">
				<div className="mt-lg-5 mt-4 justify-content-center">
					<div className="appyl-sub-icon-info text-center">
						<div style={{border: '#FFF 2px solid', height: '40px', width: '2%', margin: '0 auto', borderRadius: '40%'}}></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="welcome-grids row">
				<div className="col-lg-12 welcome-image">
					<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid', padding: '40px'}}>
						<h4 className="hny-title text-center" style={{color: '#0077b5', fontSize: '36px'}}>Alumni</h4>
                        <p className="text-center my-4">"
						As a graduate or ‘alumnus’ of Victoria University, you automatically become part of our extensive alumni community which brings with it a host of benefits before and after graduation.
						We strive to ensure that each member of our alumni community enjoys the benefits of studying at Victoria University, beyond one’s graduation.</p>
						<p className="my-4">We believe that our commitment to work-integrated-learning sets our alumni apart from their peers from other universities. Our students enter the job market with world-class qualifications and work experience.</p>
						<p className="my-4">We are proud that so many of our alumni choose to give something back to the university, not only through financial donations but by providing practical support and career guidance to current students which equally gives the latter a head start as one enters the world of work.</p>
						<p className="my-4">From guest lectures and mentoring to providing career afternoons and work experience placements, our alumni are actively encouraged to share their knowledge and experience with current students.</p>
						<p className="my-4">Our current students have many opportunities to meet our alumni in both social and professional settings where personal and career experiences are shared.</p>
						<p className="my-4">One more promise to our students; after you graduate, you will continue to have access to a wide range of services and facilities that will support both your personal and professional development."</p>
					</div>
				</div>	
			</div>
		</div>
	</div>
</section>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			<div className="row title-content">
				<div className="col-lg-6 title-left">
					<h4 className="hny-title" style={{color: '#034f77'}}>Digital programs and on-demand content</h4>
				</div>
			</div>
			<br/>

			<div className="row">
				<div className="col-md-4 filter photo">
                    <div  style={{backgroundColor: '#fff', border: '#CCC 10px solid', padding: '0'}}>
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>

                        </div>
                        <div className="course-content" style={{padding: '30px'}}>
                            <div className="course-info">
                                
                                <h6><a className="course-instructor" href="#home"  style={{fontSize: '19px'}}>Access upcoming events and on-demand digital content on a variety of professional development and lifelong learning topics.</a></h6>
                            </div>
                            <div className="course-divider">
                                
                            </div>
                        </div>
                    </div>
				</div>
				<div className="col-md-4 filter webdesign">
                    <div  style={{backgroundColor: '#fff', border:'#CCC 10px solid', padding: '0'}}>
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{padding: '30px'}}>
                            <div className="course-info">
                                <h6><a className="course-instructor" href="#home"  style={{fontSize: '19px'}}>Access upcoming events and on-demand digital content on a variety of professional development and lifelong learning topics.</a></h6>
                            </div>
                            <div className="course-divider">
                                
                            </div>
                        </div>
                    </div>
				</div>
				<div className="col-md-4 filter webdesign">
                    <div  style={{backgroundColor: '#fff', border: '#CCC 10px solid', padding: '0'}}>
                        <div className="each-item">
                            <a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
                        </div>
                        <div className="course-content" style={{padding: '30px'}}>
                            <div className="course-info">
                                <h6><a className="course-instructor" href="#home"  style={{fontSize: '19px'}}>Access upcoming events and on-demand digital content on a variety of professional development and lifelong learning topics.</a></h6>
                            </div>
                            <div className="course-divider">
                                
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			<div className="row title-content">
				<div className="col-lg-4 title-left">
					<h4 className="hny-title" style={{color: '#034f77'}}>Stories that inspire</h4>
				</div>
			</div>
			<br/>

			<div className="row">
				<div className="col-md-4 filter photo">
					<div className="each-item">
						<a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>

					</div>
					<div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
						<div className="course-info">
							<a href="#home" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">VU alumna wins two CCPA awards
                                </h3>
							</a>
							<h6><a className="course-instructor" href="#home">Alumni,Announcements</a></h6>
                            <div style={{width: '10%', border: '#f89422 2px solid', display: 'subgrid'}} className="text-left"></div>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title="">April 21, 2021</span>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 filter graphic photo">
					<div className="each-item">
						<a href="#home"><img className="port-image img-fuild" src="assets/images/bg2.jpg" alt="" /></a>

					</div>
					<div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
						<div className="course-info">
							<a href="#home" className="course-title-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">A passion for mental health
                                </h3>
							</a>
							<h6><a className="course-instructor" href="#home">Alumni,In Our Communities</a></h6>
						</div>
                        <div style={{width: '10%', border: '#f89422 2px solid', display: 'subgrid'}} className="text-left"></div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title="">February 19, 2021</span>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 filter webdesign">
					<div className="each-item">
						<a href="#home"><img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" /></a>
					</div>
					<div className="course-content" style={{backgroundColor: '#FFF', border: 'none'}}>
						<div className="course-info">
							<a href="#home" className="course-title-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Norma Inch: Life is not a dress rehearsal</h3>
							</a>
							<h6><a className="course-instructor" href="#home">Alumni,Faculty of Humanities & Social Sciences,In Our Communities</a></h6>
						</div>
                        <div style={{width: '10%', border: '#f89422 2px solid', display: 'subgrid'}} className="text-left"></div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title="">February 26, 2021</span>
							</div>
						</div>
					</div>
				</div>
				</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-footer-16 text-center">
    <div className="container">
        <h4 className="hny-title text-left" style={{color: '#025886', fontSize: '35px'}}>Follow VU on social media</h4>
    </div>
    <div className="container">
        <div className="columns-2 mt-md-0 mt-3">
            <ul className="social text-left">
                <li><a href="https://www.facebook.com/VUKampala" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-facebook" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://www.linkedin.com/company/victoria-university-kampala/" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-linkedin" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://twitter.com/VUKampala" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-twitter" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://www.instagram.com/victoriauniversity_kampala/" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-instagram" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://www.youtube.com/user/vukampala" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-youtube-play" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>
            </ul>
        </div>
    </div>
</section>
<br/>
<br/>
<br/><br/>
            <Footer />
            </React.Fragment>
        )
    }
}

export default Alumni;