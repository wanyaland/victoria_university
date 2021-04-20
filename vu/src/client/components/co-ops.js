import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';

class Coops extends Component{
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
					<ol class="accounts col-md-5">
						<li class="breadcrumb-item">Future Students</li>
						<li class="breadcrumb-item">Co-Op Students</li>
						<li class="breadcrumb-item">Employers</li>
						<li class="breadcrumb-item">Awards And Contests</li>
						<li class="breadcrumb-item">Co-OP Team</li>
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
			<h2>CO-OP: A world of opportunities</h2>
		</div>
	</div>
</section>
<section class="w3-gallery">
	<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4 bdr-bottom">
			<div class="port-text-cards text-left mt-5 mb-3 col-lg-4" style={{backgroundColor:'#0077b5'}}>
				<li class="btn active filter-button" data-filter="all" style={{color:'#fff'}}>Our Co-op Program</li>
			</div>
			<br />

			<div class="row">
				<div class="col-md-12 filter graphic">
					<div class="each-item">
						<h4>CO-OPERATIVE EDUCATION PROGRAM </h4>
							<p>This is Victoria’s Work-Ready Talent Advantage. But what is it?
								Co-operative Education (co-op) is a work experience program that gives post-secondary students the opportunity to apply their academic learning through regular, real-world work terms throughout their undergraduate degree. We achieve this by integrating work into every student’s learning, something we call Work-Integrated Learning Model (WIL). Work-Integrated Learning is a model and process of curricular experiential education which formally and intentionally integrates a student’s academic studies within a workplace or practice setting. WIL experiences include an engaged partnership of at least: an academic institution, a host organization and a student. WIL can occur at the course or program level and includes the development of learning outcomes related to employability, personal agency and life-long learning.
								Forget everything you thought you knew about student internships. Our Co-op program adds up to almost three years of work experience to your résumé. With access to a big network of Co-op jobs around the country, you’ll be able to try out exciting careers and build a world-class professional network.
								</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3-gallery">
	<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4 bdr-bottom">
			<div class="port-text-cards text-left mt-5 mb-3 col-lg-4" style={{backgroundColor:'#0077b5'}}>
				<li class="btn active filter-button" data-filter="all" style={{color:'#fff'}}>Top four reasons to join a CO-OP program:</li>
			</div>
			<br />

			<div class="row">
				<div class="col-md-12 filter graphic photo">
					<div class="each-item">
						<li>Student experience and our research portfolio are built around our academic core</li>
						<li>Our research is high-quality, interdisciplinary and benchmarks internationally</li>
						<li>World-class entrepreneurial skills development is woven across all academic programs</li>
						<li>We take calculated risks to nurture ideas into real-world application</li>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3-gallery">
	<div class="porfolio-inf py-5" >
		<div class="container pt-lg-5 pb-lg-4 bdr-bottom">
			<div class="port-text-cards text-left mt-5 mb-3 col-lg-4 " style={{backgroundcolor:'#0077b'}}>
				<li class="btn active filter-button" data-filter="all" style={{color:'#fff'}}>How Co-Op Works</li>
			</div>
			<br />
			<div class="row">
				<div class="col-md-12 filter photo">
					<div class="each-item">
						<p>In co-op programs, you’ll typically alternate between time as a full-time student and time as a full-time, employee building relevant skills through our network of 103+ employers. With the help of our career resources and student advisors located across the country, you’ll be more than ready to take on your first co-op job. Once on the job, you’ll learn to adapt to different workplaces, build your skills through our professional development courses, and develop a fresh appreciation for your classroom studies. As you progress through your experiential learning sessions with real-world work, your résumé, knowledge, and confidence will grow, preparing you for an exciting career.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3-gallery">
	<div class="porfolio-inf py-5">
		<div class="container pt-lg-5 pb-lg-4 bdr-bottom">
			<div class="port-text-cards text-left mt-5 mb-3 col-lg-4 " style={{backgroundColor:'#0077b5'}}>
				<li class="btn active filter-button" data-filter="all" style={{color:'#fff;'}}>How does it Work</li>
			</div>
			<br />

			<div class="row">
				<div class="col-md-12 filter photo justify-content-center">
					<div class="each-item">
						<a href="home"><img class="port-image img-fuild" src="assets/images/reserved.jpg" alt="" /></a>

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

export default Coops;