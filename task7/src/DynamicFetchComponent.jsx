import React, { useState, useEffect } from "react";

const DynamicFetchComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null); // State to store fetched user data
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(null); // State for error handling

  // useEffect to fetch user data when 'userId' changes
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error(`Error fetching user data: ${response.status}`);
        }
        const result = await response.json();
        setUserData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData(); // Trigger fetch when 'userId' is provided
    }
  }, [userId]); // Dependency array includes 'userId'

  // JSX to render the component
  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Details</h1>
      {userData ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default DynamicFetchComponent;
