import React, { useState, useEffect } from "react";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date()); // State to store the current time

  // useEffect to set up an interval that updates the time every second
  useEffect(() => {
    // Function to update time
    const intervalId = setInterval(() => {
      setTime(new Date()); // Set the current time to the state
    }, 1000); // 1000ms = 1 second

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId); // Clear the interval
      console.log("Interval cleared");
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // JSX to render the component
  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p> {/* Display time in a readable format */}
    </div>
  );
};

export default ClockComponent;
