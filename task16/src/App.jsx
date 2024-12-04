import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import NotFound from './Components/NotFound.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
