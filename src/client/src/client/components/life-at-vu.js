import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class LifeVu extends Component {
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
					<span style={{color: '#EEE'}}>/ Life at VU</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Life At VU</h6>
                    <br/>
                    <p className="my-4" style={{fontSize: '18px'}}>With a truly national and increasingly international student body, Victoria University is a distinctive place to study. The diversity of backgrounds and mindsets of our students fosters an environment in which everyone, as well as everyone’s opinions, are both welcomed and nurtured. A fulfilling student social life is considered an essential part of the University experience. One of the best ways to build student social circles is to participate in the many on-campus activities. Our students have a variety of co-curricular activities they can engage in including Football, Netball, Basketball, Volleyball and Woodball. The Students’ Lounge, furnished with a video games console, pool table and table tennis is quite popular with students.</p>
                    
                    <p className="my-4">Students also organise several social activities including;</p>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Mr. and Miss VU</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Vice Chancellor’s Dinner</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">International Day</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">End of Year party</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">End of Semester Party</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Freshers’ Ball</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Fun Day</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Movie Night</span></li>
                            <li className="mb-4 t2">&emsp;<span className="fa fa-angle-right" style={{color: '#025683'}}></span>&emsp;<span className="">Faculty Deans’ Outing"</span></li>
                        </ul>
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

export default LifeVu;