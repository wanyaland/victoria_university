import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Appeals extends Component{
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
				<div className="" style={{color: "#EEE"}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/current-students"><span className="underline" style={{color: "#EEE"}}>
					Current Students 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Appeals</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Appeals</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '28px'}}s>
						If you feel that a grade has been improperly assigned or an academic or institutional process has not been followed, you have the right of appeal.
                    </p>
					<p className="my-4">Appeals must be made in writing using the online appeals form <span className="fa fa-external-link"></span>.</p>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Requesting exams</h6>
					<p className="my-4">You may appeal decisions and actions including</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;grade assignment</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;evaluation and assessment of transfer credits</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;institutional policies and procedures that do not directly impact assignment of grades</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;assignment of penalties resulting from decisions made under the Student Academic Misconduct Policy <span className="fa fa-external-link"></span></p>
					<h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Grade appeals</h6>
                    <p className="my-4">Victoria University’s grade appeals process is as follows:</p>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Contact your tutor to discuss the mark within 30 days of receiving the mark.</p>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Either you or your tutor contacts the course professor to have the examination, assignment or essay remarked. You must make this request within 30 days of the original complaint.</p>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;If you are still dissatisfied with the result after remarking, submit a written appeal to the Program Director. This must be done within 1 month of receiving the second marking.</p>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Get detailed information about the grade appeal process <span className="fa fa-external-link"></span>.</p>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Transfer credit appeals</h6>
					<p className="my-4">You are expected to be familiar with VU’s admissions and academic regulations <span className="fa fa-external-link"></span> before appealing a transfer credit decision.</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Read the transfer credit appeal process <span className="fa fa-external-link"></span></p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Submit an appeal online <span className="fa fa-external-link"></span></p>
					<h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Non-grade-related appeals</h6>
                    <p className="my-4">Appeals in this category can include decisions around course extensions, course registrations, challenge for credit, and exam issues that aren’t related to grades (e.g. exam requests, invigilators). You may need to provide supporting documentation.</p>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Read about appeals of institutional policy or procedure <span className="fa fa-external-link"></span></p>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Submit an appeal online <span className="fa fa-external-link"></span>.</p>
					<h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Academic misconduct appeals</h6>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Academic misconduct has severe penalties that can range from getting a failing grade on an assignment or course to expulsion. If you wish to appeal an academic misconduct penalty, you are expected to first be familiar with the Academic Misconduct Policy <span className="fa fa-external-link"></span>.</p>
					<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Read the academic misconduct appeal process <span className="fa fa-external-link"></span>.</p>
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
                        <ul className="w3-ul w3-card-4" style={{boxShadow: "none"}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Ombuds office<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            The Ombuds Office helps make sure that all members of the university community are treated fairly. They can't overturn results of an appeal, but can ask for reconsideration of new information.
                                        </p>
                                        <p className="my-4">If you’re having trouble with an appeal or feel the result is unfair, the Ombuds Office may be able to provide assistance or advice.
                                        </p>
										<p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Ombuds Office website&nbsp;<span className="fa fa-external-link"></span></p>
                                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Contact the Ombuds Office&nbsp;<span className="fa fa-external-link"></span></p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Calendar<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
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
</section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Appeals;