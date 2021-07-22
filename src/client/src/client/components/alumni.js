import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Alumni extends Component {
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
					<span style={{color: '#EEE'}}>/ Alumni and Friends</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3l-apply-6">
	<div className="apply-info py-5">
		<div className="container py-lg-5">
			<br/>
			<br/>
			<br/>
			<br/>
            <br/>{/* 
			<div className="">
					<h4 className="text-left" style={{textTransform: 'capitalize'}}>ALUMNI</h4>
			</div> */}
			{/* <div style={{width: '10%', border: '#f89422 2px solid', display: 'subgrid'}} className="text-left"></div> */}
			{/* 
            <p className="text-left">VU’s 2020 Volunteer Service Award Recipient</p>
			<br/>
            <button className="btn_link">Read More</button> */}
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<div className="apply-grids-info">
				<div className="mt-lg-5 mt-4 justify-content-center">
					<div className="appyl-sub-icon-info text-center">
					<div className="">
					<h4 className="text-center"><span style={{borderLeft: '8px #D4484A solid'}}>&nbsp;Alumni</span></h4>
				</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<br/>
<br/>
<section className="w3l-wecome-content-6">
	<div className="ab-content-6-mian py-5">
		<div className="container py-lg-5">
			<div className="welcome-grids row">
				<div className="col-lg-12 welcome-image">
					<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 10px solid', padding: '40px'}}>
						<h4 className="hny-title text-center" style={{color: '#0077b5', fontSize: '36px'}}>Alumni</h4>
                        <p className="text-center my-4">"
						As a graduate or ‘alumnus’ of Victoria University, you automatically become part of our extensive alumni community which brings with it a host of benefits before and after graduation.
						We strive to ensure that each member of our alumni community enjoys the benefits of studying at Victoria University, beyond one’s graduation.</p>
						<p className="my-4">We believe that our commitment to work-integrated-learning sets our alumni apart from their peers from other universities. Our students enter the job market with world-class qualifications and work experience.</p>
						<p className="my-4">We are proud that so many of our alumni choose to give something back to the university, not only through financial donations but by providing practical support and career guidance to current students which equally gives the latter a head start as one enters the world of work.</p>
						<p className="my-4">From guest lectures and mentoring to providing career afternoons and work experience placements, our alumni are actively encouraged to share their knowledge and experience with current students.</p>
						<p className="my-4">Our current students have many opportunities to meet our alumni in both social and professional settings where personal and career experiences are shared.</p>
						<p className="my-4">One more promise to our students; after you graduate, you will continue to have access to a wide range of services and facilities that will support both your personal and professional development."</p>
					</div>
				</div>	
			</div>
		</div>
	</div>
</section>
<section className="w3l-specification-6" id="credit">
	<div className="specification-content py-5">
		<div className="container py-lg-5">
			<h3 className="hny-title text-center"><i>Alumni Testimonies</i></h3>
			<div className="mission-grids-info row">
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p className="my-2" style={{fontWeight: '500', fontSize: '24px'}}>Marlie Keishamaza</p>
					<p className="my-2">Social Media Influencer and Entrepreneur</p>
					<p className="my-2">Diploma in Journalism and Media Studies, Class of 2019</p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
						<p>Victoria University gave me a platform to practice my passions and exercise my gifts. I had several opportunities to emcee events and speak to different people, which is what I love to do. My public speaking career kicked off at Victoria University with the support of many friends I met at VU, many of whom have become family to me. Vu provided me with countless opportunities to nurture my skill and talent.  I am grateful for the time  spent at VU and would highly encourage it if you are looking for a place that will hone your talents outside of a classroom environment</p>
				</div>
				<hr className="text-center" style={{color:'#000', width: '90%'}}></hr>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p>Victoria University is a place which gives you the opportunity to not only learn theory but also nurtures non-classroom related skills such as presentations to audiences and report writing to mention but a few. For those looking to enter the field of public health, the faculty has a policy that three internships must be completed as one of the requirements to graduate, giving the students an opportunity to practice what they learnt in class.</p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p className="my-2" style={{fontWeight: '500', fontSize: '24px'}}>Sempa Aron Kitratius</p>
					<p className="my-2">Lecture Assistant at Victoria University</p>
					<p className="my-2">Bachelor of Science in Public Health, Class of 2019</p>
				</div>
				<hr className="text-center" style={{color:'#000', width: '90%'}}></hr>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p className="my-2" style={{fontWeight: '500', fontSize: '24px'}}>Mariah Peggy Nabunya</p>
					<p className="my-2">Bachelor of Science in Public Health, Class of 2019</p>
					<p className="my-2">Diploma in Journalism and Media Studies, Class of 2019</p>
					<p className="my-2">Guild President, 2017 – 2019</p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
						<p>At Victoria University, learning is student centered, diverse and very practical. The university has an open door policy which enables students to easily access their lecturers, deans and the whole administration at large. During my time at the university, I always felt valued because my concerns were always addressed and my learning needs catered for. Victoria University greatly supports its students who are juggling entrepreneurship and education. It encourages its students to be creative and business-minded.</p>
				</div>
				<hr className="text-center" style={{color:'#000', width: '90%'}}></hr>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p>I graduated with a Bachelor of Business Administration. Studying this course at VU exposed me to an opportunity to work with Vivo Energy, Africa’s Giant oil and Gas Company, both as an intern and later as an employee. I would recommend any student to join this prestigious university, since learning at Victoria University is not just about education but exposure to opportunities. Join us and let us connect via #ProudVUAlumni.</p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p className="my-2" style={{fontWeight: '500', fontSize: '24px'}}>Fred Poggo</p>
					<p className="my-2">Alumni President</p>
					<p className="my-2">Bachelor of Business Administration, Class of 2017</p>
				</div>
				<hr className="text-center" style={{color:'#000', width: '90%'}}></hr>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
					<p className="my-2" style={{fontWeight: '500', fontSize: '24px'}}>Peace Monica Pimer</p>
					<p className="my-2">Founder and CEO</p>
					<p className="my-2">Nile Girls Forum</p>
				</div>
				<div className="mission-gd-right col-lg-6 pl-lg-4">
						<p>Victoria University offers a great learning experience and at the same time allows you to explore beyond the classroom. It has a wonderful social environment that promotes ethical decisions. Not only is it very supportive of students and alumni initiatives, like Nile Girls Forum, it also prepared me for the corporate world and I have no regrets.</p>
				</div>
			</div>
        </div>
	</div>
</section>
<br/>
<section className="w3l-footer-16 text-center">
    <div className="container">
        <h4 className="hny-title text-left" style={{color: '#025886', fontSize: '35px'}}>Follow VU on social media</h4>
    </div>
    <div className="container">
        <div className="columns-2 mt-md-0 mt-3">
            <ul className="social text-left">
                <li><a href="https://www.facebook.com/VUKampala" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-facebook" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://www.linkedin.com/company/victoria-university-kampala/" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-linkedin" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://twitter.com/VUKampala" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-twitter" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://www.instagram.com/victoriauniversity_kampala/" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-instagram" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>&nbsp;
                <li><a href="https://www.youtube.com/user/vukampala" style={{backgroundColor: '#FFF', color: '#055079'}}><span className="fa fa-youtube-play" aria-hidden="true" style={{fontSize: '35px'}}></span><i></i></a>
                </li>
            </ul>
        </div>
    </div>
</section>
<br/>
<br/>
<br/><br/>
            <Footer />
            </React.Fragment>
        )
    }
}

export default Alumni;