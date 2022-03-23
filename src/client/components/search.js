import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Search extends Component {
    componentDidMount(){
        
    }
    showSide = () => {
        var element = document.getElementById('mob_bar_control')
        element.classList.toggle("showr")
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
				<div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Search</span>
				</div>
			</div>
		</div>
	</div>
</section>
<button className="side_control_btn" onClick={this.showSide}><span className="fa fa-bars text-center justify-content-center" style={{fontSize: '30px'}}></span></button>
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="container py-lg-5" style={{maxWidth: '100%'}}>
			<div className="justify-content-center row"  style={{display: 'flex'}}>
				<div className="col-lg-3 with_shadow">
					<div className="sidenavd side_control" id="mob_bar_control">
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>Website Search<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>Staff Search<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container">A-Z index<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container">Library Search<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-external-link"></span></span></li>
                        </ul>
                    </div>
				</div>
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
						<br/>
                        <h6 className="hny-title" style={{fontSize: '38px',  color: '#f74040'}}>Website Search</h6>
                        <div className="input-container">
							<i className="fa fa-search icon"></i>
							<input className="input-field" type="text" placeholder="Start Your Search" name="search"/>
							<button className="search_btn" style={{borderRadius:'0rem',backgroundColor: '#f54848'}}>Search</button>
						</div>
                        <br/>
                    </div>
					<div className="search_results">
						<h6 className="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" className="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p className="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div className="search_results">
						<h6 className="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" className="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p className="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div className="search_results">
						<h6 className="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" className="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p className="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div className="search_results">
						<h6 className="underline" style={{color: '#076ea5', fontSize: '24px'}}><b>Getting Started : Victoria University</b></h6>
                        <a href="#home" className="underline" style={{color: '#555'}}>https//vu.ac.ug</a>
                        <p className="my-4" style={{fontSize: '14px'}}>…Undergraduate Application We accept undergraduate applications year-round – if you’re interested in learning the VU way, you can start right away. Enrol in a program to earn a degree, diploma or certificate! Apply Online Graduate Application You can get started on your application at any time.……Your application process is the same as other students, but you’ll need to st…</p>
					</div>
                    <br/>
                    <div className="text-center">
                        <div className="more_results">
                            <div className=""></div>
                            <a href="#home" className="hover-w"> Show More Results</a>
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