import React from "react";
import CompareImage from "react-compare-image";

function SliderIsolation() {
  return (
    <div style={{  minWidth: "550px",minHeight:"650px", maxWidth:"600px", maxHeight:"500px",
     }}>
      <CompareImage
        leftImage="/avant_facade.png"
        rightImage="/apres_facade.png"
        sliderLineColor="#fff"
      />
    </div>
  );
}

export default SliderIsolation;
