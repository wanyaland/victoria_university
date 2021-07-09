import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class ApplyNow extends Component{
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
					<span style={{color: '#EEE'}}>/ Apply Now</span>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="w3l-features-1">
		<div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
			<div className="container py-lg-5">
				<div className="row grids-innf my-lg-5" style={{border: '#CCC 1px solid'}}>
					<div className="features-1-info col-lg-12 col-md-9">
						<br/>
						<div className="features-1-info-icon text-center">
							<span className="fa fa-edit" style={{color: '#0077b5', fontSize: '90px'}}></span>
						</div>
						<div className="features-1-info-info text-center">
							<h6 className="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Application to VU</h6>
							<p className="text-center" style={{fontSize:'18px'}}>Fill the form below to get started</p>
						</div>
                        <hr />
						<div className="container_form">
							<form action="/action_page.php">
                            <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>PERSONAL INFORMATION</p>
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="fname" className="form_fields" name="firstname" placeholder="Your name"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="mname" className="form_fields" name="middlename" placeholder="Your middle name" />
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="lname" className="form_fields" name="lastname" placeholder="Your last name" />
									</div>
								</div>
                                <div className="row_form">
                                    <select className="form_fields">
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
								</div>
                                <div className="row_form">
									<div className="col-75">
                                        <p className="text-left" style={{fontSize:'18px'}}>Date of birth</p>
									<input type="date" id="dob" className="form_fields" name="dob" placeholder="Your Date of birth"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="nationality" className="form_fields" name="nationality" placeholder="Your nationality"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="flang" className="form_fields" name="flang" placeholder="Your First Language"/>
									</div>
								</div>
                                <hr />
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>CONTACT INFORMATION</p>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>Country</p>
                                        <select id="country" name="country" className="form_fields">
                                        <option value=""></option>
                                        <option value="Afganistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bonaire">Bonaire</option>
                                        <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Canary Islands">Canary Islands</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Channel Islands">Channel Islands</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Island">Cocos Island</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote DIvoire">Cote DIvoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curaco">Curacao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Ter">French Southern Ter</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Great Britain">Great Britain</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Hawaii">Hawaii</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="India">India</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea North">Korea North</option>
                                        <option value="Korea Sout">Korea South</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Midway Islands">Midway Islands</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Nambia">Nambia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherland Antilles">Netherland Antilles</option>
                                        <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                        <option value="Nevis">Nevis</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau Island">Palau Island</option>
                                        <option value="Palestine">Palestine</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Phillipines">Philippines</option>
                                        <option value="Pitcairn Island">Pitcairn Island</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Republic of Montenegro">Republic of Montenegro</option>
                                        <option value="Republic of Serbia">Republic of Serbia</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="St Barthelemy">St Barthelemy</option>
                                        <option value="St Eustatius">St Eustatius</option>
                                        <option value="St Helena">St Helena</option>
                                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                        <option value="St Lucia">St Lucia</option>
                                        <option value="St Maarten">St Maarten</option>
                                        <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                        <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                        <option value="Saipan">Saipan</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="Samoa American">Samoa American</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Tahiti">Tahiti</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Erimates">United Arab Emirates</option>
                                        <option value="United States of America">United States of America</option>
                                        <option value="Uraguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City State">Vatican City State</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                        <option value="Wake Island">Wake Island</option>
                                        <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zaire">Zaire</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="city" className="form_fields" name="city" placeholder="Your City"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="email" id="email" className="form_fields" name="email" placeholder="Your Email"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="fnumber" className="form_fields" name="fnumber" placeholder="Your Whatsapp Number"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="fnumber" className="form_fields" name="fnumber" placeholder="Your Alternative Number"/>
									</div>
								</div>
                                <hr />
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>GENERAL INFORMATION</p>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>I am a student with a disability (optional)</p>
									<select className="form_fields" placeholder="Disability">
                                        <option></option>
                                        <option>Yes</option>
                                        <option>No</option>
                                        <option>Decline to answer</option>
                                    </select>
									</div>
								</div>
                                <hr />
								<p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>COURSE SELECTION</p>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>Choose level of education</p>
									<select className="form_fields" placeholder="">
                                        <option></option>
                                        <option>Certificate</option>
                                        <option>Foundation</option>
                                        <option>Diploma</option>
                                        <option>Under graduate</option>
                                        <option>Post graduate</option>
                                        <option>Higher Education Certificate in Biology Sciences</option>
                                        <option>Professional development courses</option>
                                    </select>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>Programme</p>
									<select className="form_fields" placeholder="">
                                        <option></option>
                                        <option>Master of Business Administration (MBA Generic)</option>
                                        <option>Master of Business Administration (MBA Accounting and Finance)</option>
                                        <option>Master of Business Administration (MBA Human Resource Management )</option>
                                        <option>Master of Business Administration (MBA Marketing )</option>
                                        <option>Master of Business Administration (MBA Real Estate and Propoerty Management )</option>
                                        <option>Masters of Monitoring $ Evaluation</option>
                                        <option>Master of Science in Information Technology</option>
                                        <option>Master of Science in Big Data Analytics</option>
                                        <option>Master of Science in Global Health Nutrition (Full-Time)</option>
                                        <option>Master of Science in Global Health Nutrition (Part-Time)</option>
                                        <option>Master of Science in Public Health (Full-Time)</option>
                                        <option>Master of Science in Public Health (Part-Time)</option>
                                        <option>Masters of Science in Sexual and Reproductive Health</option>
                                        <option>Masters of Science in Health Service Management</option>
                                        <option>Master of Arts in Public Administration and Management (MA-PAM)</option>
                                        <option>Masters of Arts in Mass Communication</option>
                                        <option>Masters in Diplomacy and Global Studies</option>
                                        <option>Masters of Education (M.Ed) in Advanced Teaching (Full-Time)</option>
                                        <option>Masters of Education (M.Ed) in Advanced Teaching (Part-Time)</option>
                                        <option>Masters of Educational Administration and leadership and Management</option>
                                        <option>Post Graduate Diploma Monitoring $ Evaluation</option>
                                        <option>Post Graduate Diploma in Nutrition and Leadership</option>
                                        <option>Post Graduate Diploma in Human Nutrition (Course Work)</option>
                                        <option>Post Graduate Diploma + Masters in Human Nutrition (Course work + Research)</option>
                                        <option>Bachelor of Business Administration</option>
                                        <option>Bachelor of Business Administration (Real Estate and Property Management)</option>
                                        <option>Bachelor od Science in Banking and Finance</option>
                                        <option>Bachelor of Procurement & Logistics Management</option>
                                        <option>Bachelor of Tourism and Hopitality Management</option>
                                        <option>Bachelor of International Business</option>
                                        <option>Bachelor of Science in Oil and Gas Accounting</option>
                                        <option>Bachelor of Arts in Human Resource Management</option>
                                        <option>Bachelor of Hotel and Hospitality Management</option>
                                        <option>Bachelor of Tourism Management</option>
                                        <option>Bachelor of Events Management</option>
                                        <option>Bachelor of Science in Computer Science</option>
                                        <option>Bachelor of Business Information Systems</option>
                                        <option>Bachelor of Information Technology</option>
                                        <option>Bachelor of Art & Industrial Design</option>
                                        <option>Bachelor Agriculture & Rural Innovation</option>
                                        <option>Bachelor of Science in Animation and Visual Effects</option>
                                        <option>Bachelor of Science in Public Health (Full-Time)</option>
                                        <option>Bachelor of Science in Public Health (Part-Time)</option>
                                        <option>Bachelor of Midwifrey Science (TOP-UP)</option>
                                        <option>Bachelor of Nursing Science (DIRECT)</option>
                                        <option>Bachelor of Nursing Science (TOP-UP)</option>
                                        <option>Bachelor of Science in Human Nutrition and Dietetics</option>
                                        <option>Bachelor of Public Administration & Management</option>
                                        <option>Bachelor of Social work and Social Administration</option>
                                        <option>Bachelor of Arts in Journalism and Media Studies</option>
                                        <option>Bachelor of Development Studies</option>
                                        <option>Bachelor of Arts in International Relations & Diplomatic Studies</option>
                                        <option>Bachelor of Arts in Education (BA. Ed)</option>
                                        <option>Bachelor of Science in Education (BSC. Ed)</option>
                                        <option>Bachelor of Education (BEd) - In-Service</option>
                                        <option>Bachelor of Laws</option>
                                        <option>Bachelors of Criminal Justice and Law Enforcement</option>
                                        <option>Diploma in Procurement & Logistics Management</option>
                                        <option>Diploma in Banking and Finanace</option>
                                        <option>Diploma In Business and Administration</option>
                                        <option>Diploma in Tourism and Hopitality Management</option>
                                        <option>Diploma in Human Resource Management</option>
                                        <option>Diploma in Real Estate and Property Management</option>
                                        <option>Diploma in Events and Management</option>
                                        <option>Diploma in Tourism Management</option>
                                        <option>Diploma in Hotel and Hospitality</option>
                                        <option>Diploma in Information Technology</option>
                                        <option>Diploma in Social work and Social Administration</option>
                                        <option>Diploma in International Relations & Diplomatic Studies</option>
                                        <option>Diploma in Journalism and Media Studies</option>
                                        <option>Higher Education Certificate (HEC) in Biological Science</option>
                                        <option>Higher Education Certificate (HEC) - General</option>
                                        <option>Digital Marketing and Social Media Specialist</option>
                                        <option>Entrepreneurial Development Studies</option>
                                        <option>Export Trade Promotion</option>
                                        <option>Sustainable Microfinance</option>
                                        <option>Introduction to Oil and Gas Industry</option>
                                        <option>Oil and Gas Supply Chain and Logistics Management</option>
                                        <option>Oil and Gas Project Management</option>
                                        <option>Health, Safety and Environmental Management in the Oil and Gas Industry</option>
                                        <option>House Keeping in the Hospitality Industry</option>
                                        <option>Customer Service in the Hospitality Industry</option>
                                        <option>Front Office Management in the Hospitality Industry</option>
                                        <option>Chartered Institute of Logistics and Transport (CILT)</option>
                                        <option>CISCO-CCNA</option>
                                        <option>Cisco-IT Essentials</option>
                                        <option>Basic Computer Applications</option>
                                        <option>CCTV Controller</option>
                                        <option>Cyber Security Essentials</option>
                                        <option>PCAP Programming Essentials in Python</option>
                                        <option>CCNA Security</option>
                                        <option>Artificial Intelligence with Python</option>
                                        <option>Comprehensive Management of STI’s, HIV</option>
                                        <option>First Aid</option>
                                        <option>Resource Mobilisation and Project ProposalWriting for Health workers</option>
                                        <option>SPSS - Statistical Package For Social Sciences</option>
                                        <option>Public Health Nutrition</option>
                                        <option>Presentation and Public Speaking</option>
                                        <option>Coaching aand Mentoring</option>
                                        <option>Graphics Designing</option>
                                        <option>Filmmaking (Video/Audio production/Editing)</option>
                                        <option>Radio Production</option>
                                        <option>English Language (Beginner, Intermediate and Advanced)</option>
                                    </select>
									</div>
								</div>
                                <hr />
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>HOW DID YOU HEAR ABOUT VICTORIA UNIVERSITY</p>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>Choose level of education</p>
									<select className="form_fields" placeholder="">
                                        <option></option>
                                        <option>News papers</option>
                                        <option>sms</option>
                                        <option>magazine</option>
                                        <option>website</option>
                                        <option>Newspaper/church leaflet</option>
                                        <option>TV</option>
                                        <option>Radio</option>
                                        <option>Activations</option>
                                        <option>Victoria University students</option>
                                        <option>Exhibitions</option>
                                        <option>VU Events</option>
                                        <option>Short course class</option>
                                        <option>Non Governmental organisation</option>
                                        <option>Victoria University Staff</option>
                                        <option>Please specify others if any</option>
                                        <option>Friend</option>
                                        <option>Family</option>
                                        <option>Email</option>
                                        <option>Google</option>
                                        <option>VU Location</option>
                                        <option>Videos</option>
                                        <option>Student recruiter</option>
                                    </select>
									</div>
								</div>
                                <hr />
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>EDUCATION HISTORY</p>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="lved" className="form_fields" name="lved" placeholder="Level of Education"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="sub_comb" className="form_fields" name="sub_comb" placeholder="Subject/Combination"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="institution" className="form_fields" name="institution" placeholder="Name of Institution"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="qual" className="form_fields" name="qual" placeholder="Qualification"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="result_grade" className="form_fields" name="result_grade" placeholder="Result/Grade/Mark"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="year" className="form_fields" name="year" placeholder="Year"/>
									</div>
								</div>
                                <hr />
                                <div className="row_form">
                                    <p className="text-left" style={{fontSize:'18px', fontWeight: '600'}}>Application Charges</p>
									<div className="col-75">
									<table style={{width: '100%', border: '#888 1px solid', padding: '5px'}}>
                                        <tr style={{width: '100%', border: '#000 1px solid', padding: '5px'}}><td style={{border: '#000 1px solid', padding: '5px', fontWeight: '600'}}>Description</td><td style={{border: '#000 1px solid', padding: '5px', fontWeight: '600'}}>Total</td></tr>
                                        <tr style={{width: '100%', border: '#888 1px solid', padding: '5px'}}><td style={{border: '#000 1px solid', padding: '5px'}}>Local Student</td><td style={{border: '#000 1px solid', padding: '5px'}}>UGX</td><td style={{border: '#000 1px solid', padding: '5px'}}>50,000/=</td></tr>
                                        <tr style={{width: '100%', border: '#888 1px solid', padding: '5px'}}><td style={{border: '#000 1px solid', padding: '5px'}}>International Students</td><td style={{border: '#000 1px solid', padding: '5px'}}>USD</td><td style={{border: '#000 1px solid', padding: '5px'}}>$16</td></tr>
                                    </table>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="checkbox" id="lname" className="" name="" required/>&nbsp;<span> I AGREE to receive communications from Victoria  University. Not checking this box means that you will not receive information on new degree programs or courses that may fit your study program.		</span>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="checkbox" id="lname" className="" name="" required/>&nbsp;<span>I AGREE to abide by the rules and regulations of Victoria  University . I certify that the information submitted is true and complete in all respects and that no relevant information has been withheld. I agree that Victoria University retains the right to nullify my application if the information provided is false or incomplete. Falsification and misrepresentation of credentials or supporting documents is considered an academic offense and penalties may be imposed .I understand tha Victoria University may approach my previous places of learning for a  reference</span>
									</div>
								</div>
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>SELECT PAYMENT METHOD</p>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>Choose level of education</p>
									<select className="form_fields" placeholder="Disability">
                                        <option></option>
                                        <option>Pesapal</option>
                                        <option>GTPay</option>
                                        <option>USSD</option>
                                        <option>Wire Transfer</option>
                                    </select>
									</div>
								</div>
								<div className="row_form">
									<input type="submit" value="SUBMIT" className="applier"/>
								</div>
								</form>
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

export default ApplyNow;