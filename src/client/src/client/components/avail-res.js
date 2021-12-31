import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import ResNav from './res_nav'
import { Link } from 'react-router-dom';

class AvailRes extends Component {
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
                <Link to="/research"><span className="underline" style={{color: "#EEE"}}>
                Research At VU 
                </span></Link>&nbsp;
                <span style={{color: '#EEE'}}>/ Available Research Opportunities</span>
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
						<h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Available Research Opportunities and Options</h6>
						<br/>
						<p className="my-4">There are abundant research opportunities for all kinds of disciplines at Victoria University. Within Business, Education, Humanities and Social Sciences, interested researchers are expected to be more independent on the design and direction of the overall project, then conduct it under the supervision of a faculty-member.</p>

                        <p className="my-4">In the sciences-Health and Information Technology, the research journey is divided and distributed among a group of researchers who work collaboratively.</p>

                        <p className="my-4">All these can be done in tandem with the Work Integrated Learning (WIL) Program which greatly enhances the quality of studies and investigations performed.</p>

                        <p className="my-4">Most academic research are carried out by final year students at both undergraduate and graduate levels across all the faculties and these contribute to their final academic credit. No final year student graduates without undertaking a research project in their field of study</p>
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

export default AvailRes;