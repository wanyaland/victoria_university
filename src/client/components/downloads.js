import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Downloads extends Component {
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
					<span style={{color: '#EEE'}}>/ Downloads</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
	
		<div className="container">
			<h2 style={{color: '#f74040'}}>Downloads</h2>
		</div>
	</div>
</section>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4 ">
		
			<div className="row">
				<div className="col-md-12 filter graphic">
					<div className="each-item">
							<p>Here all the necessary downloads, publications and all relevant documents you may be interested in. <br/> Click to download:</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			{/* <div className="port-text-cards text-left mt-5 mb-3 col-lg-4" style={{backgroundColor:'#0077b5'}}>
				<li className="btn active filter-button" data-filter="all" style={{color:'#fff'}}>Policy and Manuals</li>
			</div>
			<br /> */}

			<div className="row">
				<div className="col-md-12 filter graphic photo">
					<div className="each-item">
                    <li className="underline lister" style={{}}><a href="/assets/docs/Tution and Fees Documentation.pdf" download="assets/docs/Tution and Fees Documentation.pdf">Tuiton and Fees Documentation  <span className="fa fa-file-pdf-o" style={{color: '#f74040'}}></span>    <span className="fa fa-download" style={{color: '#f74040'}}></span></a></li>
					<li className="underline lister"><a href='assets/docs/THE CEOs 2 mail.pdf' className="underline" download={'assets/docs/THE CEOs 2 mail.pdf'}>The CEOs 1st Edition <span className="fa fa-file-pdf-o" style={{color: '#f74040'}}></span>    <span className="fa fa-download" style={{color: '#f74040'}}></span></a></li>
                    <li className="underline lister"><a href='assets/docs/TG50FINAL.pdf' className="underline" download={'assets/docs/TG50FINAL.pdf'}>Discover The Experience <span className="fa fa-file-pdf-o" style={{color: '#f74040'}}></span>    <span className="fa fa-download" style={{color: '#f74040'}}></span></a></li>
                    <li className="underline lister"><a href='assets/docs/Dr. Lawrence Muganga.pdf' className="underline" download={'assets/docs/Dr. Lawrence Muganga.pdf'}>Download Full Profile of Vice Chancellor <span className="fa fa-file-pdf-o" style={{color: '#f74040'}}></span>    <span className="fa fa-download" style={{color: '#f74040'}}></span></a></li>
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

export default Downloads;