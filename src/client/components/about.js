import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from "react-router-dom";

class AboutUs extends Component{
	componentDidMount(){
		/* window.onscroll = function() {stickyMenu()};
	
		var header = document.getElementById("myHeader2");
		var sticky = header.offsetTop;
		
		function stickyMenu() {
		  if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		  } else {
			header.classList.remove("sticky");
		  }
		} */
	}
	change_icon(id, id2) {
		var element = document.getElementById(id);
		element.classList.add("hider");
		var element2 = document.getElementById(id2);
		element2.classList.add("block");
	 }
	 change_icon2(id, id2){
		var element = document.getElementById(id);
		element.classList.remove("hider");
		var element2 = document.getElementById(id2);
		element2.classList.remove("block");
	 }
	 route(){
		window.location.href = "/";
	 }
    render(){
        return(
            <React.Fragment>
			<BreadNavBar />
			<NavBar />
			<section className="w3l-apply-6">
				<div className=""  style={{}}>
					<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
						<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="d-block w-100" src="assets/images/abt.JPG" alt="First slide" style={{filter: 'brightness(60%)'}}/>
								</div>
								<div className='banner-caption'>&nbsp;About VU</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="content2">
<section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
					<Link to="/"><span className="underline" style={{color: "#EEE"}}>
						Home 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ About</span>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <section className="w3l-apply-6">
	<div className="apply-info py-5" style={{background: 'url(../assets/images/abt.JPG) center'}}>
		<div className="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
			<div className="">
					<h4 className="text-left"><span style={{borderLeft: '8px #D4484A solid'}}>&nbsp;About VU</span></h4>
				</div>
			<div className="apply-grids-info row">
				<div className="row mt-lg-5 mt-4 col-md-12">
					<div className="appyl-sub-icon-info text-center">
						<p>
							Victoria University is home to opportunities. It’s where you’ll leave behind what’s familiar and step into a world of endless possibilities. Who you are, what you want, where you’ll go, and how you can impact your community, country and the world are yours to discover. We are Uganda’s most innovative university, you’ll be encouraged to take risks and challenge the status quo, to pursue an idea and disrupt industries.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}
<section className="w3l-top-header-content" id="" style={{zIndex: '1'}}>
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '10px 0px 10px 0px', backgroundColor: '#EEE'}}>
			<div className="container-fluid">
				<div className="row">
					<ol className="accounts col-md-12 justify-content-center">
						<li className="breadcrumb-item" style={{color: '#000'}} title="Strategic Plan"><a href="#strategy"><span className="fa fa-gears about-sub-items"></span><span className="titled4" style={{color: '#0077b5'}}><span className="text-hider">Strategic Plan</span></span></a></li>
						<li className="breadcrumb-item" style={{color: '#000'}} title="About Us"><a href="#about"><span className="fa fa-dot-circle-o about-sub-items"></span><span className="titled4" style={{color: '#0077b5'}}><span className="text-hider">About Us</span></span></a></li>
						<li className="breadcrumb-item" style={{color: '#000'}} title="VU at a Glance"><a href="#glance"><span className="fa fa-photo about-sub-items"></span><span className="titled4" style={{color: '#0077b5'}}><span className="text-hider">VU at a Glance</span></span></a></li>
						<li className="breadcrumb-item" style={{color: '#000'}} title="Accreditation"><a href="#credit"><span className="fa fa-cubes about-sub-items"></span><span className="titled4" style={{color: '#0077b5'}}><span className="text-hider">Accreditation</span></span></a></li>
						<li className="breadcrumb-item" style={{color: '#000'}} title="RISE - 5 year IT Strategy"><a href="#rise"><span className="fa fa-line-chart about-sub-items"></span><span className="titled4" style={{color: '#0077b5'}}><span className="text-hider">RISE - 5 year IT Strategy</span></span></a></li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6" id="strategy">
	  <div className="ab-content-6-mian py-5">
			<div className="container py-lg-5">
				<div className="welcome-grids row">
					<div className="welcome-image">
						<img src="assets/images/about_strategy.jpg" className="img-fluid" alt="" />
					</div>
				</div>	
			</div>
		</div>
