import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import Data from './data/courses.json'
import CourseList from './course-list';
//import Faculties from './data/faculties.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class ProgIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post_sum : 0,
			under_sum: 0,
			diploma_sum: 0,
			found_sum: 0,
			pro_sum: 0,
			courses: [],
			courses_title: 'All Programs',
			courses_desc: 'Victoria University governs itself through a bicameral governance structure, as set out in the Ugandan Post-Secondary Learning Act  and the Victoria University Regulations . The Board of Governors is the senior governing body, but shares academic governance with the General Faculties Council (GFC), the academic governing body.',
			courses_count: 0,
			busy_count: 0,
			tech_count: 0,
			health_count: 0,
			humanities_count: 0,
			edu_count: 0,
			law_count: 0
		}
	}
	componentDidMount(){
        this.postCount()
        this.underCount()
        this.diplomaCount()
        this.foundCount()
        this.proCount()
		this.allCount()
		this.busyCount()
		this.techCount()
		this.healthCount()
		this.humanitiesCount()
		this.eduCount()
		this.lawCount()
		this.getCourses()
    }
	getCourses = () => {
		if(this.props.match.params.program === "undergraduate"){
			this.getUnder()
		} else if(this.props.match.params.program === "postgraduate"){
			this.getPostGs()
		} else if(this.props.match.params.program === "diploma"){
			this.getDiploma()
		} else if(this.props.match.params.program === "foundation"){
			this.getFounds()
		} else if(this.props.match.params.program === "professional"){
			this.getPros()
		} else if(this.props.match.params.program === "faculty_BusPostgraduate"){
			this.getFacBusPostgs()
		} else if(this.props.match.params.program === "all"){
			this.getAllCourses()
		} else if(this.props.match.params.program === "faculty_Busundergraduate"){
			this.getFacBusUndergs()
		} else if(this.props.match.params.program === "faculty_Busdiploma"){
			this.getFacBusDiplogs()
		} else if(this.props.match.params.program === "faculty_Busprofessional"){
			this.getFacBusPros()
		} else if(this.props.match.params.program === "faculty_TechPostgraduate"){
			this.getFacTechPost()
		} else if(this.props.match.params.program === "faculty_Techundergraduate"){
			this.getFacTechUnder()
		} else if(this.props.match.params.program === "faculty_Techdiploma"){
			this.getFacTechDiploma()
		} else if(this.props.match.params.program === "faculty_Techprofessional"){
			this.getFacTechPros()
		} else if(this.props.match.params.program === "faculty_HealthPostgraduate"){
			this.getFacHealthPost()
		} else if(this.props.match.params.program === "faculty_Healthundergraduate"){
			this.getFacHealthUnder()
		} else if(this.props.match.params.program === "faculty_Healthprofessional"){
			this.getFacHealthPros()
		} else if(this.props.match.params.program === "faculty_HealthFound"){
			this.getFacHealthFound()
		} else if(this.props.match.params.program === "faculty_HumanPostgraduate"){
			this.getFacHumanPost()
		} else if(this.props.match.params.program === "faculty_Humanundergraduate"){
			this.getFacHumanUnder()
		} else if(this.props.match.params.program === "faculty_HumanDiploma"){
			this.getFacHumanDiploma()
		} else if(this.props.match.params.program === "faculty_HumanFound"){
			this.getFacHumanFound()
		} else if(this.props.match.params.program === "faculty_Eduundergraduate"){
			this.getFacEduUnder()
		} else if(this.props.match.params.program === "faculty_EDuPostgraduate"){
			this.getFacEduPost()
		} else if(this.props.match.params.program === "faculty_Lawpostgraduate"){
			this.getFacLawPost()
		} else if(this.props.match.params.program === "faculty_Lawundergraduate"){
			this.getFacLawUnder()
		} else if(this.props.match.params.program === "no_result"){
			this.no_result()
		}
	}
	getAllCourses = () => {
		this.setState({
			courses: Data,
			courses_title: 'All Programmes',
			courses_desc: 'Victoria University governs itself through a bicameral governance structure, as set out in the Ugandan Post-Secondary Learning Act  and the Victoria University Regulations . The Board of Governors is the senior governing body, but shares academic governance with the General Faculties Council (GFC), the academic governing body'
		})
	}
	getAll = () => {
		this.setState({
			courses: Data,
			courses_title: 'All Programmes',
			courses_desc: 'Victoria University governs itself through a bicameral governance structure, as set out in the Ugandan Post-Secondary Learning Act  and the Victoria University Regulations . The Board of Governors is the senior governing body, but shares academic governance with the General Faculties Council (GFC), the academic governing body'
		})
	}
	getFacBusPostgs = () => {
		var result = Data.filter(course => course.level === "Postgraduate" && course.faculty === "Faculty Of Business And Management")
		this.setState({
			courses: result,
			courses_title: "Faculty Of Business And Management (Postgraduate)",
		})
	}
	getFacBusUndergs = () => {
		var result = Data.filter(course => course.level === "Undergraduate" && course.faculty === "Faculty Of Business And Management")
		this.setState({
			courses: result,
			courses_title: "Faculty Of Business And Management (Undergraduate)",
		})
	}
	getFacBusDiplogs = () => {
		var result = Data.filter(course => course.level === "Diploma" && course.faculty === "Faculty Of Business And Management")
		this.setState({
			courses: result,
			courses_title: "Faculty Of Business And Management (Diploma)",
		})
	}
	getFacBusPros = () => {
		var result = Data.filter(course => course.level === "Professional Development" && course.faculty === "Faculty Of Business And Management")
		this.setState({
			courses: result,
			courses_title: "Faculty Of Business And Management (Professional Development)",
		})
	}
	///////
	getFacTechPost = () => {
		var result = Data.filter(course => course.level === "Postgraduate" && course.faculty === "Faculty Of Science And Technology")
		this.setState({
			courses: result,
			courses_title: "Faculty of Science and Technology (Postgraduate)",
		})
	}
	getFacTechUnder= () => {
		var result = Data.filter(course => course.level === "Undergraduate" && course.faculty === "Faculty Of Science And Technology")
		this.setState({
			courses: result,
			courses_title: "Faculty of Science and Technology (Undergraduate)",
		})
	}
	getFacTechDiploma = () => {
		var result = Data.filter(course => course.level === "Diploma" && course.faculty === "Faculty Of Science And Technology")
		this.setState({
			courses: result,
			courses_title: "Faculty of Science and Technology (Diploma)",
		})
	}
	getFacTechPros = () => {
		var result = Data.filter(course => course.level === "Professional Development" && course.faculty === "Faculty Of Science And Technology")
		this.setState({
			courses: result,
			courses_title: "Faculty of Science and Technology (Professional Development)",
		})
	}
	/////
	getFacHealthPost = () => {
		var result = Data.filter(course => course.level === "Postgraduate" && course.faculty === "Faculty of Health Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Health Sciences (Postgraduate)",
		})
	}
	getFacHealthUnder = () => {
		var result = Data.filter(course => course.level === "Undergraduate" && course.faculty === "Faculty of Health Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Health Sciences (Undergraduate)",
		})
	}
	getFacHealthPros = () => {
		var result = Data.filter(course => course.level === "Professional Development" && course.faculty === "Faculty of Health Sciences")
		console.log(result)
		this.setState({
			courses: result,
			courses_title: "Faculty of Health Sciences (Professional Development)",
		})
	}
	getFacHealthFound = () => {
		var result = Data.filter(course => course.level === "Foundations" && course.faculty === "Faculty of Health Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Health Sciences (Higher Educational Certificate)",
		})
	}
	//////
	getFacHumanPost = () => {
		var result = Data.filter(course => course.level === "Postgraduate" && course.faculty === "Faculty of Humanities and Social Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Humanities and Social Science (Postgraduate)",
		})
	}
	getFacHumanUnder = () => {
		var result = Data.filter(course => course.level === "Undergraduate" && course.faculty === "Faculty of Humanities and Social Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Humanities and Social Science (Undergraduate)",
		})
	}
	getFacHumanDiploma = () => {
		var result = Data.filter(course => course.level === "Diploma" && course.faculty === "Faculty of Humanities and Social Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Humanities and Social Science (Diploma)",
		})
	}
	getFacHumanFound = () => {
		var result = Data.filter(course => course.level === "Foundations" && course.faculty === "Faculty of Humanities and Social Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Humanities and Social Science (Higher Educational Certificate)",
		})
	}
	getFacHumanPros = () => {
		var result = Data.filter(course => course.level === "Professional Development" && course.faculty === "Faculty of Humanities and Social Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Humanities and Social Science (Professional Development)",
		})
	}
	/////////
	getFacEduPost = () => {
		var result = Data.filter(course => course.level === "Postgraduate" && course.faculty === "Faculty of Education")
		this.setState({
			courses: result,
			courses_title: "Faculty of Education (Postgraduate)",
		})
	}
	getFacEduUnder = () => {
		var result = Data.filter(course => course.level === "Undergraduate" && course.faculty === "Faculty of Education")
		this.setState({
			courses: result,
			courses_title: "Faculty of Education (Undergraduate)",
		})
	}
	getFacLawPost = () => {
		var result = Data.filter(course => course.level === "Postgraduate" && course.faculty === "School Of Law")
		this.setState({
			courses: result,
			courses_title: "School Of Law (Postgraduate)",
		})
	}
	getFacLawUnder = () => {
		var result = Data.filter(course => course.level === "Undergraduate" && course.faculty === "School Of Law")
		this.setState({
			courses: result,
			courses_title: "School Of Law (Undergraduate)",
		})
	}
	////////////
	getPostGs = () => {
		var result = Data.filter(course => course.level === "Postgraduate")
		this.setState({
			courses: result,
			courses_title: "Postgraduate Programmes",
			courses_desc: 'Victoria University offers post  graduate programmes, listed below under their respective faculties'
		})
	}
	getUnder = () => {
		var result = Data.filter(course => course.level === "Undergraduate")
		this.setState({
			courses: result,
			courses_title: "Undergraduate Programmes",
			courses_desc: 'Victoria  University offers a number of Bachelors Degree Programmes. They are listed below under their respective faculties.'
		})
	}
	getPros = () => {
		var result = Data.filter(course => course.level === "Professional Development")
		this.setState({
			courses: result,
			courses_title: "Professional Development Programmes",
			courses_desc: 'Join one of our professional development courses and learn new and verifiable skills for your career.'
		})
	}
	getFounds = () => {
		var result = Data.filter(course => course.level === "Foundations")
		this.setState({
			courses: result,
			courses_title: "Higher Educational Certificate",
			courses_desc: 'Victoria University offers foundation programs that help prepare students for higher education and also advance their careers. The Higher Educational Certificate (HEC) helps students who did not attain the minimum requirement of 2 principal passes to pursue an undergraduate program at university. '
		})
	}
	getDiploma = () => {
		var result = Data.filter(course => course.level === "Diploma")
		this.setState({
			courses: result,
			courses_title: "Diploma Programmes",
			courses_desc: 'Victoria University offers the following Diploma programs in the Faculties of Business Management, Science and Technology, Health Sciences, Humanities and Social Sciences.'
		})
	}
	no_result = () => {
		this.setState({
			courses: [],
			courses_title: "No results",
			courses_desc: ''
		})
	}
	allCount = () => {
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
			count++;
		}
		this.setState({
			courses_count: count,
		})
	}
	postCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].level === "Postgraduate")
			count++
		}
		this.setState({
			post_sum: count
		})
	}
	underCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].level === "Undergraduate")
			count++
		}
		this.setState({
			under_sum: count
		})
	}
	diplomaCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].level === "Diploma")
			count++
		}
		this.setState({
			diploma_sum: count
		})
	}
	foundCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].level === "Foundations")
			count++
		}
		this.setState({
			found_sum: count
		})
	}
	proCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].level === "Professional Development")
			count++
		}
		this.setState({
			pro_sum: count
		})
	}
	getBusiness = () => {
		var result = Data.filter(course => course.faculty === "Faculty Of Business And Management")
		this.setState({
			courses: result,
			courses_title: "Faculty Of Business And Management",
		})
	}
	getTech = () => {
		var result = Data.filter(course => course.faculty === "Faculty Of Science And Technology")
		this.setState({
			courses: result,
			courses_title: "Faculty of Science and Technology",
		})
	}
	getHealth = () => {
		var result = Data.filter(course => course.faculty === "Faculty of Health Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Health Sciences",
		})
	}
	getHumanities = () => {
		var result = Data.filter(course => course.faculty === "Faculty of Humanities and Social Sciences")
		this.setState({
			courses: result,
			courses_title: "Faculty of Humanities and Social Science",
		})
	}
	getEdu = () => {
		var result = Data.filter(course => course.faculty === "Faculty of Education")
		this.setState({
			courses: result,
			courses_title: "Faculty of Education",
		})
	}
	getLaw = () => {
		var result = Data.filter(course => course.faculty === "School Of Law")
		this.setState({
			courses: result,
			courses_title: "School Of Law",
		})
	}
	busyCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].faculty === "Faculty Of Business And Management")
			count++
		}
		this.setState({
			busy_count: count
		})
	}
	techCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].faculty === "Faculty Of Science And Technology")
			count++
		}
		this.setState({
			tech_count: count
		})
	}
	healthCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].faculty === "Faculty of Health Sciences")
			count++
		}
		this.setState({
			health_count: count
		})
	}
	humanitiesCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].faculty === "Faculty of Humanities and Social Sciences")
			count++
		}
		this.setState({
			humanities_count: count
		})
	}
	eduCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].faculty === "Faculty of Education")
			count++
		}
		this.setState({
			edu_count: count
		})
	}
	lawCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].faculty === "School Of Law")
			count++
		}
		this.setState({
			law_count: count
		})
	}
	toAbout = () => {
        window.location.href = "about"
    }
	showSide = () => {
        var element = document.getElementById('mob_bar_control')
        element.classList.toggle("showr")
		window.location.href = '#mob_bar_control'
    }
    render(){
		
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
<section className="w3l-team-main">
	<div className="team">
		<div className="container py-lg-5" style={{maxWidth: '100%'}}>
			<div className="justify-content-center row"  style={{display: 'flex'}}>
			<button className="side_control_btn" onClick={this.showSide}><span className="fa fa-bars text-center justify-content-center" style={{fontSize: '30px'}}></span></button>
				<div className="col-lg-3 with_shadow side_control" id="mob_bar_control" style={{padding: '0px'}}>
					<div className="sidenavd" style={{paddingTop: '0px'}}>
						<div className="" style={{height: '60px'}}>
							<table style={{width: '100%', height: '100%'}}>
								<tr>
									<td className="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontWeight: '600'}}><b>Refined by:</b></td>
								</tr>
							</table>
						</div>
						<div style={{paddingLeft: '10px', paddingRight: '10px'}}>
							<p className="my-2 text-right refresh" style={{fontSize: '18px', fontWeight: '400'}} onClick={this.getAllCourses}><span className="fa fa-refresh"></span> Reset</p>
						</div>
						<hr/>
						<div>
							<p className="my-2 text-left" style={{fontSize: '18px', fontWeight: '500'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEVEL</p>
							<ul className="prog-listu" style={{border: '#CCC 1px solid', width: '90%', margin: '0 auto', padding: '0'}}>
								<li className={this.state.courses_title === "All Programmes"? "prog-list prog-list-active" : "prog-list"} onClick={this.getAll} style={{width: '100%', borderBottom: '#CCC 1px solid'}}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap grad_icon orange_color"></span>&nbsp;&nbsp;&nbsp;All Programmes</span></td><td><span className="badged">{this.state.courses_count}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Postgraduate Programmes"? "prog-list prog-list-active" : "prog-list"} onClick={this.getPostGs} style={{width: '100%', borderBottom: '#CCC 1px solid'}}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap grad_icon orange_color"></span>&nbsp;&nbsp;&nbsp;Postgraduate Programs</span></td><td><span className="badged">{this.state.post_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Undergraduate Programmes"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%', borderBottom: '#CCC 1px solid'}} onClick={this.getUnder}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap grad_icon"></span>&nbsp;&nbsp;&nbsp;Undergraduate Programs</span></td><td><span className="badged">{this.state.under_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Diploma Programmes"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%', borderBottom: '#CCC 1px solid'}} onClick={this.getDiploma}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap grad_icon"></span>&nbsp;&nbsp;&nbsp;Diploma Programs</span></td><td><span className="badged">{this.state.diploma_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Foundations"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%', borderBottom: '#CCC 1px solid'}} onClick={this.getFounds}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap grad_icon"></span>&nbsp;&nbsp;&nbsp;Higher Education Certificate</span></td><td><span className="badged">{this.state.found_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Professional Development Programmes"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%'}} onClick={this.getPros}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap grad_icon"></span>&nbsp;&nbsp;&nbsp;Professional Development Programs</span></td><td><span className="badged">{this.state.pro_sum}</span></td></tr></table>
								</li>
							</ul>
						</div>
						<hr/>
						<ul className="" style={{padding: '10px'}}>
						<p className="" style={{fontSize: '18px', fontWeight: '500'}}>&nbsp;&nbsp;&nbsp;FACULTIES</p>
							<Link onClick={this.getCourses}><li className="prog-list-course-outline" style={{width: '100%'}}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td><span className="fa fa-circle purple_color"></span></td><td style={{width: '90%'}}><span style={{width: '80%'}}>All</span></td></tr></table>
								</li>
							</Link>
							<Link>
								<li className="prog-list-course-outline" onClick={this.getBusiness}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '10%'}}><span className="fa fa-circle-o red_color"></span></td><td style={{width: '80%'}}><span style={{width: 'auto'}}>Faculty Of Business And Management</span></td><td><span className="badged">{this.state.busy_count}</span></td></tr></table>
								</li>
							</Link>
							<Link>
								<li className="prog-list-course-outline" onClick={this.getTech}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '10%'}}><span className="fa fa-circle-o green_color"></span></td><td style={{width: '80%'}}><span style={{width: 'auto'}}>Faculty of Science and Technology</span></td><td><span className="badged">{this.state.tech_count}</span></td></tr></table>
								</li>
							</Link>
							<Link>
								<li className="prog-list-course-outline" onClick={this.getHealth}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '10%'}}><span className="fa fa-circle-o blue_color"></span></td><td style={{width: '80%'}}><span style={{width: 'auto'}}>Faculty of Health Sciences</span></td><td><span className="badged">{this.state.health_count}</span></td></tr></table>
								</li>
							</Link>
							<Link>
								<li className="prog-list-course-outline" onClick={this.getHumanities}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '10%'}}><span className="fa fa-circle-o orange_color"></span></td><td style={{width: '80%'}}><span style={{width: 'auto'}}>Faculty of Humanities and Social Science</span></td><td><span className="badged">{this.state.humanities_count}</span></td></tr></table>
								</li>
							</Link>
							<Link>
								<li className="prog-list-course-outline" onClick={this.getEdu}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '10%'}}><span className="fa fa-circle-o brown_color"></span></td><td style={{width: '80%'}}><span style={{width: 'auto'}}>Faculty of Education</span></td><td><span className="badged">{this.state.edu_count}</span></td></tr></table>
								</li>
							</Link>
							<Link>
								<li className="prog-list-course-outline" onClick={this.getLaw}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '10%'}}><span className="fa fa-circle-o skyblue_color"></span></td><td style={{width: '80%'}}><span style={{width: 'auto'}}>School Of Law</span></td><td><span className="badged">{this.state.law_count}</span></td></tr></table>
								</li>
							</Link>
						</ul>
						<hr/>
						<div className="" style={{height: '60px'}}>
							<table style={{width: '100%', height: '100%'}}>
								<tr>
								<a className="logo-2" href="/assets/docs/Tution and Fees Documentation.pdf" download="assets/docs/Tution and Fees Documentation.pdf" style={{color: '#0077b5'}}><td className="text-left underline" style={{backgroundColor: '#FFF', textAlign: 'center', paddingLeft: '10px', fontWeight: '400', fontSize: '20px', color: '#0077b5'}}>View our tuition and fees documentation <span className="fa fa-file-pdf-o" style={{color: '#f74040'}}></span></td></a>
								</tr>
							</table>
						</div>
                    </div>
				</div>
				<div className="col-lg-9"   style={{backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
						<br/>
                        <h6 className="hny-title" style={{fontSize: '48px',  color: '#f74040', fontWeight: '600'}}>{this.state.courses_title}</h6>
						<p className="my-4" style={{fontSize: '18px'}}>{this.state.courses_desc}</p>
                        <div className="input-container">
							<i className="fa fa-search icon"></i>
							<input className="input-field" type="text" placeholder="Search for programs by name or keywords" name="usrnm"/>
							<button className="search_btn" style={{borderRadius:'0rem',backgroundColor: '#f54848'}}>Search</button>
						</div>
                    </div>
					{/* <section className="w3l-wecome-content-6">
						<div className="ab-content-6-mian py-5">
							<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
								<div className="welcome-grids row">
									<div className="col-lg-12 mb-lg-0 mb-5" style={{borderBottom: '#ee5f5f 5px solid', padding: '0'}}>
										<table style={{width: '100%', height: '100%'}}>
										
											<tr>
												<td className="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', padding: '50px 20px 20px 40px'}}>
													<h4>Thinking about studying with us?</h4>
													<p className="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
													<p className="my-4"><button className="btn_link2" onClick={this.toAbout}>Click Here to Access</button></p>
												</td>
											</tr>
											
										</table>
									</div>
								</div>
							</div>
						</div>
					</section> */}
					{/* <div className="" style={{height: '60px', margin: '0 auto'}}>
						<table style={{width: '100%', height: '100%'}}>
						
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', paddingLeft: '10px'}}><b>
									Our transfer credit assessment tool can give you an idea of how your previous courses might transfer to VU.</b></td>
							</tr>
							
						</table>
					</div> */}
					<p className="my-4 text-center" style={{fontSize: '24px', fontWeight: 550}}>{this.state.courses_title}</p>
					<div className=" py-lg-5" style={{maxWidth: '100%', margin: '0rem', padding: '0rem !important'}}>
						<div className="" style={{}}>
							<section className="w3-gallery" style={{}}>
								<div className="porfolio-inf py-5">
									<div className="pt-lg-5 pb-lg-4" style={{maxWidth: '100%'}}>
										<div className="row">{/*  */}
											<CourseList courses={this.state.courses} />
										</div>{/*  */}
                    				</div>
                				</div>
            				</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default ProgIndex;