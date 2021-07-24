import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Partners extends Component {

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
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About Us 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Collaboration &amp; Partnership</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<br/>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize:'48px'}}>Collaboration & Partnerships</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>VU has a long-standing practice of working collaboratively with other  Ugandan and international post-secondary educational institutions, with professional associations and employer groups and with First Nations institutions and communities to facilitate access to university-level study. Over 350 formal collaborative agreements are now in place. In addition, students enrolled at other post-secondary institutions make extensive use of VU courses and educational services to help them complete their degrees.</p>
                    <p className="mb-4"></p>
                    <br/>
                </div>
            </div>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize:'36px', color: '#004063'}}>Educational partnerships</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>Educational partnerships provide real opportunities for you. Through VU's partnerships with other post-secondary institutions, you can, for example, add VU courses to your program at a partner institution, take classroom versions of VU courses at a partner institution or enrol in VU programs while studying at or working for a partner institution.<br/><br/>
                    Through established transfer agreements, VU also recognizes previous education that you may have obtained through colleges, technical institutes or professional organizations. Block credit transfer arrangements have been established with numerous educational providers across Uganda, granting program graduates a specified number of credits toward particular VU degrees.<br/><br/>
                    Visit the <a href="#home" style={{color: '#025683'}}>Learning Services Collaborations <span className="fa fa-external-link"></span></a> web page to learn more about our educational partners, the different types of partnerships in which we are engaged and the educational opportunities available to you as a result.</p>
                    <p className="mb-4"></p>
                    <br/>
                </div>
            </div>
            {/* <hr className="text-center" style={{color: '#000', width: '100%'}} /> */}
            {/* <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize:'36px', color: '#004063'}}>Educational collaborations</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>VU is a member of the following collaborative institutions:</p>
                    <p className="mb-4 t2">&emsp;&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&nbsp;&nbsp;<a href="home" target="_blank" style={{color: '#025683'}}>OERu  <span className="fa fa-external-link"></span></a> (The Open Educational Resources university) a consortium of more than 29 higher educational institutions on five continents supporting the assessment and accreditation of learners using OER.</p>
                    <br/>
                </div>
            </div> */}
            {/* <hr className="text-center" style={{color: '#000', width: '100%'}} />
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '36px', color: '#004063'}}>International partnerships</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>We have partnership agreements with the following international institutions:</p>
                    <ul style={{listStyle: 'none'}}>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.american.edu/" rel="noreferrer" target="_blank"   style={{color: '#025683'}}><span className="underline">American University, Washington DC&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.amherst.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Amherst College&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.arcadia.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Arcadia University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.asu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Arizona State University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.baylor.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Baylor University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.butler.edu/executive-education" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Butler, Executive Education&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://carleton.ca/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Carleton University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://case.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Case Western Reserve University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.engineering.columbia.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Columbia Engineering&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.ewc.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Edward Waters University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.emerson.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Emerson College&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://esmt.berlin/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">ESMT - Berlin&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.fordham.edu/info/20185/about/404/nyc_campuses" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Fordham, University of New York&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.gwu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">The George Washington University, Washington DC&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.georgetown.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Georgetown University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://pe.gatech.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Georgia Professional Tech Education&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.harvard.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Harvard University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.imd.org/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">IMD&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.jhu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Johns Hopkins University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.lse.ac.uk/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline" title="The London School of Economics and Political Science">LSE&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="http://www.marymount.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Marymount University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.mit.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">MIT&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://msu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Michigan State University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="http://monash.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Monash University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="http://www.morehouse.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Morehouse College&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://steinhardt.nyu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">NYU | Steinhardt&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.nsu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Norfolk State University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.northwestern.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Northwestern University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://engineering.osu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Ohio State University | College of Engineering&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.pepperdine.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Pepperdin University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.rice.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Rice University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.rit.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Rochester Institute of Technology&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.rutgers.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Rutgers University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.sdabocconi.it/en/home" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">SDA Bocconi School of Management&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.sdabocconi.it/en/home" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Simmons University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.smu.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Southern Methodist University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.stedwards.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">ST. Edward's University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.sjfc.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">ST. John Fisher College&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://healtheducation.stanford.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Stanford Center for Health Education&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.syracuse.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Syracuse University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="http://www.talladega.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">TallaDega University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://tec.mx/es" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Tecnologico de Monterrey&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.tufts.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Tufts University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.ucl.ac.uk/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University College London&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.adelaide.edu.au/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">The University of Adelaide&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.arizona.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Arizona&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.birmingham.ac.uk/index.aspx" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Birmingham&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.berkeley.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Berkeley | University of California&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.ucdavis.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of California, Davis&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://ce.uci.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">UCI Continuing Education&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://extension.ucr.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">UCR Extension&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://extension.ucsd.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">UC San Diego Extension&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.cam.ac.uk/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Cambridge&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.uct.ac.za/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Cape Town&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.ucf.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University Central Florida&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.engr.uconn.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">UCONN | School of Engineering&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://udayton.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Dayton&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.du.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Denver&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://ku.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">KU | University of Kansas&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://london.ac.uk/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of London&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.manchester.ac.uk/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Manchester&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://welcome.miami.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University Miami&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://twin-cities.umn.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Minnesota&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.unh.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of New Hampshire&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.unc.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of North Carolina&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.uncc.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">UNC Charlotte&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.uoregon.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Oregon&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.sbs.ox.ac.uk/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Oxford | Business School&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.upenn.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Pennsylvania&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.utah.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Utah&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.pce.uw.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Washington | Professional and Continuing Education&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.uwa.edu.au/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Western Australia&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://spcs.richmond.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Richmond School of Professional & Continuing Studies&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.usc.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Southern California&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://usb-ed.com/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Stellenbosch Business School | Executive Development&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.sydney.edu.au/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Sydney&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.utexas.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University Texas Austin&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.utsa.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University Texas at San Antonio&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.utoronto.ca/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Toronto&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://ce.uwex.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">University of Wisconsin | Extended Campus&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.vanderbilt.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Vanderbilt University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://wustl.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Washington, University in St. Louis&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                        <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<a href="https://www.yale.edu/" rel="noreferrer" target="_blank"  style={{color: '#025683'}}><span className="underline">Yale University&nbsp;&nbsp;<span className="fa fa-external-link"></span></span></a></li>
                    </ul>
                    <br/>
                </div>
            </div> */}{/*  */}
            <hr className="text-center" style={{color: '#000', width: '100%'}} />
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '36px', color: '#004063'}}>Partners</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>We maintain additional educational or research agreements with the following institutions and organizations:</p>
                    <div className="container py-lg-5">
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://munyonyocommonwealth.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/1.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeresort.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/2.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://kabiracountryclub.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/3.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekehotel.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/4.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://dolphinsuites.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/5.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.forest-cottages.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/6.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeapartments.com/wampewo/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/7.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.spekeapartments.com/kitante/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/8.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.bukotoheights.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/9.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.tagoreapartments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/10.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.boulevardsuites.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/11.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.naguruapartments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/12.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/13.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://tagoreliving.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/14.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/15.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/16.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/17.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/18.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/19.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/20.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/21.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/22.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.cms.co.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/23.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.meerainvestments.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/24.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/25.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/26.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.premieradvertising.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/27.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://premierrecruitment.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/28.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/29.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://mail.calabashspa.com/index.html" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/30.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.rupareliafoundation.org/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/31.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://vu.ac.ug/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/40.jpg" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="http://dpsuganda.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/32.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.kisu.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/33.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://kampalaparents.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/34.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <div className="features-1-info-icon text-center">
                                    <img src="assets/images/partners/35.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                </div>
                            </div>
                        </div>{/*  */}
                        <div className="row grids-innf my-lg-5">
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://sanyufm.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/36.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.goldstarinsurance.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/37.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://www.rosebudlimited.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/38.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="features-1-info col-lg-2 col-md-6 hover-partners">
                                <a href="https://premier-roses.com/" target="_blank" rel="noreferrer">
                                    <div className="features-1-info-icon text-center">
                                        <img src="assets/images/partners/39.PNG" alt="Victoria University" title="Victoria University" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="welcome-grids row">
				<div className="col-lg-12 welcome-image">
					<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 className="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
						<ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Give To VU<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
							<div className="contenter" style={{backgroundColor: '#FFF'}}>
								<br/>
								<div className="col-lg-12 welcome-image">
									<div className="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p className="my-4">Learn how you can</p>
                                        <p className="my-4">support our efforts &nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="#home" style={{color: '#025683'}}><span className="fa fa-external-link"></span></a></p>
                                        <p className="my-4">to remove barriers to university-level studies and help students succeed.</p>
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

export default Partners;