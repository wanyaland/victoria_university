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
    render(){
        return(
            <React.Fragment>
                <BreadNavBar/>
                <NavBar />
                <section class="w3l-top-header-content">
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="">
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
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>myVU & Student Record</h6>
                    <br/>
                    <p class="my-4" style={{fontSize: '22px'}}>Victoria University’s student portal is named myAU. This is where you will access all of your course sites, and where you will manage your courses, your program and your Student Record.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Student Record</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>The Student Record section is found directly beneath the My Courses section of your myVU homepage. Come here to<span class="fa fa-external-link"></span> for</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;register in a course</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;withdraw from a course</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;get a tutor-marked exercise form</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;apply for a course extension</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;request an exam</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;check your grades</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;change your program</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;request a transcript</p>
                    <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;get your income tax form</p>
                    <p class="my-4">
                        You need your student ID number and password to access myVU.
                    </p>
                    <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner","iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner","iconner2")}>
                        <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp; <span class="underline">Log in to myAU</span>
                        </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr class="text-center" style={{color: '#000', width: '90%'}}></hr>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Lost password or student ID</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>If you have forgotten your myAU password, fill out the password change form <span class="fa fa-external-link"></span>. You will need your student ID number. You can also find a link to the password change form on your myAV login page <span class="fa fa-external-link"></span>.</p>
                    <p class="my-4">After you complete the password change form, you must answer your challenge question. Once you have answered it, you will be able to choose a new password.</p>
                    <p class="my-4">If you need to retrieve your student ID, call the Information Centre at 1-800-788-9041.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5">
            <div class="welcome-grids row">
                <div class="col-lg-12 welcome-image">
                    <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 class="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;New student orientation<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">
                                            Learn more about AU’s services and resources in our new student orientation <span class="fa fa-external-link"></span>.
                                        </p>
                                        <p><Link class="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                            <span class="lohny-2"><span  id="iconner3" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span class="underline">View new student orientation</span>
                                            </span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Undergraduate Calendar&nbsp;<span class="fa fa-external-link"></span></p>
                                        <p class="my-4">&emsp;<span class="fa fa-angle-right"></span>&nbsp;&nbsp;Graduate Calendar&nbsp;<span class="fa fa-external-link"></span></p>
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

export default Myvustudentportal;