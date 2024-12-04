import React, { useState, useEffect } from "react";

const WebSocketComponent = () => {
  const [message, setMessage] = useState(null); // State to store the latest message received
  const [connectionStatus, setConnectionStatus] = useState("Connecting..."); // Connection status

  useEffect(() => {
    // Create a new WebSocket connection
    const socket = new WebSocket("wss://example.com/socket"); // Replace with your WebSocket server URL

    // Set up the WebSocket event listeners
    socket.onopen = () => {
      setConnectionStatus("Connected");
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      setMessage(event.data); // Update the state with the received message
      console.log("Message received:", event.data);
    };

    socket.onerror = (error) => {
      setConnectionStatus(`Error: ${error.message}`);
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      setConnectionStatus("Disconnected");
      console.log("WebSocket disconnected");
    };

    // Cleanup function to close the WebSocket connection when the component unmounts
    return () => {
      socket.close();
      console.log("WebSocket connection closed");
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  // JSX to render the component
  return (
    <div>
      <h1>WebSocket Example</h1>
      <p>Status: {connectionStatus}</p>
      <p>Received Message: {message}</p>
    </div>
  );
};

export default WebSocketComponent;



