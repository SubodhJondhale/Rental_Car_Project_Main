import "./navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };
  const handleBooking = ()=> {
    navigate('/mybooking')
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img
          src='https://media.istockphoto.com/id/1290071290/vector/rental-car-icon.jpg?s=612x612&w=0&k=20&c=q4EsvU3jJJYbcZTJ1EzKh6c-Dvy39HagvAUgTCRK9bE='
          alt='Logo'
        />
      </div>
      {!isLoggedIn && (
        <div className='redirectButton'>
          <Link to='/register'>User Login</Link>
        </div>
      )}
      {isLoggedIn && (
        <div className='navbar-buttons'>
          <button className='booking-button' onClick={handleBooking}>My Booking</button>
          <button className='logout-button' onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
