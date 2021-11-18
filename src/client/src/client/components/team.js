import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class ExecTeam extends Component {
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
		<h3 className="hny-title text-left" style={{color: '#f74040', fontSize: '50px', fontWeight: '500'}}>Directors</h3>
	</div>
</section>
<section className="w3l-content-6">
	<div className="content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr  hover-color cursor" onClick={() => this.view_bio("myModal_bio 1")}><img src="assets/images/trustees/aliker.jpg" className="img-fluid" style={{width: '100%', height: '100%'}}  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr Martin Jerome Okec Aliker</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 1" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
							<br/>
							<p className="my-4 text-left">Chairman Victoria University Limited. He served as the Chancellor of Victoria University from 3rd October 2013 to 10th January 2020. He has also served as the first chancellor of Gulu University, a public university in northern Uganda between 2004 and 2014 before he became the chancellor of Victoria University. Dr. Aliker has a Bachelor of Arts degree, with a major in Political Science and a Doctor of Dental Surgery (DDS) degree. He set up the first private dental clinic owned by an indigenous in Uganda.
							<br /><br />Dr Aliker is also a businessman, entrepreneur as well as a community leader. He is a senior adviser to President Yoweri Kaguta Museveni. Dr. Aliker has sat on the board of nearly forty companies in Uganda. Among many other companies, Dr Aliker is a shareholder in Stanbic Bank Uganda Limited, Uganda Clays Limited, Nation Media Group, National Insurance Corporation and East African Breweries. These companies are listed on the Uganda Securities Exchange. He is the Chairman of Uganda Clays Limited. He also sits on the “Acting East African Advisory Board”, the private equity firm of the United Kingdom’s Commonwealth Development Corporation.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 2")}><img src="assets/images/trustees/sudhir.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr. Sudhir Ruparelia</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 2" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
						<br/>
						<p className="my-4 text-left">
							Dr. Sudhir Ruparelia was born in in Kabatoro, Kasese district in western Uganda. In 1985, he returned from the UK to Uganda with $25,000 in savings that he earned from several casual jobs in London including working in supermarkets, factories, butcheries and ventured into importing beer from Kenya which – a commodity which was scarce at the time.
							<br/><br/>In 2007, he was awarded an honorary Doctorate of Law in Business by Uganda Pentecostal University in recognition of his investments in several sectors that have provided employment and contributed to Uganda’s economic growth.
						</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 4")}><img src="assets/images/trustees/rajiv.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Rajiv Ruparelia</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 4" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 4")}>&times;</span>
							<br/>
							<p className="my-4 text-left">
								Mr. Rajiv Ruparelia, a graduate of Regents College in London with a degree in Financial Management, is a passionate promoter of Victoria University. With a top-class education, he has the knowledge and training to steer the university to the 21st Century.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor" onClick={() => this.view_bio("myModal_bio 3")}><img src="assets/images/trustees/jyotsna.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mrs. Jyotsna Ruparelia</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 3" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 3")}>&times;</span>
						<br/>
						<p className="my-4 text-left">
							Mrs. Jyotsna Ruparelia was born in Kamuli in Eastern Uganda and educated in Kampala and in north west London. Jyotsna paid her way through education by working in supermarkets and navigating her way through the system; she eventually attained a Diploma in Banking.
						</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 5")}><img src="assets/images/trustees/meera.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Ms. Meera Ruparelia</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 5" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 5")}>&times;</span>
						<br/>
						<p className="my-4 text-left">
							Ms. Meera Ruparelia, a graduate of City University, UK is active in conserving wildlife and the areas they live in. She also works with a real estate holding company, Meera Investments, which manages over 300 properties in the country.
						</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 6")}><img src="assets/images/trustees/sheena.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Ms. Sheena Ruparelia</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 6" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 6")}>&times;</span>
						<br/>
						<p className="my-4 text-left">
							Ms. Sheena Ruparelia, a graduate of City University, UK with a degree in Economics and Accountancy is active in several foundation-related projects for children which include the construction of homes for child-led families, health awareness projects and provision of clean water.
						</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-footer-16 text-center">
	<div className="container">
		<h3 className="hny-title text-left" style={{color: '#f74040', fontSize: '50px', fontWeight: '500'}}>University Council</h3>
	</div>
