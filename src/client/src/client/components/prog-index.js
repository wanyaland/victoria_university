import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';


class ProgIndex extends Component {
    componentDidMount(){
        
    }
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="container py-lg-5" style={{maxWidth: '100%'}}>
			<div className="justify-content-center row"  style={{display: 'flex'}}>
				<div className="col-lg-3 with_shadow side_control" style={{padding: '0rem !important'}}>
					<div className="sidenavd" style={{padding: '0rem !important'}}>
						<div className="" style={{height: '60px'}}>
							<table style={{width: '100%', height: '100%'}}>
								<tr>
									<td className="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontWeight: '600'}}><b>Refined by:</b></td>
								</tr>
							</table>
						</div>
                        <ul className="w3-ul w3-card-4" style={{borderBottom: '#888 1px solid', boxShadow: 'none'}}>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>LEVEL<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                        </ul>
						<hr style={{border: '#fff 1px solid', width: '90%'}}/>
						<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<h6 style={{color: '#888'}}>CREDENTIAL</h6>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>All<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>Post Graduate<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>Under Graduate<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>Diploma<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>Foundations<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>Professional<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                        </ul>
                    </div>
				</div>
				<div className="col-lg-9"   style={{backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
                        <h6 className="hny-title" style={{fontSize: '38px', color: 'orange'}}>Graduate Programs (UNDER DEVELOPMENT)</h6>
						<br/>
						<p className="my-4" style={{fontSize: '18px'}}>Victoria University governs itself through a bicameral governance structure, as set out in the Ugandan Post-Secondary Learning Act  and the Victoria University Regulations . The Board of Governors is the senior governing body, but shares academic governance with the General Faculties Council (GFC), the academic governing body.</p>
                        <br/>
                        <form action="#" method="post" className="d-flex searchhny-form" style={{border: '#999 1px solid', paddingLeft: '10px'}}>
                            <input type="search" placeholder="Search for programs by name or keyword" style={{color: '#000', width: '100%', border: 'none'}} required="required"/>
                            <button className="search_btn" style={{borderRadius: '0rem', backgroundColor: '#f87a21'}}>Search</button>
                        </form>
                        <br/>
                    </div>
					<section className="w3l-wecome-content-6">
						<div className="ab-content-6-mian py-5">
							<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
								<div className="welcome-grids row">
									<div className="col-lg-12 mb-lg-0 mb-5" style={{borderBottom: 'orange 5px solid', padding: '0'}}>
										<table style={{width: '100%', height: '100%'}}>
											<tr>
												<td className="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', padding: '50px 20px 20px 40px'}}>
													<h4>Thinking about studying with us?</h4>
													<p className="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
													<p className="my-4"><button className="btn_link2">Access the Viewbook</button></p>
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="" style={{height: '60px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', paddingLeft: '10px'}}><b>
									Our transfer credit assessment tool can give you an idea of how your previous courses might transfer to VU.</b></td>
							</tr>
						</table>
					</div>
					<br/>
					<div className="container py-lg-5" style={{maxWidth: '100%', margin: '0rem', padding: '0rem !important'}}>
						<div className="row grids-innf my-lg-5" style={{margin: '0 auto'}}>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
							</div>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
							</div>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
							</div>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
							</div>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
							</div>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
							</div>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
							</div>
							<div className="prog_results">
								<div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
									<div className="col-md-3" style={{display: 'flex', alignItems: 'center'}}>
										<h6 className="underline" style={{color: '#555', fontSize: '18px'}}><span className="dot_prog purple"></span>&nbsp;Doctor of Business Administration</h6>
									</div>
									<div className="col-md-6" style={{}}>
										<p className="my-4" style={{fontSize: '14px'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
										<p className="my-1"><b style={{fontWeight: '600'}}>Credits:</b> 30</p>
									</div>
									<div className="col-md-3 text-right" style={{display: 'flex', alignItems: 'center'}}>
										<p className="text-left view-program">View Program</p>
									</div>
								</div>
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
                <Footer />
            </React.Fragment>
        )
    }
}

export default ProgIndex;