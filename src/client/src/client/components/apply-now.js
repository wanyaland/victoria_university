import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'
import Data from './data/courses.json'
import Countries from './data/countries.json'
import Levels from './data/level-of-education.json'
import $ from 'jquery'


class ApplyNow extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: 'Your first name',
            middlename: 'Your middle name',
            lastname: 'Your last name',
            gender: '',
            dob: '',
            nationality: '',
            firstlanguage: '',
            country: '',
            city: '',
            email: 'Your email',
            whatsappnum: 'Your Whatsapp Number',
            altnumber: 'Your Alternative Number',
            disability: '',
            program: '',
            hearUs: '',
            levelofeducation: 'Level of Education',
            subject: 'Subject/Combination',
            nameofinstitution: 'Name of Institution',
            qualification: 'Qualification',
            result: 'Result/Grade/Mark',
            year: 'Year',
            docs: [],
            agreeComs: '',
            agreeRules: '',
            payMethod: '',
        }
    }
    
    addEdu = () => {
        var edHu = document.getElementById('edH')
        /* Level of Education */
        var rowForm = document.createElement('div')
        rowForm.setAttribute("class", "row_form")
        var colSize = document.createElement('div')
        colSize.setAttribute("class", "col-75")
        var input = document.createElement('input')
        input.setAttribute("class", "form_fields")
        input.setAttribute("placeholder", "Level of Education")
        input.setAttribute("type", "text")
        input.setAttribute("id", "lved")
        input.setAttribute("name", "lved")
        /*  */
        /* Subject */
        var rowForm2 = document.createElement('div')
        rowForm2.setAttribute("class", "row_form")
        var colSize2 = document.createElement('div')
        colSize2.setAttribute("class", "col-75")
        var input2 = document.createElement('input')
        input2.setAttribute("class", "form_fields")
        input2.setAttribute("placeholder", "Subject/Combination")
        input2.setAttribute("type", "text")
        input2.setAttribute("id", "sub_comb")
        input2.setAttribute("name", "sub_comb")
        /*  */
        /* Name of Institution */
        var rowForm3 = document.createElement('div')
        rowForm3.setAttribute("class", "row_form")
        var colSize3 = document.createElement('div')
        colSize3.setAttribute("class", "col-75")
        var input3 = document.createElement('input')
        input3.setAttribute("class", "form_fields")
        input3.setAttribute("placeholder", "Name of Institution")
        input3.setAttribute("type", "text")
        input3.setAttribute("id", "institution")
        input3.setAttribute("name", "institution")
        /*  */
        /* Qualification */
        var rowForm4 = document.createElement('div')
        rowForm4.setAttribute("class", "row_form")
        var colSize4 = document.createElement('div')
        colSize4.setAttribute("class", "col-75")
        var input4 = document.createElement('input')
        input4.setAttribute("class", "form_fields")
        input4.setAttribute("placeholder", "Qualification")
        input4.setAttribute("type", "text")
        input4.setAttribute("id", "qual")
        input4.setAttribute("name", "qual")
        /*  */
        /* Result/Grade */
        var rowForm5 = document.createElement('div')
        rowForm5.setAttribute("class", "row_form")
        var colSize5 = document.createElement('div')
        colSize5.setAttribute("class", "col-75")
        var input5 = document.createElement('input')
        input5.setAttribute("class", "form_fields")
        input5.setAttribute("placeholder", "Result/Grade/Mark")
        input5.setAttribute("type", "text")
        input5.setAttribute("id", "result_grade")
        input5.setAttribute("name", "result_grade")
        /*  */
        /* Year */
        var rowForm6 = document.createElement('div')
        rowForm6.setAttribute("class", "row_form")
        var colSize6 = document.createElement('div')
        colSize6.setAttribute("class", "col-75")
        var input6 = document.createElement('input')
        input6.setAttribute("class", "form_fields")
        input6.setAttribute("placeholder", "Year")
        input6.setAttribute("type", "text")
        input6.setAttribute("id", "year")
        input6.setAttribute("name", "year")
        /*  */
        //var br = document.createElement('br')

        edHu.appendChild(rowForm).appendChild(colSize).appendChild(input)
        edHu.appendChild(rowForm2).appendChild(colSize2).appendChild(input2)
        edHu.appendChild(rowForm3).appendChild(colSize3).appendChild(input3)
        edHu.appendChild(rowForm4).appendChild(colSize4).appendChild(input4)
        edHu.appendChild(rowForm5).appendChild(colSize5).appendChild(input5)
        edHu.appendChild(rowForm6).appendChild(colSize6).appendChild(input6)
    }
    fileUp () {
        var fileName = $(".custom-file-input").val().split("\\").pop();
        $('.custom-file-input').siblings(".custom-file-label").addClass("selected").html(fileName);
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
									<input type="text" id="fname" className="form_fields" name="firstname" value={this.state.firstname} placeholder="Your first name"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="mname" className="form_fields" name="middlename" value={this.state.middlename} placeholder="Your middle name" />
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="lname" className="form_fields" name="lastname" value={this.state.lastname} placeholder="Your last name" />
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
									<input type="date" id="dob" className="form_fields" name="dob" value={this.state.dob} placeholder="Your Date of birth"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="nationality" className="form_fields" name="nationality" value={this.state.nationality} placeholder="Your nationality"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="flang" className="form_fields" name="flang" value={this.state.firstlanguage} placeholder="Your First Language"/>
									</div>
								</div>
                                <hr />
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>CONTACT INFORMATION</p>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>Country</p>
                                        <select id="country" name="country" className="form_fields">
                                            { Countries.map(country => {
                                                return(
                                                    <option value={country.name}>{country.name}</option>
                                                )
                                            })}
                                        </select>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="city" className="form_fields" name="city" value={this.state.city} placeholder="Your City"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="email" id="email" className="form_fields" name="email" value={this.state.email} placeholder="Your Email"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="fnumber" className="form_fields" name="fnumber" value={this.state.whatsappnum} placeholder="Your Whatsapp Number"/>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="text" id="fnumber" className="form_fields" name="fnumber" value={this.state.altnumber} placeholder="Your Alternative Number"/>
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
                                        {Levels.map(lev => {
                                            return(
                                                <option value={lev.level}>{lev.level}</option>
                                            )
                                        })}
                                    </select>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px'}}>Programme</p>
									<select className="form_fields" placeholder="">
                                        <option></option>
                                        { Data.map(prog => {
                                            return(
                                                <option value={prog.id}>{prog.program}</option>
                                            )
                                            }) 
                                        }
                                    </select>
									</div>
								</div>
                                <hr />
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>HOW DID YOU HEAR ABOUT VICTORIA UNIVERSITY</p>
                                <div className="row_form">
									<div className="col-75">
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
                                <br></br>
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600'}}>Education History 1</p>
                                <div id="edH">
                                    <div className="row_form">
                                        <div className="col-75">
                                        <input type="text" id="lved" className="form_fields" name="lved" value={this.state.levelofeducation} placeholder="Level of Education"/>
                                        </div>
                                    </div>
                                    <div className="row_form">
                                        <div className="col-75">
                                        <input type="text" id="sub_comb" className="form_fields" name="sub_comb" value={this.state.subject} placeholder="Subject/Combination"/>
                                        </div>
                                    </div>
                                    <div className="row_form">
                                        <div className="col-75">
                                        <input type="text" id="institution" className="form_fields" name="institution" value={this.state.nameofinstitution} placeholder="Name of Institution"/>
                                        </div>
                                    </div>
                                    <div className="row_form">
                                        <div className="col-75">
                                        <input type="text" id="qual" className="form_fields" name="qual" value={this.state.qualification} placeholder="Qualification"/>
                                        </div>
                                    </div>
                                    <div className="row_form">
                                        <div className="col-75">
                                        <input type="text" id="result_grade" className="form_fields" name="result_grade" value={this.state.result} placeholder="Result/Grade/Mark"/>
                                        </div>
                                    </div>
                                    <div className="row_form">
                                        <div className="col-75">
                                        <input type="text" id="year" className="form_fields" name="year" value={this.state.year} placeholder="Year"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row_form">
                                    <a href="#home" className="my-2 underline" onClick={this.addEdu}>Add Education History +</a>
                                </div>
                                <div className="row_form">
                                    <div className="col-75">
                                    <p className="text-left" style={{fontSize:'18px', fontWeight: '600'}}>Attach supporting documents</p>
                                        <div class="custom-file mb-3">
                                            <input type="file" class="custom-file-input" id="customFile" name="filename" onChange={this.fileUp}/>
                                            <label class="custom-file-label" for="customFile">Add documents</label>
                                        </div>
                                        <div class="custom-file mb-3">
                                            <input type="file" class="custom-file-input" id="customFile" name="filename" onChange={this.fileUp}/>
                                            <label class="custom-file-label" for="customFile">Add documents</label>
                                        </div>
                                        <div class="custom-file mb-3">
                                            <input type="file" class="custom-file-input" id="customFile" name="filename" onChange={this.fileUp}/>
                                            <label class="custom-file-label" for="customFile">Add documents</label>
                                        </div>
                                        <div class="custom-file mb-3">
                                            <input type="file" class="custom-file-input" id="customFile" name="filename" onChange={this.fileUp}/>
                                            <label class="custom-file-label" for="customFile">Add documents</label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row_form">
                                    <p className="text-left" style={{fontSize:'18px', fontWeight: '600'}}>Application Charges</p>
									<div className="col-75">
									<table style={{width: '100%', border: '#888 1px solid', padding: '5px'}}>
                                        <tr style={{width: '100%', border: '#000 1px solid', padding: '5px'}}><td style={{border: '#000 1px solid', padding: '5px', fontWeight: '600'}}>Description</td><td style={{border: '#000 1px solid', padding: '5px', fontWeight: '600'}}>Amount</td></tr>
                                        <tr style={{width: '100%', border: '#888 1px solid', padding: '5px'}}><td style={{border: '#000 1px solid', padding: '5px'}}>Local Student</td><td style={{border: '#000 1px solid', padding: '5px'}}>UGX</td><td style={{border: '#000 1px solid', padding: '5px'}}>50,000/=</td></tr>
                                        <tr style={{width: '100%', border: '#888 1px solid', padding: '5px'}}><td style={{border: '#000 1px solid', padding: '5px'}}>International Students</td><td style={{border: '#000 1px solid', padding: '5px'}}>USD</td><td style={{border: '#000 1px solid', padding: '5px'}}>$16</td></tr>
                                    </table>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="checkbox" id="lname" className="" value={this.state.agreeComs} name="" required/>&nbsp;<span> I AGREE to receive communications from Victoria  University. Not checking this box means that you will not receive information on new degree programs or courses that may fit your study program.		</span>
									</div>
								</div>
                                <div className="row_form">
									<div className="col-75">
									<input type="checkbox" id="lname" className="" name="" value={this.state.agreeRules} required/>&nbsp;<span>I AGREE to abide by the rules and regulations of Victoria  University . I certify that the information submitted is true and complete in all respects and that no relevant information has been withheld. I agree that Victoria University retains the right to nullify my application if the information provided is false or incomplete. Falsification and misrepresentation of credentials or supporting documents is considered an academic offense and penalties may be imposed .I understand tha Victoria University may approach my previous places of learning for a  reference</span>
									</div>
								</div>
                                <p className="text-left" style={{fontSize:'18px', fontWeight: '600', textDecoration: 'underline'}}>SELECT PAYMENT METHOD</p>
                                <div className="row_form">
									<div className="col-75">
									<select className="form_fields" placeholder="Disability">
                                        <option></option>
                                        <option>Pesapal</option>
                                        <option>GTPay</option>
                                        <option>Bursar</option>
                                        {/* <option>USSD</option>
                                        <option>Wire Transfer</option>
                                        */}
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