import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Senate extends Component {
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
                    <Link to="/about"><span className="underline" style={{color: "#EEE"}}>
					About 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Our Team</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-footer-16 text-center">
	<div className="container">
		<h3 className="hny-title text-left" style={{color: '#f74040', fontSize: '48px', fontWeight: '600'}}>University Senate</h3>
	</div>
</section>
<section class="w3l-team-main">
		<div class="team py-5">
			<div class="container py-lg-5">
				<div class="row team-row">
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 1")}>
								<a href="#url"><img src="assets/images/img/vc.JPG" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr Lawrence Muganga</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 1")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 1" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
									<br/>
									<p className="my-4 text-left">Dr. Lawrence Muganga doubles as the Vice Chancellor and Deputy Vice Chancellor –
									Academic Affairs of Victoria University. He is an award-winning writer and author, researcher,
									educator, public policy practitioner, strategy advisor, development management Specialist and
									authentic learning enthusiast based in Edmonton, Alberta Canada. Dr. Muganga earned his MA
									in Economic Policy Management from Makerere University and a Ph.D. in Educational
									Administration and Leadership from the University of Alberta, Canada. Dr. Muganga holds a
									Higher Education Teaching Certification from Harvard University, Derek Bok Center for
									Teaching and Learning.<br/><br/>
									Dr. Muganga has extensively researched and written about a cutting-edge educational paradigm
									known as Authentic Learning, which, in short, means an education that prepares students for the
									real world by equipping them with real-life skills to face now and the future.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 2")}>
								<a href="#url"><img src="assets/images/img/M.G KATUSABE SSEMWEZI.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Mary Goretti Katusabe – Ssemwezi (Mrs.)</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 2")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 2" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
								<br/>
								<p className="my-4 text-left">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
								<br/>
								<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 3")}>
								<a href="#url"><img src="assets/images/clone.png" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Ms Winnie Nassiwa</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 3")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 3" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 3")}>&times;</span>
								<br/>
								{/* <p className="my-4 text-left">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
								<br/>
								<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p> */}
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 4")}>
								<a href="#url"><img src="assets/images/clone.png" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr Joseph Walusimbi</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 4")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 4" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 4")}>&times;</span>
								<br/>
								<p className="my-4 text-left">
								Dr. Walusimbi holds a Doctorate degree from the Maastricht School of Management (MsM) in the Netherlands, an MBA from the East and Southern Africa Management Institute and a Bachelors in Business Administration degree from Makerere University.<br/><br/>An astute academician and organizational development consultant embodied with a wide array of skills which when applied to educational institutions and business enterprises alike has proven to lead to significant and sustainable growth.<br/><br/>24 years of global experience in commercial, development and education sectors; various departmental roles in FMCG and services industries, leadership of projects for NGOs and community-based organisations, global advisory services for nascent and established entrepreneurial ventures, as well as thought-leadership based courses facilitation for local and regional management institutes.<br/><br/>Multi-skilled in the areas of Strategy Development, Customer Relationship Management (CRM), Commercial Management (Sales, Brand & Trade Marketing), Communications, Organisational Development Advisory and Industry Value Chain & Cluster Analysis, Board Governance, Operations Management, Leadership, Research, Stakeholder Communications, Media Enagement, Project Management, Partnerships Building, Capacity Development, Resource Mobilisation, Gender & Inclusion, Rights-based Project Development, Public Speaking, Entrepreneurial Coaching and Financial Management
								</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row team-row">
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 5")}>
								<a href="#url"><img src="assets/images/clone.png" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr Alone Kimwise</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 5")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 5" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 5")}>&times;</span>
									<br/>
									<p className="my-4 text-left">Alone Kimwise (PhD) is currently a Dean and Senior Lecturer in faculty of Science and Technology at Victoria University, former Principal investigator, Acting ICT Director; and Head of Computing Department at Kampala International University (KIU). He has worked at higher education institutions both local and international levels. He has also served under the Inter-University Council of East Africa (IUCEA) arrangement of staff exchange at Independent University of Kigali (ULK) and University of Technology and Arts, Byumba, Rwanda (UTAB).</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 6")}>
								<a href="#url"><img src="assets/images/clone.png" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr Nnwana Kevin</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 6")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 6" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 6")}>&times;</span>
								<br/>
								<p className="my-4 text-left">Dr Nwanna Uchechukwu Kevin is a renowned Public Health specialist, a citizen of Nigeria but resides in Uganda for over 7 years. He had his Doctoral degree in Public Health (specialization in Occupational Safety and Health) from City University, Cambodia. He obtained his Master of Science in Public Health from the International Health Sciences University, Uganda. He studied a Post-Graduate Diploma in Teaching and Management at Higher Education from the Islamic University in Uganda. In addition to his name, he is a U.K certified IOSH specialist (Institute of Occupational Safety and Health); he bagged his Bachelor of Science Degree in Human Anatomy from the University of Portharcourt, Nigeria. <br/><br/>Dr. Nwanna is a Senior Lecturer in Victoria University, Uganda and doubles as the Dean of Faculty of Health Sciences in the same University. He has served as Head of Department and Dean of Faculty in two Universities in Uganda and has over 21 peer-reviewed research publications attributed to his name together with over 10 short courses and certificates in various academic and social disciplines. <br/><br/> He has consulted for various organizations such as WHO, Uganda Ministry of Health and other international agencies. In academia, he has taught and supervised various undergraduate and postgraduate students to completion since 2015 up till now.One of his newest published research papers is on the impact of Covid-19 on the Education industry in Africa. Dr. Nwanna is a Fellow of the Medical Research Council (FMRC) in the United Kingdom and a Fellow of the African Institute of Public Health Professionals.
                    			</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 7")}>
								<a href="#url"><img src="assets/images/clone.png" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr Rosemary Nakijoba</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 7")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 7" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 7")}>&times;</span>
								<br/>
								{/* <p className="my-4 text-left">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
								<br/>
								<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p> */}
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 8")}>
								<a href="#url"><img src="assets/images/clone.png" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Mr Moris B. Mwahuhlwa</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 8")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 8" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 8")}>&times;</span>
								<br/>
								{/* <p className="my-4 text-left">
								Dr. Walusimbi holds a Doctorate degree from the Maastricht School of Management (MsM) in the Netherlands, an MBA from the East and Southern Africa Management Institute and a Bachelors in Business Administration degree from Makerere University.<br/><br/>An astute academician and organizational development consultant embodied with a wide array of skills which when applied to educational institutions and business enterprises alike has proven to lead to significant
								</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row team-row">
					<div class="col-lg-3 col-md-6 team-wrap">
						<div class="team-info text-center">
							<div class="column position-relative cursor" onClick={() => this.view_bio("myModal_bio 9")}>
								<a href="#url"><img src="assets/images/img/guild.JPG" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">H.E Mark Serebe</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 9")}>View Vio</button>
								</div>
							</div>
							<div id="myModal_bio 9" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 9")}>&times;</span>
									<br/>
									<p className="my-4 text-left">H.E Mark Serebe is the 2019-2020 Guild President of Victoria University pursuing a Bachelor’s in Human Resource Management , in 2018 he graduated with a Diploma in Human Resource Management at the same univrsity and takes his responsibility as students leader at university with great honour and pride. He took part in the training of student leaders at National Leadership Institute in Kyankwanzi in 2019.
									<br/>
									<b>Qualifications: Diploma in Human Resource Management, Victoria University.</b></p>
								</div>
							</div>
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

export default Senate;