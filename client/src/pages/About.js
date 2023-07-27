import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/about-us.css';
// import image1 from '../pictures/1.jpg';
// import image2 from '../pictures/2.jpg';
// import image3 from '../pictures/3.jpg';

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-container">
      <h2>About Us</h2>
      <Slider {...settings}>
        {/* <div>
          <img src={image1} alt="image-1" className="about-avatar" />
        </div>
        <div>
          <img src={image2} alt="image-2" className="about-avatar" />
        </div>
        <div>
          <img src={image3} alt="image-3" className="about-avatar" />
        </div>
        <div>
          <img src={image4} alt="image-4" className="about-avatar" />
        </div>
        <div>
          <img src={image5} alt="image-5" className="about-avatar" />
        </div> */}
        {/* Add more image slides as needed */}
      </Slider>
      <p className="about-bio"> As passionate FullStack web developers, We are embracing the intersection of technology, music, and mindfulness. </p>
    </div>
  );
};

export default About;