import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import LabNav from './lab_nav'
import { Link } from 'react-router-dom';

class Offcamp extends Component {
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
                <span style={{color: '#EEE'}}>/ Off Campus Resources</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Click Below</h6>
						<br/>
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}><br/><h6 className="underline" style={{fontSize: '22px', color: '#0077b5'}}><a href="https://app.myloft.xyz/user/login?institute=ckenwkzqs5kvq09387eesvtje" target="_blank" rel="noreferrer" onClick={this.toVclass} style={{color: '#0077b5'}}>Click here to view off campus E-resources <span className="fa fa-external-link"></span></a></h6></p>
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

export default Offcamp;