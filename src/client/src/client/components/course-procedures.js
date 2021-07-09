import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

class CourseProcedures extends Component {
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
                    <Link to="/current-students"><span className="underline" style={{color: "#EEE"}}>
					Current Students 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Course Procedures</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Course Procedures</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '28px'}}>
                        Following the correct process and timelines for registering in, withdrawing from and extending your courses will help keep your VUexperience running smoothly.
                    </p>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Course registrations</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Undergraduate courses begin on the first of each month. You must register and pay by the 10th of the month to start your course on the 1st of the next month.</p>
                    <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">How to register for courses</span></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr className="text-center" style={{color: '#000', width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Course withdrawals</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>You can withdraw from a course with no academic penalty within the first 30 days of the course and it will not appear on your transcript. Withdrawals after this time will result in a grade of “W” (Withdrawal) on your transcript. Courses with a “W” grade are not included in your GPA.</p>
                    <p className="my-4">You may not withdraw from a course in the following situations</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;when you have written the final exam</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;after all coursework has been submitted for marking if there is no final exam</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;if you are involved in a disciplinary proceeding involving academic or non-academic misconduct</p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Withdrawal process</h6>
                    <p className="my-4">
                        You must follow the Withdraw From a Course process in myVU <span className="fa fa-external-link"></span> to withdraw from a course. Not completing your course requirements does not count as withdrawing.
                    </p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Refunds</h6>
                    <p className="my-4">You will be eligible for a refund (minus a processing fee <span className="fa fa-external-link"></span>) if you withdraw within the first 30 days of the course. You may also be eligible for a learning resource fee refund if we receive your learning resources complete, unmarked and undamaged within 30 days of your course withdrawal.</p>
                    <p className="my-4">The withdrawal processing fee is different for graduate students. See the Fees section of your program’s website for details</p>
                    <p className="my-4">
                        Please note that you must formally withdraw from your course through the Withdraw From a Course option in myVU <span className="fa fa-external-link"></span> get your refund. After the first 30 days, no refund will be provided.
                    </p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Failure to withdraw</h6>
                    <p className="my-4">
                        Not completing course requirements does not count as withdrawing. If you haven’t completed any course work by the course contract end date, you will receive an “F” (Failure) on your transcript. This grade will be calculated as part of your GPA.
                    </p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Related policies</h6>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Undergraduate course withdrawal <span className="fa fa-external-link"></span></p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Graduate course refund <span className="fa fa-external-link"></span></p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Graduate course withdrawal and refund<span className="fa fa-external-link"></span></p>
                    <p className="my-4">Visit your program regulations for your program’s withdrawal and refund information</p>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Course material returns and refund policy <span className="fa fa-file-pdf-o"></span></p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Course extensions</h6>
                    <p className="my-4">If you can’t complete your course within your 6- or 12-month course contract period, you can buy up to 3 two-month extensions.<span className="fa fa-external-link"></span> before you apply for an extension.</p>
                    <p className="my-4">You must apply for your extension no later than 1 month before your course contract end date. You can apply for an extension in myVU <span className="fa fa-external-link"></span>, in the Student Record section.</p>
                    <h6 className="hny-title" style={{fontSize: '30px', color: '#0077b5'}}>Related policies</h6>
                    <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Course Extension Policy <span className="fa fa-file-pdf-o"></span></p>
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
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;New student orientation<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            Learn more about AU’s services and resources in our new student orientation <span className="fa fa-external-link"></span>.
                                        </p>
                                        <p><Link className="logo-2" href="home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                            <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', }}></span>&nbsp;<span className="underline">View new student orientation</span>
                                            </span>
                                            </Link>
                                        </p>
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

export default CourseProcedures;