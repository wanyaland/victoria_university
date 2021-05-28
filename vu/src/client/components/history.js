import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';

class History extends Component {
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
    <div class="hny-top-menu">
        <div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
            <div class="container-fluid">
                <div class="row">
                    <ol class="accounts col-md-4">
                        <li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#FFF'}}></span> Victoria University / Admissions / History</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</section>
<br/>
<section class="w3l-wecome-content-6">
    <div class="ab-content-6-mian py-5">
        <div class="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div class="welcome-grids row">
                <div class="col-lg-12 mb-lg-0 mb-5">
                    <h6 class="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>History</h6>
                    <br/>
                    <p class="my-4" style={{fontSize: '22px'}}>Victoria University was established by Order in Council of the Government of Alberta on June 25, 1970. Originally conceived as a traditional campus-based institution, AU changed course in 1972 through a pilot project to test the concept of an open, distance university. The first AU course, World Ecology, was offered in 1973, and AU's first Convocation, for two graduates, was held in 1977. The university achieved self-governing status as Alberta's fourth public university on April 12, 1978.</p>
                    <p class="my-4" style={{fontSize: '22px'}}>By 1984, AU had outgrown its original facilities in Edmonton and, in accordance with the policy of decentralization favoured by the provincial government of the day, the university moved 145 kilometres north to the Town of Athabasca. Satellite campuses were established in Calgary, Edmonton and Fort McMurray, Alberta, to enable students to receive first-hand educational support services and to write invigilated examinations. The Fort McMurray location closed in 2000.</p>
                    <p class="my-4" style={{fontSize: '22px'}}>During the 1980s, in keeping with its mandate to explore new ways of delivering post-secondary education to students anywhere, any time, AU pioneered the use of computers to deliver online courses. AU's Executive MBA program, the world's first online EMBA, was introduced by AU's Centre for Innovative Management in 1994.</p>
                    <p class="my-4" style={{fontSize: '22px'}}>Today, AU is one of the world's foremost and fastest growing online and distance education institutions, serving over 40,000 students worldwide.
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