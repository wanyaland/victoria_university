import React, { Component } from 'react';

class GetInfo extends Component {
    render(){
        return(
            <React.Fragment>
	<section className="w3l-features-1">
		<div className="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
			<div className="container py-lg-5">
				<div className="row grids-innf my-lg-5" style={{border: '#CCC 1px solid'}}>
					{/* <div className="features-1-info col-lg-3 col-md-3" style={{borderRight: '#c2c2c2 1px solid', padding: '0'}}>
						<img src="assets/images/path1.jpg" className="img-fluid" id="fixer4"  alt="img"/>
					</div> */}
					<div className="features-1-info col-lg-12 col-md-9">
						<br/>
						<div className="features-1-info-icon text-center">
							<span className="fa fa-fax" style={{color: '#0077b5', fontSize: '90px'}}></span>
						</div>
						<div className="features-1-info-info text-center">
							<h6 className="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Get information about VU</h6>
							<p className="text-center" style={{fontSize:'18px'}}>We have information to share with you!</p>
						</div>
						<div className="container_form">
							<form action="/action_page.php">
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="fname" className="form_fields" name="firstname" placeholder="Your name.."/>
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="lname" className="form_fields" name="lastname" placeholder="Your last name.." />
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<input type="text" id="lname" className="form_fields" name="email" placeholder="Your email.."/>
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
										<div className="features-1-info col-lg-12 col-md-12" style={{height: '60px', width: '100%', marginTop: '40px !important', padding: '0'}}>
											<table style={{width: '100%', height: '100%'}}>
											
												<tr>
													<td className="text-left" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '20px'}}>Areas Of interest</td>
												</tr>
												
											</table>
										</div>
										<div className="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 1px solid', padding: '15px'}}>
											<p><input type="radio" id="1" name="gender" value="male"/>&nbsp;&nbsp;Apply for undergraduate program</p>
											<p><input type="radio" id="2" name="gender" value="male"/>&nbsp;&nbsp;Apply for graduate program</p>
											<p><input type="radio" id="3" name="gender" value="male"/>&nbsp;&nbsp;Take an undergraduate course</p>
											<p><input type="radio" id="4" name="gender" value="male"/>&nbsp;&nbsp;Take a course to transfer credit back to my university</p>
										</div>
									</div>
								</div>
								<div className="row_form">
									<div className="col-75">
									<input type="checkbox" id="lname" className="" name="" required/>&nbsp;<span>Yes, I would like to receive communications via e-mail from Victoria University</span>
									</div>
								</div>
								<div className="row_form">
									<input type="submit" value="Get Started" className="applier"/>
								</div>
								</form>
						  </div>
					</div>
				</div>
			</div>
		</div>
	</section>
            </React.Fragment>
        )
    }
}

export default GetInfo;