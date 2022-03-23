import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import LabNav from './lab_nav'
import { Link } from 'react-router-dom';
import LibBanner from './lib_banner';

class Electric extends Component {
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
				<LibBanner />
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
                <span style={{color: '#EEE'}}>/ Electronic Services</span>
                </div>
            </div>
		</div>
	</div>
</section>
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="py-lg-5" >
			<div className="justify-content-center"  style={{display: 'flex'}}>
				<LabNav />
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Electronic Services</h6>
						<br/>
                        <p className="my-4">The library subscribes to e-books and e-journals which can be accessed from all Library computer labs and on personal laptops even off campus using the My Library At My Finger Tips (Myloft) Account a students get after being registered in the Library.
                        </p>
						<p className="my-4">
						<ul style={{listStyle: 'none'}}>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">E-Services.</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Library Catalogue</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Electronic Journals & Databases</span></li>
						</ul>
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

export default Electric;