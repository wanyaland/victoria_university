import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import Data from './data/courses.json'
import CourseList from './course-list';
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
			courses_count: '',
			course_test: "",
		}
	}
	componentDidMount(){
        this.postCount()
        this.underCount()
        this.diplomaCount()
        this.foundCount()
        this.proCount()
		this.getCourses()
    }
	getCourses = () => {
		/* const { match } = this.props
		const { params } = match
		const { program } = params
		console.log({program}, "PROGRAM SELECT"); */
		//console.log(this.props, "CURRENT")
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
		} else if(this.props.match.params.program === ""){
			this.getAllCourses()
			//console.log("WE TRY ALL ");
		}
	}
	getAllCourses = () => {
		this.setState({
			courses: Data,
			courses_title: 'All Programs'
		})
	}
	getPostGs = () => {
		var result = Data.filter(course => course.level === "Post Graduate")
		this.setState({
			courses: result,
			courses_title: "Post Graduate",
			courses_desc: 'Victoria University offers post  graduate programmes, listed below under their respective faculties'
		})
	}
	getUnder = () => {
		var result = Data.filter(course => course.level === "Under Graduate")
		this.setState({
			courses: result,
			courses_title: "Under Graduate",
			courses_desc: 'Victoria  University offers a number of Bachelors Degree Programmes. They are listed below under their respective faculties.'
		})
	}
	getPros = () => {
		var result = Data.filter(course => course.level === "Professional Development")
		this.setState({
			courses: result,
			courses_title: "Professional Development",
			courses_desc: 'Join one of our professional development courses and learn new and verifiable skills for your career.'
		})
	}
	getFounds = () => {
		var result = Data.filter(course => course.level === "Foundations")
		this.setState({
			courses: result,
			courses_title: "Foundations",
			courses_desc: 'Victoria University offers foundation programs that help prepare students for higher education and also advance their careers.  Foundations help students who didnot perform well to attain a course of thier interest'
		})
	}
	getDiploma = () => {
		var result = Data.filter(course => course.level === "Diploma")
		this.setState({
			courses: result,
			courses_title: "Diploma",
			courses_desc: 'Victoria University offers Diploma  programs  They are listed below under their respective faculties'
		})
	}
	postCount = () =>{
		var progData = Data;
		var count = 0;
		for(var i = 0; i < progData.length; ++i){
    	if(progData[i].level === "Post Graduate")
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
    	if(progData[i].level === "Under Graduate")
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
	toVclass = () => {
        window.location.href = "https://vclass.ac/"
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
				<div className="col-lg-2 with_shadow side_control" style={{padding: '0px'}}>
					<div className="sidenavd" style={{paddingTop: '0px', position: 'inherit'}}>
						<div className="" style={{height: '60px'}}>
							<table style={{width: '100%', height: '100%'}}>
								<tr>
									<td className="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', paddingLeft: '10px', fontWeight: '600'}}><b>Refined by:</b></td>
								</tr>
							</table>
						</div>
						<div>
							<p className="my-2 text-center" style={{fontSize: '18px', fontWeight: '400'}}>Level Of Education</p>
							<ul className="prog-listu" style={{border: '#888 1px solid', width: '90%', margin: '0 auto', padding: '0'}}>
								<li className={this.state.courses_title === "Post Graduate"? "prog-list prog-list-active" : "prog-list"} onClick={this.getPostGs} style={{width: '100%', borderBottom: '#999 1px solid'}}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap"></span>&nbsp;&nbsp;&nbsp;Post graduate</span></td><td><span class="badged">{this.state.post_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Under Graduate"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%', borderBottom: '#999 1px solid'}} onClick={this.getUnder}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap"></span>&nbsp;&nbsp;&nbsp;Under graduate</span></td><td><span class="badged">{this.state.under_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Diploma"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%', borderBottom: '#999 1px solid'}} onClick={this.getDiploma}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap"></span>&nbsp;&nbsp;&nbsp;Diploma</span></td><td><span class="badged">{this.state.diploma_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Foudations"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%', borderBottom: '#999 1px solid'}} onClick={this.getFounds}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap"></span>&nbsp;&nbsp;&nbsp;Foundations</span></td><td><span class="badged">{this.state.found_sum}</span></td></tr></table>
								</li>
								<li className={this.state.courses_title === "Professional Development"? "prog-list prog-list-active" : "prog-list"} style={{width: '100%'}} onClick={this.getPros}>
									<table style={{width: '100%'}}><tr style={{width: '100%'}}><td style={{width: '100%'}}><span style={{width: '90%'}}><span className="fa fa-graduation-cap"></span>&nbsp;&nbsp;&nbsp;Professional Development</span></td><td><span class="badged">{this.state.pro_sum}</span></td></tr></table>
								</li>
							</ul>
						</div>
						<hr/>
						
						<ul className="" style={{padding: '10px'}}>
						<p className="" style={{fontSize: '18px', fontWeight: '400'}}>Credentials</p>
							<Link onClick={this.getCourses}><li className="prog-list-course-outline" style={{width: '100%'}}>
								<table style={{width: '100%'}}><tr style={{width: '100%'}}><td><span class="fa fa-circle-o"></span></td><td style={{width: '90%'}}><span style={{width: '80%'}}>All</span></td></tr></table>
								</li>
							</Link>
							{ this.state.courses.map((outline => {
								return(
									<Link to={`/view-program${outline.program}`}><li className="prog-list-course-outline" onClick={this.getPostGs}>
										<table style={{width: '100%'}}><tr style={{width: '100%'}}><td><span class="fa fa-circle-o"></span></td><td style={{width: '90%'}}><span style={{width: '80%'}}>{outline.program}</span></td></tr></table>
									</li></Link>
								)
							})) }
						</ul>
                    </div>
				</div>
				<div className="col-lg-10"   style={{backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
                    <div className="col-lg-12 mb-lg-0 mb-5">
						<br/>
                        <h6 className="hny-title" style={{fontSize: '38px', color: 'orange'}}>{this.state.courses_title} Programs</h6>
						<br/>
						<p className="my-4" style={{fontSize: '18px'}}>{this.state.courses_desc}</p>
                        <br/>
                        <div class="input-container">
							<i class="fa fa-search icon"></i>
							<input class="input-field" type="text" placeholder="Search for programs by name or keywords" name="usrnm"/>
							<button className="search_btn" style={{borderRadius:'0rem',backgroundColor: '#f87a21'}}>Search</button>
						</div>
                        <br/>
                    </div>
					<section className="w3l-wecome-content-6">
						<div className="ab-content-6-mian py-5">
							<div className="container py-lg-5" style={{paddingBottom: '0rem !important'}}>
								<div className="welcome-grids row">
									<div className="col-lg-12 mb-lg-0 mb-5" style={{borderBottom: 'orange 5px solid', padding: '0'}}>
										<table style={{width: '100%', height: '100%'}}>
											<tr>
												<td className="text-left" style={{backgroundColor: '#003d5e', textAlign: 'center', color: '#FFF', padding: '50px 20px 20px 40px'}}>
													<h4>Thinking about studying with us?</h4>
													<p className="my-5" style={{color: '#FFF'}}>We've compiled the most important things you need to know about Victoria University into this handy viewbook. Learn about everything from the Benefits of studying online to convocating from an online university.</p>
													<p className="my-4"><button className="btn_link2" onClick={this.toVclass}>Click Here to Access</button></p>
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div className="" style={{height: '60px', margin: '0 auto'}}>
						<table style={{width: '100%', height: '100%'}}>
							<tr>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#003d5e'}}><span className="fa fa-info-circle" style={{fontSize: '20px', color: '#fff'}}></span></td>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', paddingLeft: '10px'}}><b>
									Our transfer credit assessment tool can give you an idea of how your previous courses might transfer to VU.</b></td>
							</tr>
						</table>
					</div>
					<br/>
					<p className="my-4 text-center" style={{fontSize: '24px', fontWeight: 550}}>{this.state.courses_title}</p>
					<div className="container py-lg-5" style={{maxWidth: '100%', margin: '0rem', padding: '0rem !important'}}>
						<div className="" style={{}}>
							<CourseList courses={this.state.courses} />
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