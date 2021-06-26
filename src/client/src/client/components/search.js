import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Search extends Component {
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
<section class="w3l-top-header-content">
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Search</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-team-main">
	<div class="team py-5">
		<div class="py-lg-5" >
			<div class="justify-content-center"  style={{display: 'flex'}}>
				<div class="col-lg-3 with_shadow">
					<div class="sidenavd">
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Website Search<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}>Staff Search<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container">A-Z index<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <li class="w3-display-container">Library Search<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"><span class="fa fa-external-link"></span></span></li>
                        </ul>
                    </div>
				</div>
				<div class="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div class="col-lg-12 mb-lg-0 mb-5">
                        <h6 class="hny-title" style={{fontSize: '48px', color: 'orange'}}>Website Search <button>Show/Hide</button></h6>
                        <br/>
                        <form action="#" method="post" class="d-flex searchhny-form" style={{border: '#999 1px solid', paddingLeft: '10px'}}>
                            <input type="search" placeholder="Start Your Search" style={{color: '#000', width: '100%', border: 'none'}} required="required" />
                            <button class="search_btn" style={{borderRadius:'0rem',backgroundColor: '#f87a21'}}>Search</button>
                        </form>
                        <br/>
                        <p class="text-center" style={{color: '#043853'}}>Found 100 search results for start</p>
                    </div>
					<div class="search_results">
						<h6 class="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" class="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p class="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div class="search_results">
						<h6 class="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" class="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p class="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div class="search_results">
						<h6 class="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" class="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p class="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div class="search_results">
						<h6 class="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" class="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p class="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div class="text-center">
                        <div class="more_results">
                            <div class=""></div>
                            <a href="#home"> Show More Results</a>
                            </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<br/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Search;