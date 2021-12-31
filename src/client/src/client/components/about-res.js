import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import ResNav from './res_nav'
import { Link } from 'react-router-dom';

class AboutRes extends Component {
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
                <span style={{color: '#EEE'}}>/ About Research</span>
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
						<h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>About Research</h6>
						<br/>
						<p className="my-4" style={{fontSize: '22px'}}>Research is the systematic process of generating (new) knowledge about some aspect of occurrences in a society. By its iterative nature, research has a cycle involving a variety of stages:</p>
						<p className="mb-4">
						<ul style={{listStyle: 'none'}}>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Formulating a research question or idea/area</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Situating the question/idea within the landscape of existing knowledge through a literature review</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Designing the method of studying the question</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Getting permission to conduct the research</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Collecting the required data and materials</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Analyzing this data, inferring conclusions and presenting or writing up the results</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Publishing those findings</span></li>
						</ul>
						</p>
						{/* <p className="my-4">
							<h4 style={{color: '#0077b5'}}>Importance of Research</h4>
							The cardinal aim and advantage of engaging in research is to enable researchers gain a deeper understanding of subjects under inquiry. Additional benefits of research include:
							<p className="my-4"><ul style={{listStyle: 'none'}}>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">obtaining finer understanding and familiarity with a topic of interest</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">learning a new methodological skill</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">gaining social networks by building relationships with faculty and research infrastructure</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">exploring a specific industry concentration as a starting point for thought leadership</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">preparing for thesis research and preparing for graduate school</span></li>
                       	 	<li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">demonstrating value for future employers and contributing to a body of knowledge</span></li>
						</ul></p>
						</p> */}
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

export default AboutRes;