import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class CovidNotice extends Component{
    render(){
        return(
            <React.Fragment>
                <BreadNavBar/>
                <NavBar />
                <section className="w3l-apply-6">
	<div className="apply-info py-5">
		<div className="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
            <br/>{/* 
			<div className="">
					<h4 className="text-left" style={{textTransform: 'capitalize'}}>ALUMNI</h4>
			</div> */}
			{/* <div style={{width: '10%', border: '#f89422 2px solid', display: 'subgrid'}} className="text-left"></div> */}
			{/* 
            <p className="text-left">VU’s 2020 Volunteer Service Award Recipient</p>
			<br/>
            <button className="btn_link">Read More</button> */}
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<div className="apply-grids-info">
				<div className="mt-lg-5 mt-4 justify-content-center">
					<div className="appyl-sub-icon-info text-center">
					<div className="">
					<h4 className="text-center"><span style={{borderLeft: '8px #D4484A solid'}}>&nbsp;COVID-19 Updates and Guidelines</span></h4>
				</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
                <section className="w3l-top-header-content">
    <div className="hny-top-menu">
        <div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
            <div className="container-fluid">
                <div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Covid-19 Notice</span>
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
                    <p className="my-4" style={{fontSize: '24px', fontWeight: '400', color: '#0077b5'}}>Victoria University's COVID-19 Response</p>
                    <p className="my-4" style={{fontSize: '18px'}}>Victoria University (VU) is open for business and continues to serve learners amidst the global COVID-19 pandemic. As Uganda’s leading technologically-enabled university, we have been able to teach throughout the total and partial lockdowns, using our state-of-the-art online learning management system, www.vclass.ac.
                    </p>
                    <br/>
                    <br/>
                    <img src="assets/images/covid.jpg" className="img-fluid" alt="" />
                    <br/>
                    <br/>
                    {/* <p className="my-4" style={{fontSize: '18px'}}>
                    With the evolving COVID-19 global pandemic we are taking measures to protect learners and team members. We will regularly update information on this page to keep you apprised of changes.
                    </p> */}
                    <p className="my-4" style={{fontSize: '24px', fontWeight: '400', color: '#0077b5'}}>SOPs</p>
                    <p className="my-4">Following guidance from the Ministry of Health and the National Council for Higher Education (NCHE), we have implemented the Standard Operating Procedures (SOPs) to facilitate physical operations including classes.</p>
                    {/* <p className="my-4">This will save lives.</p>
                    <p className="my-4">Be kind and patient. We must stick together.</p> */}
                    <p className="my-4" style={{fontSize: '24px', fontWeight: '400', color: '#0077b5'}}>Extended Classroom</p>
                    <p className="my-4">As the fastest growing university in the region with over 700% growth in student enrollment, we have extended our classrooms from the main office at Victoria Towers to Market Plaza. Both locations are located within the Central Business District.</p>
                    <p className="my-4" style={{fontSize: '24px', fontWeight: '400', color: '#0077b5'}}>Vaccination</p>
                    <p className="my-4">We were the first university to rigorously implement mandatory COVID-19 vaccination for all our students and staff. As a result, 100% of our all staff are vaccinated and every new student who joins us has a chance to vaccinate at the university premises.</p>
                    <p className="my-4">The Ministry of Health has been generous enough to gazette our university premises on Jinja Road as a vaccination center, not only for our students, but for the general public as well.</p>
                    <p className="my-4" style={{fontSize: '24px', fontWeight: '400', color: '#0077b5'}}>Digital First</p>
                    <p className="my-4">As the economy is re-opened in a staggered manner, universities have been urged to implement emergency online and distance learning (ODEL). Victoria University scored over 80% in the implementation of ODEL, in an assessment by NCHE.</p>
                    <p className="my-4">The switch to online operations has been extended beyond the classroom. We also have implemented an efficient online application and online payments system.</p>
                    <p className="my-4" style={{fontSize: '28px', fontWeight: '400', color: '#0077b5'}}>Helpful links</p>
                    <p className="my-4">Follow these sites for up-to-date information and advice:</p>
                    <p className="my-2" style={{color: '#0077b5'}}>&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;<a href="https://www.health.go.ug/covid/" className="underline" style={{color: '#0077b5'}} target="_blank" rel="noreferrer">Government of Uganda COVID-19 information</a></p>
                    <p className="my-2">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;<a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" className="underline" style={{color: '#0077b5'}} target="_blank" rel="noreferrer">World Health Organization COVID-19 information</a></p>
                    <p className="my-2">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;<a href="https://vclass.ac/" className="underline" style={{color: '#0077b5'}} target="_blank" rel="noreferrer">VClass (www.vclass.ac)</a></p>
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

export default CovidNotice