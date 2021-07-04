import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom'

class Tuition extends Component {

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
                    <Link to="/admissions"><span className="underline" style={{color: "#EEE"}}>
					Admissions 
					</span></Link>&nbsp;/&nbsp;
					<span style={{color: '#CCC'}}>/ Tuition, Fees and Financial Aid</span>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<br/>
<section className="w3l-features-1">
	<div className="features-1-mian py-5">
		<div className="container">
			<h3 className="hny-title text-left" style={{color: 'orangered'}}>Tuition, Fees and Financial Aid</h3>
		</div>
		<div className="container py-lg-5">
			<div className="row grids-innf my-lg-5">
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-vcard" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Online tuition and fee assesment</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-calculator" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Fee payment</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-money" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Financial aid</a></h6>
					</div>
				</div>
				<div className="features-1-info col-lg-3 col-md-6">
					<div className="features-1-info-icon text-center">
						<span className="fa fa-credit-card" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div className="features-1-info-info text-center">
						<h6 className="text-center"><a href="#home">Calculate undergraduate course fees</a></h6>
					</div>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Your tuition, your career investment</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>At Victoria University we want to allow you to study at your own pace. To reflect that, all our courses are pay-as-you-go. You pay for each course only when you register for it, and our course fees include all textbooks, class materials, and access to a tutor or success centre. All course fees must be paid in full when you register.</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>The first time you take an VU course or apply to an VU program, you’ll also pay a one-time, non-refundable application fee. You won’t have to pay this fee again, no matter how many courses you take, or how long you wait between courses.</p>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Online tuition and fee assessment</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>Understanding how your fees and tuition are calculated is important to make sure you stay within your budget and make informed decisions when choosing, adding or dropping courses. VU academic fees are calculated differently for undergraduate and graduate students and will also vary depending on where you live while studying, course choice and other individual circumstances.</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>Make sure to understand the details of all tuition and fees that apply to your choice of program - if in doubt, please feel free to contact Victoria University’s administrators for clarification.</p>
                    <p>
                        <a className="logo-2" href="/assets/docs/Tution and Fees Documentation.pdf" download="assets/docs/Tution and Fees Documentation.pdf" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                            <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;
                            </span><span className="hny-title underline" style={{fontSize: '28px', color: '#0077b5'}}>View our tution and fees documentation <span className="fa fa-file-pdf-o"></span></span>
                        </a>
                    </p>
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
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Undergraduate tuition and fees<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate studentsa</p>
                                        <p className="my-4"><span className="fa fa-clock-o"></span> Apply anytime – no deadline!</p>
                                        <p className="my-4">You can apply to VU anytime without a deadline. All undergraduate programs enrol students year round. Just keep in mind that after your program application gets approved you will still need to register for courses to get started.</p>
                                        <p><Link className="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                                            <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;
                                            </span><span className="underline">Learn more about undergraduate applications</span>
                                            </Link>
                                        </p>
                                        <p>
                                            <a className="logo-2" href="/assets/docs/Tution and Fees Documentation.pdf" download="assets/docs/Tution and Fees Documentation.pdf" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                                                <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;
                                                </span><span className="hny-title underline" style={{fontSize: '28px', color: '#0077b5'}}>View our tution and fees documentation <span className="fa fa-file-pdf-o"></span></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Graduate tuition and fees<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p className="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p>
                                        <Link className="logo-2" to="/home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                            <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px',}}></span>&nbsp;
                                            </span><span className="underline">Learn how to register for courses</span>
                                            </Link>
                                        </p>
                                        <p>
                                            <a className="logo-2" href="/assets/docs/Tution and Fees Documentation.pdf" download="assets/docs/Tution and Fees Documentation.pdf" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                                                <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;
                                                </span><span className="hny-title underline" style={{fontSize: '28px', color: '#0077b5'}}>View our tution and fees documentation <span className="fa fa-file-pdf-o"></span></span>
                                            </a>
                                        </p>
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
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Fee payment</h6>
                    <br/>
                    <p className="mb-4" style={{fontSize: '18px'}}>After selecting your program and/or individual courses, you will be required to complete tuition payments in order to finalize your registration and begin your online studies. You must pay all fees in full when you apply as a student or register for a course, but you only pay for a course once you register for it.</p>
                    <p className="mb-4" style={{fontSize: '18px'}}>There’s no formal timeline to complete most VU credentials, so if time isn’t a concern, you can take your classes as you can afford them, and you may be able to complete your education with little student debt. However, if meeting your personal goals means a faster pace and a heavier financial commitment, there are financial aid options available to support your online studies.</p>
                </div>
            </div>
        </div>
    </div>
</section>
                <GetInfo />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Tuition;