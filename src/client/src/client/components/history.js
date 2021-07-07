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
                    <p className="my-4" style={{fontSize: '22px'}}>Victoria University is home to opportunities. It’s where you’ll leave behind what’s familiar and step into a world of endless possibilities. Who you are,
                    what you want, where you’ll go, and how you can impact your community,
                    country and the world are yours to discover. We are Uganda’s most innovative
                    university, you’ll be encouraged to take risks and challenge the status quo,
                    to pursue an idea and disrupt industries. Whether you launch your own start-up
                    and grow it into a vibrant company, write a best-selling book, or pursue a new
                    career through our Co-operative (Co-op) Education Program – call it
                    Experiential Learning (EL), we want you to think of an idea, grow it, solve
                    problems and impact the world. So come prepared to learn and leave prepared to
                    succeed, that is our promise to you. What is yours? And Where will you go from
                    here?</p>
                    <p className="my-4" style={{fontSize: '22px'}}>We are setting the bar for co-op education and experiential learning in Uganda
                    because we saw a need for experienced, university-educated graduates. We
                    encourage dreamers and entrepreneurs because we believe that cultivating
                    creativity is key to global progress. We value diversity and inclusivity
                    because we know we’re better, brighter, and stronger together. Some people
                    call us innovative, but that’s just who we are. As we welcome you to Victoria
                    University, we encourage you to be yourself, work hard, and reap the rewards.
                    We’ll do the same to support you as our student and partner in impacting
                    society.
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