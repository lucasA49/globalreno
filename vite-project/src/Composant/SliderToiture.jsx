import React from "react";
import CompareImage from "react-compare-image";

function SliderToiture() {
  return (
  <div className="w-full max-w-[600px] sm:min-w-[300px]">

      <CompareImage
        leftImage="/avant_toit.png"
        rightImage="/apres_toit.png"
        sliderLineColor="#fff"
      />
    </div>
  );
}

export default SliderToiture;
