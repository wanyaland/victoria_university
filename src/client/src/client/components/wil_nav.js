import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class WilNav extends Component{
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
                        <li className="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}>
                        <h6 style={{fontSize: '24px'}}>Work Integrated Learning</h6>
                        <div style={{width: '35%', border:'#f04545 2px solid'}} className="text-ec"></div></li>
                            <li className={this.state.url === "wil"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/wil' style={{fontSize: '16px'}}>About WIL<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "how-wil-works"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/how-wil-works' style={{fontSize: '16px'}}>How WIL works<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "keysteps"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/keysteps' style={{fontSize: '16px'}}>Key Steps<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "benefits"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/benefits' style={{fontSize: '16px'}}>Organization / Partner / Employer Benefits<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "yourcall"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/yourcall' style={{fontSize: '16px'}}>Your Call<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            {/* <li className={this.state.url === "wil-hall-of-fame"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/wil-hall-of-fame' style={{fontSize: '16px'}}>WIL Hall of Fame<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li> */}
                            <li className={this.state.url === "contactwil"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/contactwil' style={{fontSize: '16px'}}>Contact us<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li className={this.state.url === "wilfaqs"? "prog-list prog-list-active quat-line" : "prog-list"} style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/wilfaqs' style={{fontSize: '16px'}}>FAQs<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></Link></li>
                        </ul>
                    </div>
				</div>
            </React.Fragment>
        )
    }
}

export default WilNav;