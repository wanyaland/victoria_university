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
					<span style={{color: '#EEE'}}>/ Programs</span>
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
			<div className="">
					<h4 className="text-center"><span className="borderLeft">&nbsp;Programs &amp; Courses</span></h4>
				</div>
			<div className="apply-grids-info row">
					<div className="row mt-lg-5 mt-4">
						<div className="appyl-sub-icon-info text-center">
							<p style={{fontSize: '24px'}}>If you think studying online with Victoria University might be right for you, we encourage you to explore our wide variety of distance learning programs and courses. Try out a single course, or jump into a full program – the choice is yours.</p>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
    <br/>
	<div className="ab-content-6-mian py-5">
			<div className="container py-lg-5">
					<div className="welcome-grids row text-center justify-content-center">
							<div className="welcome-image">
								<h4 className="text-center">NOT SURE WHERE TO START? BROWSE ALL OUR OFFERINGS.</h4>
							</div>	
					</div>
			</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	  <div className="ab-content-6-mian py-5">
			 <div className="container py-lg-5">
					<div className="welcome-grids row">
							<div className="col-lg-6 mb-lg-0 mb-5">
								<div className="proghead">
                                    <br/>
                                    <div className="text-center"><h3 className="lohny-2"><span className="fa fa-book topprog" style={{fontSize: '80px'}}></span></h3></div>
                                    <div className="text-center"><h3 className="lohny-2">Online Programs</h3></div>
                                    <div className="appyl-sub-icon-info text-center">
                                        <p>A full-time job and life responsibilities don’t leave much time for studying – we get it. That’s why our online programs are designed to let you fit university education into your life.</p>
                                    </div>
                                    <div className="text-center">
                                        <a className="logo-2" href="home">
                                            <h3 className="lohny-2 text-center" style={{color:'#0077b5'}}>HOW VU WORKS</h3>
                                        </a><br/>
										<p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
												<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate Programs</span></span>
												</Link>
											</p>
											<p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
												<span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate Programs</span></span>
												</Link>
											</p>        
                                    </div>
                                    <br/>
                                </div>
							</div>
							<div className="col-lg-6 welcome-image">
									<div className="" style={{width: '100%', backgroundColor:'#fff', border: '#CCC 10px solid'}}>
                                        <br/>
                                        <div className="text-center"><h3 className="lohny-2"><span className="fa fa-book topprog" style={{fontSize: '80px'}}></span></h3></div>
                                        <div className="text-center"><h3 className="lohny-2">Online Courses</h3></div>
										<div className="appyl-sub-icon-info text-center">
                                            <p>A full-time job and life responsibilities don’t leave much time for studying – we get it. That’s why our online programs are designed to let you fit university education into your life.</p>
                                        </div>
                                        <div className="text-center">
                                            <a className="logo-2" href="home">
                                                <h3 className="lohny-2 text-center" style={{color:'#0077b5'}}>HOW VU WORKS</h3>
                                            </a><br/>
                                            <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
												<span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate Programs</span></span>
												</Link>
											</p>
											<p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
												<span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">Undergraduate Programs</span></span>
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

<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4 bdr-bottom" style={{padding: 0}}>
			<div className="port-text-cards text-left mt-8 mb-3 col-lg-12 text-center justify-content-center" style={{backgroundColor: '#0077b5'}}>
				<li className="btn active filter-button" data-filter="all" style={{color:'#fff'}}>Which program or course is right for me?</li>
			</div>
			<br/>

			<div className="row">
				<div className="col-md-12 filter graphic photo">
					<div className="each-item text-center">
						<p>Not sure where to begin? We can help. Our counsellors will work with you to clarify your career and educational goals, and help you select an VU program.</p>
					</div>
				</div>
			</div><br/>
            <div className="port-text-cards text-left mt-8 mb-3 col-lg-12 text-center justify-content-center" style={{backgroundColor: '#b9b9b9', paddingBottom: '0'}}>
				<li className="btn active filter-button" data-filter="all" style={{color: '#555'}}>If you are new &#44; you may also want to read&nbsp;<a href="home" style={{fontsize: '18px'}}>What to Expect at VU</a></li>
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