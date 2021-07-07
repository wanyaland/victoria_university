import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Staff extends Component {
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
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Employee Information</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Employee Information</h6>
                    <h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Institutional learning outcomes</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '22px'}}>Victoria University is a public research university specializing in online and distance learning, offering university education to over 40,000 students a year.
                    </p>
                    <p><Link className="logo-2" to="/careers" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Career opportunities</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr style={{width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Find a person</h6>
                    <br/>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Phone and email search <span className="fa fa-external-link"></span></li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Faculty and program directors</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Call the Information Centre</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<hr style={{width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>Current faculty and staff</h6>
                    <br/>
                    <p className="my-4">The myVU Staff Portal provides access to all web-based staff services in one convenient location. Access your:</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Pay stubs</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Leave requests</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Expense claims</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Application and job tools</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Staff intranet</li>
                        </ul>
                    </p>
                    <p><Link className="logo-2" to="/student-profile" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner3", "iconner4")} onMouseOut={this.change_icon2.bind(this, "iconner3", "iconner4")}>
                        <span className="lohny-2"><span  id="iconner3" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner4" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;Log in now</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Staff;