</section>
<section className="w3l-content-6">
	<div className="content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr  hover-color cursor" onClick={() => this.view_bio("myModal_bio 7")}><img src="assets/images/img/joseph-biribonwa.jpg" className="img-fluid" style={{width: '100%', height: '100%'}}  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Joseph N. Biribonwa</span><span className="info">Vice Chairperson University Council</span></div>
					</div>
					<div id="myModal_bio 7" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 7")}>&times;</span>
							<br/>
							<p className="my-4">Mr. Joseph N. Biribonwa is a seasoned expert in democracy & governance, management & administration, finance and corporate governance, with over forty (40) years of professional experience.
							<br/>
							<b>Current Designation: Deputy Chairperson</b>
							<br/>
							<b>Educational Qualifications: B.Com. (Hons.)</b>
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 8")}><img src="assets/images/img/james-kalebbo.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Kalebbo James</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 8" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 8")}>&times;</span>
							<br/>
							<p className="my-4">Mr. Kalebbo James has profiled himself as a top executive manager, management practitioner, trainer and consultant with over forty years of professional experience. He headed the Uganda Management Institute for over 12 years, spearheading its transformation from the then Institute of Public Administration to Uganda Management Institute.
							<br/>
							<b>Educational Qualifications: B.A., M. Soc. Sc.</b></p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 9")}><img src="assets/images/img/mary.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr. Mary Kanyiginya Tizikara</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 9" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 9")}>&times;</span>
							<br/>
							<p className="my-4">Dr. Mary Kanyiginya Tizikara is an expert in Human Resource Management & Development, Policy and Practice with
								special emphasis on employee job satisfaction; higher education management.
								A Ph.D holder of Makerere University awarded in Jan, 2018 and a Chartered human resource
								analyst awarded in April 2017 by the American Academy of Project Management. <br /><br />A champion
								of best practice in talent and SHRM, employment laws, diversity management and equal
								employment opportunities to ensure attraction, retention and succession, with more than 20 years
								of administrative and human resource management experience, eleven of them at a senior
								managerial level in Higher Education, University experience in all HR functions. She is also an
								experienced team leader, trainer of trainers and adviser on HR policy, and practice on global HR
								trends including HR metrics.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor" onClick={() => this.view_bio("myModal_bio 10")}><img src="assets/images/img/joram-francis-kahenano.jpg" className="img-fluid"  alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Joram Francis Kahenano</span><span className="info">Chairman</span></div>
					</div>
					<div id="myModal_bio 1" className="modal_bio">
						<div className="modal-content_bio">
							<span className="close_bio" onClick={() => this.close_bio("myModal_bio 10")}>&times;</span>
							<br/>
							<p className="my-4">Mr. Joram Francis Kahenano is a distinguished banker, with a banking career that has spanned over 36 years of professional experience. He has served on many boards of national institutions. He is currently the Diocesan Secretary, Kampala Diocese, Church of Uganda.
							<br/>
							<b>Educational Qualifications: B. Com. (Hons), Postgrad. Diploma, Economic Planning.</b>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 11")}><img src="assets/images/img/sameer.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Sameer Thakkar</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 11" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 11")}>&times;</span>
						<br/>
						<p className="my-4">Mr. Sameer Thakkar is widely experienced in international Reporting Standards and was
						involved with ICPAU in the Technical Committee which is mandated to promote and maintain
						compliance with professional standards, legal and other regulatory requirements, and also a
						member of the Education Sub-Committee (ICPAU) that deals with matters related to the
						education and training of the Institute’s students. He is also responsible for providing the
						continuous professional development of members and also coordinates research. One of his
						achievements was his contribution in the formation of a joint degree programme for Uganda
						Martyrs University incorporating CPA and Accounting and Finance of the University. He holds
						FFCA (UK) and CPA (U).
						</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 12")}><img src="assets/images/trustees/rajiv.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Rajiv Ruparelia</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 12" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 12")}>&times;</span>
						<br/>
						<p className="my-4">Mr. Rajiv Ruparelia is a representative of the Board of Directors of VU LTD which owns Victoria University. He is a graduate of Regents College London holds a degree in Financial Management. He is passionate about the growth and development of Victoria University. <br/><br/> With top – class education, he has the knowledge and training to steer the University through the 21st Century. He has strong analytical and technical skills in business management combined with the ability to use initiative as well as applying professional judgment to aid decision making.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 13")}><img src="assets/images/img/ssemambo.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Ssemambo Rashid</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 13" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 13")}>&times;</span>
						<br/>
						<p className="my-4">Mr. Ssemambo Rashid is an Advocate of all courts of Judicature in Uganda with thirteen years of
						progressive hands-on work experience in private legal practice, financial management,
						international transactions, logistical management, administration, proposal and grant writing,
						team building, people management, report writing, data analyzing and compiling. He is currently
						the managing partner in Ssemambo & Ssemambo Advocates. He owns a number of businesses
						among which include Chrome Beverages Limited. He holds Bachelors of Law from Makerere
						University and Post Graduate Diploma in Legal Practice. He is currently pursuing his Master of
						Laws at Makerere University.
						</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 14")}><img src="assets/images/img/kabonesa.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr. Kabonesa Consolata</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 14" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 14")}>&times;</span>
						<br/>
						<p className="my-4">Dr. Kabonesa Consolata holds over 25 years of specialized experience in leadership, women and gender
							programming, teaching human and community development, gender training and conducting
							gender responsive research.
							She holds the following qualifications: BA (Hons) in Liberal Arts; MA Modern English and
							American Literature; Higher. Dip. Education; M.S Human Resources and Family Studies; Ph. D
							Human and Community Development and; Certificate in IT Essentials.
						</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 15")}><img src="assets/images/img/Mr. Andrew Mwenda.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Andrew M. Mwenda</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 15" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 15")}>&times;</span>
						<br/>
						<p className="my-4">Mr. Andrew M. Mwenda is an African journalist and entrepreneur. Currently he is the Managing Director of Independent Publications Limited, the publishers of The Independent, East Africa’s leading current affairs news magazine. He has also invested in schools, is involved in microfinance, mobile money and strategic communications. On top of sitting on the boards of some multi-national corporations in Africa, Mwenda also sits on the Presidential Advisory Committee of President Paul Kagame of Rwanda

						Nominated by Foreign Policy among the Top 100 Global Thinkers in 2010, Mwenda was also nominated by the World Economic Forum as a Young Global Leader in 2008 and by the Africa Study Institute as an Archbishop Tutu fellow, a program for “Africa’s future leaders” (2009). He has also won the International Press Freedom Award (2008) by the Committee to Protect Journalists “in tribute to his commitment to a free press in Uganda and the whole world” and the Outstanding Alumni Award from the British Council (2006).
						
						A winner of the British Chevening Scholarship, Mwenda holds a Master of Science degree in Development Studies from the University of London’s School of Oriental and African Studies and a Bachelor’s degree in journalism from Makerere University in Uganda. He was a visiting fellow at Yale University (2010), a fellow at the University of Oxford’s Said School of Business (2009), a John Knight Fellow at Stanford University (2006-07), a visiting lecturer at the University of Florida at Gainesville (2005) and a visiting fellow at the University of Leiden’s Africa Study Centre (2003). 
						
						Mwenda is one of the most recognised African voices in the global debate on the failures of foreign aid to Africa and the need for investment and trade as drivers of growth. A TED speaker, he is a regular speaker at conferences across the world. Mwenda worked as Political Editor of Daily Monitor and General Manager of its affiliate FM radio, KFM before establishing The Independent in 2007. He has worked as a consultant for the World Bank, the World Resources Institute and Transparency International. He has also written for international news media like Des Spiegel and the International Herald Tribune, New York Times and Foreign Policy; produced documentaries for BBC World television and radio.
						
						Mwenda has also authored and co-authored articles for international academic journals like Africa Affairs, Journal of Modern African Studies, Review of African Political Economy, Journal of Commonwealth Studies, Journal for Contemporary African Studies and the Journal of Democracy on top of publishing chapters in several books among others.
						
						Mwenda was born in Fort Portal, Western Uganda on October 3rd, 1972. He grew up in a family with an intense intellectual curiosity where dinner was always spiced with discussions of philosophy and politics – from Plato and Aristotle to Adam Smith and Karl Marx. “Read,” Mwenda remembers his late father always telling him, “read, especially history.” He has a passion for ancient Greek and Roman history, poetry, philosophy and art. He is also a Pan Africanist.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 16")}><img src="assets/images/img/M.G KATUSABE SSEMWEZI.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mary Goretti Katusabe – Ssemwezi (Mrs.)</span><span className="info">EX-Officio/Secretary To Council</span></div>
					</div>
					<div id="myModal_bio 16" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 16")}>&times;</span>
						<br/>
						<p className="my-4">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
						<br/>
						<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 17")}><img src="assets/images/img/MR WALIRAKI J. BOSCO.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Mr. Waliraki J. Bosco</span><span className="info">Staff Representative</span></div>
					</div>
					<div id="myModal_bio 17" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 17")}>&times;</span>
						<br/>
						<p className="my-4">Mr. Waliraki J. Bosco has served as a programme coordinator, Finance and Accounting for over 7 years at CUU. He has lectured in finance and accounting for eight (8), he is currently the head of department, Banking and Finance of Faculty of Business and Management, Victoria University.
						<br/>
						<b>Qualifications: Master of Business Administration(Finance) Muk, BSc Degree (Economics and Statistics)(Hons Muk) and has ACCA and CPA(U) professional accounting qualifications</b></p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color"  onClick={() => this.view_bio("myModal_bio 18")}><img src="assets/images/img/lawerence.JPG" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">Dr. Lawrence Muganga.</span>{/* <span className="info">Add Description</span> */}</div>
					</div>
					<div id="myModal_bio 18" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 18")}>&times;</span>
						<br/>
						<p className="my-4">Dr. Lawrence Muganga doubles as the Vice Chancellor and Deputy Vice Chancellor –
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
			<div className="content-info-in row mt-md-5 mt-4">
				<div className="col-lg-3 col-md-6 imghrs">
					<div className="imghr hover-color cursor"  onClick={() => this.view_bio("myModal_bio 19")}><img src="assets/images/img/H.E MARK SEREBE.jpg" className="img-fluid" alt="clr" />
						<div className="details" style={{backgroundColor: 'rgba(0, 0, 0, 0.363)'}}><span className="title">H.E Mark Serebe</span><span className="info">Council Member</span></div>
					</div>
					<div id="myModal_bio 19" className="modal_bio">
						<div className="modal-content_bio">
						<span className="close_bio" onClick={() => this.close_bio("myModal_bio 19")}>&times;</span>
						<br/>
						<p className="my-4">H.E Mark Serebe is the 2019-2020 Guild President of Victoria University pursuing a Bachelor’s in Human Resource Management , in 2018 he graduated with a Diploma in Human Resource Management at the same univrsity and takes his responsibility as students leader at university with great honour and pride. He took part in the training of student leaders at National Leadership Institute in Kyankwanzi in 2019.
						<br/>
						<b>Qualifications: Diploma in Human Resource Management, Victoria University.</b></p>
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

export default ExecTeam;