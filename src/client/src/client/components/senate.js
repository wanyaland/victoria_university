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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 1")}>View Bio</button>
								</div>
							</div>
							<div id="myModal_bio 1" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
									<br/>
									<p className="my-4 text-left">I am a Ugandan-born Canadian researcher, academic administrator and an award winning author
										of several books that have been ranked by Amazon as best sellers around the world. Currently I
										am honored to serve as Vice Chancellor of Victoria University Uganda. I am the author of both
										“You Can&#39;t Make Fish Climb Trees” and “Transform”. I also happen to be the first Education
										Scholar to research and introduce Authentic Learning Education in Uganda, with emphasis on
										Real-World Learning for all levels of education. <br/><br/>
										I am an ardent advocate for the implementation of a real-world Education Model that emphasizes
										both Experiential Learning (EXL) &amp; Work-Integrated Learning (WIL) programs to ensure that
										students maximize their learning and gain meaningful education. My transformational education
										research that embraces and embeds both technology and learning in the real-world has prepared
										me to deploy my unconscious mind that looks at education very differently with the intention of
										making learning relevant to every learner and making education work for everyone. I have been
										blessed to visit 47 countries for purposes of research and education advisory role. I have been
										privileged to advise education institutions in several countries including Sweden, Finland,
										Canada, USA, Ethiopia, Argentina, Singapore, Uganda, Solomon Islands and the list goes on.<br/><br/>
										In terms of Education background, I have had the opportunity to pursue my studies at several
										universities around the world including Makerere University, where I obtained both a Bachelors
										and Master’s Degree in Economics, then University of Alberta in Canada where I successfully
										attained both a Master’s in Education and PHD in Educational Administration and Leadership.
										Because we live in a world where lifelong learning has become part of us; I further ended up at
										Harvard University to pursue my Post- Doctoral studies focusing on Higher Education Teaching.
										I have also been awarded the title of Honorary Professorship of the Academic Union by the
										Academic Union of Oxford, UK for my continued contribution towards developing the
										University of the Future driven by Digital Transformation.<br/><br/>
										Some of my work as an educationist has focused on transforming education to make it fit in the
										times we live in now and those we anticipate in the future, in fact, one of my education books
										focusing on authentic learning attracted several awards and grants including a $1,300,000 grant
										from the Bill &amp; Melinda Gates Foundation. This remarkable book &quot;YOU CAN&#39;T MAKE FISH
										CLIMB TREES - OVERCOMING EDUCATIONAL MALPRACTICE THROUGH
										AUTHENTIC LEARNING&quot;, has been praised, endorsed and promoted by Uganda&#39;s First Lady
										and Minister of Education and Sports (MOES), Hon. Janet Kataha Museveni. The book has
										triggered the infusion of Authentic Learning into Uganda&#39;s Curriculum for the first time in the
										history of Uganda&#39;s education system and this initiative no doubt puts the country&#39;s education on
										course to greatness.
									</p>
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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 2")}>View Bio</button>
								</div>
							</div>
							<div id="myModal_bio 2" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
								<br/>
								<p className="my-4 text-left">Mrs M.G Katusabe - Ssemwezi is the Victoria University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 3")}>View Bio</button>
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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 4")}>View Bio</button>
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
								<a href="#url"><img src="assets/images/img/kakeeto.jpg" alt="" class="img-fluid shadow-hover img-box" /></a>
							</div><br/>
							<div class="column">
								<h3 class="name-pos"><a href="#url">Dr. David Kakeeto</a></h3>
								{/* <p>Law Instructor</p> */}
								<div class="social">
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 5")}>View Bio</button>
								</div>
							</div>
							<div id="myModal_bio 5" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 5")}>&times;</span>
									<br/>
									<p className="my-4 text-left">
									Dr. David Kakeeto (Ph.D), an Educational Technology (ICT-Educ), a senior lecturer at Victoria
									University. He is currently academic and administrative Dean, Faculty of Science and
									Technology (FST), Victoria University, but formerly Head of Department Nkumba University
									for two years, Head of Department University of Kisubi for three years. A holder of B.A SS
									(Economics), (Mak), Certificate in Certificate in Computer Networking Technology, (Telecom
									Institute, Malaysia), Master of ICT with Education, (Mak) and Doctor of Philosophy Ph.D in
									Education with ICT (Mak).<br/><br/>
									Dr. Kakeeto has examined several research projects from different universities in Uganda and
									both graduate and undergraduate research projects both in areas of ICT and Education. He has
									vast teaching experience of over sixteen years in areas of: Multimedia for Education, Information
									systems, Micro Computer Applications, E-Business, Research methods, Data processing and
									Management, Instructional design and development.<br/><br/>
									He is a computing, statistical and operations research consultant with various governmental and
									private agencies. Has been involved in quite a number of research projects with different
									institutions, including Governmental parastatals. Dr. Kakeeto has publications in line with ICT
									and Learning. He has supervised 12 master’s degree students to completion and over 20
									undergraduate research projects to graduation.<br/><br/>
									Dr. Kakeeto has headed curriculum design and development; reviewed several old curriculum as
									mandated by the standards of National Council for Higher Education for quite a number of years.
									Dr. Kakeeto also works with National Council for Higher Education in issues of monitoring and
									supervision of tertiary institutions, especially in areas of accreditations, a research consultant
									with Uganda National Examinations Board (UNEB).<br/><br/>
									Dr. Kakeeto lectures Database management systems, Information Technology, Information
									systems, Micro E-Business, Data processing and Management, systems analysis and design, Big
									data analytics, research methods, ICT, and statistical methods at both postgraduate and
									undergraduate levels, E-Governance and ICT for Development.
									</p>
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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 6")}>View Bio</button>
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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 7")}>View Bio</button>
								</div>
							</div>
							<div id="myModal_bio 7" className="modal_bio">
								<div className="modal-content_bio">
								<span className="close_bio" onClick={() => this.close_bio("myModal_bio 7")}>&times;</span>
								<br/>
								<p className="my-4 text-left">Dr. Rosemary Nakijoba (PhD-UWC, MADS-UMU, BDS-NDU)<br/><br/>
									Dr. Rosemary is a Senior Lecturer and doubles as Dean of the Faculty of Humanities and Social
									Sciences (FHSS). She initially served as the Head of Department in the same Faculty.<br/><br/>
									Dr. Rosemary’s professional purpose is to be a teacher known for inspiring her students to be
									more than they thought they could. She also aims at using her gifts of intelligence and charisma
									to cultivate the self-worth and net-worth of women and girls around her.<br/><br/>
									Dr. Rosemary holds a PhD in Development studies from the University of the Western Cape
									(UWC), in South Africa www.uwc.ac.za; a Master’s Degree in Development Studies from
									Uganda Martyr’s University (UMU), a Bachelor’s Degree in Development Studies from Ndejje
									University (NDU) and a Diploma in Education of Kyambogo University (KYU). She also holds
									another Diploma in Community Development Education of the Institute for Social
									Transformation, South Africa. She is a graduate of the Global Women’s Leadership Program of
									Santa Clara University, California, US.A and currently an Alumni Council Member
									(www.gwln.org).<br/><br/>
									She has over 8 years of experience in the academic field and has supervised graduate and
									undergraduate research work for students to completion. Dr. Rosemary has published in peer
									reviewed journals and she is a fellow of the National Institute for Humanities and Social
									Sciences (NIHSS) in South Africa; a fellow for the Social Sciences Research Council (SSRC),
									New York and of the Irish Council for International Students (ICOS).
									She has also engaged into National and International Consulting with organization such as Japan
									International Cooperation Agency (JICA), the International Labour Organization (ILO)
									specifically in the area of gender and disability.
								</p>
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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 8")}>View Bio</button>
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
									<button className="read-more" onClick={() => this.view_bio("myModal_bio 9")}>View Bio</button>
								</div>
							</div>
							<div id="myModal_bio 9" className="modal_bio">
								<div className="modal-content_bio">
									<span className="close_bio" onClick={() => this.close_bio("myModal_bio 9")}>&times;</span>
									<br/>
									<p className="my-4 text-left">Mark Serebe is the 2019-2020 Guild President of Victoria University.  He graduated with a Diploma in Human Resource Management at the same University in 2018 and is currently pursuing a Bachelor’s degree in Human Resource Management. He takes his responsibility as students’ leader at the University with great honour and pride. He took part in the training of student leaders at National Leadership Institute in Kyankwanzi in 2019.
									{/* <br/>
									<b>Qualifications: Diploma in Human Resource Management, Victoria University.</b> */}</p>
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