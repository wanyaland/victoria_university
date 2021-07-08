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
{/* <section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Search</span>
				</div>
			</div>
		</div>
	</div>
</section> */}
<section class="w3l-team-main">
	<div class="team py-5">
		<div class="container py-lg-5" style={{maxWidth: '100%'}}>
			<div class="justify-content-center row"  style={{display: 'flex'}}>
				<div class="col-lg-3 with_shadow side_control" style={{padding: '0rem !important'}}>
					<div class="sidenavd" style={{padding: '0rem !important'}}>
						<div class="" style={{height: '60px'}}>
							<table style={{width: '100%', height: '100%'}}>
								<tr>
									<td class="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontWeight: '600'}}><b>Refined by:</b></td>
								</tr>
							</table>
						</div>
                        <ul class="w3-ul w3-card-4" style={{borderBottom: '#888 1px solid', boxShadow: 'none'}}>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>LEVEL<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                        </ul>
						<hr style={{border: '#fff 1px solid', width: '90%'}}/>
						<ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<h6 style={{color: '#888'}}>CREDENTIAL</h6>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>All<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Doctor<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Master<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Graduate Certificate<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Graduate Diploma<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Post-Masters Certificate<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Post-Masters Diploma<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                        </ul>
                    </div>
				</div>
				<div class="col-lg-9"   style={{backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div class="col-lg-12 mb-lg-0 mb-5">
                        <h6 class="hny-title" style={{fontSize: '48px', color: 'orange'}}>Graduate Programs</h6>
						<br/>
						<p class="my-4" style={{fontSize: '18px'}}>Victoria University governs itself through a bicameral governance structure, as set out in the Ugandan Post-Secondary Learning Act  and the Victoria University Regulations . The Board of Governors is the senior governing body, but shares academic governance with the General Faculties Council (GFC), the academic governing body.</p>
                        <br/>
                        <form action="#" method="post" class="d-flex searchhny-form" style={{border: '#999 1px solid', paddingLeft: '10px'}}>
                            <input type="search" placeholder="Search for programs by name or keyword" style={{color: '#000', width: '100%', border: 'none'}} required="required"/>
                            <button class="search_btn" style={{borderRadius: '0rem', backgroundColor: '#f87a21'}}>Search</button>
                        </form>
                        <br/>
                    </div>
					<section class="w3l-wecome-content-6">
						<div class="ab-content-6-mian py-5">
							<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
								<div class="welcome-grids row">
									<div class="col-lg-12 mb-lg-0 mb-5" style={{borderBottom: 'orange 5px solid', padding: '0'}}>
										<table style={{width: '100%', height: '100%'}}>
											<tr>
												<td class="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', padding: '50px 20px 20px 40px'}}>
													<h4>Thinking about studying with us?</h4>
													<p class="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
													<p class="my-4"><button class="btn_link2">Access the Viewbook</button></p>
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div class="" style={{height: '60px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', paddingLeft: '10px'}}><b>
									Our transfer credit assessment tool can give you an idea of how your previous courses might transfer to VU.</b></td>
							</tr>
						</table>
					</div>
					<br/>
					<div class="container py-lg-5" style={{maxWidth: '100%', margin: '0rem', padding: '0rem !important'}}>
					<div class="row grids-innf my-lg-5" style={{margin: '0 auto'}}>
						<div class="col-md-3 prog_results">
							<h6 class="underline" style={{color: '#555', fontSize: '18px'}}>Doctor of Business Administration</h6>
							<p class="my-4" style={{fontSize: '14px', borderTop: '#888 1px solid'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
							<p class="my-4">
								<b style={{fontWeight: '600'}}>Credits:</b> 30
							</p>
							<div class="" style={{height: '40px'}}>
								<table style={{width: '100%', height: '100%'}}>
									<tr>
										<td class="text-right view-program">View Program</td>
									</tr>
								</table>
							</div>
						</div>
						<div class="col-md-3 prog_results">
							<h6 class="underline" style={{color: '#555', fontSize: '18px'}}>Doctor of Education<br/><span style={{color: '#076ea5', fontWeight: '600'}}>in Distance Education</span></h6>
							<p class="my-4" style={{fontSize: '14px', borderTop: '#888 1px solid'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate!</p>
							<p class="my-4">
								<b style={{fontWeight: '600'}}>Credits:</b> 30
							</p>
							<div class="" style={{height: '40px'}}>
								<table style={{width: '100%', height: '100%'}}>
									<tr>
										<td class="text-right view-program">View Program</td>
									</tr>
								</table>
							</div>
						</div>
						<div class="col-md-3 prog_results">
							<h6 class="underline" style={{color: '#555', fontSize: '18px'}}>Master of Arts<br/><span class="underline" style={{color: '#076ea5', fontWeight: '600'}}>in Interdisciplinary Studies Adult Education</span></h6>
							<p class="my-4" style={{fontSize: '14px', borderTop: '#888 1px solid'}}>Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to</p>
							<p class="my-4">
								<b style={{fontWeight: '600'}}>Credits:</b> 30
							</p>
							<div class="" style={{height: '40px'}}>
								<table style={{width: '100%', height: '100%'}}>
									<tr>
										<td class="text-right view-program">View Program</td>
									</tr>
								</table>
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