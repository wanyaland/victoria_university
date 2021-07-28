import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Council extends Component {
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
				<div className="">
					<Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ Governing Council</span>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-footer-16 text-center">
	<div className="container">
		<h3 className="hny-title text-left" style={{color: '#f74040', fontSize: '50px', fontWeight: '600'}}>Our Governing Council</h3>
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/chancellor.jpg" className="img-fluid" alt="" style={{height: '100%', width: '100%'}} />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Prof. John Opuda – Asibo</h6>
					<h6 style={{color: '#0077b5'}}><i>University Chancellor</i></h6>
					<p className="my-4">Professor John Opuda - Asibo, joins Victoria University as its Chancellor with over 43 years of wide professional experience gained from universities, government departments and research institutions in Africa, Europe, Japan and USA relevant to University teaching. He holds a Veterinary Medical Degree (1977) from Makerere University, a Master of Public Health (1980) and PhD (1983) degrees, the latter in Microbiology, Epidemiology and Public Health, both from the University of Minnesota, USA.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" id="myBtn_bio" onClick={() => this.view_bio("myModal_bio 1")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 1" className="modal_bio">
				<div className="modal-content_bio">
					<span className="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
					<br/>
					<p className="my-4">Professor John Opuda - Asibo, joins Victoria University as its Chancellor with over 43 years of wide professional experience gained from universities, government departments and research institutions in Africa, Europe, Japan and USA relevant to University teaching. He holds a Veterinary Medical Degree (1977) from Makerere University, a Master of Public Health (1980) and PhD (1983) degrees, the latter in Microbiology, Epidemiology and Public Health, both from the University of Minnesota, USA. <br /><br />His Public Health training has equiped him with multi-sectoral knowledge application in Epidemiology (observational and analytical), Administration, Economics, Education and Governance. He is an accomplished researcher and has published widely in refereed journals and with chapters in books.<br /><br />He has a respectable experience in Administration and Institutional Management, Financing and
					regulation of higher education.
					<br /><br />He rose through the ranks to full Professor in 1997 at Makerere University and was a Chair of a
					Department, Director of Graduate Studies and Research. At Kyambogo University, he was, a
					Deputy Vice Chancellor Academic Affairs (Provost) and Vice Chancellor (President). He was
					also an Executive Director and Chief Regulator of Higher education at the National Council for
					Higher Education, Uganda.<br /><br />
					His other experiences include;
					<br /><br />A Senior Research Fulbright Fellow at the University of California at Davis teaching graduate
					programmes
					<br />Visiting scholar at Nagasaki University Institute of Tropical Medicine, Japan
					External examiner and supervisor of graduate students in Uganda, Kenya, Canada, Germany,
					Swaziland, Zimbabwe, Zambia, UK, Japan, Sweden, Norway and USA.
					<br />Member and Chairman of the National Biosafety Committee in Uganda.
					<br />Director POSTA Uganda
					<br />Member Higher Education Financing Board
					<br />A consultant and a Key note speaker.
					<br />Professor John Opuda - Asibo is a practitioner of positive human values, which include - good
					leadership, respect of authority, financial transparency, honesty while accommodating other
					people and opinions
					<br />The Chancellor is the titular head of the University and as such presides at all ceremonial
					assemblies of the University and, in the name of that University, confers degrees and other
					academic titles and distinctions of that University.</p>
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
						<img src="assets/images/img/joseph-biribonwa.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Joseph N. Biribonwa</h6>
					<h6 style={{color: '#0077b5'}}><i>Vice Chairperson University Council</i></h6>
					<p className="my-4">Mr. Joseph N. Biribonwa is a seasoned expert in democracy & governance, management & administration, finance and corporate governance, with over forty (40) years of professional experience.
						<br/>
						<b>Current Designation: Deputy Chairperson</b>
						<br/>
						<b>Educational Qualifications: B.Com. (Hons.)</b>
					</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 2")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 2" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
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
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/james-kalebbo.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Kalebbo James</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">Mr. Kalebbo James has profiled himself as a top executive manager, management practitioner, trainer and consultant with over forty years of professional experience. He headed the Uganda Management Institute for over 12 years, spearheading its transformation from the then Institute of Public Administration to Uganda Management Institute.
						<br/>
						<b>Educational Qualifications: B.A., M. Soc. Sc.</b></p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 3")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 3" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 3")}>&times;</span>
				  <br/>
				  <p className="my-4">Mr. Kalebbo James has profiled himself as a top executive manager, management practitioner, trainer and consultant with over forty years of professional experience. He headed the Uganda Management Institute for over 12 years, spearheading its transformation from the then Institute of Public Administration to Uganda Management Institute.
					<br/>
					<b>Educational Qualifications: B.A., M. Soc. Sc.</b></p>
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
						<img src="assets/images/img/mary.jpg" className="img-fluid" alt="" style={{height: '100%', width: '100%'}} />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Dr. Mary Kanyiginya Tizikara</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">Dr. Mary Kanyiginya Tizikara is an expert in Human Resource Management & Development, Policy and Practice with special emphasis on employee job satisfaction; higher education management. A Ph.D holder of Makerere University awarded in Jan, 2018 and a Chartered human resource analyst awarded in April 2017 by the American Academy of Project Management.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 4")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 4" className="modal_bio">
				<div className="modal-content_bio">
					<span className="close_bio" onClick={() => this.close_bio("myModal_bio 4")}>&times;</span>
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
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/joram-francis-kahenano.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Joram Francis Kahenano</h6>
					<h6 style={{color: '#0077b5'}}><i>Chairman</i></h6>
					<p className="my-4">Mr. Joram Francis Kahenano is a distinguished banker, with a banking career that has spanned over 36 years of professional experience. He has served on many boards of national institutions. He is currently the Diocesan Secretary, Kampala Diocese, Church of Uganda.
					<br/>
					<b>Educational Qualifications: B. Com. (Hons), Postgrad. Diploma, Economic Planning.</b>
					</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 5")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 5" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 5")}>&times;</span>
				  <br/>
				  <p className="my-4">Mr. Joram Francis Kahenano is a distinguished banker, with a banking career that has spanned over 36 years of professional experience. He has served on many boards of national institutions. He is currently the Diocesan Secretary, Kampala Diocese, Church of Uganda.
					<br/>
					<b>Educational Qualifications: B. Com. (Hons), Postgrad. Diploma, Economic Planning.</b>
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
						<img src="assets/images/img/sameer.jpg" className="img-fluid" alt="" style={{width: '100%'}}/>
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Sameer Thakkar</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">Mr. Sameer Thakkar is widely experienced in international Reporting Standards and was
						involved with ICPAU in the Technical Committee which is mandated to promote and maintain
						compliance with professional standards, legal and other regulatory requirements, and also a
						member of the Education Sub-Committee (ICPAU) that deals with matters related to the
						education and training of the Institute’s students..</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 6")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 6" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 6")}>&times;</span>
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
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
					<img src="assets/images/trustees/rajiv.jpg" className="img-fluid" alt="" style={{width: '100%'}}/>
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Rajiv Ruparelia</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">Mr. Rajiv Ruparelia is a representative of the Board of Directors of VU LTD which owns Victoria University. He is a graduate of Regents College London holds a degree in Financial Management. He is passionate about the growth and development of Victoria University. <br/><br/> With top – class education, he has the knowledge and training to steer the University through the 21st Century. He has strong analytical and technical skills in business management combined with the ability to use initiative as well as applying professional judgment to aid decision making.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 7")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 7" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 7")}>&times;</span>
				  <br/>
				  <p className="my-4">Mr. Rajiv Ruparelia is a representative of the Board of Directors of VU LTD which owns Victoria University. He is a graduate of Regents College London holds a degree in Financial Management. He is passionate about the growth and development of Victoria University. <br/><br/> With top – class education, he has the knowledge and training to steer the University through the 21st Century. He has strong analytical and technical skills in business management combined with the ability to use initiative as well as applying professional judgment to aid decision making.</p>
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
						<img src="assets/images/img/ssemambo.jpg" className="img-fluid" alt="" style={{width: '100%', height: '100%'}}/>
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Ssemambo Rashid</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">Mr. Ssemambo Rashid is an Advocate of all courts of Judicature in Uganda with thirteen years of
						progressive hands-on work experience in private legal practice, financial management,
						international transactions, logistical management, administration, proposal and grant writing,
						team building, people management, report writing, data analyzing and compiling. He is currently
						the managing partner in Ssemambo & Ssemambo Advocates.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 8")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 8" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 8")}>&times;</span>
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
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/kabonesa.jpg" className="img-fluid" alt="" style={{width: '100%'}} />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Dr. Kabonesa Consolata</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">Dr. Kabonesa Consolata holds over 25 years of specialized experience in leadership, women and gender
						programming, teaching human and community development, gender training and conducting
						gender responsive research.
						She holds the following qualifications: BA (Hons) in Liberal Arts; MA Modern English and
						American Literature; Higher. Dip. Education; M.S Human Resources and Family Studies; Ph. D
						Human and Community Development and; Certificate in IT Essentials.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 9")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 9" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 9")}>&times;</span>
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
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/Mr. Andrew Mwenda.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Andrew M. Mwenda</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">Mr. Andrew M. Mwenda is an African journalist and entrepreneur. Currently he is the Managing Director of Independent Publications Limited, the publishers of The Independent, East Africa’s leading current affairs news magazine. He has also invested in schools, is involved in microfinance, mobile money and strategic communications. On top of sitting on the boards of some multi-national corporations in Africa, Mwenda also sits on the Presidential Advisory Committee of President Paul Kagame of Rwanda.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 10")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 10" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 10")}>&times;</span>
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
	</div>
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/M.G KATUSABE SSEMWEZI.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mary Goretti Katusabe – Ssemwezi (Mrs.) – </h6>
					<h6 style={{color: '#0077b5'}}><i>EX-Officio/Secretary To Council</i></h6>
					<p className="my-4">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
					<br/>
					<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 11")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 11" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 11")}>&times;</span>
				  <br/>
				  <p className="my-4">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
					<br/>
					<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p>
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
						<img src="assets/images/img/MR WALIRAKI J. BOSCO.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Waliraki J. Bosco</h6>
					<h6 style={{color: '#0077b5'}}><i>Staff Representative</i></h6>
					<p className="my-4">Mr. Waliraki J. Bosco has served as a programme coordinator, Finance and Accounting for over 7 years at CUU. He has lectured in finance and accounting for eight (8), he is currently the head of department, Banking and Finance of Faculty of Business and Management, Victoria University.
					<br/>
					<b>Qualifications: Master of Business Administration(Finance) Muk, BSc Degree (Economics and Statistics)(Hons Muk) and has ACCA and CPA(U) professional accounting qualifications</b></p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 12")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 12" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 12")}>&times;</span>
				  <br/>
				  <p className="my-4">Mr. Waliraki J. Bosco has served as a programme coordinator, Finance and Accounting for over 7 years at CUU. He has lectured in finance and accounting for eight (8), he is currently the head of department, Banking and Finance of Faculty of Business and Management, Victoria University.
					<br/>
					<b>Qualifications: Master of Business Administration(Finance) Muk, BSc Degree (Economics and Statistics)(Hons Muk) and has ACCA and CPA(U) professional accounting qualifications</b></p>
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
						<img src="assets/images/img/lawerence.JPG" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Dr. Lawrence Muganga.</h6>
					<h6 style={{color: '#0077b5'}}><i>Vice Chancellor/Deputy Vice Chancellor – Academic Affairs</i></h6>
					<p className="my-4">Dr. Lawrence Muganga doubles as the Ag. Vice Chancellor and Deputy Vice Chancellor – Academic Affairs of Victoria University. He is an award-winning writer and author, researcher, educator, public policy practitioner, strategy advisor, development management Specialist and authentic learning enthusiast based in Edmonton, Alberta Canada.</p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 13")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 13" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 13")}>&times;</span>
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
</section>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5 bio_container">
			<div className="welcome-grids row">
				<div className="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div className="">
						<img src="assets/images/img/H.E MARK SEREBE.jpg" className="img-fluid" alt="" />
					</div>
				</div>
				<div className="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 className="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>H.E Mark Serebe</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p className="my-4">H.E Mark Serebe is the 2019-2020 Guild President of Victoria University pursuing a Bachelor’s in Human Resource Management , in 2018 he graduated with a Diploma in Human Resource Management at the same univrsity and takes his responsibility as students leader at university with great honour and pride. He took part in the training of student leaders at National Leadership Institute in Kyankwanzi in 2019.
					<br/>
					<b>Qualifications: Diploma in Human Resource Management, Victoria University.</b></p>
					<p className="mb-4"></p>
					<button className="bio_btn" onClick={() => this.view_bio("myModal_bio 14")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 14" className="modal_bio">
				<div className="modal-content_bio">
				  <span className="close_bio" onClick={() => this.close_bio("myModal_bio 14")}>&times;</span>
				  <br/>
				  <p className="my-4">H.E Mark Serebe is the 2019-2020 Guild President of Victoria University pursuing a Bachelor’s in Human Resource Management , in 2018 he graduated with a Diploma in Human Resource Management at the same univrsity and takes his responsibility as students leader at university with great honour and pride. He took part in the training of student leaders at National Leadership Institute in Kyankwanzi in 2019.
					<br/>
					<b>Qualifications: Diploma in Human Resource Management, Victoria University.</b></p>
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

export default Council;