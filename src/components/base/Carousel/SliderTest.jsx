import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const SliderTest = () => { 
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    speed: 500
  };


    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
            <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
          <div>
          <img src="https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  
}

