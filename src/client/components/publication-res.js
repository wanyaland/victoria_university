import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import ResNav from './res_nav'
import { Link } from 'react-router-dom';
import ResBanner from './res_banner';

class PublicRes extends Component {
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
				<ResBanner />
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
				<div className="col-lg-9"   style={{padding: '25px', backgroundColor: '#FFF', borderBottom: '#CCC 1px solid', borderRight: '#CCC 1px solid', borderTop: '#CCC 1px solid'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
						<h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Publications</h6>
						<br/>
						<p className="my-4" style={{}}>Click to view publications</p>
						<p className="mb-4">
						<ul style={{listStyle: 'none'}}>
                            <p className="my-4"><li className="underline lister"><a href='assets/docs/THE CEOs 2 mail.pdf' className="underline" download={'assets/docs/THE CEOs 2 mail.pdf'} style={{color: '#0077b5'}}>The CEOs 1st Edition <span className="fa fa-file-pdf-o"></span></a></li></p>
                            <p className="my-4"><li className="underline lister"><a href='assets/docs/TG50FINAL.pdf' className="underline" download={'assets/docs/TG50FINAL.pdf'} style={{color: '#0077b5'}}>Discover The Experience <span className="fa fa-file-pdf-o"></span></a></li></p>
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
						<br/>
						<img src="assets/images/vr.jpg" className="img-fluid" alt="" />
						<br/>
						<br/>
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

export default PublicRes;