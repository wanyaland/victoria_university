import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import AskInfo from './ask-info';
import GetInfo from './get_info';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Keydates extends Component{
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
                <div className="">
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
                    <Link to="/admissions"><span className="underline" style={{color: "#EEE"}}>
					Admissions 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Key Dates and Deadlines</span>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<br/>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Key Dates and Deadlines</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '18px'}}>As an online university that lets you learn on your own schedule, it’s our priority to make sure your education fits into your life rather than the other way around. That’s why Victoria University approaches scheduling differently than traditional schools.
                    </p>
                    <p className="mb-4" style={{fontSize: '18px'}}>We’ve designed our admission policies and course structure with your need for flexibility in mind. Which means, even though we do have many universal events and milestones, very few deadlines apply to all of our students. Therefore, your key dates will likely be different from those of your classmates.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-footer-16 text-center">
    <div className="container">
        <h3 className="hny-title text-left" style={{color: '#0077b5'}}>All important dates and deadlines for your online studies at a glance</h3>
    </div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="col-lg-12 welcome-image">
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Application deadlines<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate studentsa</p>
                                        <p className="my-4"><span className="fa fa-clock-o"></span> Apply anytime – no deadline!</p>
                                        <p className="my-4">You can apply to VU anytime without a deadline. All undergraduate programs enrol students year round. Just keep in mind that after your program application gets approved you will still need to register for courses to get started.</p>
                                        <p>
                                            <Link className="logo-2" href="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                                                <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;Learn more about undergraduate applications
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate studentsa</p>
                                        <p className="my-4"><span className="fa fa-clock-o"></span> Apply anytime – no deadline!</p>
                                        <p className="my-4">You can apply to VU anytime without a deadline. All undergraduate programs enrol students year round. Just keep in mind that after your program application gets approved you will still need to register for courses to get started.</p>
                                        <p>
                                            <Link className="logo-2" href="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                                                <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;
                                                </span><span className="underline">Learn more about undergraduate applications</span>
                                            </Link>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Undergraduate studentsa</p>
                                        <p className="my-4"><span className="fa fa-clock-o"></span> Apply anytime – no deadline!</p>
                                        <p className="my-4">You can apply to VU anytime without a deadline. All undergraduate programs enrol students year round. Just keep in mind that after your program application gets approved you will still need to register for courses to get started.</p>
                                        <p>
                                        <Link className="logo-2" href="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
                                                <span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;
                                                </span><span className="underline">Learn more about undergraduate applications</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Course deadlines<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
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
                                            <Link className="logo-2" href="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner7", "iconner8")} onMouseOut={this.change_icon2.bind(this, "iconner7", "iconner8")}>
                                                <span className="lohny-2"><span  id="iconner7" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner8" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;<span className="underline">Learn how to register for courses</span>
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                    <hr />
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
                                            <Link className="logo-2" href="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner9", "iconner10")} onMouseOut={this.change_icon2.bind(this, "iconner9", "iconner10")}>
                                                <span className="lohny-2"><span  id="iconner9" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner10" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;<span className="underline">Learn how to register for courses</span>
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
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
                                            <Link className="logo-2" href="/apply" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner11", "iconner12")} onMouseOut={this.change_icon2.bind(this, "iconner11", "iconner12")}>
                                                <span className="lohny-2"><span  id="iconner11" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner12" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;<span className="underline">Learn how to register for courses</span>
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Other key dates<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">Learn how you can</p>
                                        <p className="my-4">support our efforts &nbsp;&nbsp;<a href="#home" style={{color: '#025683'}}><span className="fa fa-external-link"></span></a></p>
                                        <p className="my-4">to remove barriers to university-level studies and help students succeed.</p>
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
                <AskInfo />
                <GetInfo />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Keydates;