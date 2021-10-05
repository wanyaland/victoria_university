import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class WilCosts extends Component{
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
					<span style={{color: '#EEE'}}>/ Costs and Insurance</span>
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
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>How WIL works</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
                        <br/><br/>
						<p className="my-4" style={{fontSize: '30px', color: '#0077b5'}}><b>What does WIL cost?</b></p>
						<p className="my-4">Victoria University recognises the value of WIL experiences for its students, and has Victoria University developed policies to ensure placements comply with the Uganda's working act</p>
						<p className="my-4">
							As WIL is aligned with the curriculum, there is generally no expectation that the student will be remunerated, in fact, the majority of WIL placements are unpaid.
						</p>
						<p className="my-4">The cost to the WIL host will vary depending on the nature of the project and the resources needed to achieve the project goals. Time and expertise of its staff, to help guide and mentor the WIL student to achieve the project outcomes, is the main outlay of a host organisation.</p>
                        <p className="my-4">
                            If your organisation would like a student quickly, is long or short term, or is for a specific purpose not aligned to curriculum learning outcomes, your opportunity may be better considered as paid work. The Careers Service can help with advertising employment opportunities to our students.
                        </p>
                        <hr className="text-center" style={{color: '#000', width: '90%'}} />
                        <p className="my-4" style={{fontSize: '34px', color: '#0077b5'}}><b>What about insurance?</b></p>
                        <p className="my-4">
						The University has insurance to cover students undertaking professional experience including while undertaking WIL that is a course requirement and unpaid. The WIL experience must form part of the curriculum and be assessed by a course coordinator.
                        </p>
                        <p className="my-4">
						The University may provide the host organisation with a copy of the University's certificate of currency for a relevant insurance policy.
                        </p>
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

export default WilCosts;