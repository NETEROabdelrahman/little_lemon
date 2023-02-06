import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import BookingPage from './components/BookingPage ';
import ConfirmedBooking from './components/ConfirmedBooking ';
import Header from './components/Header'
import Home from './components/Home';
import './index.css'


const App = () => {
  return (
    <Router>
      

      <Header/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='bookingPage' element={<BookingPage/> } />
        <Route path='ConfirmedBooking' element={<ConfirmedBooking /> } />
      </Routes>
      
    </Router>
  )
};

export default App