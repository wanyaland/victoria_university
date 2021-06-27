import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class WilNav extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="sidenavd">
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}><Link to='/wil'>About WIL<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}><Link to='/how-wil-works'>How WIL works<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}><Link to='/benefits'>Benefits<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container"style={{borderBottom: 'none'}}><Link to='/costs-and-insurance'>Costs and insurance<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container"style={{borderBottom: 'none'}}><Link to='/wil-hall-of-fame'>WIL Hall of Fame<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container" style={{borderBottom: 'none'}}><Link to='/contactwil'>Contact us<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                        </ul>
                    </div>
            </React.Fragment>
        )
    }
}

export default WilNav;