import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Data from './data/gallery.json';
import GalleryList from './gallery-list';

class Gallery extends Component{
	constructor(props) {
		super(props);
		this.state = {
			gallerylister: [],
		}
		this.view_photo = this.view_photo.bind(this);
		this.close_bio = this.close_bio.bind(this);
	}
	componentDidMount(){
		this.getGallery()
	}
	getGallery = () => {
		this.setState({
			gallerylister: Data,
		})
	}
    view_photo(id) {
		console.log(id, "ID")
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
				<GalleryList gallerylister={this.state.gallerylister} view_photo={this.view_photo} close_bio={this.close_bio}/>
			</div>
			<br/>
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