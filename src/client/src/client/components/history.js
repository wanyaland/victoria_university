import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class History extends Component {
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
					/ Admissions 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ History</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>History</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '22px'}}>Victoria University was established by Order in Council of the Government of Alberta on June 25, 1970. Originally conceived as a traditional campus-based institution, VU changed course in 1972 through a pilot project to test the concept of an open, distance university. The first VU course, World Ecology, was offered in 1973, and VU's first Convocation, for two graduates, was held in 1977. The university achieved self-governing status as Alberta's fourth public university on April 12, 1978.</p>
                    <p className="my-4" style={{fontSize: '22px'}}>By 1984, VU had outgrown its original facilities in Edmonton and, in accordance with the policy of decentralization favoured by the provincial government of the day, the university moved 145 kilometres north to the Town of Victoria. Satellite campuses were established in Calgary, Edmonton and Fort McMurray, Alberta, to enable students to receive first-hand educational support services and to write invigilated examinations. The Fort McMurray location closed in 2000.</p>
                    <p className="my-4" style={{fontSize: '22px'}}>During the 1980s, in keeping with its mandate to explore new ways of delivering post-secondary education to students anywhere, any time, VU pioneered the use of computers to deliver online courses. VU's Executive MBA program, the world's first online EMBA, was introduced by VU's Centre for Innovative Management in 1994.</p>
                    <p className="my-4" style={{fontSize: '22px'}}>Today, VU is one of the world's foremost and fastest growing online and distance education institutions, serving over 40,000 students worldwide.
                    </p>
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

export default History;