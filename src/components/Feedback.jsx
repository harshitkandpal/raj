import React from 'react';
import feedbacks from '../feedback.json';
import FCard from './FCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-gray-300 p-10'>
        <h1>
            Our Customers 
        </h1>
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <FCard key={index} feedback={feedback} />
        ))}
      </Slider>
    </div>
  );
}

export default Feedback;
