import React, { useState, useEffect } from "react";

const ExampleComponent = ({ watchedProp }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("watchedProp or count has changed");
    console.log("watchedProp:", watchedProp);
    console.log("count:", count);
  }, [watchedProp, count]); 

  return (
    <div>
      <h1>Dependency Array Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default ExampleComponent;
