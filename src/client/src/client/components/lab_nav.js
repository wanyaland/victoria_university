import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LabNav extends Component{
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
                            <li className={this.state.url === "library"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/library' style={{fontSize: '16px'}}>About Library<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "lending"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/lending' style={{fontSize: '16px'}}>Lending services<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "secretarial"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/secretarial' style={{fontSize: '16px'}}>Secretarial services<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "electric"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/electric' style={{fontSize: '16px'}}>Electronic Services<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "call-number"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/call-number' style={{fontSize: '16px'}}>Call Number Guides<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "catalogue"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/catalogue' style={{fontSize: '16px'}}>Library Catalogue<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "lib-contact"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/lib-contact' style={{fontSize: '16px'}}>VULIB Helpdesk<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "faqs"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/faqs' style={{fontSize: '16px'}}>FAQs<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "opening"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/opening' style={{fontSize: '16px'}}>Opening Hours<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "off-campus"? "prog-list prog-list-active" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/off-campus' style={{fontSize: '16px'}}>Off Campus resources<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                        </ul>
                    </div>
				</div>
            </React.Fragment>
        )
    }
}

export default LabNav;