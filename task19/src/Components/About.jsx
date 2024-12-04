import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Scroll down to test the scroll restoration.</p>
      {[...Array(50)].map((_, index) => (
        <p key={index}>This is line {index + 1}</p>
      ))}
    </div>
  );
};

export default About;
