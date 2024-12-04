import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Hook to manage query parameters
  const [query, setQuery] = useState('');

  
  useEffect(() => {
    if (!searchParams.get('query')) {
      setSearchParams({ query: 'default' }); // Set default query parameter
    } else {
      setQuery(searchParams.get('query')); // Sync state with query parameter
    }
  }, [searchParams, setSearchParams]);

  // Handle input change and update the URL query parameter
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Update the query parameter in the URL
    setSearchParams({ query: value });
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type your search here..."
      />
      <p>
        Search Results for: <strong>{query}</strong>
      </p>
    </div>
  );
};

export default Search;
