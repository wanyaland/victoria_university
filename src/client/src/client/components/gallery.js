import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom'


class Gallery extends Component{
    view_photo(id) {
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
					<span style={{color: '#EEE'}}>/ Gallery</span>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="w3-gallery">
	<div className="porfolio-inf py-5">
		<div className="container pt-lg-5 pb-lg-4" style={{maxWidth: '90%'}}>
			<div className="row title-content">
				<div className="col-lg-4 title-left">
				<h6 className="hny-title" style={{fontSize: '46px',  color: '#f74040', fontWeight: '600'}}>Gallery</h6>
				</div>
			</div>
			<br />

			<div className="row">
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div className="row">
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div className="row">
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div className="row">
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
				<div className="col-md-4 filter photo">
					<div className="each-item gallery_img" onClick={() => this.view_photo("photo_1")}>
						<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" />
					</div>
					<div id="photo_1" className="modal_gallery">
						<div className="modal-content_gallery">
						<span className="close_gallery" onClick={() => this.close_bio("photo_1")}>&times;</span>
						<br/><br/>
							<img className="port-image img-fuild" src="assets/images/bg3.jpg" alt="" style={{width: '100%', height: '100%'}} />
						</div>
					</div>
				</div>
			</div>
			<br/>
		</div>
	</div>
</section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Gallery;