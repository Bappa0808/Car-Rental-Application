import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic_1 from "../assets/car_1.jpg";
import pic_2 from "../assets/car_2.jpg";
import pic_3 from "../assets/car_3.jpg";
import pic_1r from "../assets/car_1r.png";
import pic_2r from "../assets/car_2r.png";
import pic_3r from "../assets/car_3r.png";
import "../style/Home.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="textSection">
          <span className="color"></span>
          <span className="color1"></span>
          <h2 className="heading">Drive Your Dreams</h2>
          <p className="subheading">
            Discover top-notch cars and premium services designed to fit your
            lifestyle.
          </p>
          <a href="/list-of-car">
          <button className="btn_home">Book Now</button>
          </a>
        </div>
        <div className="carouselWrapper">
          <Slider {...settings}>
            <div className="imageContainer">
              <img src={pic_1r} alt="Car 1" className="image" />
            </div>
            <div className="imageContainer">
              <img src={pic_2r} alt="Car 2" className="image" />
            </div>
            <div className="imageContainer">
              <img src={pic_3r} alt="Car 3" className="image" />
            </div>
          </Slider>
        </div>
      </div>

      {/* Car Categories Section */}
      <div className="section">
        <h3 className="sectionTitle">Car Categories</h3>
        <div className="categories">
          <a href="/list-of-car">
          <div className="categoryCard">
            <img src={pic_1} alt="SUV" className="categoryImage" />
            <p>SUV</p>
          </div>
          </a>
          <a href="/list-of-car">
          <div className="categoryCard">
            <img src={pic_2} alt="Sedan" className="categoryImage" />
            <p>Sedan</p>
          </div>
          </a>
          <a href="/list-of-car">
          <div className="categoryCard">
            <img src={pic_3} alt="Luxury" className="categoryImage" />
            <p>Luxury</p>
          </div>
          </a>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="section">
        <h3 className="sectionTitle">How It Works</h3>
        <div className="steps">
          <div className="stepCard">
            <h4>1. Select a Car</h4>
            <p>Browse through our wide selection of cars.</p>
          </div>
          <div className="stepCard">
            <h4>2. Book Online</h4>
            <p>Reserve your car with just a few clicks.</p>
          </div>
          <div className="stepCard">
            <h4>3. Enjoy Your Ride</h4>
            <p>Pick up your car and enjoy the drive.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="section">
        <h3 className="sectionTitle">Why Choose Us</h3>
        <div className="whyChoose">
          <div className="whyChooseCard">
            <p>24/7 Customer Support</p>
          </div>
          <div className="whyChooseCard">
            <p>Free Cancellation</p>
          </div>
          <div className="whyChooseCard">
            <p>Luxury Fleet</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="section">
        <h3 className="sectionTitle">Customer Testimonials</h3>
        <div className="testimonials">
          <div className="testimonialCard">
            <p>"Great service, would rent again!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonialCard">
            <p>"Best rental experience ever!"</p>
            <p>- Jane Smith</p>
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="section">
        <h3 className="sectionTitle">Special Offers</h3>
        <div className="offers">
          <div className="offerCard">
            <p>10% off for first-time users</p>
          </div>
          <div className="offerCard">
            <p>Free upgrade on luxury cars</p>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="bookingForm">
        <h3 className="sectionTitle">Book Your Car</h3>
        <form>
          <input type="text" placeholder="Pickup Location" className="input" />
          <input type="date" placeholder="Pickup Date" className="input" />
          <input type="date" placeholder="Return Date" className="input" />
          <button type="submit" className="button">Search Cars</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CarRental - All Rights Reserved</p>
        <div className="socialLinks">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

// <a href="/list-of-car" onClick={closeNavbar}>
//               Carlist
//             </a>