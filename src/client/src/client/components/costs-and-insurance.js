import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';

class WilCosts extends Component{
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section class="w3l-top-header-content">
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class=""  style={{color: '#EEE'}}>
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
<section class="w3l-team-main">
	<div class="team py-5">
		<div class="py-lg-5" >
			<div class="justify-content-center"  style={{display: 'flex'}}s>
				<div class="col-lg-3 with_shadow">
					<div class="sidenavd">
                        <WilNav />
                    </div>
				</div>
				<div class="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
					<div class="search_results">
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>How WIL works</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} class="text-left"></div>
                        <br/><br/>
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>What does WIL cost?</b></h6>
						<p class="my-4">Victoria University recognises the value of WIL experiences for its students, and has Victoria University developed policies to ensure placements comply with the Uganda's working act</p>
						<p class="my-4">
							As WIL is aligned with the curriculum, there is generally no expectation that the student will be remunerated, in fact, the majority of WIL placements are unpaid.
						</p>
						<p class="my-4">The cost to the WIL host will vary depending on the nature of the project and the resources needed to achieve the project goals. Time and expertise of its staff, to help guide and mentor the WIL student to achieve the project outcomes, is the main outlay of a host organisation.</p>
                        <p class="my-4">
                            If your organisation would like a student quickly, is long or short term, or is for a specific purpose not aligned to curriculum learning outcomes, your opportunity may be better considered as paid work. The Careers Service can help with advertising employment opportunities to our students.
                        </p>
                        <hr class="text-center" style={{color: '#000', width: '90%'}} />
                        <h6 style={{color: '#076ea5', fontSize: '34px'}}><b>What about insurance?</b></h6>
                        <p class="my-4">
						The University has insurance to cover students undertaking professional experience including while undertaking WIL that is a course requirement and unpaid. The WIL experience must form part of the curriculum and be assessed by a course coordinator.
                        </p>
                        <p class="my-4">
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