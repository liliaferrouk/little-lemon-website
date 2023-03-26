import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <body>
      <Header/>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </Router>
      <Footer/>
    </body>
  );
}

export default App;
