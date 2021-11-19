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
<section className="w3l-wecome-content-6">
    <div className="ab-content-6-mian py-5">
        <div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
            <div className="welcome-grids row">
                <div className="col-lg-12 mb-lg-0 mb-5">
                    <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>Management Team</h6>
                    <p className="my-4" style={{fontSize: '18px'}}>Victoria University is home to opportunities. It’s where you’ll leave behind what’s familiar and step into a world of endless possibilities. Who you are, what you want, where you’ll go, and how you can impact your community, country and the world are yours to discover.
                    </p>
                    <p><Link className="logo-2" to="/careers" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner", "iconner2")} onMouseOut={this.change_icon2.bind(this, "iconner", "iconner2")}>
                        <span className="lohny-2"><span  id="iconner" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner2" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">Career opportunities</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* Management */}
{/* <section className="w3l-footer-16 text-center">
	<div className="container">
		<h3 className="hny-title text-left" style={{color: '#f74040', fontSize: '50px', fontWeight: '500'}}>Management Team</h3>
	</div>
</section> */}
<section className="w3l-content-6">
	<div className="content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr  hover-color cursor" onClick={() => this.view_bio("myModal_bio 20")}><img src="assets/images/trustees/aliker.jpg" className="img-fluid" style={{width: '100%', height: '100%'}}  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mrs Batebi Irene</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 20" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 20")}>&times;</span>
							<br/>
							{/* <p className="my-4 text-left">Chairman Victoria University Limited. He served as the Chancellor of Victoria University from 3rd October 2013 to 10th January 2020. He has also served as the first chancellor of Gulu University, a public university in northern Uganda between 2004 and 2014 before he became the chancellor of Victoria University. Dr. Aliker has a Bachelor of Arts degree, with a major in Political Science and a Doctor of Dental Surgery (DDS) degree. He set up the first private dental clinic owned by an indigenous in Uganda.
							<br /><br />Dr Aliker is also a businessman, entrepreneur as well as a community leader. He is a senior adviser to President Yoweri Kaguta Museveni. Dr. Aliker has sat on the board of nearly forty companies in Uganda. Among many other companies, Dr Aliker is a shareholder in Stanbic Bank Uganda Limited, Uganda Clays Limited, Nation Media Group, National Insurance Corporation and East African Breweries. These companies are listed on the Uganda Securities Exchange. He is the Chairman of Uganda Clays Limited. He also sits on the “Acting East African Advisory Board”, the private equity firm of the United Kingdom’s Commonwealth Development Corporation.
							</p> */}
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 21")}><img src="assets/images/img/lawerence.JPG" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr Lawrence Muganga</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 21" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 21")}>&times;</span>
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
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 22")}><img src="assets/images/img/M.G KATUSABE SSEMWEZI.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mary Goretti Katusabe – Ssemwezi (Mrs.)</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 22" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 22")}>&times;</span>
							<br/>
							<p className="my-4 text-left">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
							<br/>
							<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor" onClick={() => this.view_bio("myModal_bio 23")}><img src="assets/images/trustees/jyotsna.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Ms Winnie Nassiwa</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 23" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 23")}>&times;</span>
						<br/>
						{/* <p className="my-4 text-left">
							Mrs. Jyotsna Ruparelia was born in Kamuli in Eastern Uganda and educated in Kampala and in north west London. Jyotsna paid her way through education by working in supermarkets and navigating her way through the system; she eventually attained a Diploma in Banking.
						</p> */}
						</div>
					</div>
				</div>
			</div>
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 24")}><img src="assets/images/staff/walusimbi.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr Joseph Walusimbi</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 24" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 24")}>&times;</span>
						<br/>
						<p className="my-4 text-left">
						Dr. Walusimbi holds a Doctorate degree from the Maastricht School of Management (MsM) in the Netherlands, an MBA from the East and Southern Africa Management Institute and a Bachelors in Business Administration degree from Makerere University.<br/><br/>An astute academician and organizational development consultant embodied with a wide array of skills which when applied to educational institutions and business enterprises alike has proven to lead to significant and sustainable growth.<br/><br/>24 years of global experience in commercial, development and education sectors; various departmental roles in FMCG and services industries, leadership of projects for NGOs and community-based organisations, global advisory services for nascent and established entrepreneurial ventures, as well as thought-leadership based courses facilitation for local and regional management institutes.<br/><br/>Multi-skilled in the areas of Strategy Development, Customer Relationship Management (CRM), Commercial Management (Sales, Brand & Trade Marketing), Communications, Organisational Development Advisory and Industry Value Chain & Cluster Analysis, Board Governance, Operations Management, Leadership, Research, Stakeholder Communications, Media Enagement, Project Management, Partnerships Building, Capacity Development, Resource Mobilisation, Gender & Inclusion, Rights-based Project Development, Public Speaking, Entrepreneurial Coaching and Financial Management
						</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 25")}><img src="assets/images/trustees/sheena.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr Alone Kimwise</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 25" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 25")}>&times;</span>
						<br/>
						<p className="my-4 text-left">Alone Kimwise (PhD) is currently a Dean and Senior Lecturer in faculty of Science and Technology at Victoria University, former Principal investigator, Acting ICT Director; and Head of Computing Department at Kampala International University (KIU). He has worked at higher education institutions both local and international levels. He has also served under the Inter-University Council of East Africa (IUCEA) arrangement of staff exchange at Independent University of Kigali (ULK) and University of Technology and Arts, Byumba, Rwanda (UTAB).</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 26")}><img src="assets/images/trustees/sheena.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr Nnwana Kevin</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 26" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 26")}>&times;</span>
						<br/>
						<p className="my-4 text-left">Dr Nwanna Uchechukwu Kevin is a renowned Public Health specialist, a citizen of Nigeria but resides in Uganda for over 7 years. He had his Doctoral degree in Public Health (specialization in Occupational Safety and Health) from City University, Cambodia. He obtained his Master of Science in Public Health from the International Health Sciences University, Uganda. He studied a Post-Graduate Diploma in Teaching and Management at Higher Education from the Islamic University in Uganda. In addition to his name, he is a U.K certified IOSH specialist (Institute of Occupational Safety and Health); he bagged his Bachelor of Science Degree in Human Anatomy from the University of Portharcourt, Nigeria. <br/><br/>Dr. Nwanna is a Senior Lecturer in Victoria University, Uganda and doubles as the Dean of Faculty of Health Sciences in the same University. He has served as Head of Department and Dean of Faculty in two Universities in Uganda and has over 21 peer-reviewed research publications attributed to his name together with over 10 short courses and certificates in various academic and social disciplines. <br/><br/> He has consulted for various organizations such as WHO, Uganda Ministry of Health and other international agencies. In academia, he has taught and supervised various undergraduate and postgraduate students to completion since 2015 up till now.One of his newest published research papers is on the impact of Covid-19 on the Education industry in Africa. Dr. Nwanna is a Fellow of the Medical Research Council (FMRC) in the United Kingdom and a Fellow of the African Institute of Public Health Professionals.
                    	</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 27")}><img src="assets/images/trustees/sheena.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr Rosemary Nakijoba.</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 27" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 27")}>&times;</span>
						<br/>
						{/* <p className="my-4 text-left">
							Ms. Sheena Ruparelia, a graduate of City University, UK with a degree in Economics and Accountancy is active in several foundation-related projects for children which include the construction of homes for child-led families, health awareness projects and provision of clean water.
						</p> */}
						</div>
					</div>
				</div>
			</div>
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 28")}><img src="assets/images/trustees/meera.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr Mourice Baluku</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 28" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 28")}>&times;</span>
						<br/>
						{/* <p className="my-4 text-left">
							Ms. Meera Ruparelia, a graduate of City University, UK is active in conserving wildlife and the areas they live in. She also works with a real estate holding company, Meera Investments, which manages over 300 properties in the country.
						</p> */}
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 29")}><img src="assets/images/trustees/sheena.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr Jean Tabu </span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 29" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 29")}>&times;</span>
						<br/>
						{/* <p className="my-4 text-left">
							Ms. Sheena Ruparelia, a graduate of City University, UK with a degree in Economics and Accountancy is active in several foundation-related projects for children which include the construction of homes for child-led families, health awareness projects and provision of clean water.
						</p> */}
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 30")}><img src="assets/images/trustees/sheena.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Shahul Hamid </span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 30" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 30")}>&times;</span>
						<br/>
						{/* <p className="my-4 text-left">
							Ms. Sheena Ruparelia, a graduate of City University, UK with a degree in Economics and Accountancy is active in several foundation-related projects for children which include the construction of homes for child-led families, health awareness projects and provision of clean water.
						</p> */}
						</div>
					</div>
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