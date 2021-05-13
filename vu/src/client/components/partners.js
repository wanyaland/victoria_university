import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';

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
                <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="row">
					<ol class="accounts col-md-4">
						<li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / About Us / Collaboration &amp; Partnership</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<br/>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize:'48px'}}>Collaboration & Partnerships</h6>
                    <p class="my-4" style={{fontSize: '22px'}}>VU has a long-standing practice of working collaboratively with other Canadian and international post-secondary educational institutions, with professional associations and employer groups and with First Nations institutions and communities to facilitate access to university-level study. Over 350 formal collaborative agreements are now in place. In addition, students enrolled at other post-secondary institutions make extensive use of AU courses and educational services to help them complete their degrees.</p>
                    <p class="mb-4"></p>
                    <br/>
                </div>
            </div>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize:'36px', color: '#004063'}}>Educational partnerships</h6>
                    <p class="my-4" style={{fontSize: '18px'}}>Educational partnerships provide real opportunities for you. Through VU's partnerships with other post-secondary institutions, you can, for example, add VU courses to your program at a partner institution, take classroom versions of VU courses at a partner institution or enrol in VU programs while studying at or working for a partner institution.<br/><br/>
                    Through established transfer agreements, VU also recognizes previous education that you may have obtained through colleges, technical institutes or professional organizations. Block credit transfer arrangements have been established with numerous educational providers across Canada, granting program graduates a specified number of credits toward particular VU degrees.<br/><br/>
                    Visit the <a href="#home" style={{color: '#025683'}}>Learning Services Collaborations <span class="fa fa-external-link"></span></a> web page to learn more about our educational partners, the different types of partnerships in which we are engaged and the educational opportunities available to you as a result.</p>
                    <p class="mb-4"></p>
                    <br/>
                </div>
            </div>
            <hr class="text-center" style={{color: '#000', width: '100%'}} />
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize:'36px', color: '#004063'}}>Educational collaborations</h6>
                    <p class="my-4" style={{fontSize: '18px'}}>VU is a member of the following collaborative institutions:</p>
                    <p class="mb-4 t2">&emsp;&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}>OERu  <span class="fa fa-external-link"></span></a> (The Open Educational Resources university) a consortium of more than 29 higher educational institutions on five continents supporting the assessment and accreditation of learners using OER.</p>
                    <br/>
                </div>
            </div>
            <hr class="text-center" style={{color: '#000', width: '100%'}} />
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '36px', color: '#004063'}}>International partnerships</h6>
                    <p class="my-4" style={{fontSize: '18px'}}>We have partnership agreements with the following international institutions:</p>
                    <ul style={{listStyle: 'none'}}>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;University Chennai, India&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                    </ul>
                    <br/>
                </div>
            </div>
            <hr class="text-center" style={{color: '#000', width: '100%'}} />
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '36px', color: '#004063'}}>Institutional alliances</h6>
                    <p class="my-4" style={{fontSize: '18px'}}>We maintain additional educational or research agreements with the following institutions and organizations:</p>
                    <ul style={{listStyle: 'none'}}>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;Access Media Group&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;Access Media Group&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;Access Media Group&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                        <li class="mb-4 t2">&emsp;<span class="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;Access Media Group&nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></li>
                    </ul>
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
                        <div style={{width: '100%', backgroundColor: '#CCC', border: '#CCC 1px solid', paddingTop: '15px', paddingBottom: '15px'}}><h5 class="text-center" style={{fontSize: '30px', color: '#025683'}}>Helpful links & resources:</h5></div>
						<ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
							<li class="w3-display-container collapsible"><span><span class="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Give To VU<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></li>
							<div class="contenter" style={{backgroundColor: '#FFF'}}>
								<br/>
								<div class="col-lg-12 welcome-image">
									<div class="" style={{width: '100%', backgroundColor: '#fff'}}>
										<p class="my-4">Learn how you can</p>
                                        <p class="my-4">support our efforts &nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span class="fa fa-external-link"></span></a></p>
                                        <p class="my-4">to remove barriers to university-level studies and help students succeed.</p>
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