import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WelcomeBanner } from '../sections/Dashboard/WelcomeBanner';

const banners = [
  <WelcomeBanner key={1} />
];

const settings = {
  dots: true,
  infinite: banners.length > 1, // Set infinite to true only if there's more than 1 banner
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // Adjust as needed
};

export function NewsCarousel() {
  return (
    <Slider {...settings}>
      {banners.length === 1 ? (
        <div>
          {banners[0]}
        </div>
      ) : (
        banners.map((banner, index) => (
          <div key={index}>
            {banner}
          </div>
        ))
      )}
    </Slider>
  );
}
