import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import LabNav from './lab_nav'
import { Link } from 'react-router-dom';

class Library extends Component {
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
										<div className='banner-caption'>Library</div>
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
                <div className="" style={{color: '#EEE'}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
                Victoria University 
                </span></Link>&nbsp;/&nbsp;
                <Link to="/library"><span className="underline" style={{color: "#EEE"}}>
                Library
                </span></Link>&nbsp;
                <span style={{color: '#EEE'}}>/ About Library</span>
                </div>
            </div>
		</div>
	</div>
</section>
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="py-lg-5">
			<div className="justify-content-center"  style={{display: 'flex'}}>
				<LabNav />
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Library</h6>
						<br/>
                        <p className="my-4">Victoria University Library (VULIB), provides a range of services to support the learning, teaching, and research functions of the University including access to extensive information resources, a wide range of flexible learning environments, and the support you need to achieve your learning goals, enhance your research or develop new skills.</p>
                        <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>VULIB as an outstanding library</p>
                        With a world of knowledge and expertise at your fingertips, you’ll find the Library’s place at the heart of your university experience. It’s a place to explore new horizons, a place to discover your passion, and a place to respond to world-challenges. We continually invest to create the right environment for you, and whatever your level of study or area of research, we're here to help you succeed.If you choose VULIB, you’ll have access to rich resources, outstanding facilities and support – and the freedom to do things your own way.
                    </p>
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

export default Library;