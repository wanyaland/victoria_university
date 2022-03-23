import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'

class Myvustudentportal extends Component{
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
     toVclass = () => {
        window.location.href = "https://vclass.ac/"
    }
    render(){
        return(
            <React.Fragment>
                <BreadNavBar/>
                <NavBar />
                <section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/current-students"><span className="underline" style={{color: "#EEE"}}>
					Current Students 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ myVU & Student Record</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>myVU & Student Record</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '22px'}}>Victoria University’s student portal is named  myVU. This is where you will access all of your course sites, and where you will manage your courses, your program and your Student Record.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Student Record</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>The Student Record section is found directly beneath the My Courses section of your myVU homepage. Come here to<span className="fa fa-external-link"></span> for</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;register in a course</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;withdraw from a course</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;get a tutor-marked exercise form</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;apply for a course extension</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;request an exam</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;check your grades</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;change your program</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;request a transcript</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;get your income tax form</p>
                    <p className="my-4">
                        You need your student ID number and password to access myVU.
                    </p>
                    <p><Link className="logo-2" onClick={this.toVclass} style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner","iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner","iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp; <span className="underline">Log in to  myVU</span>
                        </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}}></hr>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Lost password or student ID</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>If you have forgotten your  myVU password, fill out the password change form <span className="fa fa-external-link"></span>. You will need your student ID number. You can also find a link to the password change form on your myAV login page <span className="fa fa-external-link"></span>.</p>
                    <p className="my-4">After you complete the password change form, you must answer your challenge question. Once you have answered it, you will be able to choose a new password.</p>
                    <p className="my-4">If you need to retrieve your student ID, call the Information Centre at +256 759 996 130 or +256 700 300 088 or +256 707 780 158.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="col-lg-12 welcome-image">
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;New student orientation<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            Learn more about VU’s services and resources in our new student orientation <span className="fa fa-external-link"></span>.
                                        </p>
                                        <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                            <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF', }}></span>&nbsp;<span className="underline">View new student orientation</span>
                                            </span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Undergraduate Calendar&nbsp;<span className="fa fa-external-link"></span></p>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Graduate Calendar&nbsp;<span className="fa fa-external-link"></span></p>
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
</section> */}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Myvustudentportal;