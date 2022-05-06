import React from 'react';
import Homepage from './pages/Homepage'
import ContactUs from './pages/ContactUs';
import {Route, Routes} from 'react-router-dom'
import BecomeHelper from './pages/BecomeHelper';
import CreateAccount from './pages/CreateAccount';
import './App.css';
import BookService from './pages/BookService';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/become-helper" element={<BecomeHelper />}/>
        <Route path="/create-account" element={<CreateAccount />}/>
        <Route path="/book-service" element={<BookService />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
