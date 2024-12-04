import React, { useState, useEffect } from "react";

// Component definition
const ResizeListener = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define the event listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the event listener on component mount
    window.addEventListener("resize", handleResize);
    console.log("Resize event listener added");

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize event listener removed");
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // JSX for rendering
  return (
    <div>
      <h1>Window Resize Listener</h1>
      <p>Current window width: {windowWidth}px</p>
    </div>
  );
};

export default ResizeListener;
