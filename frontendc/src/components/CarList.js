import React, { useState, useEffect } from "react";
import "../style/CarList.css";
import car1 from "../assets/carlist1.jpg";
import car2 from "../assets/carlist2.jpg";
import car3 from "../assets/carlist3.jpg";
import car4 from "../assets/carlist4.webp";
import car5 from "../assets/carlist5.jpg";
import car6 from "../assets/carlist6.jpg";
import car7 from "../assets/carlist7.jpg";
import car8 from "../assets/carlist8.webp";

function CarList() {
  const [cars, setCars] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    address: "",
  });
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchCars = () => {
      const carData = [
        { id: 1, name: "Toyota Corolla", price: "$40/day", image: car1, description: "A reliable sedan for comfortable rides." },
        { id: 2, name: "Ford Mustang", price: "$80/day", image: car2, description: "A stylish sports car for thrilling adventures." },
        { id: 3, name: "Tesla Model 3", price: "$100/day", image: car3, description: "An electric car with cutting-edge technology." },
        { id: 4, name: "Tesla Model 3", price: "$100/day", image: car4, description: "An electric car with cutting-edge technology." },
        { id: 5, name: "Tesla Model 3", price: "$100/day", image: car5, description: "An electric car with cutting-edge technology." },
        { id: 6, name: "Tesla Model 3", price: "$100/day", image: car6, description: "An electric car with cutting-edge technology." },
        { id: 7, name: "Tesla Model 3", price: "$100/day", image: car7, description: "An electric car with cutting-edge technology." },
        { id: 8, name: "Tesla Model 3", price: "$100/day", image: car8, description: "An electric car with cutting-edge technology." },
      ];
      setCars(carData);
    };

    fetchCars();
  }, []);

  const handleBookNowClick = (car) => {
    setSelectedCar(car);
    setModalVisible(true);

    // Add 'visible' class to modal-overlay for smooth visibility
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.add('visible');
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);

    // Remove 'visible' class to hide modal-overlay
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('visible');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userDetails, car: selectedCar }),
    });

    if (response.ok) {
      alert("Booking successful!");
      setModalVisible(false);
      handleCloseModal();
    } else {
      alert("There was an error processing your booking.");
    }
  };

  return (
    <div className="car-list">
      <h1 className="car-list-title">Available Cars</h1>
      <div className="car-list-container">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h2 className="car-name">{car.name}</h2>
            <p className="car-description">{car.description}</p>
            <p className="car-price">{car.price}</p>
            <button className="book-now-button" onClick={() => handleBookNowClick(car)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={userDetails.name} onChange={handleInputChange} required />
              <label>Email:</label>
              <input type="email" name="email" value={userDetails.email} onChange={handleInputChange} required />
              <label>Phone:</label>
              <input type="text" name="phone" value={userDetails.phone} onChange={handleInputChange} required />
              <label>Purpose:</label>
              <textarea name="purpose" value={userDetails.purpose} onChange={handleInputChange} required />
              <label>Address:</label>
              <textarea name="address" value={userDetails.address} onChange={handleInputChange} required />
              <button type="submit">Submit Booking</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarList;
