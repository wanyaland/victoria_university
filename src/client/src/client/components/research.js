import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import ResNav from './res_nav'
import { Link } from 'react-router-dom';

class Research extends Component {
    componentDidMount(){
        var coll = document.getElementsByClassName("collapsible");
		var i;
		
		for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("activer");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
			content.style.maxHeight = null;
			} else {
			content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
		}
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
		console.log('HI4')
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
										<img className="d-block w-100" src="assets/images/lib.JPG" alt="First slide" style={{filter: 'brightness(60%)'}}/>
									</div>
									<div className='banner-caption'>&nbsp;Research</div>
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
					<span style={{color: '#EEE'}}>/ Research at VU</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="py-lg-5" >
			<div className="justify-content-center"  style={{display: 'flex'}}>
				<ResNav />
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
						<h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Overview</h6>
						<br/>
						<p className="my-4">
						Victoria University education and training is a pathway to success for our students, partners and other stakeholders. Our partnership with industry is a rich platform offering invaluable insights on the breadth of research areas ingrained across the faculties of Business and Management, Humanities and Social Sciences, Education, Science and Technology as well as Health Sciences.</p>
						<p className="my-4">Our research tackles a range of program areas, societal disciplines, a variety of subject areas across multiple specialties that are global and local in nature. Our research scholars are determined to push the boundaries interrogating the way people think and behave, while challenging conventions.</p>
						<p className="my-4">To unlock leading edge research from Victoria University, browse the VU site to find research supervision opportunities, projects, student research and relevant publications.
						</p>
						<h4 style={{color: '#0077b5'}}>Work with Victoria University Research</h4>
						<p className="my-4">
						The 21st Century posits different ways of doing things. There are various challenges that will need both holistic and specific approaches. The Covid-19 pandemic has affected every social fabric of our societies locally and abroad ranging from altering the way people relate to the way they trade.Victoria University research brings together the greatest minds in all disciplines to work with your organization for the benefit of all. Our team of researchers are ready to find new opportunities and insights that will help you solve issues within your organization, be it a start-up, community groups, the environment and across all sectors of the economy</p><p className="my-4">We invite you to take advantage of our robust research ecosystem including our custom-built paradigms, latest industry-university collaborative research, technologies among others.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="col-lg-12 welcome-image">
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Contact Information<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Learn how you can</p>
                                        <p className="my-4">support our efforts &nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span className="fa fa-external-link"></span></a></p>
                                        <p className="my-4">to remove barriers to university-level studies and help students succeed.</p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                        </ul>
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

export default Research;