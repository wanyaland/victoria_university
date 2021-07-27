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
                    <p className="my-4" style={{fontSize: '18px'}}>Victoria University is one of the leading Universities in Uganda and stands out as a center for academic excellence. It offers a fresh and intellectually stimulating environment that nurtures critical thinkers. The University was opened in 2013 and has the capacity , the facilities and determination to revitalize higher education in Uganda and in the region. We are committed to playing a leading role in bringing and developing high quality, student centered learning opportunities based on standards of excellence that are unique, innovative and difficult to match. 
                    </p>
                    <p className="my-4" style={{fontSize: '18px'}}>
                    The University is centrally located in the heart of Kampala city and on the main public transportation routes coupled with ample parking space. Victoria University is part of the Ruparelia Group of Companies which has a strong presence in the education sector in Uganda and has under its portfolio, kampala international school of uganda, kampala parents school, Delhi Public School international.
                    Victoria University is a cosmopolitan university, accredited by the National Council for Higher Education with a wide range of nationalities. With a reputation as the best private ,forward thinking and modern University in East Africa, Victoria University offers a vibrant and stimulating environment to further your needs, study or research a subject in greater depth, or aiming to extend your knowledge and skills in pursuit of your career ambition"
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