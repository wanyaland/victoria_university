import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Staff extends Component {
    	change_icon(id, id2) {
		var element = document.getElementById(id);
		element.classList.add("hider");
		var element2 = document.getElementById(id2);
		element2.classList.add("block");
	 }
	 change_icon2(id, id2){
		var element = document.getElementById(id);
		element.classList.remove("hider");
		var element2 = document.getElementById(id2);
		element2.classList.remove("block");
		console.log('HI4')
	 }
     view_bio(id) {
        var modal = document.getElementById(id);
        modal.style.display = "block";
    }

    close_bio(id) {
        var modal = document.getElementById(id);
        modal.style.display = "none";
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
                <div className="" style={{color: '#EEE'}}>
                    <Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/admissions"><span className="underline" style={{color: "#EEE"}}>
					Admissions 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Management Team</span>
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
                    <h6 className="hny-title" style={{fontSize: '48px', color: 'orange', fontWeight: '600'}}>Management Team</h6>
                    <p className="my-4" style={{fontSize: '22px'}}>Victoria University is home to opportunities. It’s where you’ll leave behind what’s familiar and step into a world of endless possibilities. Who you are, what you want, where you’ll go, and how you can impact your community, country and the world are yours to discover.
                    </p>
                    <p><Link className="logo-2" to="/careers" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#ff7b00'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#ff7b00', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Career opportunities</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <hr style={{width: '90%'}} />
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '32px', color: '#0077b5'}}>About Staff</h6>
                    <br/>
                    <p className="my-4">
                        <ul style={{listStyle: 'none'}}>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Phone and email search <span className="fa fa-external-link"></span></li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Faculty and program directors</li>
                            <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;Call the Information Centre</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> */}
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						{/* <img src="assets/images/trustees/aliker.jpg" className="img-fluid" alt="" style={{height: '100%', width: '100%'}} /> */}
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Dr Nwanna Uchechukwu Kevin</h6>
					<p className="my-4">Dr Nwanna Uchechukwu Kevin is a renowned Public Health specialist, a citizen of Nigeria but resides in Uganda for over 7 years. He had his Doctoral degree in Public Health (specialization in Occupational Safety and Health) from City University, Cambodia. He obtained his Master of Science in Public Health from the International Health Sciences University, Uganda.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" id="myBtn_bio" onClick={() => this.view_bio("myModal_bio 1")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 1" className="modal_bio">
				<div className="modal-content_bio">
					<span className="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
					<br/>
					<p className="my-4">Dr Nwanna Uchechukwu Kevin is a renowned Public Health specialist, a citizen of Nigeria but resides in Uganda for over 7 years. He had his Doctoral degree in Public Health (specialization in Occupational Safety and Health) from City University, Cambodia. He obtained his Master of Science in Public Health from the International Health Sciences University, Uganda. He studied a Post-Graduate Diploma in Teaching and Management at Higher Education from the Islamic University in Uganda. In addition to his name, he is a U.K certified IOSH specialist (Institute of Occupational Safety and Health); he bagged his Bachelor of Science Degree in Human Anatomy from the University of Portharcourt, Nigeria. <br/><br/>Dr. Nwanna is a Senior Lecturer in Victoria University, Uganda and doubles as the Dean of Faculty of Health Sciences in the same University. He has served as Head of Department and Dean of Faculty in two Universities in Uganda and has over 21 peer-reviewed research publications attributed to his name together with over 10 short courses and certificates in various academic and social disciplines. <br/><br/> He has consulted for various organizations such as WHO, Uganda Ministry of Health and other international agencies. In academia, he has taught and supervised various undergraduate and postgraduate students to completion since 2015 up till now.One of his newest published research papers is on the impact of Covid-19 on the Education industry in Africa. Dr. Nwanna is a Fellow of the Medical Research Council (FMRC) in the United Kingdom and a Fellow of the African Institute of Public Health Professionals.
                    </p>
				</div>
			</div>			  
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/staff/walusimbi.jpg" className="img-fluid" alt="" style={{height: '100%', width: '100%'}} />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Dr. Joseph Denis Walusimbi</h6>
					<p className="my-4">He is the Dean, Faculty of Business and Management at Victoria University. <br/><br/>Dr. Walusimbi holds a Doctorate degree from the Maastricht School of Management (MsM) in the Netherlands, an MBA from the East and Southern Africa Management Institute and a Bachelors in Business Administration degree from Makerere University.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" id="myBtn_bio" onClick={() => this.view_bio("myModal_bio 2")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 2" className="modal_bio">
				<div className="modal-content_bio">
					<span className="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
					<br/>
					<p className="my-4">
                    Dr. Walusimbi holds a Doctorate degree from the Maastricht School of Management (MsM) in the Netherlands, an MBA from the East and Southern Africa Management Institute and a Bachelors in Business Administration degree from Makerere University.<br/><br/>An astute academician and organizational development consultant embodied with a wide array of skills which when applied to educational institutions and business enterprises alike has proven to lead to significant and sustainable growth.<br/><br/>24 years of global experience in commercial, development and education sectors; various departmental roles in FMCG and services industries, leadership of projects for NGOs and community-based organisations, global advisory services for nascent and established entrepreneurial ventures, as well as thought-leadership based courses facilitation for local and regional management institutes.<br/><br/>Multi-skilled in the areas of Strategy Development, Customer Relationship Management (CRM), Commercial Management (Sales, Brand & Trade Marketing), Communications, Organisational Development Advisory and Industry Value Chain & Cluster Analysis, Board Governance, Operations Management, Leadership, Research, Stakeholder Communications, Media Enagement, Project Management, Partnerships Building, Capacity Development, Resource Mobilisation, Gender & Inclusion, Rights-based Project Development, Public Speaking, Entrepreneurial Coaching and Financial Management
                    </p>
				</div>
			</div>			  
		</div>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/staff/" className="img-fluid" alt="" style={{height: '100%', width: '100%'}} />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Dr. Alone Kimwise (PhD-MIS, MBA-IT,BSE)</h6><p className="my-2">Dean Faculty of Science and Technology</p>
					<p className="my-4">He is the Dean, Faculty of Business and Management at Victoria University. <br/><br/>Dr. Walusimbi holds a Doctorate degree from the Maastricht School of Management (MsM) in the Netherlands, an MBA from the East and Southern Africa Management Institute and a Bachelors in Business Administration degree from Makerere University.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" id="myBtn_bio" onClick={() => this.view_bio("myModal_bio 3")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 3" className="modal_bio">
				<div className="modal-content_bio">
					<span className="close_bio" onClick={() => this.close_bio("myModal_bio 3")}>&times;</span>
					<br/>
					<p className="my-4">
                    Alone Kimwise (PhD) is currently a Dean and Senior Lecturer in faculty of Science and Technology at Victoria University, former Principal investigator, Acting ICT Director; and Head of Computing Department at Kampala International University (KIU). He has worked at higher education institutions both local and international levels. He has also served under the Inter-University Council of East Africa (IUCEA) arrangement of staff exchange at Independent University of Kigali (ULK) and University of Technology and Arts, Byumba, Rwanda (UTAB). Additionally, he has spent over ten years in various capacities as Teaching Assistant, Assistant Lecturer, and Lecturer. His research interests are in areas of Education, Business and Management as well as Science and Technology.<br/><br/>His areas of specialization include Advanced Research Methods, ICT for Development, System Analysis and Design, IT-Project Planning and Management, Computer and Information Security, Networks Data Communications, Managerial Economics, Operation Management, Advanced Statistical Methods In Research, Data Analysis by Use of SPSS,R-Studio, Organizational Behavior, ICT Policy and Cyber Law, Management Information Systems, Entrepreneurship and Global IT Industry, Computer Hardware and Architecture, Multimedia, Database Management Systems , Human-Computer Integration.<br/><br/>He has a PhD in Management Sciences -Information Systems, a Master in Business Administration- Information Technology and a Bachelor of Science with Education, all of which he attained from Kampala University. Dr Kimwise has also attended and facilitated numerous conferences and has been a recipient of several grants for his research projects by bodies and institutions like Stockholm University Sweden, and even Government of the United States of America.<br/><br/>He has also supervised over 10 students at postgraduate level in areas of Business, Public Administration, IT and Management Information Systems and has also been an administrator at Higher Education Institutions.  As the Director of ICT 2013-2016 KIU western Campus and the head of the Computing Department since 2013- to date at KIU western Campus, he has made over 10 publications in the area of Management Information Systems (E-learning and E-Health) and his current interest in research is in E-learning specifically, Adoption of E-learning Technologies in Education Institutions in Developing Countries. At the moment, he is a research consultant on a grant he won from SPIDER (Stockholm University-Sweden) of Assessing and Evaluating a project on “An e-Learning and multimedia technology for Mathematics and basic health Education in Nakivale camp, Uganda”.<br/>Dr Kimwise is an outstanding Administrator, Academic, Scholar, Researcher and Lecturer per excellence in his area of specialty of Management Information Systems based on his strong background, achievements and expertise and as such he is in the right position to train and guide current and future students at Victoria University where we keep exploring the heights!
                    </p>
                    <div>
                        <p className="my-4" style={{fontWeight: '500'}}>Publications</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone (2019). Evaluating the Readiness to Implement an E-Learning Technology to Support Education. International Journal of Trend in Scientific Research and Development</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone (2019). Global Journal Of Engineering Science And Researches Development And Validation Of A Model For Tracking Administration Of Malaria Drugs In Uganda. uganda</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone (2017). A patient Information Management System (PIMS) For Health Care: A Case of Kampala International University Teaching Hospital, Ishaka- Bushenyi, Uganda. International Journal of Multidisciplinary Research and Development</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone, Gilbert Maiga, Jehopio Peter (2016). A model for adoption of e- learning technologies: The perspective of Ugandan high education institutions. International Journal of Multidisciplinary Research and Development</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone, Gilbert Maiga, Jehopio Peter (2016). Factors for adoption of e-learning technologies in Ugandan high education institutions. International Journal of Multidisciplinary Research and Development</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone (2015). E-Learning Strategic Plan for Kampala international university, level of Implementation. Kampala</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone (2015). Business process: Design, Development and Implementation of an E-procurement and supply management system at Kampala international university. kampala</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Kimwise Alone (2014). Challenges and Successes of E-learning at Kampala international university. Mozambique</p>
                    </div>
                    <div>
                        <p className="my-4" style={{fontWeight: '500'}}>Courses taught</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;IT project management and planning </p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;System analysis and design</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Computer and information security </p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Database management systems </p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Entrepreneurship </p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Statistical methods in research</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Computer Repair and Maintenance</p>
                    </div>
                    <div>
                        <p className="my-4" style={{fontWeight: '500'}}>Databases</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;CiteSeerX:https://citeseerx.ist.psu.edu/myciteseer/action/accountHome</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Digital Library of the Commons Repository:http://dlc.dlib.indiana.edu/dlc/</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Google Scholar:https://scholar.google.com/citations?hl=en&user=_QkN2QIAAAAJ</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;JSTOR:https://www.jstor.org/account/profile</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Mendeley:https://www.mendeley.com/profiles/dr-kimwise-alone/</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;ORCID iD:https://orcid.org/0000-0002-3477-2696</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;ResearchGate:https://www.researchgate.net/profile/Kimwise_Alone</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Semantic Scholar:https://www.semanticscholar.org/?</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;WorldCat:https://www.worldcat.org/account/?page=myProfile</p>
                        <p className="my-4">&emsp;<span className="fa fa-angle-right"></span>&nbsp;&nbsp;Undergraduate calendar</p>
                    </div>
                    <p className="my-4">
                    Contacts<br/>
                    <br/>Department of Information Technology 
                    <br/>Victoria University
                    <br/>P.O.Box 30866
                    <br/>Kampala, Uganda
                    <br/>Email: alonekimwise@gmail.com/deanoftechnology@vu.ac.ug 
                    <br/>Call: 0706188210/0788050783
                    </p>
				</div>
			</div>			  
		</div>
	</div>
</section>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Staff;