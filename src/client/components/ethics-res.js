import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import ResNav from './res_nav'
import { Link } from 'react-router-dom';
import ResBanner from './res_banner';

class EthicsRes extends Component {
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
                <span style={{color: '#EEE'}}>/ Ethical Conduct of Research</span>
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
						<h6 className="hny-title" style={{fontSize: '44px',  color: '#f74040', fontWeight: '600'}}>Victoria University’s Ethical Conduct of Research</h6>
						<br/>
						<p className="my-4">Globally, ethical conduct undergirds every aspect of research, from conceiving the question to collecting and analyzing the data, to sharing the results. Each Faculty research board has ethical standards that students and staff undertaking research must be familiar with and must be done with the highest level of integrity and commitment to excellence.</p>
                        <p className="my-4">Note that there is additional obligation on the ethical dimension when the research involves humans or animals. In order to ensure ethical standards in such research, national regulations require that such research be reviewed and approved before data-collection can begin.</p>
                        <p className="my-4">Any data obtained without prior approval cannot be used for writing a paper, fulfilling coursework, or any other purpose. This stipulation — that approval be obtained prior to collection of data — applies not only to clinical or laboratory studies, but also to social science and humanities research involving the use of humans or vertebrate animals.</p>
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

export default EthicsRes;