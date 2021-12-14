import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResNav extends Component{
    constructor(props) {
		super(props);
        this.state = {
            url: '',
        }
    }
    componentDidMount(){
        this.setState({
            url: window.location.pathname.replace(/\//g, '')
        })
    }
    showSide = () => {
        var element = document.getElementById('mob_bar_control')
        element.classList.toggle("showr")
    }
    render(){
        return(
            <React.Fragment>
            <button className="side_control_btn" onClick={this.showSide}><span className="fa fa-bars text-center justify-content-center" style={{fontSize: '30px'}}></span></button>
                <div className="col-lg-3 with_shadow side_control" id="mob_bar_control">
                <div className="sidenavd">
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className={this.state.url === "research"? "prog-list prog-list-active quat-line" : "prog-list"} style={{padding: '6px 22px'}}><Link to='/research' style={{fontSize: '16px'}}>Research<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "about-res"? "prog-list prog-list-active quat-line" : "prog-list"} style={{padding: '6px 22px'}}><Link to='/about-res' style={{fontSize: '16px'}}>About Research<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "ethics-res"? "prog-list prog-list-active quat-line" : "prog-list"} style={{padding: '6px 22px'}}><Link to='/ethics-res' style={{fontSize: '16px'}}>Ethical Conduct of Research<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "avail-res"? "prog-list prog-list-active quat-line" : "prog-list"} style={{padding: '6px 22px'}}><Link to='/avail-res' style={{fontSize: '16px'}}>Available opportunities & options<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "academic-res"? "prog-list prog-list-active quat-line" : "prog-list"} style={{padding: '6px 22px'}}><Link to='/academic-res' style={{fontSize: '16px'}}>Research & Academics<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "superv-res"? "prog-list prog-list-active quat-line" : "prog-list"} style={{padding: '6px 22px'}}><Link to='/superv-res' style={{fontSize: '16px'}}>Research supervisors and mentors<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                        </ul>
                    </div>
				</div>
                
            </React.Fragment>
        )
    }
}

export default ResNav;