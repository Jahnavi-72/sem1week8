import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
