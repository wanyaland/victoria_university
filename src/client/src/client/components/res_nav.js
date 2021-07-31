import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResNav extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="col-lg-3 with_shadow">
                <div className="sidenavd">
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/about-res' style={{fontSize: '16px'}}>About Research<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/ethics-res' style={{fontSize: '16px'}}>Ethics & Research<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/avail-res' style={{fontSize: '16px'}}>Available opportunities<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className="w3-display-container"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/academic-res' style={{fontSize: '16px'}}>Research & Academics<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className="w3-display-container"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/superv-res' style={{fontSize: '16px'}}>Research supervisors and mentors<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                        </ul>
                    </div>
				</div>
                
            </React.Fragment>
        )
    }
}

export default ResNav;