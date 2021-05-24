import React, { Component } from 'react';

class GetInfo extends Component {
    render(){
        return(
            <React.Fragment>
	<section class="w3l-features-1">
		<div class="features-1-mian py-5" style={{backgroundColor: '#FFF'}}>
			<div class="container py-lg-5">
				<div class="row grids-innf my-lg-5" style={{border: '#CCC 1px solid'}}>
					<div class="features-1-info col-lg-3 col-md-3" style={{borderRight: '#c2c2c2 1px solid', padding: '0'}}>
						<img src="assets/images/form.png" class="img-fluid" id="fixer4"  alt="img"/>
					</div>
					<div class="features-1-info col-lg-9 col-md-9">
						<br/>
						<div class="features-1-info-icon text-center">
							<span class="fa fa-fax" style={{color: '#0077b5', fontSize: '90px'}}></span>
						</div>
						<div class="features-1-info-info text-center">
							<h6 class="hny-title text-center" style={{color: '#025683', fontSize: '32px'}}>Get information about VU</h6>
							<p class="text-center" style={{fontSize:'18px'}}>We have information to share with you!</p>
						</div>
						<div class="container_form">
							<form action="/action_page.php">
								<div class="row_form">
									<div class="col-75">
									<input type="text" id="fname" class="form_fields" name="firstname" placeholder="Your name.."/>
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
									<input type="text" id="lname" class="form_fields" name="lastname" placeholder="Your last name.." />
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
									<input type="text" id="lname" class="form_fields" name="email" placeholder="Your email.."/>
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
										<div class="features-1-info col-lg-12 col-md-12" style={{height: '60px', width: '100%', marginTop: '40px !important', padding: '0'}}>
											<table style={{width: '100%', height: '100%'}}>
												<tr>
													<td class="text-left" style={{backgroundColor: '#dadada', textAlign: 'center', color: '#333', paddingLeft: '20px'}}>Areas Of interest</td>
												</tr>
											</table>
										</div>
										<div class="" style={{width: '100%', backgroundColor: '#fff', border: '#CCC 1px solid', padding: '15px'}}>
											<p><input type="radio" id="1" name="gender" value="male"/>&nbsp;&nbsp;Apply for undergraduate program</p>
											<p><input type="radio" id="2" name="gender" value="male"/>&nbsp;&nbsp;Apply for graduate program</p>
											<p><input type="radio" id="3" name="gender" value="male"/>&nbsp;&nbsp;Take an undergraduate course</p>
											<p><input type="radio" id="4" name="gender" value="male"/>&nbsp;&nbsp;Take a course to transfer credit back to my university</p>
										</div>
									</div>
								</div>
								<div class="row_form">
									<div class="col-75">
									<input type="checkbox" id="lname" class="" name="" required/>&nbsp;<span>Yes, I would like to receive communications via e-mail from Victoria University</span>
									</div>
								</div>
								<div class="row_form">
									<input type="submit" value="Get Started" class="applier"/>
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