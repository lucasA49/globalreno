import React from "react";
import CompareImage from "react-compare-image";

function ImageComparison() {
  return (
    <div style={{ minWidth: "600px",minHeight:"300px", maxWidth:"800px", maxHeight:"400px"
     }}>
      <CompareImage
        leftImage="avant_maison.jpg"
        rightImage="apres_maison.jpg"
        sliderLineColor="#fff"
      />
    </div>
  );
}

export default ImageComparison;
