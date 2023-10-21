import React, { Component } from "react";
import Slider from "react-slick";
function SlickTest() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
        <div style={{ width: 50 }}>
          <img src="https://coralecom.cloud6.ae/media/product/Versace-Crystal-Noir-For-Women-Eau-De-Parfum-50ML.png" />
        </div>
      </Slider>
    </div>
  );
}
export default SlickTest;
