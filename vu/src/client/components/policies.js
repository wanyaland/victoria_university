import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navBar';
import Footer from './footer';

class Policies extends Component{
    render(){
        return(
            <React.Fragment>
			<BreadNavBar />
			<NavBar />
                <section class="w3l-top-header-content" style={{marginTop: '-20px'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px'}}>
			<div class="container-fluid">
				<div class="row">
					<ol class="accounts col-md-2">
						<li class="breadcrumb-item">Home / Policies</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<section class="w3-gallery">
	<div class="porfolio-inf py-5">
	
		<div class="container">
			<h2>Policies And Procedures</h2>
		</div>
	</div>
</section>
<section class="w3-gallery">
	<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4 ">
		
			<div class="row">
				<div class="col-md-12 filter graphic">
					<div class="each-item">
							<p>This website provides a central location for approved policies and procedures currently in effect. The policies and procedures available here, taken together, form the university's policy and procedure manual.Questions regarding content of a particular policy should be directed to the policy sponsor, as noted in the policy. Questions regarding the manual should be directed to the Policy Coordinator.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3-gallery">
	<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4">
			<div class="port-text-cards text-left mt-5 mb-3 col-lg-4" style={{backgroundColor:'#0077b5'}}>
				<li class="btn active filter-button" data-filter="all" style={{color:'#fff'}}>Policy and Procedures Manuals</li>
			</div>
			<br />

			<div class="row">
				<div class="col-md-12 filter graphic photo">
					<div class="each-item">
						<li class="lister"><a href="assets/docs/Sports scholarships policy final.pdf" download="assets/docs/Sports scholarships policy final.pdf">Sports Scholarships Policy</a></li>
						<li class="lister"><a href="assets/docs/Sports scholarships policy final.pdf" download="">Sports Scholarships Policy</a></li>
						<li class="lister"><a href="assets/docs/Sports scholarships policy final.pdf" download="">Sports Scholarships Policy</a></li>
						<li class="lister"><a href="assets/docs/Sports scholarships policy final.pdf" download="">Sports Scholarships Policy</a></li>
					</div>
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

export default Policies;