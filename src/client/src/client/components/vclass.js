import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'

class Vclass extends Component {
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
    /* toVclass = () => {
        window.location.href = "https://vclass.ac/"
    }
    toYouVclass = () => {
        window.location.href = "https://www.youtube.com/watch?v=85SFXx99NmA"
    } */

    render() {
        return (
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
                    <Link to="/programs"><span className="underline" style={{color: "#EEE"}}>
					Programmes 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Virtual Classes</span>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-apply-6">
	<div className="apply-info py-5">
		<div className="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
            <br/>
			<div className="">
					<h4 className="text-center" style={{textTransform: 'capitalize'}}>VClass</h4>
			</div>
			<br/>
			<p className="text-center"><a href="https://vclass.ac/login" target="_blank" rel="noreferrer" className="btn_link" onClick={this.toVclass}>Log into VClass</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.youtube.com/watch?v=85SFXx99NmA" target="_blank" rel="noreferrer" className="btn_link">Explore VClass</a></p>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#f74040', fontWeight: '600'}}>Victoria University Vclasses</h6>
                    <p className="my-4" style={{}}>Modern education models and teaching methodologies demand that higher education institutions like our University aspiring to be leaders in education   technology and provide real world learning experience should and must educate students to fit in both the 21st century economies and the forth industrial revolution because the world has changed and continues to change only well prepared will fit in it. One of the assured paths to deliver such meaningful learning is  to ensure that learning happens Anywhere-Anytime. That is why Victoria University has carefully developed a state of the art learning management system (VClass) to support meaningful and interactive online learning and credible assessment of all our students please visit VU’s VClass  for more information<br/><h6 className="underline" style={{fontSize: '22px'}}><a href="#ac" target="_blank" onClick={this.toVclass}>Log into VClass <span className="fa fa-external-link"></span></a></h6>
                    </p>
                    <div className="text-center">
                        <button className="more_vclass" onClick={this.toVclass}><span>Explore VClass</span></button>
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
                <div className="welcome-image" style={{width: '100%'}}>
                    <video src="assets/media/VClass.mp4" className="img-fluid" alt="" autoPlay="true" loop="true" controls="true" style={{width: '100%'}}/>
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
export default Vclass;