import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './Components/ContactForm';
import Success from './Components/Success';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Contact form route */}
        <Route path="/" element={<ContactForm />} />
        
        {/* Success page route */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
