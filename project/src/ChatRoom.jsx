import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ChatRoom() {
  const { roomId } = useParams();  // Get roomId from URL
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Connect to WebSocket server
    const socket = new WebSocket('ws://localhost:5000');
    
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      ws.send(message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    }
  };

  return (
    <div className="chat-room bg-gray-100 h-screen flex flex-col">
      <div className="chat-header bg-blue-600 text-white p-4">
        <h2>Room: {roomId}</h2>
      </div>

      <div className="messages flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((msg, index) => (
          <div key={index} className="message p-2 mb-2 bg-blue-50 rounded-md shadow-md">
            {msg}
          </div>
        ))}
      </div>

      <div className="message-input flex items-center p-4 bg-gray-800 text-white">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 rounded-md mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 p-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
