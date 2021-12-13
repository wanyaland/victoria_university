import React from 'react';

const GalleryList = (props) => {
    return(
        <React.Fragment>
            {props.gallerylister.map((item) => (
                <div className="col-md-4 filter photo" key={item.id}>
                    <div className="each-item gallery_img" onClick={() => this.view_photo(item.id)}>
                        <img className="port-image img-fuild" src={`assets/images/gallery/${item.name}`} alt="" />
                    </div>
                    <div id={item.id} className="modal_gallery">
                        <div className="modal-content_gallery">
                        <span className="close_gallery" onClick={() => this.close_bio(item.id)}>&times;</span>
                        <br/><br/>
                            <img className="port-image img-fuild" src={`assets/images/gallery/${item.name}`} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}
export default GalleryList