import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Faculties extends Component {
    componentDidMount(){
        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("activer");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                content.style.maxHeight = null;
                } else {
                content.style.maxHeight = content.scrollHeight + "px";
                } 
            });
        }
    }
    render() {
        /* Level Filter */
        /* Faculty And Level Filter -business */
        const faculty_BusUnder = 'faculty_Busundergraduate'
		const faculty_BusPostg = 'faculty_BusPostgraduate'
		const faculty_BusDiploma = 'faculty_Busdiploma'
		const faculty_BusProfessional = 'faculty_Busprofessional'
        /* Faculty And Level Filter -tech */
        const faculty_TechUnder = 'faculty_Techundergraduate'
		const faculty_TechPostg = 'faculty_TechPostgraduate'
		const faculty_TechDiploma = 'faculty_Techdiploma'
		const faculty_TechProfessional = 'faculty_Techprofessional'
        /* Faculty And Level Filter -Health */
        const faculty_HealthUnder = 'faculty_Healthundergraduate'
		const faculty_HealthPostg = 'faculty_HealthPostgraduate'
		const faculty_HealthFound = 'faculty_HealthFound'
		const faculty_HealthProfessional = 'faculty_Healthprofessional'
        /* Faculty And Level Filter -Humanity */
        const faculty_HumanUnder = 'faculty_Humanundergraduate'
		const faculty_HumanPostg = 'faculty_HumanPostgraduate'
		const faculty_HumanDiploma = 'faculty_HumanDiploma'
		const faculty_HumanFound = 'faculty_HumanFound'
		const faculty_HumanProfessional = 'faculty_Humanprofessional'
        /* Faculty And Level Filter -Education */
        const faculty_EduUnder = 'faculty_Eduundergraduate'
		const faculty_EduPostg = 'faculty_EDuPostgraduate'
        /* Faculty And Level Filter -Law */
        const faculty_LawPost = 'faculty_Lawpostgraduate'
        const faculty_LawUner = 'faculty_Lawundergraduate'
        return (
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-apply-6">
					<div className=""  style={{}}>
						<div className="container" style={{maxWidth: '100%' , padding: '0', margin: '0'}}>
							<div id="carouselExampleSlidesOnly" className="carousel" data-ride="">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src="assets/images/admissions.jpg" alt="First slide" style={{filter: 'brightness(60%)'}}/>
									</div>
                                    <div className='banner-caption'>&nbsp;Faculties</div>
								</div>
							</div>
						</div>
					</div>
				</section>
<section className="w3l-top-header-content">
    <div className="hny-top-menu">
        <div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
            <div className="container-fluid">
                <div className="" style={{color: '#EEE'}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Academic Faculties & Centers</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Academic Faculties & Centers</h6>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5">
            <div className="welcome-grids row">
                <div className="col-lg-12 welcome-image">
                    <div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid'}}>
                        <ul className="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li className="w3-display-container collapsible" id="business"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Faculty of Business and Management<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                                <Link to={`prog-index/${faculty_BusPostg}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Postgraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_BusUnder}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Undergraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_BusDiploma}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_BusProfessional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Professional Courses <span className="fa fa-external-link"></span></li></Link>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Faculty of Science and Technology<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                            <Link to={`prog-index/${faculty_TechPostg}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Postgraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_TechUnder}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Undergraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_TechDiploma}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_TechProfessional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Professional Courses <span className="fa fa-external-link"></span></li></Link>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Faculty of Health Sciences<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                                <Link to={`prog-index/${faculty_HealthPostg}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Postgraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_HealthUnder}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Undergraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_HealthProfessional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Professional Courses <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_HealthFound}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Higher Education Certificate<span className="fa fa-external-link"></span></li></Link>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Faculty of Humanities and Social Science<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                                <Link to={`prog-index/${faculty_HumanPostg}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Postgraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_HumanUnder}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Undergraduate <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_HumanDiploma}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Diploma <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_HumanProfessional}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Professional Courses <span className="fa fa-external-link"></span></li></Link>
                                                <Link to={`prog-index/${faculty_HumanFound}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Higher Education Certificate<span className="fa fa-external-link"></span></li></Link>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;Faculty of Education<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                            <Link to={`prog-index/${faculty_EduPostg}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Postgraduate <span className="fa fa-external-link"></span></li></Link>
                                            </ul>
                                        </p>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                            <Link to={`prog-index/${faculty_EduUnder}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Undergraduate <span className="fa fa-external-link"></span></li></Link>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                            <li className="w3-display-container collapsible"><span><span className="fa fa-chevron-right programfa2"></span></span>&nbsp;&nbsp;&nbsp;School Of Law<span onClick="this.parentElement.style.display='none'" className="w3-button w3-transparent w3-display-right"></span></li>
                            <div className="contenter" style={{backgroundColor: '#FFF'}}>
                                <br/>
                                <div className="col-lg-12 welcome-image">
                                    <div className="" style={{width: '100%', backgroundColor: '#fff'}}>
                                        <p className="my-4">
                                            <ul style={{listStyle: 'none'}}>
                                            <Link to={`prog-index/${faculty_LawPost}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Postgraduate <span className="fa fa-external-link"></span></li></Link>
                                            <Link to={`prog-index/${faculty_LawUner}`}><li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Undergraduate <span className="fa fa-external-link"></span></li></Link>
                                            </ul>
                                        </p>
                                    </div>
                                </div>	
                                <br/>
                            </div>
                        </ul>
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
export default Faculties;