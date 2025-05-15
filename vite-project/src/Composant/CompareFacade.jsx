import React from "react";
import CompareImage from "react-compare-image";

function ImageFacade() {
  return (
<div className="w-full max-w-[600px] sm:min-w-[300px]">

      <CompareImage
        leftImage="/avant_facade.png"
        rightImage="/apres_facade.png"
        sliderLineColor="#fff"
      />
    </div>
  );
}

export default ImageFacade;
