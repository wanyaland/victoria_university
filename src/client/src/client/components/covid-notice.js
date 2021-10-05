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
					<h4 className="text-center"><span style={{borderLeft: '8px #D4484A solid'}}>&nbsp;Information on COVID-19</span></h4>
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
                    <p className="my-4" style={{fontSize: '18px'}}>Victoria University (VU) is open for business and continues to serve learners. As a digital university, we can help you learn and complete your studies from home. You can apply anytime and many of our courses start on the first of every month.
                    </p>
                    <p className="my-4" style={{fontSize: '18px'}}>
                    With the evolving COVID-19 global pandemic we are taking measures to protect learners and team members. We will regularly update information on this page to keep you apprised of changes.
                    </p>
                    <p className="my-4" style={{fontSize: '24px', fontWeight: '400', color: '#0077b5'}}>Please take care</p>
                    <p className="my-4">Please follow the advice and guidance of public officials in your community.</p>
                    <p className="my-4">This will save lives.</p>
                    <p className="my-4">Be kind and patient. We must stick together.</p>
                    <p className="my-4" style={{fontSize: '24px', fontWeight: '400', color: '#0077b5'}}>Service changes</p>
                    <p className="my-4">While our university remains open to support you and classes will continue as usual, we are adjusting to help keep our AU team members safe and, wherever possible, working from home. </p>
                    <p className="my-4">Reaching us by email is the most efficient method. Email contacts are listed in the Quick Reference section of the Learner Q&A. </p>
                    <p className="my-4" style={{fontSize: '28px', fontWeight: '400', color: '#0077b5'}}>Helpful links</p>
                    <p className="my-4">Follow these sites for up-to-date information and advice:</p>
                    <p className="my-2" style={{color: '#0077b5'}}>&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;<a href="https://www.health.go.ug/covid/" className="underline" style={{color: '#0077b5'}} target="_blank" rel="noreferrer">Government of Uganda COVID-19 information</a></p>
                    <p className="my-2">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;<a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" className="underline" style={{color: '#0077b5'}} target="_blank" rel="noreferrer">World Health Organization COVID-19 information</a></p>
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