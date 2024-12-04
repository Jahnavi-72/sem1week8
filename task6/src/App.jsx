import React, { useState, useEffect } from "react";

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Current input value
  const [debouncedTerm, setDebouncedTerm] = useState(""); // Debounced value

  // useEffect to update the debounced term after a delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce delay

    // Cleanup timeout if input changes before delay ends
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]); // Re-run when 'searchTerm' changes

  // useEffect to simulate API call with the debounced term
  useEffect(() => {
    if (debouncedTerm) {
      console.log(`Searching for: ${debouncedTerm}`);
      // Simulate an API call here
    }
  }, [debouncedTerm]); // Re-run when 'debouncedTerm' changes

  // JSX for rendering
  return (
    <div>
      <h1>Debounced Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Search Term: {searchTerm}</p>
      <p>Debounced Term: {debouncedTerm}</p>
    </div>
  );
};

export default DebouncedSearch;
