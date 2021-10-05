import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Library extends Component {
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
					<span style={{color: '#EEE'}}>/ Library</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Library</h6>
                    <br/>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>About the Library</p>
                        Victoria University Library (VULIB), we provide a range of services to support the learning, teaching, and research of the University including access to extensive information resources, a wide range of flexible learning environments, and the support you need to achieve your learning goals, enhance your research or develop new skills.
                    </p>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>VULIB as an outstanding library</p>
                        With a world of knowledge and expertise at your fingertips, you’ll find the Library’s place at the heart of your university experience. It’s a place to explore new horizons, a place to discover your passion, and a place to respond to world-challenges. We continually invest to create the right environment for you, and whatever your level of study or area of research, we're here to help you succeed.If you choose VULIB, you’ll have access to rich resources, outstanding facilities and support – and the freedom to do things your own way.
                    </p>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>Enabling world-class research</p>
                        We work across the University to provide a range of services to support our diverse students and research community in all aspects of the research life cycle.
                        You will have access to an extensive collection of digital and print resources - including over a thousand e-books, journal titles, open access material and over four thousand six hundred seventy-five thousand (4675) print volumes.
                        These collections support learning and research, are both on-and off-campus access enabled and covering the full range of academic subjects, our collections span everything from Computer science, information & general works to History and Geography. These academic subjects are classified Using the Dewey Decimal Classification System (DDC).
                        However, because we take your future ambitions seriously. That’s why we invest every year in the right e-books, journals, databases, making sure you have all the resources and inspiration you need and your fingertips. You can access our digital collections from anywhere using our paid up MyLoft (My-library at My Finger Tips) Account using this link https://www.myloft.xyz
                    </p>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>Flexible learning spaces</p>
                        Our flexible learning spaces offer unique environments to support students or researcher needs. 
                        Study/Discussion spaces and computers are readily available so you can make the most of your time.
                        The Library spaces are designed entirely around you and providing the environment you need to live your best university life of knowledge acquisition. 
                    </p>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>A supportive Library staff environment</p>
                        Our library isn’t just about books, although we do have a lot of them. We’re also about people.You’ll develop your knowledge in our supportive environment, with the approachable library staff, available virtually or on-campus. The Library has a great team of dedicated, professional staff who are highly regarded in their fields of expertise. All of them are committed to helping you through various arrangements such as: 1-2 small group training sessions on how to fully use the library resources are available throughout the year, usually between 8am and 5pm on Mondays to Fridays. Other times may also be feasible - please you need to schedule an appointment. Looking forward to meeting with you. To make an appointment for a support session, email library@vu.ac.ug or call +256707780156  
                    </p>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>Our mission, our vision and how we support the University</p>
                        To become a Centre of Excellence for library resources and services is core to our mission. We offer engaging experiences with people and content that enrich the University’s learning and research communities - in both physical and digital spaces. The Library has an enduring impact on both the student and researcher experience. Library enriches the intellectual and creative life of our users by facilitating information discovery and the creation and dissemination of research. We offer a user-centered library service, designed in collaboration with our University and the community around.
                    </p>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>VULIB COVID-19 Statement Update</p>
                        Under the latest government restrictions VULIB Library is not open for physical access and bookable study. There is limited access to library study space. If you are want to access our E-Library, kindly use our MYLOFT web App or download the Mobile App Version on to your gadgets for use off campus, please before downloading, make sure you have contacted our library staff for to get your username and password registration, this helps us comply with contact tracing during the pandemic.
                        If you require library support, remember you can access this online library@vu.ac.ug or via calling the VULIB Tel no: +256707780156 and our staff will be available to assist you.
                    </p>
                    <p className="my-4">
                        <p className="my-4" style={{fontSize: '22px', fontWeight: '500', color: '#0077b5'}}>Health and safety measures during Covid 19</p>
                        When visiting any of our facilities, you are required to follow each of the safety measures we have in place. Continued access to services and facilities relies on compliance with expected behaviors and you may be asked to leave if you do not follow requested safety measures as below:
                        <p className="my-4">
                             <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                <ul style={{listStyle: 'none'}}>
                                    <li className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;&nbsp;Face coverings - you must wear a face covering during your time in our buildings or study spaces, unless exempt. This includes while seated at your study desk. </li>
                                    <li className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Keep your distance - please follow any route plans marked and maintain social distancing of 2 metres.</li>
                                    <li className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Ensure good hand hygiene – wash your hands regularly and use hand sanitizer on entry and exit of the building and before and after touching or using any books or equipment.</li>
                                    <li className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Clean as you go – wipe down all desks and surfaces before and after use and put all rubbish in the bins provided.</li>
                                    <li className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Use the study desk you have been allocated – all study spaces are individual – you may not sit adjacent to anyone else, regardless of you sharing the same programs.</li>
                                </ul>
                            </div>
                        </p>
                        <p className="my-4">We will continue to update you with any changes to our services in line with guidance from the Government Ministry of Health and University.</p>
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

export default Library;