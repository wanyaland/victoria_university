import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import LabNav from './lab_nav'
import { Link } from 'react-router-dom';
import LibBanner from './lib_banner';

class Lending extends Component {
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
                <span style={{color: '#EEE'}}>/ Lending services</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Lending services</h6>
						<br/>
                        <p className="my-4">This facilitates equitable circulation of information resources among all users.
                                Information materials borrowed on regular loan are all issued at the circulation section.
                                Short loan materials are issued from the Circulation Section.</p>

                                <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>Lending Regulations and penalties​</p>

                                <p className="my-4">Only registered students of Victoria University and Staff are entitled to borrow materials.
                                    All library users MUST produce their Student /Staff identification card before borrowing any information material.
                                Lost or mutilated information materials on loan will be replaced at the market cost of the information materials plus Ugx.10000/= processing charges.
                                Information materials borrowed on regular loan and not returned on the due date will be charged UGX3000/= on the 1st day and Ugx. 5000/= for the rest of the days.
                                Information Borrowed on short loan and not returned on time will be charged Ugx. 5000/= per hour.</p>

                                <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>Recall of Materials on Loan.</p>

                            <p className="my-4">The Librarian may recall any information material on loan from a user by notice which shall specify return of the same. If a user does not return the item as specified, he shall incur a fine of Ugx. 5000 per book per day.
                        </p>
						<div className="mission-gd-right col-lg-12 pl-lg-4">
                    		<img src="assets/images/lib2.JPG" className="img-fluid" alt="WIL" />
						<p><b style={{fontWeight: '500'}}>Image:</b> Well Stocked Library</p>
					</div>
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

export default Lending;