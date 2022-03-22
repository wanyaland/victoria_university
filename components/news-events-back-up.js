import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class NewsHub extends Component{
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
	 toNewshub = () => {
		 window.location.href = "news"
	 }
    render(){
        return(
            <React.Fragment>
                <section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4">
			<div className="row title-content">
				{/* <div className="col-lg-4 title-left">
					<h4 className="hny-title">News From The Hub</h4>
				</div> */}
			</div>
			<br />

			<div className="row">
				<div className="col-md-6 filter photo" style={{borderRight: '#CCC 1px solid'}}>
					<h6 className="hny-title text-left" style={{fontSize: '24px', color: '#0077b5'}}>News Feed</h6>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://dailyexpress.co.ug/2021/07/13/graduate-on-time-with-victoria-universitys-technologically-enabled-e-learning/" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>Graduate On Time With Victoria University’s Technologically Enabled E-learning</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> July 13, 2021</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://dailyexpress.co.ug/2021/06/28/victoria-university-success-formula-initiative-to-equip-students-with-employable-skills/" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>‘VU SUCCESS FORMULA’: An Initiative by Victoria University to equip students with employable skills</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> June 28, 2021</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://dailyexpress.co.ug/2021/06/24/victoria-university-free-data-students-to-aid-online-learning-amid-lockdown/" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>Victoria University offers ‘Free Data’ to students to aid online learning amid lockdown</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> June 24, 2021</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://dailyexpress.co.ug/2021/05/25/victoria-university-unveils-mobile-money-option-for-students-tuition-payment/" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>Victoria University unveils mobile money option for tuition payment</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> May 25, 2021</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
				</div>

				<div className="col-md-6 filter graphic photo">
					<h6 className="hny-title text-left" style={{fontSize: '24px', color: '#0077b5'}}>Events</h6>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://www.youtube.com/watch?v=s8G1ll5JFa8" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>Welcome to Victoria University video</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> Oct 18, 2013</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://youtu.be/SM8-tfrGePE" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>Victoria University video</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> Oct 14, 2013</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://www.youtube.com/watch?v=s8G1ll5JFa8" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>Welcome to Victoria University video</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> Oct 18, 2013</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
					<div className="course-content" style={{marginBottom: '10px'}}>
						<div className="course-info">
							{/* <Link to="/news" className="course-titlegulp-wrapper">
								<h3 className="course-title" data-gal="prettyPhoto[gallery]">Victoria University</h3>
							</Link> */}
							<h6><a className="course-instructor underline" href="https://youtu.be/SM8-tfrGePE" target="_blank" rel="noreferrer" style={{fontSize: '14.5px'}}>Victoria University video</a></h6>
						</div>
						<div className="course-divider">
							<div className="course-meta"><span className="course-students" title=""><span className="fa fa-clock-o" aria-hidden="true"></span> Oct 14, 2013</span>
							</div>
							{/* <button className="price-course btn" onClick={this.toNewshub}>More</button> */}
						</div>
					</div>
				</div>
			</div>
			<br/>
			{/* <div className="text-right">
				<p><Link className="logo-2" to="/news" style={{color: '#0077b5'}}  onMouseOver={this.change_icon.bind(this, "iconner5", "iconner6")} onMouseOut={this.change_icon2.bind(this, "iconner5", "iconner6")}>
					<span className="lohny-2"><span  id="iconner5" className="fa fa-chain programfa" style={{backgroundColor: '#f74040'}}></span><span id="iconner6" className="fa fa-arrow-right programfa hider" style={{backgroundColor: '#f74040', color: '#FFF'}}></span>&nbsp;</span><span className="underline">View all VU News</span>
					</Link>
				</p>
			</div> */}
		</div>
	</div>
</section>
<hr className="text-center" style={{color:'#000', width: '90%'}}></hr>
            </React.Fragment>
        )
    }
}

export default NewsHub;