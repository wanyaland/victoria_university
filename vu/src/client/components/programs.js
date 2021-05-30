import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';

class Programs extends Component{
    render(){
        return(
<React.Fragment>
    <BreadNavBar />
    <NavBar />
    <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="row">
					<ol class="accounts col-md-2">
						<li class="breadcrumb-item">Home / Programs</li>
						{/* <li class="breadcrumb-item">About</li> */}
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-apply-6">
	<div class="apply-info py-5">
		<div class="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
			<div class="">
					<h4 class="text-center"><span className="borderLeft">&nbsp;Programs &amp; Courses</span></h4>
				</div>
			<div class="apply-grids-info row">
					<div class="row mt-lg-5 mt-4">
						<div class="appyl-sub-icon-info text-center">
							<p style={{fontSize: '24px'}}>If you think studying online with Victoria University might be right for you, we encourage you to explore our wide variety of distance learning programs and courses. Try out a single course, or jump into a full program – the choice is yours.</p>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
    <br/>
	<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5">
					<div class="welcome-grids row text-center justify-content-center">
							<div class="welcome-image">
								<h4 class="text-center">NOT SURE WHERE TO START? BROWSE ALL OUR OFFERINGS.</h4>
							</div>	
					</div>
			</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	  <div class="ab-content-6-mian py-5">
			 <div class="container py-lg-5">
					<div class="welcome-grids row">
							<div class="col-lg-6 mb-lg-0 mb-5">
								<div class="proghead">
                                    <br/>
                                    <div class="text-center"><h3 class="lohny-2"><span class="fa fa-book topprog" style={{fontSize: '80px'}}></span></h3></div>
                                    <div class="text-center"><h3 class="lohny-2">Online Programs</h3></div>
                                    <div class="appyl-sub-icon-info text-center">
                                        <p>A full-time job and life responsibilities don’t leave much time for studying – we get it. That’s why our online programs are designed to let you fit university education into your life.</p>
                                    </div>
                                    <div class="text-center">
                                        <a class="logo-2" href="home">
                                            <h3 class="lohny-2 text-center" style={{color:'#0077b5'}}>HOW VU WORKS</h3>
                                        </a><br/>
                                        <a class="logo-2" href="home">
                                            <h4 class="lohny-2 text-center" style={{color:'#0077b5'}}><span class="fa fa-chain programfa"></span>&nbsp;Undergraduate Programs</h4>
                                        </a><br/>
                                        <a class="logo-2" href="home">
                                            <h4 class="lohny-2 text-center" style={{color:'#0077b5'}}><span class="fa fa-chain programfa"></span>&nbsp;Undergraduate Programs</h4>
                                        </a>
                                               
                                    </div>
                                    <br/>
                                </div>
							</div>
							<div class="col-lg-6 welcome-image">
									<div class="" style={{width: '100%', backgroundColor:'#fff', border: '#CCC 10px solid'}}>
                                        <br/>
                                        <div class="text-center"><h3 class="lohny-2"><span class="fa fa-book topprog" style={{fontSize: '80px'}}></span></h3></div>
                                        <div class="text-center"><h3 class="lohny-2">Online Courses</h3></div>
										<div class="appyl-sub-icon-info text-center">
                                            <p>A full-time job and life responsibilities don’t leave much time for studying – we get it. That’s why our online programs are designed to let you fit university education into your life.</p>
                                        </div>
                                        <div class="text-center">
                                            <a class="logo-2" href="home">
                                                <h3 class="lohny-2 text-center" style={{color:'#0077b5'}}>HOW VU WORKS</h3>
                                            </a><br/>
                                            <a class="logo-2" href="home">
                                                <h4 class="lohny-2 text-center" style={{color:'#0077b5'}}><span class="fa fa-chain programfa"></span>&nbsp;Undergraduate Programs</h4>
                                            </a><br/>
                                            <a class="logo-2" href="home">
                                                <h4 class="lohny-2 text-center" style={{color:'#0077b5'}}><span class="fa fa-chain programfa"></span>&nbsp;Undergraduate Programs</h4>
                                            </a>
                                                   
                                        </div>
                                        <br/>
									</div>
							</div>	
						</div>
				 </div>
			</div>
</section>

<section class="w3-gallery">
	<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4 bdr-bottom" style={{padding: 0}}>
			<div class="port-text-cards text-left mt-8 mb-3 col-lg-12 text-center justify-content-center" style={{backgroundColor: '#0077b5'}}>
				<li class="btn active filter-button" data-filter="all" style={{color:'#fff'}}>Which program or course is right for me?</li>
			</div>
			<br/>

			<div class="row">
				<div class="col-md-12 filter graphic photo">
					<div class="each-item text-center">
						<p>Not sure where to begin? We can help. Our counsellors will work with you to clarify your career and educational goals, and help you select an VU program.</p>
					</div>
				</div>
			</div><br/>
            <div class="port-text-cards text-left mt-8 mb-3 col-lg-12 text-center justify-content-center" style={{backgroundColor: '#b9b9b9', paddingBottom: '0'}}>
				<li class="btn active filter-button" data-filter="all" style={{color: '#555'}}>If you are new &#44; you may also want to read&nbsp;<a href="home" style={{fontsize: '18px'}}>What to Expect at VU</a></li>
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