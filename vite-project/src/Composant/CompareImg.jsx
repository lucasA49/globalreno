import React from "react";
import CompareImage from "react-compare-image";

function ImageComparison() {
  return (
    <div style={{ minWidth: "300px", maxWidth:"300px", maxHeight:"300px",minHeight:"300px", margin: "0 0"
     }}>
      <CompareImage
        leftImage="entreprise-fr.png"
        rightImage="rge.png"
        sliderLineColor="#fff"
      />
    </div>
  );
}

export default ImageComparison;
