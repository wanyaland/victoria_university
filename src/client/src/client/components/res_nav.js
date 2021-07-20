import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResNav extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="col-lg-3 with_shadow">
					<div className="sidenavd">
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}><Link to="/about-res" className="logo-2">About Research</Link><span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}><Link to="/ethics-res">Ethics & Research</Link><span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}><Link to="to/avail-res">Available opportunities</Link><span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}><Link to="academic-res"> Research & Academics</Link><span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}><Link to="/superv-res" >Research supervisors and mentors</Link><span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container">News & Events<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <li className="w3-display-container" style={{borderBottom: 'none'}}>The Hub<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-external-link"></span></span></li>
							{/* <li className="w3-display-container" >Victoria University Strategic Research Plan 2018-2022<span onclick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"><span className="fa fa-file-pdf-o"></span></span></li> */}
                        </ul>
                    </div>
				</div>
            </React.Fragment>
        )
    }
}

export default ResNav;