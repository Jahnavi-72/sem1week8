import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Scroll down to test the scroll restoration.</p>
      {[...Array(50)].map((_, index) => (
        <p key={index}>This is line {index + 1}</p>
      ))}
    </div>
  );
};

export default Home;
