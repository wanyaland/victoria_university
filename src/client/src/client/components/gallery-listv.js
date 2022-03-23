import React from "react";

const GalleryListv = (props) => {
  return (
    <React.Fragment>
      {props.gallerylisterv.map((item) => (
        <div
          className="col-md-4 filter photo"
          key={item.id}
          style={{ marginBottom: "2rem" }}
        >
          <div
            className="each-item gallery_img"
            onClick={props.view_photov.bind(this, item.id)}
          >
            <video
              className="port-image img-fuild"
              src={`assets/images/gallery/${item.name}`}
              alt=""
              muted
            />
          </div>
          <div id={item.id} className="modal_gallery">
            <div className="modal-content_gallery">
              <span
                className="close_gallery"
                onClick={props.close_biov.bind(this, item.id)}
              >
                &times;
              </span>
              <br />
              <br />
              <video
                className="port-image img-fuild"
                src={`assets/images/gallery/${item.name}`}
                alt=""
                style={{ width: "100%", height: "100%" }}
                controls
                autoPlay
                muted
              />
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default GalleryListv;
