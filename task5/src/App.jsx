import React, { useState, useEffect } from "react";

const MultiEffectComponent = () => {
  const [data, setData] = useState(null); // State to store fetched data
  const [count, setCount] = useState(0); // State for a counter

  // useEffect for fetching data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures it runs only once

  // useEffect for updating the document title whenever 'count' changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Document title updated to: Count: ${count}`);
  }, [count]); // Runs whenever the 'count' state changes

  // JSX to render the component
  return (
    <div>
      <h1>Multiple useEffect Hooks</h1>

      {/* Data fetched */}
      <section>
        <h2>Fetched Data:</h2>
        {data ? (
          <p>
            <strong>{data.title}</strong>: {data.body}
          </p>
        ) : (
          <p>Loading data...</p>
        )}
      </section>

      {/* Counter */}
      <section>
        <h2>Counter:</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </section>
    </div>
  );
};

export default MultiEffectComponent;
