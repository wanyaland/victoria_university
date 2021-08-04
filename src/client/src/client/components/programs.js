import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'

class Programs extends Component{
	change_icon(id, id2) {
		var element = document.getElementById(id);
		element.classList.add("hider");
		var element2 = document.getElementById(id2);
		element2.classList.add("block");
	 }
	 change_icon2(id, id2){
		var element = document.getElementById(id);
		element.classList.remove("hider");
		var element2 = document.getElementById(id2);
		element2.classList.remove("block");
	 }
    render(){
		const under = 'undergraduate'
		const postg = 'postgraduate'
		const diploma = 'diploma'
		const found = 'foundation'
		const professional = 'professional'
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
					<span style={{color: '#EEE'}}>/ Programs & Courses</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-apply-6">
	<div className=""  style={{}}>
		<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
			<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src="assets/images/sliders/1.jpg" alt="First slide" style={{filter: 'brightness(40%)'}}/>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="assets/images/sliders/2.jpg" alt="Second slide"  style={{filter: 'brightness(40%)'}}/>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="assets/images/sliders/3.jpg" alt="Third slide"  style={{filter: 'brightness(40%)'}}/>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="assets/images/sliders/4.jpg" alt="Third slide"  style={{filter: 'brightness(40%)'}}/>
					</div>
  				</div>
				<div className="carousel-caption">
					<h4 className="text-center"><span style={{borderLeft: '8px #D4484A solid', fontSize: '42px'}}>&nbsp;&nbsp;Programmes</span></h4>
					<br/>
					<br/>
					<p><h6 className="text-center" style={{textTransform: 'capitalize', color: '#FFF', textShadow: '2px 2px #000', fontSize: '28px'}}>If you want to study, acquire knowledge, skills and experience to solve society’s problems and make a meaningful impact in the professional world, we encourage you to take on one of our core courses and professional development courses. </h6></p>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="welcome-grids row text-center justify-content-center">
				<div className="welcome-image">
					<h4 className="hny-title text-center" style={{fontSize: '48px',  color: '#f74040', fontWeight: '500'}}>I know what I want <span style={{fontSize: '54px', fontWeight: '600'}}>VS</span> Not sure where to start?</h4>
				</div>	
			</div>
		</div>
	</div>
</section>
 <section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div className="welcome-grids row">
					<div className="col-lg-12 mb-lg-0 mb-5">
						<h4 className="text-center" style={{color: '#f74040', fontSize: '38px'}}>I know what I want.</h4>
						<h6 className="hny-title" style={{color: '#0077b5', fontSize: '36px'}}>I am interested in;</h6>
						<p className="my-4" style={{fontWeight: '500', fontSize: '28px'}}>Core Courses</p>
						<p className="my-4">
							<ul style={{listStyle: 'none'}}>
								<Link to={`/prog-index${postg}`} ><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Masters</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${under}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Bachelors</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${diploma}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${found}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Foundations</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${professional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Professional Development Courses</li></Link><br/>
							</ul>
						</p>
						<p className="my-4" style={{fontWeight: '500', fontSize: '28px'}}>Professional Development Courses</p>
						<p className="my-4">
							<ul style={{listStyle: 'none'}}>
							<Link className="logo-2" to={`/prog-index${professional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Business</li></Link><br/>
							<Link className="logo-2" to={`/prog-index${professional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Science and Technology</li></Link><br/>
							<Link className="logo-2" to={`/prog-index${professional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Health Sciences</li></Link><br/>
							<Link className="logo-2" to={`/prog-index${professional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Humanities and Social Sciences</li></Link><br/>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
<br/>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5">
		<h4 className="text-center" style={{color: '#f74040', fontSize: '38px'}}>Not sure where to start, Browse All Our Core Courses and Professional Development Courses.</h4>
			<div className="welcome-grids row">
				<div className="col-lg-6 mb-lg-0 mb-5">
					<div className="proghead">
						<div className="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0', marginBottom: '40px'}}>
							<table style={{width: '100%', height: '100%'}}>
							
								<tr>
									<td className="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>Programmes</td>
								</tr>
								
							</table>
						</div>
						<div className="text-center"><h3 className="lohny-2"><span className="fa fa-book topprog" style={{fontSize: '80px'}}></span></h3></div>
						<div className="appyl-sub-icon-info text-center" style={{padding: '10px'}}>
							<p>A full-time job and life responsibilities don’t leave much time for studying – we get it. That’s why our online programs are designed to let you fit university education into your life.</p>
						</div>
						<Link className="logo-2" to="/about">
								<h5 className="lohny-2 text-center underline" style={{color:'#0077b5'}}>How VU Work</h5>
							</Link><br/>
						<div className="text-left" style={{paddingLeft: '8rem'}}>
							<p><Link className="logo-2" to={`/prog-index${under}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
									<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate Programs</span></span>
									</Link>
							</p>
							<p><Link className="logo-2" to={`/prog-index${postg}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
								<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Postgraduate Programs</span></span>
								</Link>
							</p>        
							<p><Link className="logo-2" to={`/prog-index${diploma}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
								<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Diploma Programs</span></span>
								</Link>
							</p>        
							<p><Link className="logo-2" to={`/prog-index${found}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
								<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Foundations Programs</span></span>
								</Link>
							</p>        
							<p><Link className="logo-2" to={`/prog-index${professional}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
								<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Professional Development Programs</span></span>
								</Link>
							</p>        
						</div>
						<br/>
					</div>
				</div>
				<div className="col-lg-6 welcome-image">
					<div className="" style={{width: '100%', backgroundColor:'#fff', border: '#CCC 10px solid'}}>
					<div className="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0', marginBottom: '40px'}}>
							<table style={{width: '100%', height: '100%'}}>
							
								<tr>
									<td className="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>Online Courses</td>
								</tr>
								
							</table>
						</div>
						<div className="text-center"><h3 className="lohny-2"><span className="fa fa-book topprog" style={{fontSize: '80px'}}></span></h3></div>
						<div className="appyl-sub-icon-info text-center" style={{padding: '10px'}}>
							<p>A full-time job and life responsibilities don’t leave much time for studying – we get it. That’s why our online programs are designed to let you fit university education into your life.</p>
						</div>
						<Link className="logo-2" to="/about">
								<h5 className="lohny-2 text-center underline" style={{color:'#0077b5'}}>HOW VU Work</h5>
							</Link><br/>
						<div className="text-left" style={{paddingLeft: '8rem'}}>
							<p><Link className="logo-2" to={`/prog-index${under}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
								<span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate Programs</span></span>
								</Link>
							</p>
							<p><Link className="logo-2" to={`/prog-index${postg}`}style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
								<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Postgraduate Programs</span></span>
								</Link>
							</p>
							<p><Link className="logo-2" to={`/prog-index${diploma}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
								<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Diploma Programs</span></span>
								</Link>
							</p>        
							<p><Link className="logo-2" to={`/prog-index${found}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
								<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Foundations Programs</span></span>
								</Link>
							</p>        
							<p><Link className="logo-2" to={`/prog-index${professional}`} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
								<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">Professional Development Programs</span></span>
								</Link>
							</p>    
						</div>
						<br/>
					</div>
				</div>	
			</div>
		</div>
	</div>
</section>
 <section className="w3l-wecome-content-6">
		<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div className="welcome-grids row">
					<div className="col-lg-12 mb-lg-0 mb-5">
						<br/>
						<h6 className="hny-title" style={{color: '#0077b5', fontSize: '36px'}}>Core Courses vs Professional Development Courses</h6>
						<p className="my-4" style={{fontWeight: '500', fontSize: '28px'}}>Core Courses</p>
						<p className="my-4" style={{fontSize: '18px'}}>Our Foundation, Diploma, Bachelor and Masters programs are taught using a work-integrated learning approach where students study and work simultaneously with the objective of graduating with two to three years’ experience. How VU Core Courses Are Taught: </p>
						<p className="my-4">
							<ul style={{listStyle: 'none'}}>
							<Link to={`/prog-index${postg}`} ><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Masters</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${under}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Bachelors</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${diploma}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${found}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Foundations</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${professional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Professional Development Courses</li></Link><br/>
							</ul>
						</p>
						<p className="my-4" style={{fontWeight: '500', fontSize: '28px'}}>Professional Development Courses</p>
						<p className="my4">
							In an increasingly competitive and evolving job market, we know that many employers are keen on skills and what one can do rather qualifications and what one knows. Our professional development courses are designed to equip you with the most relevant and sought-after skills in today’s employment world. How Our Professional Development Courses Are Taught:
						</p>
						<p className="my-4">
							<ul style={{listStyle: 'none'}}>
							<Link to={`/prog-index${postg}`} ><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Masters</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${under}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Bachelors</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${diploma}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${found}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Foundations</li></Link><br/>
								<Link className="logo-2" to={`/prog-index${professional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Professional Development Courses</li></Link><br/>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
<section className="w3l-features-1">
	<div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
		<div className="container py-lg-5" id="fixer3">
			<div className="row grids-innf my-lg-5" id="fixer">
				<div className="features-1-info col-lg-12 col-md-12" style={{height: '100px', width: '100%', padding: '0', marginBottom: '40px'}}>
					<table style={{width: '100%', height: '100%'}}>
					
						<tr>
							<td className="text-center" style={{backgroundColor: '#033f5f', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontSize: '28px'}}>Which program or course is right for me?</td>
						</tr>
						
					</table>
				</div>
				<div className="features-1-info col-lg-12 col-md-12" style={{borderRight: '#c2c2c2 1px solid'}}>
					<p className="my-4">If you are not sure about which course to pursue, we can help. Our student recruiters and faculty registrars are available to help you clarify your career and educational goals. 
Career Guidance </p>
					<p className="my-4">
						<ul style={{listStyle: 'none'}}>
						<Link to="vclass"><li className="" style={{marginBottom: '0rem !important'}}>&emsp;<span className="fa fa-angle-right" style={{color: '#555', fontSize: '24px'}}></span>&emsp;<span className="underline">If you are new to online learning, please check out our detailed tutorials on how to navigate our online learning system.</span> <span className="fa fa-external-link" style={{color: '#555', fontSize: '18px'}}></span></li></Link>
						</ul>
					</p>
				</div>
				<div className="features-1-info col-lg-12 col-md-12" id="fixer2" style={{paddingBottom: '0 !important'}}>
					<table style={{width: '100%', height: '100%'}}>
					
						<tr>
							<td className="text-center" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '10px'}}><Link to="vclass">If you’re new to online learning, you may also want to read about what to expect at VU.</Link></td>
						</tr>
						
					</table>
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

export default Programs;