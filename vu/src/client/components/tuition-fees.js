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
    change_icon() {
		var element = document.getElementById("iconner");
		element.classList.add("hider");
		var element2 = document.getElementById("iconner2");
		element2.classList.add("block");
	 }
	 change_icon2(){
		var element = document.getElementById("iconner");
		element.classList.remove("hider");
		var element2 = document.getElementById("iconner2");
		element2.classList.remove("block");
		console.log('HI4')
	 }
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
    <div class="hny-top-menu">
        <div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
            <div class="container-fluid">
                <div class="row">
                    <ol class="accounts col-md-4">
                        <li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / Admissions / Tuition, Fees and Financial Aid</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<br/>
<section class="w3l-features-1">
	<div class="features-1-mian py-5">
		<div class="container">
			<h3 class="hny-title text-left" style={{color: 'orangered'}}>Tuition, Fees and Financial Aid</h3>
		</div>
		<div class="container py-lg-5">
			<div class="row grids-innf my-lg-5">
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-vcard" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Online tuition and fee assesment</a></h6>
					</div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-calculator" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Fee payment</a></h6>
					</div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-money" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Financial aid</a></h6>
					</div>
				</div>
				<div class="features-1-info col-lg-3 col-md-6">
					<div class="features-1-info-icon text-center">
						<span class="fa fa-credit-card" style={{color: '#0077b5', fontSize: '47px'}}></span>
					</div>
					<div class="features-1-info-info text-center">
						<h6 class="text-center"><a href="#home">Calculate undergraduate course fees</a></h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Your tuition, your career investment</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>At Victoria University we want to allow you to study at your own pace. To reflect that, all our courses are pay-as-you-go. You pay for each course only when you register for it, and our course fees include all textbooks, class materials, and access to a tutor or success centre. All course fees must be paid in full when you register.</p>
                    <p class="mb-4" style={{fontSize: '18px'}}>The first time you take an VU course or apply to an VU program, you’ll also pay a one-time, non-refundable application fee. You won’t have to pay this fee again, no matter how many courses you take, or how long you wait between courses.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Online tuition and fee assessment</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>Understanding how your fees and tuition are calculated is important to make sure you stay within your budget and make informed decisions when choosing, adding or dropping courses. VU academic fees are calculated differently for undergraduate and graduate students and will also vary depending on where you live while studying, course choice and other individual circumstances.</p>
                    <p class="mb-4" style={{fontSize: '18px'}}>Make sure to understand the details of all tuition and fees that apply to your choice of program - if in doubt, please feel free to contact Victoria University’s administrators for clarification.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5">
            <div class="welcome-grids row">
                <div class="col-lg-12 welcome-image">
                    <div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Undergraduate tuition and fees<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Undergraduate studentsa</p>
                                        <p class="my-4"><span class="fa fa-clock-o"></span> Apply anytime – no deadline!</p>
                                        <p class="my-4">You can apply to VU anytime without a deadline. All undergraduate programs enrol students year round. Just keep in mind that after your program application gets approved you will still need to register for courses to get started.</p>
                                        <p><Link class="logo-2" to="/admissions" style={{color: '#0077b5'}}  onMouseOver={this.change_icon} onMouseOut={this.change_icon2}>
                                            <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF',}}></span>&nbsp;
                                            </span><span class="underline">Learn more about undergraduate applications</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Graduate tuition and fees<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
                            <div class="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div class="col-lg-12 welcome-image">
                                    <div class="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p class="my-4">Undergraduate course registration</p>
                                        <table style={{width: '100%', height: '100%'}}>
                                            <tr>
                                                <td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
                                                <td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Next Deadline: Register by February 10th to start on March 1st</td>
                                            </tr>
                                        </table>
                                        <p class="my-4">Courses start on the first of each month. However, you must register and pay by the 10th of the previous month to begin on the first.</p>
                                        <p>
                                        <Link class="logo-2" to="/home" style={{color: '#0077b5'}}  onMouseOver={this.change_icon} onMouseOut={this.change_icon2}>
                                            <span class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px',}}></span>&nbsp;
                                            </span><span class="underline">Learn how to register for courses</span>
                                            </Link>
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
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: '#0077b5'}}>Fee payment</h6>
                    <br/>
                    <p class="mb-4" style={{fontSize: '18px'}}>After selecting your program and/or individual courses, you will be required to complete tuition payments in order to finalize your registration and begin your online studies. You must pay all fees in full when you apply as a student or register for a course, but you only pay for a course once you register for it.</p>
                    <p class="mb-4" style={{fontSize: '18px'}}>There’s no formal timeline to complete most VU credentials, so if time isn’t a concern, you can take your classes as you can afford them, and you may be able to complete your education with little student debt. However, if meeting your personal goals means a faster pace and a heavier financial commitment, there are financial aid options available to support your online studies.</p>
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