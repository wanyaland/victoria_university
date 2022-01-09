import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Data from './data/policy.json'
import PolicyList from './policy-list';


class Policies extends Component{
	constructor(props) {
		super(props);
		this.state = {
			policylist: [],
		}
	}
	
	componentDidMount(){
		this.getPolicy()
	}

	getPolicy = () => {
		this.setState({
			policylist: Data,
		})
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
					<span style={{color: '#EEE'}}>/ Policies</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
	
		<div className="container">
			<h2 style={{color: '#f74040'}}>Policies And Manuals</h2>
		</div>
	</div>
</section>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4 ">
		
			<div className="row">
				<div className="col-md-12 filter graphic">
					<div className="each-item">
							<p>This website provides a central location for approved policies and procedures currently in effect. The policies and procedures available here, taken together, form the university's policy and procedure manual.Questions regarding content of a particular policy should be directed to the policy sponsor, as noted in the policy. Questions regarding the manual should be directed to the Policy Coordinator.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			{/* <div className="port-text-cards text-left mt-5 mb-3 col-lg-4" style={{backgroundColor:'#0077b5'}}>
				<li className="btn active filter-button" data-filter="all" style={{color:'#fff'}}>Policy and Manuals</li>
			</div>
			<br /> */}

			<div className="row">
				<div className="col-md-12 filter graphic photo">
					<div className="each-item">
						<PolicyList policylist={this.state.policylist}/>
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

export default Policies;