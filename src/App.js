import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [availableTimes, setAvailablTimes] = useState([
    '10:00 AM',
    '12:00 PM',
    '02:00 PM',
    '04:00 PM',
    '06:00 PM',
    '08:00 PM',
])
  return (
    <body>
      <Header/>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/booking" element={<BookingPage times={availableTimes} />}/>
        </Routes>
      </Router>
      <Footer/>
    </body>
  );
}

export default App;
