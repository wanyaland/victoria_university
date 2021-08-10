import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class WilHallOfFame extends Component{
    componentDidMount(){
        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("activer");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            } 
          });
        }
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
				<div className=""  style={{color: '#EEE'}}>
				<Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/wil"><span className="underline" style={{color: "#EEE"}}>
					Work Integrated Learning 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Will Hall Of Fame</span>
				</div>
			</div>
		</div>
	</div>
</section>
<WilBanner />
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="container py-lg-5" >
			<div className="justify-content-center"  style={{display: 'flex'}}>
				<WilNav />
				<div className="col-lg-9"   style={{padding: '0px', backgroundColor: '#FFF', borderTopLeftRadius: '0px'}}>
					<div className="search_results">
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>WIL Hall of Fame</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
						<p className="my-4"><b>The Work Integrated Learning Hall of Fame recognises and honours our partner organisations that have made significant contribution to the development and application of WIL and to the work-readiness of our graduates.</b></p>
                        <div className="w3l-wecome-content-6">
							<div className="ab-content-6-mian py-5">
								<div className="container py-lg-5">
									<div className="welcome-grids row">
										<div className="welcome-image">
											<img src="assets/images/wil_banner.jpg" className="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
                        <hr className="text-center" style={{color: '#000', width: '90%'}} />
						<p className="my-4">
                            To provide WIL activities for our students,Victoria University collaborates with business, industry, government and community, from small businesses to large enterprises, not-for-profit and for-profit organisations.
                        </p>
                        <p className="my-4">
                            To commemorate the importance of our industry partnerships and acknowledge the support of our partners – large and small – the University confers a Hall of Fame award on WIL hosts that have significantly contributed to, and benefited from, participation in WIL activity.
                        </p>
                        <p className="my-4">
                            The Hall of Fame recognises each inductee's contribution to the University, the professional preparation of our students past and present, and growing and strengthening our regions.
                        </p>
                        <p className="my-4">
                            A selection committee consisting of University senior executive and industry representatives evaluates the suitability of nominations from the University and community for induction. Each inductee has a strong track record of contributing to the advancement of WIL with our University.
                        </p>
                        <p className="my-4">
                            Ideally, the recipient is a regional or regionally focused business, industry or community organisation that, for at least five years, has hosted students undertaking WIL as part of their studies
                        </p>
                        {/* <div className="w3l-wecome-content-6">
                            <div className="ab-content-6-mian py-5">
                                <div className="container py-lg-5">
                                    <div className="welcome-grids row">
                                        <div className="col-lg-12 welcome-image">
                                            <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                                                <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;2020 co-inductees: Large employer (more than 200 employees)<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                                    <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                                        <br/>
                                                        <div className="col-lg-12 welcome-image">
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="text-center" style={{color: '#000', width: '90%'}} />
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <br/>
                                                    </div>
                                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;2020 co-inductees: Large employer (more than 200 employees)<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                                    <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                                        <br/>
                                                        <div className="col-lg-12 welcome-image">
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="text-center" style={{color: '#000', width: '90%'}} />
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <br/>
                                                    </div>
                                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;2020 co-inductees: Large employer (more than 200 employees)<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                                    <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                                        <br/>
                                                        <div className="col-lg-12 welcome-image">
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="text-center" style={{color: '#000', width: '90%'}} />
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <br/>
                                                    </div>
                                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;2020 co-inductees: Large employer (more than 200 employees)<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                                    <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                                        <br/>
                                                        <div className="col-lg-12 welcome-image">
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="text-center" style={{color: '#000', width: '90%'}} />
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <br/>
                                                    </div>
                                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;2020 co-inductees: Large employer (more than 200 employees)<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                                    <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                                        <br/>
                                                        <div className="col-lg-12 welcome-image">
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="text-center" style={{color: '#000', width: '90%'}} />
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <br/>
                                                    </div>
                                                    <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;2020 co-inductees: Large employer (more than 200 employees)<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                                                    <div className="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
                                                        <br/>
                                                        <div className="col-lg-12 welcome-image">
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="text-center" style={{color: '#000', width: '90%'}} />
                                                            <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                                                <p className="my-4">Victoria University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
                                                            </div>
                                                            <div className="w3l-wecome-content-6">
                                                                <div className="ab-content-6-mian py-5">
                                                                    <div className="container py-lg-5">
                                                                        <div className="welcome-grids row">
                                                                            <div className="welcome-image">
                                                                                <img src="assets/images/b3.jpg" className="img-fluid" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>	
                                                        <br/>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div> */}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<BottomWil />
<Footer />
</React.Fragment>
         )  
    }
}

export default WilHallOfFame;