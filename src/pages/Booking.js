import React from "react";
import { useNavigate } from "react-router-dom";
import Restaurant from "../assets/Restaurant.jpg";
import BookingForm from "../components/BookingForm";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <main className="booking">
      <section>
        <img
          src={Restaurant}
          alt="Our outdoor ambience"
          style={{ borderRadius: "8px", width: "100%"   }}
        />
      </section>
      <section>
        <BookingForm navigate={navigate} />
      </section>
    </main>
  );
};

export default Booking;