</section>
<section className="w3l-wecome-content-6" id="about">
	  <div className="ab-content-6-mian py-5">
			 <div className="container py-lg-5">
					<div className="welcome-grids row">
							<div className="col-lg-12 mb-lg-0 mb-5">
								<h6>About Us</h6>
								<h3 className="hny-title" style={{color: '#0077b5'}}>
									Victoria University
									</h3>
								<p className="my-4">Victoria University is the leading University in Uganda and East Africa when it comes to offering Experiential and Work Integrated Learning. We are determined to produce graduates with employable skills and capacity to creatively employ themselves. We do this by providing meaningful, hands-on workplace experience to enrich theoretical learning. Our work integrated learning program is enabling students to complete a program of three years with at least 2-3 years’ work experience.</p>
								<p className="mb-4"></p>
								<br/>
							</div>
							{/* <div className="col-lg-6 welcome-image">
									<div className="" style={{width: '100%', border:'#CCC 10px solid', backgroundColor: '#FFF'}}>
										<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
										 	<li className="w3-display-container"><Link to="/governance"><span className="fa fa-rocket"></span>&nbsp;&nbsp;&nbsp;Missions And Mandate <span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-angle-right"></span></span></Link></li>
											<li className="w3-display-container"><Link to="/governance"><span className="fa fa-file"></span>&nbsp;&nbsp;&nbsp;University Documents <span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-angle-right"></span></span></Link></li>
											<li className="w3-display-container"><Link to="/governance"><span className="fa fa fa-folder-open"></span>&nbsp;&nbsp;&nbsp;Policy Manuals <span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-angle-right"></span></span></Link>
											</li>
											<li className="w3-display-container"><Link to="/governance"><span className="fa fa-lock"></span>&nbsp;&nbsp;&nbsp;Privacy - Brief Summary <span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-angle-right"></span></span></Link></li>
											<li className="w3-display-container"><Link to="/governance"><span className="fa fa-gear"></span>&nbsp;&nbsp;&nbsp;Values <span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-angle-right"></span></span></Link></li>
											<li className="w3-display-container"><Link to="/governance"><span className="fa fa-book"></span>&nbsp;&nbsp;&nbsp;Service Standards <span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-angle-right"></span></span></Link></li>
											<li className="w3-display-container"><Link to="/governance"><span className="fa fa-book"></span>&nbsp;&nbsp;&nbsp;Key Facts<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-angle-right"></span></span></Link></li>
										</ul>
									</div>
							</div> */}
						</div>
				 </div>
			</div>
</section>
<section className="w3l-specification-6" id="glance">
	<div className="specification-content py-5">
		<div className="container py-lg-5" style={{maxWidth: '100%'}}>
			<div className="mission-grids-info row" style={{display: 'flex'}}>
				{/* <div className="mission-gd-right col-lg-4 pl-lg-4" style={{backgroundColor: '#0077b5', color: '#FFF'}}>
					<div className="justify-content-end" style={{color: '#fff;'}}>
						<br/>
						<p style={{color: '#fff'}}>Serves Over 40,000 Students</p>
						<p style={{color: '#fff'}}>Employs Over 1000 Faculty and Staff Members</p>
						<p style={{color: '#fff'}}>VU Offers Over 850 Courses</p>
						<p style={{color: '#fff'}}>Maintains Over 350 Collaborative agreements</p>
						<p style={{color: '#fff'}}>Additional Student Facts VU students come from every  Ugandan province and territory and 87 countries worldwide.</p>
						<p style={{color: '#fff'}}>The average undergraduate is 27; the average graduate student, 35.73 per cent work while they study.</p>
						<p style={{color: '#fff'}}>Percentage of students who are women: 65% (Undergraduate) &amp; 74% (Graduate)</p>
					</div>
				</div> */}
				<div className="mission-gd-right col-lg-12 pl-lg-4" style={{backgroundColor: '#E5E5E5', padding: '40px 20px 40px 20px'}}>
					<h3 className="hny-title text-center" style={{color: '#0077b5'}}>VU at a Glance</h3>
					<p>
						Victoria University is one of the leading universities in Uganda and stands out as a center for academic excellence. It offers a fresh and intellectually stimulating environment that nurtures critical thinkers.The University was opened in August 2013 and has the capacity, the facilities and determination to revitalize higher education in Uganda and in the region. We are committed to playing a leading role in bringing and developing high quality education, student centered learning opportunities based in standards of excellence that are unique, innovative and difficult to match.
					</p>
					<br/>
					{/* <p className="text-center">
						<Link className="logo-2" to="/governing" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
							<span className="lohny-2"><span id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Learn More About Victoria University</span>
						</Link>	
					</p> */}
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-specification-6" id="unique">
	<div className="specification-content py-5">
		<div className="container py-lg-5">
			<h3 className="hny-title text-center" style={{color: '#0077b5'}}>What Makes VU Unique</h3>
			<div className="mission-grids-info row">
				<div className="mission-gd-right col-lg-6 pl-lg-12 text-center">
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Students graduate with 2-3 year work experience</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Experiencial learning</p>
                    {/* <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Writing exams</p> */}
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Internship and Job placement</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Best in offering online classes</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Located in the heart of Kampala</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Diverse culture </p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-12 text-center">
					<img src='assets/images/grad.jpg' className='img-fluid' alt='unique' />
				</div>
				{/* <div className="mission-gd-right col-lg-6 pl-lg-4">
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit..</p>
				</div> */}
			</div>
			{/* <p className="text-center">
				<Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
						<span className="lohny-2"><span id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Learn More About VU Accreditation</span>
				</Link>	
			</p> */}
        </div>
	</div>
</section>
<section className="w3l-specification-6" id="credit">
	<div className="specification-content py-5">
		<div className="container py-lg-5">
			<h3 className="hny-title text-center" style={{color: '#0077b5'}}>Accreditation</h3>
			<div className="mission-grids-info row">
				<div className="mission-gd-right col-lg-12 pl-lg-12 text-center">
					<p>Victoria University is acredited by the National Council For Higher education</p>
				</div>
				{/* <div className="mission-gd-right col-lg-6 pl-lg-4">
						<p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit..</p>
				</div> */}
			</div>
			{/* <p className="text-center">
				<Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
						<span className="lohny-2"><span id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040',color: '#FFF'}}></span>&nbsp;</span><span className="underline">Learn More About VU Accreditation</span>
				</Link>	
			</p> */}
        </div>
	</div>
</section>
</section>
<Footer />
            </React.Fragment>   
        )
    }
}

export default AboutUs;