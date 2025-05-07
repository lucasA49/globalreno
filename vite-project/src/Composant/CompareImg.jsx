import React from "react";
import CompareImage from "react-compare-image";

function ImageComparison() {
  return (
    <div style={{ minWidth: "600px", maxWidth:"300px", maxHeight:"300px",minHeight:"300px", margin: "0 0"
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
