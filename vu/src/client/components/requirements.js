import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import GetInfo from './get_info';
import Footer from './footer';

class Requirements extends Component{
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
            <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
		<div class="hny-top-menu">
			<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
				<div class="container-fluid">
					<div class="row">
						<ol class="accounts col-md-4">
							<li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / Admissions / Admission Requirements</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br/>
	<br/>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5">
						<h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Admission Requirements</h6>
						<br/>
						<p class="my-4" style={{fontSize: '22px'}}>We believe in education and learning opportunities for everyone. That’s why Victoria University programs are made to work for our students regardless of level of experience, previous grades or degrees. It’s our priority to ensure that our post-secondary online education is accessible and flexible, so our admission policy accepts undergraduate students to a program as long as they pass the minimum age restriction of 16 years of age.</p>
						<p class="mb-4" style={{fontSize: '18px'}}>From arts, to business, to tech, to nursing and many more: all of our over 850 courses are available to our students even without being enrolled in an AU undergraduate or graduate program. All of Victoria University’s minimum requirements listed here apply to both Canadian and international candidates.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
				<div class="welcome-grids row">
					<div class="col-lg-12 mb-lg-0 mb-5" style={{borderBottom: 'orange 5px solid', padding: '0'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td class="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', padding: '50px 20px 20px 40px'}}>
									<h4>Thinking of studying with us</h4>
									<p class="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
									<p class="my-4"><button class="btn_link2">Access the viewbook</button></p>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br/>
	<br/>
    <section class="w3l-wecome-content-6">
		<div class="ab-content-6-mian py-5">
			<div class="container py-lg-5">
				<div class="welcome-grids row">
					<div class="col-lg-12 welcome-image">
						<div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
							<ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
								<li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Undergraduate Admission Requirements<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">Athabasca University welcomes applicants for undergraduate studies from a wide variety of educational backgrounds. To qualify as an undergraduate student, you must be 16 or older. No other conditions apply, though a select range of programs does require prior education to enrol.</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Find all your requirements for your undergraduate program</h4>
												</a>
											</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;How to apply</h4>
												</a>
											</p>
										</div>
									</div>	
									<br/>
								</div>
								<li class="w3-display-container collapsible"><span class="fa fa-chevron-right programfa2"></span>&nbsp;&nbsp;&nbsp;Graduate Admission Requirements<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
								<div class="contenter" style={{backgroundColor: '#FFF', borderBottom: '#CCC 1px solid'}}>
									<br/>
									<div class="col-lg-12 welcome-image">
										<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
											<p class="my-4">To apply for an Athabasca University graduate program you must have an undergraduate degree. Doctorate programs require a master’s degree to qualify for admission. Requirements for graduate programs vary and are listed on each program’s website. You can take some graduate courses without being admitted to the full program if you meet the non-program student requirements for said program. Requirements for graduate programs are listed on each program’s website.</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;Find all your requirements for your graduate program</h4>
												</a>
											</p>
											<p><a class="logo-2" href="home" style={{color: '#0077b5'}}  onmouseover="change_icon(this)" onmouseout="change_icon2(this)">
												<h4 class="lohny-2"><span  id="iconner" class="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" class="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF', fontSize: '26px'}}></span>&nbsp;How to apply</h4>
												</a>
											</p>
										</div>
									</div>	
									<br/>
								</div>
							</ul>
						</div>
					</div>
					<div class="col-lg-12 mb-lg-0 mb-5" style={{height: '60px', marginTop: '40px'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span class="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td class="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px'}}>Please ensure to review the specific requirements for the undergraduate or graduate program you are applying for carefully before submitting your final application.</td>
							</tr>
						</table>
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

export default Requirements;