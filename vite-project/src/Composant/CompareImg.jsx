import React from "react";
import CompareImage from "react-compare-image";

function ImageComparison() {
  return (
<div className="w-full max-w-[600px] sm:min-w-[300px]">

      <CompareImage
        leftImage="avant_maison.jpg"
        rightImage="apres_maison.jpg"
        sliderLineColor="#fff"
      />
    </div>
  );
}

export default ImageComparison;
