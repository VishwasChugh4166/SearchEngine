import React from "react";

function ImageShow({ image }) {
  return (
    <div>
      <div className="image-show">
        <div>
          <img src={image.urls.full} alt={image.alt_description}></img>
        </div>
        <hr></hr>
        <p>{image.user.name}</p>
      </div>
    </div>
  );
}

export default ImageShow;
