import React, { useState } from "react";
import DynamicFetchComponent from "./DynamicFetchComponent";

const App = () => {
  const [userId, setUserId] = useState(1); // State to manage the current user ID

  return (
    <div>
      <h1>Dynamic Fetch Example</h1>
      <button onClick={() => setUserId((prev) => (prev === 10 ? 1 : prev + 1))}>
        Fetch Next User
      </button>
      <DynamicFetchComponent userId={userId} />
    </div>
  );
};

export default App;
