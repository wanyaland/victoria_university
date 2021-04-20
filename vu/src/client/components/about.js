import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navBar';
import Footer from './footer';
import { Link } from "react-router-dom";

class AboutUs extends Component{
    render(){
        return(
            <React.Fragment>
			<BreadNavBar />
			<NavBar />
                <section class="w3l-top-header-content" style={{marginTop: '-20px;'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px'}}>
			<div class="container-fluid">
				<div class="row">
					<ol class="accounts col-md-2">
						<li class="breadcrumb-item">Home / About</li>
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
					<h4 class="text-center"><span style={{borderLeft: '8px #D4484A solid'}}>&nbsp;About VU</span></h4>
				</div>
			<div class="apply-grids-info row">
					<div class="row mt-lg-5 mt-4">
						<div class="appyl-sub-icon-info text-center">
							<p>Victoria University is home to opportunities. It’s where you’ll leave behind what’s familiar and step into a world of endless possibilities. Who you are, what you want, where you’ll go, and how you can impact your community, country and the world are yours to discover. We are Uganda’s most innovative university, you’ll be encouraged to take risks and challenge the status quo, to pursue an idea and disrupt industries. Whether you launch your own start-up and grow it into a vibrant company, write a best-selling book, or pursue a new career through our Co-operative (Co-op) Education Program – call it Experiential Learning (EL), we want you to think of an idea, grow it, solve problems and impact the world. So come prepared to learn and leave prepared to succeed, that is our promise to you. What is yours? And Where will you go from here?</p>
						</div>
					</div>
				
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	  <div class="ab-content-6-mian py-5">
			<div class="container py-lg-5">
				<div class="welcome-grids row">
					<div class="welcome-image">
						<img src="assets/images/about_strategy.png" class="img-fluid" alt="" />
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
								<h6>About Us</h6>
								<h3 class="hny-title">
									Victoria University
									</h3>
								<p class="my-4">We are setting the bar for co-op education and experiential learning in Uganda because we saw a need for experienced, university-educated graduates. We encourage dreamers and entrepreneurs because we believe that cultivating creativity is key to global progress. We value diversity and inclusivity because we know we’re better, brighter, and stronger together. Some people call us innovative, but that’s just who we are. As we welcome you to Victoria University, we encourage you to be yourself, work hard, and reap the rewards. We’ll do the same to support you as our student and partner in impacting society.</p>
								<p class="mb-4"></p>
								<br/>
							</div>
							<div class="col-lg-6 welcome-image" style={{backgroundColor:'#CCC'}}>
								<br/>
									<div class="" style={{width: '100%', backgroundColor:'#fff'}}>
										<ul class="w3-ul w3-card-4">
										 	<li class="w3-display-container"><span class="fa fa-rocket"></span>&nbsp;&nbsp;&nbsp;Missions And Mandate <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-angle-right"></span></span></li>
											<li class="w3-display-container"><span class="fa fa-file-word-o"></span>&nbsp;&nbsp;&nbsp;University Documents <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-angle-right"></span></span></li>
											<li class="w3-display-container"><Link to='./policies'><span class="fa fa fa-folder-open"></span>&nbsp;&nbsp;&nbsp;Policy Manuals <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-angle-right"></span></span></Link></li>
											<li class="w3-display-container"><span class="fa fa-lock"></span>&nbsp;&nbsp;&nbsp;Privacy - Brief Summary <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-angle-right"></span></span></li>
											<li class="w3-display-container"><span class="fa fa-gear"></span>&nbsp;&nbsp;&nbsp;Values <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-angle-right"></span></span></li>
											<li class="w3-display-container"><span class="fa fa-book"></span>&nbsp;&nbsp;&nbsp;Service Standards <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-angle-right"></span></span></li>
										</ul>
									</div>
							</div>	
						</div>
				 </div>
			</div>
</section>
<section class="w3l-specification-6">
	<div class="specification-content py-5">
		<div class="container py-lg-5">
			<div class="mission-grids-info row">
				<div class="mission-gd-right col-lg-4 pl-lg-4" style={{backgroundColor: '#0080ff'}}>
					<div class="justify-content-end" style={{color: '#fff;'}}>
						<br/>
						<p style={{color: '#fff;'}}>Serves Over 40,000 Students</p>
						<p style={{color: '#fff;'}}>Employs Over 1000 Faculty and Staff Members</p>
						<p style={{color: '#fff;'}}>VU Offers Over 850 Courses</p>
						<p style={{color: '#fff;'}}>Maintains Over 350 Collaborative agreements</p>
						<p style={{color: '#fff;'}}>Additional Student Facts VU students come from every Canadian province and territory and 87 countries worldwide.</p>
						<p style={{color: '#fff;'}}>The average undergraduate is 27; the average graduate student, 35.73 per cent work while they study.</p>
						<p style={{color: '#fff;'}}>Percentage of students who are women: 65% (Undergraduate) &amp; 74% (Graduate)</p>
					</div>
				</div>
				<div class="mission-gd-right col-lg-8 pl-lg-4" style={{backgroundColor: '#E5E5E5'}}>
						<h3 class="hny-title">VU at a Glance</h3>
						<p>Victoria University is one of the leading universities in Uganda and stands out as a center for academic excellence. It offers a fresh and intellectually stimulating environment that nurtures critical thinkers.The University was opened in August 2013 and has the capacity, the facilities and determination to revitalize higher education in Uganda and in the region. We are committed to playing a leading role in bringing and developing high quality education, student centered learning opportunities based in standards of excellence that are unique, innovative and difficult to match.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-content-5">
	  <div class="content-5-main">
			 <div class="container">
					 <div class="content-info-in row">
							 <div class="content-gd col-lg-6">
									 <h3 class="hny-title two">Vision</h3>
							 </div>
							 <div class="content-gd col-lg-6">
									<p>To be a world class University for transformational education</p>
							 </div>
							
					 </div>
				 	<div class="content-info-in row">
							 <div class="content-gd col-lg-6">
									 <h3 class="hny-title two">Mission</h3>
							 </div>
							 <div class="content-gd col-lg-6">
									<p>To provide a dynamic environment for learning, innovation, research and community engagement</p>
							 </div>
							
					 </div>
				 </div>
			 </div>
</section>
<section class="w3l-specification-6">
	<div class="specification-content py-5">
		<div class="container py-lg-5">
			<h3 class="hny-title text-center">Accreditation</h3>
			<div class="mission-grids-info row">
				<div class="mission-gd-right col-lg-6 pl-lg-4">
					<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit..</p>
			</div>
				<div class="mission-gd-right col-lg-6 pl-lg-4">
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit..</p>
				</div>
			</div>
			<h4 class="hny-title text-center" style={{color: '#0080ff'}}>Learn More About VU Accreditation</h4>
        </div>
	</div>
</section>
<Footer />
            </React.Fragment>   
        )
    }
}

export default AboutUs;