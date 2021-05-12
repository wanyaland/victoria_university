import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';

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
<section class="w3l-top-header-content" style={{marginTop: '-25px'}}>
	<div class="hny-top-menu">
		<div class="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div class="container-fluid">
				<div class="row">
					<ol class="accounts col-md-3">
						<li class="breadcrumb-item"><span class="fa fa-home" style={{color: '#555'}}></span> Victoria University / University Council</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section class="w3l-footer-16 text-center">
	<div class="container">
		<h3 class="hny-title text-left" style={{color: '#dd6018', fontSize: '50px', fontWeight: '600'}}>Our University Council</h3>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/david-byatike-matovu.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>DR. David Byatike Matovu</h6>
					<h6 style={{color: '#0077b5'}}><i>Chairman University Council</i></h6>
					<p class="my-4">Dr Matovu is a seasoned scientist and researcher. He has served in positions of national leadership; he has been a policy maker, an expert in corporate governance, a senior civic administrator and a pillar of hislocal community.
						<br/>
						<b>Educational Qualifications:      Diplomgrad, Germany (equivalent to B.Sc/M.Sc.), Ph.D (Germany)</b>
						<br/>
						<b>Recent Management and Administration Experience</b>
						<br/>
						<b>2011 - : Head of Laity, St. John’s Parish, Church of Uganda, Entebbe</b></p>
					<p class="mb-4"></p>
					<button class="bio_btn" id="myBtn_bio" onClick={() => this.view_bio("myModal_bio 1")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 1" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 1")}>&times;</span>
				  <br/>
				  <p class="my-4">Dr Matovu is a seasoned scientist and researcher. He has served in positions of national leadership; he has been a policy maker, an expert in corporate governance, a senior civic administrator and a pillar of hislocal community.
					<br/>
					<b>Educational Qualifications:      Diplomgrad, Germany (equivalent to B.Sc/M.Sc.), Ph.D (Germany)</b>
					<br/>
					<b>Recent Management and Administration Experience</b>
					<br/>
					<b>2011 - : Head of Laity, St. John’s Parish, Church of Uganda, Entebbe</b></p>
				</div>
			  
			</div>			  
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/joseph-biribonwa.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Joseph N. Biribonwa</h6>
					<h6 style={{color: '#0077b5'}}><i>Vice Chairperson University Council</i></h6>
					<p class="my-4">Mr. Joseph N. Biribonwa is a seasoned expert in democracy & governance, management & administration, finance and corporate governance, with over forty (40) years of professional experience.
						<br/>
						<b>Current Designation: Deputy Chairperson</b>
						<br/>
						<b>Educational Qualifications: B.Com. (Hons.)</b>
					</p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 2")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 2" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 2")}>&times;</span>
				  <br/>
				  <p class="my-4">Mr. Joseph N. Biribonwa is a seasoned expert in democracy & governance, management & administration, finance and corporate governance, with over forty (40) years of professional experience.
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
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/james-kalebbo.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>DR. David Byatike Matovu</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Mr Kalebbo has profiled himself as a top executive manager, management practitioner, trainer and consultant with over forty years of professional experience. He headed the Uganda Management Institute for over 12 years, spearheading its transformation from the then Institute of Public Administration to Uganda Management Institute.
						<br/>
						<b>Educational Qualifications: B.A., M. Soc. Sc.</b></p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 3")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 3" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 3")}>&times;</span>
				  <br/>
				  <p class="my-4">Mr Kalebbo has profiled himself as a top executive manager, management practitioner, trainer and consultant with over forty years of professional experience. He headed the Uganda Management Institute for over 12 years, spearheading its transformation from the then Institute of Public Administration to Uganda Management Institute.
					<br/>
					<b>Educational Qualifications: B.A., M. Soc. Sc.</b></p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/justice-mary-maitum.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Ms. Justice Mary I. D. Maitum</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Mrs Maitum is a retired Justice of the High Court of Uganda, having served on the bench for over seven years. She is a seasoned legal practitioner, consultant and lecturer in law, with over forty years of professional experience. She is currently a consultant at Uganda Association of Women Lawyers (FIDA-Uganda) since 2008.
					<br/>
					<b>Educational Qualifications: Barrister-at-Law, Lincoln’s Inn (UK)</b></p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 4")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 4" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 4")}>&times;</span>
				  <br/>
				  <p class="my-4">Mrs Maitum is a retired Justice of the High Court of Uganda, having served on the bench for over seven years. She is a seasoned legal practitioner, consultant and lecturer in law, with over forty years of professional experience. She is currently a consultant at Uganda Association of Women Lawyers (FIDA-Uganda) since 2008.
					<br/>
					<b>Educational Qualifications: Barrister-at-Law, Lincoln’s Inn (UK)</b></p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/joram-francis-kahenano.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Joram Francis Kahenano</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Mr Kahenano is a distinguished banker, with a banking career that has spanned over 36 years of professional experience. He has served on many boards of national institutions. He is currently the Diocesan Secretary, Kampala Diocese, Church of Uganda.
					<br/>
					<b>Educational Qualifications: B. Com. (Hons), Postgrad. Diploma, Economic Planning.</b>
					</p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 5")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 5" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 5")}>&times;</span>
				  <br/>
				  <p class="my-4">Mr Kahenano is a distinguished banker, with a banking career that has spanned over 36 years of professional experience. He has served on many boards of national institutions. He is currently the Diocesan Secretary, Kampala Diocese, Church of Uganda.
					<br/>
					<b>Educational Qualifications: B. Com. (Hons), Postgrad. Diploma, Economic Planning.</b>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/Dr. Chirag Kotecha.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>DR. Chirag Kotecha</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Dr. Chirag J. Kotecha is a Medical Director UMC Victoria Hospitals, a Consultant Aesthetician Director, Shareholder & Resident Director Avane (U) Ltd, Resident Director Europa Healthcare (U) Ltd, Director Agri Trading Ltd & Sanya Consultants Ltd.
					<br/>
					<b>Qualifications: M.B.A, Entrepreneurship Studies -London Bsc (Hons.) Medical Genetics M.B.B.S Certification (London)</b></p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 6")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 6" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 6")}>&times;</span>
				  <br/>
				  <p class="my-4">Dr. Chirag J. Kotecha is a Medical Director UMC Victoria Hospitals, a Consultant Aesthetician Director, Shareholder & Resident Director Avane (U) Ltd, Resident Director Europa Healthcare (U) Ltd, Director Agri Trading Ltd & Sanya Consultants Ltd.
					<br/>
					<b>Qualifications: M.B.A, Entrepreneurship Studies -London Bsc (Hons.) Medical Genetics M.B.B.S Certification (London)</b></p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/Mr. Andrew Mwenda.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Andrew M. Mwenda</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Andrew M. Mwenda is an African journalist and entrepreneur. Currently he is the Managing Director of Independent Publications Limited, the publishers of The Independent, East Africa’s leading current affairs news magazine. He has also invested in schools, is involved in microfinance, mobile money and strategic communications. On top of sitting on the boards of some multi-national corporations in Africa, Mwenda also sits on the Presidential Advisory Committee of President Paul Kagame of Rwanda.</p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 7")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 7" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 7")}>&times;</span>
				  <br/>
				  <p class="my-4">Andrew M. Mwenda is an African journalist and entrepreneur. Currently he is the Managing Director of Independent Publications Limited, the publishers of The Independent, East Africa’s leading current affairs news magazine. He has also invested in schools, is involved in microfinance, mobile money and strategic communications. On top of sitting on the boards of some multi-national corporations in Africa, Mwenda also sits on the Presidential Advisory Committee of President Paul Kagame of Rwanda

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
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/M.G KATUSABE SSEMWEZI.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mrs. M. G. Katusabe Ssemwezi</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
					<br/>
					<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 8")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 8" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 8")}>&times;</span>
				  <br/>
				  <p class="my-4">Mrs M.G Katusabe - Ssemwezi is the Victoria University Academic Registrar/Ag. University Secretary and secretary to Council. She is a seasons professional in University governance and management stretching over 30 years. She has served in various positions in higher education and was the pioneer University Secretary of Kyambogo University and also served in same position at Nkumba University. She is passionate about higher education governance and management.
					<br/>
					<b>Qualifications: M.Ed (Mak), B.A./Dip Ed. (Mak), PGDFM (UM) Ad. Cert. Tr. Mgt (Bristal University)</b></p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/MR WALIRAKI J. BOSCO.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>Mr. Waliraki J. Bosco</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Mr. Waliraki J. Bosco has served as a programme coordinator, Finance and Accounting for over 7 years at CUU. He has lectured in finance and accounting for eight (8), he is currently the head of department, Banking and Finance of Faculty of Business and Management, Victoria University.
					<br/>
					<b>Qualifications: Master of Business Administration(Finance) Muk, BSc Degree (Economics and Statistics)(Hons Muk) and has ACCA and CPA(U) professional accounting qualifications</b></p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 9")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 9" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 9")}>&times;</span>
				  <br/>
				  <p class="my-4">Mr. Waliraki J. Bosco has served as a programme coordinator, Finance and Accounting for over 7 years at CUU. He has lectured in finance and accounting for eight (8), he is currently the head of department, Banking and Finance of Faculty of Business and Management, Victoria University.
					<br/>
					<b>Qualifications: Master of Business Administration(Finance) Muk, BSc Degree (Economics and Statistics)(Hons Muk) and has ACCA and CPA(U) professional accounting qualifications</b></p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w3l-wecome-content-6">
	<div class="ab-content-6-mian py-5">
		<div class="container py-lg-5 bio_container">
			<div class="welcome-grids row">
				<div class="col-lg-3 welcome-image" style={{padding: '0rem', borderRadius: '0rem'}}>
					<div class="">
						<img src="assets/images/img/H.E MARK SEREBE.jpg" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-lg-9 mb-lg-0 mb-5 justify-content-center" style={{padding: '40px'}}>
					<h6 class="hny-title" style={{color: '#0077b5', fontSize: '34px'}}>H.E Mark Serebe</h6>
					<h6 style={{color: '#0077b5'}}><i>Council Member</i></h6>
					<p class="my-4">Mark Serebe is the 2019-2020 Guild President of Victoria University pursuing a Bachelor’s in Human Resource Management , in 2018 he graduated with a Diploma in Human Resource Management at the same univrsity and takes his responsibility as students leader at university with great honour and pride. He took part in the training of student leaders at National Leadership Institute in Kyankwanzi in 2019.
					<br/>
					<b>Qualifications: Diploma in Human Resource Management, Victoria University.</b></p>
					<p class="mb-4"></p>
					<button class="bio_btn" onClick={() => this.view_bio("myModal_bio 10")}>View Bio</button>
					<br/>
				</div>	
			</div>
			<div id="myModal_bio 10" class="modal_bio">
				<div class="modal-content_bio">
				  <span class="close_bio" onClick={() => this.close_bio("myModal_bio 10")}>&times;</span>
				  <br/>
				  <p class="my-4">Mark Serebe is the 2019-2020 Guild President of Victoria University pursuing a Bachelor’s in Human Resource Management , in 2018 he graduated with a Diploma in Human Resource Management at the same univrsity and takes his responsibility as students leader at university with great honour and pride. He took part in the training of student leaders at National Leadership Institute in Kyankwanzi in 2019.
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