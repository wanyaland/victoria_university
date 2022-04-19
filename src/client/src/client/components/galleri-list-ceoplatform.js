import React from "react";

const GalleryListCEO = (props) => {
  return (
    <React.Fragment>
      {props.gallerylisterceo.map((item) => (
        <div
          className="col-md-4 filter photo"
          key={item.id}
          style={{ marginBottom: "2rem" }}
        >
          <div
            className="each-item gallery_img"
            onClick={props.view_photoceo.bind(this, item.id)}
          >
            <img
              className="port-image img-fuild"
              src={`assets/images/gallery/CEOplatform/${item.name}`}
              alt=""
            />
          </div>
          <div id={item.id} className="modal_gallery">
            <div className="modal-content_gallery">
              <span
                className="close_gallery"
                onClick={props.close_bioceo.bind(this, item.id)}
              >
                &times;
              </span>
              <br />
              <br />
              <img
                className="port-image img-fuild"
                src={`assets/images/gallery/CEOplatform/${item.name}`}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default GalleryListCEO;